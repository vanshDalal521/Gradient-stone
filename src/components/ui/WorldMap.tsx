"use client";

import { useState, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export interface MapRegion {
  name: string;
  coordinates: [number, number];
  sublabel?: string;
}

interface WorldMapProps {
  regions: MapRegion[];
  activeRegion?: string | null;
  onRegionHover?: (name: string | null) => void;
  showTooltips?: boolean;
  className?: string;
  IndiaLabel?: string;
  height?: string;
}

const INDIA: [number, number] = [78.9629, 20.5937];

function PulseRing({ active }: { active: boolean }) {
  return (
    <>
      <circle
        r={active ? 22 : 0}
        fill="none"
        stroke="#B8860B"
        strokeWidth={1}
        opacity={0}
        style={{
          transition: "r 0.5s ease, opacity 0.5s ease",
          ...(active ? { opacity: 0.15 } : {}),
        }}
      >
        {active && (
          <animate attributeName="r" from="8" to="28" dur="2s" repeatCount="indefinite" />
        )}
        {active && (
          <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
    </>
  );
}

export function WorldMap({
  regions,
  activeRegion,
  onRegionHover,
  showTooltips = true,
  className = "",
  IndiaLabel = "INDIA",
  height = "100%",
}: WorldMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleEnter = useCallback(
    (name: string) => {
      setHoveredRegion(name);
      onRegionHover?.(name);
    },
    [onRegionHover]
  );

  const handleLeave = useCallback(() => {
    setHoveredRegion(null);
    onRegionHover?.(null);
  }, [onRegionHover]);

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 167,
          center: [0, 20],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {({ projection }) => {
          const indiaPos = projection(INDIA) as [number, number] | null;
          if (!indiaPos) return null;

          return (
            <>
              <defs>
                <radialGradient id="ocean-gradient" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#EFF6FF" />
                </radialGradient>
                <radialGradient id="india-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#B8860B" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
                </radialGradient>
                <filter id="marker-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#B8860B" floodOpacity="0.3" />
                </filter>
                <filter id="tooltip-shadow" x="-20%" y="-20%" width="140%" height="160%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" />
                </filter>
              </defs>

              <Sphere stroke="none" fill="url(#ocean-gradient)" />
              <Graticule stroke="#E2E8F0" strokeWidth={0.4} fill="none" />

              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#D5DDE5",
                          stroke: "#FFFFFF",
                          strokeWidth: 0.6,
                          outline: "none",
                          cursor: "default",
                          transition: "fill 0.25s ease",
                        },
                        hover: {
                          fill: "#B8860B",
                          stroke: "#FFFFFF",
                          strokeWidth: 0.6,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: "#9A7209",
                          stroke: "#FFFFFF",
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Connection lines — using projected pixel coordinates */}
              {regions.map((region) => {
                const regionPos = projection(region.coordinates) as [number, number] | null;
                if (!regionPos) return null;
                const isActive = activeRegion === region.name;

                return (
                  <g key={`line-${region.name}`}>
                    <line
                      x1={indiaPos[0]}
                      y1={indiaPos[1]}
                      x2={regionPos[0]}
                      y2={regionPos[1]}
                      stroke="#B8860B"
                      strokeWidth={isActive ? 2.5 : 1.5}
                      strokeDasharray={isActive ? "8,4" : "4,6"}
                      strokeLinecap="round"
                      opacity={isActive ? 0.12 : 0.06}
                      style={{ transition: "all 0.4s ease" }}
                    />
                    <line
                      x1={indiaPos[0]}
                      y1={indiaPos[1]}
                      x2={regionPos[0]}
                      y2={regionPos[1]}
                      stroke="#B8860B"
                      strokeWidth={isActive ? 1.5 : 0.8}
                      strokeDasharray={isActive ? "8,4" : "4,6"}
                      strokeLinecap="round"
                      opacity={isActive ? 0.55 : 0.18}
                      style={{ transition: "all 0.4s ease" }}
                    />
                  </g>
                );
              })}

              {/* Region markers */}
              {regions.map((region) => {
                const isActive = activeRegion === region.name;
                return (
                  <Marker
                    key={region.name}
                    coordinates={region.coordinates}
                    onMouseEnter={() => handleEnter(region.name)}
                    onMouseLeave={handleLeave}
                  >
                    <PulseRing active={!!isActive} />
                    <circle
                      r={isActive ? 16 : 10}
                      fill="url(#india-glow)"
                      opacity={isActive ? 1 : 0.4}
                      style={{ transition: "all 0.4s ease" }}
                    />
                    <circle
                      r={isActive ? 9 : 6}
                      fill="none"
                      stroke="#B8860B"
                      strokeWidth={isActive ? 2 : 1.2}
                      opacity={isActive ? 0.6 : 0.25}
                      style={{ transition: "all 0.4s ease" }}
                    />
                    <circle
                      r={isActive ? 4.5 : 3}
                      fill="#B8860B"
                      filter={isActive ? "url(#marker-shadow)" : "none"}
                      style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                    />
                    <circle
                      r={isActive ? 1.5 : 1}
                      fill="#FFFFFF"
                      opacity={0.85}
                      style={{ transition: "all 0.3s ease" }}
                    />
                  </Marker>
                );
              })}

              {/* India hub */}
              <Marker coordinates={INDIA}>
                <circle r={30} fill="url(#india-glow)" />
                <circle r={20} fill="url(#india-glow)" opacity={0.6} />
                <circle
                  r={12}
                  fill="none"
                  stroke="#B8860B"
                  strokeWidth={2}
                  opacity={0.25}
                />
                <circle r={7} fill="#B8860B" />
                <circle r={2.5} fill="#FFFFFF" opacity={0.85} />
              </Marker>

              <Marker coordinates={INDIA}>
                <text
                  y={-18}
                  textAnchor="middle"
                  fill="#B8860B"
                  fontSize={8}
                  fontWeight="700"
                  fontFamily="'Cinzel', serif"
                  letterSpacing="3"
                  style={{ textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}
                >
                  {IndiaLabel}
                </text>
              </Marker>

              {/* Tooltips */}
              {showTooltips &&
                regions.map((region) => {
                  const isActive = activeRegion === region.name || hoveredRegion === region.name;
                  if (!isActive) return null;
                  return (
                    <Marker key={`tip-${region.name}`} coordinates={region.coordinates}>
                      <g transform="translate(14, -32)">
                        <rect
                          x={0}
                          y={0}
                          width={140}
                          height={40}
                          rx={8}
                          fill="#FFFFFF"
                          stroke="#E5E7EB"
                          strokeWidth={1}
                          filter="url(#tooltip-shadow)"
                        />
                        <rect
                          x={0}
                          y={0}
                          width={3}
                          height={40}
                          rx={1.5}
                          fill="#B8860B"
                        />
                        <text
                          x={14}
                          y={17}
                          fill="#111827"
                          fontSize={9}
                          fontWeight="700"
                          fontFamily="'Inter', sans-serif"
                        >
                          {region.name}
                        </text>
                        <text
                          x={14}
                          y={30}
                          fill="#6B7280"
                          fontSize={7}
                          fontFamily="'Inter', sans-serif"
                        >
                          {region.sublabel || ""}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
            </>
          );
        }}
      </ComposableMap>
    </div>
  );
}
