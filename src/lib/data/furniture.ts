export type FurnitureCategory = "Tables" | "Seating" | "Consoles" | "Benches";

export interface GraniteFurniture {
  id: string;
  name: string;
  slug: string;
  category: FurnitureCategory;
  description: string;
  image: string;
  material: string;
  dimensions: string;
  finishes: string[];
}

export const furniture: GraniteFurniture[] = [
  {
    id: "black-side-table",
    name: "Black Granite Side Table",
    slug: "black-side-table",
    category: "Tables",
    description: "A sleek square side table combining a polished black granite top with a minimalist black metal frame. Perfect for modern living rooms and bedrooms.",
    image: "/images/furniture/black-side-table.png",
    material: "Black Granite & Metal",
    dimensions: "45 × 45 × 50 cm",
    finishes: ["Polished"],
  },
  {
    id: "dark-marble-stool",
    name: "Dark Marble Pedestal Stool",
    slug: "dark-marble-stool",
    category: "Seating",
    description: "A sculptural stool crafted from dark veined marble with four cylindrical legs. Doubles as a statement side table or accent piece.",
    image: "/images/furniture/dark-marble-stool.png",
    material: "Dark Marble",
    dimensions: "40 × 40 × 45 cm",
    finishes: ["Polished"],
  },
  {
    id: "beige-round-coffee-table",
    name: "Beige Travertine Coffee Table",
    slug: "beige-round-coffee-table",
    category: "Tables",
    description: "A stunning round coffee table carved from natural beige travertine with a sculptural tripod base. Brings warmth and organic elegance to any space.",
    image: "/images/furniture/beige-round-coffee-table.png",
    material: "Beige Travertine",
    dimensions: "90 × 90 × 38 cm",
    finishes: ["Polished", "Honed"],
  },
  {
    id: "beige-console-table",
    name: "Beige Stone Console Table",
    slug: "beige-console-table",
    category: "Consoles",
    description: "An elegant console table featuring a smooth beige stone top supported by two bold cylindrical pillars. Ideal for entryways and living rooms.",
    image: "/images/furniture/beige-console-table.png",
    material: "Beige Stone",
    dimensions: "120 × 40 × 80 cm",
    finishes: ["Polished"],
  },
  {
    id: "black-dining-table",
    name: "Black Granite Dining Table",
    slug: "black-dining-table",
    category: "Tables",
    description: "A commanding dining table with a polished black granite surface atop a sculptural wooden X-base. Seats six and anchors any dining room.",
    image: "/images/furniture/black-dining-table.png",
    material: "Black Granite & Walnut Wood",
    dimensions: "180 × 90 × 76 cm",
    finishes: ["Polished"],
  },
  {
    id: "terrazzo-bench",
    name: "Terrazzo Stone Bench",
    slug: "terrazzo-bench",
    category: "Benches",
    description: "A contemporary bench with a speckled terrazzo stone slab resting on warm wooden legs. Perfect for hallways, mudrooms, or foot-of-bed seating.",
    image: "/images/furniture/terrazzo-bench.png",
    material: "Terrazzo Stone & Wood",
    dimensions: "120 × 40 × 45 cm",
    finishes: ["Polished"],
  },
  {
    id: "fluted-console-table",
    name: "Fluted Beige Console Table",
    slug: "fluted-console-table",
    category: "Consoles",
    description: "A luxurious console table with a smooth beige stone top and fluted cylindrical columns. The ribbed detail adds classical charm to modern interiors.",
    image: "/images/furniture/fluted-console-table.png",
    material: "Beige Stone",
    dimensions: "130 × 35 × 80 cm",
    finishes: ["Polished"],
  },
  {
    id: "beige-round-dining-table",
    name: "Beige Stone Round Dining Table",
    slug: "beige-round-dining-table",
    category: "Tables",
    description: "A grand round dining table crafted from beige stone with three massive cylindrical legs. Seats eight and creates a stunning focal point.",
    image: "/images/furniture/beige-round-dining-table.png",
    material: "Beige Stone",
    dimensions: "150 × 150 × 76 cm",
    finishes: ["Polished", "Honed"],
  },
  {
    id: "black-round-coffee-table",
    name: "Black Granite Round Coffee Table",
    slug: "black-round-coffee-table",
    category: "Tables",
    description: "A round coffee table with a polished black granite top and a geometric wooden X-base. Blends natural warmth with modern sophistication.",
    image: "/images/furniture/black-round-coffee-table.png",
    material: "Black Granite & Walnut Wood",
    dimensions: "80 × 80 × 40 cm",
    finishes: ["Polished"],
  },
  {
    id: "stone-armchair",
    name: "Travertine Stone Armchair",
    slug: "stone-armchair",
    category: "Seating",
    description: "A statement armchair featuring a solid beige travertine frame with plush fabric cushions and a warm wooden base. Luxury meets comfort.",
    image: "/images/furniture/stone-armchair.png",
    material: "Beige Travertine & Fabric",
    dimensions: "75 × 80 × 70 cm",
    finishes: ["Polished"],
  },
  {
    id: "terrazzo-console-table",
    name: "Terrazzo Console Table",
    slug: "terrazzo-console-table",
    category: "Consoles",
    description: "A sleek console table with a terrazzo stone top framed by warm wooden legs. Its open design makes entryways feel spacious and refined.",
    image: "/images/furniture/terrazzo-console-table.png",
    material: "Terrazzo Stone & Wood",
    dimensions: "120 × 35 × 80 cm",
    finishes: ["Polished"],
  },
];

export function getFurnitureByCategory(category: FurnitureCategory): GraniteFurniture[] {
  return furniture.filter((f) => f.category === category);
}

export function getFurnitureBySlug(slug: string): GraniteFurniture | undefined {
  return furniture.find((f) => f.slug === slug);
}
