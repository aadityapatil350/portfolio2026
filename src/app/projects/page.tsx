import type { Metadata } from "next";
import { getGitHubRepos } from "@/lib/github";
import { indieProjects, caseStudies } from "@/data/site-config";
import { ProjectArchive } from "@/components/project-archive";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Everything Aditya has shipped — from production systems and indie products to open source. Browse case studies, SaaS tools, SEO directories, and GitHub projects.",
  openGraph: {
    title: "Projects | Aditya",
    description:
      "Everything Aditya has shipped — from production systems to open source.",
  },
};

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <div className="py-16 sm:py-24">
      <div className="content-width px-4 sm:px-6">
        {/* Page Header */}
        <FadeIn>
          <div className="max-w-xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Projects
            </h1>
            <p className="mt-3 text-muted-foreground text-lg">
              Everything I&apos;ve shipped — from production systems and indie products to open source.
            </p>
          </div>
        </FadeIn>

        {/* Project Archive */}
        <FadeIn delay={0.1}>
          <ProjectArchive
            repos={repos}
            indieProjects={indieProjects}
            caseStudies={caseStudies}
          />
        </FadeIn>
      </div>
    </div>
  );
}
