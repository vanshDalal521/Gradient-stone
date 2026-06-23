import type { Metadata } from "next";
import { CobblesPageClient } from "./CobblesPageClient";

export const metadata: Metadata = {
  title: "Cobbles Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium cobble collection — natural stone cobbles for driveways, pathways, patios, and landscape design.",
};

export default function CobblesPage() {
  return <CobblesPageClient />;
}
