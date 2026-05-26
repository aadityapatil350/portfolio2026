import Link from "next/link";
import { Github, Twitter, Rss, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="content-width flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            &copy; {currentYear} Aditya
          </span>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-4 w-4" />
          </Link>
          <Link
            href="/rss.xml"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="RSS Feed"
          >
            <Rss className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:hello@aditya.dev"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
        <span className="text-xs text-muted-foreground">
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
