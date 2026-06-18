"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Sundaram Granites has been our supplier for over 8 years. The consistency in quality and timely delivery is unmatched.",
    author: "Marcus Weber",
    role: "Director, Weber Steine GmbH",
    country: "Germany",
  },
  {
    quote:
      "Their Black Galaxy granite is the finest we've sourced from India. Excellent processing and packaging standards.",
    author: "Sarah Mitchell",
    role: "Procurement Head, Mitchell Stones",
    country: "United Kingdom",
  },
  {
    quote:
      "From quarry visits to final delivery, Sundaram's team was professional and transparent. Highly recommended partner.",
    author: "Ahmed Al-Rashid",
    role: "CEO, Al-Rashid Trading Co.",
    country: "UAE",
  },
  {
    quote:
      "We switched to Sundaram for our premium projects and the difference in quality was immediately noticeable.",
    author: "James O'Connor",
    role: "Managing Director, O'Connor Tiles",
    country: "Ireland",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          align="center"
        />

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  {testimonials[current].role} · {testimonials[current].country}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#B8860B] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
