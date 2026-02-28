'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    Menu,
    Search,
    Bell,
    Settings,
    Plus,
    LogOut,
    User,
    Users,
    Briefcase,
    FileText,
    Building,
    CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from '@/hooks/useSession';
import { logoutAction } from '@/actions/auth';

interface DashboardHeaderProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export const DashboardHeader = ({ isCollapsed, toggleSidebar }: DashboardHeaderProps) => {
    // Auth session
    const { user, isLoading } = useSession();

    // State to manage which dropdown is currently open
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    // Toggle menu function
    const toggleMenu = (menuName: string) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Logout handler
    const handleLogout = async () => {
        // Clear all client-side storage for security
        localStorage.clear();
        sessionStorage.clear();
        await logoutAction();
    };

    // Fallback initials for avatar
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <header ref={headerRef} className="h-16 shrink-0 bg-white border-b border-slate-100 flex items-center justify-between px-5 z-30 relative">

            {/* ── Left: Hamburger + Search ── */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                {/* Hamburger */}
                <button
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200"
                >
                    <Menu size={20} strokeWidth={1.5} />
                </button>

                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search
                        size={16}
                        strokeWidth={1.5}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                        type="text"
                        placeholder="Search clients, projects, tasks..."
                        className="w-full bg-slate-50 rounded-lg py-2 pl-9 pr-4 text-[13px] text-slate-700 placeholder-slate-400 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                </div>
            </div>

            {/* ── Right: Action Icons + User Profile ── */}
            <div className="flex items-center gap-2 sm:gap-4">

                {/* 1. Notifications Menu */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('notifications')}
                        className={`relative p-2 rounded-lg transition-colors duration-200 ${openMenu === 'notifications' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                        <Bell size={20} strokeWidth={1.5} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white" />
                    </button>

                    {/* Notifications Dropdown */}
                    {openMenu === 'notifications' && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                            <div className="px-4 py-2 border-b border-slate-50 flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-800">Notifications</span>
                                <span className="text-xs text-orange-500 cursor-pointer hover:underline">Mark all read</span>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {/* Dummy Notification Item */}
                                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50">
                                    <p className="text-[13px] text-slate-700 font-medium">New Lead Assigned</p>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Rahul Sharma submitted an inquiry.</p>
                                    <span className="text-[10px] text-slate-400 mt-1 block">10 mins ago</span>
                                </div>
                                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <p className="text-[13px] text-slate-700 font-medium">Invoice Paid</p>
                                    <p className="text-[12px] text-slate-500 mt-0.5">INV-2024 has been paid via Stripe.</p>
                                    <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                                </div>
                            </div>
                            <div className="px-4 py-2 border-t border-slate-50 text-center">
                                <button className="text-[13px] text-slate-600 hover:text-orange-500 font-medium">View All</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Settings Menu */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('settings')}
                        className={`p-2 rounded-lg transition-colors duration-200 ${openMenu === 'settings' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                        <Settings size={20} strokeWidth={1.5} />
                    </button>

                    {/* Settings Dropdown */}
                    {openMenu === 'settings' && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                <Building size={16} /> Company Details
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                <Users size={16} /> Team & Roles
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                <Settings size={16} /> Preferences
                            </a>
                        </div>
                    )}
                </div>

                {/* 3. Quick Add (+) Menu */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('quickadd')}
                        className="ml-1 w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-sm shadow-orange-200"
                    >
                        <Plus size={18} strokeWidth={2} className={`transition-transform ${openMenu === 'quickadd' ? 'rotate-45' : ''}`} />
                    </button>

                    {/* Quick Add Dropdown */}
                    {openMenu === 'quickadd' && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                            <div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Create New</div>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left">
                                <User size={16} /> Client / Lead
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left">
                                <Briefcase size={16} /> Project
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left">
                                <CheckCircle size={16} /> Task
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left">
                                <FileText size={16} /> Invoice
                            </button>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-slate-200 mx-1 sm:mx-2 hidden sm:block" />

                {/* 4. User Profile Menu */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('profile')}
                        className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors"
                        disabled={isLoading}
                    >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm shrink-0">
                            {user?.name ? (
                                <div className="h-full w-full relative">
                                    <Image
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || 'default'}`}
                                        alt={user?.name || 'User'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full bg-orange-100 animate-pulse" />
                            )}
                        </div>
                        <div className="flex flex-col items-start hidden sm:flex">
                            <span className="text-[13px] font-semibold text-slate-700 leading-none">
                                {isLoading ? 'Loading...' : (user?.name || 'User')}
                            </span>
                            {!isLoading && user?.role && (
                                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                                    {user.role}
                                </span>
                            )}
                        </div>
                    </button>

                    {/* Profile Dropdown */}
                    {openMenu === 'profile' && !isLoading && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                            <div className="px-4 py-3 border-b border-slate-50 mb-1">
                                <p className="text-[13px] font-semibold text-slate-800">{user?.name || 'User'}</p>
                                <p className="text-[12px] text-slate-500 truncate">{user?.email || 'admin@nighwan.com'}</p>
                            </div>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-700 hover:bg-slate-50 transition-colors">
                                <User size={16} /> My Profile
                            </a>
                            <div className="h-px bg-slate-50 my-1"></div>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors text-left"
                            >
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};
