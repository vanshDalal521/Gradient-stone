"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const collections = [
  {
    id: "black-granites",
    title: "Black Granites",
    varieties: "25+ Varieties",
    image: "/images/granites/black-granit.jpg",
  },
  {
    id: "white-granites",
    title: "White Granites",
    varieties: "20+ Varieties",
    image: "/images/granites/venus-white.jpg",
  },
  {
    id: "brown-granites",
    title: "Brown Granites",
    varieties: "15+ Varieties",
    image: "/images/granites/brown.jpg",
  },
];

export function FeaturedCollections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Products"
          title="Our Collections"
          description="From jet blacks to pristine whites, discover granite that defines elegance."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/collection?category=${col.id}`}
                className="group block relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-1">
                    {col.title}
                  </h3>
                  <p className="text-white/70 text-sm font-medium">{col.varieties}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
