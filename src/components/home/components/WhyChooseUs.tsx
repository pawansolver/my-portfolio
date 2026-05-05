'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const dataPoints = [
  { id: 'enterprise-ai', title: 'Enterprise AI', description: 'Powering business with Custom LLMs and RAG pipelines for seamless knowledge automation.', subServices: ['GPTs', 'AI', 'NLP'] },
  { id: 'fintech', title: 'Fintech', description: 'Secure, high-frequency trading systems and PCI-DSS compliant payment gateways.', subServices: ['Payments', 'Security'] },
  { id: 'web3', title: 'Web3', description: 'Next-gen smart contracts, dApps, and private blockchain infrastructure.', subServices: ['Solidity', 'DeFi'] },
  { id: 'scalable-saas', title: 'Scalable SaaS', description: 'High-performance multi-tenant cloud architectures built to scale with growth.', subServices: ['Cloud', 'K8s'] },
  { id: 'health-tech', title: 'Health-Tech', description: 'Safe and secure HIPAA-compliant software for remote patient monitoring.', subServices: ['IoMT', 'Privacy'] },
  { id: 'logistics', title: 'Logistics', description: 'Optimize supply chain with real-time tracking and AI-driven route optimization.', subServices: ['IoT', 'Fleet'] }
];

const WhyChooseUs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isMounted) return null;

  return (
    // 🛠️ FIX: py-10 md:py-20 ko kam karke py-8 md:py-12 kiya taaki screen par fit aaye
    <section className="py-8 md:py-12 bg-white relative z-10 overflow-hidden">
      <div className="container-custom">

        {/* --- Header --- */}
        {/* 🛠️ FIX: mb-8 md:mb-14 ko mb-6 md:mb-10 kiya vertical space bachane ke liye */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-10">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-3 block text-brandOrange">
            Our Core Edge
          </span>
          <h2 className="heading-xl !mb-2">
            Why <span className="text-brandOrange">NighwanTech</span>?
          </h2>
          <p className="text-muted !text-brandGreen max-w-3xl !text-sm md:!text-base">
            Engineering excellence designed for demanding digital landscapes and future-scale impact.
          </p>
        </div>

        {/* --- Desktop Accordion (LG+) --- */}
        {/* 🛠️ FIX: h-[450px] ko h-[380px] kiya taaki laptop par niche scroll na karna pade */}
        <div className="hidden lg:flex h-[380px] w-full gap-3 items-stretch max-w-7xl mx-auto">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                /* 🛠️ FIX: border-slate-300 ko border-slate-400 kiya for darker borders */
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                  ${isExpanded
                    ? 'flex-[5] bg-white border-brandOrange shadow-2xl scale-[1.01]'
                    : 'flex-[1] bg-slate-50 border-slate-400 hover:border-brandOrange/50 hover:bg-white'
                  }`}
              >
                <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-black uppercase tracking-tight transition-all duration-500
                      ${isExpanded ? 'text-textmain' : 'text-slate-600 [writing-mode:vertical-lr] rotate-180'}
                    `}>
                      {point.title}
                    </h3>

                    <div className={`rounded-full p-2 border-2 transition-all duration-500 shrink-0
                      ${isExpanded
                        ? 'bg-brandOrange border-brandOrange text-white shadow-lg'
                        : 'bg-white border-slate-400 text-brandOrange'
                      }`}
                    >
                      {isExpanded ? <X size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-2"
                      >
                        {/* 🛠️ FIX: text size 3xl se 2xl kiya taaki chhote height me fit aaye */}
                        <p className="text-textmain text-xl md:text-2xl font-bold leading-tight max-w-lg mb-6">
                          {point.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {point.subServices.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-black uppercase tracking-widest text-brandGreen bg-brandGreen/5 px-4 py-2 rounded-full border-2 border-brandGreen/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Mobile Accordion (Below LG) --- */}
        {/* 🛠️ FIX: gap-3 ko gap-2 kiya taaki phone par ek screen me zyada cards aayein */}
        <div className="lg:hidden flex flex-col gap-2 w-full max-w-2xl mx-auto px-4 md:px-0">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                /* 🛠️ FIX: p-5 ko p-4 kiya aur border-slate-300 ko border-slate-400 (Darker) kiya */
                className={`rounded-2xl border-2 transition-all duration-500
                  ${isExpanded
                    ? 'bg-white border-brandOrange shadow-xl p-5'
                    : 'bg-slate-50 border-slate-400 p-4'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-[12px] font-bold uppercase tracking-wider ${isExpanded ? 'text-brandOrange' : 'text-textmain'}`}>
                    {point.title}
                  </h3>
                  <div className={`rounded-full p-1 border-2 transition-all shrink-0
                    ${isExpanded ? 'bg-brandOrange border-brandOrange text-white' : 'bg-white border-slate-400 text-brandOrange'}
                  `}>
                    {isExpanded ? <X size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3">
                        <p className="text-textmain text-[13px] font-bold leading-relaxed mb-3">
                          {point.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {point.subServices.map((tag, i) => (
                            <span key={i} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-brandGreen bg-brandGreen/5 px-3 py-1.5 rounded-full border-2 border-brandGreen/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;