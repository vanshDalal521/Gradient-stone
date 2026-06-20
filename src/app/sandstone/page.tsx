import type { Metadata } from "next";
import { StoneCategoryClient } from "@/components/StoneCategoryClient";

export const metadata: Metadata = {
  title: "Sandstone Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium sandstone collection — natural sandstone slabs for flooring, cladding, paving, and outdoor spaces.",
};

export default function SandstonePage() {
  return (
    <StoneCategoryClient
      title="Sandstone"
      subtitle="Natural Warmth"
      description="Sandstone brings the warmth of nature into every space. With its earthy tones and textured finish, it's perfect for flooring, wall cladding, paving, and outdoor landscapes."
      image="/images/granites/Tan brown .png"
    />
  );
}
