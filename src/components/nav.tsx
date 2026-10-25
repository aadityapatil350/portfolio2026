"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { sound } from "@/lib/sound-effects";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const PHONE_NUMBER = "+919373238164";
const FORMATTED_PHONE = "+91 93732 38164";

export function Nav() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlePhoneClick = () => {
    sound.playClick?.();
    trackEvent("phone_click", {
      page_path: pathname,
    });
  };

  const handleWhatsAppClick = () => {
    sound.playClick?.();
    trackEvent("whatsapp_click", {
      page_path: pathname,
      cta_variant: "primary",
      context: "header nav button",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-[#fbfbf8]/90 backdrop-blur-md dark:border-neutral-800/80 dark:bg-[#0b0b0c]/90">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => sound.playClick?.()}
          className="group flex items-center gap-2"
        >
          <span className="font-display text-base font-bold tracking-tight text-[#0b0b0c] dark:text-[#fbfbf8]">
            Aditya Patil<span className="text-[#2261e9]">.</span>
          </span>
          <span className="hidden sm:inline-block rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#2261e9] dark:bg-blue-950/50 dark:text-sky-400">
            3,400+ MW Scale
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => sound.playClick?.()}
                className={cn(
                  "relative px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors",
                  isActive
                    ? "font-bold text-[#0b0b0c] dark:text-[#fbfbf8]"
                    : "text-neutral-500 hover:text-[#0b0b0c] dark:text-neutral-400 dark:hover:text-[#fbfbf8]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2261e9]" />
                )}
              </Link>
            );
          })}

          {/* Desktop Phone Dial Link */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handlePhoneClick}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/60 px-3 py-1 font-mono text-[11px] text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300"
            title="Direct phone line"
          >
            <Phone className="h-3 w-3 text-[#2261e9]" />
            <span>{FORMATTED_PHONE}</span>
          </a>

          {/* Theme Toggle & Primary WhatsApp CTA */}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`https://wa.me/919373238164?text=${encodeURIComponent(
                "Hi Aditya, I saw your website and wanted to discuss an engineering project: "
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="group ml-1 inline-flex items-center gap-1.5 rounded-full bg-[#2261e9] px-3.5 py-1.5 font-display text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-600 hover:scale-105 active:scale-95"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-1 md:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#2261e9] hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Call direct"
          >
            <Phone className="h-4 w-4" />
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => {
              sound.playClick?.();
              setMobileOpen(!mobileOpen);
            }}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="border-b border-neutral-200 bg-[#fbfbf8] px-4 py-4 md:hidden dark:border-neutral-800 dark:bg-[#0b0b0c]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  sound.playClick?.();
                  setMobileOpen(false);
                }}
                className={cn(
                  "rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                  pathname === link.href
                    ? "bg-[#2261e9]/10 font-bold text-[#2261e9]"
                    : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/919373238164?text=${encodeURIComponent(
                  "Hi Aditya, I saw your website and wanted to discuss an engineering project: "
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#2261e9] py-2.5 font-display text-sm font-semibold text-white shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discuss Project on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
