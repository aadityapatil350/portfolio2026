export const siteConfig = {
  name: "Aditya",
  url: "https://aditya.dev",
  description:
    "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India.",
  location: "Pune, India",
  role: "Lead Software Engineer",
  company: "Renewalytics",
  tagline:
    "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India.",
  social: {
    github: "https://github.com/aditya",
    twitter: "https://x.com/aditya",
    email: "hello@aditya.dev",
    linkedin: "",
  },
  available: true, // Toggle this to show/hide availability badge
};

export type ProjectStatus = "Live" | "In Development" | "Production" | "Archived";

export interface CaseStudy {
  slug: string;
  title: string;
  oneLiner: string;
  thumbnail: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
}

export interface IndieProject {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  tech: string[];
  status: ProjectStatus;
  pinned?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "gosolarindex",
    title: "GoSolarIndex.in",
    oneLiner: "17x indexed pages growth in 6 days via technical SEO",
    thumbnail: "/images/gosolarindex.jpg",
    tech: ["Next.js", "PostgreSQL", "Technical SEO"],
    status: "Live",
    link: "https://gosolarindex.in",
  },
  {
    slug: "renewalytics",
    title: "Renewalytics — Reflux & CMS",
    oneLiner: "Production forecasting platform serving renewable energy plants",
    thumbnail: "/images/renewalytics.jpg",
    tech: ["Next.js", "TypeScript", "Node", "Postgres", "Mongo", "Docker"],
    status: "Production",
  },
  {
    slug: "social-copilot",
    title: "Social Copilot",
    oneLiner: "Social media management + AI video generation SaaS",
    thumbnail: "/images/socialcopilot.jpg",
    tech: ["Next.js", "Supabase", "BullMQ", "ElevenLabs", "Creatomate"],
    status: "In Development",
  },
  {
    slug: "msmevault",
    title: "MSMEVault.in",
    oneLiner: "Indian MSME government schemes directory with NBFC lead gen",
    thumbnail: "/images/msmevault.jpg",
    tech: ["Next.js", "Technical SEO"],
    status: "Live",
    link: "https://msmevault.in",
  },
];

export const indieProjects: IndieProject[] = [
  {
    title: "GoSolarIndex.in",
    description:
      "India's solar installer directory. Built in 3 days with Claude Code. 17x indexed pages growth in 6 days.",
    url: "https://gosolarindex.in",
    tech: ["Next.js", "PostgreSQL", "Technical SEO"],
    status: "Live",
    pinned: true,
  },
  {
    title: "MSMEVault.in",
    description:
      "Directory of Indian MSME government schemes, monetized via NBFC loan lead generation.",
    url: "https://msmevault.in",
    tech: ["Next.js", "Technical SEO"],
    status: "Live",
    pinned: true,
  },
  {
    title: "Social Copilot",
    description:
      "Social media management + AI video generation SaaS for creators and businesses.",
    tech: ["Next.js", "Supabase", "BullMQ", "ElevenLabs"],
    status: "In Development",
    pinned: true,
  },
];

export const stats = {
  yearsCoding: "3.5+",
  productsShipped: "4",
  xFollowers: "0",
};
