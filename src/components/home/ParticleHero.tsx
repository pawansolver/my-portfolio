"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleProps {
  count: number;
}

// Approximate NighwanTech text using points in grid pattern
const TextParticles: React.FC<ParticleProps> = ({ count }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Initialize positions & speeds
  const { positions, speeds } = useMemo(() => {
    const pos: Float32Array = new Float32Array(count * 3);
    const spd: number[] = [];

    for (let i = 0; i < count; i++) {
      // Random positions in a box to approximate text bubble cloud
      pos[i * 3] = (Math.random() - 0.5) * 10; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2; // z

      spd.push(0.002 + Math.random() * 0.003);
    }

    return { positions: pos, speeds: spd };
  }, [count]);

  const colors = useMemo(() => {
    const col: Float32Array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      col[i * 3] = 0.5 + Math.random() * 0.5;
      col[i * 3 + 1] = 0.7 + Math.random() * 0.3;
      col[i * 3 + 2] = 1;
    }
    return col;
  }, [count]);

  useFrame(({ mouse }) => {
    if (!pointsRef.current) return;
    const posArray = (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute)
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;

      // Bubble floating motion
      posArray[ix] += Math.sin(Date.now() * 0.001 + ix) * speeds[i] * 0.5;
      posArray[ix + 1] += Math.cos(Date.now() * 0.001 + ix) * speeds[i] * 0.5;
      posArray[ix + 2] += Math.sin(Date.now() * 0.001 + ix * 0.5) * speeds[i] * 0.5;

      // Mouse subtle influence
      posArray[ix] += mouse.x * 0.02;
      posArray[ix + 1] += mouse.y * 0.02;
    }

    (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.12} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
};

const ParticleHero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black relative flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <TextParticles count={2000} />
      </Canvas>

      {/* Overlay text + buttons */}
      <div className="absolute flex flex-col items-center gap-4 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white">NighwanTech</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Innovative solutions that take your business to the next level.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:opacity-90 transition">
            Download x64
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
            Download ARM64
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticleHero;
