import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillCategoryCard } from "@/components/sections/SkillCategoryCard";
import { skills } from "@/data";

const HEADING_ID = "skills-heading";

/**
 * Technical Skills Section — Technology Matrix
 * Categorized domains strictly derived from RESUME.md.
 * Server Component.
 */
export function Skills() {
  return (
    <SectionWrapper id="skills" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3 block">
            Technical Skills
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Engineering Competencies
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Production-grade competencies across backend runtimes, distributed
            databases, cloud services, and frontend web architectures.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <AnimatedSection key={group.category} delay={index * 0.05}>
            <SkillCategoryCard group={group} />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
