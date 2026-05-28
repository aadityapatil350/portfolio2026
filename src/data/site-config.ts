export const siteConfig = {
  name: "Aditya Patil",
  url: "https://adityapatil.dev",
  description:
    "I'm Aditya. Engineer-for-hire by day, indie hacker by night. I lead engineering at Renewalytics in Pune and build AI-native indie products on the side.",
  location: "Pune, India",
  role: "Lead Software Engineer",
  company: "Renewalytics",
  tagline:
    "Engineer-for-hire by day. Indie hacker by night.",
  subtagline:
    "Lead engineer at Renewalytics building forecasting, reporting, and realtime monitoring for renewable plants. On the side, I ship indie products, break most of them, and take on freelance MVPs and AI workflow automation.",
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
    icon: "layers",
    title: "Full-stack MVPs for founders",
    description:
      "Idea to deployed product in weeks. Next.js, Prisma, Postgres, Docker. I've shipped enough MVPs to know the shortcuts and the landmines.",
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
      "If your team is doing repetitive Excel or email work, there's a good chance I can replace most of it with an AI-driven pipeline. This is what I do at the day job.",
    capabilities: [
      "AI agents for ops",
      "Document + email automation",
      "Data extraction pipelines",
      "Workflow copilots",
    ],
  },
  {
    icon: "monitor",
    title: "Small business websites + SEO",
    description:
      "Fast Next.js websites for shops, clinics, services, and small businesses. SEO-ready from day one, with Google Business setup and a sensible CMS.",
    capabilities: [
      "Next.js + Tailwind site",
      "On-page SEO",
      "Google Business setup",
      "Contact forms + analytics",
    ],
  },
  {
    icon: "search",
    title: "SEO content + indexation",
    description:
      "Write and ship the blog content that brings inbound leads. Same playbook I used on GoSolarIndex.in to hit page-1 rankings inside two weeks.",
    capabilities: [
      "Technical SEO audit",
      "Keyword + topic strategy",
      "Blog content production",
      "Structured data + sitemaps",
    ],
  },
  {
    icon: "database",
    title: "Internal dashboards + admin tools",
    description:
      "Replace the team's manual Excel workflows with a real dashboard. Custom-built, fits your actual process, not a no-code prison.",
    capabilities: [
      "Custom admin panels",
      "Reporting dashboards",
      "Role-based access",
      "Excel/data ingestion",
    ],
  },
  {
    icon: "messageSquare",
    title: "AI chatbots + lead capture",
    description:
      "Set up a customer support, FAQ, or lead-capture bot end-to-end. Trained on your content, integrated into your site, easy to maintain.",
    capabilities: [
      "Custom chatbot setup",
      "Lead capture flows",
      "Knowledge base ingestion",
      "WhatsApp / web embeds",
    ],
  },
  {
    icon: "lightbulb",
    title: "Tech advisor for non-tech founders",
    description:
      "Pick the right stack. Vet a developer. Avoid getting ripped off. Hourly advisory for founders who don't want to learn the hard way.",
    capabilities: [
      "Stack + vendor selection",
      "Developer vetting",
      "Architecture reviews",
      "Cost / scope sanity checks",
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
    title: "Excel Flow, Reporting Automation",
    oneLiner:
      "Automated 30+ daily reports and alerts across 33+ solar/wind/BESS plants",
    description:
      "Replaced a manual Excel workflow across 33+ renewable plants. Scrapes 30+ daily uploaded sheets, processes multi-sheet operational data, and generates next-day reports + alerts via cron-based async pipelines.",
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
  productsShipped: "8+",
  systemsAtScale: "3,400+ MW",
  automatedReports: "30+",
  githubUsername: "aadityapatil350",
  xFollowers: "0",
};
