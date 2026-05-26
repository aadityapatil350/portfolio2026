import Link from "next/link";
import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { siteConfig, caseStudies, stats, services } from "@/data/site-config";
import { getPosts } from "@/lib/mdx";
import type { Post } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Aditya Patil — Lead Software Engineer | Systems Builder",
  description:
    "Self-taught Lead Software Engineer building operational systems, automation platforms, and AI-powered workflows at Renewalytics. Based in Pune, India.",
  openGraph: {
    title: "Aditya Patil — Lead Software Engineer | Systems Builder",
    description:
      "Building operational systems, automation platforms & AI-powered workflows. 3400+ MW renewable capacity served. Pune, India.",
    url: "https://adityapatil.dev",
    type: "website",
    images: [
      {
        url: "/og?title=Aditya%20Patil&description=Systems%20Engineer%20%7C%20Building%20operational%20platforms",
        width: 1200,
        height: 630,
        alt: "Aditya Patil — Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Patil — Lead Software Engineer | Systems Builder",
    description:
      "Building operational systems, automation platforms & AI-powered workflows.",
    creator: "@adityapatil350",
  },
};

function getLatestBlogPosts() {
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
      name={siteConfig.name}
      tagline={siteConfig.tagline}
      subtagline={siteConfig.subtagline}
      location={siteConfig.location}
      available={siteConfig.available}
      caseStudies={caseStudies}
      services={services}
      blogPosts={blogPosts}
      stats={stats}
      resumeUrl={siteConfig.resumeUrl}
    />
  );
}
