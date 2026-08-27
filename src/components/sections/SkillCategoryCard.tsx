import type { SkillGroup } from "@/types";

interface SkillCategoryCardProps {
  group: SkillGroup;
}

/**
 * SkillCategoryCard
 * Reusable component for rendering categorized technical skill groups
 * within the technology matrix.
 * Server Component.
 */
export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-200 hover:border-border-focus/60 hover:bg-surface-2/60 shadow-sm">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent-2">
            {group.category}
          </h3>
          <span className="font-mono text-[11px] text-text-3 font-medium">
            {group.eyebrow}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border/80 bg-surface-2/80 px-2.5 py-1 text-xs font-medium text-text-2 transition-colors hover:text-text hover:border-accent/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
