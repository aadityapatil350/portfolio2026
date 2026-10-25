"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { sound } from "@/lib/sound-effects";
import {
  ShieldCheck,
  RefreshCw,
  Rotate3d,
  Sparkles,
  Clock,
  ArrowRight,
  TrendingUp,
  Server,
  Activity,
  Layers,
  ChevronDown,
} from "lucide-react";

interface ProjectTourItem {
  id: string;
  name: string;
  category: string;
  client: string;
  url: string;
  headline: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  browserView: "excel-flow" | "reflux" | "cops" | "realsync";
  mobileView: {
    sender: string;
    time: string;
    title: string;
    message: string;
    tag: string;
  };
}

const TOUR_PROJECTS: ProjectTourItem[] = [
  {
    id: "excel-flow",
    name: "Excel Flow",
    category: "Operational Automation",
    client: "Renewable Asset Operator (33+ Plants)",
    url: "excelflow.internal/ops/live-dispatch",
    headline: "Daily Generation Report Automation Pipeline",
    description:
      "Replaced 4 hours of daily manual Excel compilation across 33 solar & wind plants with a zero-touch scheduled pipeline. Dispatches clean KPI reports before 8:00 AM daily with 100% on-time delivery.",
    impactMetrics: [
      { label: "Plants Covered", value: "33+" },
      { label: "Daily Compilations", value: "0 Hours" },
      { label: "On-Time Dispatch", value: "100%" },
      { label: "Calculation Errors", value: "0.0%" },
    ],
    browserView: "excel-flow",
    mobileView: {
      sender: "Excel Flow Dispatcher",
      time: "08:00 AM",
      title: "Daily Generation Summary Ready",
      message:
        "🟢 All 33 plants aggregated. Total: 4,821.4 MWh (+3.4% above target). Zero formula breaks. PDF executive digest sent to management.",
      tag: "Automated Dispatch",
    },
  },
  {
    id: "reflux",
    name: "Reflux Platform",
    category: "High-Severity Scheduling",
    client: "Power Asset Operator (40+ Plants, 3,400+ MW)",
    url: "reflux.energy/telemetry/3400mw-grid",
    headline: "15-Minute Generation Forecasting & SLDC Compliance Engine",
    description:
      "Statutory 15-minute generation revisions and compliance submissions. Missing a revision window incurs statutory DSM financial penalties. Reflux has delivered 99.9% scheduling reliability with zero missed windows.",
    impactMetrics: [
      { label: "Active Capacity", value: "3,400+ MW" },
      { label: "Revision Cycle", value: "15 Mins" },
      { label: "Concurrent Plants", value: "40+" },
      { label: "Missed Windows", value: "0" },
    ],
    browserView: "reflux",
    mobileView: {
      sender: "Reflux SLDC Monitor",
      time: "02:14 PM",
      title: "Block #58 Revision Confirmed",
      message:
        "⚡ 15-min schedule revised to 3,140 MW. Gujarat SLDC portal acknowledged HTTP 200. Deviation buffer maintained safely at +0.4%.",
      tag: "Grid Compliance",
    },
  },
  {
    id: "cops-dsm",
    name: "COPS DSM / CSM",
    category: "Financial Reconciliation",
    client: "Renewable Power Producer",
    url: "cops.portal/settlement/dispute-audit",
    headline: "Deviation Settlement & Commercial Audit Portal",
    description:
      "Tracks Deviation Settlement Mechanism penalties across utility-scale portfolios. Reconciles raw meter telemetry against state utility penalty sheets in seconds, enabling operators to dispute erroneous invoices.",
    impactMetrics: [
      { label: "Dispute Accuracy", value: "99.8%" },
      { label: "Reconciliation", value: "Instant" },
      { label: "Audit Trail", value: "Immutable" },
      { label: "Telemetry Feeds", value: "50+ Portals" },
    ],
    browserView: "cops",
    mobileView: {
      sender: "COPS Settlement Bot",
      time: "Yesterday",
      title: "DSM Penalty Dispute Raised",
      message:
        "⚠️ Inverter group 4 mismatch detected on SLDC bill. Auto-generated rebuttal dossier with sub-minute telemetry logs. Dispute submitted.",
      tag: "Commercial Ops",
    },
  },
  {
    id: "realsync",
    name: "RealSync Telemetry",
    category: "Realtime Telemetry & SCADA",
    client: "Industrial SCADA Monitoring",
    url: "realsync.scada/stream/subsecond",
    headline: "High-Frequency Telemetry Ingestion & Paging Engine",
    description:
      "Sub-second WebSocket & MQTT telemetry ingestion bridge. Connects directly to plant SCADA gateways, tracking string inverters, transformers, and grid tie lines. Alerts engineers in milliseconds when faults trip.",
    impactMetrics: [
      { label: "Stream Latency", value: "< 25ms" },
      { label: "Telemetry Points", value: "14,000+" },
      { label: "Realtime Broker", value: "MQTT / WS" },
      { label: "Uptime Record", value: "99.98%" },
    ],
    browserView: "realsync",
    mobileView: {
      sender: "RealSync Telemetry Alert",
      time: "Just now",
      title: "Feeder #2 Overcurrent Alert",
      message:
        "🚨 Inverter Block 12 tripped breaker. RealSync isolated feeder telemetry. Automated incident ticket created and dispatched to on-site tech.",
      tag: "P0 Telemetry Alert",
    },
  },
];

