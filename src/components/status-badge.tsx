import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/data/site-config";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  Production: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "In Development": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  Archived: "bg-neutral-500/10 text-neutral-700 dark:text-neutral-400 border-neutral-500/20",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge
      variant="outline"
      className={`text-xs ${statusStyles[status] || ""}`}
    >
      {status}
    </Badge>
  );
}
