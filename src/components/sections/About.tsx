"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Crosshair,
  Briefcase,
  Code,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data";

const HEADING_ID = "about-heading";

/**
 * About Section — Editorial Narrative & Structured Profile
 * Two-column desktop composition:
 * Left: Eyebrow micro-label, bold statement heading, readable narrative, interactive strength pills, CTA.
 * Right: Profile information & quick facts block with staggered row reveals.
 * Client Component with parallax depth.
 */
export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [20, -20]
  );
  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [-15, 15]
  );

  const factsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: prefersReduced ? 0 : 0.1,
      },
    },
  };

  const factRowVariants: Variants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const strengthsList = [
    "Problem Solving",
    "End-to-End Ownership",
    "Collaborative Delivery",
  ];

  return (
    <SectionWrapper id="about" labelledBy={HEADING_ID}>
      <div ref={sectionRef}>
        <AnimatedSection variant="fade-up">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* ── Left Column: Professional Narrative (7 cols) ── */}
            <motion.div
              style={{ y: leftY }}
              className="flex flex-col items-start lg:col-span-7"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                  About Me
                </span>
              </div>

              <h2
                id={HEADING_ID}
                className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
              >
                Building systems that scale.
              </h2>

              <div className="mt-6 flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-text-2">
                <p>
                  Full-stack software engineer with{" "}
                  <span className="font-semibold text-text border-b border-accent/40 pb-0.5">
                    {personal.yearsOfExperience} years of experience
                  </span>{" "}
                  building scalable web applications and real-time systems using{" "}
                  <span className="font-semibold text-text">
                    TypeScript, Node.js, NestJS, React, and Next.js
                  </span>
                  .
                </p>
                <p>
                  Specialized in high-concurrency platforms, transactional
                  integrity, REST APIs, WebSocket architectures, Redis caching,
                  and asynchronous event pipelines with AWS SQS.
                </p>
              </div>

              {/* Editorial Strengths Line with Spring Physics Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-xs sm:text-sm font-medium text-text-2">
                {strengthsList.map((strength) => (
                  <motion.span
                    key={strength}
                    whileHover={
                      prefersReduced
                        ? undefined
                        : {
                            y: -3,
                            scale: 1.05,
                            boxShadow: "0 6px 20px rgba(99,102,241,0.25)",
                          }
                    }
                    whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group flex cursor-default items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3.5 py-1 text-text transition-colors duration-200 hover:border-accent/50 hover:bg-surface"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
                    {strength}
                  </motion.span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  href="#experience"
                  variant="secondary"
                  size="md"
                  className="gap-2"
                >
                  Explore Experience
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </motion.div>

            {/* ── Right Column: Structured Profile Facts (5 cols) ── */}
            <motion.div style={{ y: rightY }} className="w-full lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.2)]">
                {/* Animated top-edge line shimmer */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
                  aria-hidden="true"
                />

                <motion.div
                  variants={factsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="divide-y divide-border/60"
                >
                  {/* Experience */}
                  <motion.div
                    variants={factRowVariants}
                    className="group flex items-start gap-4 pb-4.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-surface-2/60 hover:pl-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110">
                      <Calendar size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                        Experience
                      </p>
                      <p className="mt-0.5 text-base font-bold text-text">
                        {personal.yearsOfExperience} Years Professional
                      </p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    variants={factRowVariants}
                    className="group flex items-start gap-4 py-4.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-surface-2/60 hover:pl-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110">
                      <MapPin size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                        Location
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-text">
                        {personal.location}
                      </p>
                    </div>
                  </motion.div>

                  {/* Focus */}
                  <motion.div
                    variants={factRowVariants}
                    className="group flex items-start gap-4 py-4.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-surface-2/60 hover:pl-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110">
                      <Crosshair size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                        Core Specialization
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-text">
                        Real-Time Systems &amp; Backend Scale
                      </p>
                    </div>
                  </motion.div>

                  {/* Stack */}
                  <motion.div
                    variants={factRowVariants}
                    className="group flex items-start gap-4 py-4.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-surface-2/60 hover:pl-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110">
                      <Code size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                        Primary Stack
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-text">
                        TypeScript, Node.js, NestJS, React, PostgreSQL
                      </p>
                    </div>
                  </motion.div>

                  {/* Currently */}
                  <motion.div
                    variants={factRowVariants}
                    className="group flex items-start gap-4 pt-4.5 rounded-xl p-2 -mx-2 transition-all duration-200 hover:bg-surface-2/60 hover:pl-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110">
                      <Briefcase size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                        Current Engagement
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-text">
                        Full-Stack Developer at Tagline Infotech
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
