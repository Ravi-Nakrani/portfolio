"use client";

import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experience } from "@/data";

const HEADING_ID = "experience-heading";

/**
 * Experience Section — Professional History
 * Highlights sole professional tenure at Tagline Infotech,
 * subordinate Selected Work list (01-04), and core Engineering Contributions.
 * Client Component.
 */
export function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <SectionWrapper id="experience" labelledBy={HEADING_ID}>
      {/* ── Section Header ── */}
      <AnimatedSection variant="fade-up">
        <div className="mb-12 sm:mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
              Professional History
            </span>
          </div>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Engineering scalable backend architectures, high-concurrency
            systems, real-time communication layers, and enterprise web
            applications.
          </p>
        </div>
      </AnimatedSection>

      {/* ── Main Employer Container: Tagline Infotech ── */}
      <AnimatedSection delay={0.1} variant="fade-up">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.25)]">
          {/* Top animated line shimmer */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
            aria-hidden="true"
          />

          {/* Header Row: Company, Role, Tenure, Location */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-border/60 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
                  {experience.company}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-dim px-3 py-0.5 text-xs font-semibold text-accent-2 border border-accent/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Current
                </span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-accent-2 mt-1.5">
                {experience.role}
              </p>
            </div>

            <div className="flex flex-col sm:items-end font-mono text-xs sm:text-sm text-text-3">
              <span className="rounded-md bg-surface-2/70 px-2.5 py-1 border border-border/70 text-text font-semibold">
                {experience.startDate} — {experience.endDate}
              </span>
              <span className="flex items-center gap-1.5 mt-1.5 font-sans text-xs text-text-3">
                <MapPin size={13} className="text-accent" aria-hidden="true" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-text-2">
            {experience.summary}
          </p>

          {/* ── SUBSECTION: SELECTED WORK ── */}
          <div className="mt-12 pt-8 border-t border-border/60">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                  Selected Work
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-text-3">
                  Work and systems engineered during tenure at{" "}
                  {experience.company}.
                </p>
              </div>
            </div>

            {/* Editorial List (01 - 04) with high-end interactive card styling */}
            <div className="divide-y divide-border/60 border-y border-border/60">
              {experience.selectedWork.map((work, index) => {
                const formattedIndex = String(index + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={work.id}
                    initial={prefersReduced ? false : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative py-6 sm:py-7 transition-all duration-300 hover:bg-surface-2/40 px-4 sm:px-6 rounded-2xl -mx-4 sm:-mx-6 hover:shadow-lg"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 sm:items-start">
                      {/* Monospace Number Index with Scale Animation */}
                      <div className="sm:col-span-1">
                        <span className="inline-block font-mono text-sm sm:text-base font-bold text-accent-2/70 group-hover:text-accent-2 group-hover:scale-125 transition-transform duration-200 origin-left">
                          {formattedIndex}
                        </span>
                      </div>

                      {/* Work Content */}
                      <div className="sm:col-span-11">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h5 className="text-lg sm:text-xl font-bold text-text transition-all duration-200 group-hover:text-accent-2 group-hover:translate-x-1">
                            {work.title}
                          </h5>
                          {work.category && (
                            <span className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold rounded-md bg-surface-2/70 px-2 py-0.5 border border-border/60">
                              {work.category}
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-2 max-w-3xl">
                          {work.description}
                        </p>

                        {/* Interactive Tech Stack Chips */}
                        <div className="mt-3.5 flex flex-wrap items-center gap-1.5 font-mono text-xs sm:text-sm">
                          {work.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={
                                prefersReduced
                                  ? false
                                  : { opacity: 0, scale: 0.85 }
                              }
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.05 + techIdx * 0.02,
                                duration: 0.3,
                              }}
                              whileHover={
                                prefersReduced
                                  ? undefined
                                  : { y: -2, scale: 1.06 }
                              }
                              className="cursor-default rounded-lg border border-border/60 bg-surface/60 px-2.5 py-1 text-xs text-text-3 transition-colors duration-150 group-hover:border-accent/40 group-hover:text-text-2 hover:border-accent hover:text-accent-2 hover:bg-surface-2"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── SUBSECTION: ENGINEERING CONTRIBUTIONS ── */}
          <div className="mt-12 pt-8 border-t border-border/60">
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                Engineering Contributions
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-text-3">
                Core technical contributions, architectural solutions, and
                engineering impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {experience.contributions.map((contribution, idx) => (
                <motion.div
                  key={idx}
                  initial={prefersReduced ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-3 rounded-2xl border border-border/70 bg-surface-2/40 p-4 text-xs sm:text-sm text-text-2 leading-relaxed transition-all duration-200 hover:border-accent/40 hover:bg-surface-2/70 hover:shadow-sm"
                >
                  <motion.span
                    initial={prefersReduced ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      bounce: 0.6,
                      delay: 0.1 + idx * 0.04,
                    }}
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgba(99,102,241,0.8)] transition-transform duration-200 group-hover:scale-125"
                    aria-hidden="true"
                  />
                  <span className="group-hover:text-text transition-colors duration-150">
                    {contribution}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
