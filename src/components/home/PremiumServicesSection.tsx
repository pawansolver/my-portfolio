'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'; // 🔹 Import Link for routing
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiMonitor, FiTarget, FiActivity, FiGlobe, FiLayers, FiSettings } from 'react-icons/fi';

// 🔹 Updated services with slugs matching your navbar/pages
const services = [
  { id: 1, title: "Lean Consultancy", slug: "lean-consultancy", icon: <FiActivity size={24} /> },
  { id: 2, title: "Branding", slug: "branding", icon: <FiTarget size={24} /> },
  { id: 3, title: "ERP Development", slug: "erp-development", icon: <FiLayers size={24} /> },
  { id: 4, title: "AI/ML Solutions", slug: "ai-ml-solutions", icon: <FiCpu size={24} /> },
  { id: 5, title: "Web / Mobile App", slug: "web-mobile-app", icon: <FiSmartphone size={24} /> },
  { id: 6, title: "IoT Solutions", slug: "iot-solutions", icon: <FiGlobe size={24} /> },
  { id: 7, title: "Digital Marketing", slug: "digital-marketing", icon: <FiMonitor size={24} /> },
  { id: 8, title: "Data Analytics", slug: "data-analytics", icon: <FiCode size={24} /> },
  { id: 9, title: "DevOps Services", slug: "devops-services", icon: <FiCloud size={24} /> },
  { id: 10, title: "IT Support & Maintenance", slug: "it-support-maintenance", icon: <FiSettings size={24} /> },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    // 🔹 Wrapping the entire card with Link for better UX
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
        className="group relative p-6 md:p-8 rounded-[2rem] border-2 border-slate-200 bg-white flex flex-col h-full min-h-[140px] md:min-h-[220px] transition-all duration-500 hover:border-brandOrange hover:shadow-2xl overflow-hidden cursor-pointer shadow-sm"
      >
        <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col h-full w-full">

          <div className="flex justify-between items-center mb-4">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-slate-50 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 rounded-2xl border border-slate-100 shrink-0">
              {service.icon}
            </div>
            {/* Arrow Button */}
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-brandOrange group-hover:border-brandOrange transition-all duration-500 shrink-0 bg-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>

          <div className="mt-2">
            <h3 className="font-bold text-textmain leading-tight tracking-tight group-hover:text-brandOrange transition-colors uppercase text-[16px] md:text-[18px]">
              {service.title}
            </h3>
            <div className="h-1 w-8 bg-brandOrange/20 mt-3 group-hover:w-16 transition-all duration-500 rounded-full"></div>
          </div>

          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-brandGreen uppercase opacity-60">
              Expertise
            </span>
            <span className="text-[10px] font-bold text-slate-300 group-hover:text-brandOrange transition-colors">
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
    <section className="section bg-[#F8FAFC]">
      <div className="container-custom section-padding">

        <div className="mb-12 md:mb-20 text-center">
          <h2 className="heading-xl">
            Our Specializations
          </h2>
          <p className="text-muted !mx-auto">
            High-performance digital architecture engineered for future-scale impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}