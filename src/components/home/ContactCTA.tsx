"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 max-w-3xl mx-auto text-balance"
          >
            Ready to Source
            <br />
            <span className="text-[#B8860B]">Premium Indian Granite?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-10"
          >
            Whether you're an architect, builder, developer, or importer —
            let's discuss your project and find the perfect granite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#B8860B] text-white font-bold text-lg rounded-2xl transition-all duration-400 hover:bg-[#9A7209] hover:shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-400 group-hover:translate-x-2" />
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-[#25D366]/25 text-[#25D366] font-bold text-lg rounded-2xl transition-all duration-400 hover:bg-[#25D366]/10"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-400 group-hover:scale-110" />
              WhatsApp
            </a>

            <Link
              href="/resources"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-[#E5E7EB] text-[#1A1A1A] font-bold text-lg rounded-2xl transition-all duration-400 hover:border-[#B8860B]/30 hover:bg-white"
            >
              <Download className="w-5 h-5 transition-transform duration-400 group-hover:-translate-y-1" />
              Download Catalogue
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
