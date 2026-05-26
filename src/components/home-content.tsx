"use client";

import Link from "next/link";
import { MapPin, Code2, Search, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { CaseStudyCard } from "@/components/case-study-card";
import { BlogPostCard } from "@/components/blog-post-card";
import { Stat } from "@/components/stat";
import { siteConfig, stats as statsConfig } from "@/data/site-config";
import type { CaseStudy } from "@/data/site-config";

interface BlogPostPreview {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  description?: string;
}

interface HomeContentProps {
  tagline: string;
  location: string;
  available: boolean;
  caseStudies: CaseStudy[];
  blogPosts: BlogPostPreview[];
  stats: { yearsCoding: string; productsShipped: string; xFollowers: string };
}

export function HomeContent({
  tagline,
  location,
  available,
  caseStudies,
  blogPosts,
  stats,
}: HomeContentProps) {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="py-16 sm:py-24">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Aditya
            </h1>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {location}
              </span>

              {available && (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to freelance + full-time
                </span>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" size="lg" asChild>
                <Link href="/work">See my work</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Featured Work
            </h2>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.slug} delay={0.05 * (i + 1)}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I Do ─── */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What I do
            </h2>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
                  <Code2 className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="font-semibold text-lg">Build SaaS Products</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full-stack SaaS from idea to production. Next.js, TypeScript,
                  PostgreSQL, and AI-powered features. I architect systems that
                  scale and ship fast.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
                  <Search className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="font-semibold text-lg">Ship SEO Directories</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organic traffic machines built on technical SEO. From indexing
                  strategy to monetization. GoSolarIndex and MSMEVault are proof.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
                  <Zap className="h-5 w-5 text-accent-teal" />
                </div>
                <h3 className="font-semibold text-lg">
                  Engineer for Climate Tech
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renewable energy forecasting, energy trading, SCADA
                  integration. Production software serving real power plants.
                  This is my deepest domain.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Latest Writing ─── */}
      {blogPosts.length > 0 && (
        <section className="border-t border-border py-16 sm:py-24">
          <div className="content-width px-4 sm:px-6">
            <FadeIn>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Latest writing
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All posts
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </FadeIn>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {blogPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={0.05 * (i + 1)}>
                  <BlogPostCard post={post} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Stats Strip ─── */}
      <section className="border-t border-border py-12 sm:py-16">
        <div className="content-width px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <FadeIn delay={0.05}>
              <Stat value={stats.yearsCoding} label="Years coding" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <Stat
                value={stats.productsShipped}
                label="Products shipped"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <Stat value={stats.xFollowers || "0"} label="X followers" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <Stat value={siteConfig.location} label="Based in India" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="content-width px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I&apos;m currently open to freelance contracts and full-time
                roles in climate tech.
              </p>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
