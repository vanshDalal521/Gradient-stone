"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WorldMap } from "@/components/ui/WorldMap";
import type { MapRegion } from "@/components/ui/WorldMap";

const regions: MapRegion[] = [
  { name: "North America", coordinates: [-100, 45], sublabel: "USA, Canada, Mexico" },
  { name: "Europe", coordinates: [10, 50], sublabel: "UK, Germany, Italy, Spain, France" },
  { name: "Middle East", coordinates: [45, 25], sublabel: "UAE, Saudi Arabia, Oman, Qatar" },
  { name: "East Asia", coordinates: [115, 35], sublabel: "China, Japan, South Korea" },
  { name: "Southeast Asia", coordinates: [105, 10], sublabel: "Singapore, Thailand, Vietnam" },
  { name: "Africa", coordinates: [20, 0], sublabel: "South Africa, Kenya, Nigeria" },
];

const stats = [
  { number: 50, suffix: "+", label: "Countries" },
  { number: 1000, suffix: "+", label: "Projects Delivered" },
  { number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { number: 98, suffix: "%", label: "Client Retention" },
];

export function GlobalPresencePreview() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Exporting Indian Excellence"
          description="Our premium granite adorns prestigious projects across 50+ countries, spanning five continents."
        />

        {/* Map Container */}
        <div className="relative bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm mb-14">
          {/* Decorative gradient overlay at edges */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>

          <WorldMap
            regions={regions}
            activeRegion={activeRegion}
            onRegionHover={setActiveRegion}
            height="450px"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="text-center bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)]">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="text-[#6B7280] text-sm mt-3 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
