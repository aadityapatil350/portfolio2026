"use server";

import { z } from "zod";
import { headers } from "next/headers";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(200),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(1, "Message is required").max(5000),
  website: z.string().max(0), // honeypot, if filled, it's a bot
});

// Simple in-memory rate limiter: max 3 submissions per hour per IP
// Note: in a serverless environment (Vercel), this resets on cold starts.
// For production, consider Upstash Redis or a database-backed solution.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headersList.get("x-real-ip") || "unknown";
}

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    projectType: formData.get("projectType") as string,
    message: formData.get("message") as string,
    website: formData.get("website") as string,
  };

  // Honeypot check, silently succeed if filled
  if (raw.website && raw.website.length > 0) {
    return { success: true, message: "Message sent!" };
  }

  // Validate with Zod
  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }

  // Rate limit check using client IP
  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Too many submissions. Please try again later.",
    };
  }

  // Attempt to send via Resend if API key is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const toEmail = process.env.CONTACT_EMAIL || "hello@aditya.dev";

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toEmail],
        subject: `[Portfolio] New message from ${raw.name}`,
        text: [
          `Name: ${raw.name}`,
          `Email: ${raw.email}`,
          `Project Type: ${raw.projectType}`,
          ``,
          `Message:`,
          raw.message,
        ].join("\n"),
        replyTo: raw.email,
      });

      return { success: true, message: "Message sent! I'll get back to you soon." };
    } catch {
      console.error("Failed to send email via Resend");
      // Fall through to log-based fallback
    }
  }

  // Fallback: log the submission (no email sent)
  console.log("Contact form submission:", {
    name: raw.name,
    email: raw.email,
    projectType: raw.projectType,
    message: raw.message,
    ip,
  });

  return { success: true, message: "Message sent! I'll get back to you soon." };
}
