import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://adityapatil.work"),
  title: {
    default: "Aditya Patil — Independent Systems Engineer & Delivery Partner",
    template: "%s | Aditya Patil",
  },
  description:
    "Aditya Patil builds operational software that survives real use — reporting that runs itself, dashboards ops teams actually open, realtime monitoring, and AI workflows. Pune, India.",
  keywords: [
    "Aditya Patil",
    "Independent Software Engineer",
    "Systems Engineer",
    "Renewalytics",
    "operational platforms",
    "automation",
    "realtime monitoring",
    "AI workflows",
    "reporting automation",
    "SCADA",
    "Next.js",
    "TypeScript",
    "Pune",
    "delivery partner",
  ],
  authors: [{ name: "Aditya Patil", url: "https://adityapatil.work" }],
  creator: "Aditya Patil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityapatil.work",
    siteName: "Aditya Patil",
    title: "Aditya Patil — Operational Software & Engineering Delivery Partner",
    description:
      "Operational software that survives real use — reporting pipelines, ops dashboards, realtime systems, and AI workflows.",
    images: [
      {
        url: "/og?title=Aditya%20Patil&description=Independent%20Systems%20Engineer",
        width: 1200,
        height: 630,
        alt: "Aditya Patil, Independent Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Patil — Independent Systems Engineer",
    description:
      "Operational software that survives real use — reporting pipelines, ops dashboards, realtime systems, and AI workflows.",
    creator: "@aadityapatil350",
    images: ["/og?title=Aditya%20Patil&description=Independent%20Systems%20Engineer"],
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
  url: "https://adityapatil.work",
  jobTitle: "Lead Software Engineer & Delivery Partner",
  telephone: "+91-9373238164",
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
    "https://x.com/aadityapatil350",
  ],
  knowsAbout: [
    "operational systems",
    "reporting automation",
    "internal dashboards",
    "realtime monitoring",
    "SCADA integrations",
    "AI workflow automation",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1 pb-16 md:pb-0">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <StickyMobileCTA />
          </div>
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
