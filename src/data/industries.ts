export interface IndustryItem {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  painHeadline: string;
  painPoints: { title: string; desc: string }[];
  honestAssessment: string;
  recommendedServices: { slug: string; title: string; why: string }[];
  faqs: { question: string; answer: string }[];
}

export const industriesData: Record<string, IndustryItem> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Operations",
    h1: "Operational Software & Telemetry For Modern Manufacturing Plants",
    metaTitle: "Software & Telemetry for Manufacturing Plants | Aditya Patil",
    metaDescription:
      "Eliminate manual shift handovers, connect siloed SCADA machine data, and automate daily production reconciliation with custom operational software.",
    painHeadline: "Machine data is trapped inside SCADA screens, shift reports live on paper clipboards, and production reconciliation takes 4 hours every morning.",
    painPoints: [
      {
        title: "Siloed SCADA & Machine Telemetry",
        desc: "Machines generate millions of data points every shift, but the metrics remain trapped on isolated local HMI/SCADA consoles. Management only discovers line stoppages or yield drops at the end of the day."
      },
      {
        title: "Manual Shift Handover Logs",
        desc: "Supervisors write production totals, downtime reasons, and maintenance logs into physical notebooks or fragmented WhatsApp groups. Notes are lost, and trends across shifts are impossible to track."
      },
      {
        title: "Daily Production Reconciliation Delays",
        desc: "Plant managers and accountants spend their mornings cross-checking raw material consumption against finished goods output across disconnected Excel sheets."
      }
    ],
    honestAssessment:
      "My direct production experience is in utility-scale renewable energy infrastructure (3,400+ MW across 40+ plants), building realtime SCADA telemetry ingestion, fault alerting, and automated daily reporting. While I haven't operated automotive or FMCG assembly lines, industrial operations share the exact same technical problem shape: high-throughput sensor telemetry, noisy hardware protocols (OPC-UA/MQTT), and zero tolerance for data loss. I apply proven industrial-grade software engineering directly to your manufacturing floor.",
    recommendedServices: [
      {
        slug: "realtime-monitoring",
        title: "Realtime Monitoring & Telemetry Systems",
        why: "Ingest live machine metrics via OPC-UA/MQTT and trigger automated WhatsApp alerts when lines trip."
      },
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        why: "Automate daily shift logs, production yield reports, and downtime summaries before morning standup."
      },
      {
        slug: "internal-dashboards",
        title: "Internal Dashboards & Admin Panels",
        why: "Give plant managers and maintenance teams a clean mobile interface to log downtime codes and assign work orders."
      }
    ],
    faqs: [
      {
        question: "Can your software connect to older PLC or SCADA systems?",
        answer: "Yes. By deploying lightweight edge gateway services supporting OPC-UA, Modbus TCP, or serial bridges, we can ingest metrics from legacy PLCs (Siemens, Allen-Bradley, Schneider, Mitsubishi) without modifying machine ladder logic."
      },
      {
        question: "Does the system work without continuous internet access?",
        answer: "Yes. We design local edge buffers that store operational metrics on-premise during network drops and automatically backfill the central database once connectivity resumes."
      },
      {
        question: "Can supervisors log downtime reasons from mobile phones on the plant floor?",
        answer: "Yes. Mobile-optimized responsive interfaces allow line operators and supervisors to tag downtime categories, upload photos of machine issues, and sign off on handovers in seconds."
      }
    ]
  },

  logistics: {
    slug: "logistics",
    title: "Logistics & Distribution",
    h1: "Software Systems That Replace WhatsApp Groups & Spreadsheets in Logistics",
    metaTitle: "Custom Logistics & Fleet Operations Software | Aditya Patil",
    metaDescription:
      "Streamline dispatch tracking, Proof of Delivery (POD) processing, vendor invoice audits, and fleet exception alerts without manual phone calls.",
    painHeadline: "Your dispatch team manages 100+ truck movements across 12 WhatsApp groups, losing track of Proof of Delivery receipts.",
    painPoints: [
      {
        title: "WhatsApp Group Chaos",
        desc: "Driver updates, vehicle locations, and delay excuses are scattered across unorganized chat groups. When a customer calls asking where their cargo is, dispatchers waste 20 minutes calling drivers."
      },
      {
        title: "Delayed Proof of Delivery (POD) Collection",
        desc: "Drivers take photos of physical delivery challans with poor lighting and WhatsApp them late. Finance cannot invoice clients until physical or legible digital PODs are verified."
      },
      {
        title: "Vendor Rate & Detention Discrepancies",
        desc: "Auditing transporter invoices against agreed lane rates and detention hours requires hours of manual cross-referencing between GPS logs and paper bills."
      }
    ],
    honestAssessment:
      "My core background is in large-scale infrastructure operations and automated data pipelines. I haven't operated a freight brokerage or line-haul fleet directly, but the technical challenges in modern logistics—parsing messy incoming WhatsApp messages, extracting data from scanned delivery receipts, tracking status transitions, and generating automated client alerts—match the exact event-driven pipelines and document extraction architectures I build every day.",
    recommendedServices: [
      {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        why: "Automatically extract and validate data from driver-submitted POD photos and delivery challans."
      },
      {
        slug: "internal-dashboards",
        title: "Internal Dashboards & Admin Panels",
        why: "Give dispatch and client service teams a single operational dashboard to track shipment milestones."
      },
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        why: "Dispatch automated daily transit status and exception summaries to corporate clients every morning."
      }
    ],
    faqs: [
      {
        question: "Can drivers submit delivery receipts without downloading a heavy app?",
        answer: "Yes. Drivers can simply send a photo of the signed delivery receipt to a dedicated WhatsApp Business number. Our AI pipeline receives the image, validates legibility, extracts the challan number, and attaches it to the trip record instantly."
      },
      {
        question: "Can this integrate with our existing GPS tracking providers?",
        answer: "Yes. We ingest webhook and API feeds from major GPS and FASTag providers to automatically record milestone geofence entries, exits, and transit delays."
      },
      {
        question: "How do corporate clients receive automated shipment notifications?",
        answer: "Clients receive automated email and WhatsApp status updates at key milestones (dispatched, out for delivery, delivered with attached POD receipt) without requiring dispatcher intervention."
      }
    ]
  },

  "professional-services": {
    slug: "professional-services",
    title: "Professional Services & CA Firms",
    h1: "Automated Document Intake, Client Reporting & Compliance Portals",
    metaTitle: "Software & Automation for CA Firms & Legal Practices | Aditya Patil",
    metaDescription:
      "Eliminate back-and-forth email chasing for tax documents, invoices, and compliance paperwork. Custom client portals and automated intake pipelines.",
    painHeadline: "Your team spends half their week chasing clients over email for GST invoices, bank statements, and missing signatures.",
    painBody: "Professional service firms (chartered accountants, legal practices, consulting agencies, clinics) are buried in repetitive document collection. Staff spend valuable billable hours downloading email attachments, renaming PDF files, and cross-checking checklists.",
    painPoints: [
      {
        title: "Scattered Document Intake",
        desc: "Clients send files over WhatsApp, Google Drive links, and fragmented email threads. Documents sit in personal inboxes instead of a centralized, secure client file."
      },
      {
        title: "Missed Compliance Deadlines",
        desc: "Without automated milestone tracking, critical statutory deadlines (GST returns, TDS filings, trademark renewals) require constant manual review of master spreadsheets."
      },
      {
        title: "Repetitive Status Inquiries",
        desc: "Partners and senior staff are interrupted by clients repeatedly calling to ask 'What is the status of my filing?'"
      }
    ],
    honestAssessment:
      "I am a software engineer, not a chartered accountant or lawyer. What I build is the operational infrastructure that eliminates administrative drag: secure client upload portals, automated document validation, recurring reminder sequences, and client-facing progress dashboards.",
    recommendedServices: [
      {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        why: "Parse financial statements, bank statements, and invoices into structured data automatically."
      },
      {
        slug: "internal-dashboards",
        title: "Internal Dashboards & Admin Panels",
        why: "Track all client compliance filings, staff allocations, and statutory deadlines in one panel."
      },
      {
        slug: "business-website",
        title: "Business Website (SEO-Ready)",
        why: "Attract high-value corporate clients with an authoritative, search-optimized practice website."
      }
    ],
    faqs: [
      {
        question: "How secure is client financial and legal data?",
        answer: "All documents are encrypted at rest and in transit using industry-standard AES-256 and TLS encryption. Access permissions are strictly partitioned by client and staff role."
      },
      {
        question: "Can the system send automated WhatsApp reminders for missing documents?",
        answer: "Yes. Automated reminder triggers message clients 7 days, 3 days, and 24 hours before statutory filing deadlines with a direct 1-click upload link."
      },
      {
        question: "Can our existing staff use this without technical training?",
        answer: "Yes. The interface is designed with simple, high-clarity layouts that require zero technical expertise to navigate."
      }
    ]
  },

  energy: {
    slug: "energy",
    title: "Renewable Energy & Infrastructure",
    h1: "Operational Software, DGR Automation & Telemetry For Renewable Portals",
    metaTitle: "Renewable Energy Software, DGR & DSM Portals | Aditya Patil",
    metaDescription:
      "Proven production systems for 3,400+ MW capacity. Daily Generation Report (DGR) pipelines, Deviation Settlement Mechanism (DSM) portals, and live telemetry.",
    painHeadline: "Managing 30+ remote solar and wind plants across different OEM SCADA vendors results in fragmented reporting and regulatory penalties.",
    painPoints: [
      {
        title: "Multi-OEM SCADA Disconnection",
        desc: "Every plant uses a different inverter or SCADA vendor format. Central operations teams struggle to aggregate standardized portfolio-level performance metrics."
      },
      {
        title: "Manual Daily Generation Reports (DGR)",
        desc: "Site engineers manually fill spreadsheets at 6:00 AM every day. Central teams spend 3 hours consolidating files, delaying executive review."
      },
      {
        title: "DSM / CSM Penalty Risks",
        desc: "Forecasting revisions and deviation penalties under state regulations (DSM/CSM) require realtime tracking against scheduling commitments."
      }
    ],
    honestAssessment:
      "This is my primary domain of expertise. As lead engineer on production platforms for the renewable energy sector, I have shipped systems managing 3,400+ MW of capacity across 40+ plants in India — DGR automation pipelines, forecasting revisions, and state regulatory portal submissions. Specific client names available under NDA.",
    recommendedServices: [
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        why: "Automate Daily Generation Reports (DGR) across 30+ plants with zero manual copy-pasting."
      },
      {
        slug: "realtime-monitoring",
        title: "Realtime Monitoring & Telemetry Systems",
        why: "Realtime telemetry dashboards with sub-second inverter metrics and alarm systems."
      },
      {
        slug: "internal-dashboards",
        title: "Internal Dashboards & Admin Panels",
        why: "Custom DSM/CSM portals tracking deviations, commercial settlements, and compliance."
      }
    ],
    faqs: [
      {
        question: "Which plant telemetry systems have you integrated with?",
        answer: "We have built integrations for leading industrial SCADA platforms, string and central inverters (SMA, Sungrow, Huawei, ABB, TMEIC), weather monitoring stations (pyranometers, anemometers), and state SLDC scheduling portals."
      },
      {
        question: "Can your pipeline parse complex multi-tab Excel sheets from site engineers?",
        answer: "Yes. Excel Flow was purpose-built to parse 30+ daily uploaded Excel files with dynamic sheets, inconsistent naming, and formula cells across 33+ renewable plants."
      },
      {
        question: "How do you handle SLDC portal compliance submissions?",
        answer: "We build automated cron workers and secure API connectors that format and submit scheduling revisions and generation logs directly to regulatory endpoints."
      }
    ]
  },

  startups: {
    slug: "startups",
    title: "Early-Stage Startups & Founders",
    h1: "Fast, Senior Engineering Delivery For Seed & Series-A Startups",
    metaTitle: "MVP & Full-Stack Engineering for Startups | Aditya Patil",
    metaDescription:
      "Turn your validated product idea into a fast, scalable web application in 3–8 weeks. Senior architecture choices from day one without agency overhead.",
    painHeadline: "You need a production-ready MVP to validate customers or raise capital, but agencies are too slow and junior contractors write unmaintainable code.",
    painPoints: [
      {
        title: "Unpredictable Development Timelines",
        desc: "Agencies quote 4 months, miss deadlines repeatedly, and hand over fragile prototypes that cannot handle real production traffic or security audits."
      },
      {
        title: "Technical Debt on Day One",
        desc: "Cheap outsourced builds leave you with unindexed databases, messy spaghetti code, and no documentation, forcing an expensive rewrite right when you get traction."
      },
      {
        title: "Lack of Business & Architecture Ownership",
        desc: "Junior developers only follow rigid ticket prompts without thinking about user conversion, database scalability, or infrastructure costs."
      }
    ],
    honestAssessment:
      "As an independent engineer who ships both enterprise platforms and indie SaaS products (GoSolarIndex, MSMEVault, Social Copilot), I understand startup urgency. I don't build over-engineered microservices when a clean Next.js + PostgreSQL monolith will get you to market 4x faster at $20/month hosting costs.",
    recommendedServices: [
      {
        slug: "build-scoping-sprint",
        title: "Build Scoping Sprint",
        why: "Get an airtight 3-day technical blueprint and fixed-price build proposal before writing code."
      },
      {
        slug: "web-app-mvp-development",
        title: "Web App / MVP Build",
        why: "Launch a full-stack, payment-ready web application in 3–8 weeks."
      },
      {
        slug: "ai-integration",
        title: "AI Integration",
        why: "Add intelligent search, LLM workflows, and copilots to give your product an unfair advantage."
      }
    ],
    faqs: [
      {
        question: "How fast can we go from scoping to live production launch?",
        answer: "Typical MVP builds are delivered and deployed to production within 3 to 8 weeks, depending on complexity and third-party API requirements."
      },
      {
        question: "Can we hire in-house engineers after the MVP launch to take over?",
        answer: "Yes. The codebase uses standard TypeScript, Next.js App Router, and Prisma. Every project ships with a README, an architecture note, and inline comments where behavior is non-obvious. A new engineer can read it end-to-end in a day."
      },
      {
        question: "What is the billing model?",
        answer: "Fixed-price outcome milestones. You never pay unexpected hourly overages."
      }
    ]
  }
};
