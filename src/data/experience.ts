import type { Experience } from "@/types";

/**
 * Professional Experience data for Tagline Infotech.
 * Source of truth: RESUME.md
 *
 * NOTE: RESUME.md nests Coin Toss Game, Urban Genba, LocumFind, and Gajari
 * all under the Tagline Infotech "Experience" section. A separate top-level
 * "Training & Internship" section in the resume holds only two generic,
 * company-agnostic bullets (JS/Node.js training, Git/GitHub practice) that
 * add no differentiated signal beyond what Selected Work already shows, so
 * they're intentionally not surfaced as a separate site section.
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
        "Frontend features across three enterprise applications, iterating rapidly on workflows from stakeholders' on-field feedback. Built dynamic forms, data-heavy tables, hierarchical RBAC, and operational modules for maintenance scheduling, repair ticketing, asset tracking, and certificate generation — plus Highcharts visualizations and prototypes built ahead of backend availability.",
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
        "E-commerce platform — built the coin-based reward system and coupon-generation logic to support user engagement and promotions, plus scheduled cron jobs and MongoDB schema and query work.",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "E-Commerce Platform",
    },
  ],
  contributions: [
    "Architected and developed a high-concurrency B2B platform supporting 1,000+ concurrent users using NestJS, TypeScript, and Prisma (PostgreSQL).",
    "Implemented low-latency real-time state broadcasting and live updates using Socket.io and WebSockets.",
    "Implemented asynchronous processing using AWS SQS and worker-based architecture for non-blocking round settlement.",
    "Engineered a B2B wallet integration handling debit, credit, and rollback transactions with third-party operators via secure webhooks.",
    "Implemented Redis caching for high-frequency data and leaderboard lookups, significantly reducing database load.",
    "Developed server-side validated RNG-based game logic with configurable probability parameters.",
    "Built complex React interfaces, dynamic forms, and data-heavy tables with interactive Highcharts visualizations.",
    "Implemented hierarchical role-based access control (RBAC) and operational modules for maintenance scheduling, repair ticketing, asset tracking, and certificate generation.",
    "Implemented scheduled cron jobs, database queries, and schema optimizations across MongoDB and PostgreSQL.",
  ],
};
