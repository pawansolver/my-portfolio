"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleSection from "./Particle";
import VideoSection from "./Video";

// --- PARTNERS DATA ---
const partners = [
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const MatrixSection = () => (
  <div className="w-full h-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
    {/* Grid Overlay Sync with Brand */}
    <div className="absolute inset-0 opacity-10" 
         style={{ backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    
    <div className="relative z-10 text-center space-y-6 px-6"> 
      <motion.span className="font-black text-[11px] tracking-[0.5em] uppercase block text-brandOrange">
        Digital Infrastructure
      </motion.span>
      <motion.h1 className="heading-xl !text-white !mb-0 italic leading-[0.85]">
        TECH <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>MATRIX</span>
      </motion.h1>
    </div>
  </div>
);

// --- LOGO CLOUD (Box Spaced Sync) ---
const LogoCloudPremium = () => (
  <div className="absolute bottom-12 md:bottom-20 left-0 w-full z-40">
    <div className="container-custom">
      <div className="max-w-7xl mx-auto mb-10 flex items-center justify-center gap-6 opacity-50">
         <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brandOrange" />
         <p className="font-black text-[10px] text-white tracking-[0.5em] uppercase">Trusted Partners</p>
         <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brandOrange" />
      </div>

      <div className="relative flex overflow-hidden group select-none">
        {/* Fades synced with Page Bg */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-24 md:gap-40 items-center">
          {[...partners, ...partners, ...partners].map((item, idx) => (
            <motion.img
              key={idx}
              src={item.logo}
              alt={item.name}
              className="h-5 md:h-7 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-700 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]"
              whileHover={{ scale: 1.1, y: -5 }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <ParticleSection key="p" />;
      case 1: return <VideoSection key="v" />;
      case 2: return <MatrixSection key="m" />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full h-[100dvh] bg-black overflow-hidden m-0 p-0 block z-0">
      
      {/* Background Slides with Global Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Overlays to ensure Global Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />

      {/* --- PREMIUM LOGO SLIDER --- */}
      <LogoCloudPremium />

      {/* Navigation Controls: Synced with Brand Colors */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-10">
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="group flex items-center justify-end gap-5 outline-none">
            <span className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500
              ${currentSlide === i ? "text-brandOrange opacity-100" : "text-white opacity-0 group-hover:opacity-60"}`}>
              {i === 0 ? "Neural" : i === 1 ? "Identity" : "Matrix"}
            </span>
            <div className={`transition-all duration-700 rounded-full
              ${currentSlide === i 
                ? "h-14 w-[4px] bg-brandOrange shadow-[0_0_20px_#FF6B00]" 
                : "h-6 w-[2px] bg-white/20 group-hover:bg-white/60"}`} 
            />
          </button>
        ))}
      </div>

      {/* Counter: Refined for Global Look */}
      <div className="absolute bottom-12 left-12 z-50 flex flex-col items-start gap-1">
        <span className="text-[12px] font-black text-brandOrange tracking-tighter">0{currentSlide + 1}</span>
        <div className="w-10 h-[1px] bg-white/20" />
        <span className="text-[10px] font-bold text-white/30">03</span>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .container-custom {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
      `}</style>
    </section>
  );
}