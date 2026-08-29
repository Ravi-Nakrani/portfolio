"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

function subscribePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * BackgroundOrbs Component
 * Atmospheric ambient lighting, scroll parallax orbs, smooth cursor-follow spotlight, and noise texture.
 * Enhances visual depth without distracting from content.
 * Gracefully disables dynamic movement if prefers-reduced-motion is active.
 */
export function BackgroundOrbs() {
  const prefersReduced = useReducedMotion();
  const isPointerDevice = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerSnapshot
  );

  const { scrollYProgress } = useScroll();
  const orb1Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -180]
  );
  const orb2Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -100]
  );
  const orb3Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -60]
  );

  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 500
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 500
  );

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isPointerDevice || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPointerDevice, prefersReduced, mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none noise-overlay"
      aria-hidden="true"
    >
      {/* ── Fixed Atmospheric Ambient Backdrops with Scroll Parallax ── */}
      {/* Top Center-Right Indigo Glow */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-accent/12 blur-[130px] opacity-75 animate-ambient-glow"
      />

      {/* Mid-Page Cyan/Blue Accent Glow */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[40vh] -left-32 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px] opacity-65"
      />

      {/* Bottom Subtle Violet Glow */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-[80vh] right-10 h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[140px] opacity-55"
      />

      {/* ── Desktop Cursor Multi-Stop Spotlight ── */}
      {isPointerDevice && !prefersReduced && (
        <motion.div
          className="absolute -top-44 -left-44 h-88 w-88 rounded-full blur-[80px]"
          style={{
            x: smoothX,
            y: smoothY,
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 80%)",
          }}
        />
      )}

      {/* Subtle full-page dot grid texture overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
}
