import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  EyeOff,
  UserX,
  Layers,
  ArrowRight,
  Handshake,
  DollarSign,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "White-Label Engineering Delivery Partner for Agencies | Aditya Patil",
  description:
    "White-label senior engineering capacity for design, marketing, and SEO agencies in India. Fixed project rates, strict NDA, zero client contact, and reliable delivery.",
  openGraph: {
    title: "Agency Delivery Partner (White Label) | Aditya Patil",
    description:
      "Reliable full-stack engineering capacity under your agency brand. Fixed pricing, NDA guaranteed, zero client poaching.",
    url: "https://adityapatil.work/partners",
  },
};

export default function AgencyPartnersPage() {
  const guarantees = [
    {
      icon: Lock,
      title: "Strict Bilateral NDA",
      desc: "Signed before we review client specifications. My name and company brand never appear on deliverables.",
    },
    {
      icon: EyeOff,
      title: "100% White-Label Staging",
      desc: "All preview environments, GitHub commits, and staging links run under your agency domain or neutral subdomains.",
    },
    {
      icon: UserX,
      title: "Zero Direct Client Contact",
      desc: "I do not talk to your client unless you explicitly invite me onto a call as your in-house Technical Lead. Zero poaching.",
    },
    {
      icon: DollarSign,
      title: "Fixed-Price Project Quotes",
      desc: "You get a fixed partner rate upfront so you can quote your client with a healthy margin (30–50%+) without margin erosion.",
    },
  ];

  const pilotProjects = [
    {
      type: "Custom Web App / MVP",
      scope: "Full-stack Next.js + PostgreSQL + Auth + Payments + Admin Panel",
      timeline: "3–6 weeks",
      partnerRate: "₹1.5L – ₹4L (Your retail quote: ₹3L – ₹7L)",
      desc: "You design the Figma UI and handle client account management. I build the complete backend, database, APIs, integrations, and deployment.",
    },
    {
      type: "Internal Dashboard or Portal",
      scope: "Role-based operations panel, data tables, PDF generation, CSV sync",
      timeline: "2–4 weeks",
      partnerRate: "₹1L – ₹2.5L (Your retail quote: ₹2L – ₹4.5L)",
      desc: "Client outgrew spreadsheets. You provide brand assets and workflows; I deliver a hardened, mobile-ready operational panel.",
    },
    {
      type: "Technical SEO / High-Speed Site",
      scope: "Next.js SSR/SSG, 95+ Core Web Vitals, dynamic sitemaps, JSON-LD",
      timeline: "1–2 weeks",
      partnerRate: "₹50K – ₹1.2L (Your retail quote: ₹1L – ₹2.5L)",
      desc: "Turn your design team's Figma layouts into pixel-perfect, sub-second Next.js websites that dominate Google search benchmarks.",
    },
  ];

  return (
    <div className="content-width px-4 sm:px-6 py-12 sm:py-20">
      {/* ── Header ── */}
      <section className="max-w-3xl">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            <Handshake className="h-3.5 w-3.5 text-emerald-500" />
            <span>Agency Delivery Track (White Label)</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Senior engineering capacity under your agency brand.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Pitched to owners of 5–30 person design, marketing, and SEO agencies in India who win high-value software projects they cannot staff in-house.
          </p>
        </FadeIn>
      </section>

      {/* ── The Agency Problem ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            The Business Reality
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            The agency dilemma: turning away builds vs. gambling on freelancers
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              Your agency has strong client trust. Clients ask you for custom web applications, member portals, or complex automation pipelines alongside branding and marketing retainers.
            </p>
            <p>
              You are stuck between two bad options: turning down the project (leaving ₹3L–₹10L of revenue on the table) or hiring an unvetted freelancer who vanishes three days before the staging deadline.
            </p>
            <p>
              I provide an alternative: direct senior engineering delivery on a fixed-scope basis. You own the client relationship and capture healthy gross margins. I architect, build, and deploy the software with zero friction.
            </p>
          </div>

          <div className="mt-8">
            <WhatsAppCTA
              context="agency partner page"
              customMessage="Hi Aditya, I run an agency and want to discuss a delivery partnership."
              label="Discuss a Partnership on WhatsApp"
              size="lg"
              showArrow
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Explicit Guarantees ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Risk Elimination
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Non-negotiable partner guarantees
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* ── Indicative Partner Rates & Examples ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Commercial Structure
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Indicative partner pricing &amp; project types
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Wholesale engineering rates structured so your agency maintains 30% to 50%+ profit margin.
          </p>

          <div className="mt-8 space-y-6">
            {pilotProjects.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-4">
                  <h3 className="text-xl font-bold text-foreground">{p.type}</h3>
                  <span className="font-mono text-xs rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
                    {p.timeline}
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono bg-muted/30 p-3 rounded-xl border border-border/60">
                  <div>
                    <span className="text-muted-foreground">Scope: </span>
                    <span className="text-foreground">{p.scope}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Partner Rate: </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{p.partnerRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Entry Path: Pilot Project ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
              The Low-Risk Entry Path
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
              Start with one small pilot project
            </h2>
            <p className="mt-3 text-base text-foreground/90 leading-relaxed">
              No long-term contracts, minimum spend commitments, or upfront retainers.
              We test the working rhythm on one small fixed-scope client module or MVP.
              Once your team experiences seamless delivery, we expand to larger builds.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <WhatsAppCTA
                context="Agency Pilot Project"
                customMessage="Hi Aditya, I run an agency and want to discuss a delivery partnership."
                label="Message on WhatsApp"
                size="lg"
                showArrow
              />
              <a
                href="mailto:adityabiz350@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
              >
                <span>Email Specification (NDA Ready)</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
