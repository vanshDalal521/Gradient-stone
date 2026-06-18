"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";
import {
  Award,
  Globe2,
  ShieldCheck,
  Factory,
  Users,
  Leaf,
  Target,
  Heart,
  Pickaxe,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2007",
    title: "The Beginning",
    description:
      "Founded in Krishnagiri, Tamil Nadu — the granite capital of India. Started with a single quarry and a vision for global quality.",
  },
  {
    year: "2010",
    title: "First Export",
    description:
      "Shipped our first container to the Middle East. Expanded to three加工 processing lines to meet growing international demand.",
  },
  {
    year: "2014",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001:2015 certification. Established rigorous quality management systems across all operations.",
  },
  {
    year: "2017",
    title: "Global Expansion",
    description:
      "Reached 30+ countries. Opened dedicated export offices in Dubai and London. Launched our premium white granite collection.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Introduced AI-powered quality inspection. Launched virtual showroom and online slab selection for international buyers.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "50+ countries served, 5 manufacturing units, 200+ skilled professionals. Recognized as one of India's top granite exporters.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every slab is cut with CNC precision to ±0.5mm tolerance. We don't compromise on measurements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Multi-point inspection at every stage. Only slabs meeting our 99.5% quality threshold leave the factory.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Exporting to 50+ countries with dedicated logistics teams ensuring safe, timely delivery worldwide.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Zero-waste processing, water recycling, and solar-powered facilities. Responsible quarrying practices.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We don't just sell granite — we build lasting relationships with architects, builders, and developers.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Two decades of love for stone. Every team member shares a passion for natural beauty and craftsmanship.",
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden gradient-mesh-2">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] w-32 h-32 border-2 border-luxury-gold/[0.08] rounded-3xl"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[10%] w-4 h-4 bg-luxury-gold/20 rounded-full"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6"
          >
            A Legacy Carved
            <br />
            <span className="text-gradient-gold-animated">in Stone</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto"
          >
            From a single quarry in South India to 50+ countries worldwide — discover the Sundaram story.
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* Story Section */}
      <section className="section-padding relative overflow-hidden gradient-mesh-radial">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5">
                Our Story
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-foreground leading-[1.1] mb-7">
                From South India
                <br />
                <span className="text-gradient-gold">to the World</span>
              </h2>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block h-[3px] bg-gradient-to-r from-luxury-gold to-luxury-gold-light mb-8"
              />
              <p className="text-muted text-lg leading-relaxed mb-5">
                Sundaram Granites was born in 2007 from a simple belief: India&apos;s
                natural stone deserves a global stage. What started as a small
                quarry operation in Krishnagiri, Tamil Nadu, has grown into one of
                the most trusted names in Indian granite manufacturing and export.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-5">
                Our founder recognized that Indian granite — with its extraordinary
                range of colors, patterns, and durability — could compete with
                marble from Italy or quartz from anywhere in the world. The
                difference would be quality, consistency, and service.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Today, with five state-of-the-art manufacturing units, over 200
                skilled professionals, and exports to 50+ countries, we&apos;ve
                proven that vision right. But we&apos;re just getting started.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-5"
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                  className="glass rounded-2xl p-6 border border-border hover-gold-border transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-1">
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

      <Marquee reverse />

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="Six core principles that guide every slab we produce and every relationship we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-9 border border-border hover-gold-border transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110 group-hover:rotate-3">
                  <value.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden gradient-mesh-2">
        <div className="wave-divider-top">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Journey"
            title="Milestones That Matter"
            description="Two decades of growth, innovation, and relentless pursuit of quality."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-gold/30 via-luxury-gold/15 to-transparent -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center gap-8 mb-12 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass rounded-2xl p-7 border border-border hover-gold-border transition-all duration-500 inline-block">
                    <div className="text-luxury-gold font-bold text-sm tracking-wider mb-2">{item.year}</div>
                    <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-background shadow-lg shadow-luxury-gold/30 z-10" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            label="Our Facilities"
            title="Manufacturing Excellence"
            description="Five state-of-the-art facilities across South India, equipped with the latest technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8 border border-border hover-gold-border transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                  <Factory className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-1">{facility.name}</h3>
                <div className="text-luxury-gold text-sm font-medium mb-4">{facility.location}</div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <CheckCircle className="w-4 h-4 text-luxury-gold/60 shrink-0" />
                    {facility.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <CheckCircle className="w-4 h-4 text-luxury-gold/60 shrink-0" />
                    {facility.specialty}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass-gold rounded-3xl p-8 border border-luxury-gold/20 flex flex-col items-center justify-center text-center"
            >
              <Truck className="w-12 h-12 text-luxury-gold mb-4" />
              <h3 className="text-foreground font-bold text-lg mb-2">Visit Our Facilities</h3>
              <p className="text-muted text-sm mb-5">Schedule a factory tour and see our quality firsthand.</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-luxury-gold font-semibold transition-all duration-400 hover:gap-3"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
