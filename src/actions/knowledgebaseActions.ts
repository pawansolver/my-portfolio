"use server";

import { cookies } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const KNOWLEDGEBASE_API = `${BASE_URL}/api/support/knowledgebase`;

// 📚 1. PUBLIC ACTIONS
export async function getKBCategoriesAction() {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/categories`, { cache: 'no-store' });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to fetch categories" };
    }
}

export async function getGroupedArticlesAction() {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/grouped`, { cache: 'no-store' });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to fetch grouped articles" };
    }
}

export async function getArticleBySlugAction(slug: string) {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/article/${slug}`, { cache: 'no-store' });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to fetch article" };
    }
}

export async function searchKBAction(query: string) {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/search?query=${query}`, { cache: 'no-store' });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Search failed" };
    }
}

export async function voteArticleAction(id: number | string, vote: 'yes' | 'no') {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/vote/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vote }),
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to record feedback" };
    }
}

// 🛡️ 2. ADMIN ACTIONS (MANAGEMENT)
export async function getAllArticlesAction() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/admin`, {
            cache: 'no-store',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to fetch articles" };
    }
}

export async function createArticleAction(articleData: any) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(articleData),
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to create article" };
    }
}

export async function updateArticleAction(id: string | number, articleData: any) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/${id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(articleData),
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to update article" };
    }
}

export async function deleteArticleAction(id: string | number) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to delete article" };
    }
}

// Category Admin
export async function createCategoryAction(categoryData: any) {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoryData),
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to create category" };
    }
}

export async function updateCategoryAction(id: string | number, categoryData: any) {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/categories/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoryData),
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to update category" };
    }
}

export async function deleteCategoryAction(id: string | number) {
    try {
        const res = await fetch(`${KNOWLEDGEBASE_API}/categories/${id}`, {
            method: 'DELETE'
        });
        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to delete category" };
    }
}