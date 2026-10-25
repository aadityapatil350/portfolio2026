"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/lib/use-scroll-progress";

const ZONE_IDS = ["hero-section", "lab", "work", "packages"];

export function ParallaxWorld() {
  const [activeZone, setActiveZone] = useState(0);
  const progress = useScrollProgress();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ZONE_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveZone(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <SolarFarmZone active={activeZone === 0} />
      <RooftopNightZone active={activeZone === 1} />
      <IndustrialGridZone active={activeZone === 2} />
      <OpenRoadZone active={activeZone === 3} />
      <TravelMarker progress={progress} />
    </div>
  );
}

function ZoneLayer({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 transition-opacity duration-700 ease-out"
      style={{ opacity: active ? 1 : 0 }}
    >
      {children}
    </div>
  );
}

function SolarFarmZone({ active }: { active: boolean }) {
  return (
    <ZoneLayer active={active}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="sky-dawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF4E6" />
            <stop offset="55%" stopColor="#FFE3C2" />
            <stop offset="100%" stopColor="#FFD9B8" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sky-dawn)" />
        <circle cx="980" cy="560" r="90" fill="#FFB877" opacity="0.8" className="world-pulse" />
        {[120, 380, 640, 900].map((cloud, i) => (
          <ellipse key={cloud} cx={cloud} cy={120 + i * 20} rx="70" ry="22" fill="#fff" opacity="0.5" className="world-drift" style={{ animationDelay: `${i * 1.3}s` }} />
        ))}
        <rect x="0" y="620" width="1200" height="180" fill="#E7C9A0" />
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(${80 + i * 185}, 560)`}>
            <rect x="-55" y="0" width="110" height="60" rx="4" fill="#2B3A4A" transform="skewY(-8)" />
            <rect x="-4" y="55" width="8" height="45" fill="#4A3528" />
          </g>
        ))}
      </svg>
    </ZoneLayer>
  );
}

function RooftopNightZone({ active }: { active: boolean }) {
  const stars = [
    [120, 90], [260, 160], [400, 70], [560, 130], [700, 60], [840, 150],
    [980, 90], [1080, 190], [200, 240], [620, 220], [900, 260], [340, 300],
  ];
  return (
    <ZoneLayer active={active}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="sky-night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B1530" />
            <stop offset="100%" stopColor="#2E2650" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sky-night)" />
        <circle cx="960" cy="150" r="46" fill="#F3E8C8" opacity="0.9" />
        {stars.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.4" fill="#F3E8C8" className="world-twinkle" style={{ animationDelay: `${(i % 5) * 0.6}s` }} />
        ))}
        <rect x="0" y="600" width="1200" height="200" fill="#120E22" />
        <rect x="60" y="480" width="180" height="140" fill="#1A1430" />
        <rect x="320" y="420" width="140" height="200" fill="#1F1938" />
        <rect x="540" y="500" width="220" height="120" fill="#1A1430" />
        <rect x="860" y="440" width="160" height="180" fill="#1F1938" />
        <rect x="1060" y="520" width="130" height="100" fill="#1A1430" />
        <line x1="400" y1="420" x2="400" y2="370" stroke="#3A3360" strokeWidth="3" />
        <circle cx="400" cy="365" r="5" fill="#3A3360" />
      </svg>
    </ZoneLayer>
  );
}

function IndustrialGridZone({ active }: { active: boolean }) {
  return (
    <ZoneLayer active={active}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="sky-dusk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE0CC" />
            <stop offset="60%" stopColor="#F2B7A3" />
            <stop offset="100%" stopColor="#D99B8C" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sky-dusk)" />
        <rect x="0" y="640" width="1200" height="160" fill="#4A4038" />
        {[220, 620, 1000].map((x, i) => (
          <g key={x} transform={`translate(${x}, 420)`} className="world-turbine" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: "0px 220px" }}>
            <rect x="-4" y="0" width="8" height="220" fill="#39322C" />
            <g className="world-blades" style={{ transformOrigin: "0px 0px" }}>
              <rect x="-4" y="-90" width="8" height="90" rx="4" fill="#5C5048" />
              <rect x="-4" y="-90" width="8" height="90" rx="4" fill="#5C5048" transform="rotate(120)" />
              <rect x="-4" y="-90" width="8" height="90" rx="4" fill="#5C5048" transform="rotate(240)" />
            </g>
          </g>
        ))}
        {[420, 820].map((x) => (
          <g key={x} transform={`translate(${x}, 560)`}>
            <path d="M -40 80 L -14 0 H 14 L 40 80" stroke="#39322C" strokeWidth="5" fill="none" />
            <line x1="-40" y1="80" x2="40" y2="80" stroke="#39322C" strokeWidth="5" />
            <line x1="-24" y1="0" x2="24" y2="0" stroke="#39322C" strokeWidth="5" />
          </g>
        ))}
      </svg>
    </ZoneLayer>
  );
}

function OpenRoadZone({ active }: { active: boolean }) {
  return (
    <ZoneLayer active={active}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="sky-road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF0E0" />
            <stop offset="100%" stopColor="#FFD3B0" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sky-road)" />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M 0 ${480 + i * 20} Q 300 ${620 + i * 15} 1200 ${480 + i * 20}`}
            stroke="#F2B88C"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        ))}
        <rect x="0" y="640" width="1200" height="160" fill="#EBD4B4" />
        <path d="M 0 720 Q 600 660 1200 720 L 1200 800 L 0 800 Z" fill="#D9BE9A" />
        {[180, 400, 620, 840, 1060].map((x, i) => (
          <rect key={x} x={x} y="695" width="34" height="10" rx="2" fill="#FFFBF5" opacity="0.8" className="world-dash" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
        <g transform="translate(600, 560)">
          <rect x="-4" y="0" width="8" height="90" fill="#8A5A3B" />
          <path d="M 4 10 L 70 30 L 4 40 Z" fill="#EA580C" />
        </g>
      </svg>
    </ZoneLayer>
  );
}

function TravelMarker({ progress }: { progress: number }) {
  const x = 6 + progress * 88;
  const y = 14 + Math.sin(progress * Math.PI * 2.2) * 6;
  return (
    <div
      className="absolute w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(234,88,12,0.7)] transition-[left,top] duration-200 ease-out hidden sm:block"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
}
