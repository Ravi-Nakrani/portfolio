"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HeroPhoto } from "@/components/sections/HeroPhoto";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

/**
 * Hero Section
 * High-impact entrance orchestration with staggered Motion elements.
 * Two-column desktop layout:
 * Left: Typographic micro-label, massive name heading, concise positioning statement,
 * clean technology line, CTA buttons, social links.
 * Right: Professional portrait photo presentation with glassmorphism, ambient glow, and floating badges.
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);
  const hasEmail = Boolean(personal.email);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.12,
        delayChildren: prefersReduced ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : 20,
      filter: prefersReduced ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techStack = ["React", "Next.js", "Node.js", "NestJS", "TypeScript"];

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-16 md:pt-[calc(var(--header-height)+3.5rem)] md:pb-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* ── Left Column: Identity & Positioning (7 cols) ── */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Eyebrow Micro-label */}
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Full-Stack Software Engineer
                </span>
              </motion.div>

              {/* Massive Name Heading with Word-by-Word Reveal */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap gap-x-4"
              >
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={prefersReduced ? false : { y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Ravi
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block gradient-text"
                    initial={prefersReduced ? false : { y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.28,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Nakrani
                  </motion.span>
                </span>
              </motion.h1>

              {/* Impact Statement */}
              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-base leading-relaxed text-text-2 sm:text-lg lg:text-xl"
              >
                Building scalable web applications and real-time systems that
                serve thousands of users with high performance, reliability, and
                clean architecture.
              </motion.p>

              {/* Clean Technology Line with Interactive Spring Pills */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-2 font-mono text-xs sm:text-sm text-text-3"
              >
                {techStack.map((tech, i) => (
                  <div key={tech} className="flex items-center gap-2">
                    <motion.span
                      whileHover={
                        prefersReduced ? undefined : { y: -2, scale: 1.05 }
                      }
                      whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="cursor-default rounded-md border border-border/60 bg-surface/50 px-2.5 py-1 text-text font-medium transition-colors hover:border-accent/50 hover:bg-surface-2/80 hover:text-accent-2 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                    >
                      {tech}
                    </motion.span>
                    {i < techStack.length - 1 && (
                      <span className="text-border-focus/40 select-none">
                        ·
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button
                  href="#experience"
                  variant="primary"
                  size="lg"
                  className="gap-2 animate-shimmer"
                >
                  Explore Experience
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="gap-2"
                >
                  Let&apos;s Connect
                  <Mail size={16} aria-hidden="true" />
                </Button>
              </motion.div>

              {/* Social Links Row with Spring Physics Hover */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex items-center gap-3"
              >
                {hasGithub && (
                  <motion.a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    whileHover={
                      prefersReduced ? undefined : { y: -3, scale: 1.08 }
                    }
                    whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface/80 text-text-2 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2 hover:text-text hover:shadow-[0_0_18px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <GithubIcon size={17} aria-hidden="true" />
                  </motion.a>
                )}
                {hasLinkedIn && (
                  <motion.a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    whileHover={
                      prefersReduced ? undefined : { y: -3, scale: 1.08 }
                    }
                    whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface/80 text-text-2 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2 hover:text-text hover:shadow-[0_0_18px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <LinkedinIcon size={17} aria-hidden="true" />
                  </motion.a>
                )}
                {hasEmail && (
                  <motion.a
                    href={`mailto:${personal.email}`}
                    aria-label="Send Email"
                    whileHover={
                      prefersReduced ? undefined : { y: -3, scale: 1.08 }
                    }
                    whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface/80 text-text-2 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2 hover:text-text hover:shadow-[0_0_18px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Mail size={17} aria-hidden="true" />
                  </motion.a>
                )}
              </motion.div>
            </div>

            {/* ── Right Column: Portrait Photo & Floating Status (5 cols) ── */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:col-span-5 flex justify-center lg:justify-end"
            >
              <HeroPhoto />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
