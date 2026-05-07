"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AboutMission() {
  // 🔥 LOGIC 100% UNTOUCHED
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // 🔥 CSS SYNC: Global section-padding and deep OLED black background
    <section className="bg-[#050505] relative overflow-hidden z-20 section-padding">

      {/* Background Image Layer with Premium Radial Fade */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] grayscale pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('/images/cloud-devops.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 🔥 AGENCY TRICK: Fades the image smoothly into the black background at the edges
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full flex flex-col items-center justify-center relative z-10"
      >
        <div className="container-custom w-full">

          {/* Top Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-white/10 pb-10 md:pb-16 mb-12 md:mb-20 text-center md:text-left"
          >
            <h2 className="heading-xl !text-white !mb-0 tracking-tight">
              ARCHITECTING <br className="hidden md:block" /> DIGITAL LEGACIES
            </h2>
          </motion.div>

          {/* 2-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-center md:text-left">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 mb-6 justify-center md:justify-start w-full">
                <span className="w-8 h-[1px] bg-brandOrange hidden md:block"></span>
                <p className="text-brandOrange font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  Our Mission
                </p>
              </div>
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight">
                Beyond code, <br className="hidden lg:block" />
                <span className="font-bold">Engineering Impact.</span>
              </h3>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6 md:gap-8 lg:pl-10 lg:border-l border-white/10"
            >
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed !text-center md:!text-left">
                Founded on 25th September 2020, NighwanTech operates at the intersection of Industry 4.0 and uncompromising engineering.
              </p>
              <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed !text-center md:!text-left">
                We bridge the gap between operational strategy and intelligent digital systems. Our mission is to empower Indian MSMEs with affordable, scalable, and AI-driven solutions specifically built for their operational realities.
              </p>

              {/* Stats / Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 md:pt-10 border-t border-white/10 mt-2">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 text-left">
                  <h4 className="text-brandOrange font-black text-lg md:text-xl uppercase tracking-tight mb-1">Industry 4.0</h4>
                  <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Smart Manufacturing</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 text-left">
                  <h4 className="text-brandOrange font-black text-lg md:text-xl uppercase tracking-tight mb-1">Lean Ops</h4>
                  <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">MSME Growth Engine</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Huge Background Typography */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 opacity-[0.03] font-black text-[35vw] md:text-[22vw] select-none text-white pointer-events-none leading-none overflow-hidden z-0 whitespace-nowrap"
        >
          <span>2020</span>
        </div>
      </motion.div>
    </section>
  );
}
