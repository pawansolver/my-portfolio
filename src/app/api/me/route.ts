// ─── /api/me  ────────────────────────────────────────────────────────────────
// Returns the current session user or 401.
// Used by the client-side useSession hook.

import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function GET() {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ user: null }, { status: 401 });
    }
    return NextResponse.json({
        user: {
            id: session.id,
            name: session.name,
            email: session.email,
            role: session.role,
        },
    });
}
