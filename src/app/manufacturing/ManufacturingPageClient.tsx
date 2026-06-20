"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Eye, Scissors, Cog, ShieldCheck, PackageCheck,
  Pickaxe, CheckCircle, Layers, CircleDot, Maximize2, Zap,
} from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Selection",
    description: "Handpicked from India's finest quarries. Each block inspected for color and structural integrity.",
    details: ["Geological survey", "Block-level color matching", "Structural integrity testing", "Mineral composition analysis"],
    image: "/images/process/selection.png",
  },
  {
    icon: Pickaxe,
    title: "Extraction",
    description: "Diamond wire saws extract blocks with minimal waste. Sustainable quarrying practices.",
    details: ["Diamond wire extraction", "GPS-mapped quarry zones", "Sustainable practices", "Environmental compliance"],
    image: "/images/process/extraction.png",
  },
  {
    icon: Scissors,
    title: "Cutting",
    description: "CNC bridge saws slice blocks into slabs with ±0.5mm precision.",
    details: ["CNC bridge saw cutting", "Multi-blade gang saws", "±0.5mm tolerance", "95%+ material utilization"],
    image: "/images/process/cutting.jpg",
  },
  {
    icon: Cog,
    title: "Finishing",
    description: "Polished, Leather, Flamed, Honed, and Lapo finishes. Each validated for consistency.",
    details: ["5 finish varieties", "Automated polishing lines", "Consistent surface quality", "Custom finish options"],
    image: "/images/process/finishing.png",
  },
  {
    icon: ShieldCheck,
    title: "Inspection",
    description: "12-point quality inspection. Only slabs meeting 99.5% threshold proceed.",
    details: ["12-point inspection", "Color consistency check", "Dimensional accuracy", "Surface defect detection"],
    image: "/images/process/inspection.png",
  },
  {
    icon: PackageCheck,
    title: "Packaging",
    description: "Export-grade crating with moisture barriers and vibration dampening.",
    details: ["ISPM-15 certified crates", "Moisture barrier lining", "Corner protection", "Vibration dampening"],
    image: "/images/process/packaging.jpg",
  },
];

const machinery = [
  { name: "Multi-blade Cutter", count: "4", description: "Multi-blade block-to-slab cutting", icon: Layers, image: "/images/process/machinery-multiblade.png" },
  { name: "Line Polishing", count: "8", description: "Automated 16-head polishing systems", icon: CircleDot, image: "/images/process/machinery-polishing.png" },
  { name: "Edge Cutting", count: "6", description: "Precision cutting with automated depth control", icon: Maximize2, image: "/images/process/machinery-edge.png" },
  { name: "Wire Saw Dressing", count: "3", description: "Diamond wire saw block dressing", icon: Zap, image: "/images/process/machinery-wire.png" },
];

export function ManufacturingPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/site/warehouse.jpg"
          alt="Sundaram Granites Warehouse"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-white/80 font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Manufacturing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5"
          >
            Precision at
            <br />
            <span className="text-gradient-gold">Every Stage</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            From raw block to finished slab — six stages ensure only perfection reaches your project.
          </motion.p>
        </div>
      </section>

      {/* 6-Stage Process */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Our Process" title="Six-Stage Quality" description="Every slab passes through six rigorous stages before earning the Sundaram stamp." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl overflow-hidden hover-lift group"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-4 text-[70px] font-bold text-white/10 font-[family-name:var(--font-playfair)] leading-none select-none">
                    0{i + 1}
                  </div>
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted text-sm leading-relaxed mb-4">{step.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle className="w-3 h-3 text-luxury-gold/50 shrink-0" />
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

      {/* Machinery */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Technology" title="Our Machinery" description="State-of-the-art Italian and German machinery for precision processing." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {machinery.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative group rounded-xl overflow-hidden h-72 hover-lift bg-white border border-border"
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/90 flex items-center justify-center shadow-lg">
                      <m.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">{m.count}</div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{m.name}</h3>
                  <p className="text-white/60 text-sm">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Showcase */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                label="Our Facility"
                title="World-Class Warehouse"
                description="Our 50,000+ sq.ft warehouse houses an extensive inventory of premium granite slabs ready for immediate dispatch."
                align="left"
              />
              <div className="flex flex-wrap gap-3 mt-6">
                {["50,000+ sq.ft", "200+ Varieties", "Climate Controlled", "24/7 Security"].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 bg-luxury-gold/5 border border-luxury-gold/20 rounded-full text-luxury-gold text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3] border border-border"
            >
              <Image
                src="/images/site/warehouse.jpg"
                alt="Sundaram Granites Warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Quality Assurance" title="Our Commitment" description="ISO-certified processes ensuring consistency in every slab." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { value: "99.5%", label: "Quality Rate" },
              { value: "12", label: "Point Inspection" },
              { value: "0", label: "Defect Tolerance" },
              { value: "100%", label: "Traceability" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-center bg-white border border-border rounded-xl p-5"
              >
                <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-0.5">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
