"use client";

import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import { HeroPhoto } from "@/components/sections/HeroPhoto";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { usePointerFine } from "@/hooks/usePointerFine";
import { useTypewriter } from "@/hooks/useTypewriter";
import { easeOutSoft, springSnappy } from "@/lib/motion";
import { personal } from "@/data";

const ROLE_WORDS = [
  "Full-Stack Developer",
  "MERN Developer",
  "Node.js Developer",
  "React Developer",
];

/**
 * Hero Section
 * Signature entrance moment: fine engineering-grid backdrop with a restrained
 * cursor-follow spotlight, staggered identity reveal, and a two-column layout
 * (positioning statement + portrait). The spotlight is the one place on the
 * site with a mouse-follow effect — deliberately not repeated page-wide.
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const isPointerFine = usePointerFine();
  const typedRole = useTypewriter(ROLE_WORDS);
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);
  const hasEmail = Boolean(personal.email);

  const sectionRef = useRef<HTMLElement>(null);
  const spotX = useMotionValue(-400);
  const spotY = useMotionValue(-400);
  const spotXSpring = useSpring(spotX, { damping: 30, stiffness: 120 });
  const spotYSpring = useSpring(spotY, { damping: 30, stiffness: 120 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotXSpring}px ${spotYSpring}px, rgba(99, 102, 241, 0.10), transparent 70%)`;

  const spotlightEnabled = isPointerFine && !prefersReduced;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!spotlightEnabled || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  }

  // Note: deliberately no `opacity` in these variants. Motion applies the
  // "hidden" state as an inline style during SSR, so an opacity-based hide
  // here would mean the hero (including the H1) paints invisible in the raw
  // server-rendered HTML and stays that way until JS hydrates. Content must
  // be visible on first paint; only its position settles once JS is ready.
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.1,
        delayChildren: prefersReduced ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: prefersReduced ? 0 : 14,
    },
    visible: {
      y: 0,
      transition: { duration: 0.6, ease: easeOutSoft },
    },
  };

  const techStack = ["Node.js", "NestJS", "React", "Next.js", "TypeScript"];

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex items-center overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-16 md:pt-[calc(var(--header-height)+3rem)] md:pb-20"
    >
      {/* ── Hero-scoped backdrop: fine grid + cursor spotlight ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-line-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_30%,transparent_85%)]"
        aria-hidden="true"
      />
      {spotlightEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
      )}

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
              {/* Massive Name Heading with Word-by-Word Reveal */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap gap-x-4"
              >
                <motion.span
                  className="inline-block"
                  initial={prefersReduced ? false : { y: 14 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.6,
                    ease: easeOutSoft,
                  }}
                >
                  Ravi
                </motion.span>
                <motion.span
                  className="inline-block gradient-text"
                  initial={prefersReduced ? false : { y: 14 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.16,
                    duration: 0.6,
                    ease: easeOutSoft,
                  }}
                >
                  Nakrani
                </motion.span>
              </motion.h1>

              {/* Animated Role — the primary title emphasis */}
              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-center gap-2.5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p
                  aria-hidden="true"
                  className="font-mono text-lg font-semibold text-accent-2 sm:text-xl lg:text-2xl"
                >
                  {typedRole}
                  {!prefersReduced && (
                    <span
                      className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.1em] animate-caret-blink bg-accent-2 align-middle"
                      aria-hidden="true"
                    />
                  )}
                </p>
                <span className="sr-only">
                  Full-Stack Developer — MERN, Node.js &amp; React
                </span>
              </motion.div>

              {/* Impact Statement */}
              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-xl text-base leading-relaxed text-text-2 sm:text-lg lg:text-xl"
              >
                Building scalable web applications and real-time systems that
                serve thousands of users with high performance, reliability, and
                clean architecture.
              </motion.p>

              {/* Clean Technology Line */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-2 font-mono text-xs sm:text-sm text-text-3"
              >
                {techStack.map((tech, i) => (
                  <div key={tech} className="flex items-center gap-2">
                    <motion.span
                      whileHover={prefersReduced ? undefined : { y: -2 }}
                      transition={springSnappy}
                      className="cursor-default rounded-md border border-border/60 bg-surface/40 px-2.5 py-1 text-text-2 font-medium transition-colors duration-200 hover:border-border-focus/50 hover:text-text"
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
                  className="gap-2"
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

              {/* Social Links Row */}
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
                    whileHover={prefersReduced ? undefined : { y: -2 }}
                    transition={springSnappy}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-text-2 transition-colors duration-200 hover:border-border-focus/60 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                    whileHover={prefersReduced ? undefined : { y: -2 }}
                    transition={springSnappy}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-text-2 transition-colors duration-200 hover:border-border-focus/60 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <LinkedinIcon size={17} aria-hidden="true" />
                  </motion.a>
                )}
                {hasEmail && (
                  <motion.a
                    href={`mailto:${personal.email}`}
                    aria-label="Send Email"
                    whileHover={prefersReduced ? undefined : { y: -2 }}
                    transition={springSnappy}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-text-2 transition-colors duration-200 hover:border-border-focus/60 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
