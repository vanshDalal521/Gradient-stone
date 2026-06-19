"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const EMAILJS_SERVICE_ID = "service_63ktnjh";
const EMAILJS_TEMPLATE_ID = "template_2h4979k";
const EMAILJS_PUBLIC_KEY = "BVB6mSEMmWmoJ7JA4";

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Krishnagiri, Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 63635 78346"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Sundaramgranites.krishnagiri@gmail.com"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+91 63635 78346"],
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Quote Request",
  "Sample Request",
  "Factory Visit",
  "Partnership",
  "Technical Support",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactPageClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (): string | null => {
    if (!formData.fullName.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.inquiryType) return "Please select an inquiry type.";
    if (!formData.message.trim()) return "Please enter your message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          inquiry_type: formData.inquiryType,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", company: "", inquiryType: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again or email us directly.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 py-28 md:py-36 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-5"
          >
            Let&apos;s Start a{" "}
            <span className="text-gradient-gold">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-[#6B7280] text-lg max-w-xl mx-auto"
          >
            Whether you need a quote or have a project in mind — we&apos;re here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Contact Us"
            title="Reach Out to Us"
            description="We'd love to hear from you. We'll respond as quickly as possible."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-[#B8860B]" />
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A] font-bold mb-0.5">{card.title}</h3>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-[#6B7280] text-sm break-all">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] font-bold mb-0.5">Business Hours</h3>
                    <p className="text-[#6B7280] text-sm">Monday – Sunday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 md:p-9">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-[#B8860B]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#6B7280] text-sm max-w-sm mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[#B8860B] text-sm font-medium hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Error Banner */}
                    {status === "error" && errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMsg}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-[#1A1A1A] text-sm font-medium">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          placeholder="John Doe"
                          className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#B8860B]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[#1A1A1A] text-sm font-medium">Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#B8860B]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-[#1A1A1A] text-sm font-medium">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 63635 78346"
                          className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#B8860B]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-[#1A1A1A] text-sm font-medium">Company</label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your Company"
                          className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#B8860B]/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiryType" className="text-[#1A1A1A] text-sm font-medium">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => handleChange("inquiryType", e.target.value)}
                        className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B8860B]/40 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select an inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[#1A1A1A] text-sm font-medium">Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#B8860B]/40 transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                      whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#B8860B] px-7 py-3 text-white font-bold text-sm tracking-wide transition-colors hover:bg-[#9A7209] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
