"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Download, FileText, Image as ImageIcon, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const catalogues = [
  { title: "Full Granite Collection 2024", description: "Complete catalogue with all 30+ granite varieties, finishes, and specifications.", format: "PDF", size: "24 MB" },
  { title: "White Collection Special", description: "Dedicated showcase of our premium white granite range.", format: "PDF", size: "8 MB" },
  { title: "Black Collection Special", description: "Dedicated showcase of our black granite varieties.", format: "PDF", size: "7 MB" },
  { title: "Export Packaging Guide", description: "Our packaging standards and shipping specifications.", format: "PDF", size: "3 MB" },
];

const faqs = [
  {
    question: "What finishes are available for your granite slabs?",
    answer: "We offer five finish options: Polished (high-gloss mirror finish), Leather (textured matte), Flamed (rough heat-treated surface), Honed (smooth matte), and Lapo (leathered with polished highlights). Availability varies by granite variety.",
  },
  {
    question: "What thicknesses do you offer?",
    answer: "Our standard thicknesses are 16mm, 18mm, 20mm, and 30mm. 20mm is the most popular for countertops, while 30mm is preferred for heavy-duty commercial applications. Custom thicknesses are available for large orders.",
  },
  {
    question: "What is your minimum order quantity?",
    answer: "For export orders, our minimum is typically one 20ft container (approximately 300-400 slabs depending on thickness). For domestic orders, we can accommodate smaller quantities. Contact us for specific requirements.",
  },
  {
    question: "How do you ensure quality during export?",
    answer: "Every slab undergoes 12-point quality inspection before packaging. We use ISPM-15 certified wooden crates with moisture barriers, corner protectors, and vibration dampening. We maintain a 99.5% zero-damage transit record.",
  },
  {
    question: "Can I visit your factory before placing an order?",
    answer: "Absolutely! We encourage all potential buyers to visit our facilities in South India. We can arrange factory tours, slab selection appointments, and meetings with our quality team. Contact us to schedule a visit.",
  },
  {
    question: "Do you provide samples?",
    answer: "Yes, we provide free sample pieces (approximately 4\"x4\") for all our granite varieties. Samples are shipped via international courier and typically arrive within 5-7 business days. Contact us to request samples.",
  },
  {
    question: "What certifications do you hold?",
    answer: "We are ISO 9001:2015 certified for quality management, ISO 14001 for environmental management, and comply with all Indian and international standards for granite manufacturing and export.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary by destination: Middle East (7-10 days), Europe (15-20 days), North America (20-25 days), Southeast Asia (10-14 days). We handle all customs documentation and logistics.",
  },
];

const careGuides = [
  { title: "Countertop Care Guide", description: "Daily cleaning, stain prevention, and maintenance tips for granite countertops." },
  { title: "Flooring Maintenance", description: "Long-term care instructions for granite flooring in residential and commercial spaces." },
  { title: "Exterior Cladding Care", description: "Weather-resistant maintenance for exterior granite installations." },
  { title: "Stain Removal Guide", description: "Step-by-step instructions for removing common stains from granite surfaces." },
];

export function ResourcesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden gradient-mesh-2">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
            Resources
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6">
            Downloads &
            <br />
            <span className="text-gradient-gold-animated">Information</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Catalogues, care guides, technical specifications, and frequently asked questions.
          </motion.p>
        </div>
      </section>

      {/* Catalogues */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Downloads" title="Catalogues & Brochures" description="Download our latest product catalogues and technical documentation." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {catalogues.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-7 border border-border hover-gold-border transition-all duration-500 group flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                  <FileText className="w-6 h-6 text-luxury-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-bold mb-1">{cat.title}</h3>
                  <p className="text-muted text-sm mb-3">{cat.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-dark bg-surface px-2 py-0.5 rounded">{cat.format}</span>
                    <span className="text-xs text-muted-dark">{cat.size}</span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted hover:text-luxury-gold hover:border-luxury-gold/40 transition-all duration-400 shrink-0">
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* Care Guides */}
      <section className="section-padding relative overflow-hidden gradient-mesh-2">
        <div className="wave-divider-top">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Care Guides" title="Maintenance & Care" description="Keep your granite looking pristine with our expert maintenance guides." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {careGuides.map((guide, i) => (
              <motion.div key={guide.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-7 border border-border hover-gold-border transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                  <ImageIcon className="w-5 h-5 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold mb-2">{guide.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{guide.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" description="Quick answers to common questions about our granite products and services." />
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="glass rounded-2xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-foreground font-semibold pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-luxury-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3 }} className="px-6 pb-6">
                    <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee reverse />
    </>
  );
}
