import type { Experience } from "@/types";

/**
 * Work experience and training entries.
 * Source of truth: RESUME.md — "Experience" and "Training & Internship" sections.
 *
 * NOTES:
 *   - Training entries have no confirmed dates — startDate/endDate are empty strings.
 *   - Training company roles/titles are not stated in the resume — role set to "Developer".
 *   - liveUrl / repoUrl omitted for all projects (not in resume).
 *   - Additional training entry has no company name — company is "Additional Training".
 */
export const experience: Experience[] = [
  // ── Work experience ──────────────────────────────────────────
  {
    company: "Tagline Infotech",
    role: "Full-Stack Developer",
    type: "work",
    startDate: "Oct 2022",
    endDate: "Present",
    location: "Surat, Gujarat",
    projects: [
      {
        name: "Coin Toss Game",
        description:
          "High-concurrency B2B gaming platform supporting real-time gameplay, wallet integration, and leaderboard management for thousands of concurrent users.",
        technologies: [
          "Socket.io",
          "NestJS",
          "PostgreSQL",
          "Next.js",
          "TypeScript",
          "Prisma",
          "Redis",
          "AWS SQS",
        ],
        highlights: [
          "Architected and developed a high-concurrency B2B gaming platform from scratch using NestJS, TypeScript, and Prisma (PostgreSQL), supporting 1,000+ concurrent users.",
          "Engineered a robust B2B Wallet Integration system, handling complex transactional logic via secure webhooks with third-party Operators.",
          "Implemented asynchronous game-round processing using AWS SQS and worker-based architecture, allowing settled rounds to trigger new rounds without blocking the main application flow.",
          "Developed a secure RNG-based game engine with configurable probability parameters and server-side outcome validation.",
          "Implemented Redis caching for high-frequency game and leaderboard data, reducing repeated PostgreSQL queries and improving response performance.",
          "Leveraged Socket.io for low-latency broadcasting of game states, bets, leaderboard rankings, and results to thousands of connected clients simultaneously.",
        ],
      },
      {
        name: "Urban Genba",
        description:
          "Enterprise frontend across three interconnected applications, delivering complex UI features in a highly iterative, stakeholder-driven environment.",
        technologies: ["React.js", "Ant Design", "Highcharts"],
        highlights: [
          "Developed frontend features across three enterprise applications using React.js and Ant Design, translating continuously evolving business requirements into practical user interfaces.",
          "Worked in a highly iterative environment where requirements evolved as stakeholders gathered new on-field knowledge, frequently adapting existing workflows and interfaces to reflect changing business processes.",
          "Built complex dynamic forms, data-heavy tables, and reusable UI components for enterprise workflows, focusing on maintainability and consistent user experience across applications.",
        ],
      },
    ],
  },

  // ── Training & Internship ────────────────────────────────────
  {
    company: "LocumFind",
    role: "Frontend Developer",
    type: "internship",
    startDate: "",
    endDate: "",
    location: "",
    projects: [],
    highlights: [
      "Developed responsive and reusable React features for a platform connecting locum pharmacists with pharmacy businesses.",
      "Implemented advanced multi-filter search, real-time chat using WebSockets, and a dynamic event calendar.",
      "Integrated Google Address Autocomplete and built complex dynamic forms with validation and reusable components.",
      "Developed frontend state-management and component architecture to support interactive, data-driven workflows.",
    ],
  },
  {
    company: "Gajari",
    role: "Full-Stack Developer",
    type: "internship",
    startDate: "",
    endDate: "",
    location: "",
    projects: [],
    highlights: [
      "Developed static and interactive frontend prototypes ahead of backend availability to support frequent product demonstrations and stakeholder feedback.",
      "Implemented hierarchical role-based access control (RBAC) to manage multi-user permissions across application modules.",
      "Developed workflows for maintenance scheduling, repair ticketing, refrigerant recovery, cylinder tracking, certificate generation, vehicle scrapping, and material reuse tracking.",
      "Built Highcharts-based data visualizations and optimized frontend performance for high-volume form interactions.",
    ],
  },
  {
    company: "Additional Training",
    role: "Trainee Developer",
    type: "training",
    startDate: "",
    endDate: "",
    location: "",
    projects: [],
    highlights: [
      "Completed practical software development training focused on JavaScript and Node.js, including modular application development, debugging, version control, and collaborative code reviews.",
      "Gained hands-on experience with Git/GitHub, pair programming, and code review workflows through practical development exercises.",
      "Implemented a coin-based reward system and coupon generation logic to support user engagement and promotional workflows.",
      "Developed scheduled tasks using Cron jobs and implemented database queries and MongoDB schema changes for application features.",
    ],
  },
];
