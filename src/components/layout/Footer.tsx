"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

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
    <footer className="relative bg-granite-black border-t border-border overflow-hidden">
      {/* Animated gold gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
      <div className="h-px mt-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      {/* Subtle background mesh */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="text-granite-black font-[family-name:var(--font-cinzel)] font-bold text-lg">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider leading-tight">
                  SUNDARAM
                </span>
                <span className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase">
                  Granites
                </span>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Premium Indian granite manufacturer and exporter with 18+ years of
              excellence. Serving architects, builders, and developers worldwide.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 text-muted">
                <MapPin className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                <span>Krishnagiri, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="mailto:info@sundaramgranites.com" className="hover:text-foreground transition-colors duration-300">
                  info@sundaramgranites.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-foreground font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="animate-[slide-up_0.5s_var(--transition-smooth)_forwards] opacity-0 stagger-1"
                  style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                >
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-luxury-gold transition-all duration-400 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-foreground font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Collections
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="animate-[slide-up_0.5s_var(--transition-smooth)_forwards] opacity-0 stagger-1"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-luxury-gold transition-all duration-400 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-foreground font-[family-name:var(--font-cinzel)] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Stay Connected
            </h3>
            <p className="text-muted text-sm mb-4">
              Get the latest updates on our new collections and export offerings.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-luxury-gold/50 focus:ring-1 focus:ring-luxury-gold/20 transition-all duration-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-luxury-gold/20 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99]"
              >
                Subscribe
              </button>
            </form>

            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%27m%20interested%20in%20your%20granite%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-5 px-4 py-3 bg-[#25D366]/[0.08] border border-[#25D366]/20 rounded-xl text-[#25D366] text-sm font-medium hover:bg-[#25D366]/15 hover:border-[#25D366]/30 transition-all duration-400"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Sundaram Granites. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="/resources" className="hover:text-foreground transition-colors duration-300">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
