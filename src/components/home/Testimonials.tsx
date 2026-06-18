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
      "Sundaram Granites has been our exclusive Indian granite supplier for over 5 years. The consistency in quality and their ability to handle large-scale orders with precision is unmatched. Their Moon White and Kashmir White are our clients' favorites.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    company: "Dubai Luxury Interiors",
    role: "Managing Director",
    content:
      "We've sourced granite from many suppliers across India, but Sundaram's attention to quality control and export packaging stands apart. Zero damage in transit, every single time. Their team understands international standards.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    company: "Stone & Surface Co., London",
    role: "Procurement Head",
    content:
      "The breadth of their collection is impressive — from the classic Tan Brown to the exotic Lavender Blue, every slab arrives exactly as promised. Their responsive team and transparent communication make international sourcing effortless.",
    rating: 5,
  },
  {
    name: "Roberto Marconi",
    company: "Marconi Architecture, Milan",
    role: "Lead Designer",
    content:
      "We specified Sundaram's Forest Black for a high-end hotel lobby in Milan. The result was stunning. The depth of color and consistency across 200+ slabs was remarkable. A truly world-class supplier.",
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
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accents — BIGGER */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-luxury-gold/[0.025] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-luxury-gold/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from architects, designers, and developers who choose Sundaram Granites for their most prestigious projects."
        />

        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2rem] border border-border p-10 md:p-16 relative overflow-hidden"
              >
                {/* Quote icon — MASSIVE */}
                <div className="absolute top-8 right-10 text-luxury-gold/[0.06]">
                  <Quote className="w-28 h-28" />
                </div>

                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/25 to-transparent" />

                {/* Stars — animated */}
                <div className="flex gap-2 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Star className="w-6 h-6 fill-luxury-gold text-luxury-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Content — BIGGER text */}
                <blockquote className="text-foreground text-xl md:text-2xl leading-relaxed font-[family-name:var(--font-cormorant)] mb-10 relative">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>

                {/* Author — with avatar */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center text-granite-black font-bold text-xl font-[family-name:var(--font-cinzel)] shrink-0">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-luxury-gold text-sm font-medium">
                      {testimonials[current].role}
                    </div>
                    <div className="text-muted text-sm">
                      {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation — BIGGER */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-500"
                  style={{ width: i === current ? "36px" : "10px" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className="absolute inset-0 bg-muted-dark/50 rounded-full" />
                  {i === current && (
                    <motion.div
                      layoutId="testimonialIndicator"
                      className="absolute inset-0 bg-luxury-gold rounded-full"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl border-2 border-border flex items-center justify-center text-muted hover:text-foreground hover:border-luxury-gold/40 hover:bg-luxury-gold/[0.05] transition-all duration-400 active:scale-90"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl border-2 border-border flex items-center justify-center text-muted hover:text-foreground hover:border-luxury-gold/40 hover:bg-luxury-gold/[0.05] transition-all duration-400 active:scale-90"
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
