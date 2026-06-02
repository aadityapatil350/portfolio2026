export const siteConfig = {
  name: "Aditya Patil",
  url: "https://adityapatil.work",
  description:
    "I'm Aditya. Engineer-for-hire by day, indie hacker by night. I lead engineering at Renewalytics in Pune and build AI-native indie products on the side.",
  location: "Pune, India",
  role: "Lead Software Engineer",
  company: "Renewalytics",
  tagline:
    "Turning business problems into software solutions.",
  subtagline:
    "Custom Websites • Web Applications • AI Automation • Internal Tools",
  social: {
    github: "https://github.com/aadityapatil350",
    twitter: "https://x.com/aadityapatil350",
    email: "adityabiz350@gmail.com",
    linkedin: "",
  },
  available: true, // Toggle this to show/hide availability badge
  resumeUrl: "/resume.pdf", // Path to downloadable resume PDF
};

export type ProjectStatus = "Live" | "In Development" | "Production" | "Archived";

export interface CaseStudy {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  thumbnail: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
  metrics?: string[];
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

export interface Service {
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    icon: "layers",
    title: "Full-stack MVPs",
    description:
      "For founders and operations leads who need a real product in weeks, not months. Next.js + Prisma + Postgres + Docker, deployed and working, with the architecture choices a senior would make on day one.",
    capabilities: [
      "Zero-to-launch builds",
      "Auth, payments, dashboards",
      "Production deploy",
      "Post-launch iteration",
    ],
  },
  {
    icon: "cpu",
    title: "AI workflow automation",
    description:
      "Replace your team's manual Excel, email, and reporting workflows with an AI-driven pipeline. From sales ops to finance to support — anywhere a human is copy-pasting between tools every day, there's a pipeline that can do it instead.",
    capabilities: [
      "AI agents for ops",
      "Document + email automation",
      "Data extraction pipelines",
      "Workflow copilots",
    ],
  },
  {
    icon: "database",
    title: "Internal dashboards + admin tools",
    description:
      "For ops, finance, sales, and operations teams who have outgrown spreadsheets. Custom-built around your actual process — not a generic template. Realtime data, reporting, role-based access, all in scope.",
    capabilities: [
      "Custom admin panels",
      "Realtime + reporting dashboards",
      "Role-based access",
      "Excel / API / database ingestion",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "reflux",
    title: "Reflux, Forecasting & Operations",
    oneLiner:
      "Operational platform for forecasting, scheduling, and reporting automation",
    description:
      "Internal platform for forecasting revisions, operational workflows, reporting automation, and government portal integrations serving 3400+ MW capacity.",
    thumbnail: "/images/reflux.jpg",
    tech: [
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Docker",
      "Tailwind CSS",
    ],
    status: "Production",
    metrics: [
      "3400 MW capacity",
      "Cron automation",
      "DSM analytics",
      "Portal integrations",
    ],
  },
  {
    slug: "dgr-automation",
    title: "Excel Flow, Reporting Automation + Dashboard",
    oneLiner:
      "Automated reporting + ops dashboard for Acme client, covering 33+ solar/wind/BESS plants",
    description:
      "Built for Acme as both an automation pipeline and an operations dashboard. Scrapes 30+ daily uploaded Excel sheets across 33+ renewable plants, processes multi-sheet operational data, generates next-day reports + alerts via cron-based async pipelines, and surfaces it all in a dashboard the ops team uses every morning.",
    thumbnail: "/images/dgr.jpg",
    tech: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Cron systems",
      "Excel parsing",
      "Async workers",
    ],
    status: "Production",
    metrics: [
      "35 renewable plants",
      "30+ daily reports",
      "Async pipelines",
      "Vendor-independent",
    ],
  },
  {
    slug: "gosolarindex",
    title: "GoSolarIndex.in",
    oneLiner: "17x indexed pages growth in 6 days via technical SEO",
    description:
      "India's solar installer directory. Built in 3 days, shipped to page-1 rankings through pure technical SEO execution.",
    thumbnail: "/images/gosolarindex.jpg",
    tech: ["Next.js", "PostgreSQL", "Technical SEO"],
    status: "Live",
    link: "https://gosolarindex.in",
    metrics: ["Built in 3 days", "17x index growth", "Page 1 rankings", "100% organic"],
  },
  {
    slug: "cops-dsm-csm",
    title: "COPS DSM & CSM Portal",
    oneLiner:
      "DSM and CSM operational portal for Juniper Green Energy",
    description:
      "Operational portal for DSM (Deviation Settlement Mechanism) and CSM (Commercial Settlement Mechanism) management for Juniper Green Energy's renewable portfolio.",
    thumbnail: "/images/cops-dsm-csm.jpg",
    tech: ["Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    status: "Production",
    metrics: [
      "DSM analytics",
      "CSM management",
      "Juniper Green Energy",
      "Operational portal",
    ],
  },
  {
    slug: "msmevault",
    title: "MSMEVault.in",
    oneLiner:
      "Indian MSME government schemes directory with NBFC lead generation",
    description:
      "Directory of Indian MSME government schemes, monetized via NBFC loan lead generation. Pure SEO play with zero paid marketing.",
    thumbnail: "/images/msmevault.jpg",
    tech: ["Next.js", "Technical SEO"],
    status: "Live",
    link: "https://msmevault.in",
    metrics: [
      "100+ scheme listings",
      "NBFC partnerships",
      "Organic traffic",
      "Lead generation",
    ],
  },
  {
    slug: "realsync-cms",
    title: "RealSync CMS",
    oneLiner:
      "Realtime monitoring system for renewable energy portfolios (MVP)",
    description:
      "Realtime telemetry, SCADA integrations, MQTT/OPC-UA ingestion, alarm systems, and AI-ready workflows. Currently in development, MVP built, integrations in progress.",
    thumbnail: "/images/realsync.jpg",
    tech: [
      "Next.js",
      "PostgreSQL",
      "WebSockets",
      "MQTT",
      "OPC-UA",
      "Docker",
    ],
    status: "In Development",
    metrics: [
      "Realtime telemetry",
      "SCADA integration",
      "Alarm systems",
      "AI-ready pipelines",
    ],
  },
];

export const indieProjects: IndieProject[] = [
  {
    title: "Social Copilot",
    description:
      "Social media scheduler with AI-powered content + video generation. Currently building.",
    tech: ["Next.js", "Supabase", "BullMQ", "ElevenLabs", "Creatomate"],
    status: "In Development",
    pinned: true,
  },
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
    title: "Discover AI Tools",
    description:
      "Web directory of AI tools across categories, discovery-focused, SEO-driven.",
    tech: ["Next.js", "Technical SEO"],
    status: "Live",
  },
  {
    title: "Imaginate.pro",
    description:
      "AI image generation platform. Taken down.",
    tech: ["Next.js", "AI", "Image Generation"],
    status: "Archived",
  },
  {
    title: "AI Brand Voice",
    description:
      "Voice clone app for brand audio. Shipped but failed to find traction.",
    tech: ["Next.js", "AI", "Voice Cloning"],
    status: "Archived",
  },
];

export const stats = {
  yearsCoding: "5+",
  productsShipped: "36+",
  systemsAtScale: "3,400+ MW",
  automatedReports: "30+",
  githubUsername: "aadityapatil350",
  xFollowers: "0",
};
