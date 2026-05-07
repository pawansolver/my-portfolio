'use server'

// 🔥 Render Backend URL Sync (Local fallback ke saath)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const PROJECTS_API = `${API_BASE_URL}/api/projects`;

// Helper: Response check karne ke liye taaki crash na ho
async function handleResponse(res: Response) {
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Backend didn't return JSON. Check if Render backend is live.");
    }
    return await res.json();
}

// ==========================================
// 🚀 6 PROJECTS MODULE ACTIONS
// ==========================================

// 1. [CREATE] - Admin Only: Naya Project banana
export async function createProjectAction(projectData: any) {
    try {
        const res = await fetch(PROJECTS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectData),
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Create Project Error:", error);
        return { success: false, message: error.message || "Failed to create project" };
    }
}

// 2. [READ ALL / READ USER SPECIFIC] - 🔥 THE FIX: Ab ye email accept karega!
export async function getAllProjectsAction(email?: string) {
    try {
        // 🚀 THE MAGIC: Agar email aaya hai, toh URL me add karo, warna saare projects lao (admin ke liye)
        const fetchUrl = email ? `${PROJECTS_API}?email=${encodeURIComponent(email)}` : PROJECTS_API;

        const res = await fetch(fetchUrl, {
            cache: 'no-store'
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Get All Projects Error:", error);
        return { success: false, message: "Failed to fetch projects." };
    }
}

// 3. [READ SINGLE] - Project Detail lana ID ke saath
export async function getProjectByIdAction(projectId: string) {
    try {
        const res = await fetch(`${PROJECTS_API}/${projectId}`, {
            cache: 'no-store'
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Get Single Project Error:", error);
        return { success: false, message: "Failed to fetch project detail." };
    }
}

// 4. [UPDATE] - Admin Only: Project Edit karna
export async function updateProjectAction(projectId: string, updateData: any) {
    try {
        const res = await fetch(`${PROJECTS_API}/${projectId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData),
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Update Project Error:", error);
        return { success: false, message: "Failed to update project." };
    }
}

// 5. [DELETE] - Admin Only: Single Project hamesha ke liye hatana
export async function deleteProjectAction(projectId: string) {
    try {
        const res = await fetch(`${PROJECTS_API}/${projectId}`, {
            method: 'DELETE'
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Delete Project Error:", error);
        return { success: false, message: "Failed to delete project." };
    }
}

// 6. [BULK DELETE] - Admin Only: Multiple Projects ek saath hatana
export async function bulkDeleteProjectsAction(projectIds: string[]) {
    try {
        const res = await fetch(`${PROJECTS_API}/bulk-delete`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: projectIds }),
        });
        return await handleResponse(res);
    } catch (error: any) {
        console.error("❌ Bulk Delete Error:", error);
        return { success: false, message: "Failed to perform bulk delete." };
    }
}
