import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, BlurIn } from "@/components/animations";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent systems engineer building operational software that survives real use. Renewable energy scale, sector-neutral offer, based in Pune, India.",
  openGraph: {
    title: "About | Aditya Patil",
    description:
      "Independent systems engineer building operational software that survives real use. Based in Pune, India.",
    url: "https://adityapatil.work/about",
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
              I build software that survives real operational use.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Aditya. I lead engineering at a renewable energy SaaS
              company in Pune, where the systems I build carry 3,400+ MW of
              live plant data, 33+ automated daily reports, and AI agents that
              read operational chatter across dozens of sites. The scale keeps
              me honest. If a report fails to arrive by 8 AM, someone&apos;s
              phone rings.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              On the side, I take on independent projects for founders and
              operations leads who need something built once and built to last.
              Fixed scope, fixed price, delivered on the date I promised.
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
                know about code, I taught myself.
              </p>
              <p>
                It started with games. I wanted to build my own, so I picked up
                C# and Unity, spent late nights chasing tutorials and breaking
                things until something moved on screen. Some of that early work
                still lives at{" "}
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
                From there I jumped into web. I picked up PHP at my first
                internship at Climate Connect Digital and shipped it for two
                and a half years, mostly building an automatic reporting system
                for wind and solar plants. Got promoted twice. Then got laid
                off in the 2024 round. Somewhere in the middle I started
                learning the MERN stack on the side, then went deep on vanilla
                JavaScript, TypeScript, and the modern React and Node stack.
              </p>
              <p>
                In June 2024, I joined a renewable energy SaaS company as a
                Software Engineer and got promoted to Lead Engineer on the
                back of what I shipped. This is where it clicked. Real stakes.
                Systems that have to stay live. Reporting automation for 33+
                plants that runs every single day. You do not learn this from
                tutorials. You learn it by being on call when something breaks
                at 6 AM.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── How I work ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              How I work
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              What working with me actually looks like
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-6 space-y-4">
              {[
                {
                  label: "Fixed scope, fixed price",
                  desc: "Every project starts with a paid scoping sprint. You get a written scope, a fixed quote, and a delivery date. No hourly billing games.",
                },
                {
                  label: "One senior engineer, not a team",
                  desc: "You get me. The person who wrote the code is the person you talk to. No account manager in the middle, no junior developer copy-pasting your requirements.",
                },
                {
                  label: "WhatsApp for the fast lane",
                  desc: "The main channel is WhatsApp. Async, fast, everything in one thread. Weekly video call if the project needs it.",
                },
                {
                  label: "Ship in weeks, not quarters",
                  desc: "Most builds are 2 to 8 weeks. If your project cannot be scoped into a small first release, we should talk about whether you actually need something bigger or something smaller.",
                },
                {
                  label: "Honest about what I will not do",
                  desc: "I do not do pure design work, mobile-native apps, or 6-month enterprise rollouts. If your project is one of those, I will tell you and point you at someone better.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <div>
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      &mdash; {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
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
                The day job is real and I love it. The long game is shipping
                AI-native products that earn on their own. Pieter Levels is the
                template. Ship fast, kill faster, keep what works.
              </p>
              <p>
                Right now I am in the &quot;ship and learn&quot; phase, not the
                &quot;scale a winner&quot; phase. Here is what that looks like:
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-6 space-y-4">
              {[
                {
                  label: "AI agents in production",
                  desc: "Shipped an AI ops agent monitoring 35+ sites and an autonomous forecasting agent that runs continuously across a portfolio. Every indie product from here is AI-native by default.",
                  color: "bg-accent-teal",
                },
                {
                  label: "Social Copilot (MVP)",
                  desc: "Social media scheduler with AI video generation. My main indie bet for the year.",
                  color: "bg-accent-blue",
                },
                {
                  label: "SEO experiments",
                  desc: "MSMEVault.in and GoSolarIndex.in started as weekend tests. Built with Claude Code, indexed with Claude AI, and pulling organic traffic now.",
                  color: "bg-foreground",
                },
                {
                  label: "Day job",
                  desc: "Leading engineering on forecasting, reporting automation, realtime monitoring, and now AI agents for 3,400+ MW of renewable capacity.",
                  color: "bg-muted-foreground",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span
                    className={`mt-2 block h-1.5 w-1.5 shrink-0 rounded-full ${item.color}`}
                  />
                  <div>
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      &mdash; {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Work with me ── */}
      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <BlurIn>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Work with me
            </span>
          </BlurIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The fastest way to know if we are a fit: message me on WhatsApp
              with what you are trying to build or fix. I usually reply within
              a business day, and if it is not something I can help with, I
              will tell you and try to point you at someone who can.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WhatsAppCTA
                variant="primary"
                context="about page"
                label="Message on WhatsApp"
                size="lg"
                showArrow
              />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                See the service catalogue
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
