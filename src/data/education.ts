import type { Education } from "@/types";

/**
 * Education entries.
 * Source of truth: RESUME.md — "Education" section.
 *
 * NOTE: Degree field of study is not stated in the resume.
 * "Bachelor's degree" is used verbatim — no field invented.
 */
export const education: Education[] = [
  {
    institution: "Maharaja Krishnakumarsinhji Bhavnagar University",
    degree: "Bachelor's Degree",
    year: "2022",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    degree: "12th Standard",
    year: "2018",
  },
];
