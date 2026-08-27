// ============================================================
// src/types/index.ts
// Central type definitions for the portfolio.
// All types strictly derived from RESUME.md — no invented fields.
// ============================================================

// --------------- Personal / Identity ---------------

export interface SocialLinks {
  linkedin: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  yearsOfExperience: number;
  specializations: string[];
  social: SocialLinks;
}

// --------------- Engineering Highlights ---------------

export interface EngineeringHighlight {
  id: string;
  metric: string;
  title: string;
  description: string;
  technologies: string[];
  iconName: "users" | "zap" | "cpu" | "database";
}

// --------------- Featured Case Study ---------------

export interface CaseStudyPillar {
  title: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  tagline: string;
  overview: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  pillars: CaseStudyPillar[];
  engineeringTakeaways: string[];
}

// --------------- Skills ---------------

export interface SkillGroup {
  category: string;
  eyebrow: string;
  skills: string[];
}

// --------------- Experience ---------------

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  category?: string;
}

export type ExperienceType = "work" | "internship" | "training";

export interface Experience {
  company: string;
  role: string;
  type: ExperienceType;
  startDate: string;
  endDate: string;
  location: string;
  projects: Project[];
  highlights?: string[];
}

// --------------- Education ---------------

export interface Education {
  institution: string;
  degree: string;
  year: string;
  location?: string;
}

// --------------- Professional Strengths / Soft Skills ---------------

export interface Strength {
  name: string;
  description: string;
  iconSymbol: string;
}

export type SoftSkill = Strength;

// --------------- Navigation ---------------

export interface NavItem {
  label: string;
  href: string;
}
