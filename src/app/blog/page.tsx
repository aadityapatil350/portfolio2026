import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on indie hacking, technical SEO, building with AI, and renewable energy tech.",
  openGraph: {
    title: "Blog | Aditya",
    description:
      "Thoughts on indie hacking, technical SEO, building with AI, and renewable energy tech.",
    url: "https://adityapatil.work/blog",
  },
};

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <section className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Thoughts on indie hacking, technical SEO, building with AI, and
            renewable energy tech.
          </p>
        </FadeIn>

        {/* Posts with pagination */}
        <div className="mt-12 max-w-2xl">
          <BlogList posts={posts} />
        </div>
      </div>
    </section>
  );
}
