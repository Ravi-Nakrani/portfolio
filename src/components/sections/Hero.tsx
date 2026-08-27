import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { HeroArchitectureVisual } from "@/components/sections/HeroArchitectureVisual";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

/**
 * Hero Section — Redesigned
 * Two-column desktop layout matching reference design:
 * Left: Eyebrow badge, massive name heading, statement, technology tags, CTA buttons, social links.
 * Right: Technical Architecture Ecosystem visualization.
 */
export function Hero() {
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);
  const hasEmail = Boolean(personal.email);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-[calc(var(--header-height)+2rem)] pb-12 md:pt-[calc(var(--header-height)+4rem)] md:pb-16"
    >
      <div className="mx-auto w-full max-w-6xl md:px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle ambient lighting */}
        <div
          className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-accent-2/10 blur-3xl"
          aria-hidden="true"
        />

        <AnimatedSection className="relative w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* ── Left Column: Identity & Positioning (7 cols) ── */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Eyebrow Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <Sparkles
                  size={13}
                  className="text-accent-2"
                  aria-hidden="true"
                />
                <span>Full-Stack Software Engineer</span>
              </div>

              {/* Huge Name Heading */}
              <h1 className="text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl">
                Ravi <span className="gradient-text">Nakrani</span>
              </h1>

              {/* Impact Statement */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-2 sm:text-lg lg:text-xl">
                I build scalable web applications and real-time systems that
                serve thousands of users with high performance, reliability and
                clean architecture.
              </p>

              {/* Technology Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text shadow-sm">
                  <Zap size={12} className="text-accent" aria-hidden="true" />
                  MERN Stack
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-2 shadow-sm">
                  Node.js
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-2 shadow-sm">
                  React
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-2 shadow-sm">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-2 shadow-sm">
                  TypeScript
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  className="gap-2 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                >
                  View Projects
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
              </div>

              {/* Social Links Row */}
              <div className="mt-8 flex items-center gap-3">
                {hasGithub && (
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-text hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <GithubIcon size={16} aria-hidden="true" />
                  </a>
                )}
                {hasLinkedIn && (
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-text hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <LinkedinIcon size={16} aria-hidden="true" />
                  </a>
                )}
                {hasEmail && (
                  <a
                    href={`mailto:${personal.email}`}
                    aria-label="Send Email"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-text hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Mail size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* ── Right Column: Technical Ecosystem Architecture (5 cols) ── */}
            <div className="w-full lg:col-span-5">
              <HeroArchitectureVisual />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
