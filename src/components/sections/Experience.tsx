import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ExperienceItem } from "@/components/sections/ExperienceItem";
import { experience } from "@/data";

const HEADING_ID = "experience-heading";

/**
 * Experience Section — Editorial Timeline
 * Chronological work history and technical training.
 * Server Component.
 */
export function Experience() {
  return (
    <SectionWrapper id="experience" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2 mb-2 block">
            Experience
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Building real-world systems and delivering engineering impact.
          </p>
        </div>
      </AnimatedSection>

      <div className="relative flex flex-col pl-2 sm:pl-4">
        {experience.map((entry, index) => (
          <AnimatedSection
            key={`${entry.company}-${index}`}
            delay={index * 0.08}
          >
            <ExperienceItem
              entry={entry}
              isLast={index === experience.length - 1}
              isFirst={index === 0}
            />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
