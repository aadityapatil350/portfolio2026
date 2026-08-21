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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aditya Patil — Independent Systems Engineer",
  url: "https://adityapatil.work",
  telephone: "+91-9373238164",
  priceRange: "₹15,000 – ₹10,00,000",
  image: "https://adityapatil.work/og?title=Aditya%20Patil",
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Remote worldwide" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/aadityapatil350",
    "https://x.com/aadityapatil350",
  ],
  founder: {
    "@type": "Person",
    name: "Aditya Patil",
    jobTitle: "Lead Software Engineer",
  },
  makesOffer: [
    "Reporting Automation",
    "Internal Dashboards",
    "Web App / MVP Development",
    "AI Workflow Automation",
    "AI Integration",
    "Realtime Monitoring",
    "Codebase Rescue",
    "Build Scoping Sprint",
  ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <HomeContent caseStudies={caseStudies} />
    </>
  );
}
