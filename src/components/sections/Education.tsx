import { GraduationCap } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education } from "@/data";

const HEADING_ID = "education-heading";

/**
 * Education Section — Clean Timeline
 * Academic background strictly verified from RESUME.md.
 * Server Component.
 */
export function Education() {
  return (
    <SectionWrapper id="education" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2 mb-2 block">
            Education
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Academic Background
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Foundational academic qualifications and university degree.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
        {education.map((entry, index) => (
          <AnimatedSection key={entry.institution} delay={index * 0.08}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all hover:border-border-focus/50 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent">
                <GraduationCap size={20} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs font-bold text-accent-2">
                      {entry.year}
                    </span>
                    <h3 className="text-base font-bold text-text mt-0.5">
                      {entry.degree}
                    </h3>
                    <p className="mt-1 text-xs text-text-2 leading-relaxed">
                      {entry.institution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
