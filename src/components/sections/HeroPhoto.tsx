"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Zap } from "lucide-react";
import { personal } from "@/data";

/**
 * HeroPhoto Component
 * Displays Ravi Nakrani's professional portrait with high-tech glassmorphic framing,
 * glowing accents, floating status indicator, and experience badge.
 */
export function HeroPhoto() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] mx-auto select-none">
      {/* Subtle ambient gradient backdrops */}
      <div
        className="pointer-events-none absolute -top-8 -left-8 h-64 w-64 rounded-full bg-accent/25 blur-3xl opacity-70 animate-ambient-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl opacity-60 animate-ambient-glow"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />

      {/* Main Glassmorphic Photo Container with gentle ambient float */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: prefersReduced ? 0 : [0, -7, 0],
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: {
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/65 to-surface-2/85 p-3 sm:p-4 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
      >
        {/* Hover Radial Glow Ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]"
          aria-hidden="true"
        />

        {/* Subtle decorative grid background in frame */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-dot-grid opacity-25"
          aria-hidden="true"
        />

        {/* Tech Corner Accent Indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="pointer-events-none absolute top-3 left-3 h-3.5 w-3.5 border-t-2 border-l-2 border-accent/60 rounded-tl-sm transition-colors duration-300 group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="pointer-events-none absolute top-3 right-3 h-3.5 w-3.5 border-t-2 border-r-2 border-accent/60 rounded-tr-sm transition-colors duration-300 group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 border-accent/60 rounded-bl-sm transition-colors duration-300 group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="pointer-events-none absolute bottom-3 right-3 h-3.5 w-3.5 border-b-2 border-r-2 border-accent/60 rounded-br-sm transition-colors duration-300 group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          aria-hidden="true"
        />

        {/* Portrait Image Frame */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/80 bg-surface-2 shadow-inner">
          <div className="relative h-full w-full">
            <Image
              src="/my_photo.png"
              alt={`${personal.name} — Full-Stack Software Engineer`}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 440px"
              priority
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Cinematic bottom vignette */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/80 via-surface/30 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* ── Floating Badge 1: Status (Top Right) ── */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="absolute -top-3.5 -right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-border/90 bg-surface/95 px-4 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 hover:border-accent/40"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="font-mono text-[11px] font-semibold text-text tracking-wide">
            Available for hire
          </span>
        </motion.div>

        {/* ── Floating Badge 2: Experience & Impact (Bottom Left) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: prefersReduced ? 0 : [0, -3, 0],
            rotate: prefersReduced ? 0 : [0, 1, -0.5, 0],
          }}
          transition={{
            opacity: { delay: 0.35, duration: 0.45 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ y: -4, scale: 1.04 }}
          className="absolute -bottom-4 -left-2 sm:-left-4 z-20 flex items-center gap-3 rounded-2xl border border-border/90 bg-surface/95 px-4 py-2.5 sm:px-4.5 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-200 hover:border-accent/50"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent-2 border border-accent/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]">
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
