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
    title: "Reflux — Forecasting, Scheduling & Compliance Platform",
    client: "Renewalytics (40+ Renewable Plants)",
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
    title: "COPS — Deviation & Settlement Management Portal",
    client: "Juniper Green Energy",
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
      "Juniper Green Energy",
      "Multi-Plant DSM Analytics",
      "Automated Discrepancy Flags",
      "Full Audit Trail",
    ],
    oneLiner: "Commercial settlement and penalty reconciliation portal for Juniper Green Energy.",
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
];

export const stats = {
  yearsCoding: "5+",
  productsShipped: "36+",
  systemsAtScale: "3,400+ MW",
  automatedReports: "30+",
  githubUsername: "aadityapatil350",
};
