import type { EngineeringHighlight } from "@/types";

/**
 * Engineering Highlights
 * Key facts and metrics explicitly supported by RESUME.md.
 */
export const engineeringHighlights: EngineeringHighlight[] = [
  {
    id: "concurrency",
    metric: "1,000+",
    title: "Concurrent Users Handled",
    description:
      "Architected and developed a high-concurrency B2B gaming platform from scratch using NestJS, TypeScript, and Prisma (PostgreSQL) supporting 1,000+ simultaneous players.",
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    iconName: "users",
  },
  {
    id: "realtime",
    metric: "Low-Latency",
    title: "Real-Time WebSocket Broadcasting",
    description:
      "Leveraged Socket.io for low-latency broadcast of game states, bets, live leaderboard rankings, and match outcomes to thousands of connected clients simultaneously.",
    technologies: ["Socket.io", "WebSockets", "Node.js"],
    iconName: "zap",
  },
  {
    id: "async-processing",
    metric: "Decoupled",
    title: "AWS SQS Worker Architecture",
    description:
      "Implemented asynchronous game-round processing via AWS SQS and worker services, enabling settled rounds to trigger new rounds without blocking the main application flow.",
    technologies: ["AWS SQS", "Workers", "Asynchronous Pipelines"],
    iconName: "cpu",
  },
  {
    id: "caching-db",
    metric: "Optimized",
    title: "Redis Caching & DB Performance",
    description:
      "Implemented multi-tier Redis caching for high-frequency game and leaderboard data, dramatically reducing repetitive PostgreSQL queries and improving response latency.",
    technologies: ["Redis", "PostgreSQL", "MongoDB"],
    iconName: "database",
  },
];
