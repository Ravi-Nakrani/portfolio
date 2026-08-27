import {
  ArrowRight,
  Radio,
  Cpu,
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Server,
  Zap,
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
 * Centerpiece engineering showcase:
 * Top: Asymmetrical two-column hero with narrative, facts row, unified tech tags, and 3D coin visual.
 * Bottom: High-Concurrency Architecture Flow & 5 Technical Implementation Pillars.
 * Server Component.
 */
export function CoinTossCaseStudy() {
  const cs = coinTossCaseStudy;

  return (
    <SectionWrapper id="case-study" labelledBy={HEADING_ID}>
      <AnimatedSection>
        {/* ── Main Showcase Container ── */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md">
          {/* Ambient lighting inside showcase */}
          <div
            className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ── Left Column: Narrative & Architecture Summary (7 cols) ── */}
            <div className="flex flex-col items-start lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3">
                Featured Case Study
              </span>

              <h2
                id={HEADING_ID}
                className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
              >
                Coin Toss Game
              </h2>

              <p className="mt-2 text-base sm:text-lg font-semibold text-accent-2">
                High-Concurrency B2B Gaming Platform &amp; Transactional Engine
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-2">
                Architected and engineered a production-grade gaming platform
                from scratch. The system supports 1,000+ concurrent players with
                sub-second real-time state broadcasting, secure server-validated
                RNG mechanics, transactional B2B wallet webhooks, and an
                asynchronous worker architecture powered by AWS SQS and Redis.
              </p>

              {/* Engineering Facts Row (Replacing tiny cards) */}
              <div className="mt-6 w-full flex flex-wrap items-center gap-x-5 gap-y-2.5 border-y border-border/60 py-4 font-mono text-xs sm:text-sm text-text-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-bold text-text">1,000+</span> Concurrent
                  Users
                </div>
                <div className="hidden sm:inline text-text-3">·</div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-bold text-text">Socket.io</span>{" "}
                  Real-Time
                </div>
                <div className="hidden sm:inline text-text-3">·</div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-bold text-text">AWS SQS</span> Async
                  Workers
                </div>
                <div className="hidden sm:inline text-text-3">·</div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-bold text-text">Redis</span> Caching
                </div>
              </div>

              {/* Cohesive Technology Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {cs.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/80 bg-surface-2/80 px-2.5 py-1 text-xs font-mono font-medium text-text-2 transition-colors hover:border-accent/40 hover:text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action */}
              <div className="mt-8">
                <Button
                  href="#case-study-architecture"
                  variant="primary"
                  size="md"
                  className="gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  Explore Engineering Details
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* ── Right Column: 3D Gold Coin Centerpiece (5 cols) ── */}
            <div className="flex items-center justify-center lg:col-span-5">
              <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-surface-2/40 p-6 sm:p-8 backdrop-blur-sm shadow-inner flex items-center justify-center">
                <CoinVisual />
              </div>
            </div>
          </div>
        </div>

        {/* ── High-Concurrency Architecture Breakdown ── */}
        <div id="case-study-architecture" className="mt-20 scroll-mt-24">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-2 block">
              Architecture Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text">
              High-Concurrency System Flow
            </h3>
            <p className="mt-3 max-w-2xl text-base text-text-2">
              Decoupled, event-driven architecture designed to process rounds,
              settle transactions, and broadcast live state without
              bottlenecking.
            </p>
          </div>

          {/* Architecture Diagram Box */}
          <div className="mb-14 rounded-2xl border border-border bg-surface/70 p-6 sm:p-10 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Application Layer */}
              <div className="rounded-xl border border-accent/40 bg-surface-2 px-8 py-3 shadow-sm max-w-lg w-full">
                <p className="text-sm font-bold text-text">
                  B2B Game Application (NestJS &amp; Next.js)
                </p>
                <p className="text-xs text-text-3 font-mono mt-0.5">
                  Client Websocket Connections &amp; API Entrypoint
                </p>
              </div>

              {/* Branch Connector */}
              <div className="h-6 w-px bg-border relative">
                <div className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* Dual Stream: Real-Time & Transactions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="rounded-xl border border-border bg-surface-2/80 p-4">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-accent-2 mb-1">
                    <Radio size={15} /> Real-Time Engine
                  </div>
                  <p className="text-xs text-text-2">
                    Socket.io live states, player bets &amp; leaderboard
                    broadcast
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-2/80 p-4">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-accent-2 mb-1">
                    <Server size={15} /> Transactions &amp; Wallets
                  </div>
                  <p className="text-xs text-text-2">
                    Signed cryptographic webhooks with third-party B2B operators
                  </p>
                </div>
              </div>

              {/* Merge Down Connector */}
              <div className="h-6 w-px bg-border relative">
                <div className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* AWS SQS Queue */}
              <div className="rounded-xl border border-accent/40 bg-surface-2 px-8 py-3 shadow-sm max-w-lg w-full">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-text">
                  <Cpu size={15} className="text-accent-2" /> Async Task Queue
                  (AWS SQS)
                </div>
                <p className="text-xs text-text-3 font-mono mt-0.5">
                  Non-blocking round settlements &amp; asynchronous payout
                  dispatch
                </p>
              </div>

              {/* Line Down */}
              <div className="h-6 w-px bg-border" />

              {/* Data & Persistence */}
              <div className="rounded-xl border border-border bg-surface-2 px-8 py-3 shadow-sm max-w-lg w-full">
                <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-bold text-text">
                  <span className="flex items-center gap-1.5 text-accent-2">
                    <Database size={14} /> PostgreSQL + Prisma
                  </span>
                  <span className="text-text-3">·</span>
                  <span className="flex items-center gap-1.5 text-accent-2">
                    <Layers size={14} /> Redis Caching
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Implementation Pillars Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cs.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length] ?? Layers;

              return (
                <div
                  key={pillar.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 hover:border-border-focus/60 hover:bg-surface-2/60 shadow-sm"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent-2 border border-accent/20">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <h4 className="text-base font-bold text-text">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="mb-4 text-xs sm:text-sm leading-relaxed text-text-2">
                      {pillar.description}
                    </p>

                    <ul className="mb-6 flex flex-col gap-2.5 pl-3">
                      {pillar.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="relative text-xs sm:text-sm leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.5em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                    {pillar.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-surface-2/80 px-2 py-0.5 font-mono text-xs text-text-3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Engineering Principles Box */}
          <div className="mt-10 rounded-2xl border border-accent/20 bg-accent-dim/30 p-6 sm:p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2.5">
              <GitBranch
                size={18}
                className="text-accent-2"
                aria-hidden="true"
              />
              <h4 className="text-base font-bold text-text">
                Key Engineering Principles Demonstrated
              </h4>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {cs.engineeringTakeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-2"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm leading-relaxed text-text-2">
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
