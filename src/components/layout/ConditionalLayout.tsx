"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

// 🚀 FIX: "/user" add kiya hai kyunki aapka dashboard path /user hai
const HIDE_CHROME_ROUTES = ["/user", "/support", "/login", "/signup", "/crm-dashboard", "/sliders"];

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Check kar rahe hain ki current page dashboard wala hai ya nahi
    const hideChrome = HIDE_CHROME_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

    // 🎯 AGAR DASHBOARD HAI: Toh Navbar/Footer dikhana hi nahi hai
    if (hideChrome) {
        return (
            <main className="min-h-screen w-full bg-[#F8FAFC]">
                {children}
            </main>
        );
    }

    // 🌍 AGAR PUBLIC PAGE HAI: Toh normal Navbar/Footer dikhao
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