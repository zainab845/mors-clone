"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 0,
    quote: "“He's very attentive and his creativity is great. He truly listens, understands the briefs and consistently delivers beyond expectations.”",
    author: "Rohan Radhakrishnan",
    role: "Founder at QuarterProof",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vYwWVw6o5yX0E5twLzx86vuPHte1Qk.png" // Using placeholder avatars from our earlier files
  },
  {
    id: 1,
    quote: "“Antonio is excellent and very thorough. He delivers quality designs and I was genuinely pleased with his attentiveness and dedication.”",
    author: "Ahmed Taha",
    role: "Founder at AM Residentials",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GreenAir_Identity-SYiSU0oItzv0qtyULZzigkBpuc6hmb.webp"
  },
  {
    id: 2,
    quote: "“Working with Antonio was a pleasure from start to finish. He brought real refinement and care, elevating our brand in ways we didn't expect.”",
    author: "Lena Wirth",
    role: "Creative Director at Forma Studio",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ottaviano_Identity%2BPackaging-4F3HtPqKZbnzyysEy7AzoCcOXmM8s2.webp"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black text-white py-24 md:py-32 px-6 md:px-12 border-t border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
        
        {/* Label Column */}
        <div className="md:w-[20%] flex-shrink-0">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            Testimonials
          </p>
        </div>

        {/* Content Column */}
        <div className="flex-1 flex flex-col gap-10">
          
          {/* Animated Quote Area */}
          <div className="relative min-h-[280px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col gap-6"
              >
                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-[-0.02em] text-white">
                  {testimonials[active].quote}
                </blockquote>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  {testimonials[active].author}, {testimonials[active].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Controls */}
          <div className="flex items-center justify-between gap-6 mt-8">
            
            {/* Interactive Avatars */}
            <div className="flex items-center">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-neutral-800 transition-all duration-400 ease-out"
                  style={{
                    marginLeft: i === 0 ? "0px" : "-12px",
                    zIndex: active === i ? 10 : 3 - i,
                    filter: active === i ? "brightness(1)" : "brightness(0.45)",
                    transform: active === i ? "scale(1.08)" : "scale(1)",
                    outline: active === i ? "2px solid rgba(255,255,255,0.6)" : "2px solid transparent",
                    outlineOffset: "2px"
                  }}
                >
                  <img src={t.img} alt={t.author} className="w-full h-full object-cover grayscale" />
                </button>
              ))}
            </div>

            {/* Arrows & Dots */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 hidden md:flex">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonial dot ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? "20px" : "6px",
                      height: "6px",
                      backgroundColor: active === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)"
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-2">
                <button onClick={prev} aria-label="Previous testimonial" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
                <button onClick={next} aria-label="Next testimonial" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"></path></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}