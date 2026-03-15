'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function SliderManagement() {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    const [sliders, setSliders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSlider, setEditingSlider] = useState<any | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // 🔥 Default state 'partner' kar diya
    const [formData, setFormData] = useState({
        label: 'Partner',
        title: 'Our Partner',
        description: '',
        componentType: 'partner',
        order: 1,
        isActive: true
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    // ==========================================
    // 1. GET ALL SLIDERS
    // ==========================================
    const fetchSliders = async () => {
        if (!API_BASE_URL) return;

        try {
            setLoading(true);
            const res = await fetch(`${API_BASE_URL}/api/slider/admin/all`);
            const result = await res.json();

            if (result.success && result.data) {
                setSliders(result.data);
            } else if (Array.isArray(result)) {
                setSliders(result);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchSliders(); }, []);

    // ==========================================
    // 2. CREATE & UPDATE
    // ==========================================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const data = new FormData();
        data.append('label', formData.label);
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('componentType', formData.componentType);
        data.append('order', formData.order.toString());
        data.append('isActive', formData.isActive.toString());

        if (imageFile) data.append('image', imageFile);

        try {
            const url = editingSlider
                ? `${API_BASE_URL}/api/slider/${editingSlider.id}`
                : `${API_BASE_URL}/api/slider`;

            const method = editingSlider ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                body: data
            });

            const result = await res.json();

            if (result.success || result.message === 'Created' || result.message === 'Updated') {
                fetchSliders();
                closeModal();
            } else {
                alert(result.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Submit Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    // ==========================================
    // 3. DELETE SINGLE
    // ==========================================
    const handleDelete = async (id: number) => {
        if (!window.confirm("Delete this slider?")) return;
        try {
            const res = await fetch(`${API_BASE_URL}/api/slider/${id}`, {
                method: 'DELETE'
            });
            const result = await res.json();
            if (result.success || result.message === 'Deleted successfully') fetchSliders();
        } catch (error) { console.error(error); }
    };

    // ==========================================
    // 4. BULK DELETE
    // ==========================================
    const handleBulkDelete = async () => {
        if (!window.confirm(`Delete ${selectedIds.length} sliders?`)) return;
        try {
            const res = await fetch(`${API_BASE_URL}/api/slider/DeleteMultiple`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: selectedIds })
            });
            const result = await res.json();
            if (result.success || result.message === 'Selected sliders deleted') {
                setSelectedIds([]);
                fetchSliders();
            }
        } catch (error) { console.error(error); }
    };

    // --- Modal Controls ---
    const openModal = (slider: any = null) => {
        setEditingSlider(slider);
        if (slider) {
            setFormData({
                label: slider.label,
                title: slider.title,
                description: slider.description,
                componentType: slider.componentType,
                order: slider.order,
                isActive: slider.isActive
            });
        } else {
            // 🔥 Naya kholne par default Partner hi rahega
            setFormData({ label: 'Partner', title: 'Our Partner', description: '', componentType: 'partner', order: 1, isActive: true });
        }
        setImageFile(null);
        setIsModalOpen(true);
    };

    const closeModal = () => { setIsModalOpen(false); setEditingSlider(null); };

    // --- Select Controls ---
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setSelectedIds(sliders.map(s => s.id));
        else setSelectedIds([]);
    };
    const handleSelectOne = (id: number) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    // ==========================================
    // UI RENDER
    // ==========================================
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Partner Logos</h1>
                    <p className="text-sm text-slate-500">Manage footer marquee partner logos</p>
                </div>
                <div className="flex gap-3">
                    {selectedIds.length > 0 && (
                        <button onClick={handleBulkDelete} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 flex items-center gap-2">
                            <Trash2 size={16} /> Delete ({selectedIds.length})
                        </button>
                    )}
                    <button onClick={() => openModal()} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 flex items-center gap-2 shadow-sm">
                        <Plus size={16} /> Add Logo
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" onChange={handleSelectAll} checked={sliders.length > 0 && selectedIds.length === sliders.length} /></th>
                            <th className="px-6 py-4">Image</th>
                            <th className="px-6 py-4">Label & Title</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {loading ? <tr><td colSpan={5} className="p-8 text-center"><Loader2 className="animate-spin mx-auto" /></td></tr> :
                            sliders.map(s => (
                                <tr key={s.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4"><input type="checkbox" className="rounded" checked={selectedIds.includes(s.id)} onChange={() => handleSelectOne(s.id)} /></td>
                                    <td className="px-6 py-4">
                                        <img src={`${API_BASE_URL}${s.imageUrl}`} className="h-12 w-20 object-cover rounded border" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-xs font-bold text-orange-500 uppercase">{s.label}</div>
                                        <div className="font-semibold text-slate-800">{s.title}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${s.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {s.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => openModal(s)} className="text-blue-500 p-2"><Edit size={18} /></button>
                                        <button onClick={() => handleDelete(s.id)} className="text-red-500 p-2"><Trash2 size={18} /></button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden">
                        <div className="p-4 border-b bg-slate-50 flex justify-between">
                            <h2 className="font-bold text-lg">{editingSlider ? 'Edit Logo' : 'Add Logo'}</h2>
                            <button onClick={closeModal} className="text-slate-400 text-xl">&times;</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            <div>
                                <label className="text-xs font-bold text-orange-500 mb-1 block">Where to show this image? *</label>
                                <select
                                    required
                                    className="w-full border-2 border-slate-200 rounded-lg p-2 focus:border-orange-500 outline-none transition-colors"
                                    value={formData.componentType}
                                    onChange={e => {
                                        const val = e.target.value;
                                        setFormData({ ...formData, componentType: val, label: 'Partner', title: 'Our Partner' });
                                    }}
                                >
                                    {/* 🔥 Home wala option hamesha ke liye hata diya gaya hai */}
                                    <option value="partner">Partner Logo Slider (Bottom Marquee)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="text-xs font-medium">Label</label><input type="text" className="w-full border rounded p-2" value={formData.label} onChange={e => setFormData({ ...formData, label: e.target.value })} /></div>
                                <div><label className="text-xs font-medium">Title</label><input type="text" className="w-full border rounded p-2" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} /></div>
                            </div>

                            <div><label className="text-xs font-medium">Description</label><textarea className="w-full border rounded p-2" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} /></div>

                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="text-xs font-medium">Order</label><input type="number" className="w-full border rounded p-2" value={formData.order} onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })} /></div>
                                <div>
                                    <label className="text-xs font-medium">Status</label>
                                    <select className="w-full border rounded p-2" value={formData.isActive ? 'true' : 'false'} onChange={e => setFormData({ ...formData, isActive: e.target.value === 'true' })}>
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium">Image {editingSlider && '(Leave blank to keep old)'}</label>
                                <input type="file" required={!editingSlider} className="w-full border rounded p-2 text-sm" onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)} />
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded text-sm">Cancel</button>
                                <button type="submit" disabled={submitting} className="bg-orange-500 text-white px-4 py-2 rounded text-sm disabled:opacity-50">
                                    {submitting ? 'Saving...' : 'Save Logo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}