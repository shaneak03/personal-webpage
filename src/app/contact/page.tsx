"use client";

import { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import MotionReveal from "@/components/MotionReveal";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pt-48 pb-32 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">
            Get in touch
          </p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            If you want to talk about a project, internship, collaboration, or just want
            to say hi, send a message below and I&apos;ll reply as soon as I can.
          </p>
        </MotionReveal>

        <MotionReveal
          delay={0.08}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8"
        >
          <div className="mb-8 border-b border-white/10 pb-6 text-center">
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-pink-200/80">
              Send a message
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              I&apos;d love to hear from you
            </h2>
          </div>

          <MotionStagger
            className="space-y-6"
            delayChildren={0.12}
            staggerChildren={0.1}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <MotionStaggerItem className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200">
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    variant="secondary"
                    fullWidth
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    aria-label="Your Name"
                    className="text-white placeholder:text-slate-500"
                  />
                </div>
                </MotionStaggerItem>

                <MotionStaggerItem className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    variant="secondary"
                    fullWidth
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-label="Email Address"
                    className="text-white placeholder:text-slate-500"
                  />
                </div>
                </MotionStaggerItem>
              </div>

              <MotionStaggerItem className="space-y-2">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200">
                  Message
                </label>
                <TextArea
                  id="contact-message"
                  variant="secondary"
                  fullWidth
                  placeholder="Tell me what you&apos;re working on, what kind of help you need, or just say hello."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  aria-label="Message"
                  rows={10}
                  className="w-full min-h-[260px] rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-500"
                />
              </MotionStaggerItem>

              <MotionStaggerItem className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  Thanks for taking the time to reach out. I read every message.
                </p>
                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  className="rounded-full px-8 py-3 font-semibold shadow-lg shadow-orange-500/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </MotionStaggerItem>
            </form>
          </MotionStagger>
        </MotionReveal>
      </div>
    </main>
  );
}
