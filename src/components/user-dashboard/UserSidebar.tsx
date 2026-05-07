"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderGit2, CreditCard, FileStack, LifeBuoy, LogOut, Settings, ChevronRight, Loader2 } from 'lucide-react';

import { logoutAction } from '@/actions/auth';

const UserSidebar = ({ user, isOpen, onClose }: any) => {
    const pathname = usePathname();
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const menuItems = [
        { name: 'Overview', icon: LayoutDashboard, href: '/user' },
        { name: 'Active Projects', icon: FolderGit2, badge: '1', href: '/user/projects' },
        { name: 'Billing & Invoices', icon: CreditCard, href: '/user/billing' },
        { name: 'Shared Documents', icon: FileStack, href: '/user/documents' },
        {
            name: 'Support',
            icon: LifeBuoy,
            subItems: [
                { name: 'Tickets', href: '/support/tickets' },
                { name: 'Knowledgebase', href: '/support/knowledgebase' }
            ]
        },
    ];

    // 🚀 NAYA: Asli Logout Logic (🔥 FIXED 🔥)
    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            // 1. Clear Frontend LocalStorage
            localStorage.removeItem('clientUser');
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            // 2. Clear Backend Cookies
            await logoutAction();

            // 3. Hard Refresh to Home
            window.location.href = '/';
        } catch (error) {
            console.error("Logout failed:", error);
            setIsLoggingOut(false);
        }
    };

    return (
        <>
            {/* Dark Overlay (Sirf Mobile pe Sidebar khulne par) */}
            {isOpen && (
                <div
                    className="fixed inset-0 top-16 bg-slate-900/40 backdrop-blur-sm z-[40] lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar - Header (16 = 64px) ke niche set kiya hai */}
            <aside
                className={`w-[260px] bg-white h-[calc(100dvh-64px)] fixed left-0 top-16 flex flex-col border-r border-slate-200/80 z-[50] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <nav className="flex-grow px-3 py-6 space-y-1.5 overflow-y-auto no-scrollbar">
                    <div className="px-3 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        General
                    </div>

                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const hasSubMenu = !!item.subItems;
                        const isActive = (!hasSubMenu && item.href === pathname) || (hasSubMenu && pathname.includes('/support'));

                        return (
                            <div key={item.name} className="w-full">
                                {hasSubMenu ? (
                                    <button
                                        onClick={() => setIsSupportOpen(!isSupportOpen)}
                                        className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-slate-600 hover:bg-slate-50`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} className="text-slate-400 group-hover:text-brandOrange" />
                                            <span className="text-[13px] font-medium">{item.name}</span>
                                        </div>
                                        <ChevronRight size={14} className={`text-slate-400 transition-transform ${isSupportOpen ? 'rotate-90' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        onClick={() => {
                                            if (window.innerWidth < 1024) onClose();
                                        }}
                                        className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-textmain text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-brandOrange'} />
                                            <span className={`text-[13px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
                                        </div>
                                    </Link>
                                )}

                                {hasSubMenu && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSupportOpen ? 'max-h-40 opacity-100 mt-1.5 mb-2' : 'max-h-0 opacity-0'}`}>
                                        <div className="ml-6 border-l-2 border-slate-100 pl-2.5 flex flex-col gap-1">
                                            {item.subItems!.map((sub) => (
                                                <Link key={sub.name} href={sub.href} className="text-[12px] font-medium px-3 py-2 rounded-lg text-slate-500 hover:text-textmain hover:bg-slate-50">
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="p-3 border-t border-slate-200/80">
                    <Link href="/user/settings" className="p-2 w-full text-slate-500 hover:bg-slate-50 rounded-xl flex items-center gap-3 text-sm font-medium">
                        <Settings size={18} /> Settings
                    </Link>

                    {/* 🚀 FIXED: Asli Logout Function Call */}
                    <button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="p-2 w-full text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl flex items-center gap-3 text-sm font-medium mt-1 disabled:opacity-50"
                    >
                        {isLoggingOut ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Logging out...
                            </>
                        ) : (
                            <>
                                <LogOut size={18} /> Logout
                            </>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
};

export default UserSidebar;
