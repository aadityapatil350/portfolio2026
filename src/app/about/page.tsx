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
              Engineer-for-hire by day. Builder by night.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Aditya. I lead engineering at Renewalytics out of Pune,
              building forecasting, reporting, and realtime monitoring software
              that renewable plants depend on. On the side I ship indie products,
              break most of them, and learn from the rubble. If you need an MVP
              built or a workflow automated with AI, I take on freelance work too.
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
                No CS degree. My formal education is a Mechanical Engineering
                diploma from 2020, and I&apos;m wrapping up a PGDM in IT
                Management at MIT School of Management right now. Everything I
                know about code, I picked up myself.
              </p>
              <p>
                It actually started with games. I wanted to build my own, so I
                taught myself C# and Unity, spent late nights chasing tutorials
                and breaking things until something moved on screen. Some of
                that early work still lives at{" "}
                <a
                  href="https://instagram.com/arcadeaart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground transition-colors"
                >
                  @arcadeaart
                </a>
                {" "}on Instagram. That obsession with seeing code do something
                real is what kept me going.
              </p>
              <p>
                From there I jumped into web. Picked up PHP at my first
                internship at Climate Connect Digital and shipped it for two
                and a half years, mostly building ARS, their automatic
                reporting system for wind and solar. Got promoted twice, then
                got laid off in the 2024 round. Somewhere in the middle of
                that I started learning the MERN stack on the side, then went
                deep on vanilla JavaScript, then TypeScript, then everything
                modern around React and Node.
              </p>
              <p>
                In June 2024, I joined Renewalytics as a Software Engineer,
                got promoted to Lead Software Engineer on the back of what I
                shipped. This is where it clicked. Real stakes, 3,400+ MW of
                capacity flowing through systems I built, SCADA integrations
                that have to stay live, reporting automation for 33+ plants
                that runs every single day. You don&apos;t learn this stuff
                from tutorials. You learn it by being on call when something
                breaks at 6 AM.
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
                    Software Engineer → Lead Software Engineer
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Jun 2024 – Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Renewalytics · Promoted to Lead based on what I shipped
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Full-stack development, backend architecture, Docker
                  infrastructure, realtime monitoring systems, SCADA integrations,
                  reporting automation. Owning technical architecture for a
                  platform serving 3,400+ MW of renewable energy capacity.
                </p>
              </div>
            </StaggerItem>

            {/* CCD, Software Engineer */}
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
                  Built ARS (Automatic Reporting System) for wind and solar
                  plants, full-stack PHP development. Owned features end-to-end
                  and led frontend architecture decisions.
                </p>
              </div>
            </StaggerItem>

            {/* CCD, Full Stack Engineer */}
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
                  PHP, database design, full-stack feature delivery on the
                  renewable energy product surface.
                </p>
              </div>
            </StaggerItem>

            {/* CCD, Intern */}
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
                  Onboarding, learning PHP and modern web development on the
                  job. First real exposure to production software development.
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
                  PGDM, IT Management
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  MIT School of Management, Final Semester
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
                I want to be an indie hacker who pays the bills with his own
                products. The day job at Renewalytics is real and I love it, but
                the long game is shipping AI-native SaaS that earns on its own.
                Pieter Levels is the template. Ship fast, kill faster, keep what
                works.
              </p>
              <p>
                Right now I&apos;m in the &quot;ship and learn&quot; phase, not
                the &quot;scale a winner&quot; phase. Here&apos;s what that
                actually looks like:
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-6 space-y-4">
              {[
                {
                  label: "Social Copilot (MVP)",
                  desc: "Social media scheduler with AI video generation. My main indie bet for the year.",
                  color: "bg-accent-blue",
                },
                {
                  label: "Learning AI agents",
                  desc: "Going deep on agent frameworks and AI workflow tooling. Every indie product I ship from here is AI-native by default.",
                  color: "bg-accent-teal",
                },
                {
                  label: "SEO experiments",
                  desc: "MSMEVault.in and GoSolarIndex.in started as weekend tests. Built with Claude Code, indexed with Claude AI, and they&apos;re actually pulling organic traffic now.",
                  color: "bg-foreground",
                },
                {
                  label: "Day job at Renewalytics",
                  desc: "Leading engineering on forecasting, reporting automation, and realtime monitoring for 3,400+ MW of renewable capacity.",
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
                    <span className="text-muted-foreground">, {item.desc}</span>
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
                desc: "Enterprise realtime monitoring system for renewable energy portfolios, WebSockets, MQTT, OPC-UA ingestion, alarm systems, AI-ready telemetry pipelines.",
                link: "/projects/realsync-cms",
              },
              {
                name: "Reflux",
                desc: "Operational platform for solar + hydro forecasting revisions, scheduling, and reporting automation serving 3,400+ MW capacity.",
                link: "/projects/reflux",
              },
              {
                name: "Excel Flow",
                desc: "Reporting automation that generates 30+ daily reports and alerts across 33+ solar, wind, and BESS plants, scraping 30+ daily Excel sheets via cron-based async pipelines.",
                link: "/projects/dgr-automation",
              },
              {
                name: "COPS, Juniper Green",
                desc: "DSM penalties analytics + CMS asset management dashboard for client Juniper Green Energy, covering solar and hydro plants.",
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

      {/* ── Work with me ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Hire me
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Work with me
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I take on a small number of freelance projects on the side.
                I&apos;m most useful to you if you need one of these:
              </p>
              <ul className="space-y-3 pl-4">
                <li>
                  <span className="font-medium text-foreground">
                    Full-stack MVPs for founders.
                  </span>{" "}
                  Idea to deployed product in weeks. Next.js, Prisma, Postgres,
                  Docker. I&apos;ve done it enough times to know the shortcuts
                  and the landmines.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    AI workflow automation for businesses.
                  </span>{" "}
                  If your team is doing repetitive manual work in spreadsheets
                  or email, there&apos;s a good chance I can replace most of it
                  with an AI-driven pipeline. This is exactly what I do at the
                  day job, just for someone else.
                </li>
              </ul>
              <p>
                Not the right fit if you want pure design, pure mobile native,
                or a 6-month enterprise rollout. I work best on scoped,
                shippable things.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Let&apos;s talk →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
