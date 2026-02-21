'use client';

import React, { useEffect, useState } from 'react'; 
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiMonitor, FiTarget, FiActivity, FiGlobe, FiLayers, FiSettings } from 'react-icons/fi';

const services = [
  { id: 1, title: "Lean Consultancy", icon: <FiActivity size={26} /> },
  { id: 2, title: "Branding", icon: <FiTarget size={26} /> },
  { id: 3, title: "ERP Development", icon: <FiLayers size={26} /> },
  { id: 4, title: "AI/ML Solutions", icon: <FiCpu size={26} /> },
  { id: 5, title: "Web / Mobile App", icon: <FiSmartphone size={26} /> },
  { id: 6, title: "IoT Solutions", icon: <FiGlobe size={26} /> },
  { id: 7, title: "Digital Marketing", icon: <FiMonitor size={26} /> },
  { id: 8, title: "Data Analytics", icon: <FiCode size={26} /> },
  { id: 9, title: "DevOps Services", icon: <FiCloud size={26} /> },
  { id: 10, title: "IT Support & Maintenance", icon: <FiSettings size={26} /> },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
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
      // Border-slate-300 (Dark) + Always Visible Background
      className="group relative p-6 rounded-[2rem] border-2 border-slate-300 bg-slate-50 flex flex-col h-full min-h-[200px] transition-all duration-500 hover:bg-white hover:border-brandOrange hover:shadow-2xl overflow-visible cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col h-full">
        
        <div className="flex justify-between items-start mb-6">
          {/* Icon - Default Visible */}
          <div className="w-12 h-12 flex items-center justify-center bg-white text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 rounded-2xl shadow-sm border border-slate-200">
            {service.icon} 
          </div>
          {/* Arrow - Always Visible */}
          <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-brandOrange group-hover:border-brandOrange transition-all duration-500">
             <ArrowUpRight size={16} strokeWidth={3} />
          </div>
        </div>

        <div className="flex-grow flex items-end">
          {/* Title - Default Dark & Bold */}
          <h3 className="font-black text-textmain leading-tight tracking-tight group-hover:text-brandOrange transition-colors uppercase text-[14px] md:text-[15px]">
            {service.title}
          </h3>
        </div>

        {/* Info Label - Now Default Visible (Lower Opacity) */}
        <div className="mt-4 pt-4 border-t border-slate-200">
           <span className="text-[9px] font-bold tracking-[0.2em] text-brandGreen uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              Nighwan Tech
           </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function PremiumServicesSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;

  return (
    <section className="section bg-white">
      <div className="container-custom">
        
        <div className="mb-16">
          <h2 className="heading-xl">
             Nighwan Specializations<span className="text-textmain"></span>
          </h2>
          <p className="text-muted">
            High-performance digital architecture engineered for future-scale impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}