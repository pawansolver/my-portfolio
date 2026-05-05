"use client";
import React, { useState, useEffect } from 'react';
import Settings from '@/components/user-dashboard/Settings';

export default function SettingsPage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    return <Settings user={user} />;
}
