"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Fuse from "fuse.js";
import { Search, ExternalLink, Star, Github, ArrowUpRight, Globe, Code2 } from "lucide-react";
import { relativeTime, languageColors, type GitHubRepo } from "@/lib/github";
import type { IndieProject, CaseStudy } from "@/data/site-config";
import { StatusBadge } from "@/components/status-badge";
import { FilterChip } from "@/components/filter-chip";
import { FadeIn } from "@/components/fade-in";

export type ProcessedRepo = GitHubRepo;

interface ProjectArchiveProps {
  repos: ProcessedRepo[];
  indieProjects: IndieProject[];
  caseStudies: CaseStudy[];
}

const FILTER_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "SaaS", value: "saas" },
  { label: "Directory", value: "directory" },
  { label: "Tooling", value: "tooling" },
  { label: "Open Source", value: "opensource" },
  { label: "Archived", value: "archived" },
] as const;

type FilterValue = (typeof FILTER_CATEGORIES)[number]["value"];

export function ProjectArchive({ repos, indieProjects, caseStudies = [] }: ProjectArchiveProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fuse = useMemo(
    () =>
      new Fuse(repos, {
        keys: [
          { name: "name", weight: 2 },
          { name: "description", weight: 1 },
        ],
        threshold: 0.4,
        includeScore: true,
      }),
    [repos]
  );

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    if (activeFilter === "archived" || activeFilter === "opensource") return [];
    if (activeFilter === "featured" || activeFilter === "all") return caseStudies;
    return [];
  }, [caseStudies, activeFilter]);

  // Filter indie projects
  const filteredIndieProjects = useMemo(() => {
    if (activeFilter === "archived" || activeFilter === "opensource") return [];
    if (activeFilter === "featured") return indieProjects.filter((p) => p.pinned);
    return indieProjects;
  }, [indieProjects, activeFilter]);

  // Filter GitHub repos
  const filteredRepos = useMemo(() => {
    if (activeFilter === "featured") return repos.filter((r) => r.stargazers_count > 0);
    if (activeFilter === "archived") return repos.filter((r) => r.archived);
    if (activeFilter === "opensource") return repos.filter((r) => !r.archived);
    if (activeFilter !== "all") {
      return repos.filter((r) => !r.archived && r.topics.includes(activeFilter));
    }
    return repos;
  }, [repos, activeFilter]);

  // Apply search
  const searchedCaseStudies = useMemo(() => {
    if (!debouncedQuery.trim()) return filteredCaseStudies;
    const q = debouncedQuery.toLowerCase();
    return filteredCaseStudies.filter(
      (cs) => cs.title.toLowerCase().includes(q) || cs.description.toLowerCase().includes(q)
    );
  }, [debouncedQuery, filteredCaseStudies]);

  const searchedIndieProjects = useMemo(() => {
    if (!debouncedQuery.trim()) return filteredIndieProjects;
    const q = debouncedQuery.toLowerCase();
    return filteredIndieProjects.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [debouncedQuery, filteredIndieProjects]);

  const searchedRepos = useMemo(() => {
    if (!debouncedQuery.trim()) return filteredRepos;
    return fuse.search(debouncedQuery).map((r) => r.item);
  }, [debouncedQuery, fuse, filteredRepos]);

  const handleFilterClick = useCallback((value: FilterValue) => {
    setActiveFilter((prev) => (prev === value ? "all" : value));
  }, []);

  const hasResults =
    searchedCaseStudies.length > 0 || searchedIndieProjects.length > 0 || searchedRepos.length > 0;

  return (
    <div className="space-y-10">
      {/* Search & Filter */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTER_CATEGORIES.map((cat) => (
            <FilterChip
              key={cat.value}
              label={cat.label}
              active={activeFilter === cat.value}
              onClick={() => handleFilterClick(cat.value)}
            />
          ))}
        </div>
      </div>

      {!hasResults ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-sm">No projects found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Featured / Case Studies */}
          {searchedCaseStudies.length > 0 && (
            <FadeIn>
              <section>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                  Featured Work
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {searchedCaseStudies.map((cs) => (
                    <CaseStudyProjectCard key={cs.slug} study={cs} />
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* Indie Projects */}
          {searchedIndieProjects.length > 0 && (
            <FadeIn delay={0.1}>
              <section>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                  Indie Projects
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {searchedIndieProjects.map((project) => (
                    <IndieProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* GitHub Repos */}
          {searchedRepos.length > 0 && (
            <FadeIn delay={0.15}>
              <section>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                  GitHub Repos
                  <span className="ml-2 text-xs font-normal normal-case">
                    ({searchedRepos.length})
                  </span>
                </h3>
                <div>
                  {searchedRepos.map((repo) => (
                    <RepoListItem key={repo.id} repo={repo} />
                  ))}
                </div>
              </section>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Case Study Card ─── */
function CaseStudyProjectCard({ study }: { study: CaseStudy }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5">
      {/* Status */}
      <div className="flex items-center justify-between mb-3">
        <StatusBadge status={study.status} />
        {study.link && (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-blue transition-colors"
          >
            <Globe className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-foreground group-hover:text-accent-blue transition-colors">
        {study.title}
      </h4>

      {/* Description */}
      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 flex-1">
        {study.oneLiner}
      </p>

      {/* Tech */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {study.tech.length > 4 && (
          <span className="text-xs text-muted-foreground self-center">
            +{study.tech.length - 4}
          </span>
        )}
      </div>

      {/* Metrics */}
      {study.metrics && study.metrics.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-x-3 gap-y-1">
          {study.metrics.slice(0, 3).map((m) => (
            <span key={m} className="text-xs text-muted-foreground">
              {m}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Indie Project Card ─── */
function IndieProjectCard({ project }: { project: IndieProject }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5">
      <div className="flex items-center justify-between mb-3">
        <StatusBadge status={project.status} />
        <div className="flex items-center gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-blue transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <h4 className="font-semibold text-foreground group-hover:text-accent-blue transition-colors">
        {project.title}
      </h4>

      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 flex-1">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── GitHub Repo List Item ─── */
function RepoListItem({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="py-4 border-b border-border last:border-b-0 group">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-medium text-foreground hover:text-accent-blue transition-colors truncate"
            >
              {repo.name}
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-blue transition-colors"
                aria-label="View live site"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {repo.archived && (
              <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                archived
              </span>
            )}
          </div>
          {repo.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {repo.description}
            </p>
          )}
        </div>
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-muted-foreground shrink-0">
            <Star className="h-3.5 w-3.5" />
            <span className="font-mono text-xs">{repo.stargazers_count}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] || "#8B8B8B" }}
            />
            <span className="font-mono">{repo.language}</span>
          </div>
        )}
        <span className="font-mono">{relativeTime(repo.pushed_at)}</span>
      </div>
    </div>
  );
}
