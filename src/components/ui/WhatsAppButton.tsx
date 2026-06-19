"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const PHONE = "916363578346";
const MESSAGE = "Hi! I'm interested in your granite products.";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hide = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-100"
          >
            <p className="text-[#1A1A1A] text-sm font-medium whitespace-nowrap">
              Chat with us on WhatsApp
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sundaram Granites</p>
                  <p className="text-white/70 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-xl px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-[#303030] text-sm leading-relaxed">
                  Hi! 👋 How can we help you today?
                </p>
                <p className="text-[#667781] text-[10px] mt-1.5 text-right">Just now</p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-5 py-4 bg-white">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm rounded-xl transition-all duration-300 active:scale-[0.98]"
              >
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </motion.button>
    </div>
  );
}
