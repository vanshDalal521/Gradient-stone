import type { Metadata } from "next";
import { ResourcesPageClient } from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download granite catalogues, view technical specifications, care guides, and frequently asked questions about Sundaram Granites.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
