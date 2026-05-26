import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on indie hacking, technical SEO, building with AI, and renewable energy tech.",
};

export default function BlogPage() {
  const posts = getPosts("blog");

  // Group posts by year
  const grouped = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Thoughts on indie hacking, technical SEO, building with AI, and
            renewable energy tech.
          </p>
        </FadeIn>

        {/* Posts */}
        <div className="mt-12 max-w-2xl">
          {years.map((year) => (
            <FadeIn key={year} delay={0.1}>
              <h2 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {year}
              </h2>
              <div className="divide-y divide-border">
                {grouped[year].map((post) => (
                  <article key={post.slug} className="py-6 first:pt-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <time
                          dateTime={post.publishedAt}
                          className="text-xs font-mono text-muted-foreground"
                        >
                          {formatDate(post.publishedAt)}
                        </time>
                        <span className="text-xs text-muted-foreground">
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-snug group-hover:text-accent-blue transition-colors">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          {post.description}
                        </p>
                      )}
                      <div className="mt-2 flex items-center gap-3">
                        {post.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-accent-blue">
                          Read more
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
