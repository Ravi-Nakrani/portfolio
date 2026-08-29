"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems, personal } from "@/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

/**
 * Header — sticky navigation bar.
 * - Dynamic scroll-aware border, shadow, and backdrop blur
 * - Animated scroll progress indicator bar
 * - Animated layoutId active section indicator with spring dynamics
 * - Hover preview indicators
 * - Accessible mobile slide-down menu with staggered child transitions
 * - Theme toggle
 */
export function Header() {
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, 1]
  );

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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-bg/85 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
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
            "group flex items-center gap-2.5 rounded-xl py-1.5 pr-2.5 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          )}
          aria-label={`${personal.name} — scroll to top`}
        >
          {/* Monogram avatar badge with subtle hover glow & spring hover */}
          <motion.span
            whileHover={prefersReduced ? undefined : { scale: 1.1, rotate: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/25 to-indigo-600/15 border border-indigo-400/40 text-xs font-bold text-accent-2 select-none shadow-[0_0_14px_rgba(99,102,241,0.3)] transition-colors group-hover:border-indigo-300/70"
          >
            {nameInitials}
          </motion.span>
          <span className="text-sm font-semibold tracking-tight text-text group-hover:text-accent-2 transition-colors duration-200">
            {personal.name}
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav
          aria-label="Main navigation"
          className="hidden md:block"
          onMouseLeave={() => setHoveredNav(null)}
        >
          <ul
            className="flex items-center gap-1 lg:gap-1.5 rounded-full p-1 border border-border/60 bg-surface/50 backdrop-blur-md shadow-inner"
            role="list"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isHovered = hoveredNav === item.href;

              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative flex h-8 items-center rounded-full px-3.5 text-xs lg:text-sm font-medium transition-colors duration-150 select-none",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "text-text font-semibold"
                        : "text-text-2 hover:text-text"
                    )}
                  >
                    {/* Active pill indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-0 rounded-full bg-surface-2 border border-border-focus/50 shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                        transition={{
                          type: "spring",
                          bounce: 0.18,
                          duration: 0.45,
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Hover pill preview */}
                    {!isActive && isHovered && (
                      <motion.span
                        layoutId="nav-hover-indicator"
                        className="absolute inset-0 rounded-full bg-surface/80 border border-border/70"
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.25,
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

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-border bg-surface/70 text-text-2 md:hidden",
              "transition-all duration-200 hover:border-accent/50 hover:text-text hover:bg-surface",
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
                  <X size={16} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={16} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Scroll Progress Bar at bottom edge of header ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-2 to-cyan-accent origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-border/80 bg-bg/95 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <nav aria-label="Mobile navigation links">
              <ul className="flex flex-col px-4 py-3.5 gap-1" role="list">
                {navItems.map((item, i) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035, duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                          isActive
                            ? "bg-surface-2 border border-border-focus/40 text-text font-semibold shadow-sm"
                            : "text-text-2 hover:bg-surface hover:text-text border border-transparent"
                        )}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
