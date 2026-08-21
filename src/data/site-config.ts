export const siteConfig = {
  name: "Aditya Patil",
  url: "https://adityapatil.work",
  description:
    "Aditya Patil builds operational software that survives real use — reporting that runs itself, dashboards ops teams actually open, realtime systems that page someone at 3 AM, AI workflows that replace manual processes.",
  location: "Pune, India",
  role: "Lead Software Engineer & Delivery Partner",
  company: "Renewalytics",
  tagline:
    "Software that survives real operational use.",
  subtagline:
    "Reporting pipelines · Ops dashboards · Realtime telemetry · AI automation",
  social: {
    github: "https://github.com/aadityapatil350",
    twitter: "https://x.com/aadityapatil350",
    email: "adityabiz350@gmail.com",
    phone: "+91 93732 38164",
  },
  available: true,
  resumeUrl: "/resume.pdf",
};

export type ProjectStatus = "Live" | "Production" | "In Development" | "Archived";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  problem: string;
  before: string;
  built: string;
  outcome: string;
  whyItMatters: string;
  tech: string[];
  status: ProjectStatus;
  metrics: string[];
  thumbnail?: string;
  oneLiner?: string;
  description?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dgr-automation",
    title: "Excel Flow — Daily Generation Report Automation",
    client: "Renewable Asset Operator (33+ Plants)",
    problem:
      "Operations team spent 3+ hours every morning downloading and manually copy-pasting vendor Excel sheets across 33 solar, wind, and BESS plants to generate daily executive reports.",
    before:
      "2 senior ops engineers arrived at 6:00 AM daily, logging into multiple inverter portals and compiling data across 30+ spreadsheets with fragile macros. Formula breaks caused frequent report delays until noon.",
    built:
      "Automated asynchronous ingestion pipeline and operations dashboard. Cron workers scrape and parse multi-sheet operational workbooks, validate inverter-level generation numbers, compute KPIs, and auto-dispatch formatted summaries before 8:00 AM.",
    outcome:
      "Saved 3+ hours daily per engineer · 33+ plants covered automatically · Zero human calculation errors · 100% on-time 8 AM executive dispatches.",
    whyItMatters:
      "If your team rebuilds the same spreadsheet every morning across multiple branches or vendors, this is the exact same problem.",
    tech: ["Node.js", "PostgreSQL", "Docker", "Cron Pipelines", "Async Workers"],
    status: "Production",
    metrics: [
      "33+ Plants Automated",
      "30+ Daily Reports",
      "0 Human Hours",
      "100% On-Time 8 AM Delivery",
    ],
    oneLiner: "Automated daily reporting pipeline covering 33+ utility-scale energy plants.",
    description: "Replaced a 4-hour daily manual Excel workflow with an automated zero-touch reporting pipeline.",
  },
  {
    slug: "reflux",
    title: "Forecasting, Scheduling & Compliance Platform",
    client: "Renewable Energy Asset Operator (40+ Plants, 3,400+ MW)",
    problem:
      "Managing complex 15-minute generation forecasting revisions and statutory SLDC regulatory submissions across 40+ power plants without unified audit controls.",
    before:
      "Power plant operators juggled manual SLDC portal logins, custom XML schedule uploads, and offline spreadsheets. Missing a 15-minute revision window resulted in severe financial DSM penalties.",
    built:
      "High-availability operational platform managing 15-minute schedule revisions, real-time SLDC portal connectors, forecasting algorithm execution, and automated compliance logging for 3,400+ MW capacity.",
    outcome:
      "3,400+ MW active capacity managed · 40+ plants running concurrently · 99.9% scheduling revision reliability · Automated SLDC submissions.",
    whyItMatters:
      "If your operations face tight compliance deadlines where late submissions trigger penalties, this platform demonstrates real-time scheduling severity.",
    tech: ["Next.js", "PostgreSQL", "MongoDB", "Prisma", "Docker", "Tailwind CSS"],
    status: "Production",
    metrics: [
      "3,400+ MW Managed",
      "40+ Plants Live",
      "15-min Schedule Engine",
      "Zero Missed Windows",
    ],
    oneLiner: "Forecasting & regulatory scheduling platform managing 3,400+ MW capacity.",
    description: "Mission-critical scheduling and compliance engine for 40+ power plants across India.",
  },
  {
    slug: "cops-dsm-csm",
    title: "Deviation & Settlement Management Portal",
    client: "Renewable Energy Producer (Multi-Plant Portfolio)",
    problem:
      "Tracking complex Deviation Settlement Mechanism (DSM) penalties and commercial settlement reconciliations across a multi-plant portfolio.",
    before:
      "Commercial analysts manually consolidated weekly SLDC penalty sheets against internal meter data in spreadsheets, making it impossible to identify which inverters caused deviation penalties in time to contest disputes.",
    built:
      "Centralized DSM & CSM operational portal with automated SLDC sheet ingestion, discrepancy flagging, penalty allocation math, and executive dispute dashboards.",
    outcome:
      "Instant penalty dispute reconciliation · Multi-plant asset visibility · 100% audit trail for commercial settlements.",
    whyItMatters:
      "If your finance or operations team struggles to audit third-party penalty charges or invoices against internal activity logs, this eliminates the guesswork.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    status: "Production",
    metrics: [
      "Multi-Plant Portfolio",
      "Automated Discrepancy Flags",
      "Full Audit Trail",
      "Same-Day Dispute Resolution",
    ],
    oneLiner: "Commercial settlement and penalty reconciliation portal for a multi-plant renewable energy producer.",
    description: "Operational portal tracking deviation settlement penalties and commercial reconciliations.",
  },
  {
    slug: "realsync-cms",
    title: "RealSync CMS — Industrial Realtime Telemetry & Alarms",
    client: "Industrial & Energy Assets (MVP)",
    problem:
      "Plant managers lacked sub-second visibility into inverter trips and telemetry anomalies, finding out about equipment failures hours after generation losses occurred.",
    before:
      "Relying on slow 15-minute cloud polling or on-site visual checks meant line trips sat unaddressed during peak sunlight hours, directly destroying revenue.",
    built:
      "High-throughput realtime telemetry platform ingesting live SCADA metrics via WebSockets, MQTT, and OPC-UA, with instant threshold alarm routing to mobile.",
    outcome:
      "Sub-500ms telemetry update speed · Live multi-node state monitoring · Immediate automated trip escalations.",
    whyItMatters:
      "If your machines, servers, or fleet assets can fail silently, sub-second telemetry and instant alerting prevent expensive downtime.",
    tech: ["Next.js", "PostgreSQL", "WebSockets", "MQTT", "OPC-UA", "Docker"],
    status: "In Development",
    metrics: [
      "Sub-500ms Updates",
      "MQTT & OPC-UA Ingestion",
      "Instant Alarm Triggers",
      "Live Canvas Telemetry",
    ],
    oneLiner: "Realtime industrial telemetry and SCADA monitoring platform.",
    description: "High-throughput monitoring system streaming live equipment metrics and threshold alarms.",
  },
  {
    slug: "ops-agent",
    title: "OpsFlow — AI Agent for Multi-Site Operational Communication",
    client: "Renewable Energy Asset Operator (35+ Plants)",
    problem:
      "Site events — outages, weather issues, curtailments, restorations — get discussed by field teams long before they surface in dashboards or formal reporting. Operations leads react late, and the pattern repeats across dozens of sites every week.",
    before:
      "Operations managers manually monitored dozens of communication channels across plant teams. Signals were lost, response was reactive, and productivity trends across sites were impossible to compare in one view.",
    built:
      "An AI agent that continuously monitors operational team communications across every site, extracts meaningful signals, and can ask polite follow-up questions when it needs clarification. Every action is audited, guardrails prevent it from ever impersonating a human, and the human team stays in full control.",
    outcome:
      "Site events reach operations leads within minutes of being discussed, not hours after they hit the dashboard. Cross-site productivity patterns are now visible in one place for the first time.",
    whyItMatters:
      "If your team lives on WhatsApp or Slack and the important signals are drowning in the noise, an AI agent can watch the firehose so a human doesn't have to.",
    tech: ["LLM Agents", "Python", "Node.js", "MongoDB", "Docker"],
    status: "Production",
    metrics: [
      "35+ Sites Monitored",
      "AI Agent In Production",
      "Full Audit Trail",
      "Human-in-the-Loop",
    ],
    oneLiner: "AI agent watching operational team chatter across 35+ sites for early signals.",
    description: "Autonomous agent that surfaces site events from operational team conversations in near real-time.",
  },
  {
    slug: "forecast-agent",
    title: "Autonomous Forecasting & Scheduling AI Agent",
    client: "Renewable Energy Asset Operator (Multi-Plant Portfolio)",
    problem:
      "Producing accurate generation forecasts and adjusting schedules across dozens of plants requires blending weather, historical patterns, live telemetry, and human operator context — every fifteen minutes, across every site, every day. Doing it manually does not scale, and mistakes cost real money in penalties.",
    before:
      "Analysts stitched together spreadsheets and manual weather checks, and schedule revisions relied on operator memory. Coverage was uneven, edge cases got missed, and penalty exposure was constant.",
    built:
      "An autonomous AI agent that continuously ingests multiple operational signals, produces production forecasts, and adapts schedules on its own. Human operators supervise and step in only on edge cases the agent flags for review.",
    outcome:
      "Forecasts and schedule revisions run continuously without human touch across the portfolio. Operator time shifts from manual data entry to reviewing the small percentage of decisions that need judgment.",
    whyItMatters:
      "If your business runs on forecasts that combine machine data, weather, and human input, an autonomous agent can carry the boring 95% so your best people focus on the 5% that matters.",
    tech: ["AI Agents", "ML Forecasting", "Python", "PostgreSQL", "Time-Series Data"],
    status: "Production",
    metrics: [
      "Autonomous Decision Loop",
      "Multi-Signal Fusion",
      "Human-Reviewed Edge Cases",
      "Continuous Operation",
    ],
    oneLiner: "Autonomous AI agent producing forecasts and adjusting schedules across a multi-plant portfolio.",
    description: "AI agent that blends weather, telemetry, and operator input to run forecasting and scheduling with minimal human touch.",
  },
];

export interface IndieProject {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  tech: string[];
  status: ProjectStatus;
  pinned?: boolean;
}

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
    description: "AI image generation platform. Taken down.",
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
};
