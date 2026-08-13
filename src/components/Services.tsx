"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { 
    name: "Brand Identity", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cosmo_Identity-56pDJDUFkKeNighZnZK9XWpn5esZZG.webp" 
  },
  { 
    name: "Art Direction", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quadri_Identity-ybmKJJs47LDtJbt2TNhc7uWWPUndUq.webp" 
  },
  { 
    name: "Editorial", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vYwWVw6o5yX0E5twLzx86vuPHte1Qk.png" 
  },
  { 
    name: "Packaging", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perazzeta_Identity%2BPackaging-02dHHNknzE6I1OArys1FQ86g0jfBeG.webp" 
  },
  { 
    name: "Web Design & UI/UX", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FXMasters_Identity%2BUI_UX-XxizOoaN33E78k7YGqeG6u8sC2nDva.webp" 
  },
  { 
    name: "Strategy", 
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GreenAir_Identity-SYiSU0oItzv0qtyULZzigkBpuc6hmb.webp" 
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      
   
      <motion.div 
        className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 z-20 rounded-[5px] overflow-hidden pointer-events-none w-[360px] h-[450px] shadow-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: hoveredIndex !== null ? 1 : 0,
          x: hoveredIndex !== null ? 0 : 20
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex !== null && (
            <motion.img
              key={hoveredIndex}
              src={services[hoveredIndex].img}
              alt={services[hoveredIndex].name}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 md:mb-16 flex items-center justify-between"
      >
        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.18em]">Services</p>
        <p className="text-[11px] text-neutral-400 tabular-nums">—</p>
      </motion.div>

      <div className="border-t border-neutral-200" />

      {/* Interactive Typography List */}
      <ul 
        className="flex flex-col w-full relative"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isOthersHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.19, 1, 0.22, 1], 
                delay: index * 0.1 
              }}
              className="w-full"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="relative border-b border-neutral-200 flex items-center justify-center cursor-default select-none min-h-[clamp(64px,9vw,110px)]">
                <span 
                  className={`relative z-10 text-[clamp(2rem,5vw,6.5rem)] tracking-[-0.02em] leading-none transition-all duration-500 py-4 ${
                    isHovered 
                      ? 'text-black font-bold scale-[1.02]' 
                      : isOthersHovered 
                        ? 'text-neutral-200 font-normal scale-95' 
                        : 'text-black font-normal'
                  }`}
                >
                  {service.name}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}