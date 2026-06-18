"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line, Sphere, Graticule } from "react-simple-maps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", coordinates: [-100, 45] as [number, number], projects: "150+" },
  { name: "Europe", countries: "UK, Germany, Italy, Spain, France", coordinates: [10, 50] as [number, number], projects: "200+" },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar", coordinates: [45, 25] as [number, number], projects: "300+" },
  { name: "East Asia", countries: "China, Japan, South Korea", coordinates: [115, 35] as [number, number], projects: "120+" },
  { name: "Southeast Asia", countries: "Singapore, Thailand, Vietnam", coordinates: [105, 10] as [number, number], projects: "80+" },
  { name: "Africa", countries: "South Africa, Kenya, Nigeria", coordinates: [20, 0] as [number, number], projects: "60+" },
];

const INDIA_COORDS: [number, number] = [78, 22];

const stats = [
  { number: 50, suffix: "+", label: "Countries" },
  { number: 1000, suffix: "+", label: "Projects Delivered" },
  { number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { number: 98, suffix: "%", label: "Client Retention" },
];

const GeographyItem = memo(({ geo }: { geo: any }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Geography
      geography={geo}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        default: {
          fill: hovered ? "#D1D5DB" : "#E5E7EB",
          stroke: "#D1D5DB",
          strokeWidth: 0.5,
          outline: "none",
          transition: "all 0.2s ease",
        },
        hover: {
          fill: "#D1D5DB",
          stroke: "#D1D5DB",
          strokeWidth: 0.5,
          outline: "none",
        },
        pressed: {
          fill: "#D1D5DB",
          outline: "none",
        },
      }}
    />
  );
});
GeographyItem.displayName = "GeographyItem";

export function GlobalPresencePreview() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Exporting Indian Excellence"
          description="Our premium granite adorns prestigious projects across 50+ countries, spanning five continents."
        />

        <div className="relative bg-white rounded-3xl border border-[#E5E7EB] p-6 lg:p-10 mb-14 overflow-hidden shadow-sm">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [45, 20],
            }}
            style={{ width: "100%", height: "auto" }}
          >
            {/* Sphere and Graticule for a polished look */}
            <Sphere stroke="#E5E7EB" strokeWidth={0.5} fill="none" />
            <Graticule stroke="#E5E7EB" strokeWidth={0.3} fill="none" />

            {/* Countries */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => <GeographyItem key={geo.rsmKey} geo={geo} />)
              }
            </Geographies>

            {/* Connection lines from India */}
            {regions.map((region) => (
              <Line
                key={`line-${region.name}`}
                from={INDIA_COORDS}
                to={region.coordinates}
                stroke="#B8860B"
                strokeWidth={1}
                strokeDasharray="4,3"
                strokeLinecap="round"
                style={{
                  opacity: activeRegion === region.name ? 0.6 : 0.25,
                  transition: "opacity 0.3s ease",
                }}
              />
            ))}

            {/* Region markers */}
            {regions.map((region) => (
              <Marker
                key={region.name}
                coordinates={region.coordinates}
                onMouseEnter={() => setActiveRegion(region.name)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <circle
                  r={activeRegion === region.name ? 8 : 5}
                  fill="#B8860B"
                  opacity={0.9}
                  style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                />
                <circle
                  r={activeRegion === region.name ? 14 : 10}
                  fill="none"
                  stroke="#B8860B"
                  strokeWidth={1.5}
                  opacity={activeRegion === region.name ? 0.4 : 0.2}
                  style={{ transition: "all 0.3s ease" }}
                />
              </Marker>
            ))}

            {/* India marker — larger, prominent */}
            <Marker coordinates={INDIA_COORDS}>
              <circle r={7} fill="#B8860B" opacity={1} />
              <circle r={12} fill="none" stroke="#B8860B" strokeWidth={2} opacity={0.3} />
              <circle r={18} fill="none" stroke="#B8860B" strokeWidth={1} opacity={0.1} />
            </Marker>

            {/* Region tooltips */}
            {regions.map((region) => {
              if (activeRegion !== region.name) return null;
              const [x, y] = region.coordinates;
              return (
                <g key={`tooltip-${region.name}`}>
                  <rect
                    x={x + 1}
                    y={y - 4}
                    width={120}
                    height={36}
                    rx={6}
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth={1}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))" }}
                  />
                  <text x={x + 6} y={y + 1} fill="#1A1A1A" fontSize={8} fontWeight="bold" fontFamily="Inter, sans-serif">
                    {region.name}
                  </text>
                  <text x={x + 6} y={y + 11} fill="#6B7280" fontSize={6} fontFamily="Inter, sans-serif">
                    {region.countries}
                  </text>
                </g>
              );
            })}

            {/* India label */}
            <Marker coordinates={INDIA_COORDS}>
              <text
                y={-18}
                textAnchor="middle"
                fill="#B8860B"
                fontSize={8}
                fontWeight="bold"
                fontFamily="Cinzel, serif"
                letterSpacing={2}
              >
                INDIA
              </text>
            </Marker>
          </ComposableMap>
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
