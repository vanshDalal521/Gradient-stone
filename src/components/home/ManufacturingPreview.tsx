"use client";

import { motion } from "framer-motion";
import { Search, Cog, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Source",
    description: "Handpicked from India's finest quarries",
  },
  {
    icon: Cog,
    title: "Craft",
    description: "Precision cut with advanced technology",
  },
  {
    icon: Truck,
    title: "Deliver",
    description: "Global logistics to your doorstep",
  },
];

export function ManufacturingPreview() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Process"
          title="How We Work"
          description="From quarry to container, every step is controlled with precision."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-[#B8860B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-2">
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
