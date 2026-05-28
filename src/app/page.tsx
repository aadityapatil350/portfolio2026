import Link from "next/link";
import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { siteConfig, caseStudies, stats, services } from "@/data/site-config";
import { getPosts } from "@/lib/mdx";
import type { Post } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Aditya Patil, Engineer-for-hire by day. Indie hacker by night.",
  description:
    "Lead engineer at Renewalytics by day, indie hacker by night. Available for full-stack MVPs and AI workflow automation. Pune, India.",
  openGraph: {
    title: "Aditya Patil, Engineer-for-hire by day. Indie hacker by night.",
    description:
      "Lead engineer at Renewalytics by day, indie hacker by night. Freelance MVPs and AI workflow automation on the side.",
    url: "https://adityapatil.dev",
    type: "website",
    images: [
      {
        url: "/og?title=Aditya%20Patil&description=Engineer-for-hire%20%7C%20Indie%20hacker",
        width: 1200,
        height: 630,
        alt: "Aditya Patil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Patil, Engineer-for-hire by day. Indie hacker by night.",
    description:
      "Lead engineer at Renewalytics by day, indie hacker by night. Freelance MVPs and AI workflow automation on the side.",
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
