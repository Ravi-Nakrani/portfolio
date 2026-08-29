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
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
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

          {/* 4-column metric grid with clean dividers and hover interaction */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:divide-x lg:divide-border/60">
            {engineeringHighlights.map((item, index) => {
              const Icon = iconMap[item.iconName];
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={
                    prefersReduced ? undefined : { y: -4, scale: 1.01 }
                  }
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className={`group flex flex-col justify-between rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-surface-2/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.18)] ${
                    index % 2 === 0 ? "lg:px-8" : "lg:pl-8 lg:pr-4"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center">
                      <motion.div
                        initial={
                          prefersReduced
                            ? false
                            : { scale: 0.6, rotate: -30, opacity: 0 }
                        }
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          bounce: 0.4,
                          delay: index * 0.1,
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30 shadow-[0_0_14px_rgba(99,102,241,0.2)] transition-transform duration-200 group-hover:scale-110"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </motion.div>
                    </div>

                    <p className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl group-hover:text-accent-2 transition-colors duration-200">
                      <MetricDisplay metric={item.metric} />
                    </p>
                    <h3 className="mt-2 text-sm font-semibold uppercase tracking-wider text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
