"use server";

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
        const data = {
            fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
            email: formData.get("email"),
            message: formData.get("message"),
            // Tracking source
            sourcePage: formData.get("source_page") || "Contact Page",
            type: "GENERAL"
        };

        // FIX: Using localhost instead of 127.0.0.1 for better compatibility
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

// 2. Action for Project Inquiry Modal (Popup)
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
            sourcePage: formData.get("sourcePage"),
            type: "PROJECT_INQUIRY"
        };

        // FIX: Endpoint points to the inquiry route on port 5000
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