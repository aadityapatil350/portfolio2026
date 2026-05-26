import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "@/components/tech-badge";
import { StatusBadge } from "@/components/status-badge";
import type { CaseStudy } from "@/data/site-config";

const thumbnailColors: Record<string, string> = {
  gosolarindex: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  renewalytics: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "social-copilot": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  msmevault: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const colorClass =
    thumbnailColors[study.slug] || "bg-muted text-muted-foreground";
  const initial = study.title.charAt(0).toUpperCase();

  return (
    <Link
      href={`/work/${study.slug}`}
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
          {study.title}
        </h3>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent-blue" />
      </div>

      {/* One-liner */}
      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
        {study.oneLiner}
      </p>

      {/* Tech badges */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {study.tech.slice(0, 4).map((t) => (
          <TechBadge key={t} name={t} />
        ))}
        {study.tech.length > 4 && (
          <span className="self-center text-xs text-muted-foreground">
            +{study.tech.length - 4}
          </span>
        )}
      </div>

      {/* Status */}
      <StatusBadge status={study.status} />
    </Link>
  );
}
