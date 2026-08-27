"use client";

import { useState, useEffect } from "react";

/**
 * useScrolled
 * Returns true once the user has scrolled past the given threshold.
 * Used by the Header to add a background blur/shadow on scroll.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial value (handles page refresh mid-scroll)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
