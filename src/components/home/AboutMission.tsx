"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';

export default function AboutMission() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Section wrapper: Using your 'section' class
    <section className="section relative bg-[#050505] overflow-hidden z-20">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Background Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-20 grayscale"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Content Container: Using your 'container-custom' class */}
        <div 
          style={{ transform: "translateZ(80px)" }}
          className="container-custom relative z-10"
        >
          {/* Header: Using your 'heading-xl' class */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-xl"
          >
            ARCHITECTING DIGITAL LEGACIES
          </motion.h2>

          {/* Subtitle: Using your 'text-muted' class */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted"
          >
            At NighwanTech, we don&apos;t just build software; we engineer future-proof ecosystems. 
            Blending Neural Intelligence with Human-Centric Design to turn complex visions 
            into seamless global experiences.
          </motion.p>

          {/* Button: Using your 'btn-primary' class */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="mt-12 flex justify-center"
          >
             <button className="btn-primary flex items-center gap-4">
                EXPLORE OUR DNA
                <ArrowUpRight size={18} />
             </button>
          </motion.div>
        </div>

        {/* DNA Decoration */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-10 left-10 opacity-5 font-black text-[15vw] select-none text-white pointer-events-none leading-none uppercase"
        >
          DNA
        </div>
      </motion.div>
    </section>
  );
}