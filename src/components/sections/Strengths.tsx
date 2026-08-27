import { Lightbulb, Shield, Users2, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { strengths } from "@/data";

const HEADING_ID = "strengths-heading";

const strengthIcons = [Lightbulb, Shield, Users2, Sparkles];

/**
 * Professional Strengths Section — Editorial Grid
 * Core engineering behaviors derived directly from RESUME.md.
 * Server Component.
 */
export function Strengths() {
  return (
    <SectionWrapper id="strengths" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2 mb-2 block">
            Core Strengths
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Engineering Mindset
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Execution practices that guarantee team velocity, feature ownership,
            and reliable system delivery.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((strength, index) => {
          const Icon = strengthIcons[index % strengthIcons.length] ?? Sparkles;

          return (
            <AnimatedSection key={strength.name} delay={index * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-200 hover:border-border-focus/50 hover:bg-surface-2/60 shadow-sm">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-dim text-accent">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-bold text-text-3">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-bold text-text">
                    {strength.name}
                  </h3>

                  <p className="text-xs leading-relaxed text-text-2">
                    {strength.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
