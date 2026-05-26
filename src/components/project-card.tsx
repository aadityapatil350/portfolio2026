import { ExternalLink, Star } from "lucide-react";
import {
  relativeTime,
  languageColors,
  type GitHubRepo,
} from "@/lib/github";

interface ProjectCardProps {
  repo: GitHubRepo;
}

export function ProjectCard({ repo }: ProjectCardProps) {
  const hasLiveUrl = repo.homepage || repo.topics.includes("live");

  return (
    <div className="py-4 border-b border-border last:border-b-0 group">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {/* Name row */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-medium text-foreground hover:text-accent-blue transition-colors truncate"
            >
              {repo.name}
            </a>
            {hasLiveUrl && (
              <a
                href={repo.homepage || repo.html_url}
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

          {/* Description */}
          {repo.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {repo.description}
            </p>
          )}
        </div>

        {/* Stars */}
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-muted-foreground shrink-0">
            <Star className="h-3.5 w-3.5" />
            <span className="font-mono text-xs">{repo.stargazers_count}</span>
          </div>
        )}
      </div>

      {/* Bottom row */}
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
        <span className="font-mono">
          {relativeTime(repo.pushed_at)}
        </span>
      </div>
    </div>
  );
}
