"use client";
import React, { useState, useEffect } from 'react';
import Documents from '@/components/user-dashboard/Documents';

export default function DocumentsPage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    return <Documents user={user} />;
}
