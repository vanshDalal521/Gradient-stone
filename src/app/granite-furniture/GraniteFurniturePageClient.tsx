"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { furniture, type FurnitureCategory, type GraniteFurniture } from "@/lib/data/furniture";
import { ArrowLeft, ArrowRight, Armchair, Table, Columns3, LayoutList } from "lucide-react";

const categories: { label: string; value: FurnitureCategory | "All"; icon: React.ReactNode }[] = [
  { label: "All", value: "All", icon: <LayoutList className="w-4 h-4" /> },
  { label: "Tables", value: "Tables", icon: <Table className="w-4 h-4" /> },
  { label: "Seating", value: "Seating", icon: <Armchair className="w-4 h-4" /> },
  { label: "Consoles", value: "Consoles", icon: <Columns3 className="w-4 h-4" /> },
  { label: "Benches", value: "Benches", icon: <LayoutList className="w-4 h-4" /> },
];

export function GraniteFurniturePage() {
  const [active, setActive] = useState<FurnitureCategory | "All">("All");
  const filtered = active === "All" ? furniture : furniture.filter((f) => f.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Premium Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
          >
            Granite Furniture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-muted text-lg max-w-2xl leading-relaxed"
          >
            Handcrafted from natural stone, our furniture collection brings timeless elegance to every room. Each piece is unique — crafted to last generations.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  active === cat.value
                    ? "bg-luxury-gold text-white border-luxury-gold shadow-lg shadow-luxury-gold/20"
                    : "bg-surface border-border text-foreground hover:border-luxury-gold/40 hover:text-luxury-gold"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <FurnitureCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Custom Furniture Available
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            Looking for a specific size, stone, or design? We craft bespoke granite furniture tailored to your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold text-white font-bold text-sm rounded-xl transition-all duration-300 hover:bg-luxury-gold-dark active:scale-95 hover:shadow-lg hover:shadow-luxury-gold/20"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FurnitureCard({ item, index }: { item: GraniteFurniture; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-xl overflow-hidden border border-border bg-white hover-lift"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-luxury-gold text-white text-sm font-bold rounded-lg transition-all duration-200 hover:bg-luxury-gold-dark"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-5">
        <span className="inline-block text-luxury-gold text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
          {item.category}
        </span>
        <h3 className="text-foreground font-bold text-base mb-1">{item.name}</h3>
        <p className="text-muted text-sm line-clamp-2 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-muted">
            {item.material}
          </span>
          <span className="px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-muted">
            {item.dimensions}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
