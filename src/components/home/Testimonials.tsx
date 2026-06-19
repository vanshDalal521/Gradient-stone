"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 80) {
      prev();
    } else if (info.offset.x < -80) {
      next();
    }
  };

  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          align="center"
        />

        <div className="relative mt-16 max-w-3xl mx-auto text-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1A1A1A] hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1A1A1A] hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swipeable content */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
              >
                <blockquote className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-relaxed italic px-8 md:px-12">
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
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
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
