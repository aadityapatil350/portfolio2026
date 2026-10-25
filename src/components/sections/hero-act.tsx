import { RevealOnView } from "@/components/motion/reveal-on-view";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { trackEvent } from "@/lib/analytics";

const TELEMETRY = [
  { value: "3,400+ MW", label: "Live Capacity Running Through Systems Built" },
  { value: "33+ Plants", label: "On Fully Automated Daily Reporting" },
  { value: "400K+", label: "Organic Impressions — GoSolarIndex" },
];

export function HeroAct() {
  return (
    <section id="hero-section" className="relative min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-16 py-16">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-background/85 backdrop-blur-md rounded-3xl p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-5">
            Hey, I'm Aditya — Independent Engineer, Pune
          </p>

          <RevealOnView>
            <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-bold tracking-tight text-foreground leading-[1.1]">
              I build operational software{" "}
              <span className="text-accent-blue">&amp; indie products</span> that survive real
              load.
            </h1>
          </RevealOnView>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
            Reporting that runs itself. Dashboards ops teams actually open. Realtime systems that
            page someone at 3 AM. If it survives 3,400 MW of live plant data, it survives your
            workflow — manufacturing, logistics, professional services, or a startup shipping its
            first product.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-y border-border py-5">
            {TELEMETRY.map((t) => (
              <div key={t.label}>
                <div className="text-lg sm:text-xl text-accent-blue font-bold">{t.value}</div>
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1 leading-tight">
                  {t.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA
              variant="primary"
              context="homepage"
              label="Scope Your Project"
              size="lg"
              showArrow
            />
            <MagneticButton
              href="https://instagram.com/aditya.ships.it"
              onClick={() => trackEvent("instagram_click", { location: "hero_secondary_cta" })}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-base font-semibold text-foreground/80 hover:border-accent-blue/40 hover:text-accent-blue transition-colors"
            >
              Watch Daily Ships on @aditya.ships.it
            </MagneticButton>
          </div>
        </div>

        <DashboardMockup className="max-w-md mx-auto w-full" />
      </div>
    </section>
  );
}
