import type { SkillGroup } from "@/types";

interface SkillCategoryCardProps {
  group: SkillGroup;
}

/**
 * SkillCategoryCard
 * Reusable component for rendering categorized technical skill groups
 * within the technology matrix with clean typography.
 * Server Component.
 */
export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 hover:border-border-focus/60 hover:bg-surface-2/70 shadow-sm">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-2">
            {group.category}
          </h3>
          <span className="font-mono text-xs text-text-3 font-medium">
            {group.eyebrow}
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border/80 bg-surface-2/70 px-3 py-1.5 text-xs sm:text-sm font-medium text-text-2 transition-colors hover:text-text hover:border-accent/40 hover:bg-surface-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
