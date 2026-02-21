"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, Menu, X, ArrowRight, 
  Target, Diamond, Network, BarChart3 
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Utility: Safe slug generator
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\//g, '-')       // / → -
    .replace(/\s+/g, '-')      // spaces → -
    .replace(/&/g, 'and')      // & → and
    .replace(/[^a-z0-9-]/g, '') // remove special chars
    .replace(/-+/g, '-');      // double hyphen → single
};

type NavChild = {
  name: string;
  isNew: boolean;
  icon?: React.ReactNode;
};

type NavItem = {
  title: string;
  href: string;
  desc: string;
  children: NavChild[];
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    setIsOpen(false); 
    setActiveDropdown(null); 
  }, [pathname]);

  if (!isMounted) return null;

  // ✅ Base directory mapping
  const baseDirMap: Record<string, string> = {
    "Services": "services",
    "Industries": "industries",
    "About": "about",
    "Career": "career"
  };

  const navItems: NavItem[] = [
    { 
      title: "Services", 
      href: "/services", 
      desc: "Revolutionizing digital infrastructure with Lean principles and adaptive AI solutions.",
      children: [
        { name: "Lean Consultancy", isNew: true, icon: <Target className="text-brandOrange" size={24} /> }, 
        { name: "Branding", isNew: true, icon: <Diamond className="text-brandOrange" size={24} /> }, 
        { name: "IoT Solutions", isNew: true, icon: <Network className="text-brandOrange" size={24} /> }, 
        { name: "Digital Marketing", isNew: true, icon: <BarChart3 className="text-brandOrange" size={24} /> }, 
        { name: "ERP Development", isNew: false }, 
        { name: "AI/ML Solutions", isNew: false }, 
        { name: "Web / Mobile App", isNew: false },
        { name: "Data Analytics", isNew: false },
        { name: "DevOps Services", isNew: false },
        { name: "IT Support", isNew: false }
      ]
    },
    { 
      title: "Industries", 
      href: "/industries", 
      desc: "Tailored technology solutions for global industry leaders.",
      children: [
        { name: "Healthcare", isNew: false }, 
        { name: "Fintech", isNew: false }, 
        { name: "E-commerce", isNew: false }, 
        { name: "Education", isNew: false }, 
        { name: "Enterprise", isNew: false }
      ]
    },
    { 
      title: "About", 
      href: "/about", 
      desc: "Building the future of tech with a mission to empower businesses.",
      children: [
        { name: "Company Overview", isNew: false }, 
        { name: "Leadership", isNew: false }, 
        { name: "Mission & Values", isNew: false }, 
        { name: "Why Choose Us", isNew: false }
      ]
    },
    { 
      title: "Career", 
      href: "/career", 
      desc: "Join our world-class engineering team and grow with us.",
      children: [
        { name: "Current Openings", isNew: false }, 
        { name: "Internship Programs", isNew: false }, 
        { name: "Life at Nighwan", isNew: false }
      ]
    }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ${
          isScrolled || isOpen || activeDropdown 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-4 border-b border-slate-100' 
          : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="relative z-[1100]"> 
            <Link href="/">
              <img src="/images/nighlogo-Bxm7gxow.svg" alt="NighwanTech" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={`text-[13px] tracking-[0.2em] uppercase font-black ${isScrolled || activeDropdown ? 'text-textmain' : 'text-white drop-shadow-md'} hover:text-brandOrange transition-colors`}>
              Home
            </Link>

            {navItems.map((item) => (
              <div key={item.title} onMouseEnter={() => setActiveDropdown(item.title)}>
                <button className={`flex items-center gap-1 text-[13px] tracking-[0.2em] uppercase font-black ${isScrolled || activeDropdown ? 'text-textmain' : 'text-white drop-shadow-md'} hover:text-brandOrange transition-colors`}>
                  {item.title}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}

            <Link href="/contact" className="px-8 py-3 rounded-full text-[12px] tracking-[0.2em] font-black uppercase bg-brandOrange text-white shadow-lg hover:bg-brandOrange/90 transition-all">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* --- MEGA MENU --- */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div 
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl z-50 min-h-[450px] max-h-[600px] overflow-hidden"
            >
              <div className="container-custom grid grid-cols-12 h-full">
                
                {/* Left Side: Category Info */}
                <div className="col-span-4 border-r border-slate-100 pr-12 flex flex-col justify-center py-12">
                   <span className="text-brandOrange text-[11px] font-black tracking-[0.4em] uppercase mb-5 block">Core Expertise</span>
                   <h2 className="text-6xl font-black text-textmain tracking-tighter mb-5 italic uppercase leading-[0.9]">
                     {activeDropdown}
                   </h2>
                   <p className="text-brandGreen text-base leading-relaxed mb-10 font-medium max-w-sm">
                     {navItems.find(i => i.title === activeDropdown)?.desc}
                   </p>
                   <Link href={navItems.find(i => i.title === activeDropdown)?.href || "#"} className="inline-flex items-center gap-3 text-brandOrange font-black text-[12px] tracking-widest uppercase group transition-all">
                     Explore All <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform"/>
                   </Link>
                </div>
                
                {/* Right Side: Links Grid */}
                <div className="col-span-8 pl-12 py-12">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-10 h-full overflow-y-auto custom-scrollbar pr-4 content-center">
                    {navItems.find(i => i.title === activeDropdown)?.children.map((child, index) => {
                      const baseDir = baseDirMap[activeDropdown] || activeDropdown.toLowerCase();
                      const slug = slugify(child.name);

                      return (
                        <Link 
                          key={index} 
                          href={`/${baseDir}/${slug}`} 
                          className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 ${child.icon ? 'bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-brandOrange/30 hover:shadow-xl' : 'hover:bg-slate-50'}`}
                        >
                          <div className="flex items-center gap-5">
                            {child.icon && (
                              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                {child.icon}
                              </div>
                            )}
                            {!child.icon && (
                              <span className="w-0 group-hover:w-5 h-[2px] bg-brandOrange transition-all duration-300"></span>
                            )}
                            <span className={`${child.icon ? 'text-xl font-black' : 'text-lg font-bold'} text-textmain group-hover:text-brandOrange transition-all tracking-tight uppercase`}>
                              {child.name}
                            </span>
                          </div>
                          {child.isNew && (
                            <span className="text-[9px] bg-brandOrange text-white px-2 py-0.5 rounded-full font-black tracking-widest uppercase">
                              New
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF6B00; border-radius: 10px; }
        .container-custom { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
      `}</style>
    </>
  );
};

export default Navbar;