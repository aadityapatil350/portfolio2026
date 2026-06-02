"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Cpu,
  Layers,
  Activity,
  Download,
  Github,
  Terminal,
  Database,
  Cloud,
  Shield,
  GitBranch,
  Braces,
  Server,
  Wifi,
  Search,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  BlurIn,
  TextReveal,
  CountUp,
  StaggerContainer,
  StaggerItem,
  AnimatedLine,
  HoverScale,
  Magnetic,
  Marquee,
  GlowPulse,
} from "@/components/animations";
import { CaseStudyCard } from "@/components/case-study-card";
import { BlogPostCard } from "@/components/blog-post-card";
import type { CaseStudy, Service, IndieProject } from "@/data/site-config";

/* ─── Icon mapping for services ─── */
const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="h-5 w-5" />,
  cpu: <Cpu className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />,
  activity: <Activity className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  messageSquare: <MessageSquare className="h-5 w-5" />,
  lightbulb: <Lightbulb className="h-5 w-5" />,
};

interface BlogPostPreview {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  description?: string;
}

interface HomeContentProps {
  name: string;
  tagline: string;
  subtagline: string;
  location: string;
  available: boolean;
  caseStudies: CaseStudy[];
  services: Service[];
  blogPosts: BlogPostPreview[];
  stats: {
    yearsCoding: string;
    productsShipped: string;
    systemsAtScale: string;
    automatedReports: string;
  };
  resumeUrl: string;
}

