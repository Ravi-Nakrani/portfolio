"use client";

import { motion } from "motion/react";

/**
 * CoinVisual Component
 * Renders an illuminated 3D-style gold coin on a sleek dark pedestal
 * with ambient gold & blue lighting, matching the reference centerpiece.
 */
export function CoinVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-[220px] sm:h-[260px] select-none">
      {/* Background ambient warm/gold glow */}
      <div
        className="pointer-events-none absolute h-36 w-36 rounded-full bg-amber-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-4 h-24 w-44 rounded-full bg-accent/25 blur-2xl"
        aria-hidden="true"
      />

      {/* Floating 3D Gold Coin with motion */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
          rotateY: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* SVG Gold Coin */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 drop-shadow-[0_15px_25px_rgba(245,158,11,0.35)]">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <defs>
              <linearGradient
                id="gold-outer"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient
                id="gold-inner"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="gold-rim" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Coin thickness / 3D edge */}
            <ellipse cx="60" cy="64" rx="52" ry="50" fill="url(#gold-outer)" />
            <ellipse cx="60" cy="62" rx="52" ry="50" fill="#92400e" />

            {/* Coin face */}
            <ellipse cx="60" cy="58" rx="52" ry="50" fill="url(#gold-outer)" />
            <ellipse
              cx="60"
              cy="58"
              rx="46"
              ry="44"
              fill="url(#gold-inner)"
              stroke="url(#gold-rim)"
              strokeWidth="2"
            />

            {/* Inner milled border */}
            <ellipse
              cx="60"
              cy="58"
              rx="40"
              ry="38"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeDasharray="3,3"
            />

            {/* Center lightning bolt / coin emblem */}
            <path
              d="M 64 34 L 46 58 L 58 58 L 52 82 L 74 54 L 62 54 Z"
              fill="url(#gold-outer)"
              stroke="#fef08a"
              strokeWidth="1.5"
              filter="url(#glow)"
            />

            {/* Shine highlight */}
            <ellipse
              cx="45"
              cy="42"
              rx="16"
              ry="10"
              fill="#ffffff"
              opacity="0.35"
              transform="rotate(-25 45 42)"
            />
          </svg>
        </div>

        {/* Illuminated pedestal underneath */}
        <div className="relative -mt-3 w-48 sm:w-56 h-12 flex items-center justify-center">
          {/* Base outer ring */}
          <div className="absolute inset-x-0 bottom-0 h-9 rounded-[100%] border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
          {/* Inner ring */}
          <div className="absolute inset-x-4 bottom-1.5 h-6 rounded-[100%] border border-amber-400/50 bg-gradient-to-t from-black via-surface to-amber-950/40" />
          {/* Center glow spot */}
          <div className="absolute bottom-2 h-2.5 w-20 rounded-full bg-amber-400/40 blur-sm" />
        </div>
      </motion.div>
    </div>
  );
}
