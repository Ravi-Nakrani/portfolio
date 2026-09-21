"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Zap } from "lucide-react";
import { springSnappy } from "@/lib/motion";
import { personal } from "@/data";

/**
 * HeroPhoto Component
 * Portrait presentation: one elevated glass frame (the site's single most
 * "signature" surface), a static ambient glow, and two informational status
 * badges. Entrance-animated once — no idle looping motion, so it reads as
 * premium rather than restless.
 */
export function HeroPhoto() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] mx-auto select-none">
      {/* Static ambient glow — no pulsing loop */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
        aria-hidden="true"
      />

      {/* Main Glass Photo Frame — the one deliberately "elevated" surface in the hero.
          No opacity in `initial`: Motion applies it as an inline style during
          SSR, so the portrait must stay visible on first paint and only its
          scale/position should settle once JS is ready. */}
      <motion.div
        initial={{ scale: 0.97, y: prefersReduced ? 0 : 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/65 to-surface-2/85 p-3 sm:p-4 backdrop-blur-xl shadow-[var(--shadow-lg)] transition-colors duration-300 hover:border-accent/40"
      >
        {/* Portrait Image Frame */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/80 bg-surface-2 shadow-inner">
          <div className="relative h-full w-full">
            <Image
              src="/my_photo.png"
              alt={`${personal.name} — Full-Stack Developer`}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 440px"
              priority
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Cinematic bottom vignette */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/80 via-surface/30 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* ── Floating Badge 1: Availability (Top Right) ── */}
        <motion.div
          initial={{ y: -8 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={
            prefersReduced ? undefined : { y: -2, transition: springSnappy }
          }
          className="absolute -top-3.5 -right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-border bg-surface/95 px-4 py-1.5 shadow-[var(--shadow-md)] backdrop-blur-xl transition-colors duration-200 hover:border-border-focus/40"
        >
          <span className="relative flex h-2.5 w-2.5">
            {!prefersReduced && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-semibold text-text tracking-wide">
            Available for hire
          </span>
        </motion.div>

        {/* ── Floating Badge 2: Experience (Bottom Left) ── */}
        <motion.div
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.38, duration: 0.4 }}
          whileHover={
            prefersReduced ? undefined : { y: -2, transition: springSnappy }
          }
          className="absolute -bottom-4 -left-2 sm:-left-4 z-20 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-2.5 sm:px-4.5 sm:py-3 shadow-[var(--shadow-md)] backdrop-blur-xl transition-colors duration-200 hover:border-border-focus/40"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30">
            <Zap size={16} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-text">
              {personal.yearsOfExperience} Years Experience
            </p>
            <p className="text-[10px] font-mono text-text-3 font-medium">
              Full-Stack &amp; Scalable Systems
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
