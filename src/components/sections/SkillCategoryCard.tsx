"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SkillGroup } from "@/types";

interface SkillCategoryCardProps {
  group: SkillGroup;
}

/**
 * SkillCategoryCard
 * Reusable component for rendering categorized technical skill groups
 * within the technology matrix with glassmorphic cards and interactive skill pills.
 * Client Component.
 */
export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1">
      {/* Top animated line shimmer */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
        aria-hidden="true"
      />

      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-2">
            {group.category}
          </h3>
          <span className="font-mono text-xs text-text-3 font-medium rounded-md bg-surface-2/60 px-2 py-0.5 border border-border/60">
            {group.eyebrow}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, skillIdx) => (
            <motion.span
              key={skill}
              initial={
                prefersReduced ? false : { opacity: 0, scale: 0.8, y: 8 }
              }
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: skillIdx * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                prefersReduced
                  ? undefined
                  : {
                      y: -2,
                      scale: 1.06,
                    }
              }
              whileTap={prefersReduced ? undefined : { scale: 0.95 }}
              className="cursor-default rounded-xl border border-border/80 bg-surface-2/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-text-2 transition-colors duration-200 hover:text-text hover:border-accent/50 hover:bg-surface-2 hover:shadow-[0_0_14px_rgba(99,102,241,0.2)]"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
