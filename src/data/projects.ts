import type { Project } from "@/types";

/**
 * Projects list representing portfolio works.
 * Source of truth: RESUME.md
 *
 * NOTE: Live/repo URLs are omitted (undefined) because they were not
 * supplied in the source resume. The UI conditionally hides missing links.
 */
export const otherProjects: Project[] = [
  {
    name: "Urban Genba",
    category: "Enterprise SaaS Frontend",
    description:
      "Frontend features across three enterprise applications using React.js and Ant Design, translating continuously evolving business requirements into practical user interfaces.",
    technologies: ["React.js", "Ant Design", "Highcharts", "TypeScript"],
    highlights: [
      "Developed frontend features across three interconnected enterprise applications using React.js and Ant Design.",
      "Thrived in a highly iterative environment where requirements evolved as stakeholders gathered on-field knowledge.",
      "Built complex dynamic forms, data-heavy tables, and reusable UI components with a strong focus on cross-application maintainability.",
    ],
  },
  {
    name: "LocumFind",
    category: "Real-Time Healthcare Marketplace",
    description:
      "Platform connecting locum pharmacists with pharmacy businesses, featuring multi-filter matching, real-time WebSocket chat, and dynamic event calendars.",
    technologies: [
      "React",
      "WebSockets",
      "JavaScript",
      "Google Autocomplete",
      "State Management",
    ],
    highlights: [
      "Developed responsive and reusable React components for connecting locum pharmacists with pharmacy businesses.",
      "Implemented advanced multi-filter search, real-time chat using WebSockets, and a dynamic event scheduling calendar.",
      "Integrated Google Address Autocomplete and built complex dynamic forms with client-side validation.",
      "Structured frontend state management to reliably drive interactive, data-intensive user workflows.",
    ],
  },
  {
    name: "Gajari",
    category: "Operations & Enterprise RBAC",
    description:
      "Enterprise operations management system with hierarchical role-based access control (RBAC), complex operational workflows, and Highcharts visualizations.",
    technologies: [
      "Express.js",
      "MongoDB",
      "React.js",
      "WebSockets",
      "Highcharts",
    ],
    highlights: [
      "Developed interactive prototypes ahead of backend availability to support stakeholder demonstrations and rapid feedback.",
      "Implemented hierarchical role-based access control (RBAC) to govern multi-user permissions across modules.",
      "Built workflows for maintenance scheduling, repair ticketing, refrigerant recovery, cylinder tracking, certificate generation, and vehicle scrapping.",
      "Constructed Highcharts-based data visualizations and optimized frontend performance for high-volume form interactions.",
    ],
  },
];
