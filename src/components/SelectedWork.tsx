"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// We split the projects into 3 columns to match the staggered design
const col1 = [
  { id: 1, title: "CSTQ", category: "Identity", aspect: "aspect-square", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSTQ_Identity-bFeGJ9naoVRWNeHmbnrT9w8ZQYpqYI.webp" },
  { id: 2, title: "Juztina.ai", category: "Editorial", aspect: "aspect-[3/4]", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vYwWVw6o5yX0E5twLzx86vuPHte1Qk.png" },
  { id: 3, title: "Cosmo", category: "Identity", aspect: "aspect-square", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cosmo_Identity-56pDJDUFkKeNighZnZK9XWpn5esZZG.webp" },
];

const col2 = [
  { id: 4, title: "Enrico Fermi Fellowships", category: "Identity", aspect: "aspect-video", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enrico%20Fermi%20Fellowships_Identity-LmzAT2qEKGGCR4xSqaeERx41urpiRy.webp" },
  { id: 5, title: "Perazzeta", category: "Identity + Packaging", aspect: "aspect-video", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perazzeta_Identity%2BPackaging-02dHHNknzE6I1OArys1FQ86g0jfBeG.webp" },
  { id: 6, title: "Panini di Mare", category: "Identity", aspect: "aspect-square", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panini%20di%20Mare_Identity-GSbjenvHpSmFPINJ7rlpyck7s5owJk.webp" },
];

const col3 = [
  { id: 7, title: "Ottaviano", category: "Identity + Packaging", aspect: "aspect-video", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ottaviano_Identity%2BPackaging-4F3HtPqKZbnzyysEy7AzoCcOXmM8s2.webp" },
  { id: 8, title: "Juztina.ai", category: "Identity", aspect: "aspect-[3/4]", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juztina.ai_Identity-j6fXqVOoMX8Fg43YUswskJVEyLQsWy.webp" },
  { id: 9, title: "WOOT", category: "Identity + Packaging", aspect: "aspect-[3/4]", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WOOT_IdentityPackaging-VMEnSruJOqzk0aBZ9cTKKKdg7U49bo.webp" },
];

const ProjectCard = ({ project }: { project: any }) => (
  <motion.a 
    href="#"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
    className="group block cursor-pointer"
  >
    <div className={`relative rounded-[5px] overflow-hidden bg-neutral-100 ${project.aspect}`}>
      {/* Image with slight scale effect on hover */}
      <img 
        src={project.img} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Glassmorphism "View" Badge (Centered on Hover) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.15)] scale-75 group-hover:scale-100 transition-transform duration-500">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white drop-shadow-md">
            View
          </span>
        </div>
      </div>
    </div>

    {/* Project Info */}
    <div className="mt-4 flex items-center">
      <p className="text-base font-semibold text-neutral-800 tracking-wide">
        {project.title}
        <span className="mx-2 text-neutral-300">/</span>
        <span className="font-normal text-neutral-400">{project.category}</span>
      </p>
    </div>
  </motion.a>
);

export default function SelectedWork() {
  return (
    <section id="work" className="pt-28 pb-36 md:pt-32 md:pb-48 px-4 md:px-6 bg-white">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-[clamp(2rem,5.5vw,5rem)] font-medium tracking-[-0.02em] text-neutral-800 mb-8">
          Selected Work
        </h2>
      </div>

      {/* Desktop Layout: 3 Staggered Columns */}
      <div className="hidden md:grid md:grid-cols-3 gap-x-16 items-start">
        <div className="flex flex-col gap-y-32">
          {col1.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
        <div className="flex flex-col gap-y-32 mt-20">
          {col2.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
        <div className="flex flex-col gap-y-32 mt-10">
          {col3.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>

      {/* Mobile Layout: 1 Column */}
      <div className="flex flex-col gap-y-16 md:hidden">
        {[...col1, ...col2, ...col3].map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}