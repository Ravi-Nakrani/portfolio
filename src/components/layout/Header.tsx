"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data";
import { personal } from "@/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

/**
 * Header — sticky navigation bar.
 * - Scroll-aware border + backdrop blur
 * - Active section highlighting via IntersectionObserver
 * - Accessible mobile slide-down menu with AnimatePresence
 * - Theme toggle
 * Client Component (scroll, state, browser APIs).
 */
export function Header() {
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const nameInitials = personal.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo / Name ── */}
        <a
          href="#hero"
          onClick={closeMenu}
          className={cn(
            "flex items-center gap-2.5 rounded-lg py-1 pr-2 transition-opacity hover:opacity-90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          )}
          aria-label={`${personal.name} — scroll to top`}
        >
          {/* Monogram avatar badge */}
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/20 border border-accent/40 text-xs font-bold text-accent-2 select-none shadow-[0_0_12px_rgba(99,102,241,0.25)]">
            {nameInitials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-text">
            {personal.name}
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2" role="list">
            {navItems
              .filter((item) => item.href !== "#case-study") // Reference shows About, Experience, Projects, Skills, Education, Contact
              .map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative flex h-8 items-center rounded-md px-3 text-xs lg:text-sm font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        isActive ? "text-text" : "text-text-2 hover:text-text"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-md bg-surface border border-border"
                          transition={{
                            type: "spring",
                            bounce: 0.15,
                            duration: 0.4,
                          }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* Download / View Resume button */}
          <a
            href="#contact"
            className={cn(
              "hidden sm:inline-flex items-center justify-center h-8 px-3.5 rounded-lg text-xs font-medium",
              "border border-border bg-surface text-text hover:border-accent/50 hover:bg-surface-2 transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
            )}
          >
            Download Resume
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-2 md:hidden",
              "transition-colors hover:border-border-focus hover:text-text",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((p) => !p)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={15} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={15} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile navigation links">
              <ul className="flex flex-col px-4 py-3" role="list">
                {navItems.map((item, i) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                          isActive
                            ? "bg-surface text-text"
                            : "text-text-2 hover:bg-surface hover:text-text"
                        )}
                        onClick={closeMenu}
                      >
                        {isActive && (
                          <span
                            className="h-1 w-1 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                        )}
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
