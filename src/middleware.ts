// ─── Next.js Edge Middleware ──────────────────────────────────────────────────
// Runs on every matched request BEFORE it reaches the page/route handler.
// Uses jose jwtVerify directly (Edge-compatible — no Node.js APIs).

import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { SESSION_COOKIE } from "@/lib/auth";

const RAW_SECRET = process.env.JWT_SECRET ?? "nighwan-super-secret-dev-key-change-me";
const SECRET = new TextEncoder().encode(RAW_SECRET);

// Routes that require authentication
const PROTECTED_PREFIXES = ["/crm-dashboard"];

// Routes that logged-in users should not see (redirect to dashboard)
const AUTH_ROUTES = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(SESSION_COOKIE)?.value;

    // Verify session (null if missing or invalid/expired)
    let session: Record<string, unknown> | null = null;
    if (token) {
        try {
            const { payload } = await jwtVerify(token, SECRET, { algorithms: ["HS256"] });
            session = payload as Record<string, unknown>;
        } catch {
            session = null;
        }
    }

    const isAuthenticated = Boolean(session);

    // ── 1. Protect /crm-dashboard/* ────────────────────────────────────────────────
    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathname === prefix || pathname.startsWith(prefix + "/")
    );
    if (isProtected && !isAuthenticated) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    // Match all routes except Next.js internals and static assets
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|images/|public/).*)",
    ],
};
