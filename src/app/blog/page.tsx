import type { Metadata } from "next";
import { getPosts } from "@/lib/mdx";
import { BlogList } from "@/components/blog-list";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Notes & Field Reports | Aditya Patil",
  description:
    "Engineering essays on reporting pipelines, telemetry systems, AI workflow automation, and building scalable platforms.",
  alternates: {
    canonical: "https://adityapatil.work/blog",
  },
  openGraph: {
    title: "Engineering Notes & Field Reports | Aditya Patil",
    description:
      "Engineering essays on reporting pipelines, telemetry systems, AI workflow automation, and building scalable platforms.",
    url: "https://adityapatil.work/blog",
  },
};

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <div
      className="min-h-screen bg-[#fbfbf8] text-[#0b0b0c] py-16 sm:py-24 selection:bg-[#2261e9] selection:text-white dark:bg-[#0b0b0c] dark:text-[#fbfbf8] swiss-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="max-w-3xl border-b border-neutral-300 pb-8 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <Terminal className="h-3.5 w-3.5 text-[#2261e9]" />
            <span>05 / Engineering Notes</span>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Writing &amp; Field Reports
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            Field notes on operational reporting automation, high-frequency SCADA telemetry,
            and shipping autonomous AI workflows in production environments.
          </p>
        </section>

        {/* Posts with pagination */}
        <div className="mt-12 max-w-3xl">
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
