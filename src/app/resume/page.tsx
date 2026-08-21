import type { Metadata } from "next";
import Link from "next/link";
import {
  Github,
  Mail,
  Phone,
  Download,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Resume, Aditya Patil",
  description:
    "Resume of Aditya Patil, Lead Software Engineer specializing in full-stack development, realtime systems, and AI workflow automation for renewable energy.",
  openGraph: {
    title: "Resume, Aditya Patil",
    description:
      "Lead Software Engineer specializing in full-stack development, realtime systems, and AI workflow automation.",
    url: "https://adityapatil.work/resume",
  },
};

/* ─── Skill Group ─── */
function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded border border-border bg-muted/60 px-2 py-0.5 text-sm text-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Experience Entry ─── */
function ExperienceEntry({
  company,
  role,
  period,
  bullets,
  isCurrent = false,
}: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  isCurrent?: boolean;
}) {
  return (
    <div className="relative pl-6 border-l-2 border-border pb-8 last:pb-0">
      <span
        className={`absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 ${
          isCurrent
            ? "border-foreground bg-foreground"
            : "border-muted-foreground bg-background"
        }`}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold text-foreground">{role}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground shrink-0">
          {period}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-muted-foreground flex gap-2"
          >
            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <div className="max-w-3xl py-16 sm:py-24 print:py-8">
        {/* ── Header ── */}
        <FadeIn className="print:animate-none">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Resume
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Aditya Patil
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Lead Software Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Pune, India
            </span>
            <a
              href="tel:+917875655996"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 78756 55996
            </a>
            <a
              href="mailto:aadityapatil350@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              aadityapatil350@gmail.com
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.resumeUrl}
              download="Aditya-Patil-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 print:hidden"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted print:hidden"
            >
              View case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* ── Summary ── */}
        <section className="mt-12 print:mt-8">
          <FadeIn delay={0.1} className="print:animate-none">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Summary
            </span>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Lead Software Engineer with 4+ years of experience building and
              scaling production systems for the renewable energy sector.
              Currently leading engineering initiatives at Renewalytics, where I
              architect, develop, deploy, and maintain mission-critical platforms
              serving 3,400+ MW of renewable assets across India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I operate across the full technology stack&mdash;from product
              design and software architecture to cloud infrastructure, DevOps,
              and team leadership. My work includes forecasting and scheduling
              platforms, operational automation systems, DSM management, asset
              monitoring, and AI workflows that help energy companies make
              faster and more accurate decisions. Ships products from zero to
              production, tackles hard operational problems, and uses AI to
              replace manual work where it makes sense.
            </p>
          </FadeIn>
        </section>

        {/* ── Experience ── */}
        <section className="mt-12 print:mt-8">
          <FadeIn delay={0.1} className="print:animate-none">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Experience
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              Work History
            </h2>
          </FadeIn>

          <div className="mt-8 print:mt-6">
            <StaggerContainer
              className="space-y-0 print:space-y-0"
              staggerDelay={0.1}
            >
              <StaggerItem className="print:animate-none">
                <ExperienceEntry
                  company="Renewalytics"
                  role="Software Engineer → Lead Software Engineer"
                  period="Jun 2024 – Present"
                  isCurrent
                  bullets={[
                    "Promoted from Software Engineer to Lead Software Engineer within the first year based on shipped product impact",
                    "Own full-stack development and backend architecture for a renewable energy SaaS platform serving 3,400+ MW across India",
                    "Shipped Reflux within 3 months of joining, partnering with the ops team. Operational platform for solar and hydro forecasting revisions (CTU/STU to SLDC), scheduling, and reporting automation; now serves 40+ plants across 13+ clients",
                    "Shipped Excel Flow later the same year with one intern. Automated DGR reporting pipeline and ops dashboards for 33+ solar/wind/BESS plants; scrapes 30+ daily Excel sheets, generates next-day outputs, and surfaces live ops data",
                    "Delivered a deviation & settlement management portal for a renewable energy producer once Excel Flow workload eased; developed and deployed end-to-end as primary engineer, working directly with the client's digital transformation lead. DSM penalties and asset management dashboard covering 14+ plants",
                    "Delivered an internal Invoice Management System for tracking and reconciling client invoices generated through Reflux",
                    "Containerized services with Docker, manage Linux infrastructure, and set up CI/CD with GitHub Actions",
                    "Integrated SCADA systems for realtime data exchange across multiple renewable assets",
                    "Currently building RealSync CMS, an enterprise realtime monitoring system with WebSockets, MQTT, OPC-UA ingestion, alarm systems, and AI-ready telemetry pipelines (in development)",
                  ]}
                />
              </StaggerItem>

              <StaggerItem className="print:animate-none">
                <ExperienceEntry
                  company="Climate Connect Digital"
                  role="Software Engineer"
                  period="Jul 2022 – Jan 2024"
                  bullets={[
                    "Built ARS (Automatic Reporting System) for wind and solar plants, full-stack development in PHP",
                    "Owned end-to-end feature delivery from database design to UI polish",
                    "Maintained API integrations with third-party services and internal systems",
                    "Led frontend architecture decisions and component library work",
                  ]}
                />
              </StaggerItem>

              <StaggerItem className="print:animate-none">
                <ExperienceEntry
                  company="Climate Connect Digital"
                  role="Full Stack Engineer"
                  period="Nov 2021 – Jul 2022"
                  bullets={[
                    "Developed PHP-based features across the renewable energy product surface",
                    "Designed and implemented database schemas for new application modules",
                    "Shipped multiple production features independently",
                  ]}
                />
              </StaggerItem>

              <StaggerItem className="print:animate-none">
                <ExperienceEntry
                  company="Climate Connect Digital"
                  role="Engineer Intern"
                  period="Jun 2021 – Nov 2021"
                  bullets={[
                    "Onboarded into the engineering team with zero prior professional software experience",
                    "Learned PHP and modern web development practices on the job",
                    "Contributed to production codebases within the first month",
                  ]}
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ── Skills Matrix ── */}
        <section className="mt-12 print:mt-8">
          <FadeIn delay={0.1} className="print:animate-none">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Skills
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              Technical Skills
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="print:animate-none">
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <SkillGroup
                title="Languages"
                skills={[
                  "TypeScript",
                  "JavaScript",
                  "Python",
                  "PHP",
                ]}
              />
              <SkillGroup
                title="Frontend"
                skills={[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "shadcn/ui",
                ]}
              />
              <SkillGroup
                title="Backend"
                skills={["Node.js", "Express", "Prisma ORM"]}
              />
              <SkillGroup
                title="Databases"
                skills={[
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                ]}
              />
              <SkillGroup
                title="Infrastructure"
                skills={[
                  "Docker",
                  "Linux",
                  "Nginx",
                  "GitHub Actions",
                  "DigitalOcean",
                  "Azure",
                ]}
              />
              <SkillGroup
                title="Protocols"
                skills={["MQTT", "OPC-UA", "WebSockets", "REST APIs"]}
              />
              <SkillGroup
                title="AI / ML"
                skills={[
                  "AI workflow design",
                  "Claude Code",
                  "Prompt engineering",
                ]}
              />
            </div>
          </FadeIn>
        </section>

        {/* ── Education ── */}
        <section className="mt-12 print:mt-8">
          <FadeIn delay={0.1} className="print:animate-none">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              Education
            </h2>
          </FadeIn>

          <div className="mt-6 space-y-4">
            <FadeIn delay={0.15} className="print:animate-none">
              <div className="relative pl-6 border-l-2 border-border">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <h3 className="font-semibold text-foreground">
                  PGDM, IT Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  MIT School of Management, Final Semester
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="print:animate-none">
              <div className="relative pl-6 border-l-2 border-border">
                <span className="absolute -left-[7px] top-1.5 block h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <h3 className="font-semibold text-foreground">
                  Diploma in Mechanical Engineering
                </h3>
                <p className="text-sm text-muted-foreground">2020</p>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
