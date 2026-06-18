"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cog, Eye, ShieldCheck, PackageCheck, Scissors } from "lucide-react";

const steps = [
  { icon: Eye, label: "Selection", description: "Handpicked from premium quarries" },
  { icon: Scissors, label: "Cutting", description: "Precision CNC & gang saw cutting" },
  { icon: Cog, label: "Finishing", description: "Multiple finish options available" },
  { icon: ShieldCheck, label: "Inspection", description: "Multi-point quality checks" },
  { icon: PackageCheck, label: "Packaging", description: "Export-grade wooden crating" },
];

export function ManufacturingPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden gradient-mesh-2">
      {/* Wavy top divider */}
      <div className="wave-divider-top">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-background" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-background" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-background" />
        </svg>
      </div>

      <motion.div style={{ y: decorY }} className="absolute top-24 right-[5%] w-72 h-72 border-2 border-luxury-gold/[0.04] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-luxury-gold font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-6">
              Manufacturing
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.8rem] font-bold text-foreground leading-[1.08] mb-8">
              Five-Stage
              <br />
              <span className="text-gradient-gold-animated">Quality Process</span>
            </h2>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[3px] bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold mb-10"
            />

            <div className="mt-8 flex flex-col gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 p-4 rounded-2xl transition-all duration-500 hover:bg-white/[0.03] hover:translate-x-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold/10 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="w-6 h-6 text-luxury-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-luxury-gold/40 text-xs font-mono font-bold">
                        0{i + 1}
                      </span>
                      <h3 className="text-foreground font-bold text-lg">
                        {step.label}
                      </h3>
                    </div>
                    <p className="text-muted text-sm ml-8">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/manufacturing"
                className="group inline-flex items-center gap-3 text-luxury-gold font-bold text-lg transition-all duration-400 hover:gap-5"
              >
                Explore Our Facilities
                <ArrowRight className="w-5 h-5 transition-transform duration-400 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Card — BIGGER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass rounded-[2rem] border border-border p-10 lg:p-14 relative overflow-hidden">
              {/* Subtle gradient inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.04] via-transparent to-transparent pointer-events-none" />

              <div className="grid grid-cols-2 gap-10 relative">
                {[
                  { value: "200K", label: "Sq.ft/Month Capacity" },
                  { value: "16+", label: "Automated Machines" },
                  { value: "5", label: "Processing Units" },
                  { value: "99.5%", label: "Quality Rate" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="mt-10 pt-8 border-t border-border relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-granite-black flex items-center justify-center">
                  <span className="text-luxury-gold text-lg">&ldquo;</span>
                </div>
                <p className="text-center text-muted text-sm leading-relaxed italic">
                  Every slab undergoes our rigorous five-stage quality process,
                  ensuring only the finest granite reaches your project.
                </p>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-4 -right-4 w-28 h-28 border-2 border-luxury-gold/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-luxury-gold/[0.06] rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
