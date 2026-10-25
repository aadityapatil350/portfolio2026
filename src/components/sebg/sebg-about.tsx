"use client";

import { Check, ArrowRight, Shield, Activity, Database, Cpu } from "lucide-react";
import { sound } from "@/lib/sound-effects";

export function SebgAbout() {
  const stats = [
    {
      value: "3,400+ MW",
      label: "Live Renewable Capacity",
      subtext: "Flows through systems built & maintained in production",
    },
    {
      value: "33+ Plants",
      label: "Automated Daily",
      subtext: "Solar, wind & BESS installations aggregated with zero touch",
    },
    {
      value: "30+ Reports",
      label: "On-Time Every Morning",
      subtext: "Delivered before 8:00 AM without human manual compilation",
    },
    {
      value: "0.0 Hrs",
      label: "Human Compiling Hours",
      subtext: "Replaced fragile spreadsheets and macros with verified code",
    },
  ];

  const pillars = [
    {
      icon: Database,
      title: "Reporting Automation",
      description:
        "Scheduled cron ingestion pipelines that download, validate, calculate KPIs, and auto-dispatch clean PDFs to executives before breakfast.",
    },
    {
      icon: Activity,
      title: "Realtime Telemetry & SCADA",
      description:
        "Sub-second WebSocket & MQTT bridges linking hardware gateways, inverters, and grid lines to high-availability ops terminals.",
    },
    {
      icon: Cpu,
      title: "AI Workflows & Document Processing",
      description:
        "Automated OCR, unstructured invoice reconciliation, and smart agents that convert messy operational chaos into structured database rows.",
    },
    {
      icon: Shield,
      title: "Codebase Rescue & Performance",
      description:
        "Taking fragile legacy systems, slow queries, and unmaintained apps, stabilizing architecture, and turning them into scalable platforms.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#fbfbf8] text-[#0b0b0c] py-20 lg:py-32 selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8] swiss-grid border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 border-b border-neutral-300 dark:border-neutral-800 pb-4 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="font-bold text-[#2261e9]">01 / PHILOSOPHY</span>
          <span>·</span>
          <span>HORIZONTAL OFFER · VERTICAL PROOF</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="mt-12 max-w-4xl">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0b0b0c] dark:text-[#fbfbf8]">
            I build operational platforms for founders and ops heads who need software that survives
            real operational conditions.
          </p>
          <div className="mt-8 space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
            <p>
              I am an independent systems engineer and delivery partner based in Pune, India, currently
              Lead Software Engineer at Renewalytics. I partner with companies across manufacturing,
              logistics, professional services, energy, and tech to eliminate operational bottlenecks.
            </p>
            <p className="border-l-4 border-[#2261e9] pl-4 italic text-neutral-800 dark:text-neutral-200 font-medium">
              &ldquo;If it survives 3,400+ MW of live plant telemetry, 15-minute statutory compliance
              deadlines, and automated daily dispatches across 33 plants without human intervention, it
              will survive your workflow.&rdquo;
            </p>
          </div>
        </div>

        {/* Swiss Modernist Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-y border-neutral-300 dark:border-neutral-800 py-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#2261e9] block">
                  {stat.value}
                </span>
                <span className="mt-2 font-display text-base font-semibold text-[#0b0b0c] dark:text-[#fbfbf8] block">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 leading-normal font-sans">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8] mb-8">
            How I deliver for operational teams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  onMouseEnter={() => sound.playHover?.()}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2261e9] hover:shadow-md dark:border-neutral-800 dark:bg-[#121215]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2261e9] dark:bg-blue-950/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
