"use client";

import dynamic from "next/dynamic";

const WorldMapInner = dynamic(
  () => import("./WorldMap").then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full bg-[#F0F4F8] rounded-2xl animate-pulse"
        style={{ height: "100%" }}
      />
    ),
  }
);

export { WorldMapInner as WorldMap };
export type { MapRegion } from "./WorldMap";
