import {
  ArrowRight,
  Sparkles,
  Zap,
  Users2,
  Calendar,
  MapPin,
  Crosshair,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data";

/**
 * About Section — Redesigned
 * Two-column desktop composition:
 * Left: Eyebrow, bold statement heading, narrative, strength pills, CTA.
 * Right: Structured information & quick facts panel.
 * Server Component.
 */
export function About() {
  return (
    <SectionWrapper id="about">
      <AnimatedSection>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── Left Column: Professional Narrative (7 cols) ── */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2 mb-3">
              About Me
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Building systems that scale.
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-text-2">
              <p>
                Full-stack software engineer with{" "}
                <span className="font-semibold text-text">
                  4+ years of experience
                </span>{" "}
                building scalable web applications and real-time systems using{" "}
                <span className="font-semibold text-text">
                  TypeScript, Node.js, NestJS, React, and Next.js
                </span>
                .
              </p>
              <p>
                Experienced in high-concurrency applications, transactional
                workflows, REST APIs, WebSocket-based systems, Redis caching,
                and async processing with AWS SQS.
              </p>
            </div>

            {/* Strengths Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text">
                <Sparkles
                  size={13}
                  className="text-accent"
                  aria-hidden="true"
                />
                <span>Problem Solver</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text">
                <Zap size={13} className="text-accent" aria-hidden="true" />
                <span>Ownership Driven</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text">
                <Users2 size={13} className="text-accent" aria-hidden="true" />
                <span>Collaborative</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                href="#experience"
                variant="secondary"
                size="md"
                className="gap-2"
              >
                More About Me
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* ── Right Column: Structured Quick Facts Panel (5 cols) ── */}
          <div className="w-full lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-6 sm:p-8 shadow-sm backdrop-blur-sm space-y-5">
              {/* Experience */}
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <Calendar size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-accent-2">
                    {personal.yearsOfExperience}+ Years
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <MapPin size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-text">
                    {personal.location}
                  </p>
                </div>
              </div>

              {/* Focus */}
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <Crosshair size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider">
                    Focus
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-text">
                    Backend • Frontend • DevOps
                  </p>
                </div>
              </div>

              {/* Strength */}
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <ShieldCheck size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider">
                    Strength
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-text">
                    Clean Code • Scalability • Performance
                  </p>
                </div>
              </div>

              {/* Currently */}
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <Briefcase size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider">
                    Currently
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-text">
                    Building scalable systems at Tagline Infotech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
