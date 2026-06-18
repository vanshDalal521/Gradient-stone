import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sundaram Granites — India's premier granite manufacturer with 18+ years of excellence, 5 manufacturing units, and exports to 50+ countries.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
