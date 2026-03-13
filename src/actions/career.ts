"use server";

// 🔥 INDUSTRY STANDARD: Helper function bahar, lekin execute hamesha andar hoga
const getBaseUrl = () => {
    // Agar local PC par npm run dev chal raha hai
    if (process.env.NODE_ENV === "development") {
        return "http://127.0.0.1:5000";
    }
    // Agar Vercel par live chal raha hai
    return process.env.NEXT_PUBLIC_API_URL || "https://nighwan-tech-webbackend.onrender.com";
};

export async function applyNowAction(prevState: any, formData: FormData) {
    // ✅ PRO TIP: URL hamesha function ke andar get karein. 
    // Isse Vercel purane URL ko cache nahi karega aur hamesha fresh URL uthayega.
    const API_URL = getBaseUrl();

    try {
        // 🔥 Aapka original logic 100% waise hi rakha gaya hai
        const response = await fetch(`${API_URL}/api/career/apply`, {
            method: "POST",
            body: formData, // FormData automatically headers handle kar lega
        });

        const result = await response.json();

        if (response.ok && result.success) {
            return { success: true };
        } else {
            return { success: false, error: result.error || "Backend sync failed." };
        }
    } catch (error) {
        // ✅ INDUSTRY STANDARD: Production mein error ko server logs mein print karna zaroori hai
        // Taaki Vercel dashboard mein pata chal sake ki error actual mein kya thi
        console.error(`[Apply Action Error] URL: ${API_URL}/api/career/apply`, error);

        return { success: false, error: "Could not connect to backend server." };
    }
}