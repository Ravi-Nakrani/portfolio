import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "outline" | "mono";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border border-border bg-surface text-text-2 hover:border-border-focus hover:text-text",
  accent: "border border-accent/30 bg-accent-dim text-accent-2",
  outline: "border border-border bg-transparent text-text-2",
  mono: "border-0 bg-accent-dim text-accent-2 font-mono tracking-wide",
};

/**
 * Badge — technology tag / skill pill.
 * Server Component.
 */
export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
