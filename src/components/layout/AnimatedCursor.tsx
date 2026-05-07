'use client';

import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Ek professional icon

export default function IndustryStandardCursor() {
  const [hoverType, setHoverType] = useState<'default' | 'pointer' | 'text' | 'image'>('default');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 1. PERFORMANCE: Optimized Motion Values (useMotionValue doesn't trigger re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // 2. PERFORMANCE: High-Performance Spring Config (Buttery Smooth)
  const springConfig = useMemo(() => ({ damping: 25, stiffness: 250, mass: 0.5 }), []);
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  // 3. PERFORMANCE: Memoized Mouse Move Handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    // 4. SSR SAFETY: Ensure window is defined
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    document.body.style.cursor = 'none';

    // 5. REF-BASED TARGETING: Precise logic using data-attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('button, a, [data-cursor]');
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor') || 'pointer';
        setHoverType(type as any);
      }
    };

    const handleMouseOut = () => setHoverType('default');
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, [handleMouseMove]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* OUTER RING: Smooth & Elastic */}
      <motion.div
        className="absolute w-10 h-10 border border-[#FF6B00] rounded-full flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClicked ? 1.2 : hoverType !== 'default' ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: hoverType === 'image' ? 'rgba(49, 81, 30, 0.2)' : hoverType === 'pointer' ? 'rgba(49, 81, 30, 0.1)' : 'transparent',
        }}
      />

      {/* INNER DOT: With Custom States */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-[#FF6B00] rounded-full mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hoverType === 'image' ? 40 : hoverType === 'pointer' ? 8 : 6,
          height: hoverType === 'image' ? 40 : hoverType === 'pointer' ? 8 : 6,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {/* CUSTOM HOVER STATE: View Icon on Image hover */}
        <AnimatePresence>
          {hoverType === 'image' && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <ArrowUpRight size={12} className="text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
