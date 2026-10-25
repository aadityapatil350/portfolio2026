import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone, Sparkles, Terminal, Shield, CheckCircle2, Award } from "lucide-react";
import { EngineerMascot } from "@/components/sebg/engineer-mascot";
import { SoundToggle } from "@/components/sebg/sound-toggle";

export const metadata: Metadata = {
  title: "About | Aditya Patil",
  description:
    "Independent systems engineer building operational software that survives real use. 3,400+ MW renewable energy scale, sector-neutral offer, based in Pune, India.",
  alternates: {
    canonical: "https://adityapatil.work/about",
  },
  openGraph: {
    title: "About | Aditya Patil",
    description:
      "Independent systems engineer building operational software that survives real use. Based in Pune, India.",
    url: "https://adityapatil.work/about",
  },
};

const TIMELINE = [
  {
    year: "2020",
    title: "Mechanical Engineering Diploma",
    desc: "No CS degree. This is the entire formal education on paper — everything about systems architecture and software engineering came after, entirely self-taught.",
    highlight: "Foundation",
  },
  {
    year: "2020–21",
    title: "Learned to code building physics & games",
    desc: "Picked up C# and Unity to build custom games and interactive graphics. Late nights chasing docs until things moved with real physics on screen.",
    highlight: "Craft & Motion",
  },
  {
    year: "2021–2024",
    title: "Climate Connect Digital — Built ARS Reporting",
    desc: "First internship, PHP to Node.js. Built the ARS automated generation reporting system for utility wind and solar plants over two and a half years. Promoted twice.",
    highlight: "Promoted 2x",
  },
  {
    year: "2024 — Now",
    title: "Lead Engineer, Renewalytics (3,400+ MW Scale)",
    desc: "Joined as Software Engineer, promoted to Lead on what shipped. Reporting pipelines and forecasting engines running across 40+ plants with zero human intervention.",
    highlight: "Lead SWE",
  },
];

const HOW_I_WORK = [
  {
    code: "01",
    label: "Fixed scope, fixed price",
    desc: "Every project starts with a clear scoping sprint. You get an exact scope specification, a fixed quote, and a verified delivery date. Zero hourly billing surprises.",
  },
  {
    code: "02",
    label: "One senior engineer, not a layer",
    desc: "You talk directly to the person writing the code and architecting the database. No account managers or juniors copy-pasting your operational requirements.",
  },
  {
    code: "03",
    label: "WhatsApp for the fast lane",
    desc: "The primary communications channel is WhatsApp. Fast, async, unified in one thread with sub-hour responses and weekly video syncs as needed.",
  },
  {
    code: "04",
    label: "Ship in weeks, not quarters",
    desc: "Most system builds deliver a live production release in 2 to 6 weeks. If your system cannot be scoped into a high-leverage v1, we refine it until it can.",
  },
  {
    code: "05",
    label: "Honest operational boundaries",
    desc: "I build high-reliability internal operational software, dashboards, and automated pipelines. If your project needs something outside my focus, I'll direct you to the right partner.",
  },
  {
    code: "06",
    label: "Built to survive 24/7 use",
    desc: "Code that handles edge cases gracefully, logs audit trails, self-heals transient network drops, and pages on-call engineers only when genuine anomalies occur.",
  },
];

