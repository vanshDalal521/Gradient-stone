import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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
  metadataBase: new URL("https://sundaramgranites.shop"),

  title: {
    default: "Sundaram Granites | Premium Indian Granite Manufacturer & Exporter",
    template: "%s | Sundaram Granites",
  },

  description:
    "Sundaram Granites is a premium Indian granite manufacturer and exporter, offering high-quality granite slabs, tiles, cobbles, and natural stone products.",

  alternates: {
    canonical: "https://sundaramgranites.shop",
  },

  openGraph: {
    title: "Sundaram Granites | Premium Indian Granite Manufacturer & Exporter",
    description:
      "Premium Indian granite, sourced and crafted with precision, delivered worldwide.",
    url: "https://sundaramgranites.shop",
    siteName: "Sundaram Granites",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sundaram Granites",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
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
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
