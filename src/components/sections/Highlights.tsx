"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Zap, Cpu, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useInView,
  animate,
  type Variants,
} from "motion/react";
import type { EngineeringHighlight } from "@/types";
import { Container } from "@/components/layout/Container";
import { engineeringHighlights } from "@/data";

const iconMap: Record<EngineeringHighlight["iconName"], LucideIcon> = {
  users: Users,
  zap: Zap,
  cpu: Cpu,
  database: Database,
};

function MetricDisplay({ metric }: { metric: string }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Check if metric has a numeric part like "1,000+"
  const match = metric.match(/^([\d,]+)(\+?.*)$/);
  const targetNum = match ? parseInt(match[1].replace(/,/g, ""), 10) : NaN;
  const isNumeric = !isNaN(targetNum);
  const suffix = match ? match[2] : "";

  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    if (!isNumeric || prefersReduced || !isInView) return;

    const controls = animate(0, targetNum, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayVal(Math.round(latest).toLocaleString());
      },
    });

    return () => controls.stop();
  }, [isInView, isNumeric, targetNum, prefersReduced]);

  if (!isNumeric || prefersReduced) {
    return <span>{metric}</span>;
  }

  return (
    <span ref={ref}>
      <span>{displayVal}</span>
      {suffix}
    </span>
  );
}

/**
 * Engineering Impact Section
 * Editorial showcase panel with animated metric reveals, glassmorphic styling,
 * glowing icon nodes, and subtle hover interactions.
 */
export function Highlights() {
  const prefersReduced = useReducedMotion();

  // The first highlight is the only quantified one — it earns display type.
  const [featured, ...supporting] = engineeringHighlights;

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: prefersReduced ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="py-8 sm:py-14 relative"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-[var(--shadow-lg)]"
        >
          {/* Animated top-edge line shimmer */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
            aria-hidden="true"
          />

          {/* Eyebrow Label */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h2
                id="highlights-heading"
                className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2"
              >
                Engineering Impact
              </h2>
            </div>
            <span className="font-mono text-xs text-text-3 hidden sm:inline-block">
              01 — 04
            </span>
          </div>

          {/* Asymmetric layout: the one hard number is featured; the rest are
              presented as capabilities rather than faux-metrics. */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ── Featured metric ── */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 lg:border-r lg:border-border/60 lg:pr-10"
            >
              <p className="font-display text-6xl font-semibold tracking-tight text-text sm:text-7xl">
                <MetricDisplay metric={featured.metric} />
              </p>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-accent-2">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-2">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[11px] text-text-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Supporting capabilities ── */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-border/60">
              {supporting.map((item) => {
                const Icon = iconMap[item.iconName];
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="group flex items-start gap-4 py-5 first:pt-0 last:pb-0 sm:gap-5"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent-dim text-accent-2 transition-transform duration-200 group-hover:scale-110">
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-base font-semibold text-text sm:text-lg">
                          {item.title}
                        </h3>
                        <span className="rounded-md border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-text-3">
                          {item.metric}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
