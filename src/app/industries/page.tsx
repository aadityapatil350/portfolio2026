import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Truck,
  Briefcase,
  Zap,
  Rocket,
  Layers,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Industries I Build For | Aditya Patil",
  description:
    "Operational software for manufacturing, logistics, professional services, energy, and early-stage startups. Sector-specific pain, honest about what I have and haven't built.",
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
    <div className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              <Layers className="h-3.5 w-3.5" />
              <span>Sector Focus</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Software That Survives Real Operational Use — Across Five Sectors
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The proof came from renewable energy. 3,400+ MW, 40+ plants, 30+ automated reports running every morning. The problem shape repeats: manual data movement, brittle spreadsheets, no audit trail, a key person nobody can afford to lose.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Pick your sector below. Each page names the specific pain, points to the services that solve it, and tells you honestly what I have and haven&apos;t shipped in that industry.
            </p>
          </div>
        </FadeIn>

        {/* Industry Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industryIcons[industry.slug] || Layers;
            return (
              <FadeIn key={industry.slug} delay={0.05 + i * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-emerald-600/40 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {industry.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {industry.painHeadline}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>See how I work with {industry.title.split(" ")[0].toLowerCase()} teams</span>
                    <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* Honest note */}
        <FadeIn delay={0.3}>
          <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Not sure your sector fits?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              The horizontal offer is the same everywhere: reporting that runs itself, dashboards ops teams actually open, realtime systems that page someone at 3 AM, AI workflows that replace manual work. If your team rebuilds the same spreadsheet every morning, the problem shape is the same one I have already solved.
            </p>
            <div className="mt-5">
              <WhatsAppCTA
                variant="primary"
                context="industries overview page"
                label="Tell me about your sector"
                showArrow
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
