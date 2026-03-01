"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import VideoSection from "./Video";
import { useModal } from "@/components/context/ModalContext";

// 🚀 DYNAMIC IMPORT
const ParticleSection = dynamic(() => import("./Particle"), { ssr: false });

const partners = [
  { name: "Licious", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Gupshup", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Cultfit", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
];

// --- 🚀 Growth Section ---
const GrowthSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <div className="w-full h-full bg-[#fcfcfc] flex items-center justify-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brandOrange/5 rounded-full blur-[100px] md:blur-[120px] -z-10" />

    {/* 🔥 FIX: Responsive padding & h-full to center perfectly inside 100dvh */}
    <div className="container-custom h-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 pt-24 pb-28 md:pt-32 md:pb-40">

      <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center mt-8 md:mt-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <span className="text-brandOrange font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block border-l-0 md:border-l-4 border-brandOrange md:pl-3">
            Engineering Excellence
          </span>
          <h1 className="heading-xl !text-center md:!text-left !mb-4 md:!mb-6 !text-textmain">
            NIGHWAN TECH <br />
            <span className="text-brandOrange italic"></span>
          </h1>
          <p className="text-muted !text-center md:!text-left !mx-0 mb-6 md:mb-8 opacity-80 max-w-md !text-sm md:!text-base">
            Engineering your path to growth where your business goals meet our engineering expertise.
          </p>
        </motion.div>

        <div className="flex justify-center md:justify-start w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="btn-primary"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>

      <div className="relative flex justify-center items-center px-4 md:px-0">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg"
        >
          <div className="absolute -left-2 md:-left-8 top-10 space-y-4 z-20 hidden sm:block">
            {['Quality >', 'Time <', 'Quantity >'].map((text, i) => (
              <div key={i} className={`bg-white shadow-xl px-4 md:px-5 py-2 md:py-2.5 rounded-xl border-l-4 ${i === 1 ? 'border-brandGreen' : 'border-brandOrange'} font-bold text-[11px] md:text-sm text-textmain whitespace-nowrap`}>
                {text}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[30px] md:rounded-[50px] p-4 border border-gray-100 shadow-xl md:shadow-2xl overflow-hidden flex justify-center items-center relative z-10">
            {/* 🔥 FIX: Image scaling safe limits for mobile */}
            <img
              src="https://illustrations.popsy.co/amber/success.svg"
              alt="Nighwan Tech Growth"
              className="w-full h-auto max-h-[220px] sm:max-h-[300px] md:max-h-[380px] object-contain drop-shadow-lg md:drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// --- 🏗️ Logo Slider ---
const LogoCloudPremium = () => (
  <div className="absolute bottom-0 left-0 w-full z-40">
    {/* 🔥 FIX: Thinner padding on mobile (py-4) so it doesn't eat vertical space */}
    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 md:py-6 shadow-[0_-15px_40px_rgba(0,0,0,0.04)]">
      <div className="container-custom">
        <div className="relative flex overflow-hidden group select-none items-center">
          <div className="absolute left-0 top-0 w-12 md:w-40 h-full bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-12 md:w-40 h-full bg-gradient-to-l from-white via-white/40 to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-32 items-center">
            {[...partners, ...partners, ...partners].map((item, idx) => (
              <img
                key={idx}
                src={item.logo}
                alt={item.name}
                className="h-5 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useModal();
  const pathname = usePathname();

  return (
    <section className="relative w-full h-[100dvh] bg-white overflow-hidden m-0 p-0 block">

      {/* Slide 0: Growth */}
      <motion.div
        animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 0 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
      >
        <GrowthSection onContactClick={() => openModal(`Hero Section Slider - ${pathname}`)} />
      </motion.div>

      {/* Slide 1: Particle */}
      <motion.div
        animate={{ opacity: currentSlide === 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 1 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
      >
        <ParticleSection />
      </motion.div>

      {/* Slide 2: Video */}
      <motion.div
        animate={{ opacity: currentSlide === 2 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 2 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
      >
        <VideoSection />
      </motion.div>

      {/* -------------------------------------------------------- */}

      <LogoCloudPremium />

      {/* Slider Controls */}
      {/* 🔥 FIX: Adjusted right placement for mobile (right-4) */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 md:gap-8">
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="group flex items-center justify-end gap-3 md:gap-4 outline-none">
            {/* Hidden text on very small screens, visible on md+ */}
            <span className={`hidden md:block text-[10px] font-black tracking-widest uppercase transition-all duration-300 px-2 py-1 rounded bg-black/5 backdrop-blur-sm
              ${currentSlide === i ? "text-brandOrange" : "text-textmain opacity-0 group-hover:opacity-100"}`}>
              {i === 0 ? "Growth" : i === 1 ? "Neural" : "Identity"}
            </span>
            <div className={`transition-all duration-500 rounded-full border border-black/10 shadow-sm
              ${currentSlide === i
                ? "h-10 md:h-12 w-[4px] md:w-[5px] bg-brandOrange"
                : "h-4 md:h-5 w-[3px] bg-gray-300 group-hover:bg-brandOrange"}`}
            />
          </button>
        ))}
      </div>

      {/* Slide Index Display */}
      {/* 🔥 FIX: Safely positioned above the mobile logo cloud */}
      <div className="absolute bottom-20 md:bottom-28 left-6 md:left-12 z-50 flex flex-col items-start pointer-events-none">
        <span className="text-[14px] md:text-[16px] font-black text-brandOrange tracking-tighter drop-shadow-sm">0{currentSlide + 1}</span>
        <div className="w-8 md:w-10 h-[2px] bg-brandOrange/30 my-1" />
        <span className="text-[10px] md:text-[11px] font-bold text-gray-400">03</span>
      </div>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        canvas { background: transparent !important; }
      `}</style>
    </section>
  );
}