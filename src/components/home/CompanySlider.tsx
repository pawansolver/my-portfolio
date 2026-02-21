'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiStar } from 'react-icons/fi';

interface Company {
  id: number;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  website: string;
  description: string;
  category: string;
}

const companies: Company[] = [
  { id: 1, name: "TechCorp Solutions", logo: "TC", rating: 4.9, reviews: 128, website: "#", description: "Leading digital transformation and cloud solutions", category: "Cloud Services" },
  { id: 2, name: "InnovateLabs", logo: "IL", rating: 4.8, reviews: 89, website: "#", description: "AI-powered automation and machine learning", category: "AI & ML" },
  { id: 3, name: "DataFlow Systems", logo: "DF", rating: 5.0, reviews: 156, website: "#", description: "Big data analytics and business intelligence", category: "Data Analytics" },
  { id: 4, name: "CloudTech Pro", logo: "CP", rating: 4.7, reviews: 234, website: "#", description: "Enterprise cloud infrastructure and DevOps", category: "Cloud Infrastructure" },
  { id: 5, name: "WebCraft Studio", logo: "WS", rating: 4.9, reviews: 67, website: "#", description: "Custom web development and UX design", category: "Web Development" },
  { id: 6, name: "SecureNet Solutions", logo: "SN", rating: 4.8, reviews: 198, website: "#", description: "Cybersecurity and compliance solutions", category: "Security" }
];

const CompanyCard = ({ company }: { company: Company }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-[420px] p-8 md:p-10 flex flex-col group bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 bg-textmain rounded-2xl flex items-center justify-center text-white text-xl font-black group-hover:bg-brandOrange transition-all duration-500">
            {company.logo}
          </div>
          <span className="text-brandOrange text-[13px] font-bold uppercase tracking-widest">
            {company.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-textmain mb-3 tracking-tight uppercase group-hover:text-brandOrange transition-colors">
          {company.name}
        </h3>
        
        <p className="text-brandGreen/80 text-[15px] leading-relaxed line-clamp-3 flex-grow font-medium">
          {company.description}
        </p>

        <div className="mt-6 pt-6 border-t border-slate-50">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} fill={i < Math.floor(company.rating) ? "currentColor" : "none"} size={14} />
              ))}
            </div>
            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
              {company.reviews} Reviews
            </span>
          </div>

          <button className="w-full flex items-center justify-between group/btn">
            <span className="text-textmain font-black text-[13px] uppercase tracking-widest group-hover/btn:text-brandOrange transition-colors">
              Case Study
            </span>
            <div className="w-10 h-10 rounded-full bg-textmain text-white flex items-center justify-center group-hover/btn:bg-brandOrange transition-all duration-500 shadow-md">
              <FiArrowRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function CompanySlider() {
  const [scrollSpeed, setScrollSpeed] = useState(0.4);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted) return;
    const container = containerRef.current;
    if (!container) return;
    let frame: number;
    let pos = container.scrollLeft;

    const move = () => {
      pos += scrollSpeed;
      if (pos >= container.scrollWidth / 3) pos = 0;
      container.scrollLeft = pos;
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [scrollSpeed, isMounted]);

  return (
    // Section uses Global CSS logic (min-height: 100vh)
    <section className="bg-white z-20 overflow-hidden">
      <div className="container-custom">
        
        {/* Header: Synced with your config's brandOrange and brandGreen */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-black text-[11px] tracking-[0.4em] uppercase mb-4 block text-brandOrange">
          
          </span>
          <h2 className="heading-xl">
            Powering Industry Titans <span className="text-textmain"></span>
          </h2>
          <p className="text-muted !text-brandGreen">
            Trusted by world-class organizations to deliver excellence.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-hidden py-8 px-4"
            onMouseEnter={() => setScrollSpeed(0)}
            onMouseLeave={() => setScrollSpeed(0.4)}
          >
            {duplicatedCompanies.map((c, i) => (
              <div key={i} className="flex-none w-[320px] md:w-[380px]">
                <CompanyCard company={c} />
              </div>
            ))}
          </div>
          
          {/* Faders */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-4">
          <button 
            onClick={() => containerRef.current?.scrollBy({left: -400, behavior: 'smooth'})} 
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-textmain bg-white hover:bg-textmain hover:text-white transition-all shadow-sm"
          >
            <FiChevronLeft size={20} />
          </button>
          <button 
            onClick={() => containerRef.current?.scrollBy({left: 400, behavior: 'smooth'})} 
            className="w-12 h-12 rounded-full bg-textmain text-white flex items-center justify-center shadow-lg hover:bg-brandOrange transition-all"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}