"use client";

import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useSpring } from "framer-motion";

const RADIUS = 50;
const SPRING = { stiffness: 160, damping: 14, mass: 0.6 };

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function MagneticButton({ href, children, className = "", onClick, external = true }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  function handleMouseMove(e: ReactMouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < RADIUS + rect.width / 2) {
      x.set(dx * 0.35);
      y.set(dy * 0.35);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