export function HomeContent({
  name,
  tagline,
  subtagline,
  location,
  available,
  caseStudies,
  services,
  blogPosts,
  stats,
  resumeUrl,
}: HomeContentProps) {
  return (
    <div>
      {/* ════════════════════════════════════════════════════════════
          HERO, Cinematic with text reveal + grid background
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        {/* Subtle grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

        {/* Gradient orb, very subtle, just for depth */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-blue/5 blur-[120px] dark:bg-accent-blue/3" />
        <div className="pointer-events-none absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-accent-teal/5 blur-[100px] dark:bg-accent-teal/3" />

        <div className="content-width relative px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            {/* ─── LEFT: text content ─── */}
            <div>
          {/* Status line */}
          <FadeIn delay={0.1}>
            <div className="mb-6 flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <GlowPulse className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Currently at Renewalytics
              <span className="text-muted-foreground/50">·</span>
              {available
                ? "Taking freelance projects"
                : "Not taking new projects right now"}
            </div>
          </FadeIn>

          {/* Name, text reveal animation */}
          <div className="overflow-hidden">
            <TextReveal
              text={name}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
              wordDelay={0.06}
            />
          </div>

          {/* Tagline, delayed reveal */}
          <BlurIn delay={0.5} className="mt-2 max-w-3xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground leading-snug tracking-tight">
              {tagline}
            </p>
          </BlurIn>

          {/* Subtagline */}
          <FadeIn delay={0.7}>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              {subtagline}
            </p>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.85}>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Button size="lg" asChild className="gap-2">
                  <Link href="/projects">
                    View Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/hire">Hire Me</Link>
                </Button>
              </Magnetic>
            </div>
          </FadeIn>
            </div>
            {/* ─── /LEFT ─── */}

            {/* ─── RIGHT: portrait + stats ─── */}
            <FadeIn delay={0.3} className="order-first lg:order-none">
              <div className="flex flex-col items-center">
                <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]">
                  <Image
                    src="/hero-portrait-v2.png"
                    alt="Aditya Patil"
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 448px"
                    className="object-contain object-bottom"
                  />
                </div>

                <div className="grid grid-cols-3 gap-6 text-center w-full -mt-4 sm:-mt-6 lg:-mt-8 xl:-mt-10">
                  <div>
                    <div className="font-mono text-2xl xl:text-3xl font-bold tracking-tight">
                      <CountUp target={5} suffix="+" />
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      Years shipping
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-2xl xl:text-3xl font-bold tracking-tight">
                      <CountUp target={36} suffix="+" />
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      Products shipped
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-2xl xl:text-3xl font-bold tracking-tight">
                      <CountUp target={13} suffix="+" />
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      Clients served
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            {/* ─── /RIGHT ─── */}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TECH MARQUEE, Scrolling tech stack bar
      ════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border py-5 bg-muted/30">
        <Marquee speed={40} className="opacity-50">
          {[
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Prisma",
            "MQTT",
            "WebSockets",
            "Tailwind CSS",
            "SCADA",
            "AI Workflows",
            "OPC-UA",
            "Realtime Systems",
            "Automation",
          ].map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-mono text-muted-foreground"
            >
              <Braces className="h-3 w-3" />
              {tech}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICES, What I Build
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What I can build for you
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Three things I do best, drawn from what I ship every day in
              production. Senior engineering, not an agency.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <HoverScale>
                    <div className="group relative h-full rounded-xl border border-border p-6 transition-colors hover:border-foreground/15">
                      {/* Icon */}
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5">
                        <span className="text-accent-blue">
                          {iconMap[service.icon] || <Layers className="h-5 w-5" />}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Capabilities */}
                      <ul className="mt-4 space-y-1.5">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span className="h-1 w-1 rounded-full bg-accent-blue" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </HoverScale>
                </StaggerItem>
              ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Also available for:</span>{" "}
              SEO-ready small business websites · AI chatbots + lead capture ·
              technical advisory for non-technical founders.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ANIMATED DIVIDER
      ════════════════════════════════════════════════════════════ */}
      <div className="content-width px-4 sm:px-6">
        <AnimatedLine />
      </div>


      {/* ════════════════════════════════════════════════════════════
          FEATURED WORK, Case studies with stagger + metrics
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Portfolio
            </div>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Featured Systems
              </h2>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                All case studies
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </FadeIn>

          {/* Primary case study, large card */}
          <BlurIn delay={0.15} className="mt-10">
              <div
                className="block overflow-hidden rounded-xl border border-border"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left, visual */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-accent-blue/5 to-accent-teal/5 p-10 lg:p-16 min-h-[240px]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <div className="relative">
                      <Terminal className="h-12 w-12 text-accent-blue/60" />
                      <div className="mt-2 font-mono text-xs text-muted-foreground">
                        {caseStudies[0].tech.slice(0, 3).join(" / ")}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full border border-border bg-background/80 px-2.5 py-0.5 text-xs font-medium">
                        {caseStudies[0].status}
                      </span>
                    </div>
                  </div>

                  {/* Right, content */}
                  <div className="p-6 lg:p-10">
                    <h3 className="text-xl font-semibold group-hover:text-accent-blue transition-colors">
                      {caseStudies[0].title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {caseStudies[0].description}
                    </p>

                    {/* Metrics */}
                    {caseStudies[0].metrics && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {caseStudies[0].metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {caseStudies[0].tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border px-2 py-0.5 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </BlurIn>

          {/* Other case studies, 2x2 grid */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {caseStudies.slice(1).map((study, i) => (
              <FadeIn key={study.slug} delay={0.1 * (i + 1)}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NOW, what I'm working on right now
      ════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-muted/20 py-20 sm:py-28">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Now
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  What I&apos;m working on right now
                </h2>
              </div>
              <Link
                href="/now"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Full now page
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-border bg-background p-6 h-full">
                <div className="mb-3 text-xs font-mono uppercase tracking-widest text-accent-blue">
                  At work
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  At Renewalytics I wear most of the hats. Owning the engineering
                  roadmap, managing servers and infra, guiding the junior devs,
                  handling client conversations, and shipping the actual code.
                  Right now: a Reflux chatbot for natural-language forecast
                  queries, and pushing RealSync toward its first paying customer.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-border bg-background p-6 h-full">
                <div className="mb-3 text-xs font-mono uppercase tracking-widest text-accent-teal">
                  Indie projects
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Social Copilot</span>{" "}
                  is my main bet, social scheduler with AI video gen. MVP in
                  progress. <span className="font-medium text-foreground">GoSolarIndex</span> and{" "}
                  <span className="font-medium text-foreground">MSMEVault</span>{" "}
                  are live SEO experiments built with Claude Code, both pulling
                  real organic traffic.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="rounded-xl border border-border bg-background p-6 h-full">
                <div className="mb-3 text-xs font-mono uppercase tracking-widest text-foreground/70">
                  Learning
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Going deep on AI agents and agent frameworks. Every indie
                  product I ship from here on out is AI-native by default, not
                  a feature bolted on. Reading code more than docs.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ANIMATED STATS, with count-up
      ════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-20 hidden">
        <div className="content-width px-4 sm:px-6">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <StaggerItem>
              <div className="text-center">
                <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                  <CountUp target={5} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Years shipping systems</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                  <CountUp target={36} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Products shipped</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                  <CountUp target={13} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Clients served</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ENGINEERING IDENTITY, What sets me apart
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Engineering Identity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
              Not a tutorial developer. A systems builder.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              I don&apos;t learn a stack from a YouTube video and call it a day.
              I build things that have to stay up, get paged for, and survive
              the messy edges of real users and real data.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Database className="h-5 w-5" />,
                title: "Backend-First Full-Stack",
                desc: "I think in data models, APIs, and system boundaries before pixels. Production databases, cron systems, and ingestion pipelines are my playground.",
              },
              {
                icon: <Cloud className="h-5 w-5" />,
                title: "Infrastructure Owner",
                desc: "Docker, Linux servers, CI/CD pipelines, monitoring, I deploy and operate what I build. No hand-off to DevOps.",
              },
              {
                icon: <Wifi className="h-5 w-5" />,
                title: "Realtime Systems",
                desc: "WebSockets, MQTT, OPC-UA, event-driven architectures. I build systems where latency matters and data flows continuously.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Production Hardened",
                desc: "Security incident response (CVE-2025-55182), production debugging, 99.9% uptime systems. I've been paged at 3 AM and shipped the fix.",
              },
              {
                icon: <GitBranch className="h-5 w-5" />,
                title: "Startup Speed",
                desc: "Built GoSolarIndex in 3 days. Shipped Excel Flow in a sprint. I turn chaos into working systems under real pressure.",
              },
              {
                icon: <Cpu className="h-5 w-5" />,
                title: "AI-Native Thinking",
                desc: "Moving toward AI agents, operational copilots, and agentic workflows. Not just using AI, building systems that are AI-native.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.08 * (i + 1)}>
                <div className="group flex flex-col gap-3 rounded-xl border border-border p-5 transition-colors hover:border-foreground/15">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-accent-blue transition-colors group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="content-width px-4 sm:px-6">
        <AnimatedLine />
      </div>

      {/* ════════════════════════════════════════════════════════════
          LATEST WRITING
      ════════════════════════════════════════════════════════════ */}
      {blogPosts.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="content-width px-4 sm:px-6">
            <FadeIn>
              <div className="flex items-end justify-between">
                <div>
                  <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Blog
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Latest Writing
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All posts
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {blogPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={0.1 * (i + 1)}>
                  <BlogPostCard post={post} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          CONTACT CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-border">
        <div className="content-width px-4 sm:px-6 py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Work with me
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Have a business problem to solve?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Websites, web apps, AI automation, internal tools &mdash;
                whatever the shape of the problem, I architect it, build it,
                and stay on call when it breaks. Let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Magnetic>
                  <Button size="lg" asChild className="gap-2">
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" asChild className="gap-2">
                    <a href="[MY_CAL_LINK]" target="_blank" rel="noopener noreferrer">
                      Book a call
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
