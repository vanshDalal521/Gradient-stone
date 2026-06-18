"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden gradient-mesh-2">
      {/* Wavy top divider */}
      <div className="wave-divider-top">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
        </svg>
      </div>

      {/* Floating shapes — BIGGER */}
      <motion.div style={{ y: decorY }} className="absolute top-20 left-[8%] w-48 h-48 border-2 border-luxury-gold/[0.06] rounded-3xl rotate-12 pointer-events-none" />
      <motion.div style={{ y: decorY }} className="absolute bottom-24 right-[6%] w-40 h-40 border-2 border-luxury-gold/[0.04] rounded-full pointer-events-none" />

      {/* Background glow — BIGGER */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/[0.04] rounded-full blur-[80px] pointer-events-none"
        />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-6"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.8rem] font-bold text-foreground leading-[1.08] mb-8 max-w-4xl mx-auto text-balance"
          >
            Ready to Source
            <br />
            <span className="text-gradient-gold-animated">Premium Indian Granite?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14"
          >
            Whether you&apos;re an architect, builder, developer, or importer —
            let&apos;s discuss your project requirements and find the perfect granite
            for your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(200,155,60,0.35)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 border-2 border-[#25D366]/25 text-[#25D366] font-bold text-lg rounded-2xl transition-all duration-500 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
              WhatsApp
            </a>

            <Link
              href="/resources"
              className="group px-10 py-5 border-2 border-foreground/15 text-foreground font-bold text-lg rounded-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-luxury-gold/30 hover:shadow-[0_0_30px_rgba(200,155,60,0.08)] flex items-center gap-3"
            >
              <Download className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1" />
              Download Catalogue
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
