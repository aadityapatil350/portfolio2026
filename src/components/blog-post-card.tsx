import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface BlogPost {
  title: string;
  description?: string;
  date: string;
  readTime?: string;
  tags: string[];
  slug: string;
}

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2261e9] hover:shadow-xl dark:border-neutral-800 dark:bg-[#121215]"
    >
      {/* Top Meta */}
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          {post.tags[0] && (
            <span className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 font-semibold text-[#2261e9] dark:text-sky-400">
              {post.tags[0]}
            </span>
          )}
          <span>{post.readTime || "5 min read"}</span>
        </div>
        <span>{post.date}</span>
      </div>

      {/* Title */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]">
          {post.title}
        </h3>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2261e9]" />
      </div>

      {/* Description */}
      {post.description && (
        <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans line-clamp-2">
          {post.description}
        </p>
      )}

      {/* Read link */}
      <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-1 font-display text-xs font-semibold text-[#2261e9]">
        <span>Read essay</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
