import { RevealOnView } from "@/components/motion/reveal-on-view";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { AlertStackMockup } from "@/components/mockups/alert-stack-mockup";
import { trackEvent } from "@/lib/analytics";

const SHIP_LOG = [
  { tag: "SHIPPED", note: "Edit this Ship Log with real captions pulled from @aditya.ships.it before launch." },
  { tag: "SHIPPED", note: "Each entry should mirror a recent Instagram post — keep it short, dated, concrete." },
  { tag: "IN PROGRESS", note: "Social Copilot — AI video generation + scheduler, build-in-public." },
];

export function LabAct() {
  return (
    <section id="lab" className="relative px-6 sm:px-10 lg:px-16 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,260px] gap-8 items-center mb-12">
          <RevealOnView>
            <div className="bg-background/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 inline-block">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-4">
                02 // The Indie Lab
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground max-w-2xl leading-tight">
                Proof I ship on my own time, not just on a client clock.
              </h2>
            </div>
          </RevealOnView>
          <AlertStackMockup className="hidden lg:flex" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <RevealOnView className="lg:col-span-3" delay={100}>
            <SpotlightCard className="p-8 h-full">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue">
                Indie Product — Live
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">GoSolarIndex.in</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A solar installer directory for India, built solo as a programmatic SEO
                experiment — Next.js, Supabase, and GCP, with Claude Code handling indexation
                and structured content at scale.
              </p>
              <div className="mt-6 font-mono text-3xl text-accent-blue font-bold">
                400K+
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground mt-1">
                Organic Google Search Impressions
              </div>
            </SpotlightCard>
          </RevealOnView>

          <RevealOnView className="lg:col-span-2" delay={200}>
            <SpotlightCard className="p-8 h-full flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent-teal">
                Build-in-Public
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">@aditya.ships.it</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Daily ship log — what I built, what broke, what shipped anyway.
              </p>
              <ul className="mt-5 space-y-3 flex-1">
                {SHIP_LOG.map((entry, i) => (
                  <li key={i} className="font-mono text-[11px] text-muted-foreground border-l-2 border-accent-blue/30 pl-3">
                    <span className="text-accent-blue">{entry.tag}</span> — {entry.note}
                  </li>
                ))}
              </ul>
              <MagneticButton
                href="https://instagram.com/aditya.ships.it"
                onClick={() => trackEvent("instagram_click", { location: "lab_act_card" })}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-muted border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 hover:border-accent-blue/40 hover:text-accent-blue transition-colors self-start"
              >
                Follow the build log →
              </MagneticButton>
            </SpotlightCard>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
