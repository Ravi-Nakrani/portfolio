"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

export type AnimationVariant =
  | "fade-up"
  | "fade-scale"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "blur-up"
  | "blur-scale"
  | "slide-up-spring"
  | "rotate-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  viewportMargin?: string;
}

const variantsMap: Record<AnimationVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-scale": {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "blur-scale": {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "slide-up-spring": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -3, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
};

/**
 * AnimatedSection — Smooth, rich scroll entrance orchestration.
 * Respects prefers-reduced-motion with instant visibility fallback.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.55,
  variant = "fade-up",
  viewportMargin = "-50px",
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariants = variantsMap[variant] || variantsMap["fade-up"];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin as `${number}px` }}
      variants={selectedVariants}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
