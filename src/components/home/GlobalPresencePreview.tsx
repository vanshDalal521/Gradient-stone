"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WorldMap } from "@/components/ui/WorldMap";
import type { MapRegion } from "@/components/ui/WorldMap";

const regions: MapRegion[] = [
  { name: "North America", coordinates: [-100, 45], sublabel: "150+ Projects" },
  { name: "Europe", coordinates: [10, 50], sublabel: "200+ Projects" },
  { name: "Middle East", coordinates: [48, 28], sublabel: "300+ Projects" },
  { name: "East Asia", coordinates: [115, 35], sublabel: "120+ Projects" },
  { name: "Southeast Asia", coordinates: [105, 8], sublabel: "80+ Projects" },
  { name: "Africa", coordinates: [22, -2], sublabel: "60+ Projects" },
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

        <div className="relative bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.04)] mb-14">
          <WorldMap
            regions={regions}
            activeRegion={activeRegion}
            onRegionHover={setActiveRegion}
            height="480px"
          />
        </div>

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
