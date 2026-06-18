"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";
import { Globe2, MapPin, Package, Users } from "lucide-react";

const regions = [
  { name: "North America", countries: ["USA", "Canada", "Mexico"], x: "22%", y: "35%", delay: 0.4, projects: "150+", keyMarkets: "New York, Toronto, Mexico City" },
  { name: "Europe", countries: ["UK", "Germany", "Italy", "Spain", "France"], x: "48%", y: "28%", delay: 0.5, projects: "200+", keyMarkets: "London, Milan, Berlin, Paris" },
  { name: "Middle East", countries: ["UAE", "Saudi Arabia", "Oman", "Qatar"], x: "58%", y: "45%", delay: 0.6, projects: "300+", keyMarkets: "Dubai, Riyadh, Doha" },
  { name: "East Asia", countries: ["China", "Japan", "South Korea"], x: "78%", y: "35%", delay: 0.7, projects: "120+", keyMarkets: "Shanghai, Tokyo, Seoul" },
  { name: "Southeast Asia", countries: ["Singapore", "Thailand", "Vietnam"], x: "75%", y: "55%", delay: 0.8, projects: "80+", keyMarkets: "Singapore, Bangkok, Ho Chi Minh" },
  { name: "Africa", countries: ["South Africa", "Kenya", "Nigeria"], x: "50%", y: "62%", delay: 0.9, projects: "60+", keyMarkets: "Johannesburg, Nairobi, Lagos" },
];

const stats = [
  { icon: Globe2, number: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, number: 1000, suffix: "+", label: "Projects Delivered" },
  { icon: MapPin, number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { icon: Users, number: 98, suffix: "%", label: "Client Retention Rate" },
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

export function GlobalPresencePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden gradient-mesh-2">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-[15%] right-[15%] w-32 h-32 border-2 border-luxury-gold/[0.08] rounded-3xl" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
            Global Presence
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6">
            Exporting Indian
            <br />
            <span className="text-gradient-gold-animated">Excellence Worldwide</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            From Krishnagiri to the world — our premium granite adorns prestigious projects across five continents.
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* Map Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Our Reach" title="Where We Operate" description="A global network spanning 50+ countries with dedicated export teams in key markets." />

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative glass rounded-[2rem] border border-border p-8 lg:p-14 mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative aspect-[2/1] min-h-[350px]">
              <div className="absolute inset-0 opacity-[0.03]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full h-px bg-foreground" style={{ top: `${(i + 1) * 5}%` }} />
                ))}
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full w-px bg-foreground" style={{ left: `${(i + 1) * 2.5}%` }} />
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {regions.map((region, i) => (
                  <motion.line key={`line-${i}`} x1="65" y1="47" x2={parseFloat(region.x)} y2={parseFloat(region.y)} stroke="rgba(200, 155, 60, 0.1)" strokeWidth="0.15" strokeDasharray="1.5,1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: region.delay, duration: 2 }} />
                ))}
              </svg>
              {regions.map((region) => (
                <motion.div key={region.name} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: region.delay, duration: 0.5 }} className="absolute group" style={{ left: region.x, top: region.y }}>
                  <PulsingDot x="0" y="0" delay={Math.random() * 2} />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-xl px-5 py-3 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap z-10 scale-90 group-hover:scale-100 shadow-xl shadow-black/30">
                    <div className="text-foreground text-sm font-bold">{region.name}</div>
                    <div className="text-muted text-xs mt-0.5">{region.countries.join(", ")}</div>
                  </div>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="absolute" style={{ left: "65%", top: "47%" }}>
                <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/15 animate-[glow-pulse_3s_ease-in-out_infinite]" />
                <div className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold border-2 border-luxury-gold-light shadow-2xl shadow-luxury-gold/60" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-luxury-gold text-[10px] font-bold tracking-[0.25em] uppercase whitespace-nowrap">INDIA</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }} whileHover={{ y: -6 }} className="text-center glass rounded-2xl p-8 border border-border hover-gold-border transition-all duration-500">
                <stat.icon className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                <div className="text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="text-muted text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Region Details */}
          <SectionHeading label="Regions" title="Regional Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div key={region.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -6 }} className="glass rounded-2xl p-7 border border-border hover-gold-border transition-all duration-500">
                <h3 className="text-foreground font-bold text-lg mb-3">{region.name}</h3>
                <div className="text-luxury-gold text-sm font-medium mb-4">{region.projects} Projects</div>
                <div className="flex flex-col gap-2 text-sm text-muted">
                  <div className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-luxury-gold/60 shrink-0" />{region.countries.join(", ")}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-luxury-gold/60 shrink-0" />{region.keyMarkets}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee reverse />
    </>
  );
}
