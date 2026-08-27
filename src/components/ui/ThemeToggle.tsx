"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reads whether the document currently has the light theme class.
 */
function getThemeSnapshot(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

/**
 * Subscribes to class changes on <html> to react to theme updates.
 */
function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === "class") {
        callback();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

/**
 * ThemeToggle
 * Accessible theme switcher powered by useSyncExternalStore.
 * Toggles between dark (default) and light themes with smooth token transitions.
 * Client Component.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerSnapshot
  );

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    const html = document.documentElement;
    html.classList.add("transitioning");
    if (next === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Ignore storage errors in restricted environments
    }
    setTimeout(() => html.classList.remove("transitioning"), 250);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-2",
        "transition-colors hover:border-border-focus hover:text-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun size={15} aria-hidden="true" />
      ) : (
        <Moon size={15} aria-hidden="true" />
      )}
    </button>
  );
}
