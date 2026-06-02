"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/now", label: "Now" },
  { href: "/uses", label: "Uses" },
  { href: "/resume", label: "Resume" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="content-width flex h-14 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          aditya<span className="text-accent-blue">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 text-sm transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <ThemeToggle />
            <Link
              href="/hire"
              className="hire-cta group relative ml-1 inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="relative z-10">Hire me</span>
              <span aria-hidden className="hire-cta-shine" />
            </Link>
          </div>
        </div>

        {/* Mobile nav toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="content-width space-y-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === link.href
                    ? "bg-accent font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/hire"
              onClick={() => setMobileOpen(false)}
              className="hire-cta group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="relative z-10">Hire me</span>
              <span aria-hidden className="hire-cta-shine" />
            </Link>
          </div>
        </div>
      )}
      <style>{`
        @keyframes hire-cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.0); }
          50%      { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.15); }
        }
        @keyframes hire-cta-sweep {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          60%  { transform: translateX(220%)  skewX(-12deg); }
          100% { transform: translateX(220%)  skewX(-12deg); }
        }
        .hire-cta {
          animation: hire-cta-glow 2.4s ease-in-out infinite;
        }
        .hire-cta-shine {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 40%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.35) 50%,
            transparent 100%
          );
          pointer-events: none;
          animation: hire-cta-sweep 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hire-cta,
          .hire-cta-shine { animation: none; }
        }
      `}</style>
    </header>
  );
}
