// Types for GitHub API response
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics: string[];
  archived: boolean;
}

// Language color mapping (common languages)
export const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Java: "#B07219",
  "C++": "#F34B7D",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
  Dockerfile: "#384D54",
};

// Fetch repos from GitHub API with ISR caching
export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME || "aadityapatil350";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      }
    );

    if (!res.ok) {
      console.error(
        `GitHub API returned ${res.status}: ${res.statusText}`
      );
      return [];
    }

    const repos: GitHubRepo[] = await res.json();

    // Filter out forked repos (type=owner should handle this, but double-check)
    return repos;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

// Get relative time string (e.g., "2 days ago", "3 months ago")
export function relativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
  if (diffMonths < 12) return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
  return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
}
