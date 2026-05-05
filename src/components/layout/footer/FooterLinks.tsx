"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const slugify = (text: string) => text.toLowerCase().trim().replace(/\//g, '-').replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
const baseDirMap: Record<string, string> = { "Services": "services", "Industries": "industries", "About": "about", "Career": "career" };

const footerNavItems = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    children: ["Lean Consultancy", "Branding", "IoT Solutions", "Digital Marketing", "ERP Development", "AI/ML Solutions", "Web / Mobile App", "Data Analytics", "DevOps Services", "IT Support"]
  },
  {
    title: "Industries",
    children: ["Healthcare", "Fintech", "E-commerce", "Education", "Enterprise", "HRMS"]
  },
  {
    title: "About",
    children: ["Company Overview", "Leadership", "Mission & Values", "Why Choose Us"]
  },
  {
    title: "Career",
    children: ["Current Openings", "Internship Programs", "Life at Nighwan"]
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

const FooterLinks = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold text-lg text-black">Exploration</h3>
      <ul className="space-y-3">
        {footerNavItems.map((item) => (
          <li key={item.title} className="flex flex-col">
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 text-sm font-medium"
              >
                {item.title}
              </Link>
            ) : (
              <div className="flex flex-col">
                {/* 🛠️ FIX HERE: gap-[10px] lagaya aur span ko fixed w-[85px] diya */}
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-start gap-[10px] text-gray-600 hover:text-orange-500 transition-all duration-300 text-sm font-medium text-left group outline-none"
                >
                  {/* Fixed width taaki saare arrows ek exact straight line mein aayen */}
                  <span className="w-[85px] whitespace-nowrap block">{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180 text-orange-500' : 'text-gray-400 group-hover:text-orange-500'}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === item.title ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <ul className="pl-4 space-y-2 border-l border-gray-100">
                    {item.children?.map((child) => {
                      const baseDir = baseDirMap[item.title] || item.title.toLowerCase();
                      const href = `/${baseDir}/${slugify(child)}`;
                      return (
                        <li key={child}>
                          <Link
                            href={href}
                            className="text-gray-500 hover:text-orange-500 transition-all duration-300 text-xs block"
                          >
                            {child}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;