"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Prestige Group",
    logo: (
      <svg viewBox="0 0 200 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="28" fill="#8B1A1A" fontSize="22" fontWeight="700" fontFamily="serif" letterSpacing="1">
          Prestige
        </text>
        <text x="115" y="28" fill="#8B1A1A" fontSize="22" fontWeight="300" fontFamily="serif" letterSpacing="1">
          Group
        </text>
      </svg>
    ),
  },
  {
    name: "Larsen & Toubro",
    logo: (
      <svg viewBox="0 0 180 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="22" fill="#003366" fontSize="16" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">
          LARSEN
        </text>
        <text x="0" y="36" fill="#003366" fontSize="10" fontWeight="400" fontFamily="sans-serif" letterSpacing="4">
          &amp; TOUBRO
        </text>
      </svg>
    ),
  },
  {
    name: "HDFC Bank",
    logo: (
      <svg viewBox="0 0 200 40" className="h-8 md:h-10 w-auto">
        <rect x="0" y="4" width="32" height="32" rx="4" fill="#004B8D" />
        <text x="8" y="26" fill="white" fontSize="14" fontWeight="700" fontFamily="sans-serif">
          HDFC
        </text>
        <text x="40" y="28" fill="#004B8D" fontSize="20" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">
          BANK
        </text>
      </svg>
    ),
  },
  {
    name: "CKS Hospital",
    logo: (
      <svg viewBox="0 0 200 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="22" fill="#0D6E6E" fontSize="18" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">
          CKS
        </text>
        <text x="52" y="28" fill="#0D6E6E" fontSize="14" fontWeight="400" fontFamily="sans-serif" letterSpacing="3">
          HOSPITAL
        </text>
      </svg>
    ),
  },
  {
    name: "Ramky Group",
    logo: (
      <svg viewBox="0 0 200 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="28" fill="#1A5276" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">
          Ramky
        </text>
        <text x="85" y="28" fill="#1A5276" fontSize="22" fontWeight="300" fontFamily="sans-serif" letterSpacing="1">
          Group
        </text>
      </svg>
    ),
  },
];

export function TrustedBy() {
  return (
    <section className="relative py-16 bg-[#F9F9F9] border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#9CA3AF] text-xs tracking-[0.3em] uppercase font-medium mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="hover:opacity-80 transition-opacity duration-300"
            >
              {client.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
