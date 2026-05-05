"use client";

import React, { useState, useEffect } from 'react';
import { Search, Loader2, Building, Briefcase, Clock, CheckCircle2 } from 'lucide-react';
import { getAllProjectsAction } from '@/actions/projectActions';

// 🔥 THE FIX: Component ko 'user' prop receive karna hai
export default function ClientProjectsPage({ user }: { user: any }) {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchMyProjects = async () => {
        if (!user?.email) return;

        setLoading(true);
        try {
            const result = await getAllProjectsAction(user.email);

            if (result && result.success) {
                const fetchedProjects = result.data || [];
                const userEmail = user.email.toLowerCase();

                // ==========================================
                // 🚨 STRICT FRONTEND SECURITY LOCK
                // ==========================================
                // Backend chahe saare data bhej de, hum strictly sirf is user ka nikalenge
                const myStrictProjects = fetchedProjects.filter((p: any) =>
                    p.clientEmail?.toLowerCase() === userEmail ||
                    p.email?.toLowerCase() === userEmail
                );

                setProjects(myStrictProjects);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyProjects();
    }, [user]); // User change hote hi reload hoga

    const filteredProjects = projects.filter(p =>
        (p.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (p.projectId?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'In Progress': return 'bg-blue-50 text-blue-700 border-blue-100';
            default: return 'bg-orange-50 text-brandOrange border-orange-100';
        }
    };

    return (
        <div className="flex flex-col w-full animate-in fade-in duration-500 overflow-hidden">
            <div className="flex-none pb-4 md:pb-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 md:mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-textmain tracking-tight">Projects</h1>
                        <p className="text-sm text-slate-500 mt-1">Live Development Status</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                    <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Total</p>
                            <h3 className="text-2xl font-black text-textmain mt-1">{projects.length}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                            <Briefcase className="text-slate-400" size={20} />
                        </div>
                    </div>
                    <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Active</p>
                            <h3 className="text-2xl font-black text-textmain mt-1">
                                {projects.filter(p => p.status === 'In Progress').length}
                            </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <Clock className="text-blue-500" size={20} />
                        </div>
                    </div>
                    <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Done</p>
                            <h3 className="text-2xl font-black text-textmain mt-1">
                                {projects.filter(p => p.status === 'Completed').length}
                            </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-emerald-500" size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col min-h-[400px]">
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
                    <div className="flex-none p-4 md:p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Project Inventory</h4>
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Quick filter..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[13px] md:text-sm outline-none focus:bg-white focus:ring-4 focus:ring-brandOrange/10 focus:border-brandOrange/50 transition-all font-medium placeholder-slate-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex-grow w-full overflow-x-auto no-scrollbar">
                        {loading ? (
                            <div className="flex justify-center items-center h-48 md:h-full"><Loader2 className="animate-spin text-brandOrange" size={32} /></div>
                        ) : filteredProjects.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-48 md:h-full text-slate-300 py-10 px-4 text-center">
                                <Building size={40} className="mb-3 opacity-20" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">No Projects Found</p>
                            </div>
                        ) : (
                            <table className="w-full text-left min-w-[700px] border-collapse">
                                <thead className="bg-slate-50/50 border-b border-slate-100 text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    <tr>
                                        <th className="px-5 md:px-8 py-4 whitespace-nowrap">Project Title</th>
                                        <th className="px-5 md:px-8 py-4 whitespace-nowrap">Reference Email</th>
                                        <th className="px-5 md:px-8 py-4 whitespace-nowrap">Due Date</th>
                                        <th className="px-5 md:px-8 py-4 whitespace-nowrap">Progress</th>
                                        <th className="px-5 md:px-8 py-4 text-center whitespace-nowrap">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 text-[13px] font-medium">
                                    {filteredProjects.map((project, index) => (
                                        <tr key={project.id || project._id || index} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-5 md:px-8 py-4 whitespace-nowrap">
                                                <div className="font-bold text-textmain">{project.title}</div>
                                                <div className="text-[10px] text-slate-400 font-mono tracking-tighter uppercase mt-0.5">{project.projectId}</div>
                                            </td>
                                            <td className="px-5 md:px-8 py-4 text-slate-500 text-[12px] md:text-[13px] lowercase font-medium whitespace-nowrap">
                                                {project.clientEmail}
                                            </td>
                                            <td className="px-5 md:px-8 py-4 text-slate-700 font-bold text-[12px] md:text-[13px] whitespace-nowrap">
                                                {new Date(project.dueDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </td>
                                            <td className="px-5 md:px-8 py-4 min-w-[150px]">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-full max-w-[100px] bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
                                                        <div className="bg-brandOrange h-full rounded-full transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                                                    </div>
                                                    <span className="text-[10px] md:text-xs font-black text-slate-500 shrink-0">{project.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-5 md:px-8 py-4 text-center whitespace-nowrap">
                                                <span className={`inline-flex px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg border ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}