import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Clock,
  Layers,
  Cpu,
  Database,
  Globe,
  Radio,
  FileSpreadsheet,
  ShieldAlert,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Engineering Services & Outcome Packages | Aditya Patil",
  description:
    "Fixed-scope, outcome-based engineering packages. Web application builds, reporting automation pipelines, custom internal dashboards, and AI integrations.",
  alternates: {
    canonical: "https://adityapatil.work/services",
  },
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
  const tier2 = allServices.filter((s) => s.slug === "codebase-rescue");

  const tier1Order = [
    "web-app-mvp-development",
    "internal-dashboards",
    "ai-workflow-automation",
    "ai-integration",
    "realtime-monitoring",
    "business-website",
    "reporting-automation",
  ];
  const tier1 = tier1Order
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is (typeof allServices)[number] => Boolean(s));

  return (
    <div
      className="min-h-screen bg-[#fbfbf8] text-[#0b0b0c] py-16 sm:py-24 selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8] swiss-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="max-w-3xl border-b border-neutral-300 pb-8 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <Terminal className="h-3.5 w-3.5 text-[#2261e9]" />
            <span>03 / Services &amp; Packages</span>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Outcome-Based Packages
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            Every engagement is fixed-scope, outcome-named, and sector-neutral.
            I don&apos;t bill vague hourly rates. You get a defined technical deliverable,
            a guaranteed calendar timeline, and direct senior engineering.
          </p>
        </section>

        {/* Tier 0: The Scoping Sprint Door Opener */}
        {tier0.length > 0 && (
          <section className="mt-12 max-w-4xl">
            <div className="rounded-2xl border-2 border-[#2261e9] bg-[#2261e9]/5 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2261e9]">
                  Recommended First Step
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  100% Credited If You Proceed With Build
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                {tier0[0].title} — {tier0[0].priceFrom}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                A 3-day paid technical diagnostic. You get a written functional scope,
                database schema, architecture recommendation, fixed quote, and calendar timeline.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${tier0[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2261e9] px-5 py-2.5 font-display text-xs font-semibold text-white shadow-md hover:bg-blue-600 transition"
                >
                  <span>View Scoping Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/919373238164?text=${encodeURIComponent(
                    "Hi Aditya, I want to book a Build Scoping Sprint for my project:"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 font-display text-xs font-semibold text-[#0b0b0c] hover:border-[#2261e9] transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-[#fbfbf8]"
                >
                  <span>Book Sprint on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Tier 1: Core Builds */}
        <section className="mt-16">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#2261e9]">
            Core Production Builds
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Full Systems, Dashboards &amp; Pipelines
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1.map((service) => {
              const Icon = serviceIcons[service.slug] || Layers;
              return (
                <div
                  key={service.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2261e9] hover:shadow-xl dark:border-neutral-800 dark:bg-[#121215]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-neutral-800">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2261e9] dark:bg-blue-950/40">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-neutral-500">
                        {service.timeline}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                      {service.painHeadline}
                    </p>

                    <div className="mt-4 border-t border-neutral-100 pt-3 font-mono text-xs font-bold text-[#2261e9] dark:border-neutral-800">
                      From: {service.priceFrom}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 font-display text-xs font-semibold text-[#0b0b0c] hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={`https://wa.me/919373238164?text=${encodeURIComponent(
                        `Hi Aditya, I want to discuss the ${service.title} package:`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#2261e9] hover:underline"
                    >
                      Discuss ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tier 2: Codebase Rescue */}
        {tier2.length > 0 && (
          <section className="mt-16 max-w-4xl">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                <ShieldAlert className="h-4 w-4" />
                <span>High Urgency Rescue</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                {tier2[0].title} — {tier2[0].priceFrom}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Inherited a half-finished build? Previous developer vanished?
                I audit, stabilise, document, and fix stalled codebases so your business can launch.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${tier2[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0b0b0c] px-5 py-2.5 font-display text-xs font-semibold text-white hover:bg-neutral-800 transition dark:bg-white dark:text-black"
                >
                  <span>View Rescue Scope</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/919373238164?text=${encodeURIComponent(
                    "Hi Aditya, I have an urgent codebase rescue situation:"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-xs font-semibold text-[#2261e9] hover:underline"
                >
                  <span>Message on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
