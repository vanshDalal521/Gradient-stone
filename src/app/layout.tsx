import type { Metadata } from "next";
import Script from "next/script";
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sundaram Granites",
  alternateName: ["Sundaram Granites", "Sundaram Granite"],
  url: "https://sundaramgranites.shop",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sundaram Granites",
  url: "https://sundaramgranites.shop",
  logo: "https://sundaramgranites.shop/favicon.svg",
  email: "Sundaramgranites.krishnagiri@gmail.com",
  telephone: "+91 63635 78346",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SF No. 24/1, Sathamangalam Village, Thandla Road, Pochampalli",
    addressLocality: "Krishnagiri",
    addressRegion: "Tamil Nadu",
    postalCode: "635206",
    addressCountry: "IN",
  },
};

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

  twitter: {
    card: "summary_large_image",
    title: "Sundaram Granites | Premium Indian Granite Manufacturer & Exporter",
    description:
      "Premium Indian granite, sourced and crafted with precision, delivered worldwide.",
    images: ["/og-image.jpg"],
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
        {/* CookieYes - Cookie Consent */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/ffe59be400f718ceb95aa651/script.js"
        />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QFQTS3R290" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QFQTS3R290');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
