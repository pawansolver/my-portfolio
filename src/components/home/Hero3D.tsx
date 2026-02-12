"use client";

/**
 * Hero3D Component - Full-screen 3D particle hero section
 * 
 * Features:
 * - Full-screen gradient background with optional video overlay
 * - 3D particle system forming "NighwanTech" text using Three.js
 * - GPU-optimized rendering with InstancedBufferGeometry
 * - Interactive mouse/touch particle repulsion effect
 * - Ambient and point lighting for depth
 * - Smooth floating animation with rotation
 * - Responsive design with Tailwind CSS
 * - Modern SaaS aesthetic (Stripe/Webflow inspired)
 */

import React, { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// ============================================
// Types and Interfaces
// ============================================

interface ParticleSystemProps {
  text: string;
  particleCount?: number;
  particleSize?: number;
  colors?: string[];
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

interface ParticleData {
  position: THREE.Vector3;
  originalPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  phase: number;
}

// ============================================
// Utility Functions
// ============================================

/**
 * Convert text to particle positions using canvas sampling
 * Creates a grid of points based on text pixel density
 */
const generateTextParticles = (
  text: string,
  count: number,
  colors: string[]
): ParticleData[] => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  
  // Set canvas size for text sampling
  canvas.width = 800;
  canvas.height = 200;
  
  // Clear and setup text rendering
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 80px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
  // Get pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  const positions: { x: number; y: number }[] = [];
  
  // Sample pixels to find text positions
  const step = 3; // Sampling step - higher = fewer particles
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const index = (y * canvas.width + x) * 4;
      const brightness = pixels[index]; // Red channel (grayscale)
      
      if (brightness > 128) {
        positions.push({ x, y });
      }
    }
  }
  
  // Create particle data
  const particles: ParticleData[] = [];
  const colorPalette = colors.map((c) => new THREE.Color(c));
  
  // Limit to requested count
  const selectedPositions = positions
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, positions.length));
  
  selectedPositions.forEach((pos, i) => {
    // Map 2D canvas coordinates to 3D space
    const x = (pos.x / canvas.width - 0.5) * 15;
    const y = -(pos.y / canvas.height - 0.5) * 4;
    const z = (Math.random() - 0.5) * 3;
    
    const position = new THREE.Vector3(x, y, z);
    
    particles.push({
      position: position.clone(),
      originalPosition: position.clone(),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      size: Math.random() * 0.08 + 0.04,
      phase: Math.random() * Math.PI * 2,
    });
  });
  
  // Fill remaining slots with random positions if needed
  while (particles.length < count) {
    const x = (Math.random() - 0.5) * 15;
    const y = (Math.random() - 0.5) * 4;
    const z = (Math.random() - 0.5) * 3;
    
    const position = new THREE.Vector3(x, y, z);
    
    particles.push({
      position: position.clone(),
      originalPosition: position.clone(),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      size: Math.random() * 0.06 + 0.02,
      phase: Math.random() * Math.PI * 2,
    });
  }
  
  return particles.slice(0, count);
};

// ============================================
// 3D Components
// ============================================

/**
 * ParticleText - Main 3D particle system component
 * Renders thousands of particles forming text with interactive physics
 */
