"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGranitesByCollection } from "@/lib/data/granites";
import { ArrowRight, Phone, Package, Truck, Shield, Ruler } from "lucide-react";

const cobbles = getGranitesByCollection("Cobbles");

const features = [
  { icon: Package, label: "Heavy Duty", desc: "Built for extreme durability" },
  { icon: Truck, label: "Pan India Delivery", desc: "Fast & reliable shipping" },
  { icon: Shield, label: "Weather Resistant", desc: "Withstands all conditions" },
  { icon: Ruler, label: "Custom Sizes", desc: "Cut to your specifications" },
];

export function CobblesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/granites/Kuppam Green.png"
            alt="Cobbles"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 text-sm"
          >
            ← Back to Home
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Rugged Beauty
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
          >
            Cobbles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-muted text-lg max-w-2xl leading-relaxed"
          >
            Cobbles combine rugged natural beauty with enduring strength. Ideal
            for driveways, pathways, patios, and landscape design, they bring
            character and charm to any outdoor space.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4">
                  <feat.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold text-sm mb-1">
                  {feat.label}
                </h3>
                <p className="text-muted text-xs">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobbles Gallery */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Collection"
            title="Premium Granite Cobbles"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cobbles.map((stone, i) => (
              <motion.div
                key={stone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/collection/${stone.slug}`}
                  className="group block rounded-xl overflow-hidden border border-border bg-white hover-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground font-bold text-sm">
                      {stone.name}
                    </h3>
                    <p className="text-muted text-xs mt-1 line-clamp-2">
                      {stone.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {stone.finishes.map((f) => (
                        <span
                          key={f}
                          className="px-2 py-0.5 bg-surface border border-border rounded text-[10px] text-muted"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interested in Cobbles?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Contact us for pricing, samples, and custom orders. Our team is
              ready to help you find the perfect stone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold text-white font-bold text-sm rounded-xl transition-all duration-300 hover:bg-luxury-gold-dark active:scale-95 hover:shadow-lg hover:shadow-luxury-gold/20"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/916363578346"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-bold text-sm rounded-xl transition-all duration-300 hover:border-luxury-gold/40 hover:text-luxury-gold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
