'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, TrendingUp, ArrowUpRight, Shield } from 'lucide-react';

// --- Terminal Animation ---
const TypewriterDemo: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullMessage = ">> AI_CORE: ACTIVE >> ANALYZING... >> OPTIMIZED.";

  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timeout = setTimeout(() => {
        setText(fullMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setCurrentIndex(0), 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullMessage]);

  return (
    <div className="w-full bg-slate-50 rounded-xl p-4 md:p-5 font-mono text-[10px] sm:text-[11px] md:text-sm text-brandOrange border border-slate-200 flex items-center gap-2 md:gap-3 shadow-inner overflow-hidden mt-auto">
      <span className="flex gap-1 shrink-0">
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brandOrange animate-pulse" />
      </span>
      <div className="truncate font-bold tracking-tight whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

const BentoCard = ({ title, description, icon, spanCols = 6, delay = 0, children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-brandOrange/30 ${spanCols === 8 ? 'md:col-span-8' : spanCols === 4 ? 'md:col-span-4' : 'md:col-span-6'
        } col-span-12 flex flex-col`}
    >
      <div className="relative z-10 h-full flex flex-col w-full">

        <div className="flex justify-between items-start mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-50 text-brandOrange rounded-[1rem] md:rounded-2xl group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100 shrink-0">
            {icon}
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brandOrange group-hover:border-brandOrange group-hover:bg-orange-50 transition-all shrink-0 bg-white">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-textmain group-hover:text-brandOrange transition-colors uppercase tracking-tight">
            {title}
          </h3>
          <p className="text-[13px] md:text-[14px] leading-relaxed text-brandGreen font-medium opacity-80 mb-4">
            {description}
          </p>
        </div>

        {children && <div className="mt-4 md:mt-6 w-full">{children}</div>}
      </div>
    </motion.div>
  );
};

export default function AISolutionsBentoGrid() {
  return (
    // 🔥 FIX: py-12/20 manually set to reduce global padding gap
    <section className="py-12 md:py-20 bg-white z-20">
      <div className="container-custom">

        {/* --- 🚀 HEADER --- */}
        {/* 🔥 FIX: mb-10 for tighter vertical flow */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Neural Excellence
          </span>

          <h2 className="heading-xl">
            AI SOLUTIONS & INTELLIGENCE
          </h2>

          <p className="text-muted !text-brandGreen !text-sm md:!text-base">
            Future-proof engineering designed to transform raw data into neural power.
          </p>
        </div>

        {/* --- 2. Bento Grid --- */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 md:px-0">
          <BentoCard title="Neural Deployment" description="Real-time ML pipelines with sub-millisecond latency for high-frequency processing." icon={<Cpu size={24} />} spanCols={8} delay={0.1}>
            <TypewriterDemo />
          </BentoCard>
          <BentoCard title="Secure AI" description="Encryption-first neural modeling for critical data safety." icon={<Shield size={24} />} spanCols={4} delay={0.2} />
          <BentoCard title="Custom LLM" description="Bespoke RAG architectures for enterprise knowledge management." icon={<Bot size={24} />} spanCols={4} delay={0.3} />
          <BentoCard title="Data Intelligence" description="Transforming raw data into market trends." icon={<TrendingUp size={24} />} spanCols={8} delay={0.4} />
        </div>

        {/* --- 3. Footer Link --- */}
        {/* 🔥 FIX: mt-10 for tighter gap */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <button className="font-black text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-brandGreen hover:text-brandOrange transition-all duration-300 group flex items-center gap-3">


          </button>
        </div>
      </div>
    </section>
  );
}