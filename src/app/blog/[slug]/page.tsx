import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxOptions } from "@/lib/mdx-options";
import { Prose } from "@/components/prose";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site-config";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${slug}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description || "")}&type=blog`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description || "")}&type=blog`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("blog", slug);

  if (!post) notFound();

  // Get all posts for prev/next navigation
  const { getPosts } = await import("@/lib/mdx");
  const allPosts = getPosts("blog");
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const tweetText = encodeURIComponent(post.title);
  const tweetUrl = encodeURIComponent(`${siteConfig.url}/blog/${slug}`);
  const tweetHref = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
  };

  return (
    <section className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="content-width px-4 sm:px-6">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
        </FadeIn>

        {/* Post header */}
        <FadeIn delay={0.05}>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
              <time
                dateTime={post.publishedAt}
                className="font-mono"
              >
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span className="font-mono">{post.readingTime}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
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

        {/* Share + Subscribe */}
        <FadeIn delay={0.15}>
          <div className="mt-16 max-w-2xl space-y-8">
            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Share this post</span>
              <a
                href={tweetHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <Share2 className="h-3.5 w-3.5" />
                Post on X
              </a>
            </div>

            {/* Subscribe CTA */}
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">
                Enjoy this post?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Subscribe to get notified when I write something new.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href="https://buttondown.email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
                >
                  Subscribe via email
                </a>
                <a
                  href="/rss.xml"
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                >
                  RSS feed
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Prev / Next */}
        {(prevPost || nextPost) && (
          <FadeIn delay={0.2}>
            <div className="mt-16 flex max-w-2xl flex-col sm:flex-row sm:justify-between gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  <span className="text-right">
                    <span className="block text-xs font-mono">Previous</span>
                    <span className="font-medium">{prevPost.title}</span>
                  </span>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors sm:ml-auto sm:text-right"
                >
                  <span className="text-left">
                    <span className="block text-xs font-mono">Next</span>
                    <span className="font-medium">{nextPost.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          </FadeIn>
        )}
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
