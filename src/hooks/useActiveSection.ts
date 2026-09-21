"use client";

import { useState, useEffect, useRef } from "react";

/**
 * useActiveSection
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the id of the active section (without the # prefix).
 *
 * Used by NavLink to apply active styles.
 *
 * @param sectionIds - Array of section element ids to observe
 * @param rootMargin - IntersectionObserver root margin (default: "-20% 0px -75% 0px")
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = "-20% 0px -75% 0px"
): string {
  // Starts empty so no nav item is marked active while the user is still on
  // the hero — defaulting to the first section highlighted "About" at page top.
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const observer = observerRef.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
}
