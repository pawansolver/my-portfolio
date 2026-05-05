"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

// Existing Imports
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import AboutMission from "@/components/home/AboutMission";
import PremiumServicesSection from '@/components/home/PremiumServicesSection';
import CompanySlider from '@/components/home/CompanySlider';
import IndustriesListSection from '@/components/home/IndustriesListSection';
import ProjectPortfolio from "@/components/home/ProjectPortfolio";
import { StaggerContainer } from '@/components/transitions';
import AISolutionsBentoGrid from '@/components/home/AISolutionsBentoGrid';
import WhyChooseUs from '@/components/home/components/WhyChooseUs';
import ContactSection from '@/components/home/ContactSection';

// 🚀 Naye World-Class Components Import (Ensure path is correct)
import Testimonials from '@/components/home/Testimonials';
import BlogSection from '@/components/home/BlogSection';

function LogoutToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get('logout') === 'success') {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        router.replace('/', { scroll: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[2000] px-6 py-4 bg-brandOrange text-white rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 backdrop-blur-md"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight">Successfully Logged Out</span>
            <span className="text-white/80 text-xs">Hope to see you back soon!</span>
          </div>
          <button
            onClick={() => setShow(false)}
            className="ml-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={null}>
        <LogoutToast />
      </Suspense>
      <StaggerContainer staggerDelay={0.1}>

        {/* 1. Hero Page - Cinematic Entry */}
        <HeroSection />

        {/* 2. Numbers & Mission */}
        <StatsCounter />
        <AboutMission />

        {/* 3. Core Offerings */}
        <PremiumServicesSection />
        <AISolutionsBentoGrid />

        {/* Trust Building - Slider */}
        <CompanySlider />

        {/* 4. Proof of Work - Industries & Portfolio */}
        <IndustriesListSection />
        <ProjectPortfolio />

        {/* 5. 🌟 Social Proof (Testimonials) - Naya Section */}
        <Testimonials />

        {/* 6. Closer - Why Choose Us */}
        <WhyChooseUs />

        {/* 7. ✍️ Knowledge Hub (Blog) - Naya Section */}
        <BlogSection />

        {/* 8. Contact Section */}
        <ContactSection />

      </StaggerContainer>
    </div>
  );
}