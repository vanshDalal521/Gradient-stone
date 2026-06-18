import type { Metadata } from "next";
import { GlobalPresencePageClient } from "./GlobalPresencePageClient";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Sundaram Granites exports premium Indian granite to 50+ countries across North America, Europe, Middle East, Asia, and Africa.",
};

export default function GlobalPresencePage() {
  return <GlobalPresencePageClient />;
}
