import type { Metadata } from "next";
import { StoneCategoryClient } from "@/components/StoneCategoryClient";

export const metadata: Metadata = {
  title: "Cobbles Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium cobble collection — natural stone cobbles for driveways, pathways, patios, and landscape design.",
};

export default function CobblesPage() {
  return (
    <StoneCategoryClient
      title="Cobbles"
      subtitle="Rugged Beauty"
      description="Cobbles combine rugged natural beauty with enduring strength. Ideal for driveways, pathways, patios, and landscape design, they bring character and charm to any outdoor space."
      image="/images/granites/Kuppam Green.png"
    />
  );
}
