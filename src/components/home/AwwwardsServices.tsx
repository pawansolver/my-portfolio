'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'CUSTOM ERP SOLUTIONS',
    meta: 'ENTERPRISE • AUTOMATION • SCALABLE',
    image: '/images/software-dev.png',
    slug: 'custom-erp-solutions'
  },
  {
    title: 'LEAN CONSULTANCY',
    meta: 'KAIZEN • 5S • PRODUCTIVITY',
    image: '/images/it-consulting.png',
    slug: 'lean-consultancy'
  },
  {
    title: 'INDUSTRY 4.0',
    meta: 'SMART FACTORY • IOT • MONITORING',
    image: '/images/cloud-devops.png',
    slug: 'industry-4-0'
  },
  {
    title: 'E-COMMERCE HUB',
    meta: 'B2B • B2C • DIGITAL STORE',
    image: '/images/web-dev.png',
    slug: 'e-commerce-hub'
  },
  {
    title: 'RAG & AI SYSTEMS',
    meta: 'PRIVATE LLM • KNOWLEDGE MINING',
    image: '/images/ai-automation.png',
    slug: 'rag-ai-systems'
  },
  {
    title: 'DIGITAL TRANSFORMATION',
    meta: 'MSME • STRATEGY • GROWTH',
    image: '/images/mobile-dev.png',
    slug: 'digital-transformation'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative rounded-[2.5rem] overflow-hidden h-[450px] cursor-pointer shadow-sm border border-black/5"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-100"
          priority={index < 3}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent transition-all duration-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full p-10 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-[0.4em] text-brand-orange mb-3 block uppercase">
              {service.meta.split(' • ')[0]}
            </span>
            <h3 className="font-bold text-white text-2xl md:text-3xl transition-all duration-300 group-hover:tracking-wider leading-tight">
              {service.title}
            </h3>
          </div>
          
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500 -rotate-45 group-hover:rotate-0 shadow-xl">
             <ArrowUpRight size={22} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AwwwardsServices() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- 🚀 FIXED HEADER: Orange & Dark Green --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2">
            Our Capabilities
          </span>
          <h2 className="h-section">
            Expertise that scales with your Ambition
          </h2>
          <p className="sub-section">
            We deliver cutting-edge technology solutions designed to bridge the gap between complex ideas and seamless digital reality.
          </p>
          <div className="w-20 h-1 bg-brand-orange mt-8 rounded-full opacity-30" />
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
