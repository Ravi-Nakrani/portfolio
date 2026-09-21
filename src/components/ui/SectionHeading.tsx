import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small mono label above the title. */
  eyebrow: string;
  title: string;
  /** Optional supporting line. Omit on secondary sections to keep them quiet. */
  description?: string;
  /** id for the <h2>, wired to the section's aria-labelledby. */
  id?: string;
  /**
   * Visual weight. "primary" is for the sections that carry the argument
   * (experience, skills); "secondary" deliberately steps down so supporting
   * sections don't compete with them.
   */
  level?: "primary" | "secondary";
  className?: string;
}

/**
 * SectionHeading
 * One heading pattern for every section, with an explicit hierarchy step so
 * section importance is expressed through type rather than every section
 * shouting at the same size.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  level = "primary",
  className,
}: SectionHeadingProps) {
  const isPrimary = level === "primary";

  return (
    <div className={cn(isPrimary ? "mb-12 sm:mb-14" : "mb-8", className)}>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
          {eyebrow}
        </span>
      </div>

      <h2
        id={id}
        className={cn(
          "font-display tracking-tight text-text",
          isPrimary
            ? "text-3xl font-semibold sm:text-4xl lg:text-5xl"
            : "text-2xl font-semibold sm:text-3xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-base text-text-2">{description}</p>
      )}
    </div>
  );
}
