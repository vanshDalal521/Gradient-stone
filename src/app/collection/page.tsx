import { Suspense } from "react";
import type { Metadata } from "next";
import { CollectionPageClient } from "./CollectionPageClient";

export const metadata: Metadata = {
  title: "Stone Collection | Sundaram Granites",
  description:
    "Explore Sundaram Granites' curated collection of 50+ premium Indian granite, marble, sandstone, and cobble varieties.",
};

export default function CollectionPage() {
  return (
    <Suspense>
      <CollectionPageClient />
    </Suspense>
  );
}