export function Tour3DStage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "both" | "mobile">("both");
  const [dragOffset, setDragOffset] = useState({ yaw: 0, pitch: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, initialYaw: 0, initialPitch: 0 });
  const lastActiveIdx = useRef(0);

  // Scroll listener to update 3D perspective tilt and active project (sebg.ch style sticky scroll)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);

      // Determine active project based on scroll progress (4 equal zones)
      const nextIdx = Math.min(
        TOUR_PROJECTS.length - 1,
        Math.floor(progress * TOUR_PROJECTS.length)
      );

      if (nextIdx !== lastActiveIdx.current && progress > 0.02 && progress < 0.98) {
        lastActiveIdx.current = nextIdx;
        setActiveIdx(nextIdx);
        sound.playHover?.();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic 3D angles combining scroll-driven motion + user drag
  // Yaw sweeps smoothly as user scrolls: -14deg -> 0deg -> +14deg -> -8deg
  const scrollYaw = Math.sin(scrollProgress * Math.PI * 2) * 16 - 6;
  const scrollPitch = Math.cos(scrollProgress * Math.PI) * 4 + 2;
  const scrollLift = Math.sin(scrollProgress * Math.PI) * 0.06;

  const currentYaw = scrollYaw + dragOffset.yaw;
  const currentPitch = scrollPitch + dragOffset.pitch;
  const currentScale = 0.95 - scrollLift;

  const activeProject = TOUR_PROJECTS[activeIdx];

  const handleSelectProject = (idx: number) => {
    if (idx === activeIdx) return;
    sound.playTeleport?.();
    setActiveIdx(idx);
    lastActiveIdx.current = idx;

    // Scroll to the corresponding point in the container
    const container = containerRef.current;
    if (container) {
      const totalScrollable = container.offsetHeight - window.innerHeight;
      const targetScroll = container.offsetTop + (idx / TOUR_PROJECTS.length) * totalScrollable + 20;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Interactive mouse drag to rotate 3D stage
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsDraggingState(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      initialYaw: dragOffset.yaw,
      initialPitch: dragOffset.pitch,
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const newYaw = Math.max(-20, Math.min(20, dragStart.current.initialYaw + dx * 0.12));
    const newPitch = Math.max(-12, Math.min(12, dragStart.current.initialPitch - dy * 0.1));
    setDragOffset({ yaw: newYaw, pitch: newPitch });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    setIsDraggingState(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const reset3D = () => {
    sound.playClick?.();
    setDragOffset({ yaw: 0, pitch: 0 });
  };

  return (
    <section
      id="tour"
      ref={containerRef}
      className="relative bg-[#091a2e] text-[#fbfbf8] selection:bg-[#2261e9] selection:text-white"
      style={{
        // 350vh height enables sticky scroll physics just like sebg.ch's 765svh tour
        height: "360vh",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      {/* Sticky Fullscreen 3D Stage (Pins to viewport as user scrolls) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-4 sm:py-6 px-4 sm:px-6 lg:px-12">
        {/* Top Header & Controls */}
        <div className="mx-auto w-full max-w-7xl shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-sky-300">
                <Rotate3d className="h-3 w-3 text-sky-400 animate-spin" style={{ animationDuration: "10s" }} />
                <span>Scroll-Driven 3D Tour (Stage Active)</span>
              </div>
              <h2 className="mt-1.5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                The Production Systems
              </h2>
            </div>

            {/* Scroll Progress & Camera Controls */}
            <div className="flex items-center gap-3">
              {/* Scroll Scrub Progress Bar */}
              <div className="hidden md:flex flex-col items-end gap-1 font-mono text-[11px] text-white/60">
                <span>Scroll Scrub: {Math.round(scrollProgress * 100)}%</span>
                <div className="h-1.5 w-32 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-[#2261e9] transition-all duration-100"
                    style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  />
                </div>
              </div>

              <button
                onClick={reset3D}
                title="Reset 3D Angle"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 font-mono text-xs text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Rotate3d className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Reset Angle</span>
              </button>

              <div className="flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5">
                <button
                  onClick={() => {
                    sound.playClick?.();
                    setDeviceMode("desktop");
                  }}
                  className={`rounded px-2.5 py-1 text-xs font-mono transition ${
                    deviceMode === "desktop" ? "bg-[#2261e9] text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  Desktop
                </button>
                <button
                  onClick={() => {
                    sound.playClick?.();
                    setDeviceMode("both");
                  }}
                  className={`rounded px-2.5 py-1 text-xs font-mono transition ${
                    deviceMode === "both" ? "bg-[#2261e9] text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  Dual 3D
                </button>
                <button
                  onClick={() => {
                    sound.playClick?.();
                    setDeviceMode("mobile");
                  }}
                  className={`rounded px-2.5 py-1 text-xs font-mono transition ${
                    deviceMode === "mobile" ? "bg-[#2261e9] text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  Mobile
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TOUR_PROJECTS.map((proj, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(idx)}
                  onMouseEnter={() => sound.playHover?.()}
                  className={`group relative flex items-center justify-between p-2.5 text-left rounded-xl border transition-all duration-300 ${
                    isCurrent
                      ? "border-[#2261e9] bg-[#2261e9]/20 shadow-md shadow-[#2261e9]/20"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {proj.name}
                    </span>
                    <span className="text-[10px] text-white/60 font-mono">{proj.category}</span>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 ${
                      isCurrent ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-white/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Perspective Stage Canvas */}
        <div
          className="relative my-auto w-full max-w-6xl mx-auto flex items-center justify-center select-none"
          onMouseDown={handleMouseDown}
          style={{
            cursor: isDraggingState ? "grabbing" : "grab",
            perspective: "1600px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Main 3D Rig with Smooth CSS Transforms */}
          <div
            className="relative w-full max-w-4xl flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${currentYaw}deg) rotateX(${currentPitch}deg) scale(${currentScale})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* DESKTOP 3D BROWSER FRAME */}
            <div
              className={`w-full rounded-2xl border border-white/20 bg-[#0f172a] shadow-2xl transition-all duration-500 overflow-hidden ${
                deviceMode === "mobile" ? "opacity-20 scale-90 pointer-events-none" : "opacity-100"
              }`}
              style={{
                boxShadow:
                  "0 30px 80px -15px rgba(0, 0, 0, 0.75), 0 0 50px rgba(34, 97, 233, 0.25)",
                transform: "translateZ(30px)",
              }}
            >
              {/* Browser Window Header (Chrome) */}
              <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#162032] px-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0b121e] px-3 py-0.5 text-xs font-mono text-white/80 w-64 sm:w-80 justify-center">
                  <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeProject.url}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                  <RefreshCw className="h-3 w-3 text-white/40" />
                </div>
              </div>

              {/* Browser Screen Content: Live Interactive Simulation */}
              <div className="relative min-h-[340px] sm:min-h-[380px] bg-[#090d16] p-5 text-white font-sans overflow-hidden">
                {/* 1. EXCEL FLOW INTERFACE */}
                {activeProject.browserView === "excel-flow" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-white">
                            Excel Flow Operations Core
                          </span>
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                            100% Ingested
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-mono">
                          Daily Generation Pipeline · Covering 33 Plants across India
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>08:00 AM Dispatched</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Aggregated Plants</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">33 / 33</p>
                        <span className="text-[9px] text-emerald-400">● 100% Online</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Energy Today</span>
                        <p className="text-xl font-bold font-mono text-sky-400 mt-0.5">4,821.4 MWh</p>
                        <span className="text-[9px] text-sky-300">+3.4% vs Scheduled</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Manual Work</span>
                        <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">0.00 Hrs</p>
                        <span className="text-[9px] text-emerald-300">Replaced 4h/day</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Executive PDF</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">Dispatched</p>
                        <span className="text-[9px] text-emerald-400">07:58 AM Delivered</span>
                      </div>
                    </div>

                    {/* Generation Curve */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
                        <span>Solar & Wind Composite Generation Curve</span>
                        <span className="text-sky-400">33-Plant Ingestion Sync Complete</span>
                      </div>
                      <div className="h-20 w-full flex items-end gap-1.5 pt-2">
                        {[15, 22, 35, 60, 85, 95, 100, 92, 80, 65, 42, 28, 18, 12].map((val, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className="w-full rounded-t bg-gradient-to-t from-[#2261e9] to-sky-400 transition-all duration-300 hover:brightness-125"
                              style={{ height: `${val}%` }}
                            />
                            <span className="text-[8px] font-mono text-white/40">{i * 2}h</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. REFLUX INTERFACE */}
                {activeProject.browserView === "reflux" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-white">
                            Reflux Scheduling Engine
                          </span>
                          <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-mono text-sky-400">
                            Block #58 Active
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-mono">
                          15-Minute Statutory Revision Engine · 3,400+ MW Renewable Capacity
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 rounded bg-white/5 px-2.5 py-1 text-xs font-mono text-white/80">
                        <Clock className="h-3 w-3 text-amber-400" />
                        <span>Window: 11m 42s</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Capacity Managed</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">3,428 MW</p>
                        <span className="text-[9px] text-emerald-400">40 Plants Live</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">SLDC Reliability</span>
                        <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">99.98%</p>
                        <span className="text-[9px] text-emerald-300">Zero Missed Windows</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Deviation Margin</span>
                        <p className="text-xl font-bold font-mono text-sky-400 mt-0.5">±1.2%</p>
                        <span className="text-[9px] text-sky-300">Safe DSM Band</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Forecast Pipeline</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">Real-time</p>
                        <span className="text-[9px] text-emerald-400">Auto XML Upload</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-xs space-y-1 text-white/70">
                      <div className="text-[9px] uppercase text-sky-400 tracking-wider">
                        ● Live SLDC State Connector Stream
                      </div>
                      <div className="text-emerald-400">
                        [14:15:02] GUJARAT_SLDC: Revision #58 submitted for 1,240 MW. Status: ACKNOWLEDGED (200 OK)
                      </div>
                      <div className="text-white/80">
                        [14:15:04] RAJASTHAN_SLDC: Solar cluster forecast synced with live weather radar telemetry.
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. COPS DSM INTERFACE */}
                {activeProject.browserView === "cops" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-white">
                            COPS Deviation Settlement
                          </span>
                          <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-mono text-amber-400">
                            Audit Mode
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-mono">
                          Multi-Plant DSM Penalty Tracking & Commercial Dispute Evidence Engine
                        </p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">
                        Protected: ₹14.8L Avoided Penalties
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">SLDC Reconciliation</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">Instant</p>
                        <span className="text-[9px] text-emerald-400">Was 7 Days Manual</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Dispute Success</span>
                        <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">94.2%</p>
                        <span className="text-[9px] text-emerald-300">Sub-minute meter logs</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Inverter Pinpointing</span>
                        <p className="text-xl font-bold font-mono text-sky-400 mt-0.5">String-level</p>
                        <span className="text-[9px] text-sky-300">Isolated 4 fault blocks</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Commercial Audit</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">Verified</p>
                        <span className="text-[9px] text-emerald-400">Zero unbacked bills</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs font-mono">
                      <div className="flex items-center justify-between p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        <span>Cluster Alpha Meter #892: Zero Deviation</span>
                        <span className="text-emerald-400 font-bold">MATCH (0.00% Variance)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. REALSYNC CMS INTERFACE */}
                {activeProject.browserView === "realsync" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-white">
                            RealSync Telemetry Core
                          </span>
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                            Sub-second Stream
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-mono">
                          High-Frequency OPC-UA & MQTT SCADA Ingestion Bridge
                        </p>
                      </div>
                      <span className="text-xs font-mono text-sky-400">Latency: 18ms</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Active Sensors</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">14,200+</p>
                        <span className="text-[9px] text-emerald-400">● 100% Connected</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Throughput</span>
                        <p className="text-xl font-bold font-mono text-sky-400 mt-0.5">45k msg/s</p>
                        <span className="text-[9px] text-sky-300">Zero backpressure</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Fault Escalation</span>
                        <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">&lt; 250ms</p>
                        <span className="text-[9px] text-emerald-300">Direct Ops Pager</span>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                        <span className="text-[10px] font-mono text-white/50">Uptime SLA</span>
                        <p className="text-xl font-bold font-mono text-white mt-0.5">99.98%</p>
                        <span className="text-[9px] text-emerald-400">Industrial SCADA</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-xs space-y-1 text-white/70">
                      <div className="text-[9px] text-sky-400 uppercase tracking-wider">● SCADA Stream</div>
                      <div className="text-white/80">SENSOR_GATEWAY_33: Temperature 42.1°C | Inverter Efficiency 98.7%</div>
                      <div className="text-emerald-400">TRANSFORMER_T1: Frequency 50.02 Hz | Power Factor 0.998 Lag</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3D SMARTPHONE MOCKUP (Overlapping in true 3D perspective) */}
            <div
              className={`absolute -right-4 sm:right-4 lg:-right-6 -bottom-8 sm:-bottom-4 w-60 sm:w-68 rounded-[34px] border-4 border-neutral-800 bg-[#0c121e] shadow-2xl p-2.5 text-white transition-all duration-500 ${
                deviceMode === "desktop" ? "opacity-15 scale-75 pointer-events-none" : "opacity-100"
              }`}
              style={{
                transform: "translateZ(85px) rotateY(-8deg) rotateX(4deg)",
                boxShadow: "0 25px 60px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(34, 97, 233, 0.25)",
              }}
            >
              <div className="mx-auto mb-2 h-3.5 w-20 rounded-full bg-black/90 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#1e293b]" />
              </div>

              <div className="rounded-[22px] bg-[#111928] p-3 border border-white/10 space-y-2.5 font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-white/70">Ops Dispatch Mobile</span>
                  </div>
                  <span className="font-mono text-[9px] text-white/40">9:41</span>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-2.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-emerald-400">
                      {activeProject.mobileView.sender}
                    </span>
                    <span className="font-mono text-[8px] text-emerald-300/60">
                      {activeProject.mobileView.time}
                    </span>
                  </div>
                  <p className="font-bold text-xs text-white">{activeProject.mobileView.title}</p>
                  <p className="text-[10px] text-white/80 leading-snug">
                    {activeProject.mobileView.message}
                  </p>
                  <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-emerald-400/80">
                    <span>{activeProject.mobileView.tag}</span>
                    <span className="underline">View PDF ↗</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1 text-[9px] font-mono text-center">
                  <div className="rounded bg-white/5 py-1 text-white/70">Acknowledge</div>
                  <div className="rounded bg-[#2261e9] py-1 text-white font-medium">Forward</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Project Description Callout Strip */}
        <div className="mx-auto w-full max-w-7xl shrink-0 border-t border-white/10 pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="rounded bg-[#2261e9] px-2.5 py-0.5 font-mono text-[11px] font-bold text-white">
              {activeProject.client}
            </span>
            <span className="text-white/80 font-medium">{activeProject.headline}</span>
          </div>

          <div className="flex items-center gap-4 text-white/60 font-mono text-[11px]">
            {activeProject.impactMetrics.slice(0, 3).map((m, i) => (
              <span key={i} className="hidden sm:inline">
                <strong className="text-sky-300">{m.value}</strong> {m.label}
              </span>
            ))}
            <div className="flex items-center gap-1 text-sky-400 animate-bounce">
              <span>Scroll down to continue</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
