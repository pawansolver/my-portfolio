"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    FolderGit2,
    CreditCard,
    FileStack,
    LifeBuoy,
    ArrowRight,
    CheckCircle2,
    Clock,
    AlertCircle,
    Download,
    Loader2
} from 'lucide-react';

import { getAllProjectsAction } from '@/actions/projectActions';
import { getDocumentsByClientAction } from '@/actions/documentActions';
import { getUserTicketsAction } from '@/actions/supportActions';

export default function Overview({ user }: { user: any }) {
    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState({
        activeProjectsCount: 0,
        unpaidInvoicesTotal: 0,
        unpaidInvoicesCount: 0,
        documentsCount: 0,
        ticketsCount: 0,
        mainProject: null as any,
        actionInvoice: null as any,
        recentDocuments: [] as any[],
    });

    useEffect(() => {
        const fetchDashboardSummary = async () => {
            if (!user) return;
            const targetId = user.clientId || user.id || user.client_id;
            const userEmail = user.email; // 🔥 STRICT: Asli user ka email

            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

                const [projectsRes, invoicesRes, docsRes, ticketsRes] = await Promise.all([
                    getAllProjectsAction(userEmail).catch(() => null),
                    fetch(`${apiUrl}/api/payment/invoices?email=${userEmail}`).then(res => res.json()).catch(() => null),
                    getDocumentsByClientAction(targetId).catch(() => null),
                    typeof getUserTicketsAction === 'function' ? getUserTicketsAction(userEmail).catch(() => null) : Promise.resolve(null)
                ]);

                // ==========================================
                // 🚨 PROJECTS PROCESSING (STRICT FILTER)
                // ==========================================
                const fetchedProjects = projectsRes?.success ? projectsRes.data : [];

                // 🔥 THE MAGIC: Backend chahe sabka project bhej de, hum frontend par strictly filter karenge
                // Case-insensitive aur strict matching
                const myProjects = fetchedProjects.filter((p: any) =>
                    p.clientEmail?.toLowerCase() === userEmail?.toLowerCase() ||
                    p.email?.toLowerCase() === userEmail?.toLowerCase()
                );

                const activeProjects = myProjects.filter((p: any) => p.status === 'In Progress');
                const mainProject = activeProjects.length > 0 ? activeProjects[0] : myProjects[0];

                // ==========================================
                // 🚨 INVOICES PROCESSING (STRICT FILTER)
                // ==========================================
                const fetchedInvoices = invoicesRes?.success ? invoicesRes.data : [];

                const myInvoices = fetchedInvoices.filter((inv: any) =>
                    inv.clientEmail?.toLowerCase() === userEmail?.toLowerCase() ||
                    inv.email?.toLowerCase() === userEmail?.toLowerCase()
                );

                const unpaidInvoices = myInvoices.filter((inv: any) => inv.status !== 'Paid');
                const totalUnpaidAmount = unpaidInvoices.reduce((sum: number, inv: any) => {
                    const amount = parseFloat(String(inv.amount).replace(/[^0-9.-]+/g, "")) || 0;
                    return sum + amount;
                }, 0);
                const actionInvoice = unpaidInvoices.length > 0 ? unpaidInvoices[0] : null;

                // ==========================================
                // 🚨 DOCUMENTS & TICKETS PROCESSING
                // ==========================================
                const docs = docsRes?.success ? docsRes.data : [];
                // Documents ID base pe chal rahe hain isliye leak ka risk kam hai, fir bhi dhyan rahe
                const recentDocs = docs.slice(0, 3);

                const tickets = ticketsRes?.success ? ticketsRes.data : [];

                setDashboardData({
                    activeProjectsCount: activeProjects.length,
                    unpaidInvoicesTotal: totalUnpaidAmount,
                    unpaidInvoicesCount: unpaidInvoices.length,
                    documentsCount: docs.length,
                    ticketsCount: tickets.length || 0,
                    mainProject: mainProject,
                    actionInvoice: actionInvoice,
                    recentDocuments: recentDocs,
                });

            } catch (error) {
                console.error("Failed to fetch dashboard summary", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardSummary();
    }, [user]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
    };

    const handleDownloadSummary = () => {
        const summaryText = `
=========================================
WORKSPACE SUMMARY: ${user?.name || 'Client'}
=========================================
Date: ${new Date().toLocaleString()}

Active Projects: ${dashboardData.activeProjectsCount}
Unpaid Invoices Total: ${formatCurrency(dashboardData.unpaidInvoicesTotal)}
Unpaid Invoices Count: ${dashboardData.unpaidInvoicesCount}
Documents in Vault: ${dashboardData.documentsCount}
Open Support Tickets: ${dashboardData.ticketsCount}

Status: Current Workspace Healthy.
-----------------------------------------
Generated by Nighwan Tech (NTPL) Dashboard
=========================================`;

        const blob = new Blob([summaryText.trim()], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `workspace_summary_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full">
                <Loader2 className="animate-spin text-brandOrange mb-3" size={28} />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compiling Workspace Data...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full gap-4 md:gap-5 animate-in fade-in duration-500 w-full overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2 flex-shrink-0 border-b border-slate-200/60">
                <div>
                    <h1 className="text-xl md:text-2xl font-black text-textmain tracking-tight">
                        Welcome back, {user?.name?.split(' ')[0] || 'User'}!
                    </h1>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Here's what's happening in your workspace today.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleDownloadSummary}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 shadow-sm transition-all active:scale-95"
                    >
                        <Download size={14} /> Summary
                    </button>
                    {/* Upgrade Plan Button Removed as requested */}
                </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 w-full flex-shrink-0">
                <div className="bg-white p-3.5 md:p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[90px]">
                    <div className="flex justify-between items-start mb-2">
                        <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                            <FolderGit2 size={14} />
                        </div>
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wider">In Development</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-textmain leading-none">{String(dashboardData.activeProjectsCount).padStart(2, '0')}</h3>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wide">Active Projects</p>
                    </div>
                </div>

                <div className="bg-white p-3.5 md:p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[90px]">
                    <div className="flex justify-between items-start mb-2">
                        <div className="w-6 h-6 rounded-md bg-orange-50 text-brandOrange flex items-center justify-center">
                            <CreditCard size={14} />
                        </div>
                        {dashboardData.unpaidInvoicesCount > 0 ? (
                            <span className="text-[9px] font-bold bg-orange-50 text-brandOrange border border-orange-100 px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
                                <AlertCircle size={8} /> Due Now
                            </span>
                        ) : (
                            <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
                                <CheckCircle2 size={8} /> All Cleared
                            </span>
                        )}
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-textmain leading-none truncate">{formatCurrency(dashboardData.unpaidInvoicesTotal)}</h3>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wide">Unpaid Invoices</p>
                    </div>
                </div>

                <div className="bg-white p-3.5 md:p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[90px]">
                    <div className="flex justify-between items-start mb-2">
                        <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
                            <FileStack size={14} />
                        </div>
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wider">Vault</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-textmain leading-none">{String(dashboardData.documentsCount).padStart(2, '0')}</h3>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wide">Shared Docs</p>
                    </div>
                </div>

                <div className="bg-white p-3.5 md:p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[90px]">
                    <div className="flex justify-between items-start mb-2">
                        <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <LifeBuoy size={14} />
                        </div>
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wider">All Resolved</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-textmain leading-none">{String(dashboardData.ticketsCount).padStart(2, '0')}</h3>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wide">Support Tickets</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0 w-full pb-2">
                <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4 min-h-0">
                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4 flex-shrink-0">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Project Tracker</h2>
                            <button className="text-[10px] font-bold text-brandOrange hover:text-textmain transition-colors flex items-center gap-1 uppercase tracking-wider">
                                View Details <ArrowRight size={12} />
                            </button>
                        </div>

                        {dashboardData.mainProject ? (
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-base font-black text-textmain leading-tight">{dashboardData.mainProject.title}</h3>
                                        <p className="text-[10px] font-medium text-slate-500 mt-0.5 uppercase tracking-wider">{dashboardData.mainProject.status}</p>
                                    </div>
                                    <span className="text-xl font-black text-textmain">{dashboardData.mainProject.progress || 0}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
                                    <div className="bg-textmain h-full rounded-full transition-all duration-1000" style={{ width: `${dashboardData.mainProject.progress || 0}%` }}></div>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                        <CheckCircle2 size={10} /> On Track
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                        <Clock size={10} /> Due: {new Date(dashboardData.mainProject.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="py-4 text-center text-slate-400 text-xs font-medium">No active projects.</div>
                        )}
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden">
                        <div className="px-4 py-3 border-b border-slate-100 flex-shrink-0">
                            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Recent Docs</h2>
                        </div>
                        <div className="overflow-y-auto no-scrollbar flex-1 divide-y divide-slate-50">
                            {dashboardData.recentDocuments.length > 0 ? (
                                dashboardData.recentDocuments.map((doc, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div className="p-1.5 bg-slate-100 rounded-md text-slate-500 shrink-0">
                                                <FileStack size={14} />
                                            </div>
                                            <span className="text-xs font-bold text-slate-700 truncate">{doc.title || doc.originalName}</span>
                                        </div>
                                        <a href={doc.fileUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-wider font-bold text-brandOrange hover:text-textmain transition-colors px-2.5 py-1 border border-transparent hover:border-slate-200 rounded-md shrink-0">
                                            DL
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="py-6 text-center text-slate-400 text-xs font-medium">No documents found.</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-3 md:gap-4 min-h-0">
                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4 flex-shrink-0">
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1.5 mb-4">
                            Action Needed <span className="w-1.5 h-1.5 rounded-full bg-brandOrange animate-pulse"></span>
                        </h2>

                        {dashboardData.actionInvoice ? (
                            <div className="space-y-3">
                                <div className="flex items-start justify-between p-3 bg-orange-50/50 border border-orange-100/50 rounded-lg">
                                    <div className="flex gap-2">
                                        <div className="mt-0.5 text-brandOrange"><CreditCard size={14} /></div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900">#{dashboardData.actionInvoice.invoiceId || dashboardData.actionInvoice.id}</p>
                                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Due: {dashboardData.actionInvoice.date || 'Now'}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-black text-textmain">₹{dashboardData.actionInvoice.amount}</span>
                                </div>
                                <button className="w-full bg-textmain text-white font-bold text-xs py-2.5 rounded-lg hover:bg-brandOrange transition-all shadow-md active:scale-95 uppercase tracking-wide">
                                    Pay Now
                                </button>
                            </div>
                        ) : (
                            <div className="py-4 flex flex-col items-center justify-center text-center">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2">
                                    <CheckCircle2 size={20} />
                                </div>
                                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">All Caught Up!</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4 text-center flex flex-col items-center justify-center flex-1">
                        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mb-3">
                            <LifeBuoy size={20} />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1.5 uppercase tracking-widest">Support Center</h3>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-4 px-2 uppercase tracking-wide">
                            {dashboardData.ticketsCount} open tickets. System healthy.
                        </p>
                        <Link href="/support/tickets" className="inline-block w-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-lg hover:bg-white hover:text-textmain hover:border-slate-300 transition-all shadow-sm active:scale-95 uppercase tracking-wide">
                            New Ticket
                        </Link>
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