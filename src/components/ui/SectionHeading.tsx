import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  /** Optional mono-style eyebrow label above the title */
  eyebrow?: string;
}

/**
 * SectionHeading — consistent h2 + optional eyebrow + subtitle.
 * Server Component.
 */
export function SectionHeading({
  id,
  title,
  subtitle,
  className,
  align = "left",
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent",
            align === "center" && "text-center"
          )}
          aria-hidden="true"
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-text sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-2 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
