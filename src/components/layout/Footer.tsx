import { Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

/**
 * Footer Component — Minimalist Footer
 * Verified links only. Server Component.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);

  return (
    <footer className="border-t border-border bg-bg py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Identity */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-sm font-bold text-text">{personal.name}</p>
            <p className="text-xs text-text-3 mt-0.5">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-text-2">
            {hasGithub && (
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-2 transition-colors"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
            {hasLinkedIn && (
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-2 transition-colors"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-accent-2 transition-colors"
            >
              <Mail size={14} /> Email
            </a>
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
    </footer>
  );
}
