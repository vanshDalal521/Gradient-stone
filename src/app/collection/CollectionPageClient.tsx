"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { granites, type GraniteCollection } from "@/lib/data/granites";
import { ArrowUpRight, Search, X } from "lucide-react";

const allFilters: GraniteCollection[] = ["White", "Black", "Brown", "Green", "Blue", "Pink / Gold"];

export function CollectionPageClient() {
  const [activeFilter, setActiveFilter] = useState<GraniteCollection | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = granites.filter((g) => {
    const matchesFilter = activeFilter === "All" || g.collection === activeFilter;
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 py-28 md:py-36 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5"
          >
            Premium Indian
            <br />
            <span className="text-gradient-gold">Granite Collection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            {granites.length} handpicked varieties across 6 curated collections.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10"
          >
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search granites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-surface border border-border rounded-lg text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-luxury-gold/40 transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "All"
                    ? "bg-luxury-gold text-white"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-luxury-gold/30"
                }`}
              >
                All ({granites.length})
              </button>
              {allFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-luxury-gold text-white"
                      : "bg-surface border border-border text-muted hover:text-foreground hover:border-luxury-gold/30"
                  }`}
                >
                  {filter} ({granites.filter((g) => g.collection === filter).length})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((granite, i) => (
              <motion.div
                key={granite.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                layout
              >
                <Link
                  href={`/collection/${granite.slug}`}
                  className="group block rounded-xl overflow-hidden border border-border bg-white hover-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={granite.image}
                      alt={granite.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    {granite.featured && (
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-luxury-gold text-white text-[10px] font-bold tracking-wider uppercase rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-luxury-gold text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
                      {granite.collection}
                    </div>
                    <h3 className="text-foreground font-bold text-base mb-1">{granite.name}</h3>
                    <p className="text-muted text-sm line-clamp-2 leading-relaxed">{granite.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {granite.finishes.slice(0, 3).map((finish) => (
                        <span key={finish} className="px-2 py-0.5 bg-surface border border-border rounded text-[10px] text-muted">
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No granites found matching your criteria.</p>
              <button onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} className="mt-3 text-luxury-gold font-semibold text-sm hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
