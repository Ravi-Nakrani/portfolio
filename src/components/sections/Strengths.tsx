"use client";

import { Lightbulb, Shield, Users2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { strengths } from "@/data";

const HEADING_ID = "strengths-heading";

const strengthIcons = [Lightbulb, Shield, Users2, Sparkles];

/**
 * Professional Strengths Section — Editorial Grid
 * Core engineering behaviors derived directly from RESUME.md.
 * Client Component.
 */
export function Strengths() {
  const prefersReduced = useReducedMotion();

  return (
    <SectionWrapper id="strengths" labelledBy={HEADING_ID}>
      <AnimatedSection variant="fade-up">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
              Core Principles
            </span>
          </div>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Engineering Strengths
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Execution practices that guarantee velocity, feature ownership, and
            reliable system delivery in agile engineering environments.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((strength, index) => {
          const Icon = strengthIcons[index % strengthIcons.length] ?? Sparkles;

          return (
            <AnimatedSection
              key={strength.name}
              delay={index * 0.07}
              variant="fade-scale"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.2)]"
              >
                {/* Top animated line shimmer */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
                  aria-hidden="true"
                />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <motion.div
                      initial={
                        prefersReduced
                          ? false
                          : { rotate: -120, scale: 0, opacity: 0 }
                      }
                      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.1 + index * 0.07,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </motion.div>
                    <motion.span
                      initial={prefersReduced ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.07, duration: 0.3 }}
                      className="font-mono text-xs font-bold text-accent-2/70 group-hover:text-accent-2 transition-colors"
                    >
                      0{index + 1}
                    </motion.span>
                  </div>

                  <h3 className="mb-2 text-base font-bold text-text group-hover:text-accent-2 transition-colors duration-200">
                    {strength.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-text-2">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
