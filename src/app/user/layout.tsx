"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/user-dashboard/MobileHeader';
import UserSidebar from '@/components/user-dashboard/UserSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        if (window.innerWidth < 1024) setIsSidebarOpen(false);
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        } else {
            router.push('/login');
        }
    }, [router]);

    if (!user) return <div className="p-8 text-center animate-pulse">Loading Workspace...</div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <DashboardHeader
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                user={user}
            />

            <UserSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                user={user}
            />

            <main className={`pt-16 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-[260px]' : 'ml-0'}`}>
                <div className="p-4 md:p-8 max-w-[1400px] mx-auto">
                    {/* Yahan direct aapke components render honge */}
                    {children}
                </div>
            </main>
        </div>
    );
}