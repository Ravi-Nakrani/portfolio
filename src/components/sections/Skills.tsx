"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SkillCategoryCard } from "@/components/sections/SkillCategoryCard";
import { skills } from "@/data";

const HEADING_ID = "skills-heading";

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Technical Skills Section — Technology Matrix
 * Categorized domains strictly derived from RESUME.md.
 * Enhanced with sequenced Motion choreography, ambient technical depth,
 * and high-performance micro-interactions.
 */
export function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <SectionWrapper
      id="skills"
      labelledBy={HEADING_ID}
      className="relative overflow-hidden"
    >
      {/* Ambient background depth: subtle technical dot grid with radial fade */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-25 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_55%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Low-opacity ambient backlight anchoring the matrix */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/4 blur-[130px] rounded-full -z-10"
        aria-hidden="true"
      />

      {/* Section Header with sequenced entrance choreography */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={headerContainerVariants}
        className="mb-14"
      >
        {/* 1. Section Eyebrow */}
        <motion.div
          variants={headerItemVariants}
          className="mb-3 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
            Technical Skills
          </span>
        </motion.div>

        {/* 2. Section Heading */}
        <motion.h2
          id={HEADING_ID}
          variants={headerItemVariants}
          className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          Engineering Competencies
        </motion.h2>

        {/* 3. Section Description */}
        <motion.p
          variants={headerItemVariants}
          className="mt-3 max-w-2xl text-base text-text-2"
        >
          Production-grade competencies across backend runtimes, distributed
          databases, cloud services, and frontend web architectures.
        </motion.p>
      </motion.div>

      {/* 3x2 Grid with sequential card stagger */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={
              prefersReduced ? false : { opacity: 0, y: 24, scale: 0.98 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: prefersReduced ? 0 : index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
          >
            <SkillCategoryCard group={group} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
