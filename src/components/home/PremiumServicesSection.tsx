'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight, Target, Diamond, Network, BarChart3, Cpu,
  Activity, Globe, Layers, Settings, ShieldCheck, Sparkles,
  Cloud, TrendingUp, Headset, Smartphone, ShieldAlert, Terminal
} from 'lucide-react';
import Link from 'next/link';

// 🚀 Backend Fetch Action
import { getAllServicesAction } from "@/actions/services";

// 🚀 Professional Icon Mapping
const iconMap: Record<string, React.ElementType> = {
  "Target": Target,
  "Diamond": Diamond,
  "Network": Network,
  "BarChart3": BarChart3,
  "Cpu": Cpu,
  "Activity": Activity,
  "Globe": Globe,
  "Layers": Layers,
  "Settings": Settings,
  "ShieldCheck": ShieldCheck,
  "Sparkles": Sparkles,
  "Cloud": Cloud,
  "TrendingUp": TrendingUp,
  "Headset": Headset,
  "Smartphone": Smartphone,
  "ShieldAlert": ShieldAlert,
  "Terminal": Terminal,
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // 🔥 TypeScript Fix: "as any"
  const IconComponent = (service.iconName && iconMap[service.iconName] ? iconMap[service.iconName] : Settings) as any;

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
        style={{ rotateY, rotateX, transformStyle: "preserve-3d", perspective: "1000px" }}
        className="group relative p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border border-slate-300 bg-white flex flex-col h-full min-h-[130px] md:min-h-[180px] transition-all duration-500 hover:border-brandOrange hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer"
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col h-full w-full">

          <div className="flex justify-between items-start mb-2 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 rounded-xl md:rounded-2xl border border-slate-200 shrink-0 shadow-sm">
              <IconComponent size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-brandOrange group-hover:border-brandOrange group-hover:bg-orange-50 transition-all duration-500 shrink-0 bg-white">
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={2.5} />
            </div>
          </div>

          <div className="mt-1 md:mt-2 flex-1 flex flex-col justify-center">
            <h3 className="font-bold text-textmain leading-tight tracking-tight group-hover:text-brandOrange transition-colors uppercase text-[11px] md:text-[14px]">
              {service.title}
            </h3>
            <div className="h-1 w-6 bg-brandOrange/20 mt-2 md:mt-3 group-hover:w-12 transition-all duration-500 rounded-full"></div>
          </div>

          <div className="mt-auto pt-3 flex justify-between items-center border-t border-slate-50/0 group-hover:border-slate-100 transition-colors">
            <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] text-brandGreen uppercase opacity-60">Expertise</span>
            <span className="text-[9px] font-black text-slate-300 group-hover:text-brandOrange transition-colors">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function PremiumServicesSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);

    const loadServices = async () => {
      try {
        const response = await getAllServicesAction();

        // 🔥 FIX: Check response.success and use response.data array
        if (response && response.success && Array.isArray(response.data)) {
          // Sirf unko filter karo jinka Admin ne "Show on Home" chalu rakha hai
          const homeServices = response.data.filter((service: any) => service.showOnHome !== false);
          setServices(homeServices);
        }
      } catch (error) {
        console.error("Home page services fetch error:", error);
      }
    };

    loadServices();
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="mb-6 md:mb-10 text-center flex flex-col items-center">
          <span className="font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-2 block text-brandOrange">Our Core Offerings</span>
          <h2 className="heading-xl !mb-2">Our Specializations</h2>
          <p className="text-muted !text-[12px] md:!text-[15px]">High-performance digital architecture engineered for future-scale impact.</p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-10 text-slate-400 font-medium">
            Loading services from database...
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.id || service._id || index} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}