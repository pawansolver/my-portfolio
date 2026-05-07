'use client';
import React, { createContext, useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import ProjectInquiryModal from '@/components/modals/ProjectInquiryModal';
import AuthModal from '@/components/modals/AuthModal';

// ─── Context Types ───────────────────────────────────────
interface ModalContextType {
  openModal: (source?: string) => void;
  openAuthModal: (tab?: 'login' | 'signup') => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => { },
  openAuthModal: () => { },
});

// ─── Provider ───────────────────────────────────────────
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  // Project Inquiry Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [sourceName, setSourceName] = useState('');
  const pathname = usePathname();

  // Auth Modal state
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openModal = (source?: string) => {
    if (source) setSourceName(source);
    setIsOpen(true);
  };

  const openAuthModal = () => {
    setIsAuthOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal, openAuthModal }}>
      {children}

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sourcePage={sourceName || pathname}
      />

      {/* Auth (Login / Sign Up) Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
