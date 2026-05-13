"use client";

import { useState } from "react";
import { Button, Input, Textarea, addToast } from "@heroui/react";

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
      const subject = encodeURIComponent(`Website contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );

      window.location.href = `mailto:shanearkarkyaw@gmail.com?subject=${subject}&body=${body}`;

      addToast({
        title: "Opening your email app",
        description: "Send the message from your mail client to get in touch.",
        color: "success",
      });
                
      setFormData({ name: "", email: "", message: "" });
    } catch {
      addToast({
        title: "Something went wrong",
        description: "Please try again later.",
        color: "danger",
      });
    } finally {
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

        <div className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
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
        </div>
      </div>
    </main>
  );
}
