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
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-accent text-white border border-accent",
    "hover:bg-accent-2 hover:border-accent-2",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "active:scale-[0.98]",
  ].join(" "),
  secondary: [
    "bg-surface text-text border border-border",
    "hover:bg-surface-2 hover:border-border-focus",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "active:scale-[0.98]",
  ].join(" "),
  outline: [
    "bg-transparent text-accent border border-accent/40",
    "hover:bg-accent-dim hover:border-accent",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-2 border border-transparent",
    "hover:bg-surface hover:text-text",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
  md: "h-9 px-4 text-sm gap-2 rounded-lg",
  lg: "h-11 px-6 text-sm gap-2 rounded-lg",
};

/**
 * Button — polymorphic: renders <a> when href is provided, else <button>.
 * Four variants, three sizes. Server Component.
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
    "inline-flex items-center justify-center font-medium transition-all outline-none whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "pointer-events-none opacity-40",
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
      type="button"
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={"onClick" in rest ? rest.onClick : undefined}
    >
      {children}
    </button>
  );
}
