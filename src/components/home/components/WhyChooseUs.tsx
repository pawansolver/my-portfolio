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
    // 🔥 FIX: py-10 md:py-20 manually set to reduce global padding gaps
    <section className="py-10 md:py-20 bg-white relative z-10 overflow-hidden">
      <div className="container-custom">

        {/* --- Header --- */}
        {/* 🔥 FIX: mb-8 md:mb-14 for tighter vertical space */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-14">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Our Core Edge
          </span>
          <h2 className="heading-xl !mb-4">
            Why <span className="text-brandOrange">NighwanTech</span>?
          </h2>
          <p className="text-muted !text-brandGreen max-w-3xl !text-sm md:!text-base">
            Engineering excellence designed for demanding digital landscapes and future-scale impact.
          </p>
        </div>

        {/* --- Desktop Accordion (LG+) --- */}
        <div className="hidden lg:flex h-[450px] w-full gap-3 items-stretch max-w-7xl mx-auto">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                  ${isExpanded
                    ? 'flex-[5] bg-white border-brandOrange shadow-2xl scale-[1.01]'
                    : 'flex-[1] bg-slate-50 border-slate-300 hover:border-brandOrange/50 hover:bg-white'
                  }`}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base font-black uppercase tracking-tight transition-all duration-500
                      ${isExpanded ? 'text-textmain' : 'text-slate-500 [writing-mode:vertical-lr] rotate-180'}
                    `}>
                      {point.title}
                    </h3>

                    <div className={`rounded-full p-2 border-2 transition-all duration-500 shrink-0
                      ${isExpanded
                        ? 'bg-brandOrange border-brandOrange text-white shadow-lg'
                        : 'bg-white border-slate-400 text-brandOrange'
                      }`}
                    >
                      {isExpanded ? <X size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-4"
                      >
                        <p className="text-textmain text-2xl md:text-3xl font-bold leading-tight max-w-lg mb-8">
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
        {/* 🔥 FIX: gap-3 for more compact list */}
        <div className="lg:hidden flex flex-col gap-3 w-full max-w-2xl mx-auto px-4 md:px-0">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                className={`rounded-2xl border-2 transition-all duration-500
                  ${isExpanded
                    ? 'bg-white border-brandOrange shadow-xl p-6'
                    : 'bg-slate-50 border-slate-300 p-5'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-[13px] font-bold uppercase tracking-wider ${isExpanded ? 'text-brandOrange' : 'text-textmain'}`}>
                    {point.title}
                  </h3>
                  <div className={`rounded-full p-1.5 border-2 transition-all shrink-0
                    ${isExpanded ? 'bg-brandOrange border-brandOrange text-white' : 'bg-white border-slate-400 text-brandOrange'}
                  `}>
                    {isExpanded ? <X size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
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
                      <div className="mt-4">
                        <p className="text-textmain text-sm md:text-base font-bold leading-relaxed mb-4">
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