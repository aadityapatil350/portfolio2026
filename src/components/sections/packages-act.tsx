import { RevealOnView } from "@/components/motion/reveal-on-view";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { DispatchTerminal } from "@/components/sections/dispatch-terminal";

const PACKAGES = [
  {
    code: "01",
    title: "MVP & High-Craft Web Apps",
    audience: "For founders launching products that don't look like AI templates.",
    bullets: [
      "Full-stack build: Next.js, TypeScript, PostgreSQL",
      "Production-grade from day one, not a prototype you rebuild later",
      "You own the codebase, no lock-in",
    ],
  },
  {
    code: "02",
    title: "Operational & AI Workflow Automation",
    audience: "Replacing spreadsheet or WhatsApp-group chaos with automated pipelines.",
    bullets: [
      "Reporting, reconciliation, and alerting that runs without a human",
      "AI workflows wired into your existing tools, not a chatbot bolt-on",
      "Built to survive the mornings nobody's watching",
    ],
  },
  {
    code: "03",
    title: "Dedicated Product Engineering Partner",
    audience: "Ongoing velocity for scaling teams without a full-time hire yet.",
    bullets: [
      "Fixed-scope sprints, not open-ended hourly billing",
      "Direct engineering ownership across your stack",
      "Same person who ships it also supports it",
    ],
  },
];

export function PackagesAct() {
  return (
    <section id="packages" className="relative px-6 sm:px-10 lg:px-16 py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <div className="bg-background/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-12 inline-block">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-4">
              04 // Productized Engineering Packages
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground max-w-2xl leading-tight">
              Fixed-scope outcomes. No hourly billing, no open-ended retainers.
            </h2>
          </div>
        </RevealOnView>

        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <RevealOnView key={pkg.code} delay={i * 100}>
              <SpotlightCard className="p-6 h-full flex flex-col">
                <span className="font-mono text-xs text-accent-blue">{pkg.code}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{pkg.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.audience}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-accent-blue">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </RevealOnView>
          ))}
        </div>

        <RevealOnView className="mt-12" delay={200}>
          <DispatchTerminal />
        </RevealOnView>
      </div>
    </section>
  );
}
