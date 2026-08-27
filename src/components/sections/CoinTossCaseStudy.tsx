import {
  ArrowRight,
  Zap,
  Radio,
  Cpu,
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Server,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CoinVisual } from "@/components/sections/CoinVisual";
import { coinTossCaseStudy } from "@/data";

const HEADING_ID = "case-study-heading";

const pillarIcons = [Layers, Workflow, Cpu, ShieldCheck, Zap];

/**
 * Featured Case Study: Coin Toss Game
 * Centerpiece engineering showcase matching the reference design layout:
 * Left: Case study title & summary
 * Center: 3D illuminated gold coin graphic
 * Right: 2x2 metrics grid & technology icon matrix
 * Followed by High-Concurrency Architecture & Technical Pillars.
 * Server Component.
 */
export function CoinTossCaseStudy() {
  const cs = coinTossCaseStudy;

  return (
    <SectionWrapper id="case-study" labelledBy={HEADING_ID}>
      <AnimatedSection>
        {/* ── Main Showcase Container ── */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/90 p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md">
          {/* Subtle accent glow inside container */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
            {/* ── Left Column: Project Identity & Summary (4 cols) ── */}
            <div className="flex flex-col items-start lg:col-span-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2 mb-2">
                Featured Case Study
              </span>

              <h2
                id={HEADING_ID}
                className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl"
              >
                Coin Toss Game
              </h2>

              <p className="mt-1 text-sm font-semibold text-accent-2">
                High-concurrency B2B gaming platform
              </p>

              <p className="mt-4 text-xs leading-relaxed text-text-2 sm:text-sm">
                Architected and engineered a production-grade platform
                supporting 1,000+ concurrent users with real-time gameplay,
                transactional integrity and fault-tolerant architecture.
              </p>

              <div className="mt-6">
                <Button
                  href="#case-study-architecture"
                  variant="primary"
                  size="md"
                  className="gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  View Case Study
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* ── Center Column: 3D Gold Coin Visual (4 cols) ── */}
            <div className="flex items-center justify-center lg:col-span-4">
              <CoinVisual />
            </div>

            {/* ── Right Column: Metrics Grid & Tech Badges (4 cols) ── */}
            <div className="flex flex-col gap-4 lg:col-span-4">
              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-border/80 bg-surface-2/80 p-3 text-center transition-all hover:border-accent/40">
                  <p className="font-mono text-base font-extrabold text-text flex items-center justify-center gap-1">
                    <Zap size={14} className="text-accent" /> 1,000+
                  </p>
                  <p className="mt-0.5 text-[10px] text-text-3 font-medium">
                    Concurrent Users
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-surface-2/80 p-3 text-center transition-all hover:border-accent/40">
                  <p className="font-mono text-base font-extrabold text-text flex items-center justify-center gap-1">
                    <Radio size={14} className="text-accent" /> Real-Time
                  </p>
                  <p className="mt-0.5 text-[10px] text-text-3 font-medium">
                    Socket.io
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-surface-2/80 p-3 text-center transition-all hover:border-accent/40">
                  <p className="font-mono text-base font-extrabold text-text flex items-center justify-center gap-1">
                    <Cpu size={14} className="text-accent" /> AWS SQS
                  </p>
                  <p className="mt-0.5 text-[10px] text-text-3 font-medium">
                    Async Processing
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-surface-2/80 p-3 text-center transition-all hover:border-accent/40">
                  <p className="font-mono text-base font-extrabold text-text flex items-center justify-center gap-1">
                    <Database size={14} className="text-accent" /> Redis
                  </p>
                  <p className="mt-0.5 text-[10px] text-text-3 font-medium">
                    Caching
                  </p>
                </div>
              </div>

              {/* Tech Stack Tiles */}
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-2 pt-2">
                {[
                  {
                    name: "NestJS",
                    bg: "bg-[#e0234e]/15 text-[#e0234e]",
                    border: "border-[#e0234e]/30",
                  },
                  {
                    name: "Next.js",
                    bg: "bg-white/10 text-white",
                    border: "border-white/20",
                  },
                  {
                    name: "PostgreSQL",
                    bg: "bg-[#336791]/15 text-[#336791]",
                    border: "border-[#336791]/30",
                  },
                  {
                    name: "Redis",
                    bg: "bg-[#dc382d]/15 text-[#dc382d]",
                    border: "border-[#dc382d]/30",
                  },
                  {
                    name: "AWS SQS",
                    bg: "bg-[#ff9900]/15 text-[#ff9900]",
                    border: "border-[#ff9900]/30",
                  },
                  {
                    name: "TypeScript",
                    bg: "bg-[#3178c6]/15 text-[#3178c6]",
                    border: "border-[#3178c6]/30",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface-2/60 p-2 text-center transition-all hover:border-border-focus"
                  >
                    <span
                      className={`text-[10px] font-bold ${t.bg} ${t.border} px-1.5 py-0.5 rounded border mb-1`}
                    >
                      {t.name[0]}
                    </span>
                    <span className="text-[10px] font-semibold text-text-2 truncate w-full">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── High-Concurrency Architecture Breakdown ── */}
        <div id="case-study-architecture" className="mt-14 scroll-mt-24">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-2">
                Architecture Breakdown
              </span>
              <h3 className="mt-1 text-xl font-bold text-text sm:text-2xl">
                High-Concurrency System Flow
              </h3>
            </div>
          </div>

          {/* Architecture Diagram Box */}
          <div className="mb-10 rounded-2xl border border-border bg-surface/70 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Application layer */}
              <div className="rounded-xl border border-accent/40 bg-surface-2 px-6 py-2.5 shadow-sm">
                <p className="text-xs font-bold text-text">
                  B2B Game Application (NestJS / Next.js)
                </p>
              </div>

              {/* Branch connector */}
              <div className="h-6 w-px bg-border relative">
                <div className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* Dual stream: Real-Time & Transactions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                <div className="rounded-xl border border-border bg-surface-2/80 p-3.5">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-accent-2 mb-1">
                    <Radio size={14} /> Real-Time Engine
                  </div>
                  <p className="text-[11px] text-text-2">
                    Socket.io State &amp; Bets Broadcast
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-2/80 p-3.5">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-accent-2 mb-1">
                    <Server size={14} /> Transactions &amp; Wallets
                  </div>
                  <p className="text-[11px] text-text-2">
                    Signed Webhooks with B2B Operators
                  </p>
                </div>
              </div>

              {/* Merge down connector */}
              <div className="h-6 w-px bg-border relative">
                <div className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* AWS SQS queue */}
              <div className="rounded-xl border border-[#ff9900]/40 bg-surface-2 px-6 py-2.5 shadow-sm max-w-md w-full">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#ff9900]">
                  <Cpu size={14} /> Async Task Queue (AWS SQS)
                </div>
                <p className="text-[11px] text-text-3 mt-0.5">
                  Non-blocking game round settlements &amp; payout dispatch
                </p>
              </div>

              {/* Line down */}
              <div className="h-6 w-px bg-border" />

              {/* Data & Persistence */}
              <div className="rounded-xl border border-border bg-surface-2 px-6 py-2.5 shadow-sm max-w-md w-full">
                <div className="flex items-center justify-center gap-3 text-xs font-bold text-text">
                  <span className="flex items-center gap-1 text-[#336791]">
                    <Database size={13} /> PostgreSQL
                  </span>
                  <span className="text-text-3">+</span>
                  <span className="flex items-center gap-1 text-[#dc382d]">
                    <Layers size={13} /> Redis Caching
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Implementation Pillars Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cs.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length] ?? Layers;

              return (
                <div
                  key={pillar.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-5 backdrop-blur-sm transition-all duration-200 hover:border-border-focus hover:bg-surface-2/60 shadow-sm"
                >
                  <div>
                    <div className="mb-3.5 flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <h4 className="text-sm font-bold text-text">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="mb-3.5 text-xs leading-relaxed text-text-2">
                      {pillar.description}
                    </p>

                    <ul className="mb-4 flex flex-col gap-2 pl-3">
                      {pillar.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="relative text-xs leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.45em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                    {pillar.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent-dim px-2 py-0.5 font-mono text-[11px] text-accent-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Engineering Principles Box */}
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent-dim/40 p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2">
              <GitBranch size={16} className="text-accent" aria-hidden="true" />
              <h3 className="text-sm font-bold text-text">
                Key Engineering Principles Demonstrated
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {cs.engineeringTakeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-relaxed text-text-2">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
