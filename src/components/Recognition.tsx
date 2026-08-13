"use client";

import { motion } from "framer-motion";

const awards = [
  {
    platform: "Behance",
    categories: [
      { name: "Branding", count: 1 },
      { name: "Logo", count: 2 },
      { name: "Graphic Design", count: 3 },
      { name: "InDesign", count: 2 },
      { name: "Illustrator", count: 2 },
    ]
  },
  {
    platform: "World Brand Design",
    categories: [
      { name: "Articles", count: 7 },
    ]
  },
  {
    platform: "Hiiibrand",
    categories: [
      { name: "Nominee", count: 1 },
    ]
  },
  {
    platform: "LogoLounge",
    categories: [
      { name: "LogoLounge 14", count: 1 },
      { name: "LogoLounge 15", count: 1 },
    ]
  },
  {
    platform: "Awwwards",
    categories: [
      { name: "Nominee", count: 1 },
    ]
  }
];

export default function Recognition() {
  return (
    <section className="bg-black text-white py-24 md:py-32 px-6 md:px-12">
      <div className="w-full">
        {/* Mobile Header */}
        <div className="mb-8 md:mb-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white md:hidden">
            Recognition
          </p>
        </div>

        {awards.map((award, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[220px_220px_1fr_60px] items-start border-t border-neutral-800 py-8 md:py-16 gap-4 md:gap-x-8"
          >
            {/* Column 1: Label (Only visible on the first row on desktop) */}
            <div className="hidden md:flex flex-shrink-0">
              {index === 0 && (
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Recognition
                </p>
              )}
            </div>

            {/* Column 2: Platform Name */}
            <h3 className="text-lg md:text-2xl font-medium text-white tracking-[-0.01em] leading-none">
              {award.platform}
            </h3>

            {/* Column 3: Categories */}
            <div className="flex flex-col gap-y-3 md:gap-y-4">
              {award.categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between md:block">
                  <span className="text-xs md:text-base uppercase tracking-[0.1em] text-neutral-400 leading-none">
                    {cat.name}
                  </span>
                  {/* Mobile Count */}
                  <span className="text-xs uppercase tracking-[0.1em] text-neutral-400 leading-none md:hidden">
                    X{cat.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 4: Desktop Counts */}
            <div className="hidden md:flex flex-col gap-y-4 items-end">
              {award.categories.map((cat, i) => (
                <span key={i} className="text-base uppercase tracking-[0.1em] text-neutral-400 leading-none block">
                  X{cat.count}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}