"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { MessageCircle, X, ChevronUp, ChevronDown } from "lucide-react";
import VideoSection from "./Video";
import { useModal } from "@/components/context/ModalContext";

// 🚀 DYNAMIC IMPORT
const ParticleSection = dynamic(() => import("./Particle"), { ssr: false });

const partners = [
  { name: "Partner 1", logo: "/images/services/1.png" },
  { name: "Partner 2", logo: "/images/services/2.png" },
  { name: "Partner 3", logo: "/images/services/3.png" },
  { name: "Partner 4", logo: "/images/services/4.png" },
  { name: "Partner 5", logo: "/images/services/5.png" },
  { name: "Partner 6", logo: "/images/services/6.png" },
  { name: "Partner 7", logo: "/images/services/7.png" },
  { name: "Partner 8", logo: "/images/services/8.png" },
  { name: "Partner 9", logo: "/images/services/9.png" },
  { name: "Partner 10", logo: "/images/services/10.png" },
  { name: "Partner 11", logo: "/images/services/11.png" },
  { name: "Partner 12", logo: "/images/services/12.png" },
];

// --- 🏗️ Home Contact Hub (WhatsApp) ---
const HomeContactHub = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/919523922090?text=${encodeURIComponent("Hi Nighwan Tech, I'm interested in your services!")}`;

  return (
    <div className="fixed bottom-6 md:bottom-8 right-4 md:right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 mb-3 relative max-w-[200px]"
          >
            <button onClick={() => setShowGreeting(false)} className="absolute -top-2 -right-2 bg-slate-100 rounded-full p-1 text-slate-400 hover:text-brandOrange">
              <X size={10} />
            </button>
            <p className="text-[11px] font-bold text-textmain leading-tight">
              Hey! 👋 Looking for <span className="text-brandOrange">Tech Architects</span>? We're online!
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative group"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute right-16 bg-white text-textmain text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap border border-slate-100 pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

// --- 🚀 Growth Section ---
const GrowthSection = ({ onContactClick, slideData }: { onContactClick: () => void, slideData?: any }) => (
  <div className="w-full h-full bg-[#fcfcfc] flex items-center justify-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brandOrange/5 rounded-full blur-[100px] md:blur-[120px] -z-10" />
    <div className="container-custom h-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 pt-24 pb-28 md:pt-32 md:pb-40">
      <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center mt-8 md:mt-0">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center md:items-start">
          <span className="text-brandOrange font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block border-l-0 md:border-l-4 border-brandOrange md:pl-3">
            Engineering Excellence
          </span>
          <h1 className="heading-xl !text-center md:!text-left !mb-4 md:!mb-6 !text-textmain">
            {slideData?.title ? slideData.title : "NIGHWAN TECH"} <br />
          </h1>
          <p className="text-muted !text-center md:!text-left !mx-0 mb-6 md:mb-8 opacity-80 max-w-md !text-sm md:!text-base">
            {slideData?.description ? slideData.description : "Engineering your path to growth where your business goals meet our engineering expertise."}
          </p>
        </motion.div>
        <div className="flex justify-center md:justify-start w-full">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onContactClick} className="btn-primary">
            Get in Touch
          </motion.button>
        </div>
      </div>
      <div className="relative flex justify-center items-center px-4 md:px-0">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg">
          <div className="absolute -left-2 md:-left-8 top-10 space-y-4 z-20 hidden sm:block">
            {['Quality >', 'Time <', 'Quantity >'].map((text, i) => (
              <div key={i} className={`bg-white shadow-xl px-4 md:px-5 py-2 md:py-2.5 rounded-xl border-l-4 ${i === 1 ? 'border-brandGreen' : 'border-brandOrange'} font-bold text-[11px] md:text-sm text-textmain whitespace-nowrap`}>
                {text}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-[30px] md:rounded-[50px] p-4 border border-gray-100 shadow-xl md:shadow-2xl overflow-hidden flex justify-center items-center relative z-10">
            <img src="https://illustrations.popsy.co/amber/success.svg" alt="Nighwan Tech Growth" className="w-full h-auto max-h-[220px] sm:max-h-[300px] md:max-h-[380px] object-contain drop-shadow-lg md:drop-shadow-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const LogoCloudPremium = () => (
  <div className="absolute bottom-0 left-0 w-full z-40">
    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 md:py-6 shadow-[0_-15px_40px_rgba(0,0,0,0.04)]">
      <div className="container-custom">
        <div className="relative flex overflow-hidden group select-none items-center">
          <div className="absolute left-0 top-0 w-12 md:w-40 h-full bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-12 md:w-40 h-full bg-gradient-to-l from-white via-white/40 to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-32 items-center">
            {[...partners, ...partners, ...partners].map((item, idx) => (
              <img key={idx} src={item.logo} alt={item.name} className="h-8 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [apiSlides, setApiSlides] = useState<any[]>([]);
  const { openModal } = useModal();
  const pathname = usePathname();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/slider");
        const json = await res.json();
        if (json.success) setApiSlides(json.data);
      } catch (err) {
        console.error("Slider fetch error:", err);
      }
    };
    fetchSlides();
  }, []);

  const growthData = apiSlides.find(slide => slide.componentType === 'growth');

  return (
    <section className="relative w-full h-[100dvh] bg-white overflow-hidden m-0 p-0 block">

      <HomeContactHub />

      <motion.div animate={{ opacity: currentSlide === 0 ? 1 : 0 }} transition={{ duration: 0.8 }} className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 0 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}>
        <GrowthSection
          slideData={growthData}
          onContactClick={() => openModal(`Hero Section Slider - ${pathname}`)}
        />
      </motion.div>

      <motion.div animate={{ opacity: currentSlide === 1 ? 1 : 0 }} transition={{ duration: 0.8 }} className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 1 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}>
        <ParticleSection />
      </motion.div>

      <motion.div animate={{ opacity: currentSlide === 2 ? 1 : 0 }} transition={{ duration: 0.8 }} className={`absolute inset-0 w-full h-full transition-all ${currentSlide === 2 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}>
        <VideoSection />
      </motion.div>

      <LogoCloudPremium />

      {/* 🌟 🛠️ FIX: Mobile Horizontal, Desktop Vertical Glass Slider */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white/90 backdrop-blur-2xl px-5 py-2 md:p-3 rounded-full border border-white/60 shadow-2xl drop-shadow-md">

        {/* Previous Slide Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
          className="p-1 md:p-3 rounded-full text-slate-600 hover:text-brandOrange hover:bg-slate-100/50 transition-all duration-300"
          aria-label="Previous Slide"
        >
          {/* Mobile par left arrow ban jayega (-rotate-90), Desktop par Up rahega */}
          <ChevronUp className="w-4 h-4 md:w-5 md:h-5 -rotate-90 md:rotate-0" strokeWidth={2.5} />
        </button>

        {/* Animated Dynamic Label */}
        <div className="w-20 h-6 md:h-28 md:w-auto flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              // Mobile par horizontal text, Desktop (md:) par vertical text
              className="text-[10px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.35em] uppercase text-textmain md:[writing-mode:vertical-rl] md:rotate-180 absolute whitespace-nowrap"
            >
              {currentSlide === 0 ? (growthData?.label ? growthData.label : "Growth") : currentSlide === 1 ? "Neural" : "Identity"}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Next Slide Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
          className="p-1 md:p-3 rounded-full text-slate-600 hover:text-brandOrange hover:bg-slate-100/50 transition-all duration-300"
          aria-label="Next Slide"
        >
          {/* Mobile par right arrow ban jayega (-rotate-90), Desktop par Down rahega */}
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 -rotate-90 md:rotate-0" strokeWidth={2.5} />
        </button>

      </div>

      {/* Bottom Counter Logic Untouched */}
      <div className="absolute bottom-20 md:bottom-28 left-6 md:left-12 z-50 flex flex-col items-start pointer-events-none drop-shadow-lg">
        <span className="text-[14px] md:text-[16px] font-black text-brandOrange tracking-tighter drop-shadow-[0_0_8px_rgba(255,165,0,0.4)]">0{currentSlide + 1}</span>
        <div className="w-8 md:w-10 h-[2px] bg-brandOrange/60 my-1 shadow-[0_0_5px_rgba(255,165,0,0.3)]" />
        <span className="text-[10px] md:text-[11px] font-bold text-slate-400 drop-shadow-md">03</span>
      </div>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        canvas { background: transparent !important; }
      `}</style>
    </section>
  );
}