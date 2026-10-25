"use client";

import { useRef } from "react";

const BARS = [42, 68, 54, 88, 61, 95, 73];
const STATS = [
  { label: "Reports dispatched", value: "33", suffix: "" },
  { label: "Avg. delay", value: "0", suffix: "s" },
  { label: "On-time rate", value: "100", suffix: "%" },
];

export function DashboardMockup({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card shadow-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-emerald-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Live
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-end gap-1.5 h-24">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue to-accent-blue-muted dashboard-bar"
              style={{
                // @ts-expect-error -- CSS custom property
                "--bar-h": `${h}%`,
                animationDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-lg font-bold text-accent-blue font-mono">
                {s.value}
                {s.suffix}
              </div>
              <div className="text-[10px] uppercase tracking-wide text-muted-foreground leading-tight mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-bar {
          height: 0%;
          animation: dashboard-grow 900ms ease-out forwards;
        }
        @keyframes dashboard-grow {
          to {
            height: var(--bar-h);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dashboard-bar {
            animation: none;
            height: var(--bar-h);
          }
        }
      `}</style>
    </div>
  );
}
