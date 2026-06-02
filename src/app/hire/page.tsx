import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  Globe,
  Layout,
  AppWindow,
  Database,
  Cpu,
  Zap,
} from "lucide-react";
import { FadeIn, BlurIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { EmailDialog } from "@/components/contact/email-dialog";

export const metadata: Metadata = {
  title: "Hire me — websites, web apps, and AI automation built in days",
  description:
    "Senior engineer for hire. I build websites, web apps, and AI workflow automation for founders, small businesses, and ops teams. Starting at ₹15k. Pune, India.",
  openGraph: {
    title: "Hire Aditya — websites, web apps, AI automation",
    description:
      "Senior engineer for hire. Websites from ₹15k, business sites from ₹50k, MVPs from ₹1L. Built in days, not months.",
    url: "https://adityapatil.work/hire",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919373238164?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project.";

const services = [
  { icon: Layout, name: "Landing pages", desc: "Single-page sites that convert" },
  { icon: Globe, name: "Business websites", desc: "Multi-page, CMS-ready, SEO-friendly" },
  { icon: AppWindow, name: "Web apps & MVPs", desc: "Full-stack products, ready to launch" },
  { icon: Database, name: "Internal dashboards", desc: "Admin panels, ops tools, reporting" },
  { icon: Cpu, name: "AI automation", desc: "Replace manual work with AI pipelines" },
  { icon: Zap, name: "Speed-ups & fixes", desc: "Bug squashing, perf, migrations" },
];

const portfolio = [
  {
    title: "GoSolarIndex.in",
    desc: "Solar installer directory, page-1 rankings in 2 weeks via technical SEO.",
    url: "https://gosolarindex.in",
    tag: "Directory · SEO",
  },
  {
    title: "MSMEVault.in",
    desc: "Government scheme directory monetised through NBFC lead generation.",
    url: "https://msmevault.in",
    tag: "Directory · Lead-gen",
  },
  {
    title: "Reflux (Renewalytics)",
    desc: "Forecasting + scheduling platform serving 40+ plants across 13+ clients.",
    tag: "Enterprise · Production",
  },
  {
    title: "Excel Flow (Acme client)",
    desc: "Reporting automation + ops dashboard for 33+ plants. Replaces a 4-hour manual Excel workflow with a one-click dashboard the ops team actually uses.",
    tag: "Automation · Dashboard",
  },
  {
    title: "COPS (Juniper Green)",
    desc: "DSM penalties + CMS asset dashboard for a 14-plant renewable portfolio.",
    tag: "Dashboard · B2B",
  },
  {
    title: "Social Copilot (MVP)",
    desc: "Social scheduler with AI video generation. Indie product in development.",
    tag: "SaaS · AI",
  },
];

const packages = [
  {
    name: "Starter site",
    price: "From $199 / ₹15,000",
    timeline: "3–5 days",
    desc: "Single landing page, Next.js, mobile-first, contact form, basic SEO. Best for solo creators, freelancers, small services.",
    includes: [
      "1 landing page (up to 6 sections)",
      "Mobile + desktop responsive",
      "Contact form to your email",
      "Basic on-page SEO",
      "Deployed on Vercel",
    ],
  },
  {
    name: "Business website",
    price: "From $599 / ₹50,000",
    timeline: "1–2 weeks",
    highlighted: true,
    desc: "Multi-page Next.js site, CMS for blog/content updates, Google Business setup, structured SEO. For shops, clinics, agencies, B2B services.",
    includes: [
      "Up to 8 custom pages",
      "Blog / content CMS (you update yourself)",
      "Full SEO setup + sitemap",
      "Google Business + Analytics",
      "Contact form + WhatsApp button",
      "14 days of post-launch support",
    ],
  },
  {
    name: "Web app / MVP",
    price: "From $1,199 / ₹1,00,000",
    timeline: "2–4 weeks",
    desc: "Full-stack product, auth, database, dashboards, payments if needed. For founders shipping a real product fast.",
    includes: [
      "Custom backend + database",
      "Auth, user accounts, roles",
      "Admin dashboard",
      "Payments integration (Razorpay/Stripe)",
      "Deployed production-ready",
      "30 days of post-launch support",
    ],
  },
];

const process = [
  { step: "01", name: "Brief", desc: "WhatsApp me what you need. Doesn't have to be polished." },
  { step: "02", name: "Quote in 24h", desc: "Fixed price, fixed timeline, no surprises." },
  { step: "03", name: "Build", desc: "I share progress every 2–3 days. You see it grow." },
  { step: "04", name: "Live + support", desc: "Deploy, hand over, and stay around to fix anything." },
];

const faqs = [
  {
    q: "How long does it really take?",
    a: "Starter sites in 3–5 days, business sites in 1–2 weeks, web apps in 2–4 weeks. I commit to a date in the quote. If I'll miss it, you hear from me first, never after.",
  },
  {
    q: "Will I own the code?",
    a: "100%. You get the repo, the deployment, the domain, everything. Even if we part ways, you're never locked in.",
  },
  {
    q: "Is hosting included?",
    a: "I set it up on Vercel (free tier covers most small sites) or a cheap VPS if needed. You pay the hosting bill directly (usually ₹0–₹500/month). I don't mark it up.",
  },
  {
    q: "What if I want changes after launch?",
    a: "Every package includes a post-launch support window (14–30 days) for tweaks. After that, small changes are ₹2–5k each, or I can put you on a monthly retainer.",
  },
  {
    q: "Why these rates?",
    a: "I lead engineering at a SaaS company by day, so freelance isn't my rent. That means I take work I'm interested in, deliver senior-quality code, and price it fairly for the Indian market instead of agency-padded.",
  },
  {
    q: "Do you do design too?",
    a: "I'm an engineer, not a designer. I work great with your designer's Figma, or use clean modern templates (Tailwind, shadcn). If you need a brand-new visual identity, I'll point you to a designer I trust.",
  },
];

export default function HirePage() {
  return (
    <div className="content-width px-4 sm:px-6">
      {/* ─── HERO ─── */}
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Taking projects · Starting at $199 / ₹15k
              </div>
            </FadeIn>
            <BlurIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                I build websites and web apps that actually ship.
              </h1>
            </BlurIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                For founders, small businesses, and ops teams who need a senior
                engineer, not an agency. Days, not months. Fixed price, no
                surprises.
              </p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp me
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  See packages
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            What I build
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Six things I&apos;m good at
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.06} className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((s) => (
            <StaggerItem key={s.name}>
              <div className="h-full rounded-lg border border-border p-4 sm:p-5">
                <s.icon className="h-5 w-5 text-accent-blue mb-3" />
                <h3 className="text-sm sm:text-base font-semibold">{s.name}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ─── RECENT WORK ─── */}
      <section className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Recent work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Things I&apos;ve shipped
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            From indie SEO sites to enterprise platforms serving 3,400+ MW of
            renewable capacity. Same person, same care.
          </p>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-border p-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent-blue mb-2">
                  {p.tag}
                </div>
                <h3 className="font-semibold">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-blue transition-colors"
                    >
                      {p.title} ↗
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section id="packages" className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pick what fits. Prices are real.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Anything below isn&apos;t enough for me to take seriously. Anything
            above gets a real quote within 24 hours.
          </p>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.1}>
              <div
                className={`h-full rounded-xl border p-6 ${
                  pkg.highlighted
                    ? "border-accent-blue/40 bg-accent-blue/5 shadow-lg shadow-accent-blue/5"
                    : "border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="mb-3 inline-block rounded-full bg-accent-blue/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-accent-blue">
                    Most picked
                  </div>
                )}
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="mt-1 font-mono text-2xl font-bold text-foreground">
                  {pkg.price}
                </p>
                <p className="mt-0.5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {pkg.timeline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pkg.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WHATSAPP_URL}%0A%0APackage%3A%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    pkg.highlighted
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get a quote
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Need something bigger or weirder?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              Let&apos;s talk
            </a>
            .
          </p>
        </FadeIn>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            How it works
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Four steps. No agency theatre.
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {process.map((p) => (
            <StaggerItem key={p.step}>
              <div className="rounded-lg border border-border p-5">
                <div className="font-mono text-xs text-muted-foreground">{p.step}</div>
                <h3 className="mt-2 font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ─── WHY ME ─── */}
      <section className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Why me
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-2xl">
            You&apos;re not paying for a junior to learn on your project.
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Senior engineering by day",
              desc: "Lead engineer at Renewalytics, running production systems for 3,400+ MW of renewable capacity. Your project gets the same standards.",
            },
            {
              title: "16+ products shipped (most killed)",
              desc: "I've shipped enough indie products and watched enough fail to know what survives. You inherit those scars, not pay for them.",
            },
            {
              title: "Indian timezone, real-person reply",
              desc: "WhatsApp me directly. Expect a real reply within hours, not days. No account managers, no slow async ping-pong.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-lg border border-border p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-16 border-t border-border">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Honest answers to honest questions
            </h2>
          </div>
        </FadeIn>
        <div className="mt-8 mx-auto max-w-2xl">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <details className="group border-b border-border py-4">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span className="font-mono text-xl text-muted-foreground group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 sm:py-24 border-t border-border">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Got a project? Let&apos;s build it.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell me what you have in mind. I reply within hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp +91 93732 38164
              </a>
              <EmailDialog triggerLabel="Email" />
            </div>
            <div className="mt-12">
              <Link
                href="/"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to the full portfolio
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
