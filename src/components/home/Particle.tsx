"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

interface Props {
  count: number;
}

const NeuralNetwork: React.FC<Props> = ({ count }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    // RADIUS CHOTA KIYA: Taaki globe screen ke center mein fit rahe
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const baseRadius = isMobile ? 3.0 : 4.0; 
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      pos.set([
        baseRadius * Math.sin(phi) * Math.cos(theta),
        baseRadius * Math.sin(phi) * Math.sin(theta),
        baseRadius * Math.cos(phi)
      ], i * 3);
    }

    const lines: number[] = [];
    const maxDistance = 2.5; 
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          lines.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }
    return { positions: pos, linePositions: new Float32Array(lines) };
  }, [count]);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
      // Mouse movement limited taaki movement se globe screen ke bahar na jaye
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 0.5, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 0.5, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* PARTICLE SIZE CHOTA KIYA: 0.05 for clean look */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color="#ff5500" 
          transparent 
          opacity={1} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false} 
          sizeAttenuation 
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ff4d00" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
};

const ParticleSection: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        {/* CAMERA DISTANCE BADHAYA: [0, 0, 20] ensures full visibility */}
        <Canvas 
          camera={{ position: [0, 0, 20], fov: 35 }}
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 2]}
        >
          <NeuralNetwork count={240} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-[90px] font-black text-white leading-none mb-4 uppercase tracking-tighter">
            NIGHWAN<span className="text-[#ff4d00]">TECH</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-10 md:w-24 bg-gradient-to-l from-[#ff4d00] to-transparent" />
            <p className="text-white/40 text-[8px] md:text-xs font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase whitespace-nowrap">
              Neural Intelligence Systems
            </p>
            <div className="h-[1px] w-10 md:w-24 bg-gradient-to-r from-[#ff4d00] to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Edge Fading: Bottom se cutting hide karne ke liye gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent z-20" />
    </div>
  );
};

export default ParticleSection;