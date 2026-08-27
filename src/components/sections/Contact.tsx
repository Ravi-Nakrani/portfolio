import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data";

const HEADING_ID = "contact-heading";

/**
 * Contact Section — Direct Channels & Accessible Form
 * Server Component hosting a Client Form.
 */
export function Contact() {
  const hasLinkedIn = Boolean(personal.social.linkedin);
  const hasGithub = Boolean(personal.social.github);

  return (
    <SectionWrapper id="contact" labelledBy={HEADING_ID}>
      <AnimatedSection>
        <div className="mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3 block">
            Get in Touch
          </span>
          <h2
            id={HEADING_ID}
            className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-2">
            Whether you have a high-concurrency challenge, real-time system
            architecture, or full-stack engineering opportunities, I&apos;d love
            to connect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* ── Left Column: Direct Channels (5 cols) ── */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
              <div className="mb-6 flex items-center gap-2 text-accent-2">
                <MessageSquare size={18} aria-hidden="true" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text">
                  Direct Channels
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface-2/60 p-3.5 transition-all hover:border-accent hover:bg-surface-2"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                    <Mail size={16} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
                      Email
                    </p>
                    <p className="truncate text-xs font-semibold text-text group-hover:text-accent-2 transition-colors">
                      {personal.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface-2/60 p-3.5 transition-all hover:border-accent hover:bg-surface-2"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                    <Phone size={16} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
                      Phone
                    </p>
                    <p className="text-xs font-semibold text-text group-hover:text-accent-2 transition-colors">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface-2/60 p-3.5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                    <MapPin size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
                      Location
                    </p>
                    <p className="text-xs font-semibold text-text">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                {hasLinkedIn && (
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface-2/60 p-3.5 transition-all hover:border-accent hover:bg-surface-2"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                      <LinkedinIcon size={16} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
                        LinkedIn
                      </p>
                      <p className="truncate text-xs font-semibold text-text group-hover:text-accent-2 transition-colors">
                        ravi-nakrani-0830a5250 ↗
                      </p>
                    </div>
                  </a>
                )}

                {/* GitHub (if available) */}
                {hasGithub && (
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface-2/60 p-3.5 transition-all hover:border-accent hover:bg-surface-2"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                      <GithubIcon size={16} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-text-3 font-semibold">
                        GitHub
                      </p>
                      <p className="truncate text-xs font-semibold text-text group-hover:text-accent-2 transition-colors">
                        View GitHub Profile ↗
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Right Column: Contact Form (7 cols) ── */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
