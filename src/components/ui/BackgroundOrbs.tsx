"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * BackgroundOrbs Component
 * Fixed, restrained ambient backdrop: one soft accent wash with gentle scroll
 * parallax, plus a faint dot-grid texture. Intentionally minimal — depth
 * without competing for attention with foreground content.
 */
export function BackgroundOrbs() {
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -120]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Single ambient glow, top-center — the only moving background element */}
      <motion.div
        style={{ y: orbY }}
        className="absolute -top-40 left-1/2 h-[560px] w-[720px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px] opacity-70"
      />

      {/* Faint stationary wash, lower page — adds depth without motion */}
      <div className="absolute top-[85vh] left-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[150px]" />

      {/* Subtle full-page dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
}
