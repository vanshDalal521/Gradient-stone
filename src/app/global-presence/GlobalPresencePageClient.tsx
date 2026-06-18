"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Globe2, MapPin, Package, Users } from "lucide-react";

// Dot-matrix world map
const worldMap = [
  "000000000001100000000000000001100000",
  "000011000011110000000000000111110000",
  "000111100111111000110000011111111000",
  "001111111111111111111000111111111100",
  "001111111111111111111101111111111110",
  "011111111111111111111111111111111110",
  "011111111111111111111111111111111110",
  "001111111111111111111111111111111100",
  "000111111111111111111111111111111000",
  "000011111111111111111111111111110000",
  "000001111111111111111111111111100000",
  "000000111111111111111111111111000000",
  "000000011111111111111111111110000000",
  "000000001111111111111111111100000000",
  "000000000111111111111111111000000000",
  "000000000011111111111111110000000000",
  "000000000001111111111111100000000000",
  "000000000000111111111111000000000000",
];

const COLS = 36;
const ROWS = 18;
const DOT = 12;
const GAP = 3;

const regions = [
  { name: "North America", countries: ["USA", "Canada", "Mexico"], col: 8, row: 4, delay: 0.4, projects: "150+", keyMarkets: "New York, Toronto, Mexico City" },
  { name: "Europe", countries: ["UK", "Germany", "Italy", "Spain", "France"], col: 18, row: 3, delay: 0.5, projects: "200+", keyMarkets: "London, Milan, Berlin, Paris" },
  { name: "Middle East", countries: ["UAE", "Saudi Arabia", "Oman", "Qatar"], col: 22, row: 6, delay: 0.6, projects: "300+", keyMarkets: "Dubai, Riyadh, Doha" },
  { name: "East Asia", countries: ["China", "Japan", "South Korea"], col: 28, row: 4, delay: 0.7, projects: "120+", keyMarkets: "Shanghai, Tokyo, Seoul" },
  { name: "Southeast Asia", countries: ["Singapore", "Thailand", "Vietnam"], col: 27, row: 8, delay: 0.8, projects: "80+", keyMarkets: "Singapore, Bangkok, Ho Chi Minh" },
  { name: "Africa", countries: ["South Africa", "Kenya", "Nigeria"], col: 18, row: 9, delay: 0.9, projects: "60+", keyMarkets: "Johannesburg, Nairobi, Lagos" },
];

const INDIA = { col: 24, row: 6 };

const stats = [
  { icon: Globe2, number: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, number: 1000, suffix: "+", label: "Projects Delivered" },
  { icon: MapPin, number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { icon: Users, number: 98, suffix: "%", label: "Client Retention Rate" },
];

const toXY = (col: number, row: number) => ({
  x: col * (DOT + GAP) + DOT / 2,
  y: row * (DOT + GAP) + DOT / 2,
});

function RegionDot({ region }: { region: typeof regions[0] }) {
  const [hovered, setHovered] = useState(false);
  const { x, y } = toXY(region.col, region.row);

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      <circle
        cx={x}
        cy={y}
        r={hovered ? 8 : 6}
        fill="none"
        stroke="#B8860B"
        strokeWidth="1.5"
        opacity={hovered ? 0.5 : 0.25}
        className="transition-all duration-300"
      />
      <circle
        cx={x}
        cy={y}
        r={hovered ? 4 : 3}
        fill="#B8860B"
        className="transition-all duration-300"
      />
      {hovered && (
        <g>
          <rect
            x={x - 60}
            y={y - 35}
            width="120"
            height="28"
            rx="6"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="1"
            filter="url(#tooltip-shadow-page)"
          />
          <text x={x} y={y - 22} textAnchor="middle" fill="#1A1A1A" fontSize="9" fontWeight="bold" fontFamily="Inter, sans-serif">
            {region.name}
          </text>
          <text x={x} y={y - 12} textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="Inter, sans-serif">
            {region.countries.join(", ")}
          </text>
        </g>
      )}
    </g>
  );
}

export function GlobalPresencePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const svgWidth = COLS * (DOT + GAP);
  const svgHeight = ROWS * (DOT + GAP);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#F9FAFB]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-10 -bottom-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB] via-[#F9FAFB]/80 to-[#F9FAFB]" />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#B8860B] font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            Global Presence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-5"
          >
            Exporting Indian
            <br />
            <span className="text-gradient-gold">Excellence Worldwide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-[#6B7280] text-lg max-w-xl mx-auto"
          >
            From Krishnagiri to the world — our granite adorns projects across five continents.
          </motion.p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading label="Our Reach" title="Where We Operate" description="A global network spanning 50+ countries with dedicated export teams." />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl border border-[#E5E7EB] p-6 lg:p-10 mb-14 overflow-hidden shadow-sm"
          >
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto max-h-[450px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="tooltip-shadow-page" x="-10%" y="-10%" width="120%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
                </filter>
              </defs>

              {/* World map dots */}
              {worldMap.map((row, r) =>
                row.split("").map((cell, c) => {
                  if (cell === "0") return null;
                  const { x, y } = toXY(c, r);
                  const isIndia = c === INDIA.col && r === INDIA.row;
                  return (
                    <circle
                      key={`${r}-${c}`}
                      cx={x}
                      cy={y}
                      r={DOT / 2}
                      fill={isIndia ? "#B8860B" : "#D1D5DB"}
                      opacity={isIndia ? 1 : 0.6}
                    />
                  );
                })
              )}

              {/* Connection lines */}
              {regions.map((region, i) => {
                const from = toXY(INDIA.col, INDIA.row);
                const to = toXY(region.col, region.row);
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#B8860B"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    opacity={0.2}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: "easeInOut" }}
                  />
                );
              })}

              {/* India marker */}
              {(() => {
                const { x, y } = toXY(INDIA.col, INDIA.row);
                return (
                  <>
                    <circle cx={x} cy={y} r={8} fill="none" stroke="#B8860B" strokeWidth="1.5" opacity={0.3} />
                    <circle cx={x} cy={y} r={5} fill="#B8860B" />
                    <text x={x} y={y + 20} textAnchor="middle" fill="#B8860B" fontSize="9" fontWeight="bold" fontFamily="Cinzel, serif" letterSpacing="2">
                      INDIA
                    </text>
                  </>
                );
              })()}

              {/* Region dots */}
              {regions.map((region) => (
                <RegionDot key={region.name} region={region} />
              ))}
            </svg>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center bg-white border border-[#E5E7EB] rounded-xl p-6 hover-lift"
              >
                <stat.icon className="w-7 h-7 text-[#B8860B] mx-auto mb-2.5" />
                <div className="text-3xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)]">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="text-[#6B7280] text-sm mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Region Details */}
          <SectionHeading label="Regions" title="Regional Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover-lift"
              >
                <h3 className="text-[#1A1A1A] font-bold text-lg mb-2">{region.name}</h3>
                <div className="text-[#B8860B] text-sm font-medium mb-3">{region.projects} Projects</div>
                <div className="flex flex-col gap-1.5 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-[#B8860B]/50 shrink-0" />{region.countries.join(", ")}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#B8860B]/50 shrink-0" />{region.keyMarkets}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
