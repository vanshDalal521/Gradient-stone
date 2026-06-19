"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const footerLinks = {
  Products: [
    { label: "Black Granites", href: "/collection?category=black-granites" },
    { label: "White Granites", href: "/collection?category=white-granites" },
    { label: "Brown Granites", href: "/collection?category=brown-granites" },
    { label: "Blue Granites", href: "/collection?category=blue-granites" },
    { label: "Red Granites", href: "/collection?category=red-granites" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#111111] text-white">
      {/* Footer Marquee */}
      <div className="border-b border-white/10">
        <Marquee
          items={[
            "Natural Stone",
            "Indian Granite",
            "Global Export",
            "Premium Quality",
            "Since 2007",
            "Sundaram Granites",
          ]}
          speed={35}
          className="py-5 text-sm font-medium text-white/40"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-[family-name:var(--font-cinzel)] font-bold text-lg">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider text-white leading-tight">
                  SUNDARAM
                </span>
                <span className="text-[#B8860B] text-[10px] tracking-[0.3em] uppercase font-medium">
                  Granites
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Premium Indian granite, sourced and crafted with precision, delivered to over 40 countries worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:Sundaramgranites.krishnagiri@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-[#B8860B] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Sundaramgranites.krishnagiri@gmail.com
              </a>
              <a
                href="tel:+916363578346"
                className="flex items-center gap-3 text-white/50 hover:text-[#B8860B] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 63635 78346
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>SF No. 24/1, Sathamangalam Village, Thandla Road, Pochampalli, Krishnagiri – 635206, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-white mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#B8860B] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Sundaram Granites. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Made with care in Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
