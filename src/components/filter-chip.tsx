"use client";

import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 text-sm rounded-full transition-colors cursor-pointer",
        active
          ? "bg-foreground text-background"
          : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
      )}
    >
      {label}
    </button>
  );
}
