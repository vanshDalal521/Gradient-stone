"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collections } from "@/lib/data/granites";
import { ArrowUpRight } from "lucide-react";

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/collection?color=${encodeURIComponent(collection.name)}`}
        className="group block relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E5E7EB] hover:shadow-xl transition-shadow duration-500"
      >
        <div className="absolute inset-0">
          <Image
            src={collection.image}
            alt={`${collection.name} Granite Collection`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[#B8860B] text-[10px] tracking-[0.3em] uppercase font-bold block mb-2">
                {collection.count} Varieties
              </span>
              <h3 className="text-white font-[family-name:var(--font-playfair)] text-3xl font-bold">
                {collection.name}
              </h3>
              <p className="text-white/70 text-sm mt-2 max-w-[220px]">
                {collection.description}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-[#B8860B] group-hover:border-[#B8860B] shrink-0">
              <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-45 group-hover:text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCollections() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <SectionHeading
          label="Our Collections"
          title="Explore Premium Granite"
          description="Discover our curated collections of India's finest granite, handpicked from the best quarries across the subcontinent."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.name} collection={collection} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-[#B8860B]/25 text-[#B8860B] font-bold text-lg rounded-2xl transition-all duration-400 hover:bg-[#B8860B]/10 hover:border-[#B8860B]/50"
          >
            View All Granites
            <ArrowUpRight className="w-5 h-5 transition-transform duration-400 group-hover:rotate-45 group-hover:scale-110" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
