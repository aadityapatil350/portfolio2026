"use client";

type AnalyticsEventMap = {
  whatsapp_click: {
    page_path: string;
    cta_variant: "primary" | "inline" | "sticky" | "outline" | "button";
    context: string;
  };
  phone_click: {
    page_path: string;
  };
  quote_form_submit: {
    page_path: string;
    service?: string;
  };
  scroll_75: {
    page_path: string;
  };
};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      eventNameOrTargetId: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Type-safe analytics tracker for Google Analytics 4 (GA4).
 */
export function trackEvent<E extends keyof AnalyticsEventMap>(
  eventName: E,
  params: AnalyticsEventMap[E]
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else if (process.env.NODE_ENV === "development") {
      // Helpful dev log for debugging analytics without GA ID in local environment
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (err) {
    console.error(`[Analytics Error] Failed to record event ${eventName}:`, err);
  }
}
