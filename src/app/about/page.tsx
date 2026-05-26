import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lead Software Engineer based in Pune, India. Building renewable energy SaaS at Renewalytics and shipping indie products on the side.",
  openGraph: {
    title: "About | Aditya",
    description:
      "Lead Software Engineer based in Pune, India. Building renewable energy SaaS at Renewalytics and shipping indie products on the side.",
    url: "https://aditya.dev/about",
  },
};

export default function AboutPage() {
  return (
    <div className="content-width px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Aditya, a Lead Software Engineer based in Pune, India. I
              build SaaS products for renewable energy at Renewalytics and ship
              indie projects on the side.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">My Story</h2>

            <div className="mt-6 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                I got into software engineering the way a lot of people in India
                do — through college, but with a twist. While most of my
                classmates were prepping for campus placements at services
                companies, I was spending my nights building side projects and
                contributing to open source. I taught myself TypeScript and
                React, built a couple of small apps that no one used, and
                eventually landed my first real engineering role. It wasn&apos;t
                glamorous, but those early years of shipping code — even the bad
                kind — taught me how to think like a builder.
              </p>

              <p>
                After a couple of years working on web apps and APIs, I stumbled
                into climate tech almost by accident. I joined Renewalytics as a
                full-stack developer and got pulled into the world of solar
                irradiance data, weather models, and energy production
                forecasting. It was a steep learning curve — I had to wrap my
                head around meteorological APIs, time-series databases, and the
                nuances of India&apos;s power markets. But something clicked.
                Building software that helps renewable energy plants run more
                efficiently felt meaningful in a way that ad-tech or e-commerce
                never had. I grew into the tech lead role and now lead the
                engineering team, architecting systems that handle real-time
                forecasting for MW-scale solar plants.
              </p>

              <p>
                The indie hacking bug bit me in 2024. I realized I had the
                skills to build products end-to-end — from database design to
                frontend polish to SEO — and I wanted to prove I could ship
                something that generated real traffic and revenue on my own. I
                started with GoSolarIndex.in, a directory of solar installers
                across India, which grew from zero to thousands of indexed pages
                in days. Then came MSMEVault.in, an MSME government schemes
                directory. Now I&apos;m building Social Copilot, an AI-powered
                video SaaS. The indie path is slower and less predictable than a
                salary, but the freedom to choose what to build — and own the
                full stack from idea to deployment — is worth it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              What I&apos;m Doing Now
            </h2>

            <ul className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                <div>
                  <span className="font-medium text-foreground">
                    Lead Software Engineer at Renewalytics
                  </span>{" "}
                  — building production forecasting and energy trading software
                  for renewable energy plants.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />
                <div>
                  <span className="font-medium text-foreground">
                    Indie hacker
                  </span>{" "}
                  — shipping GoSolarIndex.in (solar installer directory),
                  MSMEVault.in (MSME schemes directory), and working on Social
                  Copilot (AI video SaaS).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                <div>
                  <span className="font-medium text-foreground">Writing</span>{" "}
                  about indie hacking, technical SEO, and building with AI.
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "DigitalOcean",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              I primarily work across the full TypeScript stack — Next.js for
              frontends and APIs, Node.js for backend services, and PostgreSQL
              or MongoDB depending on the use case. I deploy everything on
              DigitalOcean with Docker, and I&apos;m comfortable provisioning
              servers, setting up CI/CD, and managing infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Want to work together?
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-accent-blue hover:underline"
            >
              Get in touch &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