const ParticleText: React.FC<ParticleSystemProps> = ({
  text,
  particleCount = 2500,
  particleSize = 0.05,
  colors = ["#00d9ff", "#0066ff", "#7000ff", "#ff00a0", "#ffd700"],
  mousePosition,
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  
  // Generate particle data once on mount
  const particles = useMemo(
    () => generateTextParticles(text, particleCount, colors),
    [text, particleCount, colors]
  );
  
  // Arrays for instanced mesh updates
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorArray = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);
  
  // Initialize colors
  useEffect(() => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      colorArray[i * 3] = particle.color.r;
      colorArray[i * 3 + 1] = particle.color.g;
      colorArray[i * 3 + 2] = particle.color.b;
    });
    
    meshRef.current.instanceColor!.needsUpdate = true;
  }, [particles, colorArray]);
  
  // Animation loop - runs every frame
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    const mouseX = mousePosition.current.x * viewport.width * 0.5;
    const mouseY = mousePosition.current.y * viewport.height * 0.5;
    
    particles.forEach((particle, i) => {
      // Calculate mouse interaction (repulsion effect)
      const dx = particle.position.x - mouseX;
      const dy = particle.position.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const interactionRadius = 2.5;
      
      // Apply repulsion force when mouse is near
      if (dist < interactionRadius) {
        const force = (interactionRadius - dist) / interactionRadius;
        const angle = Math.atan2(dy, dx);
        particle.velocity.x += Math.cos(angle) * force * 0.05;
        particle.velocity.y += Math.sin(angle) * force * 0.05;
      }
      
      // Floating animation with sine wave
      const floatX = Math.sin(time * 0.5 + particle.phase) * 0.002;
      const floatY = Math.cos(time * 0.3 + particle.phase) * 0.002;
      const floatZ = Math.sin(time * 0.4 + particle.phase * 0.5) * 0.001;
      
      // Apply velocity with damping
      particle.velocity.x += floatX;
      particle.velocity.y += floatY;
      particle.velocity.z += floatZ;
      particle.velocity.multiplyScalar(0.95); // Damping
      
      // Return to original position (spring force)
      const returnForce = 0.03;
      particle.velocity.x += (particle.originalPosition.x - particle.position.x) * returnForce;
      particle.velocity.y += (particle.originalPosition.y - particle.position.y) * returnForce;
      particle.velocity.z += (particle.originalPosition.z - particle.position.z) * returnForce;
      
      // Update position
      particle.position.add(particle.velocity);
      
      // Update instance
      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.size * (1 + Math.sin(time + particle.phase) * 0.2));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // Gentle rotation of entire text
    meshRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    meshRef.current.rotation.x = Math.cos(time * 0.08) * 0.05;
  });
  
  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, particleCount]}
      frustumCulled={false}
    >
      {/* Optimized particle geometry - small spheres */}
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

/**
 * SceneLighting - Ambient and point lights for depth
 */
const SceneLighting: React.FC = () => {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main point light from upper right */}
      <pointLight
        position={[10, 10, 10]}
        intensity={1.5}
        color="#00d9ff"
        distance={50}
        decay={2}
      />
      
      {/* Rim light from behind */}
      <pointLight
        position={[-10, 5, -10]}
        intensity={1}
        color="#7000ff"
        distance={50}
        decay={2}
      />
      
      {/* Fill light from below */}
      <pointLight
        position={[0, -10, 5]}
        intensity={0.5}
        color="#ff00a0"
        distance={30}
        decay={2}
      />
    </>
  );
};

/**
 * InteractiveCamera - Handles camera movement based on mouse
 */
const InteractiveCamera: React.FC<{
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}> = ({ mousePosition }) => {
  const { camera } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame(() => {
    // Smooth camera follow
    targetRotation.current.x = mousePosition.current.y * 0.1;
    targetRotation.current.y = mousePosition.current.x * 0.1;
    
    camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * 0.05;
  });
  
  return null;
};

// ============================================
// Main Hero Component
// ============================================

interface Hero3DProps {
  headline?: string;
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  particleText?: string;
  showVideoBackground?: boolean;
  videoSrc?: string;
}

const Hero3D: React.FC<Hero3DProps> = ({
  headline = "Transform Your Business",
  subheadline = "Next-generation SaaS solutions powered by AI and cutting-edge technology",
  primaryCta = "Get Started",
  secondaryCta = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  particleText = "NighwanTech",
  showVideoBackground = false,
  videoSrc,
}) => {
  // Mouse position tracking for particle interaction
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Track mouse/touch position
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    mousePosition.current = { x, y };
  }, []);
  
  // Gradient color palette for particles
  const particleColors = useMemo(
    () => [
      "#00d9ff", // Cyan
      "#0066ff", // Blue
      "#7000ff", // Purple
      "#ff00a0", // Pink
      "#ffd700", // Gold
      "#00ff88", // Emerald
    ],
    []
  );
  
  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900"
      onPointerMove={handlePointerMove}
    >
      {/* Background Video (Optional) */}
      {showVideoBackground && videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-purple-900/60 to-slate-900/80" />
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{
            position: [0, 0, 12],
            fov: 60,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 2]} // Responsive pixel ratio
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          {/* Scene lighting */}
          <SceneLighting />
          
          {/* Interactive particle text */}
          <ParticleText
            text={particleText}
            particleCount={isMobile ? 1500 : 2500}
            colors={particleColors}
            mousePosition={mousePosition}
          />
          
          {/* Ambient stars background */}
          <Stars
            radius={100}
            depth={50}
            count={500}
            factor={4}
            saturation={0.5}
            fade
            speed={0.5}
          />
          
          {/* Interactive camera movement */}
          <InteractiveCamera mousePosition={mousePosition} />
          
          {/* Optional orbit controls for debugging */}
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Now with AI-Powered Solutions
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onPrimaryClick}
              className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">{primaryCta}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </button>
            
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              {secondaryCta}
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-20" />
    </section>
  );
};

export default Hero3D;
