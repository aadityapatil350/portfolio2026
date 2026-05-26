import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Code2, Search, Zap, ArrowRight } from "lucide-react";
import { HomeContent } from "@/components/home-content";
import { siteConfig, caseStudies, stats } from "@/data/site-config";
import { getPosts } from "@/lib/mdx";
import type { Post } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Aditya — Lead Software Engineer | Indie Hacker",
  description:
    "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India. Based in Pune.",
  openGraph: {
    title: "Aditya — Lead Software Engineer | Indie Hacker",
    description:
      "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India.",
    url: "https://aditya.dev",
    type: "website",
  },
};

function getLatestBlogPosts(): Array<{
  title: string;
  date: string;
  tags: string[];
  slug: string;
  description?: string;
}> {
  const posts = getPosts("blog");
  return posts.slice(0, 3).map((p: Post) => ({
    title: p.title,
    date: new Date(p.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    tags: p.tags || [],
    slug: p.slug,
    description: p.description,
  }));
}

export default function Home() {
  const blogPosts = getLatestBlogPosts();

  return (
    <HomeContent
      tagline={siteConfig.tagline}
      location={siteConfig.location}
      available={siteConfig.available}
      caseStudies={caseStudies}
      blogPosts={blogPosts}
      stats={stats}
    />
  );
}
