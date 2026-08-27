import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { HeroArchitectureVisual } from "@/components/sections/HeroArchitectureVisual";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

/**
 * Hero Section — Redesigned
 * Two-column desktop layout:
 * Left: Typographic micro-label, massive name heading, concise positioning statement,
 * clean technology line, CTA buttons, social links.
 * Right: Technical Architecture Ecosystem visualization.
 */
export function Hero() {
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);
  const hasEmail = Boolean(personal.email);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-[calc(var(--header-height)+2rem)] pb-16 md:pt-[calc(var(--header-height)+3rem)] md:pb-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative">
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
              {/* Eyebrow Micro-label */}
              <span className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                Full-Stack Software Engineer
              </span>

              {/* Huge Name Heading */}
              <h1 className="text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-8xl">
                Ravi <span className="gradient-text">Nakrani</span>
              </h1>

              {/* Impact Statement */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-2 sm:text-lg lg:text-xl">
                Building scalable web applications and real-time systems that
                serve thousands of users with high performance, reliability, and
                clean architecture.
              </p>

              {/* Clean Technology Line */}
              <div className="mt-6 flex flex-wrap items-center gap-y-1 gap-x-2.5 font-mono text-xs sm:text-sm text-text-3">
                <span className="text-text font-medium">React</span>
                <span>·</span>
                <span className="text-text font-medium">Next.js</span>
                <span>·</span>
                <span className="text-text font-medium">Node.js</span>
                <span>·</span>
                <span className="text-text font-medium">NestJS</span>
                <span>·</span>
                <span className="text-text font-medium">TypeScript</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  className="gap-2 shadow-[0_0_25px_rgba(99,102,241,0.35)]"
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
