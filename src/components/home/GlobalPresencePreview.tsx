"use client";

import dynamic from "next/dynamic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MapRegion } from "@/components/ui/WorldMap";

const WorldMap = dynamic(
  () => import("@/components/ui/WorldMap.client").then((mod) => mod.WorldMap),
  { ssr: false }
);

const regions: MapRegion[] = [
  { name: "North America", coordinates: [-100, 45], sublabel: "150+ Projects" },
  { name: "Europe", coordinates: [10, 50], sublabel: "200+ Projects" },
  { name: "Middle East", coordinates: [48, 28], sublabel: "300+ Projects" },
  { name: "East Asia", coordinates: [115, 35], sublabel: "120+ Projects" },
  { name: "Southeast Asia", coordinates: [105, 8], sublabel: "80+ Projects" },
  { name: "Africa", coordinates: [22, -2], sublabel: "60+ Projects" },
];

export function GlobalPresencePreview() {
  return (
    <section className="relative py-28 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Worldwide Presence"
          description="Trusted by clients across 50+ countries on every continent."
          align="center"
        />

        <div className="mt-16">
          <WorldMap regions={regions} />
        </div>
      </div>
    </section>
  );
}
