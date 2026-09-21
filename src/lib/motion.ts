import type { Transition, Variants } from "motion/react";

/**
 * Shared motion system.
 * Centralised, reusable Framer Motion variants and transitions so animation
 * intent stays consistent across the site instead of being redefined per component.
 */

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];
export const easeOutSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 28,
  mass: 0.6,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.7,
};

/** Default viewport config for scroll-triggered reveals — fires once, slightly before fully visible. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSoft },
  },
};

export const slideUpLg: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutSoft },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

/** Parent container — stagger children on mount or on scroll into view. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Child item to pair with staggerContainer — fade + rise. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

/** Subtle lift for interactive cards/chips — pair with whileHover. */
export const hoverLift = { y: -4, transition: springSnappy };
export const hoverLiftSm = { y: -2, transition: springSnappy };
export const tapScale = { scale: 0.97 };
