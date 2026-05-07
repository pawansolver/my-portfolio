'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'AI Solutions', 'Cloud Tech', 'Fintech', 'Cyber Security'];

const projects = [
  { id: 1, title: 'NeuralPredict Health AI', category: 'AI Solutions', img: '/images/project-1.png', desc: 'Real-time patient diagnostics using Deep Learning and Neural Networks.' },
  { id: 2, title: 'Nighwan Cloud Core', category: 'Cloud Tech', img: '/images/project-2.png', desc: 'Auto-scaling serverless infrastructure for global enterprise apps.' },
  { id: 3, title: 'SecuVault Enterprise', category: 'Cyber Security', img: '/images/project-3.png', desc: 'Zero-trust security layer with multi-factor biometric encryption.' },
  { id: 4, title: 'AlgoTrade Pro', category: 'Fintech', img: '/images/project-4.png', desc: 'High-frequency trading bot with real-time AI signal analysis.' },
  { id: 5, title: 'VisionAI Surveillance', category: 'AI Solutions', img: '/images/project-5.png', desc: 'Smart object detection and behavioral analysis for retail.' },
  { id: 6, title: 'N-Node Blockchain', category: 'Fintech', img: '/images/project-6.png', desc: 'Decentralized ledger for secure global supply chain tracking.' },
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
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#f8f8f8_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* --- HEADER: Global Sync --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
              Selected Works
            </span>
            <h2 className="heading-xl !text-left !mx-0">
              Engineering <span className="text-textmain">Next-Gen</span> <br className="hidden md:block" /> Digital Solutions
            </h2>
          </div>

          {/* Tabs Control - Synced with Brand Colors */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-full h-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] rounded-full transition-all duration-500 ${activeTab === cat
                  ? 'bg-brandOrange text-white shadow-lg'
                  : 'text-slate-500 hover:text-brandGreen'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- PORTFOLIO GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-white via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-black text-[10px] tracking-[0.3em] uppercase text-brandOrange block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-textmain font-bold text-[22px] tracking-tight leading-tight mb-3 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-brandGreen font-medium text-[14px] leading-relaxed opacity-90">
                      {project.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 bg-white shadow-md text-brandOrange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center pb-12">
        <span className="font-black text-[10px] tracking-[1em] uppercase text-slate-300">
          Curated Excellence
        </span>
      </div>
    </section>
  );
}
