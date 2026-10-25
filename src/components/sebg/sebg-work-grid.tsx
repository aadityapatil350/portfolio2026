"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/sound-effects";

interface WorkItem {
  id: string;
  title: string;
  client: string;
  year: string;
  status: "Production" | "Live Product" | "In Development";
  category: string;
  impact: string;
  tech: string[];
  link?: string;
}

const ALL_WORK: WorkItem[] = [
  {
    id: "excel-flow",
    title: "Excel Flow — DGR Automation Pipeline",
    client: "Renewable Asset Operator",
    year: "2026",
    status: "Production",
    category: "Operational Automation",
    impact: "Automated daily generation reporting across 33 solar & wind plants. Zero human compilation hours.",
    tech: ["Node.js", "PostgreSQL", "Docker", "Async Cron", "PDF Engine"],
    link: "/work/dgr-automation",
  },
  {
    id: "reflux",
    title: "Reflux — 15-Minute SLDC Scheduling Engine",
    client: "Renewable Energy Asset Operator",
    year: "2025",
    status: "Production",
    category: "High-Severity Systems",
    impact: "Statutory 15-minute forecasting & SLDC dispatch engine managing 3,400+ MW capacity across 40+ plants.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Prisma"],
    link: "/work/reflux",
  },
  {
    id: "cops-dsm",
    title: "COPS — Deviation & Settlement Portal",
    client: "Juniper Green Energy",
    year: "2025",
    status: "Production",
    category: "Financial Reconciliation",
    impact: "Reconciles utility bills against sub-minute plant meters, protecting operators from wrongful DSM penalties.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Data Analytics"],
    link: "/work/cops-dsm-csm",
  },
  {
    id: "realsync",
    title: "RealSync CMS — SCADA Telemetry Stream",
    client: "Industrial Power Monitoring",
    year: "2026",
    status: "In Development",
    category: "Realtime Telemetry",
    impact: "Sub-second telemetry ingestion bridge tracking 14,000+ string inverters and transformers with instant paging.",
    tech: ["WebSockets", "MQTT", "OPC-UA", "Docker", "TimescaleDB"],
    link: "/work/realsync-telemetry",
  },
  {
    id: "gosolarindex",
    title: "GoSolarIndex.in",
    client: "Self-Funded Indie Product",
    year: "2025",
    status: "Live Product",
    category: "Directory & Marketplace",
    impact: "Searchable directory connecting commercial property owners with verified rooftop solar installers in India.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Engine"],
    link: "https://gosolarindex.in",
  },
  {
    id: "msmevault",
    title: "MSMEVault.in",
    client: "Self-Funded Indie Product",
    year: "2025",
    status: "Live Product",
    category: "Government Schemes Platform",
    impact: "Streamlines discovery of Indian central & state government MSME grants, subsidies, and credit schemes.",
    tech: ["Next.js", "FTS Search", "Supabase", "Tailwind CSS"],
    link: "https://msmevault.in",
  },
];

function Card3D({ item }: { item: WorkItem }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt ±8deg
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;
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
      style={{
        perspective: "1000px",
      }}
      className="group relative h-full"
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
        className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-[#2261e9] hover:shadow-2xl dark:border-neutral-800 dark:bg-[#121214]"
      >
        <div>
          {/* Top Meta */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs font-mono dark:border-neutral-800">
            <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              {item.category}
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  item.status === "Production"
                    ? "bg-emerald-500 shadow-[0_0_8px_#10b981]"
                    : item.status === "Live Product"
                    ? "bg-sky-500 shadow-[0_0_8px_#0ea5e9]"
                    : "bg-amber-500"
                }`}
              />
              <span className="text-neutral-500 font-semibold">{item.year}</span>
            </div>
          </div>

          {/* Title & Client */}
          <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-[#2261e9] transition-colors dark:text-[#fbfbf8]">
            {item.title}
          </h3>
          <span className="mt-1 block text-xs font-mono text-neutral-500">
            Client: {item.client}
          </span>

          {/* Impact paragraph */}
          <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans dark:text-neutral-400">
            {item.impact}
          </p>
        </div>

        {/* Bottom Tech Pills & Link */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between dark:border-neutral-800">
          <div className="flex flex-wrap gap-1.5">
            {item.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>

          {item.link && (
            <Link
              href={item.link}
              onClick={() => sound.playClick?.()}
              className="inline-flex items-center gap-1 text-xs font-display font-semibold text-[#2261e9] hover:underline"
            >
              <span>View</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function SebgWorkGrid() {
  return (
    <section
      id="work"
      className="relative bg-[#f4f3ef] text-[#0b0b0c] py-20 lg:py-32 selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8] swiss-grid border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (sebg style: "All work / N projects") */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-neutral-300 pb-6 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
              <span className="font-bold text-[#2261e9]">02 / ARCHIVE</span>
              <span>·</span>
              <span>3D PERSPECTIVE CARDS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
              All Work
            </h2>
          </div>
          <span className="font-mono text-sm text-neutral-500">
            {ALL_WORK.length} Production Systems &amp; Products
          </span>
        </div>

        {/* Work Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_WORK.map((item) => (
            <Card3D key={item.id} item={item} />
          ))}
        </div>

        {/* View Full Case Studies CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            onClick={() => sound.playClick?.()}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 font-display text-sm font-semibold tracking-tight text-[#0b0b0c] shadow-sm transition-all duration-200 hover:border-[#2261e9] hover:text-[#2261e9] hover:scale-105 dark:border-neutral-700 dark:bg-[#16161a] dark:text-[#fbfbf8]"
          >
            <span>Explore In-Depth Case Studies</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
