import type { Metadata } from "next";
import { StoneCategoryClient } from "@/components/StoneCategoryClient";

export const metadata: Metadata = {
  title: "Marble Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium marble collection — elegant natural marble slabs for countertops, flooring, and luxury interiors.",
};

export default function MarblePage() {
  return (
    <StoneCategoryClient
      title="Marble"
      subtitle="Timeless Elegance"
      description="Marble embodies luxury and sophistication. Its natural veining and luminous surface make it the ultimate choice for premium interiors, grand entrances, and statement surfaces."
      image="/images/granites/Moon white .png"
    />
  );
}
