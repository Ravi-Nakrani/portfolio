import { MapPin } from "lucide-react";
import type { Experience } from "@/types";

interface ExperienceItemProps {
  entry: Experience;
  isLast: boolean;
  isFirst?: boolean;
}

/**
 * ExperienceItem
 * Reusable component for rendering a single employment or training entry
 * with modern editorial timeline aesthetics and comfortable typography.
 * Server Component.
 */
export function ExperienceItem({
  entry,
  isLast,
  isFirst = false,
}: ExperienceItemProps) {
  // Collect all unique technologies across projects if available
  const allTechs =
    entry.projects.length > 0
      ? Array.from(new Set(entry.projects.flatMap((p) => p.technologies)))
      : [];

  return (
    <div className="relative grid grid-cols-[auto,1fr] gap-5 sm:gap-8 pb-12 last:pb-2">
      {/* ── Timeline Column ── */}
      <div className="flex flex-col items-center">
        {/* Glowing Node for active/first role */}
        {isFirst ? (
          <div className="relative flex h-7 w-7 shrink-0 items-center justify-center">
            <span className="absolute h-7 w-7 rounded-full bg-accent/30 animate-ping" />
            <span className="relative h-4.5 w-4.5 rounded-full border-2 border-accent bg-[#060913] shadow-[0_0_14px_rgba(99,102,241,0.9)]" />
          </div>
        ) : (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2">
            <span className="h-2 w-2 rounded-full bg-text-3" />
          </div>
        )}

        {/* Vertical connector line */}
        {!isLast && (
          <div
            className={`mt-3 w-px flex-1 ${
              isFirst
                ? "bg-gradient-to-b from-accent/50 to-border"
                : "bg-border/70"
            }`}
            aria-hidden="true"
          />
        )}
      </div>

      {/* ── Content Card Column ── */}
      <div className="min-w-0">
        <div
          className={`rounded-2xl border ${
            isFirst
              ? "border-border bg-surface/80 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md"
              : "border-border/70 bg-surface/60 backdrop-blur-sm"
          } p-6 sm:p-8 transition-all duration-200 hover:border-border-focus/60`}
        >
          {/* Header Row: Company/Role on left, Date/Location on right */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-border/50 pb-5">
            <div>
              <h3 className="text-xl font-bold text-text sm:text-2xl">
                {entry.company}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-accent-2 mt-1">
                {entry.role}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs sm:text-sm text-text-3 font-mono">
              {(entry.startDate || entry.endDate) && (
                <span className="text-text-2 font-medium">
                  {[entry.startDate, entry.endDate].filter(Boolean).join(" — ")}
                </span>
              )}
              {entry.location && (
                <span className="flex items-center gap-1.5 mt-1 font-sans text-xs text-text-3">
                  <MapPin
                    size={12}
                    className="text-accent"
                    aria-hidden="true"
                  />
                  {entry.location}
                </span>
              )}
            </div>
          </div>

          {/* Tagline or overview */}
          {isFirst ? (
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-text-2">
              Developing high-concurrency B2B gaming platform and enterprise
              SaaS applications. Building real-time systems, designing
              transactional workflows, and implementing scalable backend
              services.
            </p>
          ) : null}

          {/* Sub-projects breakdown if any */}
          {entry.projects.length > 0 ? (
            <div className="mt-6 flex flex-col gap-5">
              {entry.projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border border-border/70 bg-surface-2/40 p-5 transition-colors"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text">
                      {project.name}
                    </h4>
                    {project.name === "Coin Toss Game" && (
                      <a
                        href="#case-study"
                        className="font-mono text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                      >
                        Featured Case Study ↓
                      </a>
                    )}
                  </div>

                  <p className="mb-4 text-xs sm:text-sm leading-relaxed text-text-2">
                    {project.description}
                  </p>

                  <ul className="flex flex-col gap-2 pl-3">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="relative text-xs sm:text-sm leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.5em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {/* Highlights for entries without sub-projects */}
          {entry.highlights && entry.highlights.length > 0 && (
            <div className="mt-5">
              <ul className="flex flex-col gap-2.5 pl-3">
                {entry.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="relative text-xs sm:text-sm leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.5em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60 before:content-['']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges Footer */}
          {allTechs.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-5">
              {allTechs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/80 bg-surface-2/80 px-2.5 py-1 font-mono text-xs font-medium text-text-2 transition-colors hover:text-text hover:border-accent/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
