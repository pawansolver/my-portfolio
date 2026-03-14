"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

// 🚀 FIX: Yahan "/sliders" add kar diya hai
const HIDE_CHROME_ROUTES = ["/dashboard", "/login", "/signup", "/crm-dashboard", "/sliders"];

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideChrome = HIDE_CHROME_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

    // Dashboard & auth pages: render children directly — their own layout handles everything
    if (hideChrome) {
        return <>{children}</>;
    }

    // Public pages: standard site shell
    return (
        <>
            <Navbar />
            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>
            <Footer />
        </>
    );
}