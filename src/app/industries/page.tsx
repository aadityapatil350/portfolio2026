import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Truck,
  Briefcase,
  Zap,
  Rocket,
  Layers,
  Terminal,
} from "lucide-react";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries I Build For | Aditya Patil",
  description:
    "Operational software for manufacturing, logistics, professional services, energy, and early-stage startups. Sector-specific pain, honest about what I have and haven't built.",
  alternates: {
    canonical: "https://adityapatil.work/industries",
  },
  openGraph: {
    title: "Industries I Build For | Aditya Patil",
    description:
      "Operational software for manufacturing, logistics, professional services, energy, and startups. Honest about what I have and haven't shipped in each sector.",
    url: "https://adityapatil.work/industries",
  },
};

const industryIcons: Record<string, typeof Layers> = {
  manufacturing: Factory,
  logistics: Truck,
  "professional-services": Briefcase,
  energy: Zap,
  startups: Rocket,
};

export default function IndustriesIndexPage() {
  const industries = Object.values(industriesData);

  return (
    <div
      className="min-h-screen bg-[#fbfbf8] text-[#0b0b0c] py-16 sm:py-24 selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="max-w-3xl border-b border-neutral-300 pb-8 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <Terminal className="h-3.5 w-3.5 text-[#2261e9]" />
            <span>04 / Sector Verticals</span>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8] leading-[1.05]">
            Surviving Real Operations Across Five Sectors
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            The proof came from renewable energy — 3,400+ MW, 40+ plants, 30+ automated daily reports.
            The problem shape repeats: manual data movement, fragile spreadsheets, and lack of audit trails.
          </p>
        </section>

        {/* Industry Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.slug] || Layers;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2261e9] hover:shadow-xl dark:border-neutral-800 dark:bg-[#121215]"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2261e9] dark:bg-blue-950/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {industry.painHeadline}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-neutral-100 pt-4 text-xs font-display font-semibold text-[#2261e9] dark:border-neutral-800">
                  <span>See How I Work With {industry.title.split(" ")[0]} Teams</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Horizontal Offer Note */}
        <div className="mt-16 rounded-2xl border border-neutral-300 bg-[#f4f3ef] p-6 sm:p-8 dark:border-neutral-800 dark:bg-[#16161a]">
          <h3 className="font-display text-lg font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
            Not sure your sector fits?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            The horizontal offer is identical everywhere: reporting that runs itself, internal dashboards
            ops teams actually open, and realtime systems that page someone when something breaks.
            If your team rebuilds the same spreadsheet every morning, we can automate it.
          </p>
        </div>
      </div>
    </div>
  );
}
