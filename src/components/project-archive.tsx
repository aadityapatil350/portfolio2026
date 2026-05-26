"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Fuse from "fuse.js";
import { Search, ExternalLink, Star } from "lucide-react";
import { relativeTime, languageColors, type GitHubRepo } from "@/lib/github";
import type { IndieProject } from "@/data/site-config";
import { ProjectCard } from "@/components/project-card";
import { FilterChip } from "@/components/filter-chip";
import { StatusBadge } from "@/components/status-badge";
import { FadeIn } from "@/components/fade-in";

export type ProcessedRepo = GitHubRepo;

interface ProjectArchiveProps {
  repos: ProcessedRepo[];
  indieProjects: IndieProject[];
}

const FILTER_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Directory", value: "directory" },
  { label: "Tooling", value: "tooling" },
  { label: "Experiments", value: "experiments" },
  { label: "Archived", value: "archived" },
] as const;

type FilterValue = (typeof FILTER_CATEGORIES)[number]["value"];

export function ProjectArchive({ repos, indieProjects }: ProjectArchiveProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fuse.js search index for GitHub repos
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

  // Filter GitHub repos by category
  const filteredRepos = useMemo(() => {
    let result = repos;

    // Apply category filter
    if (activeFilter === "archived") {
      result = result.filter((repo) => repo.archived);
    } else if (activeFilter !== "all") {
      result = result.filter(
        (repo) =>
          !repo.archived &&
          repo.topics.includes(activeFilter)
      );
    }

    return result;
  }, [repos, activeFilter]);

  // Apply search query to filtered repos
  const searchedRepos = useMemo(() => {
    if (!debouncedQuery.trim()) return filteredRepos;
    return fuse.search(debouncedQuery).map((r) => r.item);
  }, [debouncedQuery, fuse, filteredRepos]);

  // Search indie projects (simple includes check)
  const searchedIndieProjects = useMemo(() => {
    if (!debouncedQuery.trim()) return indieProjects;
    const q = debouncedQuery.toLowerCase();
    return indieProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [debouncedQuery, indieProjects]);

  const handleFilterClick = useCallback((value: FilterValue) => {
    setActiveFilter((prev) => (prev === value ? "all" : value));
  }, []);

  const hasResults = searchedIndieProjects.length > 0 || searchedRepos.length > 0;

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          />
        </div>

        {/* Filter Chips */}
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

      {/* Content */}
      {!hasResults ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-sm">No projects found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Indie Projects (Pinned) */}
          {searchedIndieProjects.length > 0 && (
            <FadeIn>
              <section>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Indie Projects
                </h3>
                <div>
                  {searchedIndieProjects.map((project) => (
                    <div
                      key={project.title}
                      className="py-4 border-b border-border last:border-b-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            {project.url ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-sm font-medium text-foreground hover:text-accent-blue transition-colors"
                              >
                                {project.title}
                              </a>
                            ) : (
                              <span className="font-mono text-sm font-medium text-foreground">
                                {project.title}
                              </span>
                            )}
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent-blue transition-colors"
                                aria-label="View live site"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                            {project.repo && (
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent-blue transition-colors"
                                aria-label="View source code"
                              >
                                <svg
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                              </a>
                            )}
                            <StatusBadge status={project.status} />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-xs text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* GitHub Repos */}
          {searchedRepos.length > 0 && (
            <FadeIn delay={0.1}>
              <section>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  GitHub Repos
                </h3>
                <div>
                  {searchedRepos.map((repo) => (
                    <ProjectCard key={repo.id} repo={repo} />
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
