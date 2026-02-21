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
      setTimeout(() => setCurrentIndex(0), 3000);
    }
  }, [currentIndex]);

  return (
    // Updated: text size ko text-sm se md:text-base (bada) kiya hai aur padding badhai hai
    <div className="w-full bg-slate-50 rounded-xl p-5 font-mono text-sm md:text-base text-brandOrange border-2 border-slate-200 flex items-center gap-3 shadow-inner">
      <span className="flex gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-brandOrange animate-pulse" />
      </span>
      <div className="truncate font-bold tracking-tight lg:tracking-normal whitespace-nowrap">
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
      className={`relative overflow-hidden bg-white border-2 border-zinc-300 rounded-[2rem] p-8 group transition-all duration-500 hover:shadow-2xl hover:border-brandOrange/30 ${
        spanCols === 8 ? 'md:col-span-8' : spanCols === 4 ? 'md:col-span-4' : 'md:col-span-6'
      } col-span-12`}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-800 rounded-2xl group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 shadow-sm border-2 border-slate-100">
            {icon}
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brandOrange group-hover:border-brandOrange/20 transition-all">
             <ArrowUpRight size={18} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-textmain group-hover:text-brandOrange transition-colors uppercase tracking-tight">
            {title}
          </h3>
          <p className="text-[14px] leading-relaxed text-brandGreen font-medium opacity-80">
            {description}
          </p>
        </div>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </motion.div>
  );
};

export default function AISolutionsBentoGrid() {
  return (
    <section className="bg-white z-20 overflow-visible py-20">
      <div className="container-custom">
        
        {/* --- 🚀 HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
             Neural Excellence
          </span>
          
          <h2 className="heading-xl">
            AI SOLUTIONS & INTELLIGENCE
          </h2>
          
          <p className="text-muted !text-brandGreen">
            Future-proof engineering designed to transform raw data into neural power.
          </p>
        </div>

        {/* --- 2. Bento Grid --- */}
        <div className="grid grid-cols-12 gap-6">
          <BentoCard title="Neural Deployment" description="Real-time ML pipelines with sub-millisecond latency for high-frequency processing." icon={<Cpu size={22} />} spanCols={8} delay={0.1}>
            <TypewriterDemo />
          </BentoCard>
          <BentoCard title="Secure AI" description="Encryption-first neural modeling for critical data safety." icon={<Shield size={22} />} spanCols={4} delay={0.2} />
          <BentoCard title="Custom LLM" description="Bespoke RAG architectures for enterprise knowledge management." icon={<Bot size={22} />} spanCols={4} delay={0.3} />
          <BentoCard title="Data Intelligence" description="Transforming raw data into market trends." icon={<TrendingUp size={22} />} spanCols={8} delay={0.4} />
        </div>

        {/* --- 3. Footer Link --- */}
        <div className="mt-20 flex justify-center">
            <button className="font-black text-[12px] tracking-[0.3em] uppercase text-brandGreen hover:text-brandOrange transition-all duration-300 group flex items-center gap-3">
              Explore Neural Framework 
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
}