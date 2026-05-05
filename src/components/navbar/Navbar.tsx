"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown, Menu, X, ArrowRight,
  Target, Diamond, Network, BarChart3, Cpu, Activity, Globe, Layers, Settings, ShieldCheck,
  Sparkles, Cloud, TrendingUp, Headset, Smartphone, ShieldAlert, Terminal, Wifi,
  UserCircle, LogOut, ShoppingCart,
  Stethoscope, Landmark, BookOpen, Building2, Users, Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/hooks/useSession";

// 🚀 ACTION IMPORT
import { getAllServicesAction } from "@/actions/services";

const slugify = (text: string) => {
  return text.toLowerCase().trim().replace(/\//g, '-').replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
};

type NavChild = { name: string; isNew: boolean; icon?: React.ReactNode; slug?: string; };
type NavItem = { title: string; href: string; desc: string; children: NavChild[]; };

// 🚀 EXTENDED ICON MAP
const iconMap: Record<string, React.ReactNode> = {
  "Target": <Target className="text-brandOrange" size={24} />,
  "Diamond": <Diamond className="text-brandOrange" size={24} />,
  "Network": <Network className="text-brandOrange" size={24} />,
  "BarChart3": <BarChart3 className="text-brandOrange" size={24} />,
  "Cpu": <Cpu className="text-brandOrange" size={24} />,
  "Activity": <Activity className="text-brandOrange" size={24} />,
  "Globe": <Globe className="text-brandOrange" size={24} />,
  "Layers": <Layers className="text-brandOrange" size={24} />,
  "Settings": <Settings className="text-brandOrange" size={24} />,
  "ShieldCheck": <ShieldCheck className="text-brandOrange" size={24} />,
  "Sparkles": <Sparkles className="text-brandOrange" size={24} />,
  "Cloud": <Cloud className="text-brandOrange" size={24} />,
  "TrendingUp": <TrendingUp className="text-brandOrange" size={24} />,
  "Headset": <Headset className="text-brandOrange" size={24} />,
  "Smartphone": <Smartphone className="text-brandOrange" size={24} />,
  "ShieldAlert": <ShieldAlert className="text-brandOrange" size={24} />,
  "Terminal": <Terminal className="text-brandOrange" size={24} />,
  "Wifi": <Wifi className="text-brandOrange" size={24} />
};

const Navbar = () => {
  const { isAuthenticated, isLoading } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [user, setUser] = useState<any>(null);

  const [dynamicServices, setDynamicServices] = useState<NavChild[]>([
    { name: "Lean Consultancy", slug: "lean-consultancy", isNew: true, icon: iconMap["Target"] },
    { name: "Branding", slug: "branding", isNew: true, icon: iconMap["Diamond"] },
    { name: "IoT Solutions", slug: "iot-solutions", isNew: true, icon: iconMap["Network"] },
    { name: "Digital Marketing", slug: "digital-marketing", isNew: true, icon: iconMap["BarChart3"] },
    { name: "ERP Development", slug: "erp-development", isNew: false, icon: iconMap["Layers"] },
    { name: "AI/ML Solutions", slug: "ai-solutions", isNew: false, icon: iconMap["Cpu"] },
    { name: "Web / Mobile App", slug: "web-mobile-app", isNew: false, icon: iconMap["Smartphone"] },
    { name: "Data Analytics", slug: "data-analytics", isNew: false, icon: iconMap["Activity"] },
    { name: "DevOps Services", slug: "devops-solutions", isNew: false, icon: iconMap["Cloud"] },
    { name: "IT Support", slug: "it-support", isNew: false, icon: iconMap["Settings"] }
  ]);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const loadNavbarData = async () => {
      try {
        const data = await getAllServicesAction();

        if (data && data.length > 0) {
          const featuredServices = data.filter((service: any) => service.isFeatured);

          const formattedServices = featuredServices.map((service: any) => ({
            name: service.title,
            isNew: service.isNew || false,
            slug: service.slug,
            icon: service.iconName && iconMap[service.iconName] ? iconMap[service.iconName] : <Settings className="text-brandOrange" size={24} />
          }));

          if (formattedServices.length > 0) {
            setDynamicServices((prev) => {
              const existingNames = new Set(prev.map(s => s.name));
              const newUniqueServices = formattedServices.filter((s: any) => !existingNames.has(s.name));
              return [...prev, ...newUniqueServices];
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch services for Navbar", err);
      }
    };

    loadNavbarData();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('clientUser');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };

  if (!isMounted) return null;

  const hiddenRoutes = ['/user', '/account', '/support'];

  const isHiddenRoute = hiddenRoutes.some(route => pathname.startsWith(route));

  if (isHiddenRoute) {
    return null;
  }

  const dynamicTextColor = 'text-brandOrange';

  const baseDirMap: Record<string, string> = {
    "Services": "services", "Industries": "industries", "About": "about", "Career": "career"
  };

  const navItems: NavItem[] = [
    {
      title: "Services",
      href: "/services",
      desc: "Revolutionizing digital infrastructure with Lean principles and adaptive AI solutions.",
      children: dynamicServices
    },
    {
      title: "Industries",
      href: "/industries",
      desc: "Tailored technology solutions for global industry leaders.",
      children: [
        { name: "Healthcare", isNew: false, icon: <Stethoscope className="text-brandOrange" size={24} /> },
        { name: "Fintech", isNew: false, icon: <Landmark className="text-brandOrange" size={24} /> },
        { name: "E-commerce", isNew: false, icon: <ShoppingCart className="text-brandOrange" size={24} /> },
        { name: "Education", isNew: false, icon: <BookOpen className="text-brandOrange" size={24} /> },
        { name: "Enterprise", isNew: false, icon: <Building2 className="text-brandOrange" size={24} /> },
        { name: "HRMS", isNew: true, icon: <Users className="text-brandOrange" size={24} /> }
      ]
    },
    {
      title: "About",
      href: "/about",
      desc: "Building the future of tech with a mission to empower businesses.",
      children: [
        { name: "Company Overview", isNew: false, icon: <Globe className="text-brandOrange" size={24} /> },
        { name: "Leadership", isNew: false, icon: <UserCircle className="text-brandOrange" size={24} /> },
        { name: "Mission & Values", isNew: false, icon: <Target className="text-brandOrange" size={24} /> },
        { name: "Why Choose Us", isNew: false, icon: <ShieldCheck className="text-brandOrange" size={24} /> }
      ]
    },
    {
      title: "Career",
      href: "/career",
      desc: "Join our world-class engineering team and grow with us.",
      children: [
        { name: "Current Openings", isNew: false, icon: <Briefcase className="text-brandOrange" size={24} /> },
        { name: "Internship Programs", isNew: false, icon: <Network className="text-brandOrange" size={24} /> },
        { name: "Life at Nighwan", isNew: false, icon: <Sparkles className="text-brandOrange" size={24} /> }
      ]
    }
  ];

  return (
    <>
      <nav
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ${isScrolled || isOpen || activeDropdown
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-4 border-b border-slate-100'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="w-full px-4 md:px-10 flex justify-between items-center">

          {/* 1. LOGO (🔥 FIXED: Perfect Centering with Navigation Text) */}
          <div className="flex-shrink-0 relative z-[1100] flex items-center h-full">
            <Link href="/" className="flex items-center h-full">
              <img
                src="/images/nighlogo-Bxm7gxow.svg"
                alt="NighwanTech"
                className="h-10 md:h-14 lg:h-[60px] w-auto object-contain transition-all duration-300 -mt-1 md:-mt-1.5"
              />
            </Link>
          </div>

          {/* 2. NAV LINKS */}
          <div className="hidden lg:flex flex-grow justify-center items-center gap-4 xl:gap-8 px-4">
            <Link href="/" className={`text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black ${dynamicTextColor} hover:opacity-80 transition-colors`}>
              Home
            </Link>

            {navItems.map((item) => (
              <div key={item.title} onMouseEnter={() => setActiveDropdown(item.title)}>
                <button className={`flex items-center gap-1 text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black ${dynamicTextColor} hover:opacity-80 transition-colors`}>
                  {item.title}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}

            <Link href="/blog" className={`text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black ${dynamicTextColor} hover:opacity-80 transition-colors`}>
              Blog
            </Link>

            <Link href="/cart" className={`flex items-center gap-1.5 text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black ${dynamicTextColor} hover:opacity-80 transition-colors`}>
              <ShoppingCart size={18} /> Cart
            </Link>

            {!isLoading && (
              (user || isAuthenticated) ? (
                <div className="relative group cursor-pointer flex items-center gap-1.5 py-2">
                  <div className={`flex items-center gap-1.5 text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black text-[#5c2d91] hover:opacity-80 transition-colors`}>
                    <UserCircle size={20} />
                    <span>Hi, {user?.name?.split(' ')[0] || user?.fullName?.split(' ')[0] || "User"}</span>
                  </div>

                  <div className="absolute top-full right-0 pt-2 hidden group-hover:block w-48">
                    <div className="bg-white shadow-xl rounded-xl border border-slate-100 p-2 flex flex-col gap-1 relative z-50">
                      <button
                        onClick={() => window.location.href = '/user'}
                        className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-brandOrange hover:bg-orange-50 rounded-lg transition-colors text-left w-full"
                      >
                        Dashboard
                      </button>
                      <button onClick={handleLogout} className="px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 text-left w-full">
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className={`text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-black ${dynamicTextColor} hover:opacity-80 transition-colors`}
                >
                  Login
                </Link>
              )
            )}
          </div>

          {/* 3. CONTACT US BUTTON */}
          <div className="hidden lg:flex flex-shrink-0 relative z-[1100]">
            <Link
              href="/contact"
              className="px-6 xl:px-8 py-3 rounded-full text-[11px] xl:text-[12px] tracking-[0.2em] font-black uppercase transition-all shadow-lg bg-brandOrange text-white hover:bg-brandOrange/90"
            >
              CONTACT US
            </Link>
          </div>

          {/* 4. MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex-shrink-0 relative z-[1100]">
            <button onClick={() => setIsOpen(!isOpen)} className={dynamicTextColor}>
              {isOpen ? <X size={30} className={dynamicTextColor} /> : <Menu size={30} className={dynamicTextColor} />}
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="hidden lg:block absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl z-50 min-h-[450px] overflow-hidden"
            >
              <div className="w-full px-10 grid grid-cols-12 h-full">
                <div className="col-span-4 border-r border-slate-100 pr-12 flex flex-col justify-center py-12">
                  <span className="text-brandOrange text-[11px] font-black tracking-[0.4em] uppercase mb-5 block">Core Expertise</span>
                  <h2 className="text-6xl font-black text-textmain tracking-tighter mb-5 italic uppercase leading-[0.9]">{activeDropdown}</h2>
                  <p className="text-brandGreen text-base leading-relaxed mb-10 font-medium max-w-sm">
                    {navItems.find(i => i.title === activeDropdown)?.desc}
                  </p>
                </div>

                <div className="col-span-8 pl-12 py-12">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-10 content-center">
                    {navItems.find(i => i.title === activeDropdown)?.children.map((child, index) => {
                      const baseDir = baseDirMap[activeDropdown] || activeDropdown.toLowerCase();
                      const finalSlug = child.slug || slugify(child.name);

                      return (
                        <Link
                          key={index}
                          href={`/${baseDir}/${finalSlug}`}
                          className="group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-brandOrange/30 hover:shadow-xl"
                        >
                          <div className="flex items-center gap-5 text-left">
                            <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300 shrink-0">
                              {child.icon || <Settings className="text-brandOrange" size={24} />}
                            </div>

                            <span className="text-[14px] xl:text-[15px] font-black text-textmain group-hover:text-brandOrange transition-all tracking-tight uppercase">
                              {child.name}
                            </span>
                          </div>

                          {child.isNew && <span className="text-[9px] bg-brandOrange text-white px-2 py-0.5 rounded-full font-black tracking-widest uppercase ml-2 shrink-0">New</span>}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed inset-0 top-0 right-0 w-full h-screen bg-white z-[1050] lg:hidden overflow-y-auto px-6 pt-24 pb-10"
            >
              <div className="flex flex-col gap-6">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brandOrange uppercase">Home</Link>
                <hr className="border-slate-100" />
                {navItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4">
                    <div className="flex justify-between items-center" onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}>
                      <span className="text-2xl font-black text-brandOrange uppercase">{item.title}</span>
                      <ChevronDown className={`transition-transform text-brandOrange ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </div>
                    {activeDropdown === item.title && (
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-brandOrange/20">
                        {item.children.map((child, idx) => {
                          const finalSlug = child.slug || slugify(child.name);
                          return (
                            <Link
                              key={idx}
                              href={`/${baseDirMap[item.title] || item.title.toLowerCase()}/${finalSlug}`}
                              className="text-lg font-bold text-slate-600 uppercase py-1 text-left"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <Link href="/blog" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brandOrange uppercase mt-2">
                  Blog
                </Link>

                <Link href="/cart" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brandOrange uppercase mt-2 flex items-center gap-3">
                  Cart <ShoppingCart size={24} className="text-brandOrange" />
                </Link>

                {!isLoading && (
                  (user || isAuthenticated) ? (
                    <div className="flex flex-col gap-4 mt-4 bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                      <div className="text-xl font-black text-[#5c2d91] flex items-center gap-3 border-b border-purple-100 pb-4">
                        <UserCircle size={28} /> Hi, {user?.name || user?.fullName || "User"}
                      </div>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          window.location.href = '/user';
                        }}
                        className="text-xl font-black text-brandOrange uppercase text-left w-full"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={handleLogout}
                        className="text-xl font-black text-red-500 uppercase flex items-center gap-2 text-left mt-2"
                      >
                        <LogOut size={22} /> Logout
                      </button>
                    </div>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black text-brandOrange uppercase mt-2 text-left"
                    >
                      Login
                    </Link>
                  )
                )}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 text-center px-8 py-4 rounded-xl text-sm tracking-widest font-black uppercase bg-brandOrange text-white"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;