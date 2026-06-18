"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2007", label: "Established", desc: "Began our journey in Krishnagiri, Tamil Nadu" },
  { value: "50+", label: "Countries", desc: "Global export footprint spanning all continents" },
  { value: "30+", label: "Granite Varieties", desc: "Curated selection of India's finest stone" },
  { value: "5", label: "Facilities", desc: "Manufacturing units across India" },
];

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-1 pointer-events-none" />

      {/* Floating decorative shapes — BIGGER */}
      <motion.div style={{ y: decorY }} className="absolute -top-24 -right-24 w-96 h-96 border-2 border-luxury-gold/[0.06] rounded-[2rem] rotate-12 pointer-events-none" />
      <motion.div style={{ y: decorY2 }} className="absolute -bottom-40 -left-20 w-80 h-80 border-2 border-luxury-gold/[0.04] rounded-[2rem] -rotate-6 pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[5%] w-16 h-16 border border-luxury-gold/[0.08] rounded-xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Text — BIGGER typography */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-6"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.8rem] font-bold text-foreground leading-[1.08] mb-8"
            >
              A Legacy Carved
              <br />
              <span className="text-gradient-gold-animated">in Stone</span>
            </motion.h2>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[3px] bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-muted text-lg md:text-xl leading-relaxed mb-5"
            >
              Founded in 2007, Sundaram Granites has grown from a single quarry
              operation into one of India&apos;s most trusted granite manufacturers
              and exporters. Our commitment to quality, innovation, and
              sustainability drives every slab we produce.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-muted text-lg md:text-xl leading-relaxed mb-12"
            >
              With five state-of-the-art manufacturing units across India and
              exports to over 50 countries, we bring the timeless beauty of Indian
              granite to the world&apos;s finest architectural projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-luxury-gold font-bold text-lg transition-all duration-400 hover:gap-5"
              >
                Discover Our Journey
                <ArrowRight className="w-5 h-5 transition-transform duration-400 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid — BIGGER cards, staggered */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.4 } }}
                  className="glass rounded-3xl p-8 border border-border hover-gold-border transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/10"
                  style={{ transform: i % 2 === 1 ? "translateY(32px)" : "none" }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-luxury-gold text-[10px] tracking-[0.25em] uppercase font-bold mb-3">
                    {stat.label}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative corners — BIGGER */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-luxury-gold/15 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-luxury-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
