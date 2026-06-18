import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sundaram Granites — Premium Indian Granite Manufacturer & Exporter",
    template: "%s | Sundaram Granites",
  },
  description:
    "Sundaram Granites is a world-class manufacturer and exporter of premium Indian granite slabs. 18+ years of experience, ISO certified, serving architects and builders globally.",
  keywords: [
    "granite slabs",
    "Indian granite",
    "granite manufacturer",
    "granite exporter",
    "premium granite",
    "natural stone",
    "Sundaram Granites",
    "countertops",
    "architectural stone",
  ],
  openGraph: {
    title: "Sundaram Granites — Premium Indian Granite",
    description: "World-class manufacturer and exporter of premium Indian granite slabs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable} ${playfair.variable} ${cinzel.variable}
        ${cormorant.variable} ${poppins.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[family-name:var(--font-inter)]">
        <SmoothScroll>
          <CursorGlow />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
