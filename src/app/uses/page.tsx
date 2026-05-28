import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, software, and hardware I use to build and ship products.",
  openGraph: {
    title: "Uses | Aditya",
    description:
      "The tools, software, and hardware I use to build and ship products.",
    url: "https://aditya.dev/uses",
  },
};

interface UseItem {
  name: string;
  description: string;
}

interface UseCategory {
  heading: string;
  items: UseItem[];
}

const categories: UseCategory[] = [
  {
    heading: "Development",
    items: [
      {
        name: "Editor",
        description: "Cursor + Claude Code (AI-assisted development)",
      },
      {
        name: "Languages",
        description: "TypeScript, JavaScript, Python, SQL",
      },
      { name: "Framework", description: "Next.js 16 (App Router), React 19" },
      { name: "Backend", description: "Node.js, Express, Bun" },
      { name: "Database", description: "PostgreSQL, MongoDB, SQLite, Redis" },
      { name: "ORM", description: "Prisma" },
      { name: "Auth", description: "NextAuth.js" },
      { name: "Validation", description: "Zod" },
      { name: "State Management", description: "Zustand, React Query (TanStack Query)" },
      { name: "Forms", description: "React Hook Form + Zod resolvers" },
      { name: "Search", description: "Fuse.js (client-side fuzzy search)" },
      { name: "Content", description: "MDX, next-mdx-remote, rehype-pretty-code, Shiki" },
    ],
  },
  {
    heading: "Realtime & Data",
    items: [
      { name: "WebSockets", description: "Native WS, Socket.io" },
      { name: "Protocols", description: "MQTT, OPC-UA (SCADA integrations)" },
      { name: "Queues", description: "BullMQ, node-cron (job scheduling)" },
      { name: "Excel Parsing", description: "SheetJS (xlsx), vendor-specific report automation" },
    ],
  },
  {
    heading: "Infrastructure",
    items: [
      {
        name: "Hosting",
        description: "Vercel (frontend/indie), DigitalOcean (production services)",
      },
      { name: "Containers", description: "Docker + Docker Compose" },
      { name: "Reverse Proxy", description: "Caddy (automatic HTTPS)" },
      { name: "CI/CD", description: "GitHub Actions" },
      { name: "DNS & CDN", description: "Cloudflare" },
      { name: "Monitoring", description: "UptimeRobot, custom health endpoints" },
    ],
  },
  {
    heading: "Design & UI",
    items: [
      { name: "Styling", description: "Tailwind CSS v4" },
      { name: "Components", description: "shadcn/ui, Radix UI primitives" },
      { name: "Animations", description: "Framer Motion" },
      { name: "Charts", description: "Recharts" },
      { name: "Tables", description: "TanStack Table" },
      { name: "Drag & Drop", description: "dnd-kit" },
      { name: "Icons", description: "Lucide React" },
      { name: "Themes", description: "next-themes (light/dark mode)" },
      {
        name: "Fonts",
        description: "Inter (body), JetBrains Mono (code)",
      },
    ],
  },
  {
    heading: "SEO & Marketing",
    items: [
      { name: "Technical SEO", description: "Next.js Metadata API, JSON-LD, dynamic sitemaps, robots.txt" },
      { name: "Content", description: "Programmatic pages, structured data, RSS feeds" },
      { name: "Analytics", description: "Google Search Console" },
      { name: "Image Optimization", description: "Sharp, next/image, OG image generation" },
    ],
  },
  {
    heading: "AI Tools",
    items: [
      { name: "Coding", description: "Claude Code, Cursor" },
      {
        name: "Writing",
        description: "Claude (drafts, brainstorming, documentation)",
      },
      { name: "Image Generation", description: "Imaginate.pro (own project)" },
    ],
  },
  {
    heading: "Hardware",
    items: [
      {
        name: "Machine",
        description: 'MacBook Pro 14" M3 Pro, 32GB RAM',
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Uses
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A running list of the tools, software, and hardware I use to
              build and ship products.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-2xl space-y-12">
          {categories.map((category, categoryIndex) => (
            <FadeIn key={category.heading} delay={categoryIndex * 0.05}>
              <div className="border-b border-border pb-12 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-semibold tracking-tight">
                  {category.heading}
                </h2>
                <dl className="mt-4 divide-y divide-border">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="shrink-0 text-sm font-medium text-foreground">
                        {item.name}
                      </dt>
                      <dd className="text-sm text-muted-foreground text-right">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
