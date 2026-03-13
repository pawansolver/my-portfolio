"use server";

// 🔥 INDUSTRY STANDARD: Helper function bahar
const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return "http://127.0.0.1:5000";
    }
    return process.env.NEXT_PUBLIC_API_URL || "https://nighwan-tech-webbackend.onrender.com";
};

export async function applyNowAction(prevState: any, formData: FormData) {
    const API_URL = getBaseUrl();

    try {
        // 🚀 FIX 1: Next.js ke bug se bachne ke liye naya FormData banakar data transfer karein
        const externalFormData = new FormData();
        for (const [key, value] of formData.entries()) {
            externalFormData.append(key, value);
        }

        console.log(`⏳ Sending data to Render Backend: ${API_URL}/api/career/apply`);

        // 🚀 FIX 2: cache: "no-store" lagana zaroori hai Next.js mein
        const response = await fetch(`${API_URL}/api/career/apply`, {
            method: "POST",
            body: externalFormData,
            cache: "no-store", // Vercel ko bolna ki isey cache na kare
        });

        // Agar response 200/201 nahi hai, toh Vercel logs mein status print karo
        if (!response.ok) {
            console.error(`❌ Backend Error Status: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (response.ok && result.success) {
            return { success: true };
        } else {
            return { success: false, error: result.error || "Backend sync failed." };
        }
    } catch (error: any) {
        // 🚀 FIX 3: Error ki *Asli Wajah* (message) print karna taaki andaza na lagana pade
        console.error(`[Apply Action Error] URL: ${API_URL}/api/career/apply`);
        console.error(`🚨 Asli Wajah (Root Cause):`, error.message || error);

        return {
            success: false,
            error: "Form submit nahi hua. Ya toh server load le raha hai, ya PDF size bada hai (Max 4MB). Kripya 10 second baad dobara koshish karein."
        };
    }
}