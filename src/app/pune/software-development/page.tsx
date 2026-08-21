import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Factory,
  Layers,
} from "lucide-react";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Software Development & Automation in Pune | Aditya Patil",
  description:
    "Independent software engineer based in Pune. Custom web apps, reporting automation, and internal tools for Pune manufacturing, logistics, and tech businesses.",
  alternates: {
    canonical: "https://adityapatil.work/pune/software-development",
  },
  openGraph: {
    title: "Software Development & Automation in Pune | Aditya Patil",
    description:
      "Direct engineering delivery in Pune. In-person architecture discovery for industrial and startup operations across Bhosari, Chakan, Hinjewadi, and Baner.",
    url: "https://adityapatil.work/pune/software-development",
  },
};

export default function PuneSoftwarePage() {
  const puneHubs = [
    {
      area: "Bhosari & Chakan Industrial Belt",
      focus: "Manufacturing & SCADA Telemetry",
      desc: "Machine telemetry ingestion, automated shift reporting, and downtime logging for auto-component and machinery manufacturers.",
    },
    {
      area: "Hinjewadi & Magarpatta IT Hubs",
      focus: "SaaS & Scaleup Engineering",
      desc: "High-speed Next.js full-stack MVP builds, payment integration, and AI workflow pipelines for funded startups.",
    },
    {
      area: "Baner, SB Road & Camp",
      focus: "Professional Services & Real Estate",
      desc: "Internal document processing, client portals, and CRM dashboards for CA firms, legal practices, and developers.",
    },
  ];

  const localAdvantages = [
    {
      title: "In-Person Discovery in Pune",
      desc: "Available to meet at your plant, factory floor, or office in Pune for deep-dive requirement scoping and technical architecture reviews.",
    },
    {
      title: "Zero Agency Overhead or Relaying",
      desc: "You speak directly with the engineer architecting and building your system. No non-technical account managers filtering your feedback.",
    },
    {
      title: "On-Site Staging & Handover Walkthrough",
      desc: "We conduct hands-on training sessions with your operations staff and plant supervisors on-site in Pune before production cutover.",
    },
  ];

  return (
    <div className="content-width px-4 sm:px-6 py-12 sm:py-20">
      {/* ── Breadcrumb ── */}
      <FadeIn>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Pune</span>
          <span>/</span>
          <span className="text-foreground font-semibold">Software Development</span>
        </div>
      </FadeIn>

      {/* ── Hero Section ── */}
      <section className="max-w-4xl">
        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-emerald-500" />
            <span>Pune, Maharashtra · In-Person Engineering</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Custom Software &amp; Automation For Pune Businesses
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I am a Pune-based Lead Software Engineer. I build operational systems,
            automated reporting pipelines, and full-stack web applications for manufacturing plants,
            logistics operators, and growing businesses across Pune.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppCTA
              context="Pune software development page"
              label="Discuss Your Pune Project on WhatsApp"
              size="lg"
              showArrow
            />
            <a
              href="tel:+919373238164"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-emerald-500" />
              <span>Call +91 93732 38164</span>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Pune Hubs & Local Context ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Local Industrial Context
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Engineering across Pune&apos;s commercial hubs
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {puneHubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    {hub.focus}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{hub.area}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Why Work with a Local Independent Engineer ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            The Local Advantage
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Why work with a Pune-based independent engineer
          </h2>
          <div className="mt-8 space-y-4">
            {localAdvantages.map((adv, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 flex items-start gap-3.5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-foreground">{adv.title}</h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Core Services Quick Links ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Available Engagements
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Fixed-scope services for Pune businesses
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/services/reporting-automation"
              className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-emerald-500/40"
            >
              <h3 className="font-bold text-base text-foreground group-hover:text-emerald-500 transition-colors">
                Daily Reporting &amp; DGR Automation
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Replace manual Excel compilation with automated cron pipelines and WhatsApp alerts.
              </p>
            </Link>

            <Link
              href="/services/internal-dashboards"
              className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-emerald-500/40"
            >
              <h3 className="font-bold text-base text-foreground group-hover:text-emerald-500 transition-colors">
                Internal Ops Dashboards &amp; Admin Panels
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Custom role-based portals for operations, logistics, and finance teams.
              </p>
            </Link>

            <Link
              href="/services/web-app-mvp-development"
              className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-emerald-500/40"
            >
              <h3 className="font-bold text-base text-foreground group-hover:text-emerald-500 transition-colors">
                Web App &amp; MVP Development
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Full-stack production builds with authentication, payments, and admin suites in 3–8 weeks.
              </p>
            </Link>

            <Link
              href="/services/build-scoping-sprint"
              className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-emerald-500/40"
            >
              <h3 className="font-bold text-base text-foreground group-hover:text-emerald-500 transition-colors">
                Build Scoping Sprint (3-Day Diagnostic)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                In-person or remote technical diagnostic. Written scope, schema, fixed quote, and timeline.
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Bottom Section ── */}
      <section className="mt-20 max-w-4xl rounded-2xl border border-border bg-muted/40 p-8 sm:p-12 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Let&apos;s discuss your project in Pune
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base text-muted-foreground leading-relaxed">
            Message me on WhatsApp or call directly. We can arrange an introductory call or an in-person meeting in Pune.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <WhatsAppCTA
              context="Pune local page"
              label="Chat on WhatsApp"
              size="lg"
              showArrow
            />
            <a
              href="tel:+919373238164"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-emerald-500" />
              <span>+91 93732 38164</span>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
