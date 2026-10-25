"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Activity, Terminal, Clock, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/sound-effects";
import type { Post } from "@/lib/mdx";

interface WorkCard3DProps {
  post: Post;
  index: number;
}

export function WorkCard3D({ post }: WorkCard3DProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = -((y - centerY) / centerY) * 7;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="group relative h-full"
    >
      <Link
        href={`/work/${post.slug}`}
        onClick={() => sound.playClick?.()}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
        className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm transition-shadow duration-300 hover:border-[#2261e9] hover:shadow-2xl dark:border-neutral-800 dark:bg-[#121215]"
      >
        <div>
          {/* Simulated Telemetry Graphic Header (Replaces placeholder letter) */}
          <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-neutral-200 bg-[#090d16] p-4 text-white font-mono dark:border-neutral-800">
            {/* Top Chrome */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-white/40">{post.slug}.internal</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Custom Telemetry Renderers by Slug */}
            {post.slug === "dgr-automation" ? (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">Daily Generation Ingestion</span>
                  <span className="text-sky-400">33 / 33 Plants</span>
                </div>
                {/* Generation bars */}
                <div className="flex h-16 items-end gap-1.5 pt-2">
                  {[20, 35, 60, 85, 100, 90, 75, 45, 25, 15].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#2261e9] to-sky-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px] text-white/50 pt-1">
                  <span>Dispatch: 08:00 AM</span>
                  <span className="text-emerald-400">100% Zero-Touch</span>
                </div>
              </div>
            ) : post.slug === "forecast-agent" || post.slug === "renewalytics" ? (
              <div className="mt-3 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">15-Min Statutory Revision</span>
                  <span className="text-emerald-400">3,428 MW Live</span>
                </div>
                <div className="rounded bg-white/5 p-2 text-[10px] text-white/70 space-y-1">
                  <div className="text-emerald-300">● SLDC Gujarat: Block #58 Ack (200 OK)</div>
                  <div>● Deviation Buffer: ±1.2% (Within safe DSM band)</div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-sky-400">
                  <span>Revision Cycle: 15 Mins</span>
                  <span>Zero Missed Windows</span>
                </div>
              </div>
            ) : post.slug === "cms-dsm-platform" ? (
              <div className="mt-3 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">Deviation Settlement Audit</span>
                  <span className="text-amber-400">Protected: ₹14.8L</span>
                </div>
                <div className="rounded bg-emerald-500/10 border border-emerald-500/20 p-2 text-[10px] text-emerald-300">
                  <span>Inverter Feeder Dispute Rebuttal Generated</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-white/50">
                  <span>Accuracy: 99.8%</span>
                  <span className="text-emerald-400">Match Verified</span>
                </div>
              </div>
            ) : post.slug === "realsync-cms" ? (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">SCADA Sub-second Stream</span>
                  <span className="text-sky-400">&lt; 18ms Latency</span>
                </div>
                <div className="rounded bg-black/50 p-2 text-[9px] text-white/70 space-y-0.5">
                  <div className="text-sky-300">MQTT: 14,200 string sensors streaming</div>
                  <div className="text-emerald-400">P0 Ops Pager: 0 active incidents</div>
                </div>
                <div className="text-[10px] text-emerald-400">● Industrial OPC-UA SLA 99.98%</div>
              </div>
            ) : post.slug === "ops-agent" ? (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">Autonomous Site Ops Agent</span>
                  <span className="text-emerald-400">35+ Sites Active</span>
                </div>
                <div className="rounded bg-white/5 p-2 text-[10px] text-white/70">
                  <span>Natural language extraction on telemetry chatter</span>
                </div>
                <div className="text-[10px] text-sky-300">Autonomous Incident Escalation</div>
              </div>
            ) : (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80 font-bold">{post.title}</span>
                  <span className="text-emerald-400">Production</span>
                </div>
                <div className="rounded bg-white/5 p-2 text-[10px] text-white/70">
                  <span>High-consequence operational pipeline</span>
                </div>
                <div className="text-[10px] text-sky-400">Zero-Touch Automation</div>
              </div>
            )}
          </div>

          {/* Title & Arrow */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]">
              {post.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2261e9]" />
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            {post.description}
          </p>
        </div>

        {/* Bottom Tags & Status */}
        <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {post.tech?.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
            {post.status || "Production"}
          </span>
        </div>
      </Link>
    </div>
  );
}
