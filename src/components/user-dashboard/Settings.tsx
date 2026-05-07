"use client";

import React, { useState, useEffect } from 'react';
import {
    User, Lock, Bell, Shield, Save, Camera, Smartphone, Monitor,
    Building2, Globe, MapPin, CreditCard, Loader2, Trash2
} from 'lucide-react';

import { getSettingsByClientId, updateSettings, uploadAvatarAction } from '../../actions/settingsActions';
import { getActiveSessionsAction, revokeSessionAction } from '../../actions/sessionActions';
import { clearAllNotificationsAction } from '../../actions/notificationActions';

// 🚀 Industry Standard Real Timezones
const commonTimezones = [
    "Asia/Kolkata", "America/New_York", "America/Los_Angeles", "America/Chicago",
    "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow",
    "Asia/Dubai", "Asia/Singapore", "Asia/Tokyo", "Asia/Hong_Kong",
    "Australia/Sydney", "Australia/Melbourne", "Pacific/Auckland", "UTC"
];

export default function Settings({ user }: { user: any }) {
    const [activeTab, setActiveTab] = useState<'profile' | 'company' | 'security' | 'notifications'>('profile');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isClearingNotifs, setIsClearingNotifs] = useState(false);

    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [sessions, setSessions] = useState<any[]>([]);

    const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        timezone: systemTimezone,
        accountType: 'individual', 
        billingEmail: '',
        companyName: '',
        websiteUrl: '',
        taxId: '',
        country: 'India',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        projectUpdates: true,
        billingInvoices: true,
        marketingNews: false
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const targetId = user?.id;
            if (!targetId) { setIsLoading(false); return; }

            try {
                const result = await getSettingsByClientId(targetId);
                let userData = result?.data || result;
                let settingsData = userData?.settings || userData?.clientSettings || {};
                let userObj = userData?.user || userData?.client || userData;

                if (userObj?.avatar) setPreviewImage(userObj.avatar);

                setFormData(prev => ({
                    ...prev,
                    name: userObj?.fullName || userObj?.name || '',
                    email: userObj?.email || '',
                    timezone: settingsData?.timezone || systemTimezone,
                    accountType: settingsData?.accountType || (settingsData?.companyName ? 'business' : 'individual'),
                    billingEmail: settingsData?.billingEmail || '',
                    country: settingsData?.country || 'India',
                    companyName: settingsData?.companyName || '',
                    websiteUrl: settingsData?.websiteUrl || '',
                    taxId: settingsData?.taxId || '',
                    address: settingsData?.address || '',
                    projectUpdates: settingsData?.projectUpdates ?? true,
                    billingInvoices: settingsData?.billingInvoices ?? true,
                    marketingNews: settingsData?.marketingNews ?? false,
                }));

                const sessionsResult = await getActiveSessionsAction(targetId);
                if (sessionsResult?.success) setSessions(sessionsResult.data || []);

            } catch (error) {
                console.error("Failed to load settings:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, [user, systemTimezone]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) return alert("File size should be less than 5MB");
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleRevokeSession = async (sessionId: number) => {
        if (!confirm("Are you sure you want to remove this device?")) return;
        try {
            const res = await revokeSessionAction(sessionId, user?.id);
            if (res?.success) setSessions(prev => prev.filter(s => s.id !== sessionId));
        } catch (error) { console.error(error); }
    };

    const handleClearAllNotifications = async () => {
        if (!user?.id) return;
        if (!confirm("Permanently delete ALL notifications? This cannot be undone.")) return;
        setIsClearingNotifs(true);
        try {
            const res = await clearAllNotificationsAction(user.id);
            if (res?.success) alert("Notification history cleared!");
        } catch (error) { console.error(error); }
        finally { setIsClearingNotifs(false); }
    };

    const handleSave = async () => {
        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            return alert("Passwords do not match!");
        }
        setIsSaving(true);
        try {
            await updateSettings(user?.id, formData);
            if (avatarFile) await uploadAvatarAction(user?.id, avatarFile);
            alert("Settings saved!");
            setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
            setAvatarFile(null);
        } catch (error) { console.error(error); }
        finally { setIsSaving(false); }
    };

    if (isLoading) return <div className="flex flex-col items-center justify-center h-full w-full"><Loader2 className="animate-spin text-brandOrange" /></div>;

    return (
        <div className="flex flex-col h-full gap-6 w-full overflow-hidden animate-in fade-in duration-500">
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-textmain">Account Settings</h1>
                <p className="text-sm text-slate-500">Manage your profile and preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1 overflow-hidden">
                <div className="lg:w-64 flex flex-col gap-2">
                    {[
                        { id: 'profile', icon: <User size={18} />, label: 'My Profile' },
                        { id: 'company', icon: <Building2 size={18} />, label: 'Billing & Company' },
                        { id: 'security', icon: <Shield size={18} />, label: 'Security & Access' },
                        { id: 'notifications', icon: <Bell size={18} />, label: 'Notifications' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-textmain text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
                    {activeTab === 'profile' && (
                        <div className="space-y-6 max-w-3xl">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
                                <div className="relative group shrink-0 w-20 h-20 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                                    {previewImage ? <img src={previewImage} className="w-full h-full object-cover" /> : <User size={30} className="text-slate-300" />}
                                    <label htmlFor="avatar-input" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"><Camera size={20} /></label>
                                    <input type="file" id="avatar-input" className="hidden" accept="image/*" onChange={handleImageChange} />
                                </div>
                                <div>
                                    <p className="font-bold text-textmain">Profile Picture</p>
                                    <p className="text-xs text-slate-500">PNG, JPG up to 5MB.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Personal Info</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase">Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase">Email</label>
                                        <input type="email" value={formData.email} disabled className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'company' && (
                        <div className="space-y-6 max-w-3xl">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {['individual', 'business'].map(type => (
                                        <label key={type} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.accountType === type ? 'border-brandOrange bg-orange-50/50' : 'border-slate-100'}`}>
                                            <input type="radio" name="accountType" value={type} checked={formData.accountType === type} onChange={handleInputChange} className="sr-only" />
                                            <p className="text-sm font-bold capitalize">{type}</p>
                                        </label>
                                    ))}
                                </div>
                                {formData.accountType === 'business' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top-2">
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company Name" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                        <input type="text" name="taxId" value={formData.taxId} onChange={handleInputChange} placeholder="Tax ID / GSTIN" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="email" name="billingEmail" value={formData.billingEmail} onChange={handleInputChange} placeholder="Billing Email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                    </select>
                                    <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Billing Address" className="md:col-span-2 w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm min-h-[100px]" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6 max-w-3xl">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Change Password</h3>
                                <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleInputChange} placeholder="Current Password" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} placeholder="New Password" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Sessions</h3>
                                {sessions.map(s => (
                                    <div key={s.id} className="flex items-center justify-between py-2 border-b last:border-0 border-slate-50">
                                        <div className="flex items-center gap-3">
                                            {s.deviceType === 'mobile' ? <Smartphone size={16} /> : <Monitor size={16} />}
                                            <div>
                                                <p className="text-sm font-bold">{s.os} • {s.browser}</p>
                                                <p className="text-[10px] text-slate-400">{s.isCurrent ? 'Active Now' : `Last seen ${new Date(s.lastActive).toLocaleDateString()}`}</p>
                                            </div>
                                        </div>
                                        {!s.isCurrent && <button onClick={() => handleRevokeSession(s.id)} className="text-red-500 p-1 hover:bg-red-50 rounded"><Trash2 size={14} /></button>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="space-y-6 max-w-3xl">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Email Prefs</h3>
                                {[
                                    { name: 'projectUpdates', label: 'Project Updates' },
                                    { name: 'billingInvoices', label: 'Billing & Invoices' },
                                    { name: 'marketingNews', label: 'Marketing news' }
                                ].map(pref => (
                                    <div key={pref.name} className="flex items-center justify-between">
                                        <p className="text-sm font-bold">{pref.label}</p>
                                        <input type="checkbox" name={pref.name} checked={(formData as any)[pref.name]} onChange={handleInputChange} className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm space-y-3">
                                <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest">History Management</h3>
                                <p className="text-xs text-slate-500">Wipe all your dashboard notifications permanently.</p>
                                <button onClick={handleClearAllNotifications} disabled={isClearingNotifs} className="px-5 py-2.5 rounded-xl font-bold text-xs border border-red-200 text-red-600 hover:bg-red-50 transition-all flex items-center gap-2">
                                    {isClearingNotifs ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />} Clear all history
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mt-8 flex justify-end">
                        <button onClick={handleSave} disabled={isSaving} className="bg-textmain text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-brandOrange transition-all disabled:opacity-50">
                            {isSaving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        </div>
    );
}
