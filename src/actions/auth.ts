"use server";

// ─── Auth Server Actions ──────────────────────────────────────────────────────
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import {
    SESSION_COOKIE,
    SESSION_COOKIE_OPTIONS,
} from "@/lib/auth";
import {
    validateLoginInput,
    validateSignupInput,
} from "@/lib/validations";

// 🔥 DYNAMIC API URL (Smart Environment Switcher)
const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return "http://127.0.0.1:5000";
    }
    return process.env.NEXT_PUBLIC_API_URL || "https://nighwan-tech-webbackend.onrender.com";
};

const API_URL = getBaseUrl();

export type AuthActionResult = {
    success: boolean;
    error?: string;
    userName?: string;
    redirectTo?: string;
    user?: any;
};

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN ACTION (UPDATED: For Smart Redirects & Session Tracking)
// ─────────────────────────────────────────────────────────────────────────────
export async function loginAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        console.log("[loginAction] --- New Login Attempt ---");
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        const password = (formData.get("password") as string ?? "");

        // 🔥 CRITICAL FIX: Frontend checkbox se rememberMe ki value pakdi
        const rememberMe = formData.get("rememberMe") === "true";

        const validationError = validateLoginInput(email, password);
        if (validationError) {
            return { success: false, error: validationError.message };
        }

        const headersList = await headers();
        const userAgent = headersList.get("user-agent") || "";
        const forwardedFor = headersList.get("x-forwarded-for") || "";

        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": userAgent,
                "X-Forwarded-For": forwardedFor
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            return { success: false, error: data.error || data.message || "Invalid email or password." };
        }

        console.log(`[loginAction] ✅ Login successful! User Role: ${data.user?.role}`);

        const cookieStore = await cookies();
        cookieStore.set(SESSION_COOKIE, data.token, SESSION_COOKIE_OPTIONS);

        return {
            success: true,
            redirectTo: data.redirectTo || "/user",
            // 🔥 CRITICAL FIX: Frontend UI (login.tsx) ko bataya ki user ne tick kiya tha ya nahi
            user: { ...data.user, rememberMe }
        };

    } catch (err: any) {
        console.error("[loginAction] 💥 Error:", err);
        return {
            success: false,
            error: "Backend connection failed."
        };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// FORGOT PASSWORD ACTION (🔥 FIXED: Backend Sync)
// ─────────────────────────────────────────────────────────────────────────────
export async function forgotPasswordAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        if (!email) return { success: false, error: "Email is required." };

        const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        // 🔥 Backend se aane wale `message` ya `error` ko theek se catch kiya
        if (!response.ok || !data.success) {
            return { success: false, error: data.message || data.error || "Failed to send reset link." };
        }

        return { success: true };
    } catch (err) {
        return { success: false, error: "Backend se connection nahi ho paya." };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// SIGNUP ACTION (UNTOUCHED)
// ─────────────────────────────────────────────────────────────────────────────
export async function signupAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const fullName = (formData.get("fullName") as string ?? "").trim();
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        const password = (formData.get("password") as string ?? "");

        const validationError = validateSignupInput(fullName, email, password);
        if (validationError) return { success: false, error: validationError.message };

        const response = await fetch(`${API_URL}/api/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email, password }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            return { success: false, error: data.error || data.message || "Signup failed." };
        }

        return { success: true, userName: data.userName };
    } catch (err) {
        return { success: false, error: "Backend connection failed." };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGOUT ACTION (UNTOUCHED)
// ─────────────────────────────────────────────────────────────────────────────
export async function logoutAction(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE);
    redirect("/?logout=success");
}

// ─────────────────────────────────────────────────────────────────────────────
// RESET PASSWORD ACTION (🔥 FIXED: Backend Sync)
// ─────────────────────────────────────────────────────────────────────────────
export async function resetPasswordAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const token = formData.get("token") as string;
        const newPassword = formData.get("password") as string;
        if (!token || !newPassword) return { success: false, error: "Invalid data." };

        const response = await fetch(`${API_URL}/api/auth/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, newPassword }),
        });

        const data = await response.json();

        // 🔥 Backend se aane wale `message` ya `error` ko theek se catch kiya
        if (!response.ok || !data.success) {
            return { success: false, error: data.message || data.error || "Failed." };
        }

        return { success: true, redirectTo: "/login?reset=success" };
    } catch (err) {
        return { success: false, error: "Backend issue." };
    }
}
