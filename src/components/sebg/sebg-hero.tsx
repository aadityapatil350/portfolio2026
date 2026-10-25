"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Terminal, Zap, ShieldCheck } from "lucide-react";
import { sound } from "@/lib/sound-effects";

export function SebgHero() {
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerItems = [
    "3,400+ MW renewable power flowing through production systems",
    "33+ plants automated daily with zero human calculation hours",
    "Statutory 15-minute SLDC scheduling engine with 99.98% reliability",
    "Independent delivery partner for high-stakes operational platforms",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick?.();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTour = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick?.();
    const el = document.getElementById("tour");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[88svh] flex flex-col justify-between overflow-hidden bg-[#2261e9] text-[#fbfbf8] py-12 lg:py-16 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-[#2261e9]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Hero Subtitle & Live Status Ticker */}
      <div className="mx-auto w-full max-w-7xl flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/90">
          <Terminal className="h-3.5 w-3.5 text-sky-200" />
          <span>Operational Systems Architecture · Telemetry · Automation</span>
        </div>

        {/* Radar Pulse Status Pill */}
        <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Available for select delivery contracts</span>
        </div>
      </div>

      {/* Main Massive Editorial Hero Statement */}
      <div className="mx-auto w-full max-w-7xl my-auto py-10 lg:py-14">
        <div className="max-w-5xl">
          <h1 className="font-display text-[clamp(2.8rem,7.5vw,7.2rem)] font-bold leading-[0.93] tracking-[-0.04em] text-white">
            <span className="inline-block transition-transform duration-500 hover:-translate-y-1">
              I build software
            </span>{" "}
            <span className="inline-block transition-transform duration-500 hover:-translate-y-1">
              that survives
            </span>{" "}
            <span className="inline-block text-sky-200 underline decoration-white/40 underline-offset-8 transition-transform duration-500 hover:-translate-y-1">
              real operations.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl font-light text-white/90 leading-relaxed">
            Reporting pipelines that run themselves, dashboards ops teams actually open, and realtime
            telemetry engines that manage{" "}
            <span className="font-semibold text-white underline decoration-white/40 underline-offset-4">
              3,400+ MW of live plant data
            </span>
            .
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tour"
              onClick={scrollToTour}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-[#0b0b0c] shadow-2xl transition-all duration-300 hover:bg-white/95 hover:scale-105 active:scale-95"
            >
              <span>Explore 3D Device Tour</span>
              <ArrowDownRight className="h-4 w-4 text-[#2261e9] animate-bounce" />
            </a>

            <a
              href="https://wa.me/919373238164?text=Hi%20Aditya%2C%20I%20saw%20your%20website%20and%20wanted%20to%20discuss%20an%20engineering%20project"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick?.()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <span>WhatsApp Direct Line</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Ticker & Metric Strip (sebg style bottom bar) */}
      <div className="mx-auto w-full max-w-7xl border-t border-white/20 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs font-mono text-white/80">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white uppercase tracking-wider">Production Proof:</span>
          <span className="transition-opacity duration-300">{tickerItems[tickerIndex]}</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-[11px] text-white/70">
          <span>Pune, India</span>
          <span>Lead SWE @ Renewalytics</span>
          <span>Next.js · TS · Docker</span>
        </div>
      </div>
    </section>
  );
}
