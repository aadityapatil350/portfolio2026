import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on right now.",
  openGraph: {
    title: "Now | Aditya",
    description: "What I'm working on right now.",
    url: "https://adityapatil.work/now",
  },
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
              At work
            </h2>
            <p className="mt-3">
              I lead engineering at Renewalytics, but the title undersells it.
              On a normal week I&apos;m owning the engineering roadmap, managing
              servers and the wider infra, mentoring our junior devs through
              their tickets, jumping into client calls when something needs
              explaining, and writing the actual code. Day-to-day projects are
              Reflux, Excel Flow, and the internal invoice system. Right now
              I&apos;m building a Reflux chatbot so operators can query
              forecasts in natural language, and pushing RealSync (our realtime
              monitoring MVP) toward its first paying customer.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">
              Indie projects
            </h2>
            <div className="mt-3 space-y-4">
              <p>
                <span className="font-medium text-foreground">Social Copilot</span>{" "}
                is my main bet. Social media scheduler with AI video generation.
                MVP in progress. This is the one I want to turn into real indie
                income.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  GoSolarIndex and MSMEVault
                </span>{" "}
                started as weekend SEO experiments and they&apos;re actually
                working. I built both with Claude Code, let Claude AI handle
                the structured content and indexation strategy, and the
                organic response has been better than I expected. Not directory
                businesses I&apos;m trying to scale, just live tests for what
                SEO tactics actually move the needle in 2026.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">Learning</h2>
            <p className="mt-3">
              Going deep on AI agents and agent frameworks. Every indie product
              I ship from here on out is AI-native by default, not a feature
              bolted on. Reading code more than docs, building small
              throwaway agents to feel the rough edges.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">Reading</h2>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>&quot;Build&quot; by Tony Fadell</li>
              <li>Pieter Levels&apos; Make book (re-read)</li>
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
