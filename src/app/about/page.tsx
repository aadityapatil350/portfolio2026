import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeIn,
  BlurIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught Lead Software Engineer building operational systems, automation platforms, and AI-powered workflows. Based in Pune, India.",
  openGraph: {
    title: "About | Aditya Patil",
    description:
      "Self-taught Lead Software Engineer building operational systems, automation platforms, and AI-powered workflows. Based in Pune, India.",
    url: "https://adityapatil.dev/about",
  },
};

export default function AboutPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      {/* ── Intro ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              About
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              I build systems that run operations.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Aditya — a self-taught Lead Software Engineer based in
              Pune, India. I architect full-stack platforms, realtime monitoring
              systems, and automated reporting pipelines for the renewable energy
              industry. No CS degree, no bootcamp — just YouTube, side projects,
              and shipping real software.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Self-Taught Story ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Origin Story
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              The non-traditional path
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                I don&apos;t have a computer science degree. My formal education
                is in Mechanical Engineering (Diploma, 2020) and I&apos;m
                currently in my final semester of PGDM in IT Management at MIT
                School of Management. Everything I know about software —
                TypeScript, React, Node.js, system design — I taught myself.
              </p>
              <p>
                It started with YouTube tutorials and Stack Overflow threads.
                I&apos;d spend nights building small side projects — CRUD apps,
                API wrappers, anything that let me write code and see it work.
                Then I landed an internship at Climate Connect Digital, where I
                learned React and Node.js on the job. Within months I was a Full
                Stack Engineer, and within two years I was a Software Engineer
                leading projects.
              </p>
              <p>
                In June 2024, I joined Renewalytics as Lead Software Engineer.
                Here I found my edge — building operational software that
                renewable energy plants actually depend on. The stakes are real:
                3,400+ MW of capacity, government portal integrations, realtime
                telemetry, automated reporting for 35+ plants. No tutorials
                prepare you for this — only shipping does.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Experience
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Where I&apos;ve worked
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-8 space-y-8" staggerDelay={0.12}>
            {/* Renewalytics */}
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-foreground">
                    Lead Software Engineer
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Jun 2024 – Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Renewalytics
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Full-stack development, backend architecture, Docker
                  infrastructure, realtime monitoring systems, SCADA integrations,
                  reporting automation. Owning technical architecture for a
                  platform serving 3,400+ MW of renewable energy capacity.
                </p>
              </div>
            </StaggerItem>

            {/* CCD — Software Engineer */}
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-foreground">
                    Software Engineer
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Jul 2022 – Jan 2024
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Climate Connect Digital
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Full-stack development, API integrations, frontend systems.
                  Led feature development and maintained production applications.
                </p>
              </div>
            </StaggerItem>

            {/* CCD — Full Stack Engineer */}
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-foreground">
                    Full Stack Engineer
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Nov 2021 – Jul 2022
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Climate Connect Digital
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  React, Node.js, database architecture. Built and shipped
                  multiple features end-to-end.
                </p>
              </div>
            </StaggerItem>

            {/* CCD — Intern */}
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground/50 bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-foreground">
                    Engineer Intern
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Jun 2021 – Nov 2021
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Climate Connect Digital
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Onboarding, learning React and Node.js on the job. First real
                  exposure to production software development.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Formal background
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.1}>
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <h3 className="font-semibold text-foreground">
                  PGDM — IT Management
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  MIT School of Management — Final Semester
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative pl-6 border-l-2 border-foreground/15">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <h3 className="font-semibold text-foreground">
                  Diploma in Mechanical Engineering
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">2020</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Current Focus ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Focus
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              What I&apos;m working on now
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Right now I&apos;m deep into building AI-native operational
                systems. The pattern I keep coming back to: how do you build
                software that doesn&apos;t just display data, but{" "}
                <span className="text-foreground font-medium">
                  acts on it
                </span>
                ?
              </p>
              <p>
                I&apos;m exploring AI agents, operational copilots, and AI
                workflow systems — tools that can reason about operational data,
                make decisions, and execute tasks autonomously. The renewable
                energy industry generates massive amounts of telemetry and
                reporting data. The opportunity is turning that data into
                automated action.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-6 space-y-4">
              {[
                {
                  label: "AI Agents & Copilots",
                  desc: "Building autonomous systems that reason about operational data and execute workflows",
                  color: "bg-accent-blue",
                },
                {
                  label: "Realtime Telemetry",
                  desc: "MQTT, OPC-UA, WebSockets — making renewable plants visible in real time",
                  color: "bg-accent-teal",
                },
                {
                  label: "Automation Pipelines",
                  desc: "Cron-based reporting, data processing, government portal integrations",
                  color: "bg-foreground",
                },
                {
                  label: "Indie Products",
                  desc: "GoSolarIndex.in, MSMEVault.in — shipping SEO-driven directories",
                  color: "bg-muted-foreground",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span
                    className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full ${item.color}`}
                  />
                  <div>
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>{" "}
                    <span className="text-muted-foreground">— {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Systems I've Built ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Systems
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Systems I&apos;ve built
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-8 space-y-4" staggerDelay={0.1}>
            {[
              {
                name: "RealSync CMS",
                desc: "Enterprise realtime monitoring system for renewable energy portfolios — WebSockets, MQTT, OPC-UA ingestion, alarm systems, AI-ready telemetry pipelines.",
                link: "/projects/realsync-cms",
              },
              {
                name: "Reflux",
                desc: "Operational platform for forecasting revisions, scheduling, reporting automation, and government portal integrations serving 3,400+ MW capacity.",
                link: "/projects/reflux",
              },
              {
                name: "DGR Automation",
                desc: "Enterprise reporting automation parsing 30+ complex Excel reports daily across 35+ renewable plants with cron-based async pipelines.",
                link: "/projects/dgr-automation",
              },
              {
                name: "CMS / DSM Platform",
                desc: "Energy analytics, DSM analytics, billing workflows, BESS management, and operational dashboards for renewable energy operations.",
                link: "/projects/cms-dsm-platform",
              },
            ].map((system) => (
              <StaggerItem key={system.name}>
                <Link
                  href={system.link}
                  className="group block rounded-lg border border-border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/50"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                    {system.name}
                    <span className="ml-2 text-muted-foreground text-xs font-normal group-hover:translate-x-1 inline-block transition-transform">
                      →
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {system.desc}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              Let&apos;s talk
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I&apos;m always open to interesting conversations — whether it&apos;s
              about operational systems, AI agents, indie hacking, or renewable
              energy.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get in touch →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
