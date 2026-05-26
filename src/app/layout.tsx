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
  metadataBase: new URL("https://aditya.dev"),
  title: {
    default: "Aditya — Lead Software Engineer | Indie Hacker",
    template: "%s | Aditya",
  },
  description:
    "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India. Based in Pune.",
  keywords: [
    "Aditya",
    "Lead Software Engineer",
    "Renewalytics",
    "renewable energy SaaS",
    "indie hacker",
    "Next.js developer",
    "TypeScript",
    "Pune",
    "climate tech",
  ],
  authors: [{ name: "Aditya", url: "https://aditya.dev" }],
  creator: "Aditya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditya.dev",
    siteName: "Aditya",
    title: "Aditya — Lead Software Engineer | Indie Hacker",
    description:
      "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya — Lead Software Engineer | Indie Hacker",
    description:
      "Lead Software Engineer building renewable energy SaaS at Renewalytics. Indie hacker shipping SEO directories and AI tools for India.",
    creator: "@aditya",
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
  name: "Aditya",
  url: "https://aditya.dev",
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
  sameAs: ["https://github.com/aditya", "https://x.com/aditya"],
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
        <link rel="alternate" type="application/rss+xml" title="Aditya's Blog" href="/rss.xml" />
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
