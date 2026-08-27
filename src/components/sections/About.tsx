import {
  ArrowRight,
  Calendar,
  MapPin,
  Crosshair,
  Briefcase,
  Code,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data";

/**
 * About Section — Editorial Redesign
 * Two-column desktop composition:
 * Left: Eyebrow micro-label, bold statement heading, readable narrative, subtle strength indicators, CTA.
 * Right: Profile information & quick facts block with clean row dividers.
 * Server Component.
 */
export function About() {
  return (
    <SectionWrapper id="about">
      <AnimatedSection>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ── Left Column: Professional Narrative (7 cols) ── */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3">
              About Me
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Building systems that scale.
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-text-2">
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
                Specialized in high-concurrency platforms, transactional
                integrity, REST APIs, WebSocket architectures, Redis caching,
                and asynchronous event pipelines with AWS SQS.
              </p>
            </div>

            {/* Editorial Strengths Line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-text-2">
              <span className="flex items-center gap-2 text-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Problem Solving
              </span>
              <span className="flex items-center gap-2 text-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                End-to-End Ownership
              </span>
              <span className="flex items-center gap-2 text-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Collaborative Delivery
              </span>
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
          </div>

          {/* ── Right Column: Structured Profile Facts (5 cols) ── */}
          <div className="w-full lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="divide-y divide-border/60">
                {/* Experience */}
                <div className="flex items-start gap-4 pb-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                    <Calendar size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                      Experience
                    </p>
                    <p className="mt-0.5 text-base font-bold text-text">
                      {personal.yearsOfExperience}+ Years Professional
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 py-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                    <MapPin size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                      Location
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start gap-4 py-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                    <Crosshair size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                      Core Specialization
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text">
                      Real-Time Systems &amp; Backend Scale
                    </p>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex items-start gap-4 py-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                    <Code size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                      Primary Stack
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text">
                      TypeScript, Node.js, NestJS, React, PostgreSQL
                    </p>
                  </div>
                </div>

                {/* Currently */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                    <Briefcase size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                      Current Engagement
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text">
                      Full-Stack Developer at Tagline Infotech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
