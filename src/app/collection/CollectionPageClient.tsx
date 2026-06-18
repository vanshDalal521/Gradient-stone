"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { granites, collections, type GraniteCollection } from "@/lib/data/granites";
import { ArrowUpRight, Search, X } from "lucide-react";

const allFilters: GraniteCollection[] = ["White", "Black", "Brown", "Green", "Blue", "Pink / Gold"];

export function CollectionPageClient() {
  const [activeFilter, setActiveFilter] = useState<GraniteCollection | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const filtered = granites.filter((g) => {
    const matchesFilter = activeFilter === "All" || g.collection === activeFilter;
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden gradient-mesh-2">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
            Our Collection
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6">
            Premium Indian
            <br />
            <span className="text-gradient-gold-animated">Granite Collection</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            {granites.length} handpicked varieties across 6 curated collections.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Search & Filter Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search granites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-luxury-gold/50 focus:ring-1 focus:ring-luxury-gold/20 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-400 ${
                  activeFilter === "All"
                    ? "bg-luxury-gold text-granite-black"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-luxury-gold/30"
                }`}
              >
                All ({granites.length})
              </button>
              {allFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-400 ${
                    activeFilter === filter
                      ? "bg-luxury-gold text-granite-black"
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                layout
              >
                <Link
                  href={`/collection/${granite.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border hover-gold-border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={granite.image}
                      alt={granite.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-500 group-hover:bg-luxury-gold group-hover:border-luxury-gold">
                      <ArrowUpRight className="w-4 h-4 text-foreground transition-all duration-500 group-hover:text-granite-black group-hover:rotate-45" />
                    </div>
                    {granite.featured && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-luxury-gold text-granite-black text-[10px] font-bold tracking-wider uppercase rounded-md">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-luxury-gold text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
                      {granite.collection}
                    </div>
                    <h3 className="text-foreground font-bold text-lg mb-1.5">{granite.name}</h3>
                    <p className="text-muted text-sm line-clamp-2 leading-relaxed">{granite.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
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
              <button onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} className="mt-4 text-luxury-gold font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
