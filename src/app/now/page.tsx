import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on right now",
};

export default function NowPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Now
            </h1>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Last updated: May 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-2xl space-y-12 leading-relaxed text-muted-foreground">
          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">
              At Work
            </h2>
            <p className="mt-3">
              Building the Reflux weather chatbot and auto portal pusher at
              Renewalytics. The chatbot lets plant operators query forecast data
              in natural language instead of digging through dashboards. The
              portal pusher automatically generates and emails daily production
              reports to plant managers.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">
              On the Side
            </h2>
            <div className="mt-3 space-y-4">
              <p>
                Growing GoSolarIndex&apos;s SEO presence — currently ranking
                for 15+ city-level keywords and expanding to cover 100+ cities.
                Exploring monetization through featured installer listings.
              </p>
              <p>
                Planning the Social Copilot development sprint. The core
                architecture is designed — starting on the AI video generation
                pipeline next.
              </p>
              <p>
                MSMEVault is scaling the NBFC lead generation funnel.
                Partnerships with 3 NBFCs in pipeline.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">Learning</h2>
            <p className="mt-3">
              Going deeper on energy markets and power trading mechanics.
              Building intuition for how weather, demand patterns, and policy
              affect energy prices.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">Reading</h2>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>&quot;The Staff Engineer&apos;s Path&quot; by Tanya Reilly</li>
              <li>&quot;Build&quot; by Tony Fadell</li>
            </ul>
          </FadeIn>

          <FadeIn>
            <p className="pt-4 border-t border-border text-sm text-muted-foreground">
              This page was inspired by{" "}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                nownownow.com
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
