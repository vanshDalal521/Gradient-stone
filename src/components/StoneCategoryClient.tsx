"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Package, Truck, Shield, Ruler } from "lucide-react";

interface StoneCategoryClientProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const features = [
  { icon: Package, label: "Wide Range", desc: "Multiple varieties available" },
  { icon: Truck, label: "Pan India Delivery", desc: "Fast & reliable shipping" },
  { icon: Shield, label: "Quality Assured", desc: "ISO certified products" },
  { icon: Ruler, label: "Custom Sizes", desc: "Cut to your specifications" },
];

export function StoneCategoryClient({ title, subtitle, description, image }: StoneCategoryClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover opacity-10" sizes="100vw" />
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
            {subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-muted text-lg max-w-2xl leading-relaxed"
          >
            {description}
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
                <h3 className="text-foreground font-bold text-sm mb-1">{feat.label}</h3>
                <p className="text-muted text-xs">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interested in {title}?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Contact us for pricing, samples, and custom orders. Our team is ready to help you find the perfect stone.
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
