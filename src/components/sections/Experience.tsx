import { MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experience } from "@/data";

const HEADING_ID = "experience-heading";

/**
 * Experience Section — Professional History
 * Highlights sole professional tenure at Tagline Infotech,
 * subordinate Selected Work list (01-04), and core Engineering Contributions.
 * Server Component.
 */
export function Experience() {
  return (
    <SectionWrapper id="experience" labelledBy={HEADING_ID}>
      {/* ── Section Header ── */}
      <AnimatedSection>
        <div className="mb-12 sm:mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3 block">
            Professional History
          </span>
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
      <AnimatedSection delay={0.1}>
        <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-10 lg:p-12 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {/* Header Row: Company, Role, Tenure, Location */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-border/60 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
                  {experience.company}
                </h3>
                <span className="inline-flex items-center rounded-full bg-accent-dim px-2.5 py-0.5 text-xs font-semibold text-accent-2 border border-accent/20">
                  Current
                </span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-accent-2 mt-1.5">
                {experience.role}
              </p>
            </div>

            <div className="flex flex-col sm:items-end font-mono text-xs sm:text-sm text-text-3">
              <span className="text-text font-semibold">
                {experience.startDate} — {experience.endDate}
              </span>
              <span className="flex items-center gap-1.5 mt-1 font-sans text-xs text-text-3">
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
          <div className="mt-10 pt-8 border-t border-border/60">
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                Selected Work
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-text-3">
                Work and systems engineered during tenure at{" "}
                {experience.company}.
              </p>
            </div>

            {/* Editorial List (01 - 04) */}
            <div className="divide-y divide-border/60 border-y border-border/60">
              {experience.selectedWork.map((work, index) => {
                const formattedIndex = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={work.id}
                    className="group py-6 sm:py-7 transition-colors hover:bg-surface-2/30 px-3 sm:px-4 rounded-xl -mx-3 sm:-mx-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 sm:items-start">
                      {/* Monospace Number Index */}
                      <div className="sm:col-span-1">
                        <span className="font-mono text-sm sm:text-base font-bold text-accent-2">
                          {formattedIndex}
                        </span>
                      </div>

                      {/* Work Content */}
                      <div className="sm:col-span-11">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h5 className="text-lg sm:text-xl font-bold text-text transition-colors group-hover:text-accent-2">
                            {work.title}
                          </h5>
                          {work.category && (
                            <span className="font-mono text-xs uppercase tracking-wider text-text-3 font-semibold">
                              · {work.category}
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-2 max-w-3xl">
                          {work.description}
                        </p>

                        {/* Dot-separated Tech Stack */}
                        <div className="mt-3.5 flex flex-wrap items-center gap-y-1 gap-x-2 font-mono text-xs sm:text-sm text-text-3">
                          {work.technologies.map((tech, techIdx) => (
                            <span
                              key={tech}
                              className="flex items-center gap-2"
                            >
                              <span className="text-text-2 group-hover:text-text transition-colors">
                                {tech}
                              </span>
                              {techIdx < work.technologies.length - 1 && (
                                <span className="text-border-focus/70 select-none">
                                  ·
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── SUBSECTION: ENGINEERING CONTRIBUTIONS ── */}
          <div className="mt-10 pt-8 border-t border-border/60">
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
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-2/40 p-3.5 sm:p-4 text-xs sm:text-sm text-text-2 leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{contribution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
