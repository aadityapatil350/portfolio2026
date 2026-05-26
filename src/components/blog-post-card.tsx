import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export interface BlogPost {
  title: string;
  description?: string;
  date: string;
  readTime?: string;
  tags: string[];
  slug: string;
}

const tagColors: Record<string, string> = {
  AI: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
  "Climate Tech": "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
  SEO: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
};

export function BlogPostCard({ post }: { post: BlogPost }) {
  const tagClass =
    tagColors[post.tags[0]] || "bg-muted text-muted-foreground";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
    >
      {/* Tag */}
      <div className="mb-2 flex items-center gap-2">
        <Badge
          variant="outline"
          className={`text-xs ${tagClass}`}
        >
          {post.tags[0]}
        </Badge>
        <span className="text-xs text-muted-foreground">{post.date}</span>
      </div>

      {/* Title */}
      <h3 className="mb-1 font-semibold leading-snug group-hover:text-accent-blue transition-colors">
        {post.title}
      </h3>

      {/* Description */}
      {post.description && (
        <p className="mb-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.description}
        </p>
      )}

      {/* Read more */}
      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-accent-blue">
        Read more
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
