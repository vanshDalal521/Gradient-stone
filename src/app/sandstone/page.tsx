import type { Metadata } from "next";
import { SandstonePageClient } from "./SandstonePageClient";

export const metadata: Metadata = {
  title: "Sandstone Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium sandstone collection — natural sandstone slabs for flooring, cladding, paving, and outdoor spaces.",
};

export default function SandstonePage() {
  return <SandstonePageClient />;
}
