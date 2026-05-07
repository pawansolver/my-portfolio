"use server";

// Backend URL set karein
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

// 🔥 Client-Specific Search Action
export const globalSearchAction = async (query: string, clientId: string | number, email: string) => {
    try {
        // Aapke banaye huye backend route ko hit kar raha hai
        const response = await fetch(`${API_URL}/api/search?query=${encodeURIComponent(query)}&clientId=${clientId}&email=${encodeURIComponent(email)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // Cache 'no-store' taaki hamesha fresh search result aaye
            cache: 'no-store'
        });

        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error("Search fetch error:", error);
        return [];
    }
};
