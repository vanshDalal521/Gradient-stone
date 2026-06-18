"use client";

import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Sphere,
} from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export interface MapRegion {
  name: string;
  coordinates: [number, number];
  label?: string;
  sublabel?: string;
}

interface WorldMapProps {
  regions: MapRegion[];
  activeRegion?: string | null;
  onRegionHover?: (name: string | null) => void;
  showLabels?: boolean;
  showTooltips?: boolean;
  className?: string;
  IndiaLabel?: string;
  height?: string;
}

const INDIA_COORDS: [number, number] = [78, 22];

export function WorldMap({
  regions,
  activeRegion,
  onRegionHover,
  showLabels = false,
  showTooltips = true,
  className = "",
  IndiaLabel = "INDIA",
  height = "100%",
}: WorldMapProps) {
  const [tooltipRegion, setTooltipRegion] = useState<string | null>(null);

  const handleRegionHover = (name: string | null) => {
    setTooltipRegion(name);
    onRegionHover?.(name);
  };

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 155,
          center: [15, 10],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Ocean */}
        <Sphere
          stroke="#D1D5DB"
          strokeWidth={0.5}
          fill="#F0F4F8"
        />

        {/* Countries */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E8ECF0",
                    stroke: "#CBD5E1",
                    strokeWidth: 0.4,
                    outline: "none",
                    cursor: "pointer",
                    transition: "fill 0.2s ease, stroke 0.2s ease",
                  },
                  hover: {
                    fill: "#B8860B",
                    stroke: "#B8860B",
                    strokeWidth: 0.6,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#9A7209",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated connection lines from India */}
        {regions.map((region) => {
          const isActive = activeRegion === region.name;
          return (
            <Line
              key={`line-${region.name}`}
              from={INDIA_COORDS}
              to={region.coordinates}
              stroke="#B8860B"
              strokeWidth={isActive ? 1.8 : 1}
              strokeDasharray={isActive ? "8,4" : "6,5"}
              strokeLinecap="round"
              style={{
                opacity: isActive ? 0.7 : 0.2,
                transition: "opacity 0.3s ease, stroke-width 0.3s ease",
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(184,134,11,0.35))"
                  : "none",
              }}
            />
          );
        })}

        {/* Region markers */}
        {regions.map((region) => {
          const isActive = activeRegion === region.name;
          return (
            <Marker
              key={region.name}
              coordinates={region.coordinates}
              onMouseEnter={() => handleRegionHover(region.name)}
              onMouseLeave={() => handleRegionHover(null)}
            >
              {/* Outer glow ring */}
              <circle
                r={isActive ? 18 : 14}
                fill="#B8860B"
                opacity={isActive ? 0.08 : 0.04}
                style={{ transition: "all 0.35s ease" }}
              />
              {/* Middle ring */}
              <circle
                r={isActive ? 12 : 9}
                fill="none"
                stroke="#B8860B"
                strokeWidth={isActive ? 1.8 : 1}
                opacity={isActive ? 0.4 : 0.15}
                style={{ transition: "all 0.35s ease" }}
              />
              {/* Core dot */}
              <circle
                r={isActive ? 5.5 : 3.5}
                fill="#B8860B"
                style={{ transition: "all 0.35s ease", cursor: "pointer" }}
              />
              {/* Inner highlight */}
              <circle
                r={isActive ? 2 : 1.2}
                fill="white"
                opacity={0.7}
                style={{ transition: "all 0.35s ease" }}
              />
            </Marker>
          );
        })}

        {/* India — prominent hub marker */}
        <Marker coordinates={INDIA_COORDS}>
          <circle r={24} fill="#B8860B" opacity={0.04} />
          <circle r={17} fill="#B8860B" opacity={0.07} />
          <circle r={10} fill="#B8860B" opacity={1} />
          <circle r={4.5} fill="white" opacity={0.8} />
        </Marker>

        {/* India label */}
        <Marker coordinates={INDIA_COORDS}>
          <text
            y={-24}
            textAnchor="middle"
            fill="#B8860B"
            fontSize={9}
            fontWeight="700"
            fontFamily="'Cinzel', serif"
            letterSpacing="2.5"
          >
            {IndiaLabel}
          </text>
        </Marker>

        {/* Region labels (optional) */}
        {showLabels &&
          regions.map((region) => (
            <Marker key={`label-${region.name}`} coordinates={region.coordinates}>
              <text
                y={-16}
                textAnchor="middle"
                fill="#374151"
                fontSize={7}
                fontWeight="600"
                fontFamily="'Inter', sans-serif"
              >
                {region.label || region.name}
              </text>
            </Marker>
          ))}
      </ComposableMap>

      {/* HTML Tooltip overlay */}
      {showTooltips &&
        tooltipRegion &&
        (() => {
          const region = regions.find((r) => r.name === tooltipRegion);
          if (!region) return null;

          // Convert lat/lng to percentage positions for the tooltip
          const leftPct = ((region.coordinates[0] + 180) / 360) * 100;
          const topPct = ((90 - region.coordinates[1]) / 180) * 100;

          return (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: "translate(-50%, -130%)",
              }}
            >
              <div className="bg-white rounded-xl border border-gray-200 px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] min-w-[160px]">
                <div className="text-gray-900 font-bold text-sm mb-0.5">
                  {region.name}
                </div>
                {region.sublabel && (
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {region.sublabel}
                  </div>
                )}
              </div>
              {/* Tooltip arrow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"
              />
            </div>
          );
        })()}
    </div>
  );
}
