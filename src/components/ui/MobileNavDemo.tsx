"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

// Sample navigation data
const navItems = [
  {
    label: "Products",
    children: [
      { label: "Nighwan ERP", href: "/products/nighwan-erp" },
      { label: "LeanPro", href: "/products/leanpro" },
      { label: "B2B Platform", href: "/products/b2b-platform" },
      { label: "IoTGuard", href: "/products/iotguard" },
      { label: "AI Chatbot", href: "/products/ai-chatbot" },
      { label: "Data & BI Platform", href: "/products/data-bi" },
      { label: "Mobile Solutions", href: "/products/mobile-solutions" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "AI & ML", href: "/services/ai-ml" },
      { label: "ERP Solutions", href: "/services/erp" },
      { label: "IoT Development", href: "/services/iot" },
      { label: "Web & Mobile", href: "/services/web-mobile" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Support",
    href: "/support",
  },
];

const MobileNavDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed top-4 right-4 z-40 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Navigation */}
      <MobileNav
        items={navItems}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileNavDemo;
