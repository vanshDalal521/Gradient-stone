"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { number: "18+", label: "Years of Expertise" },
  { number: "40+", label: "Countries Served" },
  { number: "30+", label: "Granite Varieties" },
  { number: "200+", label: "Team Members" },
];

export function WhySundaram() {
  return (
    <section className="relative py-28 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Why Us"
          title="Numbers That Speak"
          description="Built on trust, driven by quality, delivered with precision."
          align="center"
        />

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#B8860B] leading-none">
                {stat.number}
              </p>
              <p className="mt-4 text-sm text-[#6B7280] font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
