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

export type ActionState = {
    success: boolean;
    error?: string;
};

// 1. Action for Main Contact Page Form
export async function contactAction(
    _prev: any,
    formData: FormData
): Promise<ActionState> {
    try {
        const firstName = formData.get("firstName") || "";
        const lastName = formData.get("lastName") || "";
        const fullName = `${firstName} ${lastName}`.trim();

        const data = {
            // 🔥 BULLETPROOF FIX: Humne sab bhej diya! 
            // Ab backend controller ko jo chahiye khud utha lega, "undefined" nahi aayega.
            firstName: firstName,
            lastName: lastName,
            fullName: fullName,
            name: fullName,

            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            sourcePage: formData.get("source_page") || "Contact Page",
            type: "CONTACT_FORM"
        };

        // Backend API call (🔥 Ab smart API_URL use hoga)
        const response = await fetch(`${API_URL}/api/contact/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok || !result.success) {
            return { success: false, error: result.error || "Kuch gadbad ho gayi." };
        }

        return { success: true };
    } catch (err) {
        console.error("Fetch Error:", err);
        return { success: false, error: "Backend server se connect nahi ho paya." };
    }
}

// 2. Action for Project Inquiry Modal
export async function projectInquiryAction(
    _prev: any,
    formData: FormData
): Promise<ActionState> {
    try {
        const countryCode = formData.get("countryCode") || "+91";
        const phoneNumber = formData.get("phone") || "";
        const completePhone = `${countryCode} ${phoneNumber}`.trim();

        const data = {
            // 🔥 BULLETPROOF FIX: Yahan bhi safety ke liye dono bhej diye
            fullName: formData.get("fullName"),
            name: formData.get("fullName"),

            email: formData.get("email"),
            phone: completePhone,
            budget: formData.get("budget"),
            message: formData.get("details") || "No message provided.",

            // Source Page yahan direct frontend se catch ho raha hai
            sourcePage: formData.get("sourcePage") || "Website Lead",
            type: "PROJECT_INQUIRY",
            projectType: "General Web Project"
        };

        // 🔥 Ab smart API_URL use hoga
        const response = await fetch(`${API_URL}/api/contact/inquiry`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok || !result.success) {
            return { success: false, error: result.error || "Inquiry bhejni fail ho gayi." };
        }

        return { success: true };
    } catch (err) {
        console.error("Fetch Error:", err);
        return { success: false, error: "Network error: Please try again." };
    }
}
