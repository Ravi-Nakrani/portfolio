"use client";

import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education } from "@/data";

const HEADING_ID = "education-heading";

/**
 * Education Section — Minimalist Editorial Timeline
 * Academic background strictly verified from RESUME.md.
 * Client Component.
 */
export function Education() {
  const prefersReduced = useReducedMotion();

  return (
    <SectionWrapper id="education" labelledBy={HEADING_ID}>
      <AnimatedSection variant="fade-up">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
              Education
            </span>
          </div>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Academic Background
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Foundational academic qualifications and university degree.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
        {education.map((entry, index) => (
          <AnimatedSection
            key={entry.institution}
            delay={index * 0.08}
            variant="fade-scale"
          >
            <motion.div
              whileHover={prefersReduced ? undefined : { y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="group relative flex h-full items-start gap-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.2)]"
            >
              {/* Top animated line shimmer */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
                aria-hidden="true"
              />

              <motion.div
                initial={
                  prefersReduced
                    ? false
                    : { scale: 0.8, rotate: -15, opacity: 0 }
                }
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  delay: 0.1 + index * 0.08,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_14px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110"
              >
                <GraduationCap size={20} aria-hidden="true" />
              </motion.div>

              <div className="min-w-0 flex-1">
                <span className="font-mono text-xs font-bold text-accent-2 rounded-md bg-surface-2/60 px-2 py-0.5 border border-border/60">
                  {entry.year}
                </span>
                <h3 className="text-lg font-bold text-text mt-2 group-hover:text-accent-2 transition-colors duration-200">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-text-2 leading-relaxed">
                  {entry.institution}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
