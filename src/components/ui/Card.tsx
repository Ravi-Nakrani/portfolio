import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  /** Renders as a hover-elevating card when true */
  hoverable?: boolean;
  /** Renders with accent left border */
  accented?: boolean;
}

/**
 * Card — surface container for projects, experience entries, etc.
 * Server Component.
 */
export function Card({
  className,
  children,
  hoverable = false,
  accented = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface",
        hoverable &&
          "transition-all duration-200 hover:border-border-focus/50 hover:bg-surface-2 hover:shadow-lg hover:shadow-black/20",
        accented && "border-l-2 border-l-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
