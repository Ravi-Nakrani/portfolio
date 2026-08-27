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

// --------------- Skills ---------------

export interface SkillGroup {
  category: string;
  eyebrow: string;
  skills: string[];
}

// --------------- Experience & Selected Work ---------------

export interface SelectedWorkItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  selectedWork: SelectedWorkItem[];
  contributions: string[];
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

// --------------- Navigation ---------------

export interface NavItem {
  label: string;
  href: string;
}
