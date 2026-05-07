'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Dropdown = ({ children, onClose, isOpen }: DropdownProps) => {
  // ESC key se close karne ke liye
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Background scroll lock
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. DARK OVERLAY - visibility fix karne ke liye */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[998]"
          />

          {/* 2. FULL HEIGHT WHITE DROPDOWN */}
          <motion.div
            initial={{ x: '100%' }} // Right side se slide hoke aayega
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-white shadow-2xl z-[999] flex flex-col"
          >
            {/* Header: Close Button */}
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <span className="font-black text-brand-orange text-sm uppercase tracking-widest">Menu</span>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Area: Scrolling allowed here */}
            <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
              <div className="space-y-4">
                {children}
              </div>
            </div>

            {/* Footer: Branding */}
            <div className="p-8 border-t border-slate-100 bg-slate-50/50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                Nighwan Technologies • 2026
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
