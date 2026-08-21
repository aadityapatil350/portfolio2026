"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Radio,
  Clock,
  IndianRupee,
  Factory,
  Truck,
  Briefcase,
  SunMedium,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { OperationalTerminal } from "@/components/operational-terminal";
import { FadeIn } from "@/components/fade-in";
import type { CaseStudy } from "@/data/site-config";

interface HomeContentProps {
  caseStudies: CaseStudy[];
}

export function HomeContent({ caseStudies }: HomeContentProps) {
  const problems = [
    {
      pain: "Your team rebuilds the same report every morning.",
      service: "Reporting Automation",
      href: "/services/reporting-automation",
    },
    {
      pain: "You're running 15 spreadsheets with no access control or audit logs.",
      service: "Internal Dashboards",
      href: "/services/internal-dashboards",
    },
    {
      pain: "High-value staff are manually reading PDFs and typing data into software.",
      service: "AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    {
      pain: "Your previous developer disappeared and left an undocumented mess.",
      service: "Codebase Rescue",
      href: "/services/codebase-rescue",
    },
  ];

  const targetSectors = [
    {
      name: "Manufacturing",
      icon: Factory,
      pain: "Shift reports & SCADA machine data",
      href: "/industries/manufacturing",
    },
    {
      name: "Logistics & Fleet",
      icon: Truck,
      pain: "WhatsApp dispatch chaos & POD collection",
      href: "/industries/logistics",
    },
    {
      name: "Professional Services",
      icon: Briefcase,
      pain: "Document intake & compliance deadlines",
      href: "/industries/professional-services",
    },
    {
      name: "Energy & Infrastructure",
      icon: SunMedium,
      pain: "DGR automation, SLDC portals & 3.4 GW telemetry",
      href: "/industries/energy",
    },
    {
      name: "Startups & Scaleups",
      icon: Rocket,
      pain: "MVP speed, no in-house engineers & ops panels",
      href: "/industries/startups",
    },
  ];

  return (
    <div>
      {/* ════════════════════════════════════════════════════════════
          1. HERO SECTION: Lead with Proof & Horizontal Breadth
      ════════════════════════════════════════════════════════════ */}
      <section
        id="hero-section"
        className="relative overflow-hidden border-b border-border py-16 sm:py-24 lg:py-28"
      >
        <div className="content-width px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            {/* Left: Headline & CTAs */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>Available For Delivery Partnerships &amp; Core Builds</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Aditya Patil builds operational software that survives real use.
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Reporting that runs itself. Dashboards ops teams actually open.
                  Realtime systems that page someone at 3 AM. AI workflows that replace manual processes.
                </p>
              </FadeIn>

              {/* Sector Scope Bar */}
              <FadeIn delay={0.2}>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="text-foreground font-semibold">Sectors:</span>
                  <span>Manufacturing</span>
                  <span>·</span>
                  <span>Logistics</span>
                  <span>·</span>
                  <span>Professional Services</span>
                  <span>·</span>
                  <span>Energy</span>
                  <span>·</span>
                  <span>Startups</span>
                </div>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <WhatsAppCTA
                    context="homepage hero"
                    label="Discuss a Build on WhatsApp"
                    size="lg"
                    showArrow
                  />
                  <a
                    href="#proof"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                  >
                    <span>See what I&apos;ve built</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: Signature Operational Terminal Element */}
            <FadeIn delay={0.2} className="lg:pl-4">
              <OperationalTerminal />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. THE PROBLEM STRIP: 4 One-Line Statements of Buyer Pain
      ════════════════════════════════════════════════════════════ */}
      <section className="border-b border-border bg-muted/20 py-10">
        <div className="content-width px-4 sm:px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Identify Your Operational Bottleneck
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((item, idx) => (
              <FadeIn key={idx} delay={0.05 * (idx + 1)}>
                <Link
                  href={item.href}
                  className="group flex flex-col justify-between h-full rounded-xl border border-border bg-card p-4 transition-all hover:border-emerald-500/40 hover:bg-muted/30"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    &ldquo;{item.pain}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-muted-foreground group-hover:text-foreground">
                    <span>{item.service}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. SERVICES CATALOGUE: Grouped Build / Automate / Fix
      ════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-20 border-b border-border">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Fixed-Scope Outcome Packages
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Software engineering packages for operational teams
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl">
              Every service is outcome-named, fixed-scope, and sector-neutral.
              No surprise hourly overages.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-12">
            {/* GROUP A: BUILD */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-blue mb-4">
                <Layers className="h-4 w-4" />
                <span>Core Builds — Full Products &amp; Platforms</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:col-span-2">
                  <div>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₹2.5L – ₹8L · 3–8 weeks
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      Web App / MVP Build
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Full product from zero. Authentication, multi-tenant database, Razorpay/Stripe payments,
                      admin control center, and containerized cloud deployment.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/web-app-mvp-development"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>Explore MVP Scope</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <WhatsAppCTA context="Web App MVP Build" label="Discuss" variant="inline" size="sm" />
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₹3L – ₹10L · 5–10 weeks
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      Realtime Monitoring
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      High-throughput MQTT, WebSockets, and OPC-UA telemetry dashboards with automated threshold alerts.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/realtime-monitoring"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GROUP B: AUTOMATE */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
                <Cpu className="h-4 w-4" />
                <span>Automation &amp; Internal Panels</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₹1.5L – ₹5L · 3–6 weeks
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      Reporting Automation
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Replace manual Excel and email compiling with automated daily cron pipelines and WhatsApp dispatches.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/reporting-automation"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <WhatsAppCTA context="Reporting Automation" label="Discuss" variant="inline" size="sm" />
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₹1L – ₹5L · 2–6 weeks
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      AI Workflow Automation
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Deterministic LLM pipelines for invoice parsing, WhatsApp inquiry triage, and internal copilots.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/ai-workflow-automation"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <WhatsAppCTA context="AI Workflow Automation" label="Discuss" variant="inline" size="sm" />
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₹1.5L – ₹4L · 2–5 weeks
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      Internal Dashboards
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Custom admin panels and role-based permissions around your real operations and approval flows.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/internal-dashboards"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <WhatsAppCTA context="Internal Dashboards" label="Discuss" variant="inline" size="sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* GROUP C: FIX & DIAGNOSTIC */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                <ShieldCheck className="h-4 w-4" />
                <span>Diagnostics &amp; Rescue</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                        Tier 0 · The Door Opener
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">3 Days</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      Build Scoping Sprint — ₹15,000
                    </h3>
                    <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                      A 3-day paid diagnostic. Written specification, schema, fixed quote, and calendar dates.
                      100% credited against your build if you proceed.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/build-scoping-sprint"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>Book Scoping Sprint</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <WhatsAppCTA context="Build Scoping Sprint" label="Book Sprint" variant="inline" size="sm" />
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      From ₹1L · 2–4 weeks
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      Codebase Rescue
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Inherited a half-finished system? Developer vanished?
                      I audit, stabilise, document, and fix broken codebases so you can launch.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/services/codebase-rescue"
                      className="text-sm font-semibold text-foreground hover:text-emerald-500 flex items-center gap-1"
                    >
                      <span>View Rescue Scope</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <WhatsAppCTA context="Codebase Rescue" label="Discuss" variant="inline" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. PROOF: Outcome-First Production Case Studies
      ════════════════════════════════════════════════════════════ */}
      <section id="proof" className="py-20 border-b border-border">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Production Severity
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Systems running under real operational load
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              &ldquo;If it survives 3,400 MW of live industrial plant telemetry, it will survive your operational workflow.&rdquo;
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {caseStudies.slice(0, 3).map((study, idx) => (
              <FadeIn key={study.slug} delay={0.1 * (idx + 1)}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-foreground/20">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {study.title}
                    </h3>
                    <span className="font-mono text-xs rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
                      {study.client}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
                    <div>
                      <div className="font-mono text-xs uppercase text-red-500 font-bold">
                        1. The Business Problem &amp; Manual Process
                      </div>
                      <p className="mt-2 text-foreground/90 leading-relaxed">{study.problem}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{study.before}</p>
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase text-emerald-500 font-bold">
                        2. What Was Built &amp; Measurable Outcome
                      </div>
                      <p className="mt-2 text-foreground/90 leading-relaxed">{study.built}</p>
                      <div className="mt-3 rounded-lg bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {study.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Why this matters to non-energy buyers */}
                  <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-4 font-mono text-xs sm:text-sm text-foreground/90 flex items-start gap-2">
                    <span className="font-bold text-accent-blue shrink-0">Why this matters to you:</span>
                    <span>{study.whyItMatters}</span>
                  </div>

                  {/* De-emphasized Stack */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 font-mono">
                      <span>Stack:</span>
                      <span>{study.tech.join(" · ")}</span>
                    </div>
                    <WhatsAppCTA
                      context={`${study.title} case study`}
                      label="Discuss Similar System"
                      variant="inline"
                      size="sm"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. WHO I WORK WITH: Target Industries
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 border-b border-border bg-muted/20">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Sector Expertise
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Who I work with
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              Software tailored around the exact operational realities and compliance requirements of each industry.
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <FadeIn key={sector.name} delay={0.05 * (idx + 1)}>
                  <Link
                    href={sector.href}
                    className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-emerald-500/40 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground group-hover:text-emerald-500 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {sector.pain}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <span>See work in your sector</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. HOW IT WORKS: 5 Steps from Diagnostic to Production
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 border-b border-border">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Predictable Delivery
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              How engineering engagements work
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              A structured 5-step process demonstrating delivery partner discipline, not freelancer guesswork.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-4">
            {[
              {
                step: "01",
                title: "Build Scoping Sprint (3-Day Diagnostic)",
                desc: "We extract your requirements, audit existing schemas, and map edge cases. You receive an airtight specification, fixed quote, and calendar delivery dates. Fee is credited against the build.",
              },
              {
                step: "02",
                title: "Fixed-Price Agreement & Architecture Sign-Off",
                desc: "No open-ended hourly billing. Fixed scope, fixed milestone payments, and unambiguous technical contracts.",
              },
              {
                step: "03",
                title: "Direct Senior Engineering Execution",
                desc: "I build the system directly using modern TypeScript, Next.js, and PostgreSQL. Weekly staging demos show working software in your actual process.",
              },
              {
                step: "04",
                title: "Handover, Deployment & 100% IP Ownership",
                desc: "Deployed to your private cloud account (AWS, GCP, VPS) in Docker. You receive 100% of source code, schemas, and operational runbooks.",
              },
              {
                step: "05",
                title: "30-Day Post-Launch Warranty & Support Window",
                desc: "Every core build includes 30 days of high-priority post-launch support and bug fixes at zero extra cost.",
              },
            ].map((step, idx) => (
              <FadeIn key={step.step} delay={0.05 * (idx + 1)}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-bold text-background">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. CLOSE: Direct Contact & WhatsApp Commitment
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-muted/40">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Start an Engineering Conversation
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Ready to solve an operational bottleneck?
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Send me a summary of your workflow, spreadsheet, or project specification.
                I will review it and reply directly with scope clarity and next steps.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <WhatsAppCTA
                  context="homepage close section"
                  label="Discuss on WhatsApp (+91 93732 38164)"
                  size="lg"
                  showArrow
                />
                <a
                  href="tel:+919373238164"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>Call +91 93732 38164</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
                <span>Direct engineer response</span>
                <span>·</span>
                <span>Under 4-hour response commitment</span>
                <span>·</span>
                <span>Based in Pune, serving clients anywhere</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
