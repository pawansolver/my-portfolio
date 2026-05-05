'use server';

import axios from 'axios';

// Apne backend ke URL ke hisaab se isko set karein 
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const SESSIONS_API = `${BASE_URL}/api/sessions`;

// ==========================================
// 1. GET ACTIVE SESSIONS
// ==========================================
export const getActiveSessionsAction = async (clientId: string | number) => {
    try {
        const response = await axios.get(`${SESSIONS_API}/${clientId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching active sessions:", error);
        throw error;
    }
};

// ==========================================
// 2. REVOKE (LOGOUT) SESSION
// ==========================================
export const revokeSessionAction = async (sessionId: number, clientId: string | number) => {
    try {
        const response = await axios.delete(`${SESSIONS_API}/revoke/${sessionId}`, {
            data: { clientId } // Security check ke liye
        });
        return response.data;
    } catch (error) {
        console.error(`Error revoking session ${sessionId}:`, error);
        throw error;
    }
};