"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * ContactForm Component
 * UI-only accessible contact form for V1.
 * Ready for future connection to a Next.js Server Action or Route Handler without fake APIs.
 * Client Component.
 */
export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate async UI action ready for future server action integration
    try {
      // In V1, this simulates a clean dispatch event
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setErrorMessage(
        "An unexpected error occurred. Please try contacting directly via email."
      );
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-text sm:text-xl">
          Send a Direct Message
        </h3>
        <p className="mt-1 text-sm text-text-2">
          Fill out the form below or reach out directly via email.
        </p>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-success/30 bg-success/10 p-8 text-center">
          <CheckCircle2
            size={36}
            className="text-success mb-3"
            aria-hidden="true"
          />
          <h4 className="text-base font-bold text-text">Message Prepared!</h4>
          <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-text-2">
            Thank you for reaching out. In V1, you can also email me directly at{" "}
            <a
              href="mailto:ravinakrani10@gmail.com"
              className="text-accent underline hover:text-accent-2 font-medium"
            >
              ravinakrani10@gmail.com
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-text hover:bg-surface-2 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          {status === "error" && errorMessage && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs sm:text-sm text-red-400"
            >
              <AlertCircle size={16} className="shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block font-mono text-xs font-medium text-text-2"
              >
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className="w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-colors hover:border-border-focus focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block font-mono text-xs font-medium text-text-2"
              >
                Your Email <span className="text-accent">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-colors hover:border-border-focus focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-1.5 block font-mono text-xs font-medium text-text-2"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion / Engineering Opportunity"
              className="w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-colors hover:border-border-focus focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block font-mono text-xs font-medium text-text-2"
            >
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, or opportunity..."
              className="w-full resize-y rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-colors hover:border-border-focus focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          {/* Submit */}
          <div className="mt-2 flex items-center justify-between gap-4">
            <p className="text-xs text-text-3 font-mono">
              Direct connection • No spam
            </p>
            <Button
              variant="primary"
              size="md"
              disabled={status === "submitting"}
              className="min-w-[150px] shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            >
              {status === "submitting" ? (
                <>
                  <Loader2
                    size={15}
                    className="animate-spin"
                    aria-hidden="true"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} aria-hidden="true" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
