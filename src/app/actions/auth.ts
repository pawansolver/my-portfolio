"use server";

// ─── Auth Server Actions ──────────────────────────────────────────────────────
// These run on the server. They validate input, read/write HTTP-only cookies,
// and redirect on success. Wire these directly into your form's action prop.
//
// 🔄 SWAP FOR REAL DB: Replace `findUserByEmail` / `saveUser` with Prisma /
//    Drizzle / Supabase calls and delete src/lib/users-db.ts.

// redirect() is NOT used inside loginAction/signupAction (useActionState flicker fix).
// It IS still used by logoutAction which runs outside of useActionState.
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
    signToken,
    SESSION_COOKIE,
    SESSION_COOKIE_OPTIONS,
    type SessionPayload,
} from "@/lib/auth";
import {
    validateLoginInput,
    validateSignupInput,
} from "@/lib/validations";
import {
    type StoredUser,
    findUserByEmail,
    userExistsByEmail,
    saveUser,
} from "@/lib/users-db";

// ── Password Helpers (Web Crypto — no bcrypt needed) ─────────────────────────
async function hashPassword(password: string): Promise<string> {
    const data = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

// ── Action Result Type ────────────────────────────────────────────────────────
export type AuthActionResult = {
    success: boolean;
    error?: string;
    /** Present on signup success — lets the client show the user's name in the modal */
    userName?: string;
    /** Client reads this and calls router.push() — avoids useActionState redirect flicker */
    redirectTo?: string;
};

// ── Set Session Cookie ────────────────────────────────────────────────────────
async function createSession(user: StoredUser): Promise<void> {
    const payload: Omit<SessionPayload, "iat" | "exp"> = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const token = await signToken(payload);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS);
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN ACTION
// ─────────────────────────────────────────────────────────────────────────────
export async function loginAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        console.log("[loginAction] --- New Login Attempt ---");
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        const password = (formData.get("password") as string ?? "");

        console.log(`[loginAction] Email received: "${email}" (length: ${email.length})`);

        // 1. Validate inputs
        const validationError = validateLoginInput(email, password);
        if (validationError) {
            console.log(`[loginAction] ❌ Validation failed: ${validationError.message}`);
            return { success: false, error: validationError.message };
        }

        // 2. [DB] Look up user by email
        const user = findUserByEmail(email);
        if (!user) {
            console.log(`[loginAction] ❌ User NOT found for: "${email}"`);
            // Security: Use Generic error on UI, keep log specific
            return { success: false, error: "Invalid email or password." };
        }
        console.log(`[loginAction] ✅ User found: "${user.name}" (ID: ${user.id}, Role: ${user.role})`);

        // 3. Verify password
        const hash = await hashPassword(password);
        console.log(`[loginAction] Input password hash: ${hash.substring(0, 8)}...`);
        console.log(`[loginAction] Stored password hash: ${user.passwordHash.substring(0, 8)}...`);

        const passwordMatch = hash === user.passwordHash;
        console.log(`[loginAction] Password match: ${passwordMatch ? "✅ YES" : "❌ NO"}`);

        if (!passwordMatch) {
            return { success: false, error: "Invalid email or password." };
        }

        // 4. Issue session cookie
        console.log("[loginAction] Creating session...");
        await createSession(user);
        console.log(`[loginAction] 🎉 Session cookie set for ${user.email}`);

        // 5. Return success
        return { success: true, redirectTo: "/crm-dashboard" };
    } catch (err: any) {
        console.error("[loginAction] 💥 Unexpected error:", err);
        return {
            success: false,
            error: `Login failed: ${err?.message || "Internal server error"}`
        };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// SIGNUP ACTION
// ─────────────────────────────────────────────────────────────────────────────
export async function signupAction(
    _prev: AuthActionResult,
    formData: FormData
): Promise<AuthActionResult> {
    try {
        const fullName = (formData.get("fullName") as string ?? "").trim();
        const email = (formData.get("email") as string ?? "").trim().toLowerCase();
        const password = (formData.get("password") as string ?? "");

        // 1. Validate inputs
        const validationError = validateSignupInput(fullName, email, password);
        if (validationError) return { success: false, error: validationError.message };

        // 2. [DB] Check duplicate email
        if (userExistsByEmail(email)) {
            console.log(`[signupAction] ❌ Duplicate email: "${email}"`);
            return { success: false, error: "Email already in use. Please log in." };
        }

        // 3. Hash password & store new user
        const passwordHash = await hashPassword(password);
        const newUser: StoredUser = {
            id: `u_${Date.now()}`,
            name: fullName,
            email,
            passwordHash,
            role: "user",
        };
        saveUser(newUser); // [DB] → db.user.create({ data: newUser })
        console.log(`[signupAction] ✅ New user saved: ${newUser.email}`);

        // 4. Issue session cookie — auto-login immediately after signup
        await createSession(newUser);
        console.log(`[signupAction] 🎉 Session cookie set for ${newUser.email}`);

        // 5. Return userName so the client can show the success modal.
        //    Do NOT include redirectTo — the client delays navigation by 2 s to
        //    let the user see the "Profile Completed" overlay.
        return { success: true, userName: newUser.name };
    } catch (err) {
        console.error("[signupAction] 💥 Unexpected error:", err);
        return { success: false, error: "Something went wrong during signup. Please try again." };
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGOUT ACTION
// ─────────────────────────────────────────────────────────────────────────────
export async function logoutAction(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE);
    redirect("/?logout=success");
}
