"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const PHONE_NUMBER = "+919373238164";
const FORMATTED_PHONE = "+91 93732 38164";

export function Nav() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlePhoneClick = () => {
    trackEvent("phone_click", {
      page_path: pathname,
    });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      page_path: pathname,
      cta_variant: "primary",
      context: "header nav button",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="content-width flex h-14 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity"
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
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Desktop phone link */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handlePhoneClick}
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
            title="Direct phone line"
          >
            <Phone className="h-3 w-3 text-emerald-500" />
            <span>{FORMATTED_PHONE}</span>
          </a>

          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`https://wa.me/919373238164?text=${encodeURIComponent("Hi Aditya, I saw your website and wanted to discuss an engineering project: ")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="group relative ml-1 inline-flex items-center gap-2 overflow-hidden rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 active:scale-[0.98]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Discuss Project</span>
            </a>
          </div>
        </div>

        {/* Mobile nav controls */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Mobile direct phone dialer */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center rounded-md p-2 text-emerald-600 dark:text-emerald-400 hover:bg-muted"
            aria-label={`Call ${FORMATTED_PHONE}`}
          >
            <Phone className="h-4 w-4" />
          </a>

          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="content-width space-y-1.5 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "bg-accent font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border space-y-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={() => {
                  handlePhoneClick();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-2 text-sm font-mono text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-500" />
                <span>Call {FORMATTED_PHONE}</span>
              </a>

              <a
                href={`https://wa.me/919373238164?text=${encodeURIComponent("Hi Aditya, I saw your website and wanted to discuss an engineering project: ")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppClick();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
