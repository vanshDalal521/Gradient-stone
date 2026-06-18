"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section className="relative py-28 bg-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#B8860B] text-white font-semibold text-base rounded-xl transition-all duration-300 hover:bg-[#9A7209] hover:shadow-lg hover:shadow-[#B8860B]/20 active:scale-[0.98]"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
