"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * useTypewriter
 * Cycles through `words`, typing and deleting each one in turn — classic
 * typewriter effect, driven by plain timeouts (no animation library needed).
 * Returns the currently displayed substring.
 *
 * Respects prefers-reduced-motion: returns the first word, fully typed and
 * static, without ever starting the type/delete loop.
 */
export function useTypewriter(
  words: string[],
  {
    typingSpeed = 42,
    deletingSpeed = 22,
    // Long hold: the title is real information, so it should sit fully typed
    // and readable most of the time rather than perpetually mid-word.
    pauseDuration = 3200,
  }: UseTypewriterOptions = {}
): string {
  const prefersReduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReduced || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    const delay =
      !isDeleting && charCount === currentWord.length
        ? pauseDuration
        : isDeleting
          ? deletingSpeed
          : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charCount < currentWord.length) {
          setCharCount((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charCount > 0) {
        setCharCount((c) => c - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    charCount,
    isDeleting,
    wordIndex,
    words,
    prefersReduced,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  if (prefersReduced) return words[0] ?? "";

  const currentWord = words[wordIndex % words.length] ?? "";
  return currentWord.slice(0, charCount);
}
