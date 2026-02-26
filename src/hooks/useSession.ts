// ─── useSession Hook ──────────────────────────────────────────────────────────
// Client-side hook that fetches /api/me to know if a user is logged in.
// Returns { user, isLoading, isAuthenticated }.
// Use this inside any Client Component (header, navbar, etc.) to show
// login state without exposing the JWT secret to the browser.

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
        let cancelled = false;

        fetch("/api/me", { credentials: "same-origin" })
            .then((res) => {
                if (!res.ok) return null;
                return res.json() as Promise<{ user: SessionUser }>;
            })
            .then((data) => {
                if (cancelled) return;
                setUser(data?.user ?? null);
            })
            .catch(() => {
                if (!cancelled) setUser(null);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { user, isLoading, isAuthenticated: Boolean(user) };
}
