"use server";

// 🔥 DYNAMIC API URL (Smart Environment Switcher)
const getBaseUrl = () => {
    // Agar local PC par npm run dev chal raha hai
    if (process.env.NODE_ENV === "development") {
        return "http://127.0.0.1:5000";
    }
    // Agar Vercel par live chal raha hai
    return process.env.NEXT_PUBLIC_API_URL || "https://nighwan-tech-webbackend.onrender.com";
};

const API_URL = getBaseUrl();

export async function applyNowAction(prevState: any, formData: FormData) {
    try {
        // 🔥 Ab ye smart API_URL use karega (Local par 5000, live par Render)
        const response = await fetch(`${API_URL}/api/career/apply`, {
            method: "POST",
            body: formData, // FormData mein file aur fields dono automatically chale jayenge
        });

        const result = await response.json();

        if (response.ok && result.success) {
            return { success: true };
        } else {
            return { success: false, error: result.error || "Backend sync failed." };
        }
    } catch (error) {
        return { success: false, error: "Could not connect to backend server." };
    }
}