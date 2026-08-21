"use client";

import { useEffect, useState } from "react";
import { Terminal, Activity, ShieldCheck } from "lucide-react";

interface LogEntry {
  time: string;
  tag: string;
  tagColor: string;
  message: string;
}

const initialLogs: LogEntry[] = [
  {
    time: "08:00:01",
    tag: "PIPELINE",
    tagColor: "text-emerald-500",
    message: "Excel Flow: 33/33 plant sheets ingested · Daily DGR generated · 0 err",
  },
  {
    time: "08:00:15",
    tag: "DISPATCH",
    tagColor: "text-accent-blue",
    message: "Executive PDF summaries delivered to WhatsApp & Slack (30+ daily)",
  },
  {
    time: "08:00:30",
    tag: "TELEMETRY",
    tagColor: "text-purple-400",
    message: "RealSync: Live MQTT stream active across 3,400+ MW industrial capacity",
  },
  {
    time: "08:00:45",
    tag: "REFLUX",
    tagColor: "text-emerald-400",
    message: "15-minute SLDC revision window submitted · 40+ plants synchronized",
  },
];

export function OperationalTerminal() {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [currentTime, setCurrentTime] = useState<string>("08:01:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/80 bg-zinc-950 font-mono text-xs shadow-2xl text-zinc-300">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>
          <span className="ml-2 text-[11px] font-semibold tracking-wider text-zinc-400">
            ADITYA_OPS_KERNEL // PRODUCTION_TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1">
            <Activity className="h-3 w-3 text-emerald-400" />
            <span>3,400+ MW ONLINE</span>
          </span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="hidden sm:inline text-zinc-400">{currentTime} UTC+5:30</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="space-y-2 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-zinc-500 text-[11px] pb-1 border-b border-zinc-800/40">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>Active Pipelines &amp; Autonomous Workflows · 99.98% 30-Day Uptime</span>
        </div>

        <div className="space-y-1.5 pt-1">
          {logs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-2 leading-relaxed">
              <span className="text-zinc-500 shrink-0 select-none">[{log.time}]</span>
              <span className={`shrink-0 font-bold ${log.tagColor}`}>[{log.tag}]</span>
              <span className="text-zinc-200">{log.message}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center gap-2 text-emerald-400/90 text-[11px]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-zinc-400">Listening for telemetry &amp; cron schedules...</span>
        </div>
      </div>
    </div>
  );
}
