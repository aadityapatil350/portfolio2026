"use client";

import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    const rx = ((y - rect.height / 2) / rect.height) * -6;
    const ry = ((x - rect.width / 2) / rect.width) * 6;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transformStyle: "preserve-3d",
        transition: "transform 300ms ease-out",
        backgroundImage:
          "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(255, 138, 101, 0.14), transparent 80%)",
      }}
      className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
