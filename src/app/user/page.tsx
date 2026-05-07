"use client";
import React, { useState, useEffect } from 'react';
import Overview from '@/components/user-dashboard/Overview';

export default function DashboardIndex() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    return <Overview user={user} />;
}
