import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  /** Must match a NavItem href (e.g. "about", "skills") */
  id: string;
  /** Optional aria-labelledby value pointing to the section's h2 id */
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionWrapper
 * Consistent <section> with id anchor, vertical rhythm, and Container.
 * All portfolio sections are wrapped in this component.
 * Server Component.
 */
export function SectionWrapper({
  id,
  labelledBy,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-10 sm:py-15 lg:py-20", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
