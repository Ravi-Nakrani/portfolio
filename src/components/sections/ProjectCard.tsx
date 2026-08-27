import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * ProjectCard
 * Reusable component for rendering individual projects in an editorial format.
 * Conditionally renders external links only when URLs are available.
 * Server Component.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLiveUrl = Boolean(project.liveUrl);
  const hasRepoUrl = Boolean(project.repoUrl);
  const formattedIndex =
    index !== undefined ? String(index).padStart(2, "0") : null;

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 hover:border-border-focus/60 hover:bg-surface-2/70 shadow-sm">
      <div>
        {/* Top Header: Index & Category */}
        <div className="mb-4 flex items-center justify-between">
          {formattedIndex && (
            <span className="font-mono text-sm font-bold text-accent-2">
              {formattedIndex}
            </span>
          )}
          {project.category && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
              {project.category}
            </span>
          )}
        </div>

        {/* Title & Action Links */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-text transition-colors group-hover:text-accent-2">
            {project.name}
          </h3>

          {/* Links if available */}
          {(hasLiveUrl || hasRepoUrl) && (
            <div className="flex items-center gap-2">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text-3 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              {hasRepoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code`}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text-3 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <FolderGit2 size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mb-4 text-xs leading-relaxed text-text-2">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mb-6 flex flex-col gap-2 pl-3">
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

      {/* Technologies */}
      <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/80 bg-surface-2/80 px-2 py-0.5 font-mono text-[11px] text-text-3 group-hover:text-text-2 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
