"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import {
  Eye, Scissors, Cog, ShieldCheck, PackageCheck,
  Pickaxe, Truck, Award, CheckCircle, ArrowRight,
} from "lucide-react";

const steps = [
  { icon: Eye, title: "Selection", description: "Handpicked from India's finest quarries. Each block is inspected for color consistency, structural integrity, and mineral composition before approval.", details: ["Geological survey of quarry", "Block-level color matching", "Structural integrity testing", "Mineral composition analysis"] },
  { icon: Pickaxe, title: "Extraction", description: "Diamond wire saws and precision blasting extract blocks with minimal waste. Our quarries operate with sustainable practices and zero-blast zones.", details: ["Diamond wire extraction", "GPS-mapped quarry zones", "Sustainable extraction practices", "Environmental compliance"] },
  { icon: Scissors, title: "Cutting", description: "CNC bridge saws and multi-blade gang saws slice blocks into slabs with ±0.5mm precision. Multi-width cutting maximizes material utilization.", details: ["CNC bridge saw cutting", "Multi-blade gang saws", "±0.5mm tolerance", "95%+ material utilization"] },
  { icon: Cog, title: "Finishing", description: "Multiple finish options — Polished, Leather, Flamed, Honed, and Lapo. Each finish undergoes quality validation for consistency.", details: ["5 finish varieties", "Automated polishing lines", "Consistent surface quality", "Custom finish options"] },
  { icon: ShieldCheck, title: "Inspection", description: "12-point quality inspection at every stage. Only slabs meeting our 99.5% quality threshold proceed to packaging.", details: ["12-point inspection protocol", "Color consistency verification", "Dimensional accuracy check", "Surface defect detection"] },
  { icon: PackageCheck, title: "Packaging", description: "Export-grade wooden crating with moisture barriers, corner protectors, and vibration dampening. Zero-damage guarantee on transit.", details: ["ISPM-15 certified crates", "Moisture barrier lining", "Corner protection system", "Vibration dampening"] },
];

const machinery = [
  { name: "CNC Bridge Saws", count: "6", description: "Precision cutting with automated depth control" },
  { name: "Gang Saw Lines", count: "4", description: "Multi-blade block-to-slab cutting" },
  { name: "Polishing Lines", count: "8", description: "Automated 16-head polishing systems" },
  { name: "Waterjet Cutters", count: "3", description: "Intricate pattern and edge cutting" },
  { name: "Flaming Machines", count: "2", description: "Surface texturing for outdoor applications" },
  { name: "Quality Labs", count: "2", description: "Full-spectrum material testing facilities" },
];

export function ManufacturingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <Image
            src="/images/site/warehouse.jpg"
            alt="Sundaram Granites Warehouse"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-[15%] right-[15%] w-32 h-32 border-2 border-luxury-gold/[0.08] rounded-3xl" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
            Manufacturing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6">
            Precision at
            <br />
            <span className="text-gradient-gold-animated">Every Stage</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            From raw block to finished slab — our six-stage process ensures only perfection reaches your project.
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* 6-Stage Process */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Our Process" title="Six-Stage Quality Process" description="Every slab passes through six rigorous stages before it earns the Sundaram stamp of approval." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-9 border border-border hover-gold-border transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[80px] font-bold text-foreground/[0.02] font-[family-name:var(--font-playfair)] leading-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <h3 className="text-foreground font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{step.description}</p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle className="w-3.5 h-3.5 text-luxury-gold/60 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee reverse />

      {/* Machinery */}
      <section className="section-padding relative overflow-hidden gradient-mesh-2">
        <div className="wave-divider-top">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Technology" title="Our Machinery" description="State-of-the-art Italian and German machinery for precision processing." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {machinery.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -6 }} className="glass rounded-2xl p-7 border border-border hover-gold-border transition-all duration-500 group">
                <div className="text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">{m.count}</div>
                <h3 className="text-foreground font-bold mb-1">{m.name}</h3>
                <p className="text-muted text-sm">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Showcase */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeading
                label="Our Facility"
                title="World-Class Warehouse"
                description="Our state-of-the-art warehouse spans over 50,000 sq.ft, housing an extensive inventory of premium granite slabs ready for immediate dispatch."
                align="left"
              />
              <div className="flex flex-wrap gap-4 mt-6">
                {["50,000+ sq.ft", "200+ Varieties", "Climate Controlled", "24/7 Security"].map((tag) => (
                  <span key={tag} className="px-4 py-2 glass rounded-full text-luxury-gold text-sm font-medium border border-luxury-gold/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border"
            >
              <Image
                src="/images/site/warehouse.jpg"
                alt="Sundaram Granites Warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Quality Assurance" title="Our Commitment" description="ISO-certified processes ensuring consistency in every slab." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "99.5%", label: "Quality Rate" },
              { value: "12", label: "Point Inspection" },
              { value: "0", label: "Defect Tolerance" },
              { value: "100%", label: "Traceability" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center glass rounded-2xl p-6 border border-border">
                <div className="text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-1">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
