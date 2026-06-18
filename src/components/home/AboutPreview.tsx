"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2007", label: "Established" },
  { value: "50+", label: "Countries" },
  { value: "30+", label: "Varieties" },
  { value: "5", label: "Facilities" },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 gradient-mesh-1 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
              Our Story
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              A Legacy Carved
              <br />
              <span className="text-gradient-gold-animated">in Stone</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Since 2007, Sundaram Granites has delivered premium Indian granite to over 50 countries — combining timeless craftsmanship with modern precision across five state-of-the-art facilities.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Every slab we produce reflects our unwavering commitment to quality, innovation, and sustainability.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-luxury-gold font-semibold text-base transition-all duration-300 hover:gap-4"
            >
              Discover Our Journey
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:border-luxury-gold/30"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm tracking-wide uppercase font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
