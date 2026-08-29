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
 * Category-specific subtle ambient accents.
 * Monochromatic elegance with restrained, cohesive light tints.
 */
const CATEGORY_THEMES: Record<string, CategoryVisualTheme> = {
  Languages: {
    textAccent: "text-violet-400 group-hover:text-violet-300",
    badgeBorder: "border-violet-500/30 group-hover:border-violet-500/50",
    badgeBg: "bg-violet-500/[0.07] group-hover:bg-violet-500/[0.14]",
    badgeText: "text-violet-300",
    borderHover: "hover:border-violet-500/35",
    glow: "rgba(168, 85, 247, 0.12)",
    cornerGlow: "from-violet-500/[0.08]",
    topLine: "group-hover:via-violet-400/40",
  },
  Frontend: {
    textAccent: "text-sky-400 group-hover:text-sky-300",
    badgeBorder: "border-sky-500/30 group-hover:border-sky-500/50",
    badgeBg: "bg-sky-500/[0.07] group-hover:bg-sky-500/[0.14]",
    badgeText: "text-sky-300",
    borderHover: "hover:border-sky-500/35",
    glow: "rgba(56, 189, 248, 0.12)",
    cornerGlow: "from-sky-500/[0.08]",
    topLine: "group-hover:via-sky-400/40",
  },
  Backend: {
    textAccent: "text-indigo-400 group-hover:text-indigo-300",
    badgeBorder: "border-indigo-500/30 group-hover:border-indigo-500/50",
    badgeBg: "bg-indigo-500/[0.07] group-hover:bg-indigo-500/[0.14]",
    badgeText: "text-indigo-300",
    borderHover: "hover:border-indigo-500/35",
    glow: "rgba(99, 102, 241, 0.12)",
    cornerGlow: "from-indigo-500/[0.08]",
    topLine: "group-hover:via-indigo-400/40",
  },
  Databases: {
    textAccent: "text-purple-400 group-hover:text-purple-300",
    badgeBorder: "border-purple-500/30 group-hover:border-purple-500/50",
    badgeBg: "bg-purple-500/[0.07] group-hover:bg-purple-500/[0.14]",
    badgeText: "text-purple-300",
    borderHover: "hover:border-purple-500/35",
    glow: "rgba(192, 132, 252, 0.12)",
    cornerGlow: "from-purple-500/[0.08]",
    topLine: "group-hover:via-purple-400/40",
  },
  "Cloud & Deployment": {
    textAccent: "text-blue-400 group-hover:text-blue-300",
    badgeBorder: "border-blue-500/30 group-hover:border-blue-500/50",
    badgeBg: "bg-blue-500/[0.07] group-hover:bg-blue-500/[0.14]",
    badgeText: "text-blue-300",
    borderHover: "hover:border-blue-500/35",
    glow: "rgba(96, 165, 250, 0.12)",
    cornerGlow: "from-blue-500/[0.08]",
    topLine: "group-hover:via-blue-400/40",
  },
  Tools: {
    textAccent: "text-slate-300 group-hover:text-slate-200",
    badgeBorder: "border-slate-400/30 group-hover:border-slate-400/50",
    badgeBg: "bg-slate-400/[0.07] group-hover:bg-slate-400/[0.14]",
    badgeText: "text-slate-300",
    borderHover: "hover:border-slate-400/35",
    glow: "rgba(148, 163, 184, 0.12)",
    cornerGlow: "from-slate-400/[0.08]",
    topLine: "group-hover:via-slate-400/40",
  },
};

const DEFAULT_THEME: CategoryVisualTheme = {
  textAccent: "text-accent-2 group-hover:text-accent",
  badgeBorder: "border-accent/30 group-hover:border-accent/50",
  badgeBg: "bg-accent/[0.07] group-hover:bg-accent/[0.14]",
  badgeText: "text-accent-2",
  borderHover: "hover:border-accent/35",
  glow: "rgba(99, 102, 241, 0.12)",
  cornerGlow: "from-accent/[0.08]",
  topLine: "group-hover:via-accent-2/40",
};

/**
 * SkillCategoryCard
 * Refined glassmorphic card component with:
 * - Dynamic GPU-accelerated cursor spotlight (pointer devices)
 * - Highly damped, subtle 3D card tilt (max ±1.8°)
 * - Category-tuned ambient lighting accents
 * - Staggered entrance and tactile micro-interactions on skill chips
 */
export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = CATEGORY_THEMES[group.category] ?? DEFAULT_THEME;

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
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl",
        "border border-white/[0.08] bg-gradient-to-b from-surface/90 via-surface/80 to-surface-2/80",
        "p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
        "transition-colors duration-300",
        theme.borderHover,
        "hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
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
