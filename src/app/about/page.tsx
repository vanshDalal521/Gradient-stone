import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sundaram Granites — India's premier granite manufacturer with 18+ years of excellence, 7+ manufacturing units across 5 locations, and exports to 40+ countries.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
