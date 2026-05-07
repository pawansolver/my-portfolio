"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const cards = [
  {
    title: "Who We Are",
    description: "Innovators in AI-powered solutions, bridging complex ideas with digital reality.",
    bgColor: "bg-brand-dark",
    textColor: "text-white"
  },
  {
    title: "What We Think",
    description: "Intelligence is the core of future growth. We believe in tech that empowers humans.",
    bgColor: "bg-brand-orange",
    textColor: "text-white"
  },
  {
    title: "Our Products",
    description: "Explore our AI-powered ERP, analytics, and SaaS products built for scale.",
    bgColor: "bg-white",
    textColor: "text-brand-dark"
  }
];

const HorizontalScrollCards = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth transform mapping for a professional feel
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-light">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Progress Line (Top) */}
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-brand-orange z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <motion.div
          style={{ x }}
          className="flex h-screen min-w-[200%] items-center"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex h-full w-screen items-center justify-center px-6 md:px-20"
            >
              {/* Card Container using card-premium logic */}
              <div
                className={`${card.bgColor} relative flex h-[80vh] w-full flex-col justify-center rounded-[3rem] p-10 md:p-24 shadow-2xl border border-slate-100 overflow-hidden group`}
              >
                {/* Visual Accent (Subtle) */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] group-hover:bg-brand-orange/20 transition-all duration-700" />

                <div className="relative z-10 max-w-4xl">
                  {/* Global Cap Class */}
                  <span className={`cap-orange ${card.textColor === 'text-white' ? 'opacity-60' : ''}`}>
                    Insight 0{index + 1}
                  </span>
                  
                  {/* Global Heading Scale */}
                  <h2 className={`h-hero mb-8 ${card.textColor}`}>
                    {card.title}
                  </h2>
                  
                  {/* Global Text Class */}
                  <p className={`text-p text-xl md:text-3xl max-w-2xl mb-12 ${
                    card.textColor === 'text-white' ? 'text-white/80' : 'text-brand-gray'
                  }`}>
                    {card.description}
                  </p>
                  
                  <div className="flex gap-6">
                    <button className={card.bgColor === 'bg-white' ? 'btn-primary' : 'btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-dark'}>
                      Learn More
                    </button>
                    
                    <button className={`hidden sm:flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:gap-5 ${card.textColor}`}>
                      Scroll to explore <FiArrowRight />
                    </button>
                  </div>
                </div>

                {/* Counter for that premium look */}
                <div className={`absolute bottom-12 right-12 text-[120px] font-black leading-none opacity-5 select-none ${card.textColor}`}>
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
