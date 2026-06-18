import type { Metadata } from "next";
import { CollectionDetailClient } from "./CollectionDetailClient";
import { getGraniteBySlug, granites } from "@/lib/data/granites";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return granites.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const granite = getGraniteBySlug(slug);
  if (!granite) return { title: "Not Found" };
  return {
    title: granite.name,
    description: granite.description,
  };
}

export default async function GraniteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const granite = getGraniteBySlug(slug);
  if (!granite) notFound();
  return <CollectionDetailClient granite={granite} />;
}
