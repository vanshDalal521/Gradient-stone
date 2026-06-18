"use client";

import { motion } from "framer-motion";

const defaultWords = [
  "GRANITE", "·", "STONE", "·", "NATURAL", "·", "INDIAN", "·",
  "PREMIUM", "·", "EXPORT", "·", "QUALITY", "·", "GLOBAL", "·",
];

interface MarqueeProps {
  reverse?: boolean;
  items?: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ reverse = false, items, speed = 30, className }: MarqueeProps) {
  const words = items ? [...items, ...items] : [...defaultWords, ...defaultWords];

  return (
    <div className={`relative overflow-hidden py-5 border-y border-gray-200 bg-white ${className || ""}`}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={`text-xs tracking-[0.25em] uppercase font-medium ${
              word === "·"
                ? "text-[#B8860B] text-[6px] self-center"
                : "text-[#9CA3AF] font-[family-name:var(--font-cinzel)]"
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
