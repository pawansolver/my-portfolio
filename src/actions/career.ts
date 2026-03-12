"use server";

export async function applyNowAction(prevState: any, formData: FormData) {
    try {
        // 🔥 Ab ye live backend URL use karega environment variable se
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/career/apply`, {
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