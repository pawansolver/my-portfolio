'use client';

import React from 'react';

// ─── YOUR 10 CLIENT LOGOS ───────────────────────────────────────────────
const clientLogos = [
  "1-pCtuG3JW.png",
  "3-CEOILZa0.png",
  "4-C2bcu4Wf.png",
  "5-Drf9mfAk.png",
  "6-BO8wdywJ.png",
  "7-D2aD-s1S (1).png",
  "8-8MKLDVvj.png",
  "9-Bj4alFPc.png",
  "10-DbttryPl.png",
  "12-B2yOZKxk.png"
];

export default function CompanySlider() {
  // Duplicating the array multiple times to create a flawless, never-ending loop
  const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <>
      {/* 🚀 CSS Animation for Ultra-Smooth Infinite Scroll */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          /* 50s speed for a premium, calm pace. Change 50s to make it faster/slower */
          animation: marquee-scroll 50s linear infinite;
          will-change: transform;
        }
      `}} />

      {/* 🚀 THE PREMIUM LOGO SECTION */}
      <section className="bg-slate-50 py-20 overflow-hidden border-y border-slate-100">

        {/* Section Header */}
        <div className="container-custom flex flex-col items-center text-center mb-16">
          <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange drop-shadow-sm">
            Trusted Partners
          </span>
          <h2 className="heading-xl">
            Powering Industry Titans
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full max-w-[1500px] mx-auto">

          {/* Smooth Fading Edges (Left & Right) */}
          <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* The Scrolling Track */}
          <div className="flex w-fit animate-marquee-scroll hover:[animation-play-state:paused] items-center">
            {scrollingLogos.map((logo, idx) => (
              <div key={idx} className="flex-none w-[180px] md:w-[250px] px-8 flex items-center justify-center">

                {/* 🚀 The "World Class" Hover Effect: Grayscale -> Full Color + Scale */}
                <img
                  src={`/images/${logo}`}
                  alt={`Client Logo ${idx}`}
                  className="max-h-12 md:max-h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 hover:drop-shadow-xl"
                />

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}