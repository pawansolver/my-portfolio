'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'AI Solutions', 'Cloud Tech', 'Fintech', 'Cyber Security'];

const projects = [
  { id: 1, title: 'NeuralPredict AI', category: 'AI Solutions', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800', desc: 'Real-time diagnostics using Neural Networks.' },
  { id: 2, title: 'Nighwan Cloud', category: 'Cloud Tech', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800', desc: 'Auto-scaling serverless infrastructure.' },
  { id: 3, title: 'SecuVault', category: 'Cyber Security', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800', desc: 'Zero-trust biometric encryption.' },
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
    <section className="relative bg-white z-20 overflow-hidden">
      
      <div className="container-custom flex flex-col items-center">
        
        {/* --- 1. HEADER: Synced with heading-xl & brandOrange --- */}
        <div className="w-full max-w-4xl text-center mb-16">
          <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
             
          </span>
          <h2 className="heading-xl">
            Tech Ecosystem<span className="text-textmain"></span>
          </h2>
          
          {/* Tabs Control - Modern Capsule Style */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-7 py-3 rounded-full transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-black border-2 ${
                  activeTab === cat 
                  ? 'bg-brandOrange text-white border-brandOrange shadow-lg scale-105' 
                  : 'bg-transparent text-brandGreen border-slate-100 hover:border-brandOrange/30 hover:text-brandOrange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- 2. PROJECT GRID: Card Sync --- */}
        <div className="w-full">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  
                  {/* Overlay Content: Using brandOrange for category and white for contrast on dark gradient */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-textmain via-textmain/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-black text-[10px] tracking-[0.3em] uppercase text-brandOrange block mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-[22px] tracking-tight leading-tight mb-3 uppercase">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-medium text-[14px] leading-relaxed normal-case">
                        {project.desc}
                      </p>
                    </div>

                    {/* Quick Link Arrow */}
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                         <path d="M7 17L17 7M17 7H7M17 7V17"/>
                       </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* --- 3. FOOTER LABEL --- */}
        <div className="mt-20 flex justify-center pb-8">
           <span className="font-black text-[10px] tracking-[0.8em] uppercase text-slate-300">
              
           </span>
        </div>

      </div>
    </section>
  );
}