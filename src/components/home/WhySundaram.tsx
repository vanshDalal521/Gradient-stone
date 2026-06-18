"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { number: 18, suffix: "+", label: "Years Experience" },
  { number: 50, suffix: "+", label: "Countries Served" },
  { number: 100, suffix: "%", label: "ISO Certified" },
  { number: 5, suffix: "", label: "Manufacturing Units" },
];

export function WhySundaram() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Why Choose Us"
          title="The Sundaram Advantage"
          description="Decades of expertise, global presence, and an unwavering commitment to quality make us India's trusted granite partner."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)] mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-[#B8860B] font-bold text-[11px] tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
