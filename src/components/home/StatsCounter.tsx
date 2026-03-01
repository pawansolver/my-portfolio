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
    { id: 1, icon: <Users size={20} />, number: "18", suffix: "+", label: "YEARS EXP" },
    { id: 2, icon: <Globe size={20} />, number: "150", suffix: "+", label: "PROJECTS" },
    { id: 3, icon: <CheckCircle size={20} />, number: "99", suffix: "%", label: "SUCCESS" },
    { id: 4, icon: <Calendar size={20} />, number: "2020", suffix: "", label: "FOUNDED" },
    { id: 5, icon: <Clock size={20} />, number: "02", suffix: "m", label: "RESPONSE" },
  ];

  return (
    // 🔥 FIX: 'section-padding' hata kar 'py-10 md:py-16' (kam space) laga diya hai
    <section className="py-10 md:py-16 bg-white">
      <div className="container-custom">

        {/* Global Heading Sync */}
        {/* 🔥 FIX: mb-16 se mb-10/12 kar diya gap aur kam karne ke liye */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="heading-xl">
            NUMBERS THAT DEFINE EXCELLENCE
          </h2>
          <p className="text-muted">
            Our track record is built on precision, innovation, and consistent delivery.
          </p>
        </div>

        {/* Grid: Mobile (1 Col Horizontal Cards) | Desktop (5 Col Vertical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-row md:flex-col items-center md:text-center transition-all duration-500 hover:border-brandOrange hover:bg-white hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Icon - Left side on Mobile, Top on Desktop */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1rem] md:rounded-2xl bg-white text-brandOrange flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 shrink-0">
                {stat.icon}
              </div>

              {/* Text Wrapper */}
              <div className="ml-5 md:ml-0 md:mt-6 flex flex-col items-start md:items-center w-full">
                <div className="flex items-baseline text-brandGreen h-10 md:h-12">
                  <div className="text-3xl md:text-4xl font-black tracking-tighter">
                    <SlotNumber val={stat.number} />
                  </div>
                  <span className="text-xl md:text-2xl font-black ml-1 self-baseline">
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-textmain font-extrabold uppercase tracking-[0.15em] text-[10px] md:text-[11px] opacity-60 mt-1 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </p>
              </div>

              {/* Subtle Arrow for Mobile only */}
              <div className="md:hidden ml-auto pr-2">
                <div className="w-2 h-2 rounded-full bg-brandOrange/20 group-hover:bg-brandOrange transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;