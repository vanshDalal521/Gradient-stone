"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PackageCheck, ShieldCheck } from "lucide-react";

const steps = [
  { icon: PackageCheck, label: "Selection", description: "Handpicked from premium quarries" },
  { icon: ShieldCheck, label: "Processing", description: "Precision CNC & gang saw cutting" },
  { icon: ArrowRight, label: "Delivery", description: "Export-grade packaging & shipping" },
];

export function ManufacturingPreview() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-4">
              Manufacturing
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.1] mb-6">
              Three-Step
              <br />
              <span className="text-[#B8860B]">Quality Process</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#B8860B] mb-10" />

            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-[#F9FAFB] hover:translate-x-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#B8860B]/40 group-hover:bg-[#B8860B]/10">
                    <step.icon className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#B8860B]/40 text-xs font-mono font-bold">
                        0{i + 1}
                      </span>
                      <h3 className="text-[#1A1A1A] font-bold text-lg">
                        {step.label}
                      </h3>
                    </div>
                    <p className="text-[#6B7280] text-sm ml-8">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/manufacturing"
                className="group inline-flex items-center gap-3 text-[#B8860B] font-bold text-lg transition-all duration-300 hover:gap-5"
              >
                Explore Our Facilities
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-3xl p-10 lg:p-14">
              <div className="grid grid-cols-2 gap-10">
                {[
                  { value: "200K", label: "Sq.ft/Month Capacity" },
                  { value: "16+", label: "Automated Machines" },
                  { value: "5", label: "Processing Units" },
                  { value: "99.5%", label: "Quality Rate" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#6B7280] text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                <p className="text-center text-[#6B7280] text-sm leading-relaxed italic">
                  Every slab undergoes our rigorous quality process, ensuring only the finest granite reaches your project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
