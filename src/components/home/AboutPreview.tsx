"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1A1A1A] leading-[1.15]"
          >
            A Legacy in Natural Stone
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-[#B8860B] mx-auto mt-6 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[#6B7280] text-lg leading-relaxed mb-4"
          >
            Sundaram Granites was born in 2007 from a simple belief: India&apos;s natural stone deserves a global stage.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#6B7280] text-lg leading-relaxed mb-4"
          >
            What started in Krishnagiri has grown into one of the most trusted names in granite export.
            From quarrying raw blocks to delivering finished slabs — every step happens under one roof.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-[#6B7280] text-lg leading-relaxed mb-10"
          >
            With manufacturing units across India and exports to 50+ countries, we&apos;ve proven that quality and consistency can make Indian stone compete with the best in the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-[#333] hover:shadow-lg active:scale-[0.98]"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
