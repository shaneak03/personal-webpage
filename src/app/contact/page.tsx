"use client";

import { useMemo, useState } from "react";
import { Button, Input, Textarea, addToast, closeToast } from "@heroui/react";

const fallbackEmail = "shaneak03@gmail.com";
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fallbackMailto = useMemo(() => {
    const subject = encodeURIComponent("Website contact fallback");
    const body = encodeURIComponent(
      "Hi Shane,\n\nI tried the website contact form but it failed."
    );

    return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formspreeEndpoint) {
      addToast({
        title: "Contact form unavailable",
        description: `The contact form is not configured yet. Please email ${fallbackEmail} directly.`,
        color: "warning",
        timeout: 8000,
      });
      return;
    }

    setIsSubmitting(true);

    const sendingToastKey = addToast({
      title: "Sending message…",
      description: "Submitting your message now.",
      color: "default",
      timeout: 0,
    });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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

      addToast({
        title: "Message sent",
        description: "Thanks — your message has been sent to Shane.",
        color: "success",
      });
    } catch (error) {
      const description = error instanceof Error ? error.message : "Please try again later.";

      addToast({
        title: "Message failed",
        description: `${description} You can also email ${fallbackEmail} directly.`,
        color: "danger",
        timeout: 8000,
      });
    } finally {
      if (sendingToastKey) {
        closeToast(sendingToastKey);
      }

      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                isRequired
                label="Your Name"
                placeholder="Enter your full name"
                value={formData.name}
                onValueChange={(value) => handleInputChange("name", value)} 
              />
              <Input
                isRequired
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onValueChange={(value) => handleInputChange("email", value)}
              />
            </div>

            <Textarea
              isRequired
              label="Message"
              placeholder="Let me know what message you have for me or just say hello..."
              value={formData.message}
              onValueChange={(value) => handleInputChange("message", value)}
              minRows={5}
              maxRows={8}
              classNames={{
                input: "text-white bg-transparent",
                label: "text-gray-400 pb-2",
                inputWrapper: "bg-gray-900/30 border-gray-600/50 hover:border-gray-500/70 focus-within:border-purple-400 rounded-2xl px-4 py-3"
              }}
              required
            />

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full text-lg"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-400">
            Messages go straight to {fallbackEmail}. If the form has trouble sending, email me directly at{" "}
            <a className="text-purple-400 hover:text-purple-300 underline underline-offset-4" href={fallbackMailto}>
              {fallbackEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
