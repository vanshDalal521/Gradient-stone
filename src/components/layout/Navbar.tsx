"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ transformOrigin: "left", willChange: "transform" }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white border-b border-gray-200 shadow-sm py-3"
            : "bg-white/80 backdrop-blur-none py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-[family-name:var(--font-cinzel)] font-bold text-lg">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1A1A1A] font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider leading-tight">
                SUNDARAM
              </span>
              <span className="text-[#B8860B] text-[10px] tracking-[0.3em] uppercase font-medium">
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
                onMouseEnter={() =>
                  link.submenu && setActiveSubmenu(link.label)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 flex items-center gap-1.5",
                    pathname === link.href
                      ? "text-[#B8860B]"
                      : "text-[#1A1A1A] hover:text-[#B8860B]"
                  )}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-300",
                        activeSubmenu === link.label && "rotate-180"
                      )}
                    />
                  )}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B8860B] rounded-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-200 p-2 min-w-[220px] shadow-lg"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-lg transition-all duration-200",
                            pathname === sub.href
                              ? "text-[#B8860B] bg-[#B8860B]/5"
                              : "text-[#6B7280] hover:text-[#1A1A1A] hover:bg-gray-50"
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
              className="px-6 py-2.5 text-[13px] font-semibold bg-[#B8860B] text-white rounded-xl transition-all duration-300 hover:bg-[#9A7209] hover:shadow-md hover:shadow-[#B8860B]/20 active:scale-[0.97]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white border-l border-gray-200 p-8 pt-28 overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200",
                        pathname === link.href
                          ? "text-[#B8860B] bg-[#B8860B]/5"
                          : "text-[#1A1A1A] hover:text-[#B8860B] hover:bg-gray-50"
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
                              "block px-4 py-2 text-sm rounded-lg transition-all duration-200",
                              pathname === sub.href
                                ? "text-[#B8860B]"
                                : "text-[#6B7280] hover:text-[#1A1A1A]"
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
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3.5 text-base font-semibold bg-[#B8860B] text-white rounded-xl"
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
