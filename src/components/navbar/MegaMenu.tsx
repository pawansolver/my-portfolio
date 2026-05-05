'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MegaMenuProps {
  onClose: () => void;
}

const MegaMenu = ({ onClose }: MegaMenuProps) => {
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Close when pressing ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={megaMenuRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mega-menu"
      >
        <div className="flex">
          {/* Left Column */}
          <div className="w-1/2 bg-gray-900 text-white p-6">
            <h3 className="text-lg font-medium mb-2">About Us</h3>
            <p className="text-gray-300 text-sm mb-6">
              We are a team of passionate technologists dedicated to building innovative solutions that transform businesses and improve lives.
            </p>
            <Link 
              href="/about" 
              className="text-primary-400 hover:text-primary-300 text-sm font-medium inline-flex items-center group transition-colors"
              onClick={onClose}
            >
              Discover the difference
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-1/2 p-6">
            <div className="grid grid-cols-1 gap-y-2">
              <Link 
                href="/about/brand" 
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                Brand
              </Link>
              <Link 
                href="/about/leadership" 
                className="px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-md transition-colors"
                onClick={onClose}
              >
                Leadership
              </Link>
              <Link 
                href="/about/community" 
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                Community
              </Link>
              <Link 
                href="/about/sustainability" 
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                Sustainability
              </Link>
              <Link 
                href="/about/inclusion" 
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                Inclusion
              </Link>
              <Link 
                href="/about/values" 
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                Values
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MegaMenu;
