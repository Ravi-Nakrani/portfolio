"use client";

import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          id={HEADING_ID}
          level="secondary"
        />
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
        {education.map((entry, index) => (
          <AnimatedSection
            key={entry.institution}
            delay={index * 0.08}
            variant="fade-scale"
          >
            <motion.div
              whileHover={prefersReduced ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="card-surface group relative flex h-full items-start gap-4 overflow-hidden rounded-3xl p-6 sm:p-7 transition-colors duration-300 hover:border-border-focus/40"
            >
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
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-dim text-accent-2 border border-accent/30 transition-transform duration-200 group-hover:scale-110"
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
