import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  XCircle,
  Clock,
  IndianRupee,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Building2,
  Layers,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://adityapatil.work/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://adityapatil.work/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  // JSON-LD schema generation
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Aditya Patil",
      url: "https://adityapatil.work",
      telephone: "+91-9373238164",
    },
    offers: {
      "@type": "Offer",
      price: service.priceFrom.replace(/[^0-9]/g, "") || "50000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://adityapatil.work",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://adityapatil.work/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://adityapatil.work/services/${slug}`,
      },
    ],
  };

  return (
    <div className="content-width px-4 sm:px-6 py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Breadcrumb & Tier ── */}
      <FadeIn>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{service.title}</span>
        </div>
      </FadeIn>

      {/* ── Hero Section ── */}
      <section className="max-w-4xl">
        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{service.tier}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {service.h1}
          </h1>
        </FadeIn>

        {/* Pricing & Timeline Pill Bar */}
        <FadeIn delay={0.15}>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-muted/40 p-4 font-mono text-sm">
            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4 text-emerald-500" />
              <span className="text-muted-foreground">Investment:</span>
              <span className="font-semibold text-foreground">{service.priceFrom}</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-blue" />
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-semibold text-foreground">{service.timeline}</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span className="text-foreground">Fixed Scope &amp; Outcome</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 1: The Pain (Status Quo) ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            The Operational Reality
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {service.painHeadline}
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            {service.painBody.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* CTA #1: After Pain */}
          <div className="mt-8">
            <WhatsAppCTA
              context={`${service.title} (pain section)`}
              label="Discuss Your Operational Bottleneck on WhatsApp"
              size="lg"
              showArrow
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Section 2: Deliverables (What You Get) ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Concrete Deliverables
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            What you actually receive
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatYouGet.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-emerald-500/40"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                <p className="text-sm sm:text-base leading-snug text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 3: What This Is NOT (Boundary Setting) ── */}
      <section className="mt-12 max-w-4xl">
        <FadeIn>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 dark:border-amber-500/15">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              <XCircle className="h-4 w-4" />
              <span>What this service is NOT</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {service.whatThisIsNot.map((notItem, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{notItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA #2: After Deliverables & Boundaries */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppCTA
              context={`${service.title} (deliverables & scope)`}
              label="Get a Fixed Quote on WhatsApp"
              size="lg"
              showArrow
            />
            <span className="text-xs text-muted-foreground font-mono">
              Direct response within 4 hours
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 4: How It Works (Order of Execution) ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Structured Delivery
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            How we execute from start to finish
          </h2>
          <div className="mt-8 space-y-6">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-border bg-muted/20 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-bold text-background">
                  0{step.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <span className="rounded-md border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 5: Real Proof of Severity ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Proof of Engineering Severity
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Proven in high-concurrency production
          </h2>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                Production System Benchmark
              </span>
              <span className="font-mono text-xs text-muted-foreground">{service.proof.metrics}</span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-foreground">{service.proof.system}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {service.proof.description}
            </p>
            <div className="mt-6 border-t border-border/80 pt-4 font-mono text-xs sm:text-sm text-foreground/90 bg-muted/30 p-3 rounded-lg">
              <span className="font-bold text-accent-blue">Takeaway: </span>
              {service.proof.takeaway}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 6: Who This Is NOT For ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Filtering Inquiries
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Who this is not for
          </h2>
          <div className="mt-6 space-y-3">
            {service.notFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                <XCircle className="h-5 w-5 shrink-0 text-muted-foreground/60 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 7: FAQs ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Direct Answers
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 8: Related Services ── */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="mt-16 max-w-4xl border-t border-border pt-12">
          <FadeIn>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Related Capabilities
            </div>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground">
              Explore complementary services
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group block rounded-xl border border-border p-4 transition-colors hover:border-foreground/20 bg-card hover:bg-muted/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-foreground group-hover:text-emerald-500 transition-colors">
                      {rel.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Final Closing Section: CTA #3 ── */}
      <section className="mt-20 max-w-4xl rounded-2xl border border-border bg-muted/40 p-8 sm:p-12 text-center">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Next Step
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Ready to solve this in your business?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed">
            Message me directly on WhatsApp with your current process or spreadsheet format.
            I will review it and reply with scope clarity and a timeline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <WhatsAppCTA
              context={`${service.title} (bottom CTA)`}
              label={`Start ${service.title} Discussion`}
              size="lg"
              showArrow
            />
            <a
              href="tel:+919373238164"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <span>Call +91 93732 38164</span>
            </a>
          </div>

          <p className="mt-6 text-xs font-mono text-muted-foreground">
            Pune, India · Available for businesses worldwide · Response time: under 4 hours
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
