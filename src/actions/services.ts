'use server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
    ? (process.env.NEXT_PUBLIC_API_URL.endsWith('/') ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1) : process.env.NEXT_PUBLIC_API_URL)
    : 'http://localhost:5000';

const SERVICES_API = `${API_BASE_URL}/api/services`;

async function handleResponse(res: Response) {
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Backend didn't return JSON. Check if Render backend is live.");
    }
    return await res.json();
}

export async function createServiceAction(serviceData: any) {
    try {
        const res = await fetch(SERVICES_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData),
        });
        return await handleResponse(res);
    } catch (error: any) { return { success: false, error: error.message }; }
}

export async function getAllServicesAction() {
    try {
        const res = await fetch(SERVICES_API, { cache: 'no-store' });
        return await handleResponse(res);
    } catch (error) { return { success: false, data: [] }; }
}

// 🔥 STRICT FIX: Removed extra '/slug' to match backend
export async function getServiceBySlugAction(slug: string) {
    try {
        const res = await fetch(`${SERVICES_API}/${slug}`, {
            next: { revalidate: 60 }
        });
        return await handleResponse(res);
    } catch (error) {
        return { success: false, error: "Failed to fetch service page" };
    }
}

export async function updateServiceAction(id: string | number, updateData: any) {
    try {
        const res = await fetch(`${SERVICES_API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData),
        });
        return await handleResponse(res);
    } catch (error: any) { return { success: false, error: error.message }; }
}

export async function deleteServiceAction(id: string | number) {
    try {
        const res = await fetch(`${SERVICES_API}/${id}`, { method: 'DELETE' });
        return await handleResponse(res);
    } catch (error) { return { success: false, error: "Failed to delete service" }; }
}

// 🔥 FINAL FIX YAHAN HAI: URL aur Method ko backend se match kar diya
export async function bulkDeleteServicesAction(ids: (string | number)[]) {
    try {
        const res = await fetch(`${SERVICES_API}/DeleteMultiple`, {
            method: 'POST', // Backend requires POST for this route
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids }),
        });
        return await handleResponse(res);
    } catch (error) { return { success: false, error: "Failed to perform bulk delete" }; }
}

export async function getServiceByIdAction(id: string | number) {
    try {
        const res = await fetch(`${SERVICES_API}/${id}`, { cache: 'no-store' });
        return await handleResponse(res);
    } catch (error) { return { success: false, error: "Failed to fetch service detail" }; }
}
