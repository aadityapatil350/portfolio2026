"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

/* ─── Hook for mounting state (React 19 hydration-safe) ─── */
const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* ─── FadeIn ─── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 16,
  duration = 0.45,
}: FadeInProps) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();

  if (!mounted || shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container + children ─── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();

  if (!mounted || shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();

  if (!mounted || shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
interface CountUpProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function CountUp({
  target,
  duration = 1.8,
  className,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(target);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (shouldReduce || !isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTime: number;
    let animationFrame: number;
    setCount(0);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration, shouldReduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Blur in ─── */
interface BlurInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export function BlurIn({
  children,
  delay = 0,
  className,
  duration = 0.5,
}: BlurInProps) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();

  if (!mounted || shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero text reveal (word by word) ─── */
interface TextRevealProps {
  text: string;
  className?: string;
  wordDelay?: number;
}

export function TextReveal({
  text,
  className,
  wordDelay = 0.04,
}: TextRevealProps) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  if (!mounted || shouldReduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.35,
            delay: i * wordDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Animated line / divider ─── */
interface AnimatedLineProps {
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "center";
}

export function AnimatedLine({
  className,
  delay = 0,
  direction = "left",
}: AnimatedLineProps) {
  const mounted = useIsMounted();
  const shouldReduce = useReducedMotion();

  if (!mounted || shouldReduce) {
    return <div className={`h-px bg-border ${className || ""}`} />;
  }

  const originMap = {
    left: { scaleX: 1, originX: 0 },
    right: { scaleX: 1, originX: 1 },
    center: { scaleX: 1, originX: 0.5 },
  };

  return (
    <motion.div
      className={`h-px bg-border ${className || ""}`}
      initial={{ scaleX: 0 }}
      whileInView={originMap[direction]}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ transformOrigin: direction === "right" ? "100%" : direction === "center" ? "50%" : "0%" }}
    />
  );
}

/* ─── Marquee / scrolling text ─── */
interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({
  children,
  speed = 30,
  className,
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <div
        className="flex shrink-0 gap-8"
        style={{
          width: "max-content",
          animation: `marquee-${reverse ? "rtl" : "ltr"} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Hover scale micro-interaction ─── */
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({
  children,
  className,
  scale = 1.02,
}: HoverScaleProps) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      whileHover={{ scale, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Magnetic button effect ─── */
interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export function Magnetic({ children, className }: MagneticProps) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating / gentle bob animation ─── */
interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function Floating({
  children,
  className,
  amplitude = 6,
  duration = 4,
}: FloatingProps) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Glow pulse (for status dots) ─── */
export function GlowPulse({ className }: { className?: string }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <span className={className} />;

  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    />
  );
}
