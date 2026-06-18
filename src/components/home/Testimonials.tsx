"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    company: "Arc Design Studio, New York",
    role: "Principal Architect",
    content:
      "Sundaram Granites has been our exclusive Indian granite supplier for over 5 years. The consistency in quality and their ability to handle large-scale orders with precision is unmatched.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    company: "Dubai Luxury Interiors",
    role: "Managing Director",
    content:
      "We've sourced granite from many suppliers across India, but Sundaram's attention to quality control and export packaging stands apart. Zero damage in transit, every single time.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    company: "Stone & Surface Co., London",
    role: "Procurement Head",
    content:
      "The breadth of their collection is impressive — from the classic Tan Brown to the exotic Lavender Blue, every slab arrives exactly as promised.",
    rating: 5,
  },
  {
    name: "Roberto Marconi",
    company: "Marconi Architecture, Milan",
    role: "Lead Designer",
    content:
      "We specified Sundaram's Forest Black for a high-end hotel lobby in Milan. The depth of color and consistency across 200+ slabs was remarkable.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from architects, designers, and developers who choose Sundaram Granites for their most prestigious projects."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E5E7EB] rounded-3xl p-10 md:p-14 relative overflow-hidden"
              >
                <div className="absolute top-8 right-10 text-[#B8860B]/[0.06]">
                  <Quote className="w-24 h-24" />
                </div>

                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>

                <blockquote className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed font-[family-name:var(--font-cormorant)] mb-8 relative">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold text-lg font-[family-name:var(--font-cinzel)] shrink-0">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="text-[#1A1A1A] font-bold text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-[#B8860B] text-sm font-medium">
                      {testimonials[current].role}
                    </div>
                    <div className="text-[#6B7280] text-sm">
                      {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-400"
                  style={{ width: i === current ? "32px" : "8px" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className="absolute inset-0 bg-[#E5E7EB] rounded-full" />
                  {i === current && (
                    <motion.div
                      layoutId="testimonialIndicator"
                      className="absolute inset-0 bg-[#B8860B] rounded-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#1A1A1A] hover:border-[#B8860B]/40 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#1A1A1A] hover:border-[#B8860B]/40 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
