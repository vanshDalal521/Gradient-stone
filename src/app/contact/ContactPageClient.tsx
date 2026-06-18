"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
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
    lines: ["Krishnagiri", "Tamil Nadu", "India"],
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden gradient-mesh-2"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -top-20 -bottom-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] w-32 h-32 border-2 border-luxury-gold/[0.08] rounded-3xl"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[10%] w-4 h-4 bg-luxury-gold/20 rounded-full"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6"
          >
            Let&apos;s Start a{" "}
            <span className="text-gradient-gold-animated">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto"
          >
            Whether you need a quote, want to visit our factory, or have a
            project in mind — we&apos;re here to help.
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* Contact Section */}
      <section className="section-padding relative overflow-hidden gradient-mesh-2">
        <div className="wave-divider-top">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Contact Us"
            title="Reach Out to Us"
            description="We'd love to hear from you. Get in touch and we'll respond as quickly as possible."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT — Contact Info (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 border border-border hover-gold-border transition-all duration-500 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                      <card.icon className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold text-lg mb-1">
                        {card.title}
                      </h3>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-muted text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass rounded-2xl p-6 border border-border hover-gold-border transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                    <Clock className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Contact Form (3/5) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-border hover-gold-border transition-all duration-500">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-luxury-gold" />
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-base max-w-md">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="fullName"
                          className="text-foreground text-sm font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="John Doe"
                          className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-foreground text-sm font-medium"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="text-foreground text-sm font-medium"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300"
                        />
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="company"
                          className="text-foreground text-sm font-medium"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Your Company"
                          className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="inquiryType"
                        className="text-foreground text-sm font-medium"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300 appearance-none"
                      >
                        <option value="" disabled>
                          Select an inquiry type
                        </option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="text-foreground text-sm font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full rounded-xl bg-foreground/5 border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-gold-light px-8 py-4 text-background font-bold text-sm tracking-wide transition-all duration-500 hover:shadow-lg hover:shadow-luxury-gold/25 cursor-pointer"
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

      <Marquee reverse />
    </>
  );
}
