"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

/* ─── FadeIn (existing, enhanced) ─── */
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
  distance = 20,
  duration = 0.5,
}: FadeInProps) {
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
      viewport={{ once: true, margin: "-60px" }}
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
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
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
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
  duration = 2,
  className,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

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
  duration = 0.6,
}: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", scale: 0.97 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
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
  const words = text.split(" ");

  return (
    <motion.span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
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
  const originMap = {
    left: { scaleX: 1, originX: 0 },
    right: { scaleX: 1, originX: 1 },
    center: { scaleX: 1, originX: 0.5 },
  };

  return (
    <motion.div
      className={`h-px bg-border ${className || ""}`}
      initial={{ scaleX: 0 }}
      whileInView={originMap}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    />
  );
}
