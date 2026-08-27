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
    description: "Live game states, leaderboard & results broadcasting",
  },
  {
    icon: Cpu,
    value: "AWS SQS",
    title: "Async Processing",
    description: "Worker-based architecture for game round processing",
  },
  {
    icon: Database,
    value: "Redis",
    title: "High-Frequency Caching",
    description: "Improved performance for game & leaderboard data",
  },
];

/**
 * Engineering Impact Section
 * Cohesive horizontal panel directly following the Hero.
 * Communicates core engineering metrics and architectural achievements.
 * Server Component.
 */
export function Highlights() {
  return (
    <section
      id="highlights"
      aria-label="Engineering Impact"
      className="py-6 sm:py-10"
    >
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-4 sm:p-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            {/* Eyebrow Label */}
            <div className="mb-6 flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent-2">
                Engineering Impact
              </span>
            </div>

            {/* 4-column metric grid with subtle dividers */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/60">
              {impactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex flex-col justify-between ${
                      index === 0
                        ? "lg:pr-6"
                        : index === 3
                          ? "lg:pl-6"
                          : "lg:px-6"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-dim text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xl font-extrabold tracking-tight text-text sm:text-2xl">
                        {item.value}
                      </p>
                      <h3 className="mt-0.5 text-sm font-semibold text-text">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-text-2">
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
