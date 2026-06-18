"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const words = [
  "GRANITE", "●", "STONE", "●", "NATURAL", "●", "INDIAN", "●",
  "PREMIUM", "●", "EXPORT", "●", "QUALITY", "●", "GLOBAL", "●",
];

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-6 border-y border-border/50 bg-granite-black/50">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-sm tracking-[0.3em] uppercase font-semibold ${
              word === "●"
                ? "text-luxury-gold text-[8px] self-center"
                : "text-foreground/20 font-[family-name:var(--font-cinzel)]"
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
