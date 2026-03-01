"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

// Section padding aur container-custom aapke global.css se aayenge

export default function AboutMission() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="bg-[#050505] relative overflow-hidden z-20 section-padding">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        {/* Background Layer */}
        <div
          className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-white/10 pb-8 md:pb-16 mb-10 md:mb-16 text-center md:text-left"
          >
            <h2 className="heading-xl !text-white !mb-0">
              ARCHITECTING <br className="hidden md:block" /> DIGITAL LEGACIES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <p className="text-brandOrange font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
                Our Mission
              </p>
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Beyond code, <br className="hidden md:block" /> Engineering Impact.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-7 flex flex-col gap-6 md:gap-8"
            >
              <p className="text-white text-lg md:text-xl font-medium !text-center md:!text-left !mx-0">
                At NighwanTech, we operate at the intersection of high-fidelity design and uncompromising engineering.
              </p>
              <p className="text-white/80 text-sm md:text-[18px] !text-center md:!text-left !mx-0 !max-w-none font-normal leading-relaxed">
                We define the new standard of digital excellence through scalable architecture and seamless human-centric design.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 md:pt-10 border-t border-white/10 mt-2">
                <div className="space-y-2">
                  <h4 className="text-brandOrange font-bold text-base md:text-lg uppercase tracking-tight">Neural Ops</h4>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase">Intelligent Systems</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-brandOrange font-bold text-base md:text-lg uppercase tracking-tight">Global Scale</h4>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase">Robust Infrastructure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-4 md:bottom-10 left-4 md:left-10 opacity-[0.02] font-black text-[25vw] md:text-[20vw] select-none text-white pointer-events-none leading-none overflow-hidden z-0"
        >
          <span>DNA</span>
        </div>
      </motion.div>
    </section>
  );
}