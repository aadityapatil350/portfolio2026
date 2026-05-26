import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechBadge({ name, className }: { name: string; className?: string }) {
  return (
    <Badge
      variant="secondary"
      className={cn("font-mono text-xs", className)}
    >
      {name}
    </Badge>
  );
}
