"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Zap, TrendingUp } from "lucide-react";

const ALERTS = [
  { icon: Check, text: "33+ daily reports dispatched", tone: "emerald" as const },
  { icon: Zap, text: "Alert routed to on-call in 0.4s", tone: "amber" as const },
  { icon: TrendingUp, text: "GoSolarIndex: +2,400 impressions today", tone: "orange" as const },
];

const TONE_CLASSES = {
  emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  orange: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
};

export function AlertStackMockup({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex flex-col gap-2.5 ${className}`}>
      {ALERTS.map((alert, i) => {
        const Icon = alert.icon;
        return (
          <div
            key={alert.text}
            className={`alert-row flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm bg-card ${TONE_CLASSES[alert.tone]}`}
            style={{
              opacity: active ? undefined : 0,
              animationDelay: active ? `${i * 220}ms` : undefined,
              animationPlayState: active ? "running" : "paused",
            }}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="text-xs font-medium text-foreground">{alert.text}</span>
          </div>
        );
      })}

      <style jsx>{`
        .alert-row {
          animation: alert-slide-in 500ms ease-out both;
        }
        @keyframes alert-slide-in {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .alert-row {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
