"use client";

import { useState, useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/fade-in";
import { Mail, ExternalLink, CheckCircle2 } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const [projectType, setProjectType] = useState("");

  if (state.success) {
    return (
      <FadeIn>
        <div className="max-w-lg space-y-4 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="text-xl font-semibold text-foreground">
            Message sent!
          </h2>
          <p className="text-muted-foreground">
            I&apos;ll get back to you soon.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="space-y-8">
      <FadeIn>
        <form action={formAction} className="max-w-lg space-y-6">
          {/* Honeypot field, hidden from real users */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Project type</Label>
            <Select name="projectType" value={projectType} onValueChange={setProjectType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="freelance">Freelance project</SelectItem>
                <SelectItem value="fulltime">Full-time role</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="hello">Just saying hi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full resize-none"
            />
          </div>

          {state.message && !state.success && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}

          <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
            {isPending ? "Sending..." : "Send message"}
          </Button>
        </form>
      </FadeIn>

      <FadeIn>
        <div className="max-w-lg border-t border-border pt-8 space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-foreground" />
            <span>
              Prefer email?{" "}
              <a
                href="mailto:hello@aditya.dev"
                className="text-accent-blue hover:underline"
              >
                hello@aditya.dev
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ExternalLink className="h-4 w-4 shrink-0 text-foreground" />
            <span>
              Find me on{" "}
              <a
                href="https://x.com/aditya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                X (Twitter)
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-foreground" />
            <span>
              Book a call , {" "}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                Schedule on Cal.com
              </a>
            </span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
