"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Identities.", "Packaging.", "Experiences.", "Stories."];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Cycle through the words every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[65vh] md:h-screen p-6 md:p-8 lg:p-10 bg-white">
      {/* Video Container with padding to reveal the white background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="relative w-full h-full rounded-[24px] overflow-hidden bg-neutral-900"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc7eec08-f080-4dea-a678-e9dfb3362b60-NLgOFQiOrSmT0kytbqdbbYBG0buTaW.mp4"
        />
        
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10 flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-white/80 tracking-[0.1em] uppercase">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] font-medium tracking-[-0.03em] leading-[0.95]">
            Designing timeless
          </h1>
          
          {/* Animated Serif Word Cycler */}
          <div className="h-[12vw] md:h-[8.5vw] lg:h-[7.5vw] flex items-center justify-center overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] italic tracking-[-0.02em] font-serif"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-6"
          >
            <a href="#work" className="group flex items-center gap-3 bg-white text-black text-xs font-semibold tracking-[0.08em] uppercase px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300">
              View Work
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="mailto:info@antoniomorsillo.com" className="text-xs font-medium text-white/60 tracking-[0.08em] uppercase hover:text-white transition-colors duration-300">
              Get in touch
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}