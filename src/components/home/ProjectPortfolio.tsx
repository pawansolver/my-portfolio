'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Industrial AI', 'Business ERP', 'Lean Ops', 'Smart Factory', 'Digital Branding'];

const projects = [
  { id: 1, title: 'Custom ERP Hub', category: 'Business ERP', img: '/images/project-erp.png', desc: 'Bespoke operational ecosystems designed for Indian MSME growth.' },
  { id: 2, title: 'Kaizen Intelligence', category: 'Lean Ops', img: '/images/project-lean.png', desc: 'AI-powered Lean Manufacturing and operational waste reduction.' },
  { id: 3, title: 'SmartFactory 4.0', category: 'Smart Factory', img: '/images/project-smart-factory.png', desc: 'Real-time production monitoring and IoT-driven factory connectivity.' },
  { id: 4, title: 'RAG Knowledge Miner', category: 'Industrial AI', img: '/images/project-rag-ai.png', desc: 'Private AI agents for secure enterprise knowledge and document mining.' },
  { id: 5, title: 'Digital Storefront', category: 'Business ERP', img: '/images/project-ecommerce.png', desc: 'High-performance E-commerce ecosystems for global trade scaling.' },
  { id: 6, title: 'Creative Branding', category: 'Digital Branding', img: '/images/project-branding.png', desc: 'Strategic digital marketing and premium corporate identity design.' },
];

export default function ProjectPortfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  if (!isMounted) return null;

  return (
    // 🔥 FIX: py-12 md:py-20 manually set for tight spacing
    <section className="py-8 md:py-12 relative bg-white z-20 overflow-hidden border-b border-slate-100">

      <div className="container-custom flex flex-col items-center">

        {/* --- 1. HEADER --- */}
        {/* 🔥 FIX: mb-10 (mobile) to mb-14 (desktop) to reduce white space */}
        <div className="w-full text-center mb-10 md:mb-14">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Innovation Hub
          </span>
          <h2 className="heading-xl">
            Tech Ecosystem
          </h2>

          {/* Tabs Control - Responsive Scrollable for Mobile */}
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mt-8 overflow-x-auto pb-4 md:pb-0 w-full no-scrollbar px-4 md:px-0 snap-x snap-mandatory">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`snap-center whitespace-nowrap px-6 py-3 md:py-3.5 rounded-full transition-all duration-500 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-[11px] font-black border-2 shrink-0 ${activeTab === cat
                  ? 'bg-brandOrange text-white border-brandOrange shadow-lg shadow-brandOrange/20 md:scale-105'
                  : 'bg-transparent text-slate-500 border-slate-200 hover:border-brandOrange/30 hover:text-brandOrange'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- 2. PROJECT GRID --- */}
        <div className="w-full">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 bg-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end bg-gradient-to-t from-textmain via-textmain/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-brandOrange block mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-xl md:text-[24px] tracking-tight leading-tight mb-2 md:mb-3 uppercase">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-medium text-xs md:text-sm leading-relaxed normal-case line-clamp-2 md:line-clamp-none">
                        {project.desc}
                      </p>
                    </div>

                    {/* Quick Link Arrow */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* --- 3. FOOTER LABEL --- */}
        {/* 🔥 FIX: mt-12 (mobile) to mt-16 (desktop) for tighter section end */}
        <div className="mt-12 md:mt-16 flex justify-center pb-2">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-slate-300">
            Scroll to explore
          </span>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
