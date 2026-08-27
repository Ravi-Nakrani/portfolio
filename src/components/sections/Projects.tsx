import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { otherProjects } from "@/data";

const HEADING_ID = "projects-heading";

/**
 * Projects Section — Editorial Showcase
 * Represents enterprise applications and platform systems: Urban Genba, LocumFind, Gajari.
 * Server Component.
 */
export function Projects() {
  return (
    <SectionWrapper id="projects" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3 block">
            Selected Works
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Other Projects
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Enterprise platforms, real-time web applications, and operational
            workflow systems delivering complex interfaces and dependable
            performance.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <AnimatedSection key={project.name} delay={index * 0.08}>
            <ProjectCard project={project} index={index + 1} />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
