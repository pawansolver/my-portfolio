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

  // 🔹 Use global modal context
  const { openModal } = useModal();

  useEffect(() => {
    setIsMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 🔹 Optimized for Premium Look: Increased Opacity and Adjusted Colors
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      color: { value: "#FF6B00" }, // Brand Orange
      links: {
        color: "#FF6B00",
        distance: 150,
        enable: true,
        opacity: 3, // 🔹 Darker links for a more defined web look
        width: 1.2
      },
      move: {
        enable: true,
        speed: 0.5, // Slower move for elegant feel
        outModes: { default: "bounce" }
      },
      number: { value: 35, density: { enable: true, area: 900 } },
      opacity: {
        value: 3, // 🔹 Darker particles for better visibility
        random: false
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
          links: { opacity: 0.7 } // 🔹 Interaction highlights are now sharper
        }
      },
    },
    detectRetina: true,
  }), []);

  if (!isMounted) return null;

  return (
    <section className="section relative bg-white overflow-hidden z-10">

      {/* Background Particles Layer */}
      {init && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Particles id="industryParticles" className="h-full w-full" options={particlesOptions as any} />
        </div>
      )}

      <div className="container-custom relative z-10 section-padding">

        {/* Header - Global Sync */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
            Our Reach
          </span>
          <h2 className="heading-xl">
            Empowering The Digital Era
          </h2>
          <p className="text-muted !mx-auto">
            Custom technology frameworks designed for ambitious teams across global markets.
            High-performance architecture built for future-scale impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">

          {/* Industries Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {industries.map((item) => (
                <Link key={item.id} href={`/industries/${item.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-6 md:p-8 h-full rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center bg-white shadow-sm transition-all duration-300 hover:border-brandOrange hover:shadow-md cursor-pointer"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 bg-slate-50 text-brandOrange rounded-xl flex items-center justify-center border border-slate-100 transition-colors duration-300 group-hover:bg-brandOrange group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[10px] md:text-[12px] uppercase tracking-widest text-textmain leading-tight">
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
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-brandOrange/10 flex items-center justify-center shrink-0">
                    <FiCheckCircle className="text-brandOrange w-3 h-3" />
                  </div>
                  <span className="font-bold text-[11px] md:text-[13px] uppercase tracking-tight text-textmain">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => openModal()}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-4 group"
              >
                GET IN TOUCH
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}