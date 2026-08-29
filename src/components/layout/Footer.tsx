"use client";

import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

/**
 * Footer Component — Minimalist, polished Footer.
 * Verified links only. Client Component.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);
  const prefersReduced = useReducedMotion();

  return (
    <motion.footer
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative border-t border-border/80 bg-bg/90 py-12 backdrop-blur-md"
    >
      {/* Top animated line shimmer */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px animate-line-shimmer"
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Identity */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-sm font-bold tracking-tight text-text">
              {personal.name}
            </p>
            <p className="text-xs text-text-3 mt-0.5">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Social Links with Spring Physics Hover */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium text-text-2">
            {hasGithub && (
              <motion.a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReduced ? undefined : { y: -2, scale: 1.05 }}
                whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-surface hover:text-text"
              >
                <GithubIcon
                  size={14}
                  className="transition-transform group-hover:scale-110"
                />{" "}
                GitHub
              </motion.a>
            )}
            {hasLinkedIn && (
              <motion.a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReduced ? undefined : { y: -2, scale: 1.05 }}
                whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-surface hover:text-text"
              >
                <LinkedinIcon
                  size={14}
                  className="transition-transform group-hover:scale-110"
                />{" "}
                LinkedIn
              </motion.a>
            )}
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={prefersReduced ? undefined : { y: -2, scale: 1.05 }}
              whileTap={prefersReduced ? undefined : { scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-surface hover:text-text"
            >
              <Mail
                size={14}
                className="transition-transform group-hover:scale-110"
              />{" "}
              Email
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
            <p className="text-xs text-text-3 font-mono">
              &copy; {year} {personal.name}
            </p>
            <p className="text-[11px] text-text-3/80 mt-0.5">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
