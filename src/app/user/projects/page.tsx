"use client";
import React, { useState, useEffect } from 'react';
import Projects from '@/components/user-dashboard/Projects';

export default function ProjectsPage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    return <Projects user={user} />;
}
