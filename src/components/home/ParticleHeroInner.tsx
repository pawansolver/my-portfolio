"use client";

import React, { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";
import { Points, BufferGeometry, BufferAttribute, PointsMaterial, AmbientLight, PointLight, Fog } from "three";

interface ParticleProps {
  positions: THREE.Vector3[];
  colors: THREE.Color[];
  scatter: boolean;
  mousePosition: THREE.Vector2;
}

const ParticleSystem: React.FC<ParticleProps> = ({ positions, colors, scatter, mousePosition }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [targetPositions, setTargetPositions] = useState<THREE.Vector3[]>(positions);
  const originalPositions = useMemo(() => positions, [positions]);

  // Scatter logic with smooth transitions
  useEffect(() => {
    if (scatter) {
      const scattered = positions.map(
        (pos) =>
          new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
          )
      );
      setTargetPositions(scattered);
    } else {
      setTargetPositions(originalPositions);
    }
  }, [scatter, positions, originalPositions]);

  // Mouse interaction effect
  useEffect(() => {
    if (!pointsRef.current) return;
    
    const mouseInfluenceRadius = 5;
    const mouseInfluenceStrength = 2;
    
    const positionsArray = (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    
    for (let i = 0; i < positions.length; i++) {
      const ix = i * 3;
      const particlePos = new THREE.Vector3(
        positionsArray[ix],
        positionsArray[ix + 1],
        positionsArray[ix + 2]
      );
      
      const mousePos = new THREE.Vector3(mousePosition.x, mousePosition.y, 0);
      const distance = particlePos.distanceTo(mousePos);
      
      if (distance < mouseInfluenceRadius) {
        const influence = (1 - distance / mouseInfluenceRadius) * mouseInfluenceStrength;
        const direction = particlePos.clone().sub(mousePos).normalize();
        targetPositions[i] = targetPositions[i].clone().add(direction.multiplyScalar(influence));
      }
    }
  }, [mousePosition, positions, targetPositions]);

  // Smooth animation with easing
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positionsArray = (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < targetPositions.length; i++) {
      const ix = i * 3;
      const targetX = targetPositions[i].x + Math.sin(time + i * 0.1) * 0.02;
      const targetY = targetPositions[i].y + Math.cos(time + i * 0.1) * 0.02;
      const targetZ = targetPositions[i].z + Math.sin(time * 0.5 + i * 0.1) * 0.02;
      
      // Smooth easing
      positionsArray[ix] += (targetX - positionsArray[ix]) * 0.08;
      positionsArray[ix + 1] += (targetY - positionsArray[ix + 1]) * 0.08;
      positionsArray[ix + 2] += (targetZ - positionsArray[ix + 2]) * 0.08;
    }
    
    (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    
    // Rotate the entire particle system slowly
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
      pointsRef.current.rotation.x = Math.cos(time * 0.1) * 0.05;
    }
  });

  // Generate vibrant colors
  const colorsArray = useMemo(() => {
    const arr = new Float32Array(colors.length * 3);
    colors.forEach((c, i) => {
      // Create vibrant, glowing colors
      const hue = (i / colors.length) * 360;
      const color = new THREE.Color();
      color.setHSL(hue / 360, 0.8, 0.6);
      
      arr[i * 3] = color.r;
      arr[i * 3 + 1] = color.g;
      arr[i * 3 + 2] = color.b;
    });
    return arr;
  }, [colors]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length}
          array={new Float32Array(positions.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length}
          array={colorsArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const MouseTracker: React.FC<{ onMouseMove: (pos: THREE.Vector2) => void }> = ({ onMouseMove }) => {
  const { camera, gl } = useThree();
  
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Convert to world coordinates
    const vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject(camera as THREE.PerspectiveCamera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    
    onMouseMove(new THREE.Vector2(pos.x, pos.y));
  }, [camera, gl, onMouseMove]);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
  
  return null;
};

const ParticleHeroInner: React.FC = () => {
  const [scatter, setScatter] = useState(false);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));
  const font = useMemo(() => new FontLoader().parse(helvetiker), []);

  // Create text points with better sampling
  const textPoints = useMemo(() => {
    const textGeo = new TextGeometry("NighwanTech", {
      font,
      size: 2.5,
      curveSegments: 8,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4,
    } as any);
    
    textGeo.center();
    
    // Sample points from the text geometry
    const positions: THREE.Vector3[] = [];
    const colors: THREE.Color[] = [];
    const positionAttr = textGeo.attributes.position;
    
    // Sample every nth vertex for performance
    const sampleRate = Math.max(1, Math.floor(positionAttr.count / 2000));
    
    for (let i = 0; i < positionAttr.count; i += sampleRate) {
      const vertex = new THREE.Vector3().fromBufferAttribute(positionAttr, i);
      positions.push(vertex);
      colors.push(new THREE.Color());
    }
    
    // Add some random points around the text for density
    for (let i = 0; i < positions.length * 0.3; i++) {
      const randomPos = positions[Math.floor(Math.random() * positions.length)].clone();
      randomPos.x += (Math.random() - 0.5) * 0.5;
      randomPos.y += (Math.random() - 0.5) * 0.5;
      randomPos.z += (Math.random() - 0.5) * 0.5;
      positions.push(randomPos);
      colors.push(new THREE.Color());
    }
    
    return { positions, colors };
  }, [font]);

  // Animation sequence with loop
  useEffect(() => {
    const runAnimation = () => {
      // Initial state: particles form text
      setScatter(false);
      
      // After 4 seconds: scatter particles
      const timer1 = setTimeout(() => setScatter(true), 4000);
      
      // After 10 seconds total: reform text
      const timer2 = setTimeout(() => setScatter(false), 10000);
      
      // Loop the animation after 15 seconds
      const timer3 = setTimeout(runAnimation, 15000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    };
    
    const cleanup = runAnimation();
    return cleanup;
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-blue-500/10 animate-pulse" />
      </div>
      
      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        className="absolute inset-0"
      >
        {/* Lighting setup for depth */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
        <pointLight position={[0, 10, -10]} intensity={0.3} color="#00ffff" />
        
        {/* Particle system */}
        <ParticleSystem
          positions={textPoints.positions}
          colors={textPoints.colors}
          scatter={scatter}
          mousePosition={mousePosition}
        />
        
        {/* Mouse tracking */}
        <MouseTracker onMouseMove={setMousePosition} />
        
        {/* Fog for depth effect */}
        <fog attach="fog" args={['#000000', 10, 50]} />
      </Canvas>
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            NighwanTech
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Innovative solutions for the digital future
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleHeroInner;
