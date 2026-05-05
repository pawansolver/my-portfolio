'use server'

// 🔥 Render Backend URL Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const TICKETS_API = `${API_BASE_URL}/api/support/tickets`;

// Helper: Response handling to prevent crashes
async function handleResponse(res: Response) {
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        const textError = await res.text();
        console.error("Non-JSON Response from Backend:", res.status, res.statusText, textError.substring(0, 500));
        throw new Error(`Backend Error ${res.status}: didn't return JSON. It returned HTML/Text.`);
    }
    return await res.json();
}

// ==========================================
// 🚀 8 SUPPORT TICKET OPERATIONS (SERVER ACTIONS)
// ==========================================

// 1. [CREATE] - User: Naya ticket raise karna (Naye UI ke hisaab se fields)
export async function createSupportTicketAction(ticketData: {
    clientEmail: string;
    subject: string;
    domain: string;
    description: string;
    attachments?: any;
}) {
    try {
        const res = await fetch(TICKETS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticketData),
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("Create Ticket Error:", error);
        return { success: false, message: "Failed to submit ticket." };
    }
}

// 2. [READ ALL] - Admin Dashboard: Saare tickets mangwana
export async function getAllTicketsAction() {
    try {
        const res = await fetch(TICKETS_API, {
            cache: 'no-store'
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("Get All Tickets Error:", error);
        return { success: false, data: [] };
    }
}

// 3. [READ SINGLE] - Ticket details aur conversation dekhna
export async function getTicketByIdAction(id: string | number) {
    try {
        const res = await fetch(`${TICKETS_API}/${id}`, {
            cache: 'no-store'
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("Get Single Ticket Error:", error);
        return { success: false, message: "Failed to fetch details." };
    }
}

// 4. [READ USER SPECIFIC] - Login User ke apne tickets (By Email)
export async function getUserTicketsAction(email: string) {
    try {
        // 🔥 FIX: Backend route ke hisaab se endpoint theek kiya gaya hai
        const res = await fetch(`${API_BASE_URL}/api/support/user-tickets?email=${email}`, {
            cache: 'no-store'
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("Get User Tickets Error:", error);
        return { success: false, data: [] };
    }
}

// 5. [UPDATE STATUS] - Admin Quick Update
// 🔥 FIX: priority hata diya kyunki naye model mein nahi hai. Sirf status bacha hai.
export async function updateTicketStatusAction(id: string | number, status: string) {
    try {
        const res = await fetch(`${TICKETS_API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }), // Naye status: 'Pending', 'Replied', 'Closed'
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("Update Status Error:", error);
        return { success: false, message: "Update failed." };
    }
}

// 6. [DELETE] - Admin: Ticket khatam karna
export async function deleteTicketAction(id: string | number) {
    try {
        const res = await fetch(`${TICKETS_API}/${id}`, {
            method: 'DELETE'
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("Delete Ticket Error:", error);
        return { success: false, message: "Failed to delete." };
    }
}

// 7. [REPLY via EMAIL] - Admin se Customer ko Email bhejna via Backend
export async function replyToTicketAction(id: string | number, replyMessage: string) {
    try {
        const res = await fetch(`${TICKETS_API}/${id}/reply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ replyMessage }),
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("SMTP Reply Error:", error);
        return { success: false, message: "Email delivery failed." };
    }
}

// 🔥 NAYA: 8. [ADD CHAT REPLY] - Ticket UI ke andar user/admin conversation
export async function addTicketReplyAction(id: string | number, message: string, token?: string, attachments?: any) {
    try {
        const res = await fetch(`${TICKETS_API}/${id}/reply/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Agar future mein token lagana ho to yahan pass ho jayega
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            },
            // 'User' hardcode kar diya kyunki ye client dashboard se call ho raha hai
            body: JSON.stringify({ message, sender: 'User', attachments }),
        });
        return await handleResponse(res);
    } catch (error) {
        console.error("Chat Reply Error:", error);
        return { success: false, message: "Failed to send message." };
    }
}