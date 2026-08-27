import type { PersonalInfo } from "@/types";

/**
 * Personal & Professional Identity.
 * Source of truth: RESUME.md
 *
 * Missing social links (e.g. GitHub) are left empty to avoid inventing URLs.
 */
export const personal: PersonalInfo = {
  name: "Ravi Nakrani",
  title: "Full-Stack Software Engineer",
  subtitle: "MERN | Node.js | React",
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
    "Full-Stack Software Engineer with 4 years of experience building scalable web applications and real-time systems using TypeScript, Node.js, NestJS, React, and Next.js. Experienced in designing high-concurrency applications, transactional workflows, REST APIs, WebSocket-based systems, Redis caching, and asynchronous processing with AWS SQS. Strong background in PostgreSQL, MongoDB, and enterprise SaaS applications.",
  social: {
    linkedin: "https://linkedin.com/in/ravi-nakrani-0830a5250",
    github: "", // Left empty per resume — hidden automatically in UI
  },
};
