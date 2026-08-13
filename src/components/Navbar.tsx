"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Menu } from "lucide-react";

export default function Navbar() {
  return (
    // The outer motion container handles the initial "drop-in" animation
    <motion.nav
      initial={{ y: -20, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
      className="fixed top-4 md:top-16 left-1/2 z-50 w-full max-w-[240px] md:max-w-[440px] px-4 md:px-6"
    >
      <div className="relative flex items-center justify-between gap-6 md:gap-8 rounded-2xl px-4 md:px-5 py-2 md:py-3 overflow-hidden bg-white/95 backdrop-blur-[20px] border border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.1)]">
        
        {/* Logo Placeholder (Stylized to match their script logo) */}
        <Link href="/" className="flex items-center md:hover:opacity-60 transition-opacity duration-300 shrink-0">
          <span className="font-serif italic font-medium text-xl leading-none text-black">
            mors<span className="font-sans not-italic text-sm text-gray-400">~</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2">
          {["Works", "About", "Contact"].map((item) => (
            <li key={item} className="group relative px-3 flex flex-col items-center text-center">
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-[10px] font-semibold tracking-[0.06em] uppercase text-neutral-600 group-hover:text-neutral-900 group-hover:-translate-y-1.5 transition-all duration-300 block"
              >
                {item}
              </Link>
              {/* The little dot that appears on hover */}
              <span className="absolute bottom-[-4px] block w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </li>
          ))}

          {/* Vertical Divider */}
          <li>
            <span className="w-px h-4 mx-1 bg-black/10 block" />
          </li>

          {/* Ideas Bin Icon */}
          <li>
            <Link
              href="/ideas-bin"
              className="group relative p-1.5 flex flex-col items-center text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              aria-label="Ideas Bin"
            >
              <Trash2 size={16} strokeWidth={1.8} />
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          aria-label="Toggle menu"
          className="md:hidden relative w-6 h-5 flex flex-col justify-center items-center text-neutral-800"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}