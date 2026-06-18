"use client";

import { useRef, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line, Sphere, Graticule } from "react-simple-maps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Globe2, MapPin, Package, Users } from "lucide-react";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const regions = [
  { name: "North America", countries: ["USA", "Canada", "Mexico"], coordinates: [-100, 45] as [number, number], delay: 0.4, projects: "150+", keyMarkets: "New York, Toronto, Mexico City" },
  { name: "Europe", countries: ["UK", "Germany", "Italy", "Spain", "France"], coordinates: [10, 50] as [number, number], delay: 0.5, projects: "200+", keyMarkets: "London, Milan, Berlin, Paris" },
  { name: "Middle East", countries: ["UAE", "Saudi Arabia", "Oman", "Qatar"], coordinates: [45, 25] as [number, number], delay: 0.6, projects: "300+", keyMarkets: "Dubai, Riyadh, Doha" },
  { name: "East Asia", countries: ["China", "Japan", "South Korea"], coordinates: [115, 35] as [number, number], delay: 0.7, projects: "120+", keyMarkets: "Shanghai, Tokyo, Seoul" },
  { name: "Southeast Asia", countries: ["Singapore", "Thailand", "Vietnam"], coordinates: [105, 10] as [number, number], delay: 0.8, projects: "80+", keyMarkets: "Singapore, Bangkok, Ho Chi Minh" },
  { name: "Africa", countries: ["South Africa", "Kenya", "Nigeria"], coordinates: [20, 0] as [number, number], delay: 0.9, projects: "60+", keyMarkets: "Johannesburg, Nairobi, Lagos" },
];

const INDIA_COORDS: [number, number] = [78, 22];

const stats = [
  { icon: Globe2, number: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, number: 1000, suffix: "+", label: "Projects Delivered" },
  { icon: MapPin, number: 500000, suffix: "+", label: "Sq.ft Exported Monthly" },
  { icon: Users, number: 98, suffix: "%", label: "Client Retention Rate" },
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

export function GlobalPresencePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

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
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 140,
                center: [45, 20],
              }}
              style={{ width: "100%", height: "auto" }}
            >
              <Sphere stroke="#E5E7EB" strokeWidth={0.5} fill="none" />
              <Graticule stroke="#E5E7EB" strokeWidth={0.3} fill="none" />

              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => <GeographyItem key={geo.rsmKey} geo={geo} />)
                }
              </Geographies>

              {/* Connection lines from India */}
              {regions.map((region, i) => (
                <Line
                  key={`line-${i}`}
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

              {/* India marker */}
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
                      {region.countries.join(", ")}
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
