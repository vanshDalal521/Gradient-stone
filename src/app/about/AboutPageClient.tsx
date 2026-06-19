"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Award,
  Globe2,
  ShieldCheck,
  Factory,
  Users,
  Leaf,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2007",
    title: "The Beginning",
    description:
      "Founded in Krishnagiri, Tamil Nadu — the granite capital of India.",
  },
  {
    year: "2010",
    title: "First Export",
    description:
      "Shipped our first container to the Middle East.",
  },
  {
    year: "2014",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001:2015 quality management certification.",
  },
  {
    year: "2017",
    title: "Global Expansion",
    description:
      "Reached 30+ countries. Opened export offices in Dubai and London.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched virtual showroom and AI-powered quality inspection.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "50+ countries, 5 manufacturing units, 200+ skilled professionals.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every slab cut with CNC precision to ±0.5mm tolerance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Multi-point inspection at every stage. 99.5% quality threshold.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Exporting to 50+ countries with dedicated logistics teams.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Zero-waste processing, water recycling, and solar-powered facilities.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with architects and developers.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Two decades of love for stone and craftsmanship.",
  },
];

const facilities = [
  {
    name: "Unit I — Krishnagiri",
    location: "Tamil Nadu",
    capacity: "50,000 sq.ft/month",
    specialty: "White & Premium Collections",
  },
  {
    name: "Unit II — Bangalore",
    location: "Karnataka",
    capacity: "40,000 sq.ft/month",
    specialty: "Black & Dark Collections",
  },
  {
    name: "Unit III — Hyderabad",
    location: "Telangana",
    capacity: "35,000 sq.ft/month",
    specialty: "Brown & Earth Tones",
  },
  {
    name: "Unit IV — Chennai",
    location: "Tamil Nadu",
    capacity: "45,000 sq.ft/month",
    specialty: "Blue & Rare Collections",
  },
  {
    name: "Unit V — Pollachi",
    location: "Tamil Nadu",
    capacity: "30,000 sq.ft/month",
    specialty: "Green & Exotic Collections",
  },
];

export function AboutPageClient() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5"
          >
            A Legacy Carved
            <br />
            <span className="text-gradient-gold">in Stone</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            From quarries across India to 50+ countries worldwide.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
                Our Story
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-6">
                From India
                <br />
                <span className="text-gradient-gold">to the World</span>
              </h2>
              <span className="gold-line mb-8" />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Sundaram Granites was born in 2007 from a simple belief: India&apos;s natural stone deserves a global stage. What started in Krishnagiri has grown into one of the most trusted names in granite export.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Our founder saw that Indian granite could compete with marble from Italy or quartz from anywhere. The difference would be quality, consistency, and service.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Today, with five manufacturing units and exports to 50+ countries, we&apos;ve proven that vision right.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2007", label: "Founded" },
                { value: "50+", label: "Countries" },
                { value: "30+", label: "Varieties" },
                { value: "200+", label: "Team Members" },
                { value: "5", label: "Facilities" },
                { value: "99.5%", label: "Quality Rate" },
                { value: "200K", label: "Sq.ft/Month" },
                { value: "1000+", label: "Projects" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="bg-surface border border-border rounded-xl p-5 text-center"
                >
                  <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-luxury-gold text-[10px] tracking-[0.2em] uppercase font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="Six principles that guide every slab we produce and every relationship we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-7 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-luxury-gold/10 flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Journey"
            title="Milestones That Matter"
            description="Two decades of growth, innovation, and relentless pursuit of quality."
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex items-start gap-6 mb-10 pl-14"
              >
                <div className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full bg-luxury-gold border-2 border-white shadow" />
                <div>
                  <div className="text-luxury-gold font-bold text-sm tracking-wider mb-1">{item.year}</div>
                  <h3 className="text-foreground font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Facilities"
            title="Manufacturing Excellence"
            description="Five state-of-the-art manufacturing facilities across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-7 hover-lift"
              >
                <div className="w-11 h-11 rounded-lg bg-luxury-gold/10 flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-0.5">{facility.name}</h3>
                <div className="text-luxury-gold text-sm font-medium mb-3">{facility.location}</div>
                <p className="text-muted text-sm">{facility.capacity}</p>
                <p className="text-muted text-sm">{facility.specialty}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-luxury-gold/5 border border-luxury-gold/20 rounded-xl p-7 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-foreground font-bold text-lg mb-2">Visit Our Facilities</h3>
              <p className="text-muted text-sm mb-4">Schedule a factory tour and see our quality firsthand.</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-luxury-gold font-semibold text-sm hover:gap-3 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
