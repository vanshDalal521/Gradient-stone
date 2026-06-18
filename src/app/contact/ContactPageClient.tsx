"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Krishnagiri, Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@sundaramgranites.com"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+91 98765 43210"],
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

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5"
          >
            Let&apos;s Start a{" "}
            <span className="text-gradient-gold">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-muted text-lg max-w-xl mx-auto"
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
                  className="bg-white border border-border rounded-xl p-5 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-luxury-gold/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold mb-0.5">{card.title}</h3>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-muted text-sm">{line}</p>
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
                className="bg-white border border-border rounded-xl p-5 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-luxury-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold mb-0.5">Business Hours</h3>
                    <p className="text-muted text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted text-sm">Sunday: Closed</p>
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
              <div className="bg-white border border-border rounded-2xl p-7 md:p-9">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-sm max-w-sm">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-foreground text-sm font-medium">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-foreground text-sm font-medium">Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-foreground text-sm font-medium">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-foreground text-sm font-medium">Company</label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiryType" className="text-foreground text-sm font-medium">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm focus:outline-none focus:border-luxury-gold/40 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select an inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-foreground text-sm font-medium">Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/40 transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-luxury-gold px-7 py-3 text-white font-bold text-sm tracking-wide transition-colors hover:bg-luxury-gold-dark cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
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
