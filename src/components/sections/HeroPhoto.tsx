"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { personal } from "@/data";

/**
 * HeroPhoto Component
 * Displays Ravi Nakrani's professional portrait with high-tech glassmorphic framing,
 * ambient glow accents, floating status indicator, and experience badge.
 */
export function HeroPhoto() {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] mx-auto select-none">
      {/* Subtle ambient gradient backdrops */}
      <div
        className="pointer-events-none absolute -top-8 -left-8 h-56 w-56 rounded-full bg-accent/20 blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Main Glassmorphic Photo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group relative rounded-3xl border border-border/80 bg-surface/60 p-3 sm:p-4 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-accent/40"
      >
        {/* Subtle decorative grid background in frame */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-dot-grid opacity-20"
          aria-hidden="true"
        />

        {/* Tech Corner Accent Indicators */}
        <div
          className="pointer-events-none absolute top-2.5 left-2.5 h-3 w-3 border-t-2 border-l-2 border-accent/40 rounded-tl-sm"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-accent/40 rounded-tr-sm"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-accent/40 rounded-bl-sm"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-accent/40 rounded-br-sm"
          aria-hidden="true"
        />

        {/* Portrait Image Frame */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/60 bg-surface-2">
          <Image
            src="/my_photo.png"
            alt={personal.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 440px"
            priority
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Gentle cinematic bottom vignette */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface/70 via-surface/20 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* ── Floating Badge 1: Status (Top Right) ── */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="absolute -top-3 -right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-border/90 bg-surface/95 px-3.5 py-1.5 shadow-xl backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-semibold text-text tracking-wide">
            Available for hire
          </span>
        </motion.div>

        {/* ── Floating Badge 2: Experience & Impact (Bottom Left) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="absolute -bottom-4 -left-2 sm:-left-4 z-20 flex items-center gap-3 rounded-2xl border border-border/90 bg-surface/95 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/30">
            <Zap size={15} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-text">
              {personal.yearsOfExperience}+ Years Experience
            </p>
            <p className="text-[10px] font-mono text-text-3">
              Full-Stack &amp; Scalable Systems
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
