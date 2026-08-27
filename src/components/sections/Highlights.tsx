import { Users, Radio, Cpu, Database } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const impactItems = [
  {
    icon: Users,
    value: "1,000+",
    title: "Concurrent Users",
    description: "High-concurrency B2B gaming platform",
  },
  {
    icon: Radio,
    value: "Real-Time",
    title: "Socket.io Systems",
    description: "Live game states, leaderboard & results broadcast",
  },
  {
    icon: Cpu,
    value: "AWS SQS",
    title: "Async Processing",
    description: "Worker-based decoupled round settlement",
  },
  {
    icon: Database,
    value: "Redis",
    title: "High-Frequency Caching",
    description: "Sub-millisecond leaderboard & state lookups",
  },
];

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
      aria-label="Engineering Impact"
      className="py-8 sm:py-14"
    >
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 sm:p-10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            {/* Eyebrow Label */}
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                Engineering Impact
              </span>
            </div>

            {/* 4-column metric grid with clean dividers */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/60">
              {impactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex flex-col justify-between ${
                      index === 0
                        ? "lg:pr-8"
                        : index === 3
                          ? "lg:pl-8"
                          : "lg:px-8"
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                          <Icon size={17} aria-hidden="true" />
                        </div>
                      </div>

                      <p className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                        {item.value}
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
