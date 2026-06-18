"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Download, FileText, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";

const catalogues = [
  { title: "Full Granite Collection 2024", description: "Complete catalogue with all 30+ granite varieties and specifications.", format: "PDF", size: "24 MB" },
  { title: "White Collection Special", description: "Dedicated showcase of our premium white granite range.", format: "PDF", size: "8 MB" },
  { title: "Black Collection Special", description: "Dedicated showcase of our black granite varieties.", format: "PDF", size: "7 MB" },
  { title: "Export Packaging Guide", description: "Our packaging standards and shipping specifications.", format: "PDF", size: "3 MB" },
];

const faqs = [
  {
    question: "What finishes are available?",
    answer: "We offer five finishes: Polished, Leather, Flamed, Honed, and Lapo. Availability varies by granite variety.",
  },
  {
    question: "What thicknesses do you offer?",
    answer: "Standard thicknesses are 16mm, 18mm, 20mm, and 30mm. 20mm is popular for countertops, 30mm for commercial applications.",
  },
  {
    question: "What is your minimum order quantity?",
    answer: "For export orders, minimum is one 20ft container (300-400 slabs). For domestic orders, we accommodate smaller quantities.",
  },
  {
    question: "How do you ensure quality during export?",
    answer: "Every slab undergoes 12-point inspection. We use ISPM-15 certified crates with moisture barriers and maintain a 99.5% zero-damage transit record.",
  },
  {
    question: "Can I visit your factory?",
    answer: "Absolutely! We encourage all potential buyers to visit. We arrange factory tours, slab selection, and meetings with our quality team.",
  },
  {
    question: "Do you provide samples?",
    answer: "Yes, free 4\"x4\" samples for all varieties. Shipped via international courier, arriving within 5-7 business days.",
  },
  {
    question: "What certifications do you hold?",
    answer: "ISO 9001:2015 for quality management, ISO 14001 for environmental management, and full compliance with international standards.",
  },
  {
    question: "How long does shipping take?",
    answer: "Middle East: 7-10 days. Europe: 15-20 days. North America: 20-25 days. Southeast Asia: 10-14 days.",
  },
];

const careGuides = [
  { title: "Countertop Care Guide", description: "Daily cleaning, stain prevention, and maintenance tips." },
  { title: "Flooring Maintenance", description: "Long-term care for granite flooring in any space." },
  { title: "Exterior Cladding Care", description: "Weather-resistant maintenance for exterior installations." },
  { title: "Stain Removal Guide", description: "Step-by-step instructions for removing common stains." },
];

export function ResourcesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5"
          >
            Downloads &
            <br />
            <span className="text-gradient-gold">Information</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Catalogues, care guides, and frequently asked questions.
          </motion.p>
        </div>
      </section>

      {/* Catalogues */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Downloads" title="Catalogues & Brochures" description="Download our latest product catalogues and documentation." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {catalogues.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-6 flex items-start gap-4 hover-lift"
              >
                <div className="w-11 h-11 rounded-lg bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-luxury-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-bold mb-0.5">{cat.title}</h3>
                  <p className="text-muted text-sm mb-2.5">{cat.description}</p>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs text-muted-dark bg-surface px-2 py-0.5 rounded">{cat.format}</span>
                    <span className="text-xs text-muted-dark">{cat.size}</span>
                  </div>
                </div>
                <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-luxury-gold hover:border-luxury-gold/30 transition-colors shrink-0">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guides */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Care Guides" title="Maintenance & Care" description="Keep your granite looking pristine with our expert guides." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {careGuides.map((guide, i) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-6 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-luxury-gold/10 flex items-center justify-center mb-4">
                  <ImageIcon className="w-4 h-4 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold mb-1.5">{guide.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{guide.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" description="Quick answers about our granite products and services." />
          <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="bg-white border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-foreground font-semibold text-sm pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-luxury-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
