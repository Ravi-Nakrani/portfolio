import type { Strength } from "@/types";

/**
 * Professional Strengths / Soft Skills
 * Source of truth: RESUME.md — "Soft Skills" section.
 * Descriptions are verbatim from the resume.
 */
export const strengths: Strength[] = [
  {
    name: "Problem Solving",
    description:
      "Translating evolving business requirements into practical technical solutions and maintainable application workflows.",
    iconSymbol: "⌗",
  },
  {
    name: "Ownership",
    description:
      "Comfortable independently owning features from requirement analysis through implementation and delivery.",
    iconSymbol: "◈",
  },
  {
    name: "Collaboration",
    description:
      "Experience working with Design, QA, Product, and development teams in Agile/Scrum environments.",
    iconSymbol: "⬡",
  },
  {
    name: "Adaptability",
    description:
      "Comfortable working with changing requirements and quickly learning new technologies to solve technical challenges.",
    iconSymbol: "⟳",
  },
];
