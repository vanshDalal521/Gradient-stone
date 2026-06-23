import type { Metadata } from "next";
import { MarblePageClient } from "./MarblePageClient";

export const metadata: Metadata = {
  title: "Marble Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' premium marble collection — elegant natural marble slabs for countertops, flooring, and luxury interiors.",
};

export default function MarblePage() {
  return <MarblePageClient />;
}
