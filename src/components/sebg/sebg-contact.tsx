"use client";

import { ArrowUpRight, MessageCircle, Phone, Sparkles, Terminal } from "lucide-react";
import { sound } from "@/lib/sound-effects";

export function SebgContact() {
  const triggerMascotTrick = () => {
    sound.playTrick?.();
    window.dispatchEvent(new Event("mascot:trick"));
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0b0b0c] text-[#fbfbf8] pt-20 pb-16 lg:pt-32 lg:pb-24 selection:bg-[#2261e9] selection:text-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-wider text-white/50">
          <span className="font-bold text-[#2261e9]">03 / CONTACT</span>
          <span>·</span>
          <span>DIRECT DISPATCH & DELIVERY INQUIRIES</span>
        </div>

        {/* Massive Callout (sebg style) */}
        <div className="mt-12 max-w-4xl">
          <h2 className="font-display text-[clamp(2.8rem,7.5vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
            Got an operational bottleneck?
          </h2>

          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-light text-white/70">
            I&apos;m taking on select platform delivery contracts &amp; mission-critical systems.
          </p>

          {/* Big Email Link */}
          <div className="mt-8 sm:mt-12">
            <a
              href="mailto:adityabiz350@gmail.com"
              onClick={() => sound.playClick?.()}
              className="group inline-block font-display text-[clamp(1.8rem,4vw,3.6rem)] font-light tracking-tight text-white underline decoration-white/30 decoration-2 underline-offset-8 transition-colors hover:text-sky-300 hover:decoration-sky-300"
            >
              adityabiz350@gmail.com
            </a>
          </div>

          {/* WhatsApp Direct Line */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919373238164?text=Hi%20Aditya%2C%20I%20saw%20your%20website%20and%20wanted%20to%20discuss%20an%20engineering%20project"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick?.()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-white shadow-xl transition-all duration-200 hover:bg-emerald-500 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Direct WhatsApp (+91 93732 38164)</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+919373238164"
              onClick={() => sound.playClick?.()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-display text-sm font-semibold tracking-tight text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* Bottom Social & Easter Egg Grid */}
        <div className="mt-20 border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-display text-lg sm:text-xl font-semibold">
          <a
            href="https://github.com/aadityapatil350"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick?.()}
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="https://x.com/aadityapatil350"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick?.()}
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>X / Twitter</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="https://linkedin.com/in/aadityapatil"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick?.()}
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Do A Trick Button (sebg.ch signature Easter egg!) */}
          <button
            type="button"
            onClick={triggerMascotTrick}
            className="group flex items-center gap-2 text-left text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Sparkles className="h-4 w-4 text-sky-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Do a trick</span>
          </button>
        </div>

        {/* Final Copyright & Meta Bar */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs font-mono text-white/50 border-t border-white/5 pt-6">
          <span>© 2026 Aditya Patil · Pune, India</span>
          <span>Lead Software Engineer at Renewalytics · Horizontal Delivery Partner</span>
          <span className="text-[#2261e9]">Built with Next.js, 3D CSS &amp; Web Audio</span>
        </div>
      </div>
    </section>
  );
}
