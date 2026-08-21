"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export interface WhatsAppCTAProps {
  variant?: "primary" | "inline" | "sticky" | "outline" | "button";
  context: string;
  label?: string;
  customMessage?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  showIcon?: boolean;
  showArrow?: boolean;
}

const PHONE_NUMBER = "919373238164";

export function WhatsAppCTA({
  variant = "primary",
  context,
  label,
  customMessage,
  className,
  size = "default",
  showIcon = true,
  showArrow = false,
}: WhatsAppCTAProps) {
  const pathname = usePathname() || "/";

  // Build the pre-filled message. MUST end mid-sentence with space.
  const message =
    customMessage ??
    `Hi Aditya, I'm looking at your ${context}. Here's what I need: `;

  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      page_path: pathname,
      cta_variant: variant,
      context,
    });
  };

  const defaultLabel =
    variant === "inline"
      ? "Chat on WhatsApp"
      : variant === "sticky"
        ? "WhatsApp"
        : "Discuss on WhatsApp";

  const displayLabel = label || defaultLabel;

  // Base sizing
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-medium gap-1.5",
    default: "px-4 py-2 text-sm font-semibold gap-2",
    lg: "px-6 py-3 text-base font-semibold gap-2.5",
  };

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 transition-colors",
          className
        )}
      >
        {showIcon && <MessageCircle className="h-4 w-4 shrink-0" />}
        <span>{displayLabel}</span>
        {showArrow && <ArrowRight className="h-3.5 w-3.5" />}
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-lg border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/10 transition-colors duration-200 active:scale-[0.98]",
          sizeStyles[size],
          className
        )}
      >
        {showIcon && <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />}
        <span>{displayLabel}</span>
        {showArrow && <ArrowRight className="h-4 w-4 shrink-0" />}
      </a>
    );
  }

  // Primary / Default / Sticky button variant
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-sm transition-all duration-200 hover:shadow-emerald-600/20 hover:shadow-md active:scale-[0.98]",
        sizeStyles[size],
        className
      )}
    >
      {showIcon && <MessageCircle className="h-4 w-4 shrink-0" />}
      <span>{displayLabel}</span>
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" />}
    </a>
  );
}
