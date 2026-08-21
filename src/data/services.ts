export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  timeline: string;
  description: string;
}

export interface ServiceProof {
  system: string;
  metrics: string;
  description: string;
  takeaway: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  tier: string;
  painHeadline: string;
  painBody: string[];
  whatYouGet: string[];
  whatThisIsNot: string[];
  howItWorks: ServiceStep[];
  proof: ServiceProof;
  priceFrom: string;
  timeline: string;
  notFor: string[];
  faqs: ServiceFaq[];
  relatedServices: { slug: string; title: string }[];
}

export const servicesData: Record<string, ServiceItem> = {
  "reporting-automation": {
    slug: "reporting-automation",
    title: "Reporting Automation",
    h1: "Automated Daily Reporting Pipelines That Run Without Human Intervention",
    metaTitle: "Automated Reporting Pipelines & Daily DGR Automation | Aditya Patil",
    metaDescription:
      "Replace manual Excel and email reporting with automated daily pipelines that pull data, calculate KPIs, generate PDFs, and dispatch alerts before 8 AM.",
    tier: "Tier 1 — Core Build",
    painHeadline: "Your operations team spends the first 3 hours of every morning copy-pasting numbers between spreadsheets.",
    painBody: [
      "Every day starts the same way. Two or three team members log into different vendor portals, download CSVs, open a master workbook, and paste data into yesterday's formulas. By 11:30 AM, someone notices a formula broke because a vendor changed a column name. Management gets yesterday's numbers at lunch instead of 8:00 AM.",
      "This process creates hidden operational fragility. When the key person who knows the Excel macro takes sick leave, reporting stalls completely. Data is misaligned, audit trails do not exist, and decisions are made on stale or inaccurate numbers.",
      "A reporting automation pipeline replaces this entirely. It connects directly to your databases, SCADA systems, vendor portals, or email inboxes, extracts the raw metrics, runs data validation checks, generates formatted executive reports, and delivers them to WhatsApp, Slack, or email before your team arrives."
    ],
    whatYouGet: [
      "Automated extraction workers scheduled via cron to run nightly or at shift handovers",
      "Resilient parsers handling messy multi-sheet Excel, CSV, PDF, and API payloads",
      "Data validation engine flagging missing records, sensor drift, or anomalies before dispatch",
      "Automated PDF & spreadsheet report generation with executive summaries and KPI tables",
      "Direct dispatch via WhatsApp Business API, Slack Webhooks, or automated email",
      "Ops oversight dashboard showing pipeline health, run logs, and manual override controls"
    ],
    whatThisIsNot: [
      "This is NOT a generic Zapier or Make.com workflow that breaks whenever a sheet row changes.",
      "This is NOT an offshore data entry service or outsourced virtual assistant team.",
      "This is NOT an off-the-shelf BI tool like PowerBI that still expects you to manually clean data."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Workflow & Data Audit",
        timeline: "Days 1–5",
        description: "We map every input source, edge case, and formula in your existing spreadsheet workflow. You get a deterministic pipeline spec and sample schema."
      },
      {
        step: 2,
        title: "Ingestion & Validation Engine",
        timeline: "Weeks 2–3",
        description: "Build robust extraction scrapers and validation rules. The system handles missing rows, schema shifts, and network retries gracefully."
      },
      {
        step: 3,
        title: "Report Generator & Dispatch Channels",
        timeline: "Weeks 3–4",
        description: "Programmatic generation of executive PDF and Excel outputs formatted exactly to your leadership team's specifications, dispatched via email and WhatsApp."
      },
      {
        step: 4,
        title: "Parallel Run & Cutover",
        timeline: "Weeks 5–6",
        description: "The pipeline runs in parallel with your manual process for 10 consecutive days until numbers match to the decimal. Full handover and monitoring setup."
      }
    ],
    proof: {
      system: "Excel Flow (DGR Automation Pipeline)",
      metrics: "33+ renewable plants · 30+ daily reports · 0 human hours",
      description: "Built for a renewable asset operator running 33+ solar and wind plants across India. Ingests 30+ vendor Excel files every morning, parses inverter-level metrics, computes daily generation reports, and generates executive summaries without human touch.",
      takeaway: "If it handles messy multi-vendor energy telemetry across 33 remote plants every morning, it will easily automate your daily operational spreadsheets."
    },
    priceFrom: "₹1.5L – ₹5L",
    timeline: "3–6 weeks",
    notFor: [
      "Companies with fewer than 5 spreadsheets who only need an occasional one-off report",
      "Teams looking for a ₹10,000 Excel macro fix rather than an enterprise software pipeline",
      "Workflows where the source data format changes completely every single week with no standard"
    ],
    faqs: [
      {
        question: "What happens when our vendor changes their spreadsheet structure?",
        answer: "Every pipeline includes schema validation and automated alert handlers. When an unannounced column change occurs, the parser falls back to fuzzy header matching and notifies your admin team with exact line diffs rather than failing silently or dispatching corrupted numbers."
      },
      {
        question: "Can this send reports directly into WhatsApp groups?",
        answer: "Yes. Using the official WhatsApp Business API, the system dispatches PDF summaries, key metric text snippets, and critical threshold alerts directly to leadership and site manager groups at designated schedules."
      },
      {
        question: "Do we need to replace our existing databases or internal software?",
        answer: "No. The automation sits alongside your existing infrastructure. It extracts from your current databases, ERPs, email attachments, or SFTP folders, and pushes reports where you need them without requiring a migration."
      },
      {
        question: "How do we verify the numbers match our legacy manual spreadsheets?",
        answer: "We mandate a 10 to 14 day parallel run period during deployment. Both the legacy manual sheet and the automated pipeline run simultaneously, with automated diff reports generated daily until zero discrepancies remain."
      },
      {
        question: "Who owns the code and infrastructure once the project is finished?",
        answer: "You own 100% of the source code, Docker configs, database schemas, and documentation. Everything is deployed directly onto your cloud account (AWS, DigitalOcean, GCP, or on-premise Linux servers) with no recurring vendor licensing fees."
      }
    ],
    relatedServices: [
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" },
      { slug: "ai-workflow-automation", title: "AI Workflow Automation" },
      { slug: "build-scoping-sprint", title: "Build Scoping Sprint" }
    ]
  },

  "web-app-mvp-development": {
    slug: "web-app-mvp-development",
    title: "Web App / MVP Build",
    h1: "Production-Grade Web Applications & MVPs Built For Real Scale",
    metaTitle: "Custom Web App & MVP Development Services | Aditya Patil",
    metaDescription:
      "Turn your product specification into a fast, secure, production-ready web application with authentication, database architecture, payment flows, and admin tools in 3–8 weeks.",
    tier: "Tier 1 — Core Build",
    painHeadline: "You have a validated idea or operational workflow, but generic templates and unreliable contractors keep stalling your launch.",
    painBody: [
      "Most MVP builds fail because they are built either as fragile no-code prototypes that cannot scale past 50 users, or by junior agencies who write unmaintainable spaghetti code with zero test coverage and poor database design.",
      "When your first 500 customers sign up or when payments fail silently, you are forced to scrap the entire project and start over from scratch. You lose months of market timing and thousands in burnt capital.",
      "I build production-grade web applications from day one using modern Next.js, TypeScript, PostgreSQL, and clean modular domain architecture. You get a fast, secure product with role-based access, billing, analytics, and an administrative control center ready for real paying users."
    ],
    whatYouGet: [
      "End-to-end full-stack web application built on Next.js 16 (App Router), React 19, and TypeScript",
      "Relational database design (PostgreSQL) with migrations, indexes, and connection pooling",
      "Authentication & role-based permissions (JWT, OAuth, multi-tenant isolation)",
      "Payment gateway integration (Razorpay, Stripe) with webhook verification and invoice generation",
      "Custom administrative panel for user management, usage analytics, and operational overrides",
      "Dockerized container setup with automated CI/CD and deployment on AWS, VPS, or Vercel"
    ],
    whatThisIsNot: [
      "This is NOT a drag-and-drop WordPress or Bubble prototype that breaks under concurrency.",
      "This is NOT an endless hourly project where the scope expands and delivery gets postponed.",
      "This is NOT junior code copied from boilerplate tutorials without security audits."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Technical Specification & Wireframes",
        timeline: "Week 1",
        description: "We define user journeys, database entity models, API endpoints, and core constraints. You receive a fixed-scope technical architecture document."
      },
      {
        step: 2,
        title: "Core Backend, Auth & Database",
        timeline: "Weeks 2–3",
        description: "PostgreSQL schemas, authentication flows, data validation, and business logic endpoints are implemented and unit tested."
      },
      {
        step: 3,
        title: "Responsive Frontend & Admin Suite",
        timeline: "Weeks 4–6",
        description: "Fast, responsive UI with Tailwind CSS, state management, operational tables, billing flows, and admin views."
      },
      {
        step: 4,
        title: "QA, Security Audit & Production Launch",
        timeline: "Weeks 7–8",
        description: "End-to-end testing, payment webhook validation, SSL/domain configuration, production load testing, and client handover."
      }
    ],
    proof: {
      system: "GoSolarIndex & Reflux Platform",
      metrics: "3,400+ MW supported · Sub-second page loads · Zero downtime",
      description: "Architected and delivered mission-critical web applications handling high-concurrency real-time plant schedules and high-traffic SEO directories with 10,000+ indexed pages.",
      takeaway: "Your web application will be engineered with the same rigor and security required by multi-gigawatt energy infrastructure."
    },
    priceFrom: "₹2.5L – ₹8L",
    timeline: "3–8 weeks",
    notFor: [
      "Projects with undefined requirements and no target customer hypothesis",
      "Clients looking for low-budget ₹20K clone scripts",
      "Native mobile-only applications requiring iOS Swift / Android Java codebases"
    ],
    faqs: [
      {
        question: "Can this web app handle tens of thousands of active users?",
        answer: "Yes. By building on PostgreSQL with optimized query indexes, Redis caching where appropriate, and stateless Next.js compute, the architecture easily handles tens of thousands of daily active users without expensive infrastructure costs."
      },
      {
        question: "How do you handle Indian payment gateways like Razorpay?",
        answer: "We implement server-side signature verification, idempotency keys, webhook retry queues, and automated reconciliation to ensure no payment is lost or credited twice."
      },
      {
        question: "Will I be able to hire other engineers to maintain this codebase later?",
        answer: "Yes. The codebase adheres to strict TypeScript standards, explicit domain boundaries, standard Next.js conventions, and comprehensive README documentation. Any senior TypeScript developer can onboard within 48 hours."
      },
      {
        question: "Do you provide post-launch support and bug fixes?",
        answer: "Every core build includes a 30-day post-launch warranty where any technical defect or bug is resolved with high priority at zero extra cost. Ongoing advisory retainers are also available."
      },
      {
        question: "What are the infrastructure running costs for an MVP built this way?",
        answer: "Typical running costs start at $10 to $30/month (e.g. on Hetzner, Railway, or DigitalOcean with managed Postgres) and scale linearly with real usage."
      }
    ],
    relatedServices: [
      { slug: "build-scoping-sprint", title: "Build Scoping Sprint" },
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" },
      { slug: "codebase-rescue", title: "Codebase Rescue" }
    ]
  },

  "internal-dashboards": {
    slug: "internal-dashboards",
    title: "Internal Dashboards & Admin Panels",
    h1: "Custom Internal Dashboards Built Around Your Actual Business Operations",
    metaTitle: "Custom Internal Dashboards & Ops Panels | Aditya Patil",
    metaDescription:
      "Custom internal dashboards and admin tools for operations, finance, and logistics teams who have outgrown Google Sheets. Role-based access, realtime data, and audit trails.",
    tier: "Tier 1 — Core Build",
    painHeadline: "Your operations, sales, and logistics teams are juggling 15 spreadsheets with no access control or audit logs.",
    painBody: [
      "Spreadsheets work wonderfully up to 5 team members. Past that, they become an operational hazard. Rows get deleted accidentally, sensitive margin data is visible to everyone, and managers waste hours chasing updates over WhatsApp calls.",
      "Off-the-shelf CRM or ERP systems force your team into rigid workflows that do not match how your business actually runs. Staff end up maintaining duplicate spreadsheets on the side just to get their daily work done.",
      "A custom internal dashboard models your exact business logic. Your team gets role-specific views, permission controls, one-click action buttons, instant search, and automated audit logging that keeps everyone accountable."
    ],
    whatYouGet: [
      "Custom role-based permissions (Admin, Manager, Field Operator, Finance, View-only)",
      "High-density data tables with instant server-side filtering, sorting, and CSV exports",
      "Realtime activity streams and automated audit trails for every record update",
      "Direct integration with SQL databases, legacy ERP APIs, or webhook endpoints",
      "Batch actions (bulk approvals, status transitions, mass invoice dispatches)",
      "Mobile-friendly operational UI for field managers and on-site staff"
    ],
    whatThisIsNot: [
      "This is NOT a generic Retool wrapper with expensive per-user monthly seat fees.",
      "This is NOT a visual theme pasted over an empty template.",
      "This is NOT an inflexible off-the-shelf ERP that takes 18 months to customize."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Process & Role Mapping",
        timeline: "Week 1",
        description: "We document the roles, permissions, data models, and critical daily action flows for each department."
      },
      {
        step: 2,
        title: "Data Layer & Secure Authentication",
        timeline: "Weeks 2–3",
        description: "Database models, row-level security, role-based middleware, and API connectors are built."
      },
      {
        step: 3,
        title: "Operational Views & Workflow Actions",
        timeline: "Weeks 3–4",
        description: "Custom table interfaces, modal action drawers, approval workflows, and realtime notifications."
      },
      {
        step: 4,
        title: "Team Training & Production Deployment",
        timeline: "Week 5",
        description: "Hands-on walkthrough with operations leads, edge-case tuning, and deployment to your private server."
      }
    ],
    proof: {
      system: "COPS DSM & CSM Portal (Juniper Green Energy)",
      metrics: "Multi-plant portfolio · Realtime penalty monitoring · Enterprise RBAC",
      description: "Engineered an operational compliance and commercial settlement portal for Juniper Green Energy, enabling operations and finance teams to track deviations, revenue settlements, and regulatory submissions across renewable assets.",
      takeaway: "Built to handle complex enterprise calculations with zero tolerance for calculation drift or data leaks."
    },
    priceFrom: "₹1.5L – ₹4L",
    timeline: "2–5 weeks",
    notFor: [
      "Single-user setups where Google Sheets is still working adequately",
      "Companies unwilling to document their internal approval hierarchies",
      "Teams wanting to buy an out-of-the-box SAP replacement for ₹20,000"
    ],
    faqs: [
      {
        question: "How is this better than Retool or Appsmith?",
        answer: "Retool charges per-user per-month licensing that balloons quickly as your team grows, and locks your business logic into a proprietary platform. A custom dashboard is completely license-free, owned by you, customized to arbitrary precision, and runs on your own hardware."
      },
      {
        question: "Can we restrict field staff from viewing customer contact numbers or financial margins?",
        answer: "Yes. Granular column-level and row-level access control is enforced at the database query level, preventing unauthorized data from ever leaving the server."
      },
      {
        question: "Can the dashboard ingest data from existing Excel sheets automatically?",
        answer: "Yes. We can include Excel/CSV drag-and-drop ingestion with validation checks that immediately imports records into the central database."
      },
      {
        question: "Does it work smoothly on mobile phones for field teams?",
        answer: "Every dashboard view is built with responsive mobile-first layouts so supervisors in the factory or warehouse can update statuses directly from their phones."
      },
      {
        question: "Can we trigger external actions like WhatsApp alerts or PDF invoices from the dashboard?",
        answer: "Yes. One-click action handlers can trigger automated WhatsApp messages, invoice generation, email dispatches, or webhooks into third-party logistics systems."
      }
    ],
    relatedServices: [
      { slug: "reporting-automation", title: "Reporting Automation" },
      { slug: "ai-workflow-automation", title: "AI Workflow Automation" },
      { slug: "web-app-mvp-development", title: "Web App / MVP Build" }
    ]
  },

  "ai-workflow-automation": {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    h1: "AI Pipelines That Process Unstructured Documents, Inquiries & Repetitive Workflows",
    metaTitle: "Custom AI Workflow Automation & Agent Pipelines | Aditya Patil",
    metaDescription:
      "Automate manual back-office tasks with deterministic AI pipelines. Document extraction, WhatsApp enquiry triage, automated PDF parsing, and internal AI copilots.",
    tier: "Tier 1 — Core Build",
    painHeadline: "High-value employees are burning 20+ hours a week manually reading invoices, answering repetitive client messages, and typing data into software.",
    painBody: [
      "Unstructured data is the bottleneck of modern operations. Vendor invoices arrive as scanned PDFs, customer enquiries arrive across WhatsApp and email, and field reports arrive as messy text notes. A human has to read each one, extract the numbers, and key them into an ERP.",
      "Hiring more back-office staff increases payroll overhead without fixing data errors or response latency. Customers wait hours for quotes, and invoices sit unreviewed for days.",
      "Custom AI workflow automation combines Large Language Models (LLMs) with strict programmatic validation. The pipeline extracts structured JSON from PDFs and emails, validates every field against your business rules, and executes the downstream action automatically."
    ],
    whatYouGet: [
      "Automated document extraction pipelines for PDFs, scanned invoices, PODs, and purchase orders",
      "Intelligent WhatsApp & email enquiry triage with automated quote drafting and routing",
      "Strict schema validation (Zod / JSON Schema) ensuring zero hallucinated records enter your database",
      "Human-in-the-loop review queue for ambiguous or low-confidence edge cases",
      "Audit logs with side-by-side visual diffs comparing original documents against extracted data",
      "Direct webhook / API integrations into your CRM, database, or accounting software"
    ],
    whatThisIsNot: [
      "This is NOT a generic ChatGPT wrapper or chatbot that hallucinating nonsensical answers.",
      "This is NOT a toy demo built in Zapier that breaks when a document has two pages.",
      "This is NOT an opaque third-party SaaS that charges expensive per-page markup fees."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Sample Ingestion & Prompt Calibration",
        timeline: "Days 1–7",
        description: "We gather 50–100 real sample documents or customer communications, define extraction schemas, and benchmark accuracy."
      },
      {
        step: 2,
        title: "Pipeline Construction & Schema Validation",
        timeline: "Weeks 2–3",
        description: "Build OCR extraction, structured LLM parsing, fallback validation logic, and error boundaries."
      },
      {
        step: 3,
        title: "Human-in-the-Loop Review UI",
        timeline: "Weeks 3–4",
        description: "Build a streamlined interface for staff to inspect low-confidence extractions with single-click approvals."
      },
      {
        step: 4,
        title: "Production Deployment & Monitoring",
        timeline: "Weeks 5–6",
        description: "Connect live webhooks, set up token cost monitoring, latency telemetry, and train your team."
      }
    ],
    proof: {
      system: "Social Copilot & Document Extraction Pipelines",
      metrics: "99%+ structured extraction accuracy · Sub-3-second processing",
      description: "Engineered multi-modal AI processing pipelines combining LLM vision analysis, structured schema validation, and asynchronous background worker queues (BullMQ/Redis).",
      takeaway: "Designed with deterministic guardrails so your operations never rely on unverified AI outputs."
    },
    priceFrom: "₹1L – ₹5L",
    timeline: "2–6 weeks",
    notFor: [
      "Companies wanting an open-ended conversational bot with no defined business output",
      "Workflows where 100% manual creative judgement is required on every step",
      "Teams looking for free AI setups without API token infrastructure"
    ],
    faqs: [
      {
        question: "How do you prevent the AI from hallucinating incorrect numbers?",
        answer: "We use structured output mode (JSON Schema enforcement) coupled with post-extraction mathematical validation rules (e.g. checking that line items sum up to the invoice total). If numbers fail validation, the item is automatically routed to a human review queue."
      },
      {
        question: "What are the ongoing AI API costs (OpenAI / Anthropic / Gemini)?",
        answer: "For standard document extraction or email triage, API token costs are negligible—typically ₹0.20 to ₹2.00 per document processed. We optimize prompt caching and model selection (using smaller fast models for routine tasks) to keep costs minimal."
      },
      {
        question: "Can this extract data from blurry photos or scanned Indian invoices?",
        answer: "Yes. We use advanced multi-modal vision models combined with image pre-processing (contrast normalization, deskewing) that accurately parse low-resolution scans, vernacular terms, and GSTIN formats."
      },
      {
        question: "Is our proprietary customer or financial data used to train public AI models?",
        answer: "No. Enterprise API endpoints with zero-data-retention agreements are utilized, ensuring your company data is never retained or used to train foundation models."
      },
      {
        question: "Can this pipeline trigger actions directly in our Tally or Zoho Books?",
        answer: "Yes. Once extraction and validation succeed, the structured data is pushed directly to Zoho, Tally, SAP, or your internal SQL database via REST API or XML sync."
      }
    ],
    relatedServices: [
      { slug: "ai-integration", title: "AI Integration" },
      { slug: "reporting-automation", title: "Reporting Automation" },
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" }
    ]
  },

  "ai-integration": {
    slug: "ai-integration",
    title: "AI Integration",
    h1: "Embed AI Intelligence Directly Into Your Existing Software Products",
    metaTitle: "Product AI Integration Services (LLM, RAG, Search) | Aditya Patil",
    metaDescription:
      "Add semantic search, intelligent summarisation, conversational copilots, and automated classification directly into your existing web application or SaaS.",
    tier: "Tier 1 — Core Build",
    painHeadline: "Your existing product needs AI capabilities to stay competitive, but your engineering team doesn't have time to master LLM infrastructure.",
    painBody: [
      "Your customers are asking for intelligent search, automated summaries, or AI copilots inside your SaaS. However, your in-house engineers are tied up with core roadmap features and maintenance.",
      "Bolting on a simplistic AI chat endpoint often results in slow response times, runaway API bills, prompt injection security vulnerabilities, and irrelevant answers.",
      "I integrate production-ready AI capabilities into your existing codebase. From vector database setup and hybrid semantic search to streaming completions and background agent workers, you get clean, tested pull requests ready to ship."
    ],
    whatYouGet: [
      "Vector embeddings & hybrid search pipeline (pgvector, Pinecone, or Qdrant)",
      "Streaming UI components with optimistic updates, markdown rendering, and token throttling",
      "Retrieval-Augmented Generation (RAG) with context chunking and reranking",
      "Token usage telemetry, caching layers, and rate limiting to prevent cost blowouts",
      "Prompt security guardrails protecting against prompt injection and data leaks",
      "Comprehensive TypeScript interfaces and unit test suites for all AI service functions"
    ],
    whatThisIsNot: [
      "This is NOT a replacement for your core engineering team.",
      "This is NOT a copy-pasted demo script without error handling or telemetry.",
      "This is NOT a full product rebuild—it integrates into your existing architecture."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Architecture & Data Audit",
        timeline: "Days 1–4",
        description: "Inspect existing codebase, data models, and define the exact AI capability scope and integration points."
      },
      {
        step: 2,
        title: "Embeddings & Backend Service Layer",
        timeline: "Weeks 1–2",
        description: "Implement vector ingestion, context retrieval, LLM orchestration, and caching mechanisms."
      },
      {
        step: 3,
        title: "Frontend UI & Streaming Experience",
        timeline: "Weeks 2–3",
        description: "Build intuitive UI components, streaming responses, citation links, and user feedback mechanisms."
      },
      {
        step: 4,
        title: "Load Testing, Security & Handover",
        timeline: "Week 4",
        description: "Benchmark latency under concurrency, verify token cost guardrails, and merge pull requests into your repository."
      }
    ],
    proof: {
      system: "Social Copilot AI Engine & Discover AI Tools",
      metrics: "Streaming response latency < 350ms · Zero-token prompt caching",
      description: "Designed modular AI generation engines featuring multi-provider fallbacks (Anthropic/OpenAI/Gemini), automated prompt compression, and high-speed semantic retrieval.",
      takeaway: "Your users will experience fast, responsive, and contextually accurate AI interactions within your product."
    },
    priceFrom: "₹75K – ₹3L",
    timeline: "1–4 weeks",
    notFor: [
      "Founders who don't have an existing application or active user base yet",
      "Teams looking to train custom foundation models from scratch on raw GPUs",
      "Applications without existing structured data or clear use cases"
    ],
    faqs: [
      {
        question: "Can you work directly within our GitHub repository and pull request workflow?",
        answer: "Yes. All work is delivered via clean branch PRs adhering to your team's existing coding standards, lint rules, and review processes."
      },
      {
        question: "How do you keep latency low when generating AI responses?",
        answer: "We implement HTTP server-sent events (SSE) for token streaming, semantic caching for repeated queries, and asynchronous background worker queues for non-blocking operations."
      },
      {
        question: "What vector database do you recommend for our stack?",
        answer: "If you already use PostgreSQL, pgvector is usually the cleanest choice because it eliminates the need for an external managed service. For massive multi-million vector catalogs, dedicated engines like Qdrant or Pinecone are utilized."
      },
      {
        question: "How do you handle API key security and rate limits?",
        answer: "API keys remain securely stored in your server environment variables. All client requests pass through authenticated backend proxy routes equipped with Redis-backed rate limiting and usage quotas."
      },
      {
        question: "What happens if OpenAI or Anthropic suffers an outage?",
        answer: "We implement automatic multi-provider fallback chains (e.g. gracefully failing over from Claude to GPT-4o to Gemini) with circuit breakers to ensure zero service disruption."
      }
    ],
    relatedServices: [
      { slug: "ai-workflow-automation", title: "AI Workflow Automation" },
      { slug: "web-app-mvp-development", title: "Web App / MVP Build" },
      { slug: "codebase-rescue", title: "Codebase Rescue" }
    ]
  },

  "realtime-monitoring": {
    slug: "realtime-monitoring",
    title: "Realtime Monitoring & Telemetry Systems",
    h1: "High-Throughput Realtime Dashboards, Telemetry Ingestion & Live Alerting",
    metaTitle: "Realtime Monitoring, SCADA & IoT Telemetry Dashboards | Aditya Patil",
    metaDescription:
      "Industrial-grade realtime monitoring platforms. WebSocket telemetry, MQTT/OPC-UA ingestion, live SCADA dashboards, and automated threshold alerts.",
    tier: "Tier 1 — Core Build",
    painHeadline: "Critical physical or digital assets are failing silently because your team only sees metrics hours after incidents occur.",
    painBody: [
      "In industrial manufacturing, renewable power plants, logistics hubs, and high-availability servers, downtime costs thousands of rupees every single minute. Relying on periodic batch uploads or manual visual inspections means alarms are discovered too late.",
      "Standard web frameworks choke when hundreds of sensors, IoT devices, or microservices stream concurrent updates every second. Databases lock up, WebSocket connections drop, and browsers freeze under heavy memory consumption.",
      "I architect high-throughput realtime systems engineered for continuous load. Using lightweight MQTT, OPC-UA, WebSockets, and time-series data storage, your operations team gets live sub-second telemetry, animated status indicators, and immediate automated escalations."
    ],
    whatYouGet: [
      "Realtime ingestion pipelines supporting WebSockets, MQTT, OPC-UA, and Server-Sent Events",
      "High-density live dashboards with custom Canvas / SVG telemetry widgets and smooth rendering",
      "Configurable threshold alert engine dispatching instant SMS, WhatsApp, or PagerDuty alerts",
      "Time-series database optimization for historical playback and trend analysis",
      "Connection state management with automatic reconnection, heartbeat pings, and offline caching",
      "Edge gateway and server deployment configs in Docker with health-check monitoring"
    ],
    whatThisIsNot: [
      "This is NOT a basic charting widget that polls a REST API every 60 seconds.",
      "This is NOT a proprietary SCADA license costing ₹25 Lakhs per site.",
      "This is NOT an experimental prototype that crashes after 24 hours of continuous operation."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Protocol & Telemetry Specification",
        timeline: "Weeks 1–2",
        description: "Define packet schemas, update frequencies, data volumes, and alert thresholds across all connected nodes."
      },
      {
        step: 2,
        title: "Ingestion Broker & Time-Series Engine",
        timeline: "Weeks 3–4",
        description: "Deploy scalable MQTT/WebSocket message brokers, buffer queues, and optimized database storage."
      },
      {
        step: 3,
        title: "Live Dashboard & Alerting System",
        timeline: "Weeks 5–7",
        description: "Build live UI views with virtualized lists, smooth real-time gauges, and automated escalation logic."
      },
      {
        step: 4,
        title: "Stress Testing & Commissioning",
        timeline: "Weeks 8–10",
        description: "Simulate 5x peak data loads, test network dropouts, verify failovers, and complete on-site or remote commissioning."
      }
    ],
    proof: {
      system: "RealSync CMS & Renewalytics Platform",
      metrics: "3,400+ MW real-time tracking · Sub-500ms telemetry · 40+ plants",
      description: "Designed and engineered high-concurrency realtime monitoring architectures for renewable energy portfolios, integrating live SCADA data, deviation tracking, and multi-tenant alarms.",
      takeaway: "If it maintains sub-second stability across thousands of megawatts of industrial energy assets, it will handle your telemetry with absolute reliability."
    },
    priceFrom: "₹3L – ₹10L",
    timeline: "5–10 weeks",
    notFor: [
      "Simple websites needing basic visitor count statistics",
      "Projects without direct access to data streams or hardware protocols",
      "Budgets under ₹2 Lakhs"
    ],
    faqs: [
      {
        question: "Can your system interface directly with existing industrial PLC/SCADA systems?",
        answer: "Yes. We support standard industrial telemetry protocols including OPC-UA, Modbus TCP over gateways, and MQTT brokers, allowing seamless bridge connections to legacy plant equipment."
      },
      {
        question: "How do you prevent the browser UI from lagging with thousands of live updates?",
        answer: "We utilize UI state throttling, requestAnimationFrame batching, virtualized DOM renderers, and HTML5 Canvas rendering for high-frequency data streams, ensuring smooth 60fps interaction."
      },
      {
        question: "What happens when an internet outage occurs at the remote site?",
        answer: "Edge buffers store timestamped metrics locally during network dropouts and automatically transmit backfilled historical packets upon reconnection without data loss."
      },
      {
        question: "Can site managers receive alerts on WhatsApp when a machine trips?",
        answer: "Yes. The alert engine evaluates rules instantly upon packet arrival and dispatches WhatsApp messages, SMS, or phone calls based on severity tiers."
      },
      {
        question: "Is data stored for long-term audit compliance and historical playback?",
        answer: "Yes. Ingestion workers store aggregated downsampled metrics in time-series databases for rapid historical queries, compliance reporting, and trend analysis."
      }
    ],
    relatedServices: [
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" },
      { slug: "reporting-automation", title: "Reporting Automation" },
      { slug: "build-scoping-sprint", title: "Build Scoping Sprint" }
    ]
  },

  "business-website": {
    slug: "business-website",
    title: "Business Website (SEO-Ready)",
    h1: "High-Performance Business Websites Engineered For Search & Inbound Leads",
    metaTitle: "Custom SEO Business Website Development | Aditya Patil",
    metaDescription:
      "Custom business websites built for commercial conversion. Next.js performance, structured JSON-LD schema, 95+ Google Lighthouse scores, and WhatsApp lead capture.",
    tier: "Tier 1 — Core Build",
    painHeadline: "Your current website looks outdated, loads slowly on mobile, and fails to generate a single qualified sales inquiry.",
    painBody: [
      "Most business websites are built on bloated WordPress themes loaded with 40 plugins, or generic templates designed by visual artists who don't understand search engine optimization or commercial conversion psychology.",
      "The result is a site that takes 6 seconds to open on a 4G mobile connection in India, contains zero structured data for Google, and gives prospective clients no clear or compelling reason to reach out.",
      "I engineer custom, lightning-fast business websites built on Next.js, TypeScript, and Tailwind CSS. You get 95+ Lighthouse performance scores, perfect mobile responsiveness, comprehensive JSON-LD schema for local and organic SEO, and frictionless WhatsApp lead capture."
    ],
    whatYouGet: [
      "Custom multi-page Next.js web architecture with instant page transitions",
      "Full Technical SEO: dynamic sitemaps, semantic HTML5, canonical tags, and OpenGraph social cards",
      "Comprehensive Schema.org JSON-LD (Organization, ProfessionalService, FAQPage, BreadcrumbList)",
      "Direct WhatsApp lead capture triggers and click-to-call mobile buttons",
      "Headless CMS integration (MDX or Sanity/Contentful) allowing your team to publish articles easily",
      "95+ Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO"
    ],
    whatThisIsNot: [
      "This is NOT a ₹5,000 WordPress template packed with security vulnerabilities.",
      "This is NOT an agency design package where you wait 4 months for static mockups.",
      "This is NOT a locked proprietary website builder where you cannot export your own code."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Content Structure & SEO Keyword Mapping",
        timeline: "Days 1–3",
        description: "We map your core service offerings, target commercial search queries, and define site architecture."
      },
      {
        step: 2,
        title: "Copywriting & UI Development",
        timeline: "Days 4–10",
        description: "Build responsive pages with high-converting buyer-focused copy, clear typography, and fast layouts."
      },
      {
        step: 3,
        title: "Technical SEO & Schema Integration",
        timeline: "Days 11–14",
        description: "Integrate JSON-LD schemas, Google Search Console, Google Analytics 4, and dynamic sitemaps."
      },
      {
        step: 4,
        title: "Lighthouse Optimization & Launch",
        timeline: "Days 15–18",
        description: "Performance tuning, mobile viewport QA, domain DNS cutover, and Google indexing submission."
      }
    ],
    proof: {
      system: "GoSolarIndex.in & MSMEVault.in",
      metrics: "17x indexed pages growth in 6 days · Page 1 rankings · 99/100 Lighthouse",
      description: "Architected directory and service platforms engineered entirely for organic search capture and commercial lead generation with programmatic SEO.",
      takeaway: "Your website will be built with the exact search engine architecture that powers high-ranking web directories."
    },
    priceFrom: "₹75K – ₹2L",
    timeline: "1–3 weeks",
    notFor: [
      "Anyone wanting a quick ₹10,000 template without custom code or SEO architecture",
      "E-commerce stores with 10,000+ SKU inventory catalogs (Shopify is better suited for that)",
      "Clients who want infinite artistic revisions without focus on lead generation"
    ],
    faqs: [
      {
        question: "How does a Next.js website compare to WordPress for Google rankings?",
        answer: "Next.js outputs statically pre-rendered HTML with zero plugin bloat. Google's crawler receives instant responses, core web vitals score in the top 5% globally, and structured schema is cleanly formatted, providing significant organic ranking advantages."
      },
      {
        question: "Will our non-technical staff be able to edit blog posts or page copy?",
        answer: "Yes. Content can be managed either through simple Markdown/MDX files or connected to a headless CMS interface where your team can draft and publish articles with zero code changes."
      },
      {
        question: "Do you configure Google Search Console and Google Analytics?",
        answer: "Yes. Google Search Console verification, dynamic XML sitemaps, and Google Analytics 4 event tracking for WhatsApp and phone clicks are fully configured prior to launch."
      },
      {
        question: "Where will the website be hosted?",
        answer: "On high-speed global edge networks like Vercel or Cloudflare Pages with SSL certificates included. Hosting costs are typically zero or under $20/month."
      },
      {
        question: "Can you help write the content and copy for the website?",
        answer: "Yes. All copy is written with clear, direct commercial language focused on your buyers' actual operational problems, avoiding vague marketing jargon."
      }
    ],
    relatedServices: [
      { slug: "reporting-automation", title: "Reporting Automation" },
      { slug: "web-app-mvp-development", title: "Web App / MVP Build" },
      { slug: "build-scoping-sprint", title: "Build Scoping Sprint" }
    ]
  },

  "codebase-rescue": {
    slug: "codebase-rescue",
    title: "Codebase Rescue",
    h1: "Audit, Stabilise & Fix Stalled Or Abandoned Software Projects",
    metaTitle: "Codebase Rescue & Legacy App Stabilisation | Aditya Patil",
    metaDescription:
      "Did your previous developer disappear mid-project? I audit, stabilise, document, and fix broken, undocumented, or half-finished codebases so your business can move forward.",
    tier: "Tier 2 — High Urgency, Low Competition",
    painHeadline: "Your previous developer disappeared, the software is half-finished, and nobody on your team knows how to touch the code without breaking it.",
    painBody: [
      "This is the most stressful situation in software delivery. You paid money, deadlines were missed, and the freelancer or agency stopped responding. You are left with an unmaintained repository, no documentation, failing deployments, and hidden bugs.",
      "Every new contractor you approach says the same thing: 'Throw it all away and pay me to rewrite it from scratch for 6 months.' You cannot afford to lose your investment or wait another half year to launch.",
      "I specialize in codebase triage and rescue. I step into undocumented repositories, trace the data flows, identify security risks and fatal bugs, fix the core breaking bottlenecks, write clear documentation, and bring the project to a stable production release."
    ],
    whatYouGet: [
      "Comprehensive 360-degree technical audit documenting architecture, flaws, and security risks",
      "Dependency upgrade, build repair, and automated Docker environment setup",
      "Fixes for critical blocking bugs, broken database migrations, and failing API routes",
      "Database schema cleanup, missing index additions, and query performance tuning",
      "Clear system architecture map and onboarding documentation for future developers",
      "Stabilized production deployment with automated CI/CD and error tracking"
    ],
    whatThisIsNot: [
      "This is NOT a knee-jerk recommendation to rewrite everything from scratch.",
      "This is NOT a band-aid hack that ignores the underlying architectural flaws.",
      "This is NOT an endless hourly billing engagement—it is a fixed-scope rescue package."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Triage & Emergency Access Audit",
        timeline: "Days 1–3",
        description: "Secure repository access, review infrastructure, identify immediate crash causes, and produce an emergency triage report."
      },
      {
        step: 2,
        title: "Environment Stabilisation & Build Repair",
        timeline: "Days 4–8",
        description: "Fix local and staging build pipelines, resolve dependency conflicts, and get the test suite or deployment working reliably."
      },
      {
        step: 3,
        title: "Core Bug Resolution & Database Repair",
        timeline: "Weeks 2–3",
        description: "Resolve blocking business logic bugs, repair broken database schemas, and patch security vulnerabilities."
      },
      {
        step: 4,
        title: "Documentation & Handover / Next Milestone",
        timeline: "Week 4",
        description: "Deliver a clean architecture handbook, operational runbooks, and ship the stable release to production."
      }
    ],
    proof: {
      system: "Production Incident Response & Legacy Refactoring",
      metrics: "Resolved critical CVE-2025-55182 · Multi-tenant database migrations · 99.9% uptime",
      description: "Extensive background in debugging and stabilizing high-load production systems, untangling broken database states, and fixing zero-day vulnerabilities under strict operational timelines.",
      takeaway: "No matter how messy your codebase is, a disciplined senior engineer can audit, untangle, and stabilize it."
    },
    priceFrom: "From ₹1,00,000",
    timeline: "2–4 weeks",
    notFor: [
      "Clients who do not have legal ownership or repository access to the code",
      "Projects written in obsolete 20-year-old proprietary languages without documentation",
      "Founders unwilling to pause feature requests while stability is restored"
    ],
    faqs: [
      {
        question: "How do you decide whether to fix the code or rewrite it?",
        answer: "During the first 3 days of audit, we evaluate the cost-to-repair versus cost-to-rebuild. If 70%+ of the business logic is sound and only the glue or deployment is broken, repairing is 3x faster and cheaper. We give you an honest recommendation backed by hard data."
      },
      {
        question: "What if the previous developer didn't leave any documentation or passwords?",
        answer: "We have extensive experience reverse-engineering undocumented Node.js, Python, and TypeScript systems, tracing API contracts, and reconstructing database schemas from existing database tables."
      },
      {
        question: "Can you take over the build and continue shipping our future features after the rescue?",
        answer: "Yes. Once the codebase is stabilized and documented, we can either continue as your engineering delivery partner or help you onboard and evaluate an in-house hire."
      },
      {
        question: "How do you ensure no new bugs are introduced during the fix?",
        answer: "We write automated end-to-end integration tests around critical business paths (payments, authentication, data persistence) before modifying legacy code."
      },
      {
        question: "Is our intellectual property and source code secure?",
        answer: "Yes. We sign strict Non-Disclosure Agreements (NDAs) prior to accessing any repository or credential."
      }
    ],
    relatedServices: [
      { slug: "build-scoping-sprint", title: "Build Scoping Sprint" },
      { slug: "web-app-mvp-development", title: "Web App / MVP Build" },
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" }
    ]
  },

  "build-scoping-sprint": {
    slug: "build-scoping-sprint",
    title: "Build Scoping Sprint",
    h1: "3-Day Technical Scoping & Architecture Diagnostic",
    metaTitle: "Build Scoping Sprint — 3-Day Technical Diagnostic | Aditya Patil",
    metaDescription:
      "A 3-day paid technical diagnostic for founders and ops leads. You get a complete written specification, database schema, fixed quote, and timeline. 100% credited if you build.",
    tier: "Tier 0 — The Door Opener",
    painHeadline: "You want to build software, but developers give you vague hourly estimates that double in price and triple in timeline.",
    painBody: [
      "Starting a custom software project without an exact architectural blueprint is the fastest way to blow your budget. Developers say 'it will take 2 months' without asking about your data structures, auth rules, or edge cases.",
      "Three months later, the project is half-finished, the budget is depleted, and the developer claims 'the requirements changed.'",
      "The Build Scoping Sprint eliminates this risk completely. Over 3 intensive days, we audit your workflow, define the exact database schemas, map every screen and edge case, choose the optimal infrastructure, and produce a fixed-price, fixed-timeline build proposal. If you proceed with the build, the ₹15,000 fee is credited in full."
    ],
    whatYouGet: [
      "Complete Written Functional Specification detailing every screen, role, and user journey",
      "Relational Database Entity Relationship Diagram (ERD) and Schema definition",
      "API endpoint list, third-party integration contracts, and security architecture",
      "Fixed-price build quote and milestone schedule with exact calendar delivery dates",
      "Infrastructure cost projection detailing monthly cloud server and SaaS expenses",
      "Full ownership of all scoping artifacts—yours to build with me or take to any other team"
    ],
    whatThisIsNot: [
      "This is NOT a generic sales pitch or 30-minute discovery call.",
      "This is NOT high-level fluff—it contains production-ready technical architecture.",
      "This is NOT an obligation to build with me; the specification document is 100% yours."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Deep-Dive Discovery & Process Extraction",
        timeline: "Day 1",
        description: "90-minute technical interview covering your workflows, edge cases, data sources, user roles, and constraints."
      },
      {
        step: 2,
        title: "Architecture Design & Schema Drafting",
        timeline: "Day 2",
        description: "I draft the database schemas, API specs, security requirements, and third-party integration maps."
      },
      {
        step: 3,
        title: "Specification Delivery & Walkthrough",
        timeline: "Day 3",
        description: "Delivery of the comprehensive technical blueprint, fixed build proposal, and live Q&A session."
      }
    ],
    proof: {
      system: "Rapid Architecture & Project Execution",
      metrics: "GoSolarIndex delivered in 3 days · Reflux architected for 40+ plants",
      description: "Deep experience breaking complex industrial and SaaS workflows into clean, deterministic data models and rapid execution plans.",
      takeaway: "Disciplined engineering planning eliminates 90% of development delays before a single line of code is written."
    },
    priceFrom: "₹15,000 (100% Credited Against Build)",
    timeline: "3 business days",
    notFor: [
      "Projects looking for casual advice without immediate intent to build",
      "Companies wanting developers to work on unpaid spec work",
      "Ideas that are still purely conceptual with zero defined business problem"
    ],
    faqs: [
      {
        question: "Why do you charge ₹15,000 for a scoping sprint?",
        answer: "Free estimates are always hurried and superficial, leading to scope creep and surprise costs later. A paid sprint dedicates 3 full days of senior engineering analysis to create an airtight technical blueprint that saves you weeks of wasted development and lakhs of rupees in mistakes."
      },
      {
        question: "How does the fee credit work if we proceed with the build?",
        answer: "If you approve the fixed-price build proposal resulting from the sprint, the entire ₹15,000 fee is deducted from the first milestone invoice of the project."
      },
      {
        question: "What if we decide not to build or hire another agency after the sprint?",
        answer: "You own all specification documents, database diagrams, and architecture blueprints. You can hand them to any internal team or external vendor, who will have an exact blueprint to build from."
      },
      {
        question: "How much time is required from our team during the 3 days?",
        answer: "We require one 90-minute kickoff interview on Day 1, async clarification over WhatsApp for specific edge cases on Day 2, and a 45-minute walkthrough call on Day 3."
      },
      {
        question: "How quickly can we start after booking the sprint?",
        answer: "Sprints can typically start within 48 to 72 hours of confirmation, subject to current engineering bandwidth."
      }
    ],
    relatedServices: [
      { slug: "web-app-mvp-development", title: "Web App / MVP Build" },
      { slug: "reporting-automation", title: "Reporting Automation" },
      { slug: "internal-dashboards", title: "Internal Dashboards & Admin Panels" }
    ]
  }
};
