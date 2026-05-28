"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import type { Post } from "@/lib/mdx";

const POSTS_PER_PAGE = 6;

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Group paginated posts by year
  const grouped = paginatedPosts.reduce<Record<string, Post[]>>((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      {years.map((year) => (
        <FadeIn key={`${year}-${currentPage}`} delay={0.1}>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {year}
          </h2>
          <div className="divide-y divide-border">
            {grouped[year].map((post) => (
              <article key={post.slug} className="py-6 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group block">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <button
            onClick={() => {
              setCurrentPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`h-8 w-8 rounded-md text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setCurrentPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
