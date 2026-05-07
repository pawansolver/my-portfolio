'use client';

import { motion, Variants, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  staggerDelay?: number;
}

// Parent: Handles the timing of children
const containerVariants: Variants = {
  initial: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

// Child: Handles the individual movement
export const itemVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.5 } 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.12, 
  className,
  ...props 
}: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Trigger when 100px inside viewport
      custom={staggerDelay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * UPGRADED StaggerItem: 
 * Includes Layout support for smooth reordering and Hover/Tap feedback.
 */
export const StaggerItem = ({ children, className }: { children: ReactNode, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      layout // Smoothly animates if the layout changes
      // Desktop Hover Effect
      whileHover={shouldReduceMotion ? {} : { 
        y: -10, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      // Mobile/Click Feedback
      whileTap={{ scale: 0.97 }} 
    >
      {children}
    </motion.div>
  );
}
