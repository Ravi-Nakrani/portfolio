import type { Experience } from "@/types";

/**
 * Professional Experience data for Tagline Infotech.
 * Source of truth: RESUME.md
 *
 * NOTE: Ravi Nakrani has worked solely at Tagline Infotech.
 * All selected works (Coin Toss Game, Urban Genba, LocumFind, Gajari)
 * and technical contributions reflect work and training engineered during this tenure.
 * Live / repo URLs are omitted as these are authenticated internal enterprise platforms.
 */
export const experience: Experience = {
  company: "Tagline Infotech",
  role: "Full-Stack Developer",
  startDate: "Oct 2022",
  endDate: "Present",
  location: "Surat, Gujarat",
  summary:
    "Architecting and engineering high-concurrency platforms, real-time distributed systems, and enterprise SaaS applications using TypeScript, Node.js, NestJS, React, and Next.js.",
  selectedWork: [
    {
      id: "coin-toss-game",
      title: "Coin Toss Game",
      description:
        "High-concurrency B2B gaming platform supporting 1,000+ concurrent users with real-time broadcasting, wallet webhooks, and asynchronous round processing.",
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "AWS SQS",
        "Socket.io",
      ],
      category: "B2B Gaming Engine",
    },
    {
      id: "urban-genba",
      title: "Urban Genba",
      description:
        "Enterprise applications and data-heavy workflows featuring dynamic forms, data tables, and reusable UI components across multiple apps.",
      technologies: ["React", "Ant Design", "Highcharts", "TypeScript"],
      category: "Enterprise SaaS Frontend",
    },
    {
      id: "locumfind",
      title: "LocumFind",
      description:
        "Platform with advanced multi-filter search, real-time WebSocket chat, and dynamic calendar workflows connecting locum pharmacists with pharmacies.",
      technologies: [
        "React",
        "WebSockets",
        "JavaScript",
        "Google Autocomplete",
      ],
      category: "Healthcare Marketplace",
    },
    {
      id: "gajari",
      title: "Gajari",
      description:
        "Workflow-focused application with hierarchical role-based access control, operational workflows, and interactive Highcharts data visualizations.",
      technologies: ["React", "Express", "MongoDB", "WebSocket", "Highcharts"],
      category: "Operations & RBAC",
    },
  ],
  contributions: [
    "Architected and developed a high-concurrency B2B platform supporting 1,000+ concurrent users using NestJS, TypeScript, and Prisma (PostgreSQL).",
    "Implemented low-latency real-time state broadcasting and live updates using Socket.io and WebSockets.",
    "Implemented asynchronous processing using AWS SQS and worker-based architecture for non-blocking round settlement.",
    "Built transactional wallet integration handling complex accounting logic via secure webhooks.",
    "Implemented Redis caching for high-frequency data and leaderboard lookups, significantly reducing database load.",
    "Developed server-side validated RNG-based game logic with configurable probability parameters.",
    "Built complex React interfaces, dynamic forms, and data-heavy tables with interactive Highcharts visualizations.",
    "Developed reusable UI components and hierarchical role-based access control (RBAC) for enterprise operational workflows.",
    "Implemented scheduled cron jobs, database queries, and schema optimizations across MongoDB and PostgreSQL.",
  ],
};
