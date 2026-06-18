"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-20">
      {/* Parallax Background — Showroom Image */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -top-32 -bottom-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/site/showroom.jpg"
            alt="Sundaram Granites Showroom"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      {/* Subtle gold accent orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-luxury-gold/[0.04] rounded-full blur-[80px] pointer-events-none"
      />

      {/* Content */}
      <motion.div style={{ y: textY, opacity, scale }} className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 px-6 py-2.5 glass-gold rounded-full text-luxury-gold text-[11px] tracking-[0.3em] uppercase font-medium mb-8">
              <span className="w-2 h-2 bg-luxury-gold rounded-full animate-[glow-pulse_2s_ease-in-out_infinite]" />
              Since 2007 — Premium Stone Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Crafted by Nature.
            <br />
            <span className="text-gradient-gold-animated">
              Perfected by Sundaram.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
          >
            India&apos;s premier granite manufacturer and exporter. ISO certified
            quality, global presence, and 18+ years of unwavering excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5"
          >
            <Link
              href="/collection"
              className="group relative px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black font-bold text-base rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(200,155,60,0.35)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Explore Collection</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-foreground/20 text-foreground font-bold text-base rounded-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-luxury-gold/40 hover:shadow-[0_0_30px_rgba(200,155,60,0.1)] active:scale-95"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-6 flex flex-col items-center gap-3"
      >
        <span className="text-muted text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mb-12">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center pt-2.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1], scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-luxury-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
