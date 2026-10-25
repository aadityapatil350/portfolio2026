"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const BOTTLENECKS = [
  "Manual reporting / spreadsheet chaos",
  "No real-time visibility into operations",
  "WhatsApp/Excel order tracking",
  "Need an MVP built from scratch",
  "Existing codebase needs rescue",
];

const TIMELINES = ["This week", "Within a month", "Next quarter", "Just exploring"];

const SCALES = ["Solo / small team", "Growing team, one site", "Multi-site / multi-plant", "Not sure yet"];

const PHONE_NUMBER = "919373238164";

export function DispatchTerminal() {
  const [bottleneck, setBottleneck] = useState(BOTTLENECKS[0]);
  const [timeline, setTimeline] = useState(TIMELINES[0]);
  const [scale, setScale] = useState(SCALES[0]);

  const message = `Hi Aditya, I'm looking at your packages page. My bottleneck: ${bottleneck}. Timeline: ${timeline}. Scale: ${scale}. Here's what I need: `;
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  function handleDispatch() {
    trackEvent("whatsapp_click", {
      page_path: "/",
      cta_variant: "button",
      context: "dispatch_terminal",
    });
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm p-6 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-widest text-accent-blue">
        Direct Dispatch
      </p>
      <h3 className="mt-2 text-lg sm:text-xl font-semibold text-foreground">
        Tell me the bottleneck. I'll tell you if I'm the right fit.
      </h3>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Field label="Bottleneck" value={bottleneck} onChange={setBottleneck} options={BOTTLENECKS} />
        <Field label="Timeline" value={timeline} onChange={setTimeline} options={TIMELINES} />
        <Field label="Scale" value={scale} onChange={setScale} options={SCALES} />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDispatch}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 transition-colors"
        >
          Dispatch on WhatsApp
        </a>
        <a
          href="https://instagram.com/aditya.ships.it"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("instagram_click", { location: "dispatch_terminal" })}
          className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium text-foreground/70 hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
        >
          Or DM @aditya.ships.it
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-border bg-muted px-3 py-2.5 text-sm text-foreground focus:border-accent-blue focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
