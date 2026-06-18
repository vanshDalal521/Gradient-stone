"use client";

import { motion } from "framer-motion";
import { Award, Target, Globe, Users } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { label: "Years", value: "18+", icon: Award },
  { label: "Countries", value: "40+", icon: Globe },
  { label: "Products", value: "300+", icon: Target },
  { label: "Team", value: "200+", icon: Users },
];

export function AboutPreview() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="About Us"
          title="A Legacy in Natural Stone"
          description="Over 18 years of quarrying, crafting, and exporting premium Indian granite to over 40 countries worldwide."
          align="center"
        />

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-5 border-l-2 border-[#B8860B]/30 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <stat.icon className="w-4 h-4 text-[#B8860B]" strokeWidth={2} />
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#6B7280] font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:text-[#9A7209] transition-colors"
          >
            Discover Our Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
