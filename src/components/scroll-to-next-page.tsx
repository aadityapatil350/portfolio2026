"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const ROUTE_ORDER = ["/", "/about", "/projects", "/blog", "/contact"] as const;

function neighborsFor(pathname: string): { prev: string | null; next: string | null } {
  const top = "/" + (pathname.split("/")[1] ?? "");
  const normalized = top === "/" ? "/" : top;
  const idx = ROUTE_ORDER.indexOf(normalized as (typeof ROUTE_ORDER)[number]);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ROUTE_ORDER[idx - 1] : null,
    next: idx < ROUTE_ORDER.length - 1 ? ROUTE_ORDER[idx + 1] : null,
  };
}

const LABELS: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/blog": "Blog",
  "/contact": "Contact",
};

export function ScrollToNextPage({ pathname }: { pathname: string }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const triggeredRef = useRef(false);
  const downDeltaRef = useRef(0);
  const upDeltaRef = useRef(0);
  // timestamps when the user first reached bottom / top of the page,
  // used to require a small dwell before allowing the trigger to fire
  const bottomSinceRef = useRef<number | null>(null);
  const topSinceRef = useRef<number | null>(null);
  const DWELL_MS = 1200;

  const { prev, next } = neighborsFor(pathname);

  // Reset transition state whenever the route changes (component persists across navs)
  useEffect(() => {
    triggeredRef.current = false;
    downDeltaRef.current = 0;
    upDeltaRef.current = 0;
    bottomSinceRef.current = null;
    topSinceRef.current = null;
    setIsTransitioning(false);
  }, [pathname]);

  useEffect(() => {
    if (!prev && !next) return;

    function isAtBottom() {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      // within 40px of bottom counts as "at bottom" (forgiving)
      return scrollY + viewport >= doc - 40;
    }
    function isAtTop() {
      return window.scrollY <= 40;
    }

    function trigger(target: string) {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setIsTransitioning(true);
      window.setTimeout(() => router.push(target), 450);
    }

    // Track when the user has been parked at an edge so we don't trigger
    // immediately on first contact, give them time to actually read.
    function updateDwellTimers() {
      const now = Date.now();
      if (isAtBottom()) {
        if (bottomSinceRef.current === null) bottomSinceRef.current = now;
      } else {
        bottomSinceRef.current = null;
        downDeltaRef.current = 0;
      }
      if (isAtTop()) {
        if (topSinceRef.current === null) topSinceRef.current = now;
      } else {
        topSinceRef.current = null;
        upDeltaRef.current = 0;
      }
    }

    function onScroll() {
      updateDwellTimers();
    }

    function bottomDwellMet() {
      return (
        bottomSinceRef.current !== null &&
        Date.now() - bottomSinceRef.current >= DWELL_MS
      );
    }
    function topDwellMet() {
      return (
        topSinceRef.current !== null &&
        Date.now() - topSinceRef.current >= DWELL_MS
      );
    }

    function onWheel(e: WheelEvent) {
      if (triggeredRef.current) return;
      updateDwellTimers();
      // downward
      if (e.deltaY > 0) {
        upDeltaRef.current = 0;
        if (next && isAtBottom() && bottomDwellMet()) {
          downDeltaRef.current += e.deltaY;
          if (downDeltaRef.current > 100) trigger(next);
        } else {
          downDeltaRef.current = 0;
        }
        return;
      }
      // upward
      if (e.deltaY < 0) {
        downDeltaRef.current = 0;
        if (prev && isAtTop() && topDwellMet()) {
          upDeltaRef.current += -e.deltaY;
          if (upDeltaRef.current > 100) trigger(prev);
        } else {
          upDeltaRef.current = 0;
        }
      }
    }

    let touchStartY = 0;
    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0]?.clientY ?? 0;
      updateDwellTimers();
    }
    function onTouchMove(e: TouchEvent) {
      if (triggeredRef.current) return;
      const cy = e.touches[0]?.clientY ?? 0;
      const dy = touchStartY - cy; // positive = swipe up = scroll down
      if (dy > 100 && next && isAtBottom() && bottomDwellMet()) trigger(next);
      if (dy < -100 && prev && isAtTop() && topDwellMet()) trigger(prev);
    }

    updateDwellTimers();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [prev, next, router]);

  return (
    <>
      {next && <ScrollHint direction="down" label={LABELS[next] ?? "Next"} />}
      {prev && <ScrollHint direction="up" label={LABELS[prev] ?? "Back"} />}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 pointer-events-none bg-background"
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollHint({ direction, label }: { direction: "up" | "down"; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function check() {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      if (direction === "down") {
        setVisible(scrollY + viewport >= doc - 80);
      } else {
        // only show "back" pill once the user has scrolled a bit then returned to top
        setVisible(scrollY <= 4 && doc > viewport + 200);
      }
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [direction]);

  const isDown = direction === "down";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: isDown ? 12 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isDown ? 12 : -12 }}
          transition={{ duration: 0.3 }}
          className={`fixed left-1/2 -translate-x-1/2 z-40 pointer-events-none ${
            isDown ? "bottom-6" : "top-20"
          }`}
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-4 py-2 text-xs font-mono text-muted-foreground shadow-sm">
            {!isDown && <ArrowUp className="h-3 w-3 animate-bounce" />}
            <span>
              {isDown
                ? `keep scrolling for ${label.toLowerCase()}`
                : `scroll up for ${label.toLowerCase()}`}
            </span>
            {isDown && <ArrowDown className="h-3 w-3 animate-bounce" />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
