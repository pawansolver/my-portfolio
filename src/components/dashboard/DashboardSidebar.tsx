'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BarChart3,
    Users,
    Briefcase,
    TrendingUp,
    LifeBuoy,
    ChevronRight,
} from 'lucide-react';

interface DashboardSidebarProps {
    isCollapsed: boolean;
}

type MenuItem = {
    icon: React.ElementType;
    label: string;
    href?: string;
    children?: string[];
};

// 🚀 Simplified 5 Core Menu Items
const menuItems: MenuItem[] = [
    { icon: BarChart3, label: 'Dashboard', href: '/crm-dashboard' },
    { icon: Users, label: 'Customers', children: ['Clients', 'Client Users'] },
    { icon: TrendingUp, label: 'Sales', children: ['Leads', 'Invoices', 'Proposals', 'Contracts', 'Expenses'] },
    { icon: Briefcase, label: 'Projects', children: ['Projects', 'Tasks', 'Templates'] },
    { icon: LifeBuoy, label: 'Support', children: ['Tickets', 'Canned', 'Knowledgebase', 'Messages'] },
];

export const DashboardSidebar = ({ isCollapsed }: DashboardSidebarProps) => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    // Force-close all accordions when sidebar collapses
    useEffect(() => {
        if (isCollapsed) setOpenMenu(null);
    }, [isCollapsed]);

    const toggleMenu = (label: string) => {
        if (isCollapsed) return; // no accordion in mini mode
        setOpenMenu((prev) => (prev === label ? null : label));
    };

    return (
        <aside
            className={`shrink-0 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[72px]' : 'w-[260px]'
                }`}
        >
            {/* ── Brand ── */}
            <div className="h-16 flex items-center border-b border-slate-100 shrink-0 overflow-hidden px-3">
                {isCollapsed ? (
                    /* Mini mode: just the icon portion of the logo */
                    <div className="mx-auto">
                        <img
                            src="/images/nighlogo-Bxm7gxow.svg"
                            alt="Nighwan"
                            className="h-9 w-9 object-contain"
                        />
                    </div>
                ) : (
                    /* Full mode: complete logo with wordmark */
                    <Link href="/crm-dashboard" className="flex items-center select-none">
                        <img
                            src="/images/nighlogo-Bxm7gxow.svg"
                            alt="Nighwan Technology"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                )}
            </div>

            {/* ── Navigation ── */}
            <nav className="flex-1 overflow-y-auto py-3 overflow-x-hidden">
                {menuItems.map((item) => {
                    const hasChildren = !!item.children?.length;
                    const isOpen = openMenu === item.label;
                    const isActive =
                        !hasChildren &&
                        item.href &&
                        item.href !== '#' &&
                        (pathname === item.href || pathname.startsWith(item.href + '/'));

                    /* ── Items with sub-menus ── */
                    if (hasChildren) {
                        return (
                            <div key={item.label}>
                                <button
                                    title={isCollapsed ? item.label : undefined}
                                    onClick={() => toggleMenu(item.label)}
                                    className={`w-full flex items-center py-2.5 cursor-pointer hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors duration-200 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-5'
                                        }`}
                                >
                                    <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
                                        <item.icon size={20} strokeWidth={1.5} className="shrink-0 text-slate-400" />
                                        {!isCollapsed && (
                                            <span className="text-[13.5px] font-medium">{item.label}</span>
                                        )}
                                    </div>
                                    {!isCollapsed && (
                                        <ChevronRight
                                            size={15}
                                            strokeWidth={2}
                                            className={`text-slate-300 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'
                                                }`}
                                        />
                                    )}
                                </button>

                                {/* CSS Grid slide animation */}
                                {!isCollapsed && (
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="border-l-2 border-slate-100 ml-[28px] mb-1">
                                                {item.children!.map((child) => (
                                                    <Link
                                                        key={child}
                                                        href="#"
                                                        className="block px-5 py-2 text-[13px] text-slate-400 hover:text-orange-500 hover:bg-slate-50 transition-colors duration-200"
                                                    >
                                                        {child}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    }

                    /* ── Leaf items (no sub-menu) ── */
                    return (
                        <Link
                            key={item.label}
                            href={item.href!}
                            title={isCollapsed ? item.label : undefined}
                            className={`flex items-center py-2.5 hover:bg-slate-50 transition-colors duration-200 group ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-5'
                                } ${isActive ? 'bg-orange-50 text-orange-500' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                            <item.icon
                                size={20}
                                strokeWidth={1.5}
                                className={`shrink-0 ${isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-700'
                                    }`}
                            />
                            {!isCollapsed && (
                                <span className="text-[13.5px] font-medium">{item.label}</span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};