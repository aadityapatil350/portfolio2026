import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, type Post } from "@/lib/mdx";
import { FadeIn } from "@/components/fade-in";
import { TechBadge } from "@/components/tech-badge";
import { StatusBadge } from "@/components/status-badge";
import { ArrowUpRight } from "lucide-react";
import type { ProjectStatus } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies and projects I've shipped.",
};

const thumbnailColors: Record<string, string> = {
  gosolarindex: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  renewalytics: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "social-copilot": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  msmevault: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

export default function WorkPage() {
  const posts = getPosts("work");

  return (
    <section className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Work
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Selected case studies and projects I&apos;ve shipped.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.1 * i}>
              <WorkCard post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ post }: { post: Post }) {
  const colorClass =
    thumbnailColors[post.slug] || "bg-muted text-muted-foreground";
  const initial = post.title.charAt(0).toUpperCase();

  return (
    <Link
      href={`/work/${post.slug}`}
      className="group block rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
    >
      {/* Thumbnail placeholder */}
      <div
        className={`mb-4 flex h-40 items-center justify-center rounded-md ${colorClass}`}
      >
        <span className="text-4xl font-bold">{initial}</span>
      </div>

      {/* Title + arrow */}
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-lg leading-snug group-hover:text-accent-blue transition-colors">
          {post.title}
        </h3>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent-blue" />
      </div>

      {/* Description */}
      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
        {post.description}
      </p>

      {/* Tech badges */}
      {post.tech && post.tech.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {post.tech.slice(0, 4).map((t) => (
            <TechBadge key={t} name={t} />
          ))}
          {post.tech.length > 4 && (
            <span className="self-center text-xs text-muted-foreground">
              +{post.tech.length - 4}
            </span>
          )}
        </div>
      )}

      {/* Status */}
      {post.status && (
        <StatusBadge status={post.status as ProjectStatus} />
      )}
    </Link>
  );
}
