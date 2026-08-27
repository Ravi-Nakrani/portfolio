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
 * with modern editorial timeline aesthetics.
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
    <div className="relative grid grid-cols-[auto,1fr] gap-4 sm:gap-6 pb-10 last:pb-2">
      {/* ── Timeline Column ── */}
      <div className="flex flex-col items-center">
        {/* Glowing Node for active/first role */}
        {isFirst ? (
          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
            <span className="absolute h-6 w-6 rounded-full bg-accent/30 animate-ping" />
            <span className="relative h-4 w-4 rounded-full border-2 border-accent bg-[#060913] shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
          </div>
        ) : (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2">
            <span className="h-2 w-2 rounded-full bg-text-3" />
          </div>
        )}

        {/* Vertical connector line */}
        {!isLast && (
          <div
            className={`mt-2 w-px flex-1 ${
              isFirst
                ? "bg-gradient-to-b from-accent/50 to-border"
                : "bg-border"
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
              ? "border-border/90 bg-surface/90 shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
              : "border-border/60 bg-surface/60"
          } p-6 sm:p-7 transition-all duration-200 hover:border-border-focus/60`}
        >
          {/* Header Row: Company/Role on left, Date/Location on right */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-border/50 pb-4">
            <div>
              <h3 className="text-lg font-bold text-text sm:text-xl">
                {entry.company}
              </h3>
              <p className="text-sm font-semibold text-accent-2 mt-0.5">
                {entry.role}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-text-3 font-mono">
              {(entry.startDate || entry.endDate) && (
                <span>
                  {[entry.startDate, entry.endDate].filter(Boolean).join(" — ")}
                </span>
              )}
              {entry.location && (
                <span className="flex items-center gap-1 mt-0.5 font-sans text-text-3">
                  <MapPin
                    size={11}
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
            <p className="mt-4 text-xs leading-relaxed text-text-2 sm:text-sm">
              Developing high-concurrency B2B gaming platform and enterprise
              SaaS applications. Building real-time systems, designing
              transactional workflows, and implementing scalable backend
              services.
            </p>
          ) : null}

          {/* Sub-projects breakdown if any */}
          {entry.projects.length > 0 ? (
            <div className="mt-4 flex flex-col gap-4">
              {entry.projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border border-border/60 bg-surface-2/40 p-4 transition-colors"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text">
                      {project.name}
                    </h4>
                    {project.name === "Coin Toss Game" && (
                      <a
                        href="#case-study"
                        className="font-mono text-[11px] font-semibold text-accent hover:underline"
                      >
                        View Case Study ↓
                      </a>
                    )}
                  </div>

                  <p className="mb-3 text-xs leading-relaxed text-text-2">
                    {project.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 pl-3">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="relative text-xs leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.45em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60 before:content-['']"
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
            <div className="mt-4">
              <ul className="flex flex-col gap-2 pl-3">
                {entry.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="relative text-xs leading-relaxed text-text-2 before:absolute before:-left-3 before:top-[0.45em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60 before:content-['']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges Footer */}
          {allTechs.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
              {allTechs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/80 bg-surface-2/80 px-2.5 py-1 text-[11px] font-medium text-text-2 transition-colors hover:text-text hover:border-accent/40"
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
