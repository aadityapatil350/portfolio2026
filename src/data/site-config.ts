export const siteConfig = {
  name: "Aditya Patil",
  url: "https://adityapatil.dev",
  description:
    "Self-taught Lead Software Engineer building operational systems, automation platforms, and AI-powered workflows at Renewalytics. Based in Pune, India.",
  location: "Pune, India",
  role: "Lead Software Engineer",
  company: "Renewalytics",
  tagline:
    "Building operational systems, automation platforms & AI-powered workflows.",
  subtagline:
    "Lead Software Engineer at Renewalytics building real-time renewable energy systems, monitoring platforms, reporting automation, and AI-assisted operational tooling.",
  social: {
    github: "https://github.com/aadityapatil350",
    twitter: "https://x.com/adityapatil350",
    email: "hello@adityapatil.dev",
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
    icon: "monitor",
    title: "Operational Platforms",
    description:
      "Full-stack operational systems that replace manual workflows with production-grade software. Dashboards, admin systems, analytics platforms, and reporting engines.",
    capabilities: [
      "Admin dashboards",
      "Analytics systems",
      "Reporting automation",
      "Workflow engines",
    ],
  },
  {
    icon: "cpu",
    title: "AI Workflow Systems",
    description:
      "AI agents, operational copilots, and workflow automation platforms. Building the next generation of AI-native enterprise systems.",
    capabilities: [
      "AI agents",
      "Operational copilots",
      "Workflow automation",
      "AI dashboards",
    ],
  },
  {
    icon: "layers",
    title: "SaaS Engineering",
    description:
      "MVPs, product platforms, APIs, and backend systems. From zero to production at startup speed.",
    capabilities: [
      "MVP development",
      "Product platforms",
      "API design",
      "Backend systems",
    ],
  },
  {
    icon: "activity",
    title: "Monitoring & Data Systems",
    description:
      "Realtime telemetry, monitoring systems, alerting platforms, and SCADA integrations for operational visibility.",
    capabilities: [
      "Realtime telemetry",
      "Monitoring systems",
      "Alerting platforms",
      "SCADA integrations",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "realsync-cms",
    title: "RealSync CMS",
    oneLiner:
      "Enterprise-grade realtime monitoring system for renewable energy portfolios",
    description:
      "Realtime telemetry, SCADA integrations, MQTT/OPC-UA ingestion, alarm systems, and AI-ready workflows serving multi-MW renewable portfolios.",
    thumbnail: "/images/realsync.jpg",
    tech: [
      "Next.js",
      "TimescaleDB",
      "PostgreSQL",
      "WebSockets",
      "MQTT",
      "OPC-UA",
      "Docker",
    ],
    status: "Production",
    metrics: [
      "Realtime telemetry",
      "SCADA integration",
      "Alarm systems",
      "AI-ready pipelines",
    ],
  },
  {
    slug: "reflux",
    title: "Reflux — Forecasting & Operations",
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
    title: "DGR Automation Platform",
    oneLiner:
      "Enterprise reporting automation parsing 30+ complex operational reports daily",
    description:
      "Automated reporting platform that parses complex Excel files, processes multi-sheet operational reports, and generates outputs via cron pipelines with async processing workers.",
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
];

export const indieProjects: IndieProject[] = [
  {
    title: "RealSync CMS",
    description:
      "Enterprise-grade realtime monitoring system for renewable portfolios. SCADA, MQTT, OPC-UA, alarm systems.",
    tech: ["Next.js", "TimescaleDB", "WebSockets", "MQTT"],
    status: "Production",
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
];

export const stats = {
  yearsCoding: "5+",
  productsShipped: "8+",
  systemsAtScale: "3,400+ MW",
  automatedReports: "30+",
  githubUsername: "aadityapatil350",
  xFollowers: "0",
};
