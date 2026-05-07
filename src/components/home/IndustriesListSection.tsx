'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiDollarSign, FiShoppingCart, FiBook, FiBriefcase, FiArrowRight, FiCheckCircle, FiUsers } from 'react-icons/fi';
import { useEffect, useState, useMemo } from "react";
import Link from 'next/link';

// 🔹 Relative path for Modal Context
import { useModal } from '@/components/context/ModalContext';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const industries = [
  { id: 1, name: "Healthcare", slug: "healthcare", icon: <FiHeart className="w-5 h-5" /> },
  { id: 2, name: "Fintech", slug: "fintech", icon: <FiDollarSign className="w-5 h-5" /> },
  { id: 3, name: "E-commerce", slug: "e-commerce", icon: <FiShoppingCart className="w-5 h-5" /> },
  { id: 4, name: "Education", slug: "education", icon: <FiBook className="w-5 h-5" /> },
  { id: 5, name: "Enterprise", slug: "enterprise", icon: <FiBriefcase className="w-5 h-5" /> },
  { id: 6, name: "HRMS", slug: "hrms", icon: <FiUsers className="w-5 h-5" /> }
];

const detailedList = [
  "Advertising Agencies", "Government & Municipal", "Financial Institutions",
  "Museums & Education", "Manufacturing & Industrial", "Non-Profit Organizations"
];

export default function IndustriesSection() {
  const [init, setInit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { openModal } = useModal();

  useEffect(() => {
    setIsMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      color: { value: "#334155" },
      links: {
        color: "#64748b",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5,
        outModes: { default: "bounce" }
      },
      number: { value: 35, density: { enable: true, area: 900 } },
      opacity: {
        value: { min: 0.3, max: 0.5 },
        random: true
      },
      shape: { type: "circle" },
      size: { value: { min: 1.5, max: 3 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: {
          distance: 220,
          links: { opacity: 0.7 }
        }
      },
    },
    detectRetina: true,
  }), []);

  if (!isMounted) return null;

  return (
    /* 🔥 FIX: Added !pt-8 (mobile) and md:!pt-12 (desktop) to reduce top whitespace */
    <section className="py-8 md:py-12 relative bg-white overflow-hidden z-10 border-b border-slate-100">

      {/* Background Particles Layer */}
      {init && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles id="industryParticles" className="h-full w-full" options={particlesOptions as any} />
        </div>
      )}

      <div className="container-custom relative z-10">

        {/* Header - Global Sync */}
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Our Reach
          </span>
          <h2 className="heading-xl">
            Empowering The Digital Era
          </h2>
          <p className="text-muted !mx-auto !text-sm md:!text-base">
            Custom technology frameworks designed for ambitious teams across global markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Industries Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {industries.map((item) => (
                <Link key={item.id} href={`/industries/${item.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group p-5 md:p-8 h-full rounded-[1.5rem] md:rounded-[2rem] border border-slate-300 flex flex-col items-center text-center bg-white shadow-sm transition-all duration-300 hover:border-textmain hover:shadow-xl hover:shadow-slate-900/5 cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 bg-slate-50 text-brandOrange rounded-[1rem] md:rounded-2xl flex items-center justify-center border border-slate-200 transition-colors duration-300 group-hover:bg-brandOrange group-hover:text-white shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[11px] md:text-[12px] uppercase tracking-widest text-textmain leading-tight group-hover:text-brandOrange transition-colors">
                      {item.name}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content & CTA */}
          <div className="order-1 lg:order-2 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 mb-10 md:mb-12">
              {detailedList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-4 group">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 transition-colors border border-orange-100 group-hover:bg-brandOrange">
                    <FiCheckCircle className="text-brandOrange w-3 h-3 md:w-4 md:h-4 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-[12px] md:text-[13px] uppercase tracking-tight text-textmain group-hover:text-brandOrange transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => openModal()}
                className="btn-primary w-full sm:w-max flex flex-row flex-nowrap items-center justify-center gap-3 group whitespace-nowrap shadow-lg shadow-textmain/10"
              >
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm mt-[2px]">Let's Talk</span>
                <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
