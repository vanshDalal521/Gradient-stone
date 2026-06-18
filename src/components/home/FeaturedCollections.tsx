"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collections } from "@/lib/data/granites";
import { ArrowUpRight } from "lucide-react";

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isHoveredRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !isHoveredRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;
    if (linkRef.current) {
      linkRef.current.style.transform = `rotateY(${x * 0.6}deg) rotateX(${-y * 0.6}deg) translateZ(30px)`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (linkRef.current) {
          linkRef.current.style.transform = "none";
        }
      }}
      style={{ perspective: "1000px" }}
    >
      <Link
        ref={linkRef}
        href={`/collection?color=${encodeURIComponent(collection.name)}`}
        className="group block relative rounded-3xl overflow-hidden aspect-[4/3] border border-border hover-gold-border"
        style={{
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Image — BIGGER zoom */}
        <div className="absolute inset-0">
          <Image
            src={collection.image}
            alt={`${collection.name} Granite Collection`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.15]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Gradient overlay — STRONGER */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

        {/* Shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-end justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-2"
              >
                {collection.count} Varieties
              </motion.span>
              <h3 className="text-foreground font-[family-name:var(--font-playfair)] text-3xl font-bold">
                {collection.name}
              </h3>
              <p className="text-muted text-sm mt-2 opacity-0 translate-y-4 transition-all duration-600 group-hover:opacity-100 group-hover:translate-y-0 max-w-[220px]">
                {collection.description}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center transition-all duration-600 group-hover:bg-luxury-gold group-hover:border-luxury-gold group-hover:scale-110 shrink-0">
              <ArrowUpRight className="w-5 h-5 text-foreground transition-all duration-600 group-hover:text-granite-black group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCollections() {
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
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-granite-black" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-granite-black" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-granite-black" />
        </svg>
      </div>

      <motion.div style={{ y: decorY }} className="absolute top-48 -left-20 w-56 h-56 border-2 border-luxury-gold/[0.05] rounded-3xl rotate-45 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <SectionHeading
          label="Our Collections"
          title="Explore Premium Granite"
          description="Discover our curated collections of India's finest granite, handpicked from the best quarries across the subcontinent."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.name} collection={collection} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-luxury-gold/25 text-luxury-gold font-bold text-lg rounded-2xl transition-all duration-600 hover:bg-luxury-gold/10 hover:border-luxury-gold/50 hover:shadow-[0_0_40px_rgba(200,155,60,0.15)]"
          >
            View All Granites
            <ArrowUpRight className="w-5 h-5 transition-transform duration-400 group-hover:rotate-45 group-hover:scale-110" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
