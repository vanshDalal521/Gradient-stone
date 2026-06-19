"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const collections = [
  {
    id: "black-granites",
    title: "Black",
    image: "/images/granites/Pearl black.png",
  },
  {
    id: "white-granites",
    title: "White",
    image: "/images/granites/Moon white .png",
  },
  {
    id: "brown-granites",
    title: "Brown",
    image: "/images/granites/Himalayan brown .png",
  },
  {
    id: "green-granites",
    title: "Green",
    image: "/images/granites/Kuppam Green.png",
  },
  {
    id: "blue-granites",
    title: "Blue",
    image: "/images/granites/Ice blue.png",
  },
  {
    id: "pink-granites",
    title: "Pink / Gold",
    image: "/images/granites/Paradise pink .png",
  },
];

export function FeaturedCollections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4">
            Products
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15]">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/collection?category=${col.id}`}
                className="group flex flex-col items-center text-center"
              >
                {/* Circle image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#B8860B]/60 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(184,134,11,0.2)]">
                  <Image
                    src={col.image}
                    alt={`${col.title} Granites`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 14vw"
                  />
                </div>
                {/* Label */}
                <span className="mt-4 text-white/70 text-xs md:text-sm font-medium tracking-wide group-hover:text-[#B8860B] transition-colors duration-300">
                  {col.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
