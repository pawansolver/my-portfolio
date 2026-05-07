'use server'

// 🔥 DYNAMIC API URL (Local vs Live Switcher)
const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:5000/api";
    }
    return process.env.NEXT_PUBLIC_API_URL || "https://nighwan-tech-webbackend.onrender.com/api";
};

const API_URL = getBaseUrl();

// ==========================================
// 1. CREATE: 🚀 Updated for Multer (FormData)
// ==========================================
export async function uploadDocumentAction(formData: FormData) {
    try {
        const res = await fetch(`${API_URL}/documents/upload`, {
            method: 'POST',
            // 🚨 Content-Type header yahan NAHI dalna hai jab FormData bhej rahe hon
            body: formData,
            cache: 'no-store'
        });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

// ==========================================
// 2. READ ALL: Saare Documents (Admin)
// ==========================================
export async function getAllDocumentsAction() {
    try {
        const res = await fetch(`${API_URL}/documents/all`, { cache: 'no-store' });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

// ==========================================
// 3. DELETE: Document delete karna
// ==========================================
export async function deleteDocumentAction(id: string | number) {
    // 🛡️ SAFETY LOCK
    if (!id || id === 'undefined') return { success: false, message: "Invalid Document ID" };

    try {
        const res = await fetch(`${API_URL}/documents/${id}`, {
            method: 'DELETE',
            cache: 'no-store'
        });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

// ==========================================
// 4. UPDATE: Document details edit karna
// ==========================================
export async function updateDocumentAction(id: string | number, data: { title: string }) {
    // 🛡️ SAFETY LOCK
    if (!id || id === 'undefined') return { success: false, message: "Invalid Document ID" };

    try {
        const res = await fetch(`${API_URL}/documents/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            cache: 'no-store'
        });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

// ==========================================
// 5. READ SINGLE
// ==========================================
export async function getDocumentByIdAction(id: string | number) {
    // 🛡️ SAFETY LOCK
    if (!id || id === 'undefined') return { success: false, message: "Invalid Document ID" };

    try {
        const res = await fetch(`${API_URL}/documents/${id}`, { cache: 'no-store' });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

// ==========================================
// 6. READ BY CLIENT: For User Dashboard
// ==========================================
export async function getDocumentsByClientAction(clientId: string | number) {
    // 🛡️ SAFETY LOCK: Ye wahi jagah hai jahan pichli baar crash hua tha
    if (!clientId || clientId === 'undefined' || clientId === 'null') {
        console.warn("🚨 Action Alert: getDocumentsByClientAction ko bina ID ke call kiya gaya.");
        return { success: false, data: [], message: "Client ID is missing." };
    }

    try {
        const res = await fetch(`${API_URL}/documents/client/${clientId}`, { cache: 'no-store' });
        return await res.json();
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}
