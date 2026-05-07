'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

// Apple-style cubic bezier easing
const transitionEasing = [0.22, 1, 0.36, 1];

export default function Template({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  // Variants with high-end effects like Blur and Y-offset
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20, 
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(12px)' 
    },
    enter: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: transitionEasing as [number, number, number, number],
      }
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -20, 
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(12px)',
      transition: {
        duration: 0.5,
        ease: transitionEasing as [number, number, number, number],
      }
    },
  };

  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      // Performance optimization: Hardware acceleration
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.main>
  );
}
