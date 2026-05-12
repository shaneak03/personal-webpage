"use client";

import { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";

const contactHighlights = [
  {
    title: "Quick reply",
    text: "I usually respond as soon as I can, especially for project or collaboration messages.",
  },
  {
    title: "Open to work",
    text: "If you have an internship, freelance, or side project idea, feel free to reach out.",
  },
  {
    title: "Tech focus",
    text: "I spend most of my time building with Next.js, React, TypeScript, and AI tools.",
  },
];

const contactSteps = [
  "Tell me a bit about what you're building.",
  "Include links, deadlines, or any context that helps.",
  "I’ll get back to you with next steps.",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[25%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">
            Get in touch
          </p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Contact <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            If you want to talk about a project, internship, collaboration, or just want to say hi,
            send a message below and I’ll reply as soon as I can.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
            <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-500/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200/80">
                Why reach out
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Let’s make the next thing feel polished.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I’m happiest when the conversation is specific, practical, and tied to something
                we can actually ship.
              </p>
            </div>

            <div className="space-y-4">
              {contactHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-base font-semibold text-white">What helps most</h3>
              <ol className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                {contactSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-xs font-bold text-black">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-200/80">
                  Send a message
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">I’d love to hear from you</h2>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:block">
                Usually replies within a few days
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200">
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    aria-label="Your Name"
                    className="border border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-label="Email Address"
                    className="border border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200">
                  Message
                </label>
                <TextArea
                  id="contact-message"
                  placeholder="Let me know what message you have for me or just say hello..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  aria-label="Message"
                  rows={7}
                  className="min-h-[220px] border border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  Thanks for taking the time to reach out. I read every message.
                </p>
                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  className="rounded-full px-7 font-semibold shadow-lg shadow-orange-500/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
