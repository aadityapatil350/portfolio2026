import type { Metadata } from "next";
import { getGitHubRepos } from "@/lib/github";
import { indieProjects, caseStudies } from "@/data/site-config";
import { ProjectArchive } from "@/components/project-archive";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Two tracks: production systems I lead at the day job, and indie products I ship on the side. Everything I've built, killed, or kept alive.",
  openGraph: {
    title: "Projects | Aditya",
    description:
      "Production systems from the day job + indie products from the night shift.",
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
              Two tracks. Production systems I lead at Renewalytics, and indie
              products I ship on the side, some live, some killed, all real.
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
