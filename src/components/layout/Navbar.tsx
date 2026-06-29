"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/collection?filter=Granite",
    children: [
      { label: "Granite Slabs", href: "/collection?filter=Granite", description: "30+ natural granite varieties" },
      { label: "Granite Furniture", href: "/granite-furniture", description: "Handcrafted stone furniture" },
      { label: "Sandstone", href: "/sandstone", description: "Natural warmth for outdoor & indoor" },
      { label: "Marble", href: "/marble", description: "Timeless elegance & luxury" },
      { label: "Cobbles", href: "/cobbles", description: "Durable stone for driveways & paths" },
    ],
  },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileSubOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleDesktopEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDesktopHover(label);
  };

  const handleDesktopLeave = () => {
    hoverTimeout.current = setTimeout(() => setDesktopHover(null), 150);
  };

  const isHome = pathname === "/";

  // On inner pages, always use scrolled (dark) styling since backgrounds are light
  const effectiveScrolled = isHome ? isScrolled : true;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          effectiveScrolled
            ? "bg-white/70 backdrop-blur-xl backdrop-saturate-[1.8] border-b border-white/20 shadow-[0_1px_15px_rgba(0,0,0,0.04)] py-3"
            : "bg-white/10 backdrop-blur-lg backdrop-saturate-[1.5] border-b border-white/10 py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-[family-name:var(--font-cinzel)] font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wider leading-tight transition-colors duration-300",
                effectiveScrolled ? "text-[#1A1A1A]" : "text-white"
              )}>
                SUNDARAM
              </span>
              <span className="text-[#B8860B] text-[10px] tracking-[0.3em] uppercase font-medium">
                Granites
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const hasDropdown = !!link.children;
              const isDropdownActive = desktopHover === link.label;
              const isChildActive = link.children?.some((c) => pathname === c.href);
              const isActive = pathname === link.href || isChildActive;

              if (hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDesktopEnter(link.label)}
                    onMouseLeave={handleDesktopLeave}
                  >
                    {/* Trigger */}
                    <Link
                      href={link.href}
                      className={cn(
                        "relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300",
                        isActive
                          ? "text-[#B8860B]"
                          : cn("hover:text-[#B8860B]", effectiveScrolled ? "text-[#1A1A1A]" : "text-white/90")
                      )}
                      onClick={(e) => {
                        // On click, also toggle the dropdown
                        if (isDropdownActive) {
                          setDesktopHover(null);
                        } else {
                          e.preventDefault();
                          setDesktopHover(link.label);
                        }
                      }}
                    >
                      {link.label}
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        isDropdownActive && "rotate-180"
                      )} />
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B8860B] rounded-full"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isDropdownActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 mt-2 w-72"
                        >
                          <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden p-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onMouseEnter={() => {
                                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                                }}
                                onMouseLeave={handleDesktopLeave}
                                className={cn(
                                  "flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-all duration-200",
                                  pathname === child.href
                                    ? "bg-[#B8860B]/10 text-[#B8860B]"
                                    : "text-[#1A1A1A] hover:bg-gray-50"
                                )}
                              >
                                <span className="text-sm font-semibold">{child.label}</span>
                                <span className="text-xs text-gray-400">{child.description}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300",
                    pathname === link.href
                      ? "text-[#B8860B]"
                      : cn("hover:text-[#B8860B]", effectiveScrolled ? "text-[#1A1A1A]" : "text-white/90")
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B8860B] rounded-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "px-6 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-300 active:scale-[0.97]",
                effectiveScrolled
                  ? "bg-[#B8860B] text-white hover:bg-[#9A7209] hover:shadow-md hover:shadow-[#B8860B]/20"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25"
              )}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300",
              effectiveScrolled ? "text-[#1A1A1A]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
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
            <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl backdrop-saturate-[1.8]" />
            <nav className="relative flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => {
                const hasDropdown = !!link.children;

                if (hasDropdown) {
                  const isOpen = mobileSubOpen === link.label;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full flex flex-col items-center"
                    >
                      <button
                        onClick={() => setMobileSubOpen(isOpen ? null : link.label)}
                        className={cn(
                          "flex items-center gap-2 px-8 py-4 text-2xl font-[family-name:var(--font-playfair)] font-bold rounded-xl transition-all duration-200",
                          isOpen ? "text-[#B8860B]" : "text-[#1A1A1A] hover:text-[#B8860B]"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden w-full flex flex-col items-center gap-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "px-8 py-3 text-lg font-[family-name:var(--font-playfair)] rounded-xl transition-all duration-200",
                                  pathname === child.href
                                    ? "text-[#B8860B]"
                                    : "text-[#1A1A1A]/70 hover:text-[#B8860B]"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-8 py-4 text-2xl font-[family-name:var(--font-playfair)] font-bold rounded-xl transition-all duration-200",
                        pathname === link.href
                          ? "text-[#B8860B]"
                          : "text-[#1A1A1A] hover:text-[#B8860B]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex px-10 py-4 text-base font-semibold bg-[#B8860B] text-white rounded-xl hover:bg-[#9A7209] transition-all duration-300"
                >
                  Get Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
