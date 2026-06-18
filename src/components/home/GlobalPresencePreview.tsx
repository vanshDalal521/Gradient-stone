"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", x: "22%", y: "35%", delay: 0.4, pulseDelay: 0.3 },
  { name: "Europe", countries: "UK, Germany, Italy, Spain, France", x: "48%", y: "28%", delay: 0.5, pulseDelay: 1.1 },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar", x: "58%", y: "45%", delay: 0.6, pulseDelay: 0.7 },
  { name: "East Asia", countries: "China, Japan, South Korea", x: "78%", y: "35%", delay: 0.7, pulseDelay: 1.5 },
  { name: "Southeast Asia", countries: "Singapore, Thailand, Vietnam", x: "75%", y: "55%", delay: 0.8, pulseDelay: 0.2 },
  { name: "Africa", countries: "South Africa, Kenya, Nigeria", x: "50%", y: "62%", delay: 0.9, pulseDelay: 1.8 },
];

const stats = [
  { number: 50, suffix: "+", label: "Countries" },
  { number: 1000, suffix: "+", label: "Projects Delivered" },
  { number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { number: 98, suffix: "%", label: "Client Retention" },
];

function PulsingDot({ x, y, delay }: { x: string; y: string; delay: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {mounted && (
        <div className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-luxury-gold/10 animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: `${delay}s` }} />
        </div>
      )}
      <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold shadow-xl shadow-luxury-gold/50" />
    </div>
  );
}

export function GlobalPresencePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mapScale = useTransform(scrollYProgress, [0.2, 0.5], [0.92, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden gradient-mesh-radial">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Exporting Indian Excellence"
          description="Our premium granite adorns prestigious projects across 50+ countries, spanning five continents."
        />

        {/* Map visualization — BIGGER, more dramatic */}
        <motion.div
          style={{ scale: mapScale, opacity: mapOpacity }}
          className="relative glass rounded-[2rem] border border-border p-8 lg:p-14 mb-16 overflow-hidden"
        >
          {/* Gradient inside */}
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.03] via-transparent to-transparent pointer-events-none" />

          <div className="relative aspect-[2/1] min-h-[350px]">
            {/* Grid overlay — CSS only, 1 DOM node */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 5%), repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 2.5%)",
              }}
            />

            {/* Connecting lines from India to regions */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {regions.map((region, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1="65"
                  y1="47"
                  x2={parseFloat(region.x)}
                  y2={parseFloat(region.y)}
                  stroke="rgba(200, 155, 60, 0.1)"
                  strokeWidth="0.15"
                  strokeDasharray="1.5,1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: region.delay, duration: 2, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {/* Region dots with tooltips */}
            {regions.map((region) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: region.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute group"
                style={{ left: region.x, top: region.y }}
              >
                <PulsingDot x="0" y="0" delay={region.pulseDelay} />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-xl px-5 py-3 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap z-10 scale-90 group-hover:scale-100 shadow-xl shadow-black/30">
                  <div className="text-foreground text-sm font-bold">{region.name}</div>
                  <div className="text-muted text-xs mt-0.5">{region.countries}</div>
                </div>
              </motion.div>
            ))}

            {/* India marker — BIGGER */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute"
              style={{ left: "65%", top: "47%" }}
            >
              <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/15 animate-[glow-pulse_3s_ease-in-out_infinite]" />
              <div className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold border-2 border-luxury-gold-light shadow-2xl shadow-luxury-gold/60" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-luxury-gold text-[10px] font-bold tracking-[0.25em] uppercase whitespace-nowrap">
                INDIA
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats — BIGGER cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
              className="text-center glass rounded-2xl p-8 border border-border hover-gold-border transition-all duration-500 hover:shadow-xl hover:shadow-luxury-gold/5"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <div className="text-muted text-sm mt-3 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
