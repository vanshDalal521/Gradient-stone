"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

// Dot-matrix world map — each row is a string where "1" = land, "0" = water
// Equirectangular projection, 36 cols x 18 rows
const worldMap = [
  "000000000001100000000000000001100000",  // row 0  (far north)
  "000011000011110000000000000111110000",  // row 1
  "000111100111111000110000011111111000",  // row 2
  "001111111111111111111000111111111100",  // row 3
  "001111111111111111111101111111111110",  // row 4
  "011111111111111111111111111111111110",  // row 5
  "011111111111111111111111111111111110",  // row 6
  "001111111111111111111111111111111100",  // row 7
  "000111111111111111111111111111111000",  // row 8
  "000011111111111111111111111111110000",  // row 9
  "000001111111111111111111111111100000",  // row 10
  "000000111111111111111111111111000000",  // row 11
  "000000011111111111111111111110000000",  // row 12
  "000000001111111111111111111100000000",  // row 13
  "000000000111111111111111111000000000",  // row 14
  "000000000011111111111111110000000000",  // row 15
  "000000000001111111111111100000000000",  // row 16
  "000000000000111111111111000000000000",  // row 17 (far south)
];

const COLS = 36;
const ROWS = 18;

// Approximate dot positions for regions (col, row) in the dot grid
const regionDots: Record<string, { col: number; row: number; name: string; countries: string }> = {
  "North America": { col: 8, row: 4, name: "North America", countries: "USA, Canada, Mexico" },
  "Europe": { col: 18, row: 3, name: "Europe", countries: "UK, Germany, Italy, Spain, France" },
  "Middle East": { col: 22, row: 6, name: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar" },
  "East Asia": { col: 28, row: 4, name: "East Asia", countries: "China, Japan, South Korea" },
  "Southeast Asia": { col: 27, row: 8, name: "Southeast Asia", countries: "Singapore, Thailand, Vietnam" },
  "Africa": { col: 18, row: 9, name: "Africa", countries: "South Africa, Kenya, Nigeria" },
};

const INDIA = { col: 24, row: 6 };

const stats = [
  { number: 50, suffix: "+", label: "Countries" },
  { number: 1000, suffix: "+", label: "Projects Delivered" },
  { number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { number: 98, suffix: "%", label: "Client Retention" },
];

export function GlobalPresencePreview() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const dotSize = 12;
  const gap = 3;
  const svgWidth = COLS * (dotSize + gap);
  const svgHeight = ROWS * (dotSize + gap);

  const regions = Object.values(regionDots);

  return (
    <section className="section-padding relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Exporting Indian Excellence"
          description="Our premium granite adorns prestigious projects across 50+ countries, spanning five continents."
        />

        <div className="relative bg-white rounded-3xl border border-[#E5E7EB] p-6 lg:p-10 mb-14 overflow-hidden shadow-sm">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto max-h-[400px]"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* World map dots */}
            {worldMap.map((row, r) =>
              row.split("").map((cell, c) => {
                if (cell === "0") return null;
                const x = c * (dotSize + gap) + dotSize / 2;
                const y = r * (dotSize + gap) + dotSize / 2;
                const isIndia = c === INDIA.col && r === INDIA.row;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={x}
                    cy={y}
                    r={dotSize / 2}
                    fill={isIndia ? "#B8860B" : "#D1D5DB"}
                    opacity={isIndia ? 1 : 0.6}
                  />
                );
              })
            )}

            {/* Connection lines from India to regions */}
            {regions.map((region) => {
              const x1 = INDIA.col * (dotSize + gap) + dotSize / 2;
              const y1 = INDIA.row * (dotSize + gap) + dotSize / 2;
              const x2 = region.col * (dotSize + gap) + dotSize / 2;
              const y2 = region.row * (dotSize + gap) + dotSize / 2;
              return (
                <motion.line
                  key={`line-${region.name}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#B8860B"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity={hoveredRegion === region.name ? 0.6 : 0.2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: hoveredRegion === region.name ? 0.6 : 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              );
            })}

            {/* India marker */}
            <circle
              cx={INDIA.col * (dotSize + gap) + dotSize / 2}
              cy={INDIA.row * (dotSize + gap) + dotSize / 2}
              r={8}
              fill="none"
              stroke="#B8860B"
              strokeWidth="1.5"
              opacity={0.3}
            />
            <circle
              cx={INDIA.col * (dotSize + gap) + dotSize / 2}
              cy={INDIA.row * (dotSize + gap) + dotSize / 2}
              r={5}
              fill="#B8860B"
            />
            <text
              x={INDIA.col * (dotSize + gap) + dotSize / 2}
              y={INDIA.row * (dotSize + gap) + dotSize / 2 + 20}
              textAnchor="middle"
              fill="#B8860B"
              fontSize="9"
              fontWeight="bold"
              fontFamily="Cinzel, serif"
              letterSpacing="2"
            >
              INDIA
            </text>

            {/* Region dots */}
            {regions.map((region) => {
              const x = region.col * (dotSize + gap) + dotSize / 2;
              const y = region.row * (dotSize + gap) + dotSize / 2;
              const isActive = hoveredRegion === region.name;
              return (
                <g
                  key={region.name}
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 8 : 6}
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth="1.5"
                    opacity={isActive ? 0.5 : 0.25}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 4 : 3}
                    fill="#B8860B"
                    className="transition-all duration-300"
                  />
                  {isActive && (
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
                        filter="url(#tooltip-shadow)"
                      />
                      <text
                        x={x}
                        y={y - 22}
                        textAnchor="middle"
                        fill="#1A1A1A"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="Inter, sans-serif"
                      >
                        {region.name}
                      </text>
                      <text
                        x={x}
                        y={y - 12}
                        textAnchor="middle"
                        fill="#6B7280"
                        fontSize="7"
                        fontFamily="Inter, sans-serif"
                      >
                        {region.countries}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            <defs>
              <filter id="tooltip-shadow" x="-10%" y="-10%" width="120%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="text-center bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair)]">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="text-[#6B7280] text-sm mt-3 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
