"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Award, Globe2, ShieldCheck, Factory } from "lucide-react";

const features = [
  {
    icon: Award,
    number: 18,
    suffix: "+",
    label: "Years Experience",
    description: "Nearly two decades of granite manufacturing excellence and innovation.",
  },
  {
    icon: Globe2,
    number: 50,
    suffix: "+",
    label: "Countries Served",
    description: "Exporting premium Indian granite to markets across five continents.",
  },
  {
    icon: ShieldCheck,
    number: 100,
    suffix: "%",
    label: "ISO Certified",
    description: "Rigorous quality management ensuring consistency in every slab.",
  },
  {
    icon: Factory,
    number: 5,
    suffix: "",
    label: "Manufacturing Units",
    description: "State-of-the-art facilities strategically located across India.",
  },
];

export function WhySundaram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden gradient-mesh-radial">
      {/* Animated background glow — BIGGER */}
      <motion.div style={{ y: bgY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-luxury-gold/[0.03] rounded-full blur-[80px] pointer-events-none" />

      {/* Floating decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-[8%] w-48 h-48 border-2 border-luxury-gold/[0.05] rounded-3xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <SectionHeading
          label="Why Choose Us"
          title="The Sundaram Advantage"
          description="Decades of expertise, global presence, and an unwavering commitment to quality make us India's trusted granite partner."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -12, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
              className="group glass rounded-3xl p-9 border border-border cursor-default relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-luxury-gold/[0.08] via-transparent to-luxury-gold/[0.04]" />

              {/* Icon — BIGGER */}
              <div className="relative w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-8 transition-all duration-600 group-hover:bg-luxury-gold/20 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon className="w-7 h-7 text-luxury-gold transition-transform duration-600 group-hover:scale-110" />
              </div>

              <div className="relative text-5xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-3">
                <AnimatedCounter end={feature.number} suffix={feature.suffix} />
              </div>

              <h3 className="text-luxury-gold font-bold text-[11px] tracking-[0.25em] uppercase mb-4">
                {feature.label}
              </h3>

              <p className="relative text-muted text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
