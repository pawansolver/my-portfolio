'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiMonitor, FiTarget, FiActivity, FiGlobe, FiLayers, FiSettings } from 'react-icons/fi';

// 🔹 Services with slugs matching your navbar/pages
const services = [
  { id: 1, title: "Lean Consultancy", slug: "lean-consultancy", icon: <FiActivity size={20} className="md:w-6 md:h-6" /> },
  { id: 2, title: "Branding", slug: "branding", icon: <FiTarget size={20} className="md:w-6 md:h-6" /> },
  { id: 3, title: "ERP Development", slug: "erp-development", icon: <FiLayers size={20} className="md:w-6 md:h-6" /> },
  { id: 4, title: "AI/ML Solutions", slug: "ai-ml-solutions", icon: <FiCpu size={20} className="md:w-6 md:h-6" /> },
  { id: 5, title: "Web / Mobile App", slug: "web-mobile-app", icon: <FiSmartphone size={20} className="md:w-6 md:h-6" /> },
  { id: 6, title: "IoT Solutions", slug: "iot-solutions", icon: <FiGlobe size={20} className="md:w-6 md:h-6" /> },
  { id: 7, title: "Digital Marketing", slug: "digital-marketing", icon: <FiMonitor size={20} className="md:w-6 md:h-6" /> },
  { id: 8, title: "Data Analytics", slug: "data-analytics", icon: <FiCode size={20} className="md:w-6 md:h-6" /> },
  { id: 9, title: "DevOps Services", slug: "devops-services", icon: <FiCloud size={20} className="md:w-6 md:h-6" /> },
  { id: 10, title: "IT Support", slug: "it-support-maintenance", icon: <FiSettings size={20} className="md:w-6 md:h-6" /> },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.02 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        /* 🛠️ FIX: p-4, min-h-[130px] aur border-slate-300 kiya taaki cards compact aur sharp dikhein */
        className="group relative p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border border-slate-300 bg-white flex flex-col h-full min-h-[130px] md:min-h-[180px] transition-all duration-500 hover:border-brandOrange hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer"
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col h-full w-full">

          <div className="flex justify-between items-start mb-2 md:mb-4">
            {/* 🛠️ FIX: Icon box ka size chhota kiya w-10 h-10 */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 rounded-xl md:rounded-2xl border border-slate-200 shrink-0">
              {service.icon}
            </div>
            {/* Arrow Button */}
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-brandOrange group-hover:border-brandOrange group-hover:bg-orange-50 transition-all duration-500 shrink-0 bg-white">
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={2.5} />
            </div>
          </div>

          <div className="mt-1 md:mt-2 flex-1 flex flex-col justify-center">
            {/* 🛠️ FIX: Text size chhota kiya taaki mobile par na toote text-[11px] */}
            <h3 className="font-bold text-textmain leading-tight tracking-tight group-hover:text-brandOrange transition-colors uppercase text-[11px] md:text-[14px]">
              {service.title}
            </h3>
            <div className="h-1 w-6 bg-brandOrange/20 mt-2 md:mt-3 group-hover:w-12 transition-all duration-500 rounded-full"></div>
          </div>

          <div className="mt-auto pt-3 flex justify-between items-center border-t border-slate-50/0 group-hover:border-slate-100 transition-colors">
            <span className="text-[7px] md:text-[9px] font-black tracking-[0.2em] text-brandGreen uppercase opacity-60">
              Expertise
            </span>
            <span className="text-[9px] font-black text-slate-300 group-hover:text-brandOrange transition-colors">
              0{index + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function PremiumServicesSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;

  return (
    // 🛠️ FIX: py-8 md:py-12 for tighter top/bottom spacing
    <section className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="container-custom">

        {/* 🛠️ FIX: mb-6 md:mb-10 to save vertical space */}
        <div className="mb-6 md:mb-10 text-center flex flex-col items-center">
          {/* Optional: Added small orange eyebrow text for global sync, you can remove if not needed */}
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-2 block text-brandOrange">
            Our Core Offerings
          </span>
          <h2 className="heading-xl !mb-2">
            Our Specializations
          </h2>
          <p className="text-muted !text-[12px] md:!text-[15px]">
            High-performance digital architecture engineered for future-scale impact.
          </p>
        </div>

        {/* 🛠️ FIX: Mobile par grid-cols-2 kiya aur gap kam kiya taaki sab fit ho jaye */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}