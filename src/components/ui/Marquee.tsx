"use client";

import { motion } from "framer-motion";

const words = [
  "GRANITE", "●", "STONE", "●", "NATURAL", "●", "INDIAN", "●",
  "PREMIUM", "●", "EXPORT", "●", "QUALITY", "●", "GLOBAL", "●",
];

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-5 border-y border-border bg-surface">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-xs tracking-[0.25em] uppercase font-medium ${
              word === "●"
                ? "text-luxury-gold text-[6px] self-center"
                : "text-muted-dark font-[family-name:var(--font-cinzel)]"
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
