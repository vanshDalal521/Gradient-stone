"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WorldMap } from "@/components/ui/WorldMap";
import type { MapRegion } from "@/components/ui/WorldMap";
import { Globe2, MapPin, Package, Users } from "lucide-react";

const regions: (MapRegion & {
  countries: string[];
  delay: number;
  projects: string;
  keyMarkets: string;
})[] = [
  { name: "North America", coordinates: [-100, 45], countries: ["USA", "Canada", "Mexico"], delay: 0.4, projects: "150+", keyMarkets: "New York, Toronto, Mexico City", sublabel: "150+ Projects" },
  { name: "Europe", coordinates: [10, 50], countries: ["UK", "Germany", "Italy", "Spain", "France"], delay: 0.5, projects: "200+", keyMarkets: "London, Milan, Berlin, Paris", sublabel: "200+ Projects" },
  { name: "Middle East", coordinates: [45, 25], countries: ["UAE", "Saudi Arabia", "Oman", "Qatar"], delay: 0.6, projects: "300+", keyMarkets: "Dubai, Riyadh, Doha", sublabel: "300+ Projects" },
  { name: "East Asia", coordinates: [115, 35], countries: ["China", "Japan", "South Korea"], delay: 0.7, projects: "120+", keyMarkets: "Shanghai, Tokyo, Seoul", sublabel: "120+ Projects" },
  { name: "Southeast Asia", coordinates: [105, 10], countries: ["Singapore", "Thailand", "Vietnam"], delay: 0.8, projects: "80+", keyMarkets: "Singapore, Bangkok, Ho Chi Minh", sublabel: "80+ Projects" },
  { name: "Africa", coordinates: [20, 0], countries: ["South Africa", "Kenya", "Nigeria"], delay: 0.9, projects: "60+", keyMarkets: "Johannesburg, Nairobi, Lagos", sublabel: "60+ Projects" },
];

const stats = [
  { icon: Globe2, number: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, number: 1000, suffix: "+", label: "Projects Delivered" },
  { icon: MapPin, number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { icon: Users, number: 98, suffix: "%", label: "Client Retention Rate" },
];

export function GlobalPresencePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#F9FAFB]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-10 -bottom-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB] via-[#F9FAFB]/80 to-[#F9FAFB]" />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Global Presence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-5"
          >
            Exporting Indian
            <br />
            <span className="text-gradient-gold">Excellence Worldwide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-[#6B7280] text-lg max-w-xl mx-auto"
          >
            From Krishnagiri to the world — our granite adorns projects across five continents.
          </motion.p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Our Reach" title="Where We Operate" description="A global network spanning 50+ countries with dedicated export teams." />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm mb-14"
          >
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
            </div>

            <WorldMap
              regions={regions}
              activeRegion={activeRegion}
              onRegionHover={setActiveRegion}
              height="500px"
            />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center bg-white border border-[#E5E7EB] rounded-xl p-6 hover-lift"
              >
                <stat.icon className="w-7 h-7 text-[#B8860B] mx-auto mb-2.5" />
                <div className="text-3xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)]">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="text-[#6B7280] text-sm mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Region Details */}
          <SectionHeading label="Regions" title="Regional Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover-lift"
              >
                <h3 className="text-[#1A1A1A] font-bold text-lg mb-2">{region.name}</h3>
                <div className="text-[#B8860B] text-sm font-medium mb-3">{region.projects} Projects</div>
                <div className="flex flex-col gap-1.5 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-[#B8860B]/50 shrink-0" />{region.countries.join(", ")}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#B8860B]/50 shrink-0" />{region.keyMarkets}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
