"use client";
import React, { useState, useEffect } from 'react';
import Billing from '@/components/user-dashboard/Billing';

export default function BillingPage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    return <Billing user={user} />;
}
