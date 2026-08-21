import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  AlertTriangle,
  Layers,
  Sparkles,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { FadeIn } from "@/components/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://adityapatil.work/industries/${slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://adityapatil.work/industries/${slug}`,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.title,
    description: industry.metaDescription,
    url: `https://adityapatil.work/industries/${slug}`,
  };

  return (
    <div className="content-width px-4 sm:px-6 py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <FadeIn>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Industries</span>
          <span>/</span>
          <span className="text-foreground font-semibold">{industry.title}</span>
        </div>
      </FadeIn>

      {/* ── Hero Section ── */}
      <section className="max-w-4xl">
        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            <Layers className="h-3.5 w-3.5" />
            <span>Sector Focus</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {industry.h1}
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-xl font-medium text-muted-foreground leading-relaxed">
            {industry.painHeadline}
          </p>
        </FadeIn>
      </section>

      {/* ── Section 1: Specific Operational Pains ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Where Workflows Break Down
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Common operational bottlenecks in {industry.title.toLowerCase()}
          </h2>
          <div className="mt-8 space-y-4">
            {industry.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-bold">
                    !
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <WhatsAppCTA
              context={`${industry.title} industry page (bottlenecks)`}
              label={`Discuss ${industry.title} Workflow on WhatsApp`}
              size="lg"
              showArrow
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Section 2: Recommended Services ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Recommended Engineering Engagements
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            How we solve these problems
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {industry.recommendedServices.map((rec) => (
              <Link
                key={rec.slug}
                href={`/services/${rec.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-emerald-500/40 hover:shadow-sm"
              >
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    {rec.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {rec.why}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>View service details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 3: Honest Assessment & Cross-Domain Proof ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-blue font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Honest Sector Assessment</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-foreground">
              What I have and haven&apos;t built in this domain
            </h2>
            <p className="mt-3 text-base text-foreground/90 leading-relaxed">
              {industry.honestAssessment}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 4: FAQs ── */}
      <section className="mt-16 max-w-4xl border-t border-border pt-12">
        <FadeIn>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Questions &amp; Clarifications
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {industry.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="mt-20 max-w-4xl rounded-2xl border border-border bg-muted/40 p-8 sm:p-12 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Have a {industry.title} project in mind?
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base text-muted-foreground leading-relaxed">
            Message me on WhatsApp. Tell me your data sources, volume, and manual steps.
            I will give you a concrete technical perspective within 4 hours.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsAppCTA
              context={`${industry.title} industry consultation`}
              label={`Consult on ${industry.title} Project`}
              size="lg"
              showArrow
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
