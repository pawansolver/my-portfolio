"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
    <section className="section bg-[#050505] relative overflow-hidden z-20">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full flex items-center justify-center section-padding"
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

        <div className="container-custom relative z-10">
          {/* Main Header - Global Sync (Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-white/10 pb-10 md:pb-16 mb-12 md:mb-20"
          >
            <h2 className="heading-xl">
              ARCHITECTING <br className="hidden md:block" /> DIGITAL LEGACIES
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

            {/* Left: Bold Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <p className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4">
                Our Mission
              </p>
              <h3 className="text-white text-3xl md:text-5xl font-light leading-tight">
                Beyond code Engineering Impact <br />
                <span className="font-bold italic text-brandOrange"></span>
              </h3>
            </motion.div>

            {/* Right: White Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-7 flex flex-col gap-8"
            >
              {/* Changed text-brandGreen to text-white */}
              <p className="text-white text-lg md:text-xl font-medium !text-left !mx-0">
                At NighwanTech, we operate at the intersection of high-fidelity design and uncompromising engineering. We are an elite partner for visionary brands.
              </p>

              {/* Changed text-muted to text-white with opacity for professional look */}
              <p className="text-white/80 text-[15px] md:text-[18px] !text-left !mx-0 !max-w-none font-normal leading-relaxed">
                From architecting high-performance enterprise platforms to deploying neural-driven ecosystems, our approach is built on precision. We don't just solve problems; we define the new standard of digital excellence through scalable architecture and seamless human-centric design.
              </p>

              {/* Pillar Accents */}
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                <div className="space-y-1">
                  <h4 className="text-brandOrange font-bold text-lg uppercase tracking-tight">Neural Ops</h4>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Intelligent Systems</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-brandOrange font-bold text-lg uppercase tracking-tight">Global Scale</h4>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Robust Infrastructure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DNA Decoration */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-10 left-10 opacity-[0.02] font-black text-[20vw] select-none text-white pointer-events-none leading-none"
        >
          DNA
        </div>
      </motion.div>
    </section>
  );
}