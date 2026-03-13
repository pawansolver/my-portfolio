"use server";

// ─── Auth Server Actions ──────────────────────────────────────────────────────
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
    SESSION_COOKIE,
    SESSION_COOKIE_OPTIONS,
} from "@/lib/auth";
import {
    validateLoginInput,
    validateSignupInput,
} from "@/lib/validations";

// 🔥 DYNAMIC API URL (Local par 5000, Vercel par Render URL)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

// ── Action Result Type ────────────────────────────────────────────────────────
export type AuthActionResult = {
    success: boolean;
    error?: string;
    userName?: string;
    redirectTo?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN ACTION (100% UNTOUCHED LOGIC)
// ─────────────────────────────────────────────────────────────────────────────
export async function loginAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        console.log("[loginAction] --- New Login Attempt ---");
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        const password = (formData.get("password") as string ?? "");

        const validationError = validateLoginInput(email, password);
        if (validationError) {
            console.log(`[loginAction] ❌ Validation failed: ${validationError.message}`);
            return { success: false, error: validationError.message };
        }

        console.log(`[loginAction] Calling Backend for: "${email}"`);
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            console.log(`[loginAction] ❌ Backend rejected: ${data.error}`);
            return { success: false, error: data.error || "Invalid email or password." };
        }

        console.log(`[loginAction] ✅ Login successful via backend!`);

        const cookieStore = await cookies();
        cookieStore.set(SESSION_COOKIE, data.token, SESSION_COOKIE_OPTIONS);
        console.log(`[loginAction] 🎉 Session cookie set!`);

        return { success: true, redirectTo: "/crm-dashboard" };

    } catch (err: any) {
        console.error("[loginAction] 💥 Unexpected error:", err);
        return {
            success: false,
            error: "Backend connection failed. Is the Node.js server running?"
        };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// FORGOT PASSWORD ACTION (INDUSTRY LEVEL ADDITION)
// ─────────────────────────────────────────────────────────────────────────────
export async function forgotPasswordAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();

        if (!email) return { success: false, error: "Email is required." };

        console.log(`[forgotPasswordAction] Requesting reset for: "${email}"`);
        // Ye request seedha aapke Node.js backend ko jayegi
        const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            return { success: false, error: data.error || "Reset link bhej ne mein galti hui." };
        }

        console.log(`[forgotPasswordAction] ✅ Reset email sent successfully!`);
        return { success: true };

    } catch (err) {
        console.error("[forgotPasswordAction] 💥 Unexpected error:", err);
        return { success: false, error: "Backend se connection nahi ho paya." };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// SIGNUP ACTION (100% UNTOUCHED LOGIC)
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
        if (validationError) {
            return { success: false, error: validationError.message };
        }

        console.log(`[signupAction] Calling Backend to register: "${email}"`);
        const response = await fetch(`${API_URL}/api/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email, password }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            return { success: false, error: data.error || "Email already in use or signup failed." };
        }

        return { success: true, userName: data.userName };

    } catch (err) {
        console.error("[signupAction] 💥 Unexpected error:", err);
        return { success: false, error: "Backend connection failed." };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGOUT ACTION (100% UNTOUCHED LOGIC)
// ─────────────────────────────────────────────────────────────────────────────
export async function logoutAction(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE);
    redirect("/?logout=success");
}

// ─────────────────────────────────────────────────────────────────────────────
// RESET PASSWORD ACTION (THE FINAL STEP)
// ─────────────────────────────────────────────────────────────────────────────
export async function resetPasswordAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const token = formData.get("token") as string;
        const newPassword = formData.get("password") as string;

        if (!token || !newPassword) return { success: false, error: "Invalid data provided." };

        console.log(`[resetPasswordAction] Updating password...`);

        const response = await fetch(`${API_URL}/api/auth/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, newPassword }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            return { success: false, error: data.error || "Password update fail hua." };
        }

        return { success: true, redirectTo: "/login?reset=success" };

    } catch (err) {
        console.error("[resetPasswordAction] 💥 Error:", err);
        return { success: false, error: "Backend connectivity issue." };
    }
}