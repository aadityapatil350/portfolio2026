import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, type Post } from "@/lib/mdx";
import { ArrowUpRight, CheckCircle2, Shield, Activity, Zap, Terminal, Database, Cpu } from "lucide-react";
import type { ProjectStatus } from "@/data/site-config";
import { WorkCard3D } from "@/components/work-card-3d";

export const metadata: Metadata = {
  title: "Case Studies | Production Systems & Telemetry",
  description:
    "Production systems and AI platforms managing 3,400+ MW of renewable power, 33+ automated daily plants, and high-frequency SLDC compliance engines. Aditya Patil, Pune.",
  alternates: {
    canonical: "https://adityapatil.work/work",
  },
  openGraph: {
    title: "Case Studies | Aditya Patil",
    description:
      "Production systems and AI platforms in the wild. Real numbers, real outcomes, 3,400+ MW renewable power scale.",
    url: "https://adityapatil.work/work",
  },
};

export default function WorkPage() {
  const posts = getPosts("work");

  return (
    <div className="bg-[#fbfbf8] text-[#0b0b0c] selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8] min-h-screen py-16 sm:py-24 swiss-grid">
      <div className="content-width px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl border-b border-neutral-300 pb-8 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <Terminal className="h-3.5 w-3.5 text-[#2261e9]" />
            <span>02 / Production Archives</span>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Case Studies From Production
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            High-consequence operational software, reporting pipelines, and AI systems running 24/7.
            Client names are anonymized where contracts require. The scale and performance metrics are 100% verified.
          </p>
        </div>

        {/* 3D Case Study Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <WorkCard3D key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Mid-page Callout (Swiss Inverted Box) */}
        <div className="mt-20 rounded-2xl border border-neutral-300 bg-[#f4f3ef] p-8 sm:p-10 dark:border-neutral-800 dark:bg-[#121215]">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2261e9]">
              Horizontal Pattern Recognition
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0b0b0c] dark:text-[#fbfbf8]">
              See a project shape that matches your bottleneck?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              The problem shapes above repeat across sectors — the 6 AM manual spreadsheet compilation,
              multi-site hardware telemetry, or unbacked utility penalty invoices.
              If any of these look like your operation, let&apos;s discuss a fixed-scope build.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919373238164?text=Hi%20Aditya%2C%20I%20saw%20your%20case%20studies%20and%20wanted%20to%20discuss%20a%20similar%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2261e9] px-6 py-3 font-display text-sm font-semibold text-white shadow-lg transition hover:bg-blue-600 active:scale-95"
              >
                <span>Discuss A Similar Project on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 font-display text-sm font-semibold text-[#0b0b0c] transition hover:border-[#2261e9] dark:border-neutral-700 dark:bg-neutral-800 dark:text-[#fbfbf8]"
              >
                <span>Browse Fixed-Scope Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
