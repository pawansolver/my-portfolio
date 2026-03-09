"use server";

export type ActionState = {
    success: boolean;
    error?: string;
};

// 1. Action for Main Contact Page Form (FIXED ✅)
export async function contactAction(
    _prev: any,
    formData: FormData
): Promise<ActionState> {
    try {
        const data = {
            // Hum abhi backend ko direct firstName/lastName bhej rahe hain 
            // kyunki backend controller wahi expect kar raha hai
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"), // 🔥 YE MISSING THA, AB ADD HO GAYA
            message: formData.get("message"),
            sourcePage: formData.get("source_page") || "Contact Page",
            type: "CONTACT_FORM"
        };

        // Backend API call
        const response = await fetch("http://localhost:5000/api/contact/submit", {
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
        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            budget: formData.get("budget"),
            message: formData.get("details"),

            // 🔥 BAS YAHAN CHANGE HUA HAI: Ek default value add ki hai
            sourcePage: formData.get("sourcePage") || "Website Lead",

            type: "PROJECT_INQUIRY"
        };

        const response = await fetch("http://localhost:5000/api/contact/inquiry", {
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