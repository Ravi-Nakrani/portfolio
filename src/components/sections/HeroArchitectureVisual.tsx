"use client";

import { motion } from "motion/react";
import { Zap, Database, Server, Cpu, Layers } from "lucide-react";

/**
 * Technical Ecosystem Architecture Visual
 * Interactive visual representation of Ravi's core technology stack:
 * React & Next.js -> Node.js / NestJS -> PostgreSQL, Redis, AWS SQS -> WebSockets (Socket.io)
 * Client Component with subtle interactions and unified technical styling.
 */
export function HeroArchitectureVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Subtle ambient glow behind diagram */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-border/80 bg-surface/80 backdrop-blur-md p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        {/* Subtle grid pattern inside container */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-25 rounded-2xl"
          aria-hidden="true"
        />

        {/* ── Tier 1: Frontend (React & Next.js) ── */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
          {/* React Node */}
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.5)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/80 px-3.5 py-3 transition-all hover:bg-surface-2"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
              <svg
                viewBox="-11.5 -10.23174 23 20.46348"
                className="h-4.5 w-4.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="0" cy="0" r="2.05" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-text">React</p>
              <p className="text-[11px] text-text-3 font-mono">Frontend UI</p>
            </div>
          </motion.div>

          {/* Next.js Node */}
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.5)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/80 px-3.5 py-3 transition-all hover:bg-surface-2"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
              <span className="font-bold text-xs font-mono">N</span>
            </div>
            <div>
              <p className="text-xs font-bold text-text">Next.js</p>
              <p className="text-[11px] text-text-3 font-mono">App Router</p>
            </div>
          </motion.div>
        </div>

        {/* ── Connecting SVG Circuit: Tier 1 -> Tier 2 ── */}
        <div className="relative h-7 w-full flex items-center justify-center">
          <svg
            className="w-full h-full stroke-border"
            fill="none"
            viewBox="0 0 400 28"
            preserveAspectRatio="none"
          >
            <path
              d="M 100 0 L 100 14 L 200 14 L 200 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 300 0 L 300 14 L 200 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="14" r="2.5" className="fill-accent" />
          </svg>
        </div>

        {/* ── Tier 2: Backend Core (Node.js & NestJS) ── */}
        <div className="relative z-10 max-w-[270px] mx-auto">
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.6)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-3 rounded-xl border border-accent/30 bg-surface-2/95 px-4 py-3 shadow-[0_0_20px_rgba(99,102,241,0.12)] transition-all"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/30">
              <Server size={16} aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-text">Node.js</span>
                <span className="text-text-3 text-[10px]">•</span>
                <span className="text-xs font-bold text-accent-2">NestJS</span>
              </div>
              <p className="text-[11px] text-text-3 font-mono">
                API &amp; System Core
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Connecting SVG Circuit: Tier 2 -> Tier 3 ── */}
        <div className="relative h-7 w-full flex items-center justify-center">
          <svg
            className="w-full h-full stroke-border"
            fill="none"
            viewBox="0 0 400 28"
            preserveAspectRatio="none"
          >
            <path
              d="M 200 0 L 200 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 65 28 L 65 14 L 335 14 L 335 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 200 14 L 200 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="65" cy="14" r="2" className="fill-accent" />
            <circle cx="200" cy="14" r="2.5" className="fill-accent" />
            <circle cx="335" cy="14" r="2" className="fill-accent" />
          </svg>
        </div>

        {/* ── Tier 3: Data & Queues (PostgreSQL, Redis, AWS SQS) ── */}
        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-2.5">
          {/* PostgreSQL */}
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.5)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 rounded-xl border border-border bg-surface-2/80 p-2.5 transition-all hover:bg-surface-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
              <Database size={13} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-text">PostgreSQL</p>
              <p className="hidden sm:block text-[10px] text-text-3 font-mono">
                Relational DB
              </p>
            </div>
          </motion.div>

          {/* Redis */}
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.5)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 rounded-xl border border-border bg-surface-2/80 p-2.5 transition-all hover:bg-surface-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
              <Layers size={13} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-text">Redis</p>
              <p className="hidden sm:block text-[10px] text-text-3 font-mono">
                In-Memory Cache
              </p>
            </div>
          </motion.div>

          {/* AWS SQS */}
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.5)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 rounded-xl border border-border bg-surface-2/80 p-2.5 transition-all hover:bg-surface-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
              <Cpu size={13} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-text">AWS SQS</p>
              <p className="hidden sm:block text-[10px] text-text-3 font-mono">
                Async Workers
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Connecting SVG Circuit: Tier 3 -> Tier 4 ── */}
        <div className="relative h-6 w-full flex items-center justify-center">
          <svg
            className="w-full h-full stroke-border"
            fill="none"
            viewBox="0 0 400 24"
            preserveAspectRatio="none"
          >
            <path
              d="M 200 0 L 200 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="12" r="2" className="fill-accent" />
          </svg>
        </div>

        {/* ── Tier 4: Real-Time Engine (WebSockets / Socket.io) ── */}
        <div className="relative z-10 max-w-[300px] mx-auto">
          <motion.div
            whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.6)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-surface-2/90 px-4 py-2.5 transition-all hover:bg-surface-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent border border-accent/30">
              <Zap size={14} aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text">
                WebSockets (Socket.io)
              </p>
              <p className="text-[10px] text-text-3 font-mono">
                Live State &amp; Results Broadcast
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
