"use server";

export async function applyNowAction(prevState: any, formData: FormData) {
    try {
        // 🔥 Ye aapka backend server URL hai (port check kar lena)
        const response = await fetch("http://localhost:5000/api/career/apply", {
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