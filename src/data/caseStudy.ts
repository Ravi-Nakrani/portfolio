import type { CaseStudy } from "@/types";

/**
 * Featured Engineering Case Study: Coin Toss Game
 * Source of truth: RESUME.md (Tagline Infotech - Coin Toss Game)
 */
export const coinTossCaseStudy: CaseStudy = {
  id: "coin-toss-game",
  name: "Coin Toss Game",
  role: "Lead Full-Stack Developer",
  company: "Tagline Infotech",
  duration: "Oct 2022 – Present",
  location: "Surat, Gujarat",
  tagline: "High-Concurrency B2B Gaming Platform & Transactional Engine",
  overview:
    "Architected and engineered a high-concurrency B2B gaming platform from scratch. The system supports 1,000+ concurrent players with sub-second real-time state broadcasting, secure server-validated RNG mechanics, transactional B2B wallet webhooks, and an asynchronous worker architecture powered by AWS SQS and Redis.",
  technologies: [
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Socket.io",
    "AWS SQS",
    "Next.js",
  ],
  metrics: [
    { label: "Concurrent Users", value: "1,000+" },
    { label: "Round Processing", value: "Async SQS" },
    { label: "State Delivery", value: "Real-Time Socket.io" },
    { label: "Caching Layer", value: "Redis In-Memory" },
  ],
  pillars: [
    {
      title: "High-Concurrency Platform Architecture",
      description:
        "Built the foundation from scratch to withstand simultaneous player loads without degradation.",
      points: [
        "Architected modular micro-services using NestJS and TypeScript for strict type safety across all backend workflows.",
        "Utilized Prisma ORM with PostgreSQL for structured relational data modeling, migrations, and transactional integrity.",
        "Engineered connection pooling and query optimization to comfortably sustain 1,000+ concurrent players.",
      ],
      technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      title: "B2B Wallet Integration & Transactional Workflows",
      description:
        "Engineered reliable integration layers between the gaming platform and third-party B2B operators.",
      points: [
        "Engineered robust wallet integration handling complex debit, credit, and rollback transactional logic.",
        "Implemented secure webhook communication protocols with signature verification for third-party Operators.",
        "Guaranteed atomic transactions and idempotent event handling to eliminate double-spend and settlement anomalies.",
      ],
      technologies: ["NestJS", "PostgreSQL", "Webhooks", "REST APIs"],
    },
    {
      title: "Asynchronous Round Processing via AWS SQS",
      description:
        "Decoupled heavy computation and round transitions from the main API process.",
      points: [
        "Built a worker-based architecture utilizing AWS SQS queues to offload round settlement computation.",
        "Allowed finished rounds to compute payouts, update player wallets, and trigger subsequent rounds without blocking ongoing game requests.",
        "Ensured zero game-loop stutter and resilient queue recovery during high volume spikes.",
      ],
      technologies: ["AWS SQS", "Workers", "Node.js", "Redis"],
    },
    {
      title: "Secure RNG Engine & Server-Side Validation",
      description:
        "Constructed an untamperable game loop with verifiable outcomes.",
      points: [
        "Developed a secure Random Number Generator (RNG) engine featuring configurable probability parameters.",
        "Enforced strict server-side outcome validation, preventing client-side manipulation of game results.",
        "Structured fair-play outcome generation with audit logs and replayable round verification.",
      ],
      technologies: ["TypeScript", "NestJS", "Algorithm Design"],
    },
    {
      title: "Low-Latency Broadcasting & Multi-Tier Caching",
      description:
        "Delivered immediate visual feedback to thousands of connected clients.",
      points: [
        "Leveraged Socket.io for low-latency broadcasting of real-time game states, active bets, rankings, and round outcomes.",
        "Integrated Redis caching for high-frequency live leaderboard updates and game state lookups.",
        "Reduced redundant PostgreSQL queries by over 80% on hot read paths.",
      ],
      technologies: ["Socket.io", "Redis", "WebSockets"],
    },
  ],
  engineeringTakeaways: [
    "High-throughput transactional design requiring atomic operations across distributed operator webhooks.",
    "Decoupled asynchronous worker architecture maintaining consistent game loops under peak concurrency.",
    "Real-time event-driven architecture using WebSockets paired with in-memory caching layers.",
  ],
};
