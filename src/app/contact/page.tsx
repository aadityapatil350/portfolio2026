import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Need a full-stack MVP built or an AI workflow that replaces manual ops work? Let's talk.",
  openGraph: {
    title: "Contact | Aditya",
    description:
      "Need a full-stack MVP built or an AI workflow that replaces manual ops work? Let's talk.",
    url: "https://adityapatil.work/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s talk
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I take on a small number of freelance projects on the side. The
              fit is best if you need one of these:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  A full-stack MVP shipped in weeks, not months.
                </span>{" "}
                Next.js, Prisma, Postgres, Docker, deployed and working.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  AI workflow automation.
                </span>{" "}
                Replace the manual spreadsheet/email work your team is doing
                with an AI-driven pipeline. This is what I do at the day job.
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Not the right fit for pure design, native mobile, or long
              enterprise rollouts. Tell me what you&apos;re trying to build
              and I&apos;ll be honest about whether I&apos;m the right person.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <ContactForm />
      </section>
    </div>
  );
}
