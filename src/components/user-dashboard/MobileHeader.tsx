"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, Search, Bell, LogOut, Settings as SettingsIcon, User as UserIcon, Loader2, X, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 🚀 SERVER ACTIONS IMPORT 
import { logoutAction } from '@/actions/auth';
import { globalSearchAction } from '@/actions/searchActions';
import { getSettingsByClientId } from '@/actions/settingsActions';
import { getNotificationsAction, markAsReadAction, markAllAsReadAction, deleteNotificationAction, clearAllNotificationsAction } from '@/actions/notificationActions';

export default function DashboardHeader({ toggleSidebar, activeTab, setActiveTab, user }: any) {
    const router = useRouter();

    // 🚀 NOTIFICATION STATES
    const [notifications, setNotifications] = useState<any[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState<number | null>(null);
    const [isClearing, setIsClearing] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    // 🚀 PROFILE & AVATAR STATES
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [freshAvatar, setFreshAvatar] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 🚀 SEARCH BOX STATES
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // 🛡️ NOTIFICATION FETCHING & POLLING
    useEffect(() => {
        const fetchNotifications = async () => {
            if (user?.id) {
                const result = await getNotificationsAction(user.id);
                if (result?.success) {
                    setNotifications(result.data || []);
                    setUnreadCount(result.unreadCount || 0);
                }
            }
        };

        fetchNotifications();
        const interval = setInterval(fetchNotifications, 60000); // Poll every 60s
        return () => clearInterval(interval);
    }, [user]);

    // 🛡️ FRESH AVATAR FETCH LOGIC 
    useEffect(() => {
        const fetchAvatar = async () => {
            if (user?.id) {
                try {
                    const result = await getSettingsByClientId(user.id);
                    const payload = result?.data || result;
                    const userData = payload?.user || payload?.client || payload;
                    if (userData?.avatar) {
                        setFreshAvatar(userData.avatar);
                    }
                } catch (error) {
                    console.error("Failed to fetch fresh avatar", error);
                }
            }
        };
        fetchAvatar();
    }, [user]);

    // 🛡️ BAHAR CLICK KARNE PAR DROPDOWN BAND KARNE KA LOGIC
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchDropdownOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 🚀 THE MAGIC: DEBOUNCED SEARCH FETCH LOGIC
    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchQuery.length >= 2 && user?.id && user?.email) {
                setIsSearching(true);
                setIsSearchDropdownOpen(true);

                try {
                    const results = await globalSearchAction(searchQuery, user.id, user.email);
                    setSearchResults(results);
                } catch (error) {
                    console.error("Search failed", error);
                } finally {
                    setIsSearching(false);
                }
            } else {
                setSearchResults([]);
                setIsSearchDropdownOpen(false);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, user]);

    // 🚪 LOGOUT LOGIC
    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            localStorage.removeItem('clientUser');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            await logoutAction();
            window.location.href = '/';
        } catch (error) {
            console.error("Logout failed:", error);
            setIsLoggingOut(false);
        }
    };

    // 🚀 Menu Click Handler
    const handleMenuClick = (route: string) => {
        router.push(route);
        setIsProfileOpen(false);
    };

    // 🔔 NOTIFICATION HANDLERS
    const handleMarkRead = async (id: number, link?: string) => {
        const n = notifications.find(x => x.id === id);
        if (n && n.isRead && link) {
            router.push(link);
            setIsNotificationsOpen(false);
            return;
        }

        await markAsReadAction(id);
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
        setUnreadCount(prev => Math.max(0, prev - 1));
        if (link) {
            router.push(link);
            setIsNotificationsOpen(false);
        }
    };

    const handleMarkAllRead = async () => {
        if (!user?.id) return;
        await markAllAsReadAction(user.id);
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
        setUnreadCount(0);
    };

    const handleDeleteNotification = async (e: React.MouseEvent, id: number) => {
        e.stopPropagation(); 
        setIsDeleting(id);
        const res = await deleteNotificationAction(id);
        if (res?.success) {
            setNotifications(prev => prev.filter(n => n.id !== id));
            const deleted = notifications.find(n => n.id === id);
            if (deleted && !deleted.isRead) {
                setUnreadCount(prev => Math.max(0, prev - 1));
            }
        }
        setIsDeleting(null);
    };

    const handleClearAll = async () => {
        if (!user?.id || !notifications.length) return;
        if (!confirm("Are you sure you want to clear all notifications?")) return;
        
        setIsClearing(true);
        const res = await clearAllNotificationsAction(user.id);
        if (res?.success) {
            setNotifications([]);
            setUnreadCount(0);
            setIsNotificationsOpen(false);
        }
        setIsClearing(false);
    };

    const displayAvatar = freshAvatar || user?.avatar;

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-[60] flex items-center justify-between px-4 md:px-6 shadow-sm">

            {/* --- LEFT: Hamburger + Logo --- */}
            <div className="flex items-center gap-4 md:gap-6">
                <button onClick={toggleSidebar} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600">
                    <Menu size={24} />
                </button>

                <Link href="/" className="flex items-center">
                    <img src="/logo.png" alt="Nighwan Logo" className="h-8 md:h-10 w-auto object-contain" />
                </Link>

                <div className="hidden lg:block border-l border-slate-200 pl-6 ml-2">
                    <h2 className="text-[13px] font-bold text-slate-400 uppercase tracking-[0.2em]">{activeTab}</h2>
                </div>
            </div>

            {/* --- RIGHT: Controls --- */}
            <div className="flex items-center gap-2 md:gap-5">

                {/* 🚀 REAL INTERACTIVE SEARCH BAR */}
                <div className="relative hidden md:block" ref={searchRef}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-brandOrange/20 focus-within:border-brandOrange/50 transition-all z-10 relative">
                        <Search size={16} className="text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search projects, invoices..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => { if (searchQuery.length >= 2) setIsSearchDropdownOpen(true); }}
                            className="bg-transparent border-none outline-none text-[13px] font-medium text-slate-700 w-56 placeholder:text-slate-400"
                        />

                        {isSearching ? (
                            <Loader2 size={14} className="animate-spin text-brandOrange" />
                        ) : searchQuery.length > 0 ? (
                            <button onClick={() => { setSearchQuery(""); setSearchResults([]); setIsSearchDropdownOpen(false); }} className="text-slate-400 hover:text-slate-600">
                                <X size={14} />
                            </button>
                        ) : null}
                    </div>

                    {/* 🔽 SEARCH RESULTS DROPDOWN */}
                    {isSearchDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 shadow-xl rounded-xl py-2 z-[70] max-h-[300px] overflow-y-auto">
                            {searchResults.length > 0 ? (
                                searchResults.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.link}
                                        onClick={() => {
                                            setIsSearchDropdownOpen(false);
                                            setSearchQuery("");
                                            setSearchResults([]);
                                        }}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-50 transition-colors flex flex-col border-b border-slate-50 last:border-0"
                                    >
                                        <span className="text-[10px] font-bold text-brandOrange uppercase tracking-wider">{item.type}</span>
                                        <span className="text-[13px] font-bold text-textmain truncate">{item.title}</span>
                                        {item.subtitle && <span className="text-[11px] font-medium text-slate-500 truncate">{item.subtitle}</span>}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-3 py-4 text-center">
                                    <p className="text-xs font-medium text-slate-500">No results found for "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* 🚀 NOTIFICATIONS (🔔 REAL INTEGRATION) */}
                <div className="relative" ref={notificationRef}>
                    <button
                        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        className={`p-2 rounded-full transition-all relative ${isNotificationsOpen ? "bg-orange-50 text-brandOrange" : "text-slate-400 hover:text-brandOrange hover:bg-orange-50"}`}
                    >
                        <Bell size={18} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                        )}
                    </button>

                    {isNotificationsOpen && (
                        <div className="absolute right-0 top-full mt-2 w-72 md:w-80 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-[70] animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="text-xs font-black text-textmain uppercase tracking-widest">Notifications</h3>
                                <div className="flex gap-3">
                                    {notifications.length > 0 && (
                                        <button 
                                            onClick={handleClearAll} 
                                            disabled={isClearing}
                                            className="text-[10px] font-bold text-red-500 hover:underline uppercase tracking-wider disabled:opacity-50"
                                        >
                                            {isClearing ? '...' : 'Clear all'}
                                        </button>
                                    )}
                                    {unreadCount > 0 && (
                                        <button onClick={handleMarkAllRead} className="text-[10px] font-bold text-brandOrange hover:underline uppercase tracking-wider">Mark read</button>
                                    )}
                                </div>
                            </div>

                            <div className="max-h-[350px] overflow-y-auto no-scrollbar">
                                {notifications.length > 0 ? (
                                    notifications.map((n) => (
                                        <div
                                            key={n.id}
                                            onClick={() => handleMarkRead(n.id, n.link)}
                                            className={`px-4 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer relative group ${!n.isRead ? "bg-orange-50/30" : ""}`}
                                        >
                                            <div className="flex gap-3 pr-6">
                                                <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${n.type === 'success' ? 'bg-emerald-500' : n.type === 'warning' ? 'bg-amber-500' : n.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                                <div className="flex-grow">
                                                    <p className={`text-[12px] leading-relaxed ${!n.isRead ? "font-bold text-textmain" : "font-medium text-slate-500"}`}>{n.message}</p>
                                                    <p className="text-[10px] text-slate-400 mt-1">{new Date(n.createdAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</p>
                                                </div>
                                            </div>
                                            
                                            {/* ❌ Delete Button (Shows on hover) */}
                                            <button 
                                                onClick={(e) => handleDeleteNotification(e, n.id)}
                                                disabled={isDeleting === n.id}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                                            >
                                                {isDeleting === n.id ? <Loader2 size={14} className="animate-spin" /> : <X size={14} />}
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-10 text-center">
                                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Bell size={20} className="text-slate-300" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">No notifications</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 🚀 REAL PROFILE DROPDOWN */}
                <div className="relative border-l border-slate-200 pl-2 md:pl-3" ref={dropdownRef}>
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 md:gap-3 hover:bg-slate-50 p-1 md:p-1.5 rounded-xl transition-all"
                    >
                        <div className="text-right hidden sm:block">
                            <p className="text-[12px] font-bold text-textmain leading-none">{user?.name || 'User'}</p>
                            <p className="text-[10px] font-medium text-slate-400 mt-1 capitalize">{user?.role?.replace('_', ' ') || 'Client'}</p>
                        </div>

                        {displayAvatar ? (
                            <img src={displayAvatar} alt="Profile" className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-sm">
                                {user?.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                        )}
                    </button>

                    {/* 🔽 Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 shadow-xl rounded-xl p-2 z-[70] animate-in fade-in slide-in-from-top-2 duration-200">

                            <div className="px-3 py-2 border-b border-slate-100 mb-1 sm:hidden">
                                <p className="text-[13px] font-bold text-textmain truncate">{user?.name}</p>
                                <p className="text-[11px] font-medium text-slate-400 truncate">{user?.email}</p>
                            </div>

                            <button
                                onClick={() => handleMenuClick('/user/settings')}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-textmain rounded-lg transition-colors"
                            >
                                <UserIcon size={16} /> My Profile
                            </button>

                            <button
                                onClick={() => handleMenuClick('/user/settings')}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-textmain rounded-lg transition-colors"
                            >
                                <SettingsIcon size={16} /> Account Settings
                            </button>

                            <button
                                onClick={() => handleMenuClick('/support/tickets')}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-textmain rounded-lg transition-colors"
                            >
                                <LifeBuoy size={16} /> Support & Tickets
                            </button>

                            <div className="h-[1px] bg-slate-100 my-1 mx-2"></div>

                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                            >
                                {isLoggingOut ? (
                                    <><Loader2 size={16} className="animate-spin" /> Logging out...</>
                                ) : (
                                    <><LogOut size={16} /> Log out</>
                                )}
                            </button>
                        </div>
                    )}
                </div>

            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
}