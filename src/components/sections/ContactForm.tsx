"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data";

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
 * Features focus underlines, interactive micro-animations, and success celebration particles.
 * Client Component.
 */
export function ContactForm() {
  const prefersReduced = useReducedMotion();
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

    console.log("formData", formData);

    // Basic client validation
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
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setStatus("error");
        setErrorMessage(
          result?.error ||
            "Something went wrong. Please try again or reach out directly via email."
        );
        return;
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection or contact me directly via email."
      );
    }
  };

  // 8 decorative confetti particle trajectories
  const particles = [
    { x: -40, y: -45, color: "bg-indigo-400" },
    { x: 45, y: -50, color: "bg-emerald-400" },
    { x: -55, y: -10, color: "bg-sky-400" },
    { x: 50, y: -15, color: "bg-violet-400" },
    { x: -30, y: 35, color: "bg-amber-400" },
    { x: 35, y: 40, color: "bg-teal-400" },
    { x: 0, y: -60, color: "bg-indigo-300" },
    { x: -15, y: -55, color: "bg-pink-400" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface/85 via-surface/75 to-surface-2/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.2)]">
      {/* Top animated line shimmer */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px animate-line-shimmer"
        aria-hidden="true"
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold text-text sm:text-xl">
          Send a Direct Message
        </h3>
        <p className="mt-1 text-sm text-text-2">
          Fill out the form below or reach out directly via email.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-box"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-live="polite"
            className="relative flex flex-col items-center justify-center rounded-2xl border border-success/30 bg-success/10 p-8 text-center backdrop-blur-md shadow-[0_0_24px_rgba(16,185,129,0.15)]"
          >
            {/* Particle celebration burst */}
            {!prefersReduced && (
              <div className="pointer-events-none absolute top-12 flex items-center justify-center">
                {particles.map((p, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1.4, 0],
                      x: p.x,
                      y: p.y,
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + idx * 0.03,
                      ease: "easeOut",
                    }}
                    className={`absolute h-2 w-2 rounded-full ${p.color}`}
                  />
                ))}
              </div>
            )}

            <CheckCircle2
              size={40}
              className="text-success mb-3 animate-bounce"
              aria-hidden="true"
            />
            <h4 className="text-base font-bold text-text">Message Sent!</h4>
            <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-text-2">
              Thank you for reaching out. Your message has been delivered
              successfully. You can also reach me directly at{" "}
              <a
                href={`mailto:${personal.email}`}
                className="text-accent underline hover:text-accent-2 font-medium"
              >
                {personal.email}
              </a>
              .
            </p>
            <motion.button
              type="button"
              whileHover={prefersReduced ? undefined : { y: -2, scale: 1.03 }}
              whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              onClick={() => setStatus("idle")}
              className="mt-5 rounded-xl border border-border bg-surface px-4.5 py-2 text-xs font-semibold text-text hover:bg-surface-2 transition-colors duration-150"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            {status === "error" && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                aria-live="assertive"
                className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs sm:text-sm text-red-400"
              >
                <AlertCircle
                  size={16}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-xs font-medium text-text-2"
                >
                  Your Name <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="e.g. Jane Doe"
                    className="w-full rounded-2xl border border-border/80 bg-surface-2/50 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-all duration-200 hover:border-border-focus/60 focus:border-accent focus:bg-surface-2/80 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-accent origin-left rounded-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-xs font-medium text-text-2"
                >
                  Your Email <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="jane@example.com"
                    className="w-full rounded-2xl border border-border/80 bg-surface-2/50 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-all duration-200 hover:border-border-focus/60 focus:border-accent focus:bg-surface-2/80 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-accent origin-left rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block font-mono text-xs font-medium text-text-2"
              >
                Subject
              </label>
              <div className="relative">
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Project Discussion / Engineering Opportunity"
                  className="w-full rounded-2xl border border-border/80 bg-surface-2/50 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-all duration-200 hover:border-border-focus/60 focus:border-accent focus:bg-surface-2/80 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "subject" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 inset-x-4 h-0.5 bg-accent origin-left rounded-full"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-xs font-medium text-text-2"
              >
                Message <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, timeline, or opportunity..."
                  className="w-full resize-y rounded-2xl border border-border/80 bg-surface-2/50 px-4 py-3 text-sm text-text placeholder:text-text-3 transition-all duration-200 hover:border-border-focus/60 focus:border-accent focus:bg-surface-2/80 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 inset-x-4 h-0.5 bg-accent origin-left rounded-full"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="text-xs text-text-3 font-mono">
                Direct connection • No spam
              </p>
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                  className="min-w-[150px] animate-shimmer"
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
              </motion.div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
