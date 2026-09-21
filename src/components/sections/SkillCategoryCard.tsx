"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  animate,
} from "motion/react";
import type { SkillGroup } from "@/types";
import { cn } from "@/lib/utils";

interface SkillCategoryCardProps {
  group: SkillGroup;
}

interface CategoryVisualTheme {
  textAccent: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
  borderHover: string;
  glow: string;
  cornerGlow: string;
  topLine: string;
}

/**
 * Single, cohesive accent theme for every category card.
 * Cards are differentiated by their eyebrow label and content, not by
 * assigning a different hue per category — one accent stays intentional.
 */
const THEME: CategoryVisualTheme = {
  textAccent: "text-accent-2 group-hover:text-accent",
  badgeBorder: "border-accent/30 group-hover:border-accent/50",
  badgeBg: "bg-accent/[0.07] group-hover:bg-accent/[0.14]",
  badgeText: "text-accent-2",
  borderHover: "hover:border-accent/35",
  glow: "rgba(99, 102, 241, 0.1)",
  cornerGlow: "from-accent/[0.08]",
  topLine: "group-hover:via-accent-2/40",
};

/**
 * SkillCategoryCard
 * Refined card component with:
 * - Dynamic GPU-accelerated cursor spotlight (pointer devices)
 * - Highly damped, subtle 3D card tilt (max ±1.8°)
 * - Staggered entrance and tactile micro-interactions on skill chips
 */
export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = THEME;

  // Cursor Spotlight Motion Values
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlightOpacity = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, ${theme.glow}, transparent 80%)`;

  // Subtle 3D Tilt Motion Values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, {
    stiffness: 300,
    damping: 25,
    mass: 0.5,
  });
  const springTiltY = useSpring(tiltY, {
    stiffness: 300,
    damping: 25,
    mass: 0.5,
  });
  const rotateX = useTransform(springTiltY, [-1, 1], [1.8, -1.8]);
  const rotateY = useTransform(springTiltX, [-1, 1], [-1.8, 1.8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    // Normalized coordinates (-1 to 1) for subtle tilt
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    tiltX.set(normX);
    tiltY.set(normY);
  };

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    animate(spotlightOpacity, 1, { duration: 0.25 });
  };

  const handleMouseLeave = () => {
    if (prefersReduced) return;
    animate(spotlightOpacity, 0, { duration: 0.35 });
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReduced ? undefined : rotateX,
        rotateY: prefersReduced ? undefined : rotateY,
        transformPerspective: 1000,
      }}
      whileHover={prefersReduced ? undefined : { y: -3, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 380, damping: 25 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl",
        "border border-white/[0.08] bg-gradient-to-b from-surface/90 via-surface/80 to-surface-2/80",
        "p-6 sm:p-7 backdrop-blur-xl shadow-[var(--shadow-sm)]",
        "transition-[border-color,box-shadow] duration-300",
        theme.borderHover,
        "hover:shadow-[var(--shadow-md)]"
      )}
    >
      {/* Category-tuned subtle corner ambient highlight */}
      <div
        className={cn(
          "pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br to-transparent blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-80",
          theme.cornerGlow
        )}
        aria-hidden="true"
      />

      {/* GPU-accelerated cursor spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: spotlightBg,
          opacity: prefersReduced ? 0 : spotlightOpacity,
        }}
        aria-hidden="true"
      />

      {/* Top illuminated line accent */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-300",
          theme.topLine
        )}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Card Header: Category Title + Subtitle Badge */}
        <div className="mb-5 flex items-center justify-between gap-2">
          <h3
            className={cn(
              "font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200",
              theme.textAccent
            )}
          >
            {group.category}
          </h3>
          <span
            className={cn(
              "font-mono text-xs font-medium rounded-md px-2 py-0.5 border backdrop-blur-sm transition-all duration-200",
              theme.badgeBorder,
              theme.badgeBg,
              theme.badgeText
            )}
          >
            {group.eyebrow}
          </span>
        </div>

        {/* Skill Chips Grid */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, skillIdx) => (
            <motion.span
              key={skill}
              initial={
                prefersReduced ? false : { opacity: 0, scale: 0.9, y: 8 }
              }
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.32,
                delay: 0.12 + skillIdx * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                prefersReduced
                  ? undefined
                  : {
                      y: -2,
                      scale: 1.03,
                    }
              }
              whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              className="cursor-default rounded-xl border border-white/[0.08] bg-surface-2/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-text-2 transition-all duration-200 hover:text-text hover:border-white/20 hover:bg-surface-2/90 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
