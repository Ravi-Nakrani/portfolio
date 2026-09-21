import type { PersonalInfo } from "@/types";

/**
 * Personal & Professional Identity.
 * Source of truth: RESUME.md
 */
export const personal: PersonalInfo = {
  name: "Ravi Nakrani",
  title: "Full-Stack Developer",
  subtitle: "React | Next.js | Node.js | NestJS",
  location: "Surat, Gujarat, India",
  email: "ravinakrani10@gmail.com",
  phone: "+91 72839 43408",
  yearsOfExperience: 4,
  specializations: [
    "Scalable Web Applications",
    "Real-Time Systems",
    "High-Concurrency Applications",
  ],
  summary:
    "Full-Stack Developer with 4 years of experience building scalable web applications and real-time systems with TypeScript, React, Next.js, Node.js, and NestJS. Built a high-concurrency B2B gaming platform from scratch serving 1,000+ concurrent users, with wallet integrations, Redis caching, and asynchronous processing on AWS SQS. On the frontend, delivers complex enterprise interfaces, including dynamic forms, data-heavy dashboards, and role-based access control. Comfortable owning features end to end, from database design and APIs to polished, responsive user interfaces.",
  social: {
    linkedin: "https://linkedin.com/in/ravi-nakrani-0830a5250",
    github: "https://github.com/Ravi-Nakrani",
  },
};
