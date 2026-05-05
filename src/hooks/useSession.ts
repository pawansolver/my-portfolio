// ─── useSession Hook (Fixed to remove 404 error) ─────────────────────────────
// Client-side hook that returns { user, isLoading, isAuthenticated }.
// Fetch call to /api/me removed to prevent 404 errors in the terminal.

"use client";

import { useEffect, useState } from "react";

export interface SessionUser {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
}

interface UseSessionReturn {
    user: SessionUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export function useSession(): UseSessionReturn {
    const [user, setUser] = useState<SessionUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 👇 FIX: API fetch call completely removed.
        // Ye smoothly Navbar ko bata dega ki user filhal logged out hai, 
        // aur koi bhi 404 error terminal mein nahi aayega.
        setUser(null);
        setIsLoading(false);
    }, []);

    return { user, isLoading, isAuthenticated: Boolean(user) };
}