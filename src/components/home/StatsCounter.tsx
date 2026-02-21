'use client';

import React, { useEffect, useState } from 'react';
import { Users, Globe, CheckCircle, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const SlotNumber = ({ val }: { val: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const allDigits = [...digits, ...digits, ...digits]; 

  if (!isMounted) return <span className="font-black">{val}</span>;

  return (
    // 'py-1' and 'h-[1.2em]' ensures top/bottom of numbers are never clipped
    <div className="flex overflow-hidden h-[1.2em] py-1 items-center font-black tabular-nums leading-none">
      {val.split('').map((char, i) => {
        if (isNaN(parseInt(char))) return <span key={i} className="px-0.5">{char}</span>;
        const targetIndex = parseInt(char) + 20; 
        return (
          <div key={i} className="relative w-[0.65em] h-[1.2em] overflow-hidden flex justify-center">
            <motion.div
              initial={{ y: "0%" }}
              whileInView={{ y: `-${(targetIndex * 100) / 30}%` }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              viewport={{ once: true }}
              className="absolute top-0 flex flex-col items-center"
            >
              {allDigits.map((d, idx) => (
                <div key={idx} className="h-[1.2em] flex items-center justify-center">
                  {d}
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    { id: 1, icon: <Users size={16} />, number: "18", suffix: "+", label: "YEARS EXP" },
    { id: 2, icon: <Globe size={16} />, number: "150", suffix: "+", label: "PROJECTS" },
    { id: 3, icon: <CheckCircle size={16} />, number: "99", suffix: "%", label: "SUCCESS" },
    { id: 4, icon: <Calendar size={16} />, number: "2020", suffix: "", label: "FOUNDED" },
    { id: 5, icon: <Clock size={16} />, number: "02", suffix: "m", label: "RESPONSE" },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        
        {/* Header: Strictly Global CSS */}
        <h2 className="heading-xl">
          NUMBERS THAT DEFINE EXCELLENCE<span className="text-textmain"></span>
        </h2>
        <p className="text-muted">
          Our track record is built on precision, innovation, and consistent delivery.
        </p>

        {/* Stats Grid: Fixed Border & Alignment */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mt-16 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              // border-slate-300 for visible borders, p-6 for compact box
              className="relative p-6 md:p-8 rounded-[2rem] bg-slate-50/50 border-2 border-slate-300 flex flex-col items-center text-center transition-all duration-500 hover:border-brandOrange hover:bg-white group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-white text-brandOrange flex items-center justify-center mb-6 border border-slate-200 shadow-sm group-hover:bg-brandOrange group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>

              {/* Number Container - Increased height to prevent clipping */}
              <div className="flex items-baseline justify-center text-brandGreen mb-2 h-12">
                <div className="text-3xl md:text-4xl font-black tracking-tighter">
                  <SlotNumber val={stat.number} />
                </div>
                <span className="text-lg md:text-xl font-black ml-0.5 self-baseline">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-textmain font-extrabold uppercase tracking-widest text-[10px] md:text-[11px] opacity-80">
                {stat.label}
              </p>
              
              {/* Decorative Line */}
              <div className="mt-6 w-8 h-[2px] bg-slate-300 group-hover:bg-brandOrange transition-all rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;