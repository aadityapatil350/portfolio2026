import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { caseStudies } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Aditya Patil — Operational Software, Reporting Automation & AI Workflows",
  description:
    "Aditya Patil builds operational software that survives real use — automated reporting pipelines, internal dashboards, realtime telemetry, and AI automation. Pune, India.",
  openGraph: {
    title: "Aditya Patil — Operational Software & Delivery Partner",
    description:
      "Software that survives real operational use — reporting pipelines, ops dashboards, realtime systems, and AI workflows. Pune, India.",
    url: "https://adityapatil.work",
    type: "website",
    images: [
      {
        url: "/og?title=Aditya%20Patil&description=Operational%20Software%20Engineer",
        width: 1200,
        height: 630,
        alt: "Aditya Patil, Operational Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Patil — Operational Software Engineer",
    description:
      "Software that survives real operational use — reporting pipelines, ops dashboards, realtime systems, and AI workflows.",
    creator: "@aadityapatil350",
  },
};

export default function Home() {
  return <HomeContent caseStudies={caseStudies} />;
}
