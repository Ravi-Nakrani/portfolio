import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border border-indigo-400/40",
    "shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)] hover:border-indigo-300/60",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  ].join(" "),
  secondary: [
    "bg-surface/90 text-text border border-border/90 backdrop-blur-md",
    "hover:bg-surface-2 hover:border-accent/40 hover:text-text hover:-translate-y-0.5",
    "active:translate-y-0 active:scale-[0.97]",
    "shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  ].join(" "),
  outline: [
    "bg-transparent text-accent-2 border border-accent/40",
    "hover:bg-accent-dim hover:border-accent hover:text-text hover:-translate-y-0.5",
    "active:translate-y-0 active:scale-[0.97]",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-2 border border-transparent",
    "hover:bg-surface/80 hover:text-text hover:-translate-y-0.5",
    "active:translate-y-0 active:scale-[0.97]",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3.5 text-xs gap-1.5 rounded-lg",
  md: "h-10 px-4.5 text-sm gap-2 rounded-xl",
  lg: "h-12 px-6 text-sm sm:text-base gap-2.5 rounded-xl font-semibold",
};

/**
 * Button — polymorphic component with high-performance micro-interactions.
 * Four variants, three sizes. Supports smooth icon transitions.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
  disabled = false,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center font-medium transition-all duration-200 outline-none whitespace-nowrap select-none cursor-pointer",
    "[&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-0.5",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "pointer-events-none opacity-40 cursor-not-allowed",
    className
  );

  if ("href" in rest && rest.href) {
    const { href, external } = rest;
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={"type" in rest && rest.type ? rest.type : "button"}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={"onClick" in rest ? rest.onClick : undefined}
    >
      {children}
    </button>
  );
}
