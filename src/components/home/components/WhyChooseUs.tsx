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
    <section className="relative w-full min-h-screen md:h-screen bg-white overflow-hidden z-10 flex flex-col justify-center py-10 md:py-0">
      <div className="container-custom">

        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="font-black text-[10px] tracking-[0.4em] uppercase mb-2 block text-brandOrange">
              Our Core Edge
          </span>
          <h2 className="heading-xl !mb-2">
            Why <span className="text-brandOrange">NighwanTech</span>?
          </h2>
          <p className="text-muted !text-brandGreen max-w-2xl !text-sm md:!text-base">
            Engineering excellence designed for demanding digital landscapes and future-scale impact.
          </p>
        </div>

        {/* --- Desktop Accordion --- */}
        <div className="hidden lg:flex h-[380px] md:h-[400px] w-full gap-3 items-stretch px-4">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                className={`relative cursor-pointer overflow-hidden rounded-[1.8rem] border-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                  ${isExpanded
                    ? 'flex-[5] bg-white border-brandOrange shadow-2xl' // Expanded border dark orange
                    : 'flex-[1] bg-slate-50 border-zinc-300 hover:border-brandOrange hover:bg-white' // Normal border dark zinc
                  }`}
              >
                <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base font-black uppercase tracking-tight transition-all duration-500
                      ${isExpanded ? 'text-textmain' : 'text-slate-600 [writing-mode:vertical-lr] rotate-180'}
                    `}>
                      {point.title}
                    </h3>

                    <div className={`rounded-full p-1.5 border-2 transition-all duration-500
                      ${isExpanded
                        ? 'bg-brandOrange border-brandOrange text-white'
                        : 'bg-white border-zinc-400 text-brandOrange'
                      }`}
                    >
                      {isExpanded ? <X size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-2"
                      >
                        <p className="text-textmain text-lg md:text-2xl font-bold leading-tight max-w-lg">
                          {point.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {point.subServices.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[8px] font-black uppercase tracking-widest text-brandGreen bg-brandGreen/5 px-3 py-1.5 rounded-full border-2 border-brandGreen/30"
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

        {/* --- Mobile Accordion --- */}
        <div className="lg:hidden flex flex-col gap-2 px-4">
          {dataPoints.map((point, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={point.id}
                onClick={() => toggleCard(index)}
                className={`rounded-xl border-2 transition-all duration-300
                  ${isExpanded
                    ? 'bg-white border-brandOrange shadow-lg p-5' // Mobile border dark orange
                    : 'bg-slate-50 border-zinc-300 p-4' // Mobile border dark zinc
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-[12px] font-bold uppercase tracking-wider ${isExpanded ? 'text-brandOrange' : 'text-textmain'}`}>
                    {point.title}
                  </h3>
                  <div className={`rounded-full p-1 border-2 transition-all
                    ${isExpanded ? 'bg-brandOrange border-brandOrange text-white' : 'bg-white border-zinc-400 text-brandOrange'}
                  `}>
                    {isExpanded ? <X size={12} /> : <Plus size={12} />}
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
                        <p className="text-textmain text-sm font-bold leading-snug mb-3">
                          {point.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {point.subServices.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[7px] font-black uppercase tracking-widest text-brandGreen bg-brandGreen/5 px-2 py-1 rounded-full border border-brandGreen/30">
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