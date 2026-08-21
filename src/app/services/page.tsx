import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  IndianRupee,
  Clock,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Cpu,
  Database,
  Globe,
  Radio,
  FileSpreadsheet,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Engineering Services & Outcome Packages | Aditya Patil",
  description:
    "Fixed-scope, outcome-based engineering packages. Web application builds, reporting automation pipelines, custom internal dashboards, and AI integrations.",
  openGraph: {
    title: "Engineering Services & Outcome Packages | Aditya Patil",
    description:
      "Fixed-scope outcome packages for founders and ops leads. Web apps, reporting automation, internal panels, and AI workflows.",
    url: "https://adityapatil.work/services",
  },
};

const serviceIcons: Record<string, typeof Layers> = {
  "reporting-automation": FileSpreadsheet,
  "web-app-mvp-development": Layers,
  "internal-dashboards": Database,
  "ai-workflow-automation": Cpu,
  "ai-integration": Sparkles,
  "realtime-monitoring": Radio,
  "business-website": Globe,
  "codebase-rescue": ShieldAlert,
  "build-scoping-sprint": Sparkles,
};

export default function ServicesPage() {
  const allServices = Object.values(servicesData);
  const tier0 = allServices.filter((s) => s.slug === "build-scoping-sprint");
  const tier1 = allServices.filter((s) => s.tier.includes("Tier 1"));
  const tier2 = allServices.filter((s) => s.slug === "codebase-rescue");

  return (
    <div className="content-width px-4 sm:px-6 py-12 sm:py-20">
      {/* ── Header ── */}
      <section className="max-w-3xl">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            Outcome-Based Engagements
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Services &amp; Outcome Packages
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every engagement is fixed-scope, outcome-named, and sector-neutral.
            I don&apos;t bill vague hourly rates. You get a defined technical deliverable,
            a guaranteed timeline, and direct senior engineering.
          </p>
        </FadeIn>
      </section>

      {/* ── Tier 0: The Door Opener ── */}
      {tier0.length > 0 && (
        <section className="mt-14 max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Recommended First Step
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  100% Credited If You Proceed
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
                {tier0[0].title} — {tier0[0].priceFrom}
              </h2>
              <p className="mt-3 text-base text-foreground/90 leading-relaxed">
                A 3-day paid technical diagnostic. You get a written functional scope,
                database schema, architecture recommendation, fixed quote, and calendar timeline.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${tier0[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
                >
                  <span>View Scoping Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppCTA
                  context="Build Scoping Sprint"
                  label="Book Sprint on WhatsApp"
                  size="default"
                />
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Tier 1: Core Builds ── */}
      <section className="mt-20 max-w-4xl">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Core Production Builds
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Full Systems, Dashboards &amp; Pipelines
          </h2>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tier1.map((service, idx) => {
            const Icon = serviceIcons[service.slug] || Layers;
            return (
              <FadeIn key={service.slug} delay={0.05 * (idx + 1)}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-accent-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {service.timeline}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {service.painHeadline}
                    </p>

                    <div className="mt-4 border-t border-border pt-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      Range: {service.priceFrom}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-emerald-500 transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <WhatsAppCTA
                      context={`${service.title} card`}
                      label="Discuss"
                      variant="inline"
                      size="sm"
                    />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── Tier 2: High Urgency ── */}
      {tier2.length > 0 && (
        <section className="mt-20 max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                <ShieldAlert className="h-4 w-4" />
                <span>High Urgency Engagement</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
                {tier2[0].title} — {tier2[0].priceFrom}
              </h2>
              <p className="mt-3 text-base text-foreground/90 leading-relaxed">
                Inherited a half-finished build? Previous developer vanished?
                I audit, stabilise, document, and fix stalled codebases so your business can launch.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${tier2[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
                >
                  <span>View Rescue Scope</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppCTA
                  context="Codebase Rescue"
                  label="Message on WhatsApp"
                  size="default"
                />
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Bottom Section ── */}
      <section className="mt-20 max-w-4xl border-t border-border pt-12 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Have a custom requirement?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-base">
            Tell me about your existing workflow, database, or spreadsheet.
            I respond within 4 hours with an honest technical assessment.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA
              context="Services overview page"
              label="Discuss Custom Requirement on WhatsApp"
              size="lg"
              showArrow
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
