import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityapatil.dev"),
  title: {
    default: "Aditya Patil, Engineer-for-hire by day. Indie hacker by night.",
    template: "%s | Aditya Patil",
  },
  description:
    "Lead engineer at Renewalytics by day, indie hacker by night. Available for full-stack MVPs and AI workflow automation. Pune, India.",
  keywords: [
    "Aditya Patil",
    "Lead Software Engineer",
    "Systems Engineer",
    "Renewalytics",
    "operational platforms",
    "automation",
    "realtime monitoring",
    "AI workflows",
    "renewable energy",
    "SCADA",
    "Next.js developer",
    "TypeScript",
    "Pune",
    "climate tech",
    "backend engineer",
  ],
  authors: [{ name: "Aditya Patil", url: "https://adityapatil.dev" }],
  creator: "Aditya Patil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityapatil.dev",
    siteName: "Aditya Patil",
    title: "Aditya Patil, Engineer-for-hire by day. Indie hacker by night.",
    description:
      "Lead engineer at Renewalytics by day, indie hacker by night. Freelance MVPs and AI workflow automation on the side.",
    images: [
      {
        url: "/og?title=Aditya%20Patil&description=Systems%20Engineer%20%7C%20Building%20operational%20platforms",
        width: 1200,
        height: 630,
        alt: "Aditya Patil, Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Patil, Lead Software Engineer | Systems Builder",
    description:
      "Building operational systems, automation platforms & AI-powered workflows.",
    creator: "@adityapatil350",
    images: ["/og?title=Aditya%20Patil&description=Systems%20Engineer"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Patil",
  url: "https://adityapatil.dev",
  jobTitle: "Lead Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Renewalytics",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/aadityapatil350",
    "https://x.com/adityapatil350",
  ],
  knowsAbout: [
    "operational systems",
    "automation platforms",
    "realtime monitoring",
    "SCADA integrations",
    "renewable energy",
    "AI workflows",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Aditya Patil's Blog"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
