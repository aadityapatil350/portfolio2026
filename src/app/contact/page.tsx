import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get in touch
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Have a project in mind, or just want to say hello? Fill out the
              form below and I&apos;ll get back to you.
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
