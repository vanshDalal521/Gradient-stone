import type { Metadata } from "next";
import { CollectionPageClient } from "./CollectionPageClient";

export const metadata: Metadata = {
  title: "Granite Collection",
  description:
    "Explore Sundaram Granites' curated collection of 30+ premium Indian granite varieties across White, Black, Brown, Green, Blue, and Pink/Gold collections.",
};

export default function CollectionPage() {
  return <CollectionPageClient />;
}
