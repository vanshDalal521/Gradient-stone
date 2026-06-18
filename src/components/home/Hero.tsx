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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-end pb-24 overflow-hidden"
    >
      {/* Parallax Background — Showroom Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-32 -bottom-32"
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

      {/* Subtle overlays for text readability — image stays visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 w-full"
      >
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Crafted by Nature.
            <br />
            <span className="text-gradient-gold-animated">
              Perfected by Sundaram.
            </span>
          </motion.h1>

          {/* Subtitle — ONE short sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Premium granite, sourced from India&apos;s finest quarries, delivered worldwide.
          </motion.p>

          {/* Two clean CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/collection"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-[0.98]"
            >
              Explore Collection
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold text-base rounded-xl transition-all duration-300 hover:bg-surface hover:border-luxury-gold/40 active:scale-[0.98]"
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-[10px] tracking-[0.3em] uppercase mb-1">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center pt-2.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-luxury-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
