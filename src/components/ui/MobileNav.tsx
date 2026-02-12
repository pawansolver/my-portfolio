"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ items, isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const handleLinkClick = () => {
    setExpandedItem(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <span className="text-xl font-bold text-white">Menu</span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-700">
          {items.map((item) => (
            <li key={item.label} className="px-6">
              {item.children ? (
                <div>
                  {/* Parent Item with Toggle */}
                  <button
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full py-4 text-white hover:text-gray-300 transition-colors"
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        expandedItem === item.label ? "rotate-90" : ""
                      }`}
                    >
                      {expandedItem === item.label ? (
                        <X size={24} className="text-gray-300" />
                      ) : (
                        <ChevronRight size={24} />
                      )}
                    </span>
                  </button>

                  {/* Sub-items with Animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === item.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pb-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href || "#"}
                            onClick={handleLinkClick}
                            className="block py-2 pl-4 text-gray-300 hover:text-white transition-colors border-l-2 border-gray-600 hover:border-white"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href || "#"}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between w-full py-4 text-white hover:text-gray-300 transition-colors"
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  <ChevronRight size={24} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
