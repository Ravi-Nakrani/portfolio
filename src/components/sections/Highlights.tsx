import { Users, Zap, Cpu, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { EngineeringHighlight } from "@/types";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { engineeringHighlights } from "@/data";

const iconMap: Record<EngineeringHighlight["iconName"], LucideIcon> = {
  users: Users,
  zap: Zap,
  cpu: Cpu,
  database: Database,
};

/**
 * Engineering Impact Section
 * Cohesive editorial panel following the Hero.
 * Communicates core engineering metrics and architectural achievements.
 * Server Component.
 */
export function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="py-8 sm:py-14"
    >
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 sm:p-10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            {/* Eyebrow Label */}
            <div className="mb-8 flex items-center justify-between">
              <h2
                id="highlights-heading"
                className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2"
              >
                Engineering Impact
              </h2>
            </div>

            {/* 4-column metric grid with clean dividers */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:divide-x lg:divide-border/60">
              {engineeringHighlights.map((item, index) => {
                const Icon = iconMap[item.iconName];
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col justify-between ${
                      index % 2 === 0 ? "lg:px-8" : "lg:pr-8"
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                          <Icon size={17} aria-hidden="true" />
                        </div>
                      </div>

                      <p className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                        {item.metric}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold uppercase tracking-wider text-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
