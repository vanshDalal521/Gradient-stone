import type { Metadata } from "next";
import { ManufacturingPageClient } from "./ManufacturingPageClient";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Discover Sundaram Granites' five-stage quality process, state-of-the-art CNC machinery, and ISO-certified manufacturing facilities across India.",
};

export default function ManufacturingPage() {
  return <ManufacturingPageClient />;
}
