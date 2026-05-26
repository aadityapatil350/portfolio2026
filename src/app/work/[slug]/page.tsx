import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxOptions } from "@/lib/mdx-options";
import { Prose } from "@/components/prose";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site-config";
import { TechBadge } from "@/components/tech-badge";
import { StatusBadge } from "@/components/status-badge";
import { ArrowLeft } from "lucide-react";
import type { ProjectStatus } from "@/data/site-config";

export async function generateStaticParams() {
  const slugs = getAllSlugs("work");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("work", slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/work/${slug}`,
    },
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("work", slug);

  if (!post) notFound();

  return (
    <section className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
        </FadeIn>

        {/* Case study header */}
        <FadeIn delay={0.05}>
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              {post.status && (
                <StatusBadge status={post.status as ProjectStatus} />
              )}
              <time
                dateTime={post.publishedAt}
                className="text-xs font-mono text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="text-3xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            )}
            {post.tech && post.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <Prose>
              <MDXRemote source={post.content} options={mdxOptions} />
            </Prose>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
