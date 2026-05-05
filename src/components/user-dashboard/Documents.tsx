"use client";

import React, { useEffect, useState } from 'react';
import { FileText, Download, Loader2, FileQuestion, Calendar, HardDrive } from 'lucide-react';
import { getDocumentsByClientAction } from '@/actions/documentActions';

const Documents = ({ user }: { user: any }) => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // 🚀 FIX 1: ID ko useEffect ke bahar nikalo taaki hum isko as a dependency use kar sakein
    const targetId = user?.clientId || user?.id || user?.client_id;

    useEffect(() => {
        const fetchDocuments = async () => {
            // 🛡️ THE SAFETY LOCK: String "undefined" aur "null" ko bhi block karega
            if (!targetId || targetId === 'undefined' || targetId === 'null') {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await getDocumentsByClientAction(targetId);

                if (response?.success && response?.data) {
                    setDocuments(response.data);
                }
            } catch (error) {
                console.error("Error fetching documents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();

        // 🚀 FIX 2: Dependency array mein 'user' ki jagah 'targetId' lagaya! 
        // Ab ye loop mein nahi phasega!
    }, [targetId]);

    // Format file size (Bytes to MB)
    const formatBytes = (bytes: number) => {
        if (!bytes || bytes === 0) return 'Unknown Size';
        const k = 1024;
        const mb = bytes / (k * k);
        return `${mb.toFixed(2)} MB`;
    };

    return (
        /* 🔥 Mobile Responsive Container */
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 w-full max-w-[100vw] overflow-x-hidden p-2 md:p-0">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200/60">
                <div>
                    <h1 className="text-2xl font-bold text-textmain tracking-tight">Shared Documents</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Securely view and download files shared by administration.
                    </p>
                </div>
                {/* 🔥 Premium Stats Badge */}
                <div className="flex items-center justify-center px-5 py-2.5 bg-slate-50 text-slate-700 text-sm font-bold rounded-xl border border-slate-200 w-full sm:w-auto shadow-sm">
                    Total Files: <span className="text-brandOrange ml-1">{documents.length}</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden min-h-[400px] mt-6 md:mt-8 flex flex-col">

                {loading ? (
                    // ⏳ LOADING STATE
                    <div className="flex flex-col items-center justify-center flex-grow min-h-[400px]">
                        <Loader2 className="animate-spin mb-4 text-brandOrange" size={32} />
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Decrypting vault...</p>
                    </div>
                ) : documents.length === 0 ? (
                    // 📭 EMPTY STATE
                    <div className="flex flex-col items-center justify-center flex-grow min-h-[400px] bg-slate-50/30">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 border border-slate-100 shadow-sm">
                            <FileQuestion size={32} className="text-slate-300" />
                        </div>
                        <p className="text-lg font-bold text-textmain">No documents shared yet</p>
                        <p className="text-sm text-slate-500 mt-2 max-w-sm text-center px-4 leading-relaxed">
                            When your project manager shares invoices, contracts, or assets, they will appear here safely.
                        </p>
                    </div>
                ) : (
                    // 📄 DOCUMENTS LIST
                    <div className="divide-y divide-slate-100/80">
                        {documents.map((doc: any) => (
                            <div key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 hover:bg-slate-50/50 transition-colors group gap-4">

                                {/* Document Info */}
                                <div className="flex items-start sm:items-center gap-4">
                                    <div className="p-3 bg-slate-100 text-slate-500 rounded-xl group-hover:bg-white group-hover:text-brandOrange group-hover:shadow-sm transition-all duration-300 shrink-0 mt-1 sm:mt-0">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-textmain mb-1 line-clamp-1">
                                            {doc.title || doc.originalName || 'Untitled Document'}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-400">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {new Date(doc.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></span>
                                            <span className="flex items-center gap-1.5">
                                                <HardDrive size={14} />
                                                {formatBytes(doc.fileSize)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 📥 DOWNLOAD BUTTON */}
                                <a
                                    href={doc.fileUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-textmain text-white text-xs md:text-sm font-bold rounded-xl hover:bg-brandOrange transition-colors shadow-md w-full sm:w-auto shrink-0"
                                >
                                    <Download size={16} />
                                    Download File
                                </a>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Documents;