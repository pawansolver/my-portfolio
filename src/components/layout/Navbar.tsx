"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-400">
          Nighwan Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
          <li>
            <Link
              href="/"
              className={isActive("/") ? "text-blue-500" : "hover:text-blue-500 transition-colors"}
            >
              Home
            </Link>
          </li>

          {/* Who We Are - Desktop Hover Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-500 transition-colors cursor-default">
              Who We Are ▾
            </button>

            <ul className="absolute top-full left-0 mt-2 bg-gray-800 shadow-xl rounded-md p-4 w-72 space-y-2 max-h-80 overflow-y-auto border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link onClick={closeAll} href="/who-we-are/about-mission" className="block text-gray-200 hover:text-white transition-colors">About & Mission</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/leadership" className="block text-gray-200 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/journey" className="block text-gray-200 hover:text-white transition-colors">Our Journey</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/awards" className="block text-gray-200 hover:text-white transition-colors">Awards & Recognition</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/ethics" className="block text-gray-200 hover:text-white transition-colors">Corporate Ethics</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/responsibility" className="block text-gray-200 hover:text-white transition-colors">Corporate Responsibility</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/global-presence" className="block text-gray-200 hover:text-white transition-colors">Global Presence</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/products-solutions" className="block text-gray-200 hover:text-white transition-colors">Products & Solutions</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/clients-partners" className="block text-gray-200 hover:text-white transition-colors">Clients & Partners</Link></li>
              <li><Link onClick={closeAll} href="/who-we-are/newsroom" className="block text-gray-200 hover:text-white transition-colors">Newsroom</Link></li>
            </ul>
          </li>

          {/* What We Think - Desktop Hover Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-500 transition-colors cursor-default">
              What We Think ▾
            </button>

            <ul className="absolute top-full left-0 mt-2 bg-gray-800 shadow-xl rounded-md p-4 w-64 space-y-2 border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link onClick={closeAll} href="/what-we-think/ai-ml" className="block text-gray-200 hover:text-white transition-colors">AI & ML</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/erp" className="block text-gray-200 hover:text-white transition-colors">ERP</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/iot" className="block text-gray-200 hover:text-white transition-colors">IoT</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/web-mobile" className="block text-gray-200 hover:text-white transition-colors">Web & Mobile</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/data-analytics" className="block text-gray-200 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/lean-consultancy" className="block text-gray-200 hover:text-white transition-colors">Lean Consultancy</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/digital-marketing" className="block text-gray-200 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/devops" className="block text-gray-200 hover:text-white transition-colors">DevOps</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/success-stories" className="block text-gray-200 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link onClick={closeAll} href="/what-we-think/future-tech" className="block text-gray-200 hover:text-white transition-colors">Future Tech</Link></li>
            </ul>
          </li>

          {/* Products - Desktop Hover Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-500 transition-colors cursor-default">
              Products ▾
            </button>

            <ul className="absolute top-full left-0 mt-2 bg-gray-800 shadow-xl rounded-md p-4 w-64 space-y-2 border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link onClick={closeAll} href="/products/nighwan-erp" className="block text-gray-200 hover:text-white transition-colors">Nighwan ERP</Link></li>
              <li><Link onClick={closeAll} href="/products/leanpro" className="block text-gray-200 hover:text-white transition-colors">LeanPro</Link></li>
              <li><Link onClick={closeAll} href="/products/b2b-platform" className="block text-gray-200 hover:text-white transition-colors">B2B Platform</Link></li>
              <li><Link onClick={closeAll} href="/products/iotguard" className="block text-gray-200 hover:text-white transition-colors">IoTGuard</Link></li>
              <li><Link onClick={closeAll} href="/products/ai-chatbot" className="block text-gray-200 hover:text-white transition-colors">AI Chatbot</Link></li>
              <li><Link onClick={closeAll} href="/products/data-bi" className="block text-gray-200 hover:text-white transition-colors">Data & BI Platform</Link></li>
              <li><Link onClick={closeAll} href="/products/mobile-solutions" className="block text-gray-200 hover:text-white transition-colors">Mobile Solutions</Link></li>
              <li><Link onClick={closeAll} href="/products/digital-marketing" className="block text-gray-200 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link onClick={closeAll} href="/products/devops-cloud" className="block text-gray-200 hover:text-white transition-colors">DevOps & Cloud</Link></li>
            </ul>
          </li>

          <li>
            <Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black hover:text-blue-500 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg px-6 py-4 space-y-4 border-t border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Home */}
          <Link onClick={closeAll} href="/" className="block py-2 text-black hover:text-white transition-colors">Home</Link>

          {/* Who We Are - Mobile Expandable */}
          <div>
            <button
              onClick={() => toggleMenu("who")}
              className="flex items-center justify-between w-full py-2 text-black font-medium hover:text-white transition-colors"
            >
              Who We Are
              <span>{openMenu === "who" ? "▾" : "▸"}</span>
            </button>
            {openMenu === "who" && (
              <ul className="mt-2 space-y-2 pl-4 border-l border-gray-700">
                <li><Link onClick={closeAll} href="/who-we-are/about-mission" className="block py-1 text-black hover:text-white transition-colors">About & Mission</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/leadership" className="block py-1 text-black hover:text-white transition-colors">Leadership</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/journey" className="block py-1 text-black hover:text-white transition-colors">Our Journey</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/awards" className="block py-1 text-black hover:text-white transition-colors">Awards & Recognition</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/ethics" className="block py-1 text-black hover:text-white transition-colors">Corporate Ethics</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/responsibility" className="block py-1 text-black hover:text-white transition-colors">Corporate Responsibility</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/global-presence" className="block py-1 text-black hover:text-white transition-colors">Global Presence</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/products-solutions" className="block py-1 text-black hover:text-white transition-colors">Products & Solutions</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/clients-partners" className="block py-1 text-black hover:text-white transition-colors">Clients & Partners</Link></li>
                <li><Link onClick={closeAll} href="/who-we-are/newsroom" className="block py-1 text-black hover:text-white transition-colors">Newsroom</Link></li>
              </ul>
            )}
          </div>

          {/* What We Think - Mobile Expandable */}
          <div>
            <button
              onClick={() => toggleMenu("think")}
              className="flex items-center justify-between w-full py-2 text-black font-medium hover:text-white transition-colors"
            >
              What We Think
              <span>{openMenu === "think" ? "▾" : "▸"}</span>
            </button>
            {openMenu === "think" && (
              <ul className="mt-2 space-y-2 pl-4 border-l border-gray-700">
                <li><Link onClick={closeAll} href="/what-we-think/ai-ml" className="block py-1 text-black hover:text-white transition-colors">AI & ML</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/erp" className="block py-1 text-black hover:text-white transition-colors">ERP</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/iot" className="block py-1 text-black hover:text-white transition-colors">IoT</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/web-mobile" className="block py-1 text-black hover:text-white transition-colors">Web & Mobile</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/data-analytics" className="block py-1 text-black hover:text-white transition-colors">Data Analytics</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/lean-consultancy" className="block py-1 text-black hover:text-white transition-colors">Lean Consultancy</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/digital-marketing" className="block py-1 text-black hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/devops" className="block py-1 text-black hover:text-white transition-colors">DevOps</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/success-stories" className="block py-1 text-black hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link onClick={closeAll} href="/what-we-think/future-tech" className="block py-1 text-black hover:text-white transition-colors">Future Tech</Link></li>
              </ul>
            )}
          </div>

          {/* Products - Mobile Expandable */}
          <div>
            <button
              onClick={() => toggleMenu("products")}
              className="flex items-center justify-between w-full py-2 text-black font-medium hover:text-white transition-colors"
            >
              Products
              <span>{openMenu === "products" ? "▾" : "▸"}</span>
            </button>
            {openMenu === "products" && (
              <ul className="mt-2 space-y-2 pl-4 border-l border-gray-700">
                <li><Link onClick={closeAll} href="/products/nighwan-erp" className="block py-1 text-black hover:text-white transition-colors">Nighwan ERP</Link></li>
                <li><Link onClick={closeAll} href="/products/leanpro" className="block py-1 text-black hover:text-white transition-colors">LeanPro</Link></li>
                <li><Link onClick={closeAll} href="/products/b2b-platform" className="block py-1 text-black hover:text-white transition-colors">B2B Platform</Link></li>
                <li><Link onClick={closeAll} href="/products/iotguard" className="block py-1 text-black hover:text-white transition-colors">IoTGuard</Link></li>
                <li><Link onClick={closeAll} href="/products/ai-chatbot" className="block py-1 text-black hover:text-white transition-colors">AI Chatbot</Link></li>
                <li><Link onClick={closeAll} href="/products/data-bi" className="block py-1 text-black hover:text-white transition-colors">Data & BI Platform</Link></li>
                <li><Link onClick={closeAll} href="/products/mobile-solutions" className="block py-1 text-black hover:text-white transition-colors">Mobile Solutions</Link></li>
                <li><Link onClick={closeAll} href="/products/digital-marketing" className="block py-1 text-black hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link onClick={closeAll} href="/products/devops-cloud" className="block py-1 text-black hover:text-white transition-colors">DevOps & Cloud</Link></li>
              </ul>
            )}
          </div>

          {/* Careers */}
          <Link onClick={closeAll} href="/careers" className="block py-2 text-black hover:text-white transition-colors">Careers</Link>

          {/* Contact */}
          <Link onClick={closeAll} href="/contact" className="block py-2 text-black hover:text-white transition-colors">Contact</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
