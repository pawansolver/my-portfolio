"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useModal } from "@/components/context/ModalContext";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const WaveMesh = () => {
  const meshRef = useRef<THREE.Points>(null);
  const rows = 55, cols = 55;
  const count = rows * cols;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colsArr = new Float32Array(count * 3);

    const colorOptions = [
      new THREE.Color("#007bff"),
      new THREE.Color("#FF1493"),
      new THREE.Color("#000000"),
    ];

    for (let i = 0; i < count; i++) {
      const x = (i % cols) - cols / 2;
      const z = Math.floor(i / cols) - rows / 2;
      pos.set([x * 0.45, 0, z * 0.45], i * 3);

      const chosenColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colsArr.set([chosenColor.r, chosenColor.g, chosenColor.b], i * 3);
    }
    return [pos, colsArr];
  }, [count]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        const z = pos[i * 3 + 2];
        pos[i * 3 + 1] = Math.sin(x * 0.3 + time) * Math.cos(z * 0.3 + time) * 1.3;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef} rotation={[-Math.PI / 3.2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.15}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

export default function ParticleSection() {
  const { openModal } = useModal();
  const pathname = usePathname();
  // 🚀 New State to track if Canvas is fully loaded
  const [isReady, setIsReady] = useState(false);

  return (
    // 🔥 FIX: h-screen ki jagah h-[100dvh] taaki mobile browser UI ke saath layout na fate
    <section className="relative w-full h-[100dvh] bg-white overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.02)_0%,rgba(0,123,255,0.02)_30%,white_80%)]" />

      {/* 🚀 Wrapper div that fades in ONLY when Canvas is ready */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth 1.5s fade-in
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <Canvas
          frameloop="always"
          camera={{ position: [0, 10, 18], fov: 40 }}
          onCreated={() => setIsReady(true)} // 🚀 Tells React "WebGL is ready, show it now!"
        >
          <WaveMesh />
        </Canvas>
      </motion.div>

      <div className="container-custom relative z-20 pointer-events-none flex flex-col items-center justify-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center w-full mt-[-5dvh] md:mt-0" // Slight visual lift on mobile
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-6"
          >
            <img src="/images/industry4-logo.png" alt="Industry 4.0" className="w-24 h-24 md:w-36 md:h-36 object-contain drop-shadow-2xl" />
          </motion.div>

          <h1 className="heading-xl !mb-2">
            Nighwan<span className="text-textmain">Tech</span>
          </h1>

          {/* 🔥 FIX: Industry 4.0 & MSME Content Sync */}
          <div className="flex flex-col items-center gap-2 md:gap-4 mt-2 md:mt-4 w-full">
            <p className="text-brandOrange !text-[12px] sm:!text-[14px] md:!text-base tracking-[0.3em] md:tracking-[0.4em] uppercase font-black !mb-0">
              Industry 4.0 & Smart Automation
            </p>
            <p className="text-muted !text-[10px] md:!text-[11px] max-w-xs md:max-w-md font-medium">
              Empowering Indian MSMEs with Scalable Technology & Lean Engineering Solutions since 2020.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pointer-events-auto flex justify-center w-full mt-2"
            >
              <button onClick={() => openModal(`Hero Particle Section - ${pathname}`)} className="btn-primary mx-auto">
                Let's Talk <ArrowRight size={18} className="ml-2" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-white to-transparent z-30 pointer-events-none" />
    </section>
  );
}
