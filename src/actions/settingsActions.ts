'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { SESSION_COOKIE } from '@/lib/auth';

// Apne backend ke URL ke hisaab se isko set karein 
// (Agar Next.js/Vite use kar rahe hain toh .env variable use karna best hai)
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_BASE_URL = `${BASE_URL}/api/client-settings`;

// Helper: Token nikalne ke liye
const getAuthHeaders = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// ==========================================
// 1. CREATE: Naya Setting Profile Banana (Admin Use)
// ==========================================
export const createSettings = async (settingsData: any) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.post(`${API_BASE_URL}/create`, settingsData, { headers });
        return response.data;
    } catch (error) {
        console.error("Error creating settings:", error);
        throw error;
    }
};

// ==========================================
// 2. READ ALL: Saare Settings Lana (Admin Panel)
// ==========================================
export const getAllSettings = async () => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.get(`${API_BASE_URL}/all/admin`, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching all settings:", error);
        throw error;
    }
};

// ==========================================
// 3. READ SINGLE (GET PROFILE): Frontend UI load hone par
// ==========================================
export const getSettingsByClientId = async (clientId: string | number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.get(`${API_BASE_URL}/${clientId}`, { headers });
        return response.data; // Yeh aapko { user, settings } dega
    } catch (error) {
        console.error(`Error fetching settings for client ${clientId}:`, error);
        throw error;
    }
};

// ==========================================
// 4. UPDATE (SYNC): Frontend se Save button click hone par
// ==========================================
export const updateSettings = async (clientId: string | number, formData: any) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.put(`${API_BASE_URL}/update/${clientId}`, formData, { headers });
        return { success: true, ...response.data };
    } catch (error: any) {
        console.error(`Error updating settings for client ${clientId}:`, error);
        
        // 🔥 NAYA: Detailed Error Extraction
        const errorMessage = error.response?.data?.message || error.message || "Failed to update settings.";
        return { 
            success: false, 
            message: errorMessage,
            detail: error.response?.data?.detail
        };
    }
};

// ==========================================
// 5. DELETE: Settings udana (Admin Use)
// ==========================================
export const deleteSettings = async (clientId: string | number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.delete(`${API_BASE_URL}/delete/${clientId}`, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error deleting settings for client ${clientId}:`, error);
        throw error;
    }
};

// ==========================================
// 6. BULK DELETE: Ek sath multiple udana (Admin Use)
// ==========================================
export const bulkDeleteSettings = async (ids: number[] | string[]) => {
    try {
        const headers = await getAuthHeaders();
        // 🔥 Important Note: Axios mein DELETE request ke sath body bhejne ke liye 
        // `data` property ka use karna padta hai.
        const response = await axios.delete(`${API_BASE_URL}/bulk-delete`, {
            headers,
            data: { ids }
        });
        return response.data;
    } catch (error) {
        console.error("Error during bulk delete:", error);
        throw error;
    }
};

// ==========================================
// 7. UPLOAD AVATAR (Naya Function)
// ==========================================
// 7. UPLOAD AVATAR (TypeScript Fixed)
// ==========================================
// 🔥 Yahan humne types add kar diye: clientId (string ya number) aur file (any ya File)
export const uploadAvatarAction = async (clientId: string | number, file: any) => {
    try {
        const headers = await getAuthHeaders();
        const formData = new FormData();
        formData.append('avatar', file);

        const response = await axios.post(`${API_BASE_URL}/upload-avatar/${clientId}`, formData, {
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Avatar Action Error:", error);
        throw error;
    }
};
