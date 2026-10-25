import type { CaseStudy } from "@/data/site-config";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { SchematicPipeline } from "@/components/motion/schematic-pipeline";

const STATUS_COLOR: Record<string, string> = {
  Live: "text-emerald-700 border-emerald-300 bg-emerald-50",
  Production: "text-emerald-700 border-emerald-300 bg-emerald-50",
  "In Development": "text-amber-700 border-amber-300 bg-amber-50",
  Archived: "text-muted-foreground border-border bg-muted",
};

function firstSentence(text: string): string {
  const match = text.match(/^[^.]+\./);
  return match ? match[0] : text;
}

export function WorkAct({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const featured = caseStudies.slice(0, 4);

  return (
    <section id="work" className="relative px-6 sm:px-10 lg:px-16 py-28">
      <div className="max-w-3xl mx-auto">
        <RevealOnView>
          <div className="bg-background/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-12 inline-block">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-4">
              03 // Systems Under Real Operational Load
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground max-w-2xl leading-tight">
              Not demos. Production systems that get paged at 3 AM.
            </h2>
          </div>
        </RevealOnView>

        <div className="space-y-6">
          {featured.map((cs, i) => (
            <RevealOnView key={cs.slug} delay={i * 80}>
              <SpotlightCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{cs.title}</h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wide border rounded-full px-2.5 py-1 ${STATUS_COLOR[cs.status] ?? ""}`}
                  >
                    {cs.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{cs.client}</p>

                <SchematicPipeline
                  className="mt-6"
                  bottleneck={firstSentence(cs.problem)}
                  system={cs.tech.slice(0, 2).join(" / ")}
                  outcome={firstSentence(cs.outcome)}
                />

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-[10px] uppercase tracking-wide text-foreground/70 bg-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
