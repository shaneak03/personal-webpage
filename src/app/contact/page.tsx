"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import MotionReveal from "@/components/MotionReveal";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";

const fallbackEmail = "shaneak03@gmail.com";
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = { type: "success" | "error" | "warning"; message: string } | null;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formspreeEndpoint) {
      setStatus({
        type: "warning",
        message: `The contact form isn't configured yet. Please email ${fallbackEmail} directly.`,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; errors?: Array<{ message?: string }> }
        | null;

      if (!response.ok) {
        const providerMessage = result?.errors?.[0]?.message || result?.error;
        throw new Error(providerMessage || "Unable to send your message right now.");
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Message sent — I'll get back to you soon!" });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Please try again later.";
      setStatus({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusStyles = {
    success: "border-green-200 bg-green-50 text-green-800 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300",
    error:   "border-red-200 bg-red-50 text-red-800 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-300",
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pt-48 pb-32 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl">

        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#adb5bd] dark:text-white/30">
            Get in touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#212529] md:text-6xl dark:text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#ec4899] bg-clip-text text-transparent dark:from-[#a78bfa] dark:via-[#22d3ee] dark:to-[#f472b6]">
              Me
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6c757d] md:text-lg dark:text-white/40">
            If you want to talk about a project, internship, collaboration, or just want
            to say hi — send a message below and I&apos;ll reply as soon as I can.
          </p>
        </MotionReveal>

        <MotionReveal
          delay={0.08}
          className="mx-auto max-w-3xl rounded-2xl border border-[#e9ecef] bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.07)] md:p-8 dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-xl"
        >
          <div className="mb-8 border-b border-[#e9ecef] pb-6 text-center dark:border-white/[0.08]">
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-[#adb5bd] dark:text-white/30">
              Send a message
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#212529] md:text-3xl dark:text-white">
              I&apos;d love to hear from you
            </h2>
          </div>

          <MotionStagger className="space-y-6" delayChildren={0.12} staggerChildren={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <MotionStaggerItem className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#495057] dark:text-white/60">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="min-h-[52px] w-full rounded-xl border border-[#dee2e6] bg-[#f8f9fa] px-4 text-[#212529] outline-none transition-colors duration-200 placeholder:text-[#ced4da] hover:border-[#ced4da] focus:border-[#adb5bd] focus:bg-white dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white dark:placeholder:text-white/25 dark:hover:bg-white/[0.08] dark:focus:border-white/[0.20] dark:focus:bg-white/[0.08]"
                  />
                </MotionStaggerItem>

                <MotionStaggerItem className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#495057] dark:text-white/60">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="min-h-[52px] w-full rounded-xl border border-[#dee2e6] bg-[#f8f9fa] px-4 text-[#212529] outline-none transition-colors duration-200 placeholder:text-[#ced4da] hover:border-[#ced4da] focus:border-[#adb5bd] focus:bg-white dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white dark:placeholder:text-white/25 dark:hover:bg-white/[0.08] dark:focus:border-white/[0.20] dark:focus:bg-white/[0.08]"
                  />
                </MotionStaggerItem>
              </div>

              <MotionStaggerItem className="space-y-2">
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#495057] dark:text-white/60">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Send me a message or just say hi!"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={8}
                  className="min-h-[200px] w-full rounded-xl border border-[#dee2e6] bg-[#f8f9fa] p-4 text-[#212529] outline-none transition-colors duration-200 placeholder:text-[#ced4da] hover:border-[#ced4da] focus:border-[#adb5bd] focus:bg-white dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white dark:placeholder:text-white/25 dark:hover:bg-white/[0.08] dark:focus:border-white/[0.20] dark:focus:bg-white/[0.08]"
                />
              </MotionStaggerItem>

              {status && (
                <p className={`rounded-xl border px-4 py-3 text-sm ${statusStyles[status.type]}`}>
                  {status.message}
                </p>
              )}

              <MotionStaggerItem className="flex justify-end pt-2">
                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  className="rounded-lg bg-[#212529] px-8 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#343a40] dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#06b6d4] dark:shadow-[0_8px_28px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_12px_36px_rgba(124,58,237,0.42)] data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </MotionStaggerItem>
            </form>
          </MotionStagger>
        </MotionReveal>

      </div>
    </main>
  );
}
