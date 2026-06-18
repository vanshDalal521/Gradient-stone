"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { type Granite, granites } from "@/lib/data/granites";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export function CollectionDetailClient({ granite }: { granite: Granite }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const related = granites.filter((g) => g.collection === granite.collection && g.id !== granite.id).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <Image src={granite.image} alt={granite.name} fill className="object-cover" priority sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
          <Link href="/collection" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4">
            {granite.collection} Collection
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05]">
            {granite.name}
          </motion.h1>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-3xl overflow-hidden border border-border aspect-[4/3] relative">
                <Image src={granite.image} alt={granite.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-foreground mb-5">{granite.name}</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">{granite.description}</p>

              {/* Finishes */}
              <div className="mb-6">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Available Finishes</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.finishes.map((f) => (
                    <span key={f} className="px-4 py-2 bg-surface border border-border rounded-xl text-sm text-foreground">{f}</span>
                  ))}
                </div>
              </div>

              {/* Thicknesses */}
              <div className="mb-6">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Thicknesses</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.thicknesses.map((t) => (
                    <span key={t} className="px-4 py-2 bg-surface border border-border rounded-xl text-sm text-foreground">{t}</span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-luxury-gold text-[11px] tracking-[0.2em] uppercase font-bold mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {granite.applications.map((a) => (
                    <span key={a} className="px-4 py-2 bg-surface border border-border rounded-xl text-sm text-foreground">{a}</span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black font-bold rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,155,60,0.3)] hover:scale-105 active:scale-95">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl p-5 border border-border text-center"
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
        <section className="section-padding relative overflow-hidden gradient-mesh-2">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
            </svg>
          </div>
          <div className="max-w-[1400px] mx-auto px-6">
            <SectionHeading label="Related" title={`More ${granite.collection} Granites`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((g, i) => (
                <motion.div key={g.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                  <Link href={`/collection/${g.slug}`} className="group block rounded-2xl overflow-hidden border border-border hover-gold-border transition-all duration-500 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={g.image} alt={g.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-foreground font-bold">{g.name}</h3>
                      <p className="text-muted text-sm mt-1 line-clamp-1">{g.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Marquee />
    </>
  );
}
