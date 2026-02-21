"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Card {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const HorizontalCardScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const cards: Card[] = [
    {
      id: 1,
      title: "Who We Are",
      description: "We are NighwanTech, innovators in AI-powered solutions, bridging complex ideas with digital reality.",
      bgColor: "bg-brand-dark",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "What We Think",
      description: "We believe in next-gen tech transforming business. Intelligence is the core of future growth.",
      bgColor: "bg-brand-orange",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Our Products",
      description: "Explore our AI-powered ERP, analytics, and SaaS products built for enterprise scale.",
      bgColor: "bg-white",
      textColor: "text-brand-dark"
    }
  ];

  // Drag Logic (Remains unchanged as requested)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth / 2;
      const currentCard = Math.round(scrollPosition / cardWidth);
      setActiveCard(Math.min(currentCard, cards.length - 1));
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-light">
      
      {/* 1. Global Scroll Indicator */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === activeCard ? 'bg-brand-orange w-12' : 'bg-brand-gray/20 w-4'
            }`}
          />
        ))}
      </div>

      {/* 2. Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className={`flex h-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing ${
          isDragging ? 'select-none' : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-full md:w-1/2 h-full flex-shrink-0 ${card.bgColor} flex items-center justify-center p-12 relative overflow-hidden`}
          >
            {/* Background Decorative Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full filter blur-[120px] opacity-10 ${card.textColor === 'text-white' ? 'bg-white' : 'bg-brand-orange'}`} />

            <div className="max-w-2xl z-10">
              <span className={`cap-orange ${card.textColor === 'text-white' ? 'text-white/60' : 'text-brand-orange'}`}>
                Section 0{card.id}
              </span>
              
              {/* Using Global Heading Scale */}
              <h2 className={`h-hero mb-8 ${card.textColor}`}>
                {card.title}
              </h2>
              
              {/* Using Global Text Scale */}
              <p className={`text-p text-xl md:text-2xl mb-12 max-w-lg ${card.textColor === 'text-white' ? 'text-white/80' : 'text-brand-gray'}`}>
                {card.description}
              </p>

              {/* Global Button Sync */}
              <div className="flex flex-wrap gap-5">
                <button className={card.bgColor === 'bg-white' ? 'btn-primary' : 'btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-dark'}>
                  Get Started
                </button>
                <button className={`font-black text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 transition-all hover:gap-5 ${card.textColor}`}>
                  Learn More <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Global Navigation Arrows */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' })}
          className="w-16 h-16 rounded-full border border-current flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-500 bg-white/10 backdrop-blur-md"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' })}
          className="w-16 h-16 rounded-full border border-current flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-500 bg-white/10 backdrop-blur-md"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

    </div>
  );
};

export default HorizontalCardScroll;