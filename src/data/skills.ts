import type { SkillGroup } from "@/types";

/**
 * Technical skills grouped by category.
 * Source of truth: RESUME.md — "Technical Skills" section.
 * Order matches resume section order.
 */
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    eyebrow: "Core",
    skills: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    eyebrow: "Client-Side",
    skills: [
      "React",
      "React Hooks",
      "Next.js",
      "HTML",
      "CSS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Highcharts",
    ],
  },
  {
    category: "Backend",
    eyebrow: "Server & Realtime",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Webhooks",
      "JWT Authentication",
      "WebSockets",
      "Socket.io",
    ],
  },
  {
    category: "Databases",
    eyebrow: "Data Persistence",
    skills: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "MySQL", "Redis"],
  },
  {
    category: "Cloud & Deployment",
    eyebrow: "Infrastructure",
    skills: ["AWS SQS", "Docker", "CI/CD", "Vercel", "Render", "PM2"],
  },
  {
    category: "Tools",
    eyebrow: "Workflow",
    skills: ["Git", "Postman", "Jira", "Agile/Scrum"],
  },
];
