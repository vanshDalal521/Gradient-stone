"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Granite Collection", href: "/collection" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Finishes", href: "/finishes" },
  { label: "Applications", href: "/applications" },
];

const productLinks = [
  { label: "White Collection", href: "/collection?color=White" },
  { label: "Black Collection", href: "/collection?color=Black" },
  { label: "Brown Collection", href: "/collection?color=Brown" },
  { label: "Green Collection", href: "/collection?color=Green" },
  { label: "Blue Collection", href: "/collection?color=Blue" },
  { label: "Pink & Gold", href: "/collection?color=Pink+%2F+Gold" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-[family-name:var(--font-cinzel)] font-bold text-lg">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#1A1A1A] font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider leading-tight">
                  SUNDARAM
                </span>
                <span className="text-[#B8860B] text-[10px] tracking-[0.3em] uppercase">
                  Granites
                </span>
              </div>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
              Premium Indian granite manufacturer and exporter with 18+ years of
              excellence. Serving architects, builders, and developers worldwide.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 text-[#6B7280]">
                <MapPin className="w-4 h-4 mt-0.5 text-[#B8860B] shrink-0" />
                <span>Krishnagiri, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a
                  href="mailto:info@sundaramgranites.com"
                  className="hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  info@sundaramgranites.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1A1A1A] font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B7280] text-sm hover:text-[#B8860B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-[#1A1A1A] font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Collections
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B7280] text-sm hover:text-[#B8860B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#1A1A1A] font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Stay Connected
            </h3>
            <p className="text-[#6B7280] text-sm mb-4">
              Get the latest updates on our new collections and export offerings.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#6B7280] focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#B8860B] text-white text-sm font-semibold rounded-xl hover:bg-[#9A7209] transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-xs">
            &copy; {new Date().getFullYear()} Sundaram Granites. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#6B7280]">
            <Link
              href="/resources"
              className="hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
