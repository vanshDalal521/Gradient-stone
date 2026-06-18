"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/collection",
    submenu: [
      { label: "All Granites", href: "/collection" },
      { label: "Finishes", href: "/finishes" },
      { label: "Applications", href: "/applications" },
    ],
  },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const progressRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (progressRef.current) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? latest / docHeight : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    }
    const shouldBeScrolled = latest > 50;
    setIsScrolled((prev) => {
      if (prev !== shouldBeScrolled) return shouldBeScrolled;
      return prev;
    });
  });

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar — uses ref, no re-renders */}
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ transformOrigin: "left", willChange: "transform" }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "glass py-3 shadow-xl shadow-black/30"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-luxury-gold/20">
              <span className="text-granite-black font-[family-name:var(--font-cinzel)] font-bold text-lg">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider leading-tight">
                SUNDARAM
              </span>
              <span className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase font-medium">
                Granites
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-400 flex items-center gap-1.5 group",
                    pathname === link.href
                      ? "text-luxury-gold"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown className={cn(
                      "w-3 h-3 transition-transform duration-300",
                      activeSubmenu === link.label && "rotate-180"
                    )} />
                  )}

                  {/* Active underline */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-luxury-gold rounded-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>

                {/* Desktop Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 glass rounded-xl p-2 min-w-[220px] shadow-xl shadow-black/30"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-lg transition-all duration-300",
                            pathname === sub.href
                              ? "text-luxury-gold bg-luxury-gold/10"
                              : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 text-[13px] font-semibold bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-luxury-gold/25 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-granite-black/95 border-l border-border p-8 pt-28 overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                        pathname === link.href
                          ? "text-luxury-gold bg-luxury-gold/10"
                          : "text-muted hover:text-foreground hover:bg-white/[0.03]"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-lg transition-all duration-300",
                              pathname === sub.href
                                ? "text-luxury-gold"
                                : "text-muted hover:text-foreground"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3.5 text-base font-semibold bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-granite-black rounded-xl"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
