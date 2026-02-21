'use client';

// Yahan paths ka dhyan rakhna bhai:
// Agar aapne HeroSection ko 'home' folder mein rakha hai toh @/components/home/HeroSection rehne dena.
// Agar 'hero' folder banaya hai toh @/components/hero/HeroSection kar dena.
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

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-black">
      <StaggerContainer staggerDelay={0.1}>
        
        {/* 1. Hero Page - Cinematic Entry */}
        <HeroSection /> 

        {/* 2. Trust Building - Logo Slider (Hero ke turant baad achha lagta hai) */}
       

        {/* 3. Numbers & Mission - Slot Machine + About */}
        <StatsCounter /> 
        <AboutMission />

        {/* 4. Core Offerings - Premium Services & Bento Grid */}
        <PremiumServicesSection />
        <AISolutionsBentoGrid />

        {/* 5. Proof of Work - Industries & Portfolio */}
        <IndustriesListSection />
        <ProjectPortfolio />

        {/* 6. Closer - Why Choose Us & Contact */}
        <WhyChooseUs /> 
        <ContactSection />

      </StaggerContainer>
    </div>
  );
}