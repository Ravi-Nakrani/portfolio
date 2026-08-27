import type { NavItem } from "@/types";

/**
 * Navigation items for the site header and mobile navigation.
 * Corresponds to section anchor IDs in page.tsx.
 */
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
