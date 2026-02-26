"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // 👈 AnimatePresence hata diya
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
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandOrange/5 rounded-full blur-[120px] -z-10" />

    <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 pt-32 pb-44 md:pb-52">
      <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <span className="text-brandOrange font-black text-[11px] tracking-[0.4em] uppercase mb-4 block border-l-0 md:border-l-4 border-brandOrange md:pl-3">
            Engineering Excellence
          </span>
          <h1 className="heading-xl !text-center md:!text-left !mb-6 !text-textmain">
            NIGHWAN TECH <br />
            <span className="text-brandOrange italic"></span>
          </h1>
          <p className="text-muted !text-center md:!text-left !mx-0 mb-8 opacity-80 max-w-md">
            Engineering your path to growth where your business goals meet our engineering expertise.
          </p>
        </motion.div>

        <div className="flex justify-center md:justify-start w-full mt-2">
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

      <div className="relative flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-lg px-4"
        >
          <div className="absolute -left-2 md:-left-8 top-10 space-y-4 z-20 hidden sm:block">
            {['Quality >', 'Time <', 'Quantity >'].map((text, i) => (
              <div key={i} className={`bg-white shadow-xl px-5 py-2.5 rounded-xl border-l-4 ${i === 1 ? 'border-brandGreen' : 'border-brandOrange'} font-bold text-xs md:text-sm text-textmain whitespace-nowrap`}>
                {text}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[40px] md:rounded-[50px] p-4 border border-gray-100 shadow-2xl overflow-hidden flex justify-center items-center relative z-10">
            <img
              src="https://illustrations.popsy.co/amber/success.svg"
              alt="Nighwan Tech Growth"
              className="w-full h-auto max-h-[300px] md:max-h-[380px] object-contain drop-shadow-xl"
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
    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 py-6 md:py-8 shadow-[0_-15px_40px_rgba(0,0,0,0.04)]">
      <div className="container-custom">
        <div className="relative flex overflow-hidden group select-none items-center">
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-white via-white/40 to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center">
            {[...partners, ...partners, ...partners].map((item, idx) => (
              <img
                key={idx}
                src={item.logo}
                alt={item.name}
                className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

      {/* 🚀 PRE-RENDERING ALL SLIDES (Super Fast Switching) */}

      {/* Slide 0: Growth */}
      <motion.div
        animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 0 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
      >
        <GrowthSection onContactClick={() => openModal(`Hero Section Slider - ${pathname}`)} />
      </motion.div>

      {/* Slide 1: Particle (Now it loads in background and stays ready) */}
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
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="group flex items-center justify-end gap-4 outline-none">
            <span className={`text-[10px] font-black tracking-widest uppercase transition-all duration-300 px-2 py-1 rounded bg-black/5 backdrop-blur-sm
              ${currentSlide === i ? "text-brandOrange" : "text-textmain opacity-0 group-hover:opacity-100"}`}>
              {i === 0 ? "Growth" : i === 1 ? "Neural" : "Identity"}
            </span>
            <div className={`transition-all duration-500 rounded-full border border-black/10
              ${currentSlide === i
                ? "h-12 w-[5px] bg-brandOrange"
                : "h-5 w-[3px] bg-gray-300 group-hover:bg-brandOrange"}`}
            />
          </button>
        ))}
      </div>

      {/* Slide Index Display */}
      <div className="absolute bottom-32 md:bottom-36 left-8 md:left-12 z-50 flex flex-col items-start pointer-events-none">
        <span className="text-[16px] font-black text-brandOrange tracking-tighter drop-shadow-sm">0{currentSlide + 1}</span>
        <div className="w-10 h-[2px] bg-brandOrange/30 my-1" />
        <span className="text-[11px] font-bold text-gray-400">03</span>
      </div>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        canvas { background: transparent !important; }
      `}</style>
    </section>
  );
}