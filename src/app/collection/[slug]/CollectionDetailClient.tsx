"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Granite, granites } from "@/lib/data/granites";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CollectionDetailClient({ granite }: { granite: Granite }) {
  const related = granites.filter((g) => g.collection === granite.collection && g.id !== granite.id).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <Link href="/collection" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            {granite.collection} Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
          >
            {granite.name}
          </motion.h1>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-xl overflow-hidden border border-border aspect-[4/3] relative">
                <Image src={granite.image} alt={granite.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground mb-4">{granite.name}</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">{granite.description}</p>

              <div className="mb-6">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Available Finishes</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.finishes.map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm text-foreground">{f}</span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Thicknesses</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.thicknesses.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm text-foreground">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.applications.map((a) => (
                    <span key={a} className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm text-foreground">{a}</span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-luxury-gold text-white font-bold text-sm rounded-lg transition-all duration-300 hover:bg-luxury-gold-dark active:scale-95"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Specs */}
          <div className="mt-20">
            <SectionHeading label="Technical Specifications" title="Performance Data" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {Object.entries(granite.specs).map(([key, value], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="bg-surface border border-border rounded-xl p-5 text-center"
                >
                  <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-1">{value}</div>
                  <div className="text-muted text-xs capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="max-w-[1400px] mx-auto px-6">
            <SectionHeading label="Related" title={`More ${granite.collection} Granites`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((g, i) => (
                <motion.div key={g.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <Link href={`/collection/${g.slug}`} className="group block rounded-xl overflow-hidden border border-border bg-white hover-lift">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={g.image} alt={g.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-foreground font-bold text-sm">{g.name}</h3>
                      <p className="text-muted text-xs mt-1 line-clamp-1">{g.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Granite Furniture CTA */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src="/images/furniture/beige-round-dining-table.png"
                  alt="Granite Furniture Collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4">
                  New Collection
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Explore Granite Furniture
                </h2>
                <p className="text-muted text-base leading-relaxed mb-8">
                  From statement dining tables to sculptural side tables, our furniture collection transforms natural stone into functional art for your home.
                </p>
                <Link
                  href="/granite-furniture"
                  className="inline-flex items-center gap-2 self-start px-7 py-3.5 bg-luxury-gold text-white font-bold text-sm rounded-lg transition-all duration-300 hover:bg-luxury-gold-dark active:scale-95 hover:shadow-lg hover:shadow-luxury-gold/20"
                >
                  View Furniture Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
