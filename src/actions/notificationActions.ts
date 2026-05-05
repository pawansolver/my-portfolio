'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { SESSION_COOKIE } from '@/lib/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_BASE_URL = `${BASE_URL}/api/notifications`;

const getAuthHeaders = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// 1. Fetch Latest Notifications
export const getNotificationsAction = async (clientId: string | number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.get(`${API_BASE_URL}?clientId=${clientId}`, { headers });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching notifications:", error.response?.data?.message || error.message);
        return { success: false, data: [], unreadCount: 0 };
    }
};

// 2. Mark Single as Read
export const markAsReadAction = async (id: number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.patch(`${API_BASE_URL}/${id}/read`, {}, { headers });
        return response.data;
    } catch (error: any) {
        console.error("Error marking notification read:", error.response?.data?.message || error.message);
        return { success: false };
    }
};

// 3. Mark All as Read
export const markAllAsReadAction = async (clientId: string | number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.patch(`${API_BASE_URL}/read-all`, { clientId }, { headers });
        return response.data;
    } catch (error: any) {
        console.error("Error marking all read:", error.response?.data?.message || error.message);
        return { success: false };
    }
};

// 4. Delete Single Notification
export const deleteNotificationAction = async (id: number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.delete(`${API_BASE_URL}/${id}`, { headers });
        return response.data;
    } catch (error: any) {
        console.error("Error deleting notification:", error.response?.data?.message || error.message);
        return { success: false };
    }
};

// 5. Clear All Notifications
export const clearAllNotificationsAction = async (clientId: string | number) => {
    try {
        const headers = await getAuthHeaders();
        const response = await axios.delete(`${API_BASE_URL}/clear/all?clientId=${clientId}`, { headers });
        return response.data;
    } catch (error: any) {
        console.error("Error clearing notifications:", error.response?.data?.message || error.message);
        return { success: false };
    }
};