const FOCUS = [
  {
    label: "Autonomous AI Agents in Production",
    status: "Live in Prod",
    statusColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
    desc: "Shipped an AI operations agent monitoring 35+ utility sites and an autonomous forecasting engine that reconciles schedule deviations continuously.",
  },
  {
    label: "Social Copilot Platform",
    status: "In Development",
    statusColor: "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400",
    desc: "Next-generation social media scheduler with automated AI video rendering and multi-platform distribution.",
  },
  {
    label: "Indie Infrastructure Directories",
    status: "Live & Ranked",
    statusColor: "bg-sky-500/10 text-sky-600 border-sky-500/30 dark:text-sky-400",
    desc: "MSMEVault.in and GoSolarIndex.in pulling organic search traffic daily across Indian industrial operators and rooftop solar buyers.",
  },
  {
    label: "Lead Engineering at Renewalytics",
    status: "Production SLA",
    statusColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30 dark:text-indigo-400",
    desc: "Leading core systems for forecasting, daily generation reporting, SCADA telemetry, and automated dispatch for 3,400+ MW capacity.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fbfbf8] text-[#0b0b0c] selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8]">
      {/* ── Hero: Swiss Blue Editorial Banner ── */}
      <section
        className="relative overflow-hidden bg-[#2261e9] text-[#fbfbf8] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-[#2261e9]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
              <Terminal className="h-3.5 w-3.5 text-sky-200" />
              <span>Independent Systems Engineer · Delivery Partner</span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              I build software that survives real operational use.
            </h1>

            <p className="mt-6 text-lg sm:text-xl font-light text-white/90 leading-relaxed max-w-2xl">
              I&apos;m Aditya. I lead engineering at a renewable energy SaaS company in Pune, India.
              The systems I build carry live plant data, automated daily reports, and realtime
              dispatch pipelines across dozens of utility power plants.
            </p>

            <p className="mt-3 text-base sm:text-lg font-light text-white/80 leading-relaxed max-w-2xl">
              On the side, I partner with founders and operations leads who need mission-critical
              software built once and built to last. Fixed scope, fixed price, delivered on the date I promised.
            </p>

            {/* Metrics Strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-white/20 pt-6 font-mono">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-white block">
                  3,400+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">
                  MW Live Capacity
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-white block">
                  33+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">
                  Plants Automated
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-sky-200 block">
                  0
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">
                  CS Degrees · Self-Taught
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story & Timeline ── */}
      <section
        className="relative py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 swiss-grid"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
            <span className="font-bold text-[#2261e9]">01 / BACKGROUND</span>
            <span>·</span>
            <span>THE NON-TRADITIONAL PATH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Built on production pressure, not textbooks
          </h2>

          <div className="mt-14 relative max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-neutral-300 dark:bg-neutral-700" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-10 sm:pl-12 group">
                  {/* Indicator Dot */}
                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-[#2261e9] ring-4 ring-[#2261e9]/20" />
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#2261e9] uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 font-mono text-[10px] text-neutral-600 dark:text-neutral-400">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work (Swiss 3D Cards) ── */}
      <section
        className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-[#f4f3ef] dark:bg-[#0e0e12] swiss-grid"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
            <span className="font-bold text-[#2261e9]">02 / DELIVERY MODEL</span>
            <span>·</span>
            <span>HOW WE WORK TOGETHER</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            What working with me actually looks like
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_I_WORK.map((item) => (
              <div
                key={item.code}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2261e9] hover:shadow-xl dark:border-neutral-800 dark:bg-[#16161a]"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#2261e9]">{item.code}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Active Focus ── */}
      <section className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
            <span className="font-bold text-[#2261e9]">03 / CURRENT ROADMAP</span>
            <span>·</span>
            <span>ACTIVE SYSTEMS & INITIATIVES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            What I&apos;m building now
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2261e9] hover:shadow-md dark:border-neutral-800 dark:bg-[#16161a]"
              >
                <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-3 dark:border-neutral-800">
                  <h3 className="font-display text-lg font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
                    {item.label}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider border rounded-full px-2.5 py-0.5 shrink-0 ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outro / Contact CTA (Ink Black sebg style) ── */}
      <section
        className="relative bg-[#0b0b0c] text-[#fbfbf8] py-20 lg:py-28 selection:bg-[#2261e9] selection:text-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Partnership Inquiries</span>
            </div>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Have an operational bottleneck to solve?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              The fastest way to determine fit: message me directly on WhatsApp with what you&apos;re
              building or trying to automate. I respond quickly with an honest assessment and scoping timeline.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919373238164?text=Hi%20Aditya%2C%20I%20saw%20your%20About%20page%20and%20wanted%20to%20discuss%20an%20engineering%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-white shadow-xl transition-all duration-300 hover:bg-emerald-500 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Message on WhatsApp (+91 93732 38164)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                <span>Browse Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
