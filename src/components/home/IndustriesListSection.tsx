'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiDollarSign, FiShoppingCart, FiBook, FiBriefcase, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const industries = [
  { id: 1, name: "Healthcare", icon: <FiHeart className="w-5 h-5" /> },
  { id: 2, name: "Fintech", icon: <FiDollarSign className="w-5 h-5" /> },
  { id: 3, name: "E-commerce", icon: <FiShoppingCart className="w-5 h-5" /> },
  { id: 4, name: "Education", icon: <FiBook className="w-5 h-5" /> },
  { id: 5, name: "Enterprise", icon: <FiBriefcase className="w-5 h-5" /> }
];

const detailedList = [
  "Advertising Agencies", "Government & Municipal", "Financial Institutions",
  "Museums & Education", "Manufacturing & Industrial", "Non-Profit Organizations"
];

export default function IndustriesSection() {
  const [init, setInit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      color: { value: "#FF6B00" },
      links: { color: "#FF6B00", distance: 150, enable: true, opacity: 0.15, width: 1 },
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
      number: { value: 30, density: { enable: true, area: 1000 } },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 200, links: { opacity: 0.3 } } },
    },
    detectRetina: true,
  }), []);

  if (!isMounted) return null;

  return (
    // py-32 provides the 'box space' at top and bottom
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden z-10">
      
      {init && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles id="industryParticles" className="h-full w-full" options={particlesOptions as any} />
        </div>
      )}

      <div className="container-custom relative z-10">
        
        {/* --- Header: Clear and Spaced --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Our Reach
          </span>
          <h2 className="heading-xl !mb-6">
            Empowering The <span className="text-black">Digital Era</span>
          </h2>
          <p className="text-muted !text-brandGreen !max-w-3xl">
            Custom technology frameworks designed for ambitious teams across global markets. 
            High-performance architecture built for future-scale impact.
          </p>
        </div>

        {/* --- Grid: Increased gap for better box feel --- */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* LEFT: Cards Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {industries.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,107,0,0.1)]"
                >
                  <div className="w-12 h-12 mb-6 bg-slate-50 text-brandOrange rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-colors duration-500 hover:bg-brandOrange hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[12px] uppercase tracking-widest text-textmain leading-tight">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
              
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: '#000' }}
                className="p-8 rounded-[2rem] bg-textmain text-white flex items-center justify-center shadow-xl group cursor-pointer transition-all duration-500"
              >
                <FiArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Checklist & CTA with more space */}
          <div className="order-1 lg:order-2 flex flex-col justify-center h-full pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-12">
              {detailedList.map((item, idx) => (
                <motion.div 
                  key={`detail-${idx}`} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-brandOrange/10 flex items-center justify-center shrink-0 group-hover:bg-brandOrange transition-all duration-300">
                    <FiCheckCircle className="text-brandOrange group-hover:text-white w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-[13px] uppercase tracking-tight text-textmain group-hover:text-brandGreen transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="btn-primary !bg-textmain hover:!bg-brandOrange !px-10 !py-5 flex items-center gap-4 group">
                LAUNCH PROJECT
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}