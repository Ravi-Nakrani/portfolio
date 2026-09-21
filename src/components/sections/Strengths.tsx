import { Lightbulb, Shield, Users2, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { strengths } from "@/data";

const HEADING_ID = "strengths-heading";

const strengthIcons = [Lightbulb, Shield, Users2, Sparkles];

/**
 * Professional Strengths Section
 * Working practices from RESUME.md, presented as supporting content.
 * Server Component — no client-side state needed.
 */
export function Strengths() {
  return (
    <SectionWrapper id="strengths" labelledBy={HEADING_ID}>
      <AnimatedSection variant="fade-up">
        <SectionHeading
          eyebrow="Core Principles"
          title="How I Work"
          id={HEADING_ID}
          level="secondary"
        />
      </AnimatedSection>

      {/* Deliberately chrome-less: supporting content, so it reads as a quiet
          row of statements rather than a fourth grid of heavy cards. */}
      <div className="grid gap-x-10 gap-y-8 border-t border-border/60 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((strength, index) => {
          const Icon = strengthIcons[index % strengthIcons.length] ?? Sparkles;

          return (
            <AnimatedSection
              key={strength.name}
              delay={index * 0.06}
              variant="fade-up"
            >
              <div className="group">
                <Icon
                  size={17}
                  className="text-accent-2 transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-text">
                  {strength.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-2">
                  {strength.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
