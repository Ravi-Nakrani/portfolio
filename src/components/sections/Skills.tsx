"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SkillCategoryCard } from "@/components/sections/SkillCategoryCard";
import { coreStack, skills } from "@/data";

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

      {/* ── Core stack: the primary technologies, given real weight so the
          section opens with a point of view instead of a flat pill wall ── */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 border-y border-border/60 py-8"
      >
        <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-text-3">
          Core Stack
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12">
          {coreStack.map((tech) => (
            <span
              key={tech}
              className="font-display text-xl font-semibold tracking-tight text-text transition-colors duration-200 hover:text-accent-2 sm:text-2xl lg:text-3xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Full capability breakdown — cards match row height so a shorter
          category (e.g. Languages) doesn't leave a jagged, uneven grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: prefersReduced ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SkillCategoryCard group={group} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
