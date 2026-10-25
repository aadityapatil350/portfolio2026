"use client";

import { useEffect, useRef, useState } from "react";

interface SchematicPipelineProps {
  bottleneck: string;
  system: string;
  outcome: string;
  className?: string;
}

const PATH_D = "M 10 40 H 90 L 110 20 H 230 L 250 40 H 370";

export function SchematicPipeline({ bottleneck, system, outcome, className = "" }: SchematicPipelineProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 380 60"
        className="w-full h-auto overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <path d={PATH_D} stroke="var(--border)" strokeWidth="1.5" />
        {active && (
          <path
            d={PATH_D}
            stroke="var(--accent-blue)"
            strokeWidth="1.5"
            strokeDasharray="30 340"
            strokeLinecap="round"
            style={{
              animation: "schematic-pulse 2.6s linear infinite",
              filter: "drop-shadow(0 0 3px var(--accent-blue))",
            }}
          />
        )}
        {[10, 230, 370].map((cx) => (
          <circle key={cx} cx={cx} cy={cx === 10 || cx === 370 ? 40 : 20} r="4.5" fill="var(--card)" stroke="var(--accent-blue)" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span className="text-amber-600">Bottleneck: {bottleneck}</span>
        <span className="text-center text-foreground/70">{system}</span>
        <span className="text-right text-accent-teal">{outcome}</span>
      </div>
      <style jsx>{`
        @keyframes schematic-pulse {
          from {
            stroke-dashoffset: 370;
          }
          to {
            stroke-dashoffset: -370;
          }
        }
      `}</style>
    </div>
  );
}
