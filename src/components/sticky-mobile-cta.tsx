"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const PHONE_NUMBER = "+919373238164";

export function StickyMobileCTA() {
  const pathname = usePathname() || "/";
  const isHomePage = pathname === "/";
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const heroElement = document.getElementById("hero-section");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, [isHomePage]);

  if (isHomePage && heroInView) {
    return null;
  }

  // Derive dynamic context from pathname
  const getContext = () => {
    if (pathname.startsWith("/services/")) {
      return `${pathname.replace("/services/", "")} service page`;
    }
    if (pathname.startsWith("/industries/")) {
      return `${pathname.replace("/industries/", "")} industry page`;
    }
    if (pathname.startsWith("/work/")) {
      return `${pathname.replace("/work/", "")} case study`;
    }
    if (pathname === "/partners") {
      return "agency delivery partner page";
    }
    if (pathname === "/about") {
      return "about page";
    }
    return "mobile sticky bar";
  };

  const context = getContext();
  const waMessage = `Hi Aditya, I'm looking at your ${context}. Here's what I need: `;
  const waHref = `https://wa.me/919373238164?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden shadow-lg transition-transform duration-300">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", {
              page_path: pathname,
              cta_variant: "sticky",
              context,
            })
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm active:scale-[0.98] transition-colors hover:bg-emerald-500"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() =>
            trackEvent("phone_click", {
              page_path: pathname,
            })
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-muted/80 px-4 py-2.5 text-sm font-semibold text-foreground active:scale-[0.98] transition-colors hover:bg-accent"
        >
          <Phone className="h-4 w-4 text-emerald-500" />
          <span>Call Aditya</span>
        </a>
      </div>
    </div>
  );
}
