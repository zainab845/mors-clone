"use client";

export default function Clients() {
  // Repeating the arrays ensures the infinite scroll is seamless
  const row1 = ["Accademia dei Test", "Ancora", "Atomic Design", "Baia Beach Club", "Baia Village", "Becco", "Birra del Gargano", "BlendingBox"];
  const row2 = ["Bocconi University", "Center for SpaceTime and Quantum", "ClipClap", "ClubSoda", "Cosmo", "CSTQ", "Elsilab", "emme works"];
  const row3 = ["FXMasters", "Futura", "GreenAir", "Juztina", "Manzionna Holiday Group", "Ottaviano", "Panini di Mare", "Perazzeta Wines"];

  const MarqueeItem = ({ text }: { text: string }) => (
    <span className="inline-flex items-center">
      <span className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight cursor-default select-none transition-colors duration-300 text-neutral-700 px-6">
        {text}
      </span>
      <span className="text-neutral-200 select-none">·</span>
    </span>
  );

  return (
    <section className="py-32 md:py-40 overflow-hidden bg-white">
      {/* Injecting custom keyframes for the marquee */}
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }
        .scroll-left {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: scrollLeft 85s linear infinite;
        }
        .scroll-right {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: scrollRight 95s linear infinite;
        }
      `}</style>

      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-20 mb-16">
        <p className="text-sm text-neutral-600 uppercase tracking-[0.1em]">Selected Clients</p>
      </div>

      {/* Scrolling Text Rows */}
      <div className="space-y-1 mb-20">
        <div className="overflow-hidden py-3">
          <div className="scroll-left">
            {/* Render twice for the seamless loop effect */}
            {[...row1, ...row1].map((client, i) => (
              <MarqueeItem key={i} text={client} />
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden py-3">
          <div className="scroll-right">
            {[...row2, ...row2].map((client, i) => (
              <MarqueeItem key={i} text={client} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden py-3">
          <div className="scroll-left" style={{ animationDuration: '90s' }}>
            {[...row3, ...row3].map((client, i) => (
              <MarqueeItem key={i} text={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Overlapping Brand Avatars */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center">
          {/* Avatar 1 */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0 bg-neutral-100 z-5 shadow-[0_2px_10px_rgba(0,0,0,0.12)] ml-0">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vYwWVw6o5yX0E5twLzx86vuPHte1Qk.png" alt="Brand" className="w-full h-full object-cover grayscale" />
          </div>
          {/* Avatar 2 */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0 bg-neutral-200 z-4 shadow-[0_2px_10px_rgba(0,0,0,0.12)] -ml-3.5">
             <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GreenAir_Identity-SYiSU0oItzv0qtyULZzigkBpuc6hmb.webp" alt="Brand" className="w-full h-full object-cover grayscale" />
          </div>
          {/* Avatar 3 */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0 bg-neutral-800 z-3 shadow-[0_2px_10px_rgba(0,0,0,0.12)] -ml-3.5">
             <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ottaviano_Identity%2BPackaging-4F3HtPqKZbnzyysEy7AzoCcOXmM8s2.webp" alt="Brand" className="w-full h-full object-cover grayscale" />
          </div>
          {/* Avatar 4 */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0 bg-neutral-300 z-2 shadow-[0_2px_10px_rgba(0,0,0,0.12)] -ml-3.5">
             <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panini%20di%20Mare_Identity-GSbjenvHpSmFPINJ7rlpyck7s5owJk.webp" alt="Brand" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <p className="text-base text-neutral-700 tracking-wide text-center">
          Trusted by <span className="text-neutral-900 font-medium">50+ brands</span>
        </p>
      </div>
    </section>
  );
}