"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
    createSupportTicketAction,
    getUserTicketsAction,
    addTicketReplyAction
} from '@/actions/supportActions';
import { Loader2, Paperclip, CheckCircle2 } from 'lucide-react';

export default function ClientTicketDashboard() {
    const [user, setUser] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'my_tickets' | 'create' | 'closed'>('my_tickets');

    // 🔥 Jis ticket par click hoga, uski detail yahan save hogi
    const [selectedTicket, setSelectedTicket] = useState<any>(null);

    // Fetch user from localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    // --- 🚀 Data & UI States ---
    const [tickets, setTickets] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // --- 💬 Reply State ---
    const [replyMessage, setReplyMessage] = useState("");
    const [replyAttachment, setReplyAttachment] = useState<any>(null);
    const [isReplying, setIsReplying] = useState(false);

    // --- 📝 Form State ---
    const [formData, setFormData] = useState({
        subject: '',
        domain: '',
        description: '',
        attachments: null
    });

    // ==========================================
    // 🔄 FETCH TICKETS LOGIC
    // ==========================================
    const fetchTickets = useCallback(async () => {
        if (!user?.email) return;
        setIsLoading(true);
        try {
            const res = await getUserTicketsAction(user.email);
            if (res.success) {
                setTickets(res.data || []);
            }
        } catch (error) {
            console.error("Network Error while fetching tickets");
        } finally {
            setIsLoading(false);
        }
    }, [user?.email]);

    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    // ==========================================
    // 📝 FORM SUBMISSION (Create Ticket)
    // ==========================================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user?.email) return alert("Session expired. Please login again.");

        setIsSubmitting(true);
        try {
            const ticketData = {
                clientEmail: user.email,
                subject: formData.subject,
                domain: formData.domain,
                description: formData.description,
                attachments: formData.attachments
            };

            const res = await createSupportTicketAction(ticketData);

            if (res.success) {
                alert(`Success! Ticket #${res.data?.ticketId || ''} created.`);
                setFormData({ subject: '', domain: '', description: '', attachments: null });
                setSelectedTicket(null);
                setActiveTab('my_tickets');
                fetchTickets();
            } else {
                alert(res.message || "Failed to create ticket.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // ==========================================
    // 💬 SEND REPLY LOGIC (Conversation)
    // ==========================================
    const handleSendReply = async () => {
        if (!replyMessage.trim() && !replyAttachment) return;
        setIsReplying(true);
        try {
            const token = localStorage.getItem('token') || '';
            const res = await addTicketReplyAction(selectedTicket.id, replyMessage, token, replyAttachment);

            if (res.success) {
                setSelectedTicket(res.data);
                setReplyMessage("");
                setReplyAttachment(null);
                fetchTickets();
            } else {
                // 🔥 NAYA: Detailed error dikhayein (message ya error dono check karein)
                alert(res.message || res.error || "Failed to send reply");
                if (res.detail) console.error("Reply Detail Error:", res.detail);
            }
        } catch (error: any) {
            alert(`Error sending message: ${error.message}`);
        } finally {
            setIsReplying(false);
        }
    };

    // ==========================================
    // 🔥 UI: TICKET DETAIL VIEW
    // ==========================================
    const renderTicketDetail = () => {
        if (!selectedTicket) return null;

        return (
            <div className="p-6 md:p-10 bg-white font-sans">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[22px] font-normal text-slate-700">Ticket Detail</h2>
                    <div className="flex gap-3">
                        <button className="text-[12px] font-bold text-white bg-[#337ab7] hover:bg-[#286090] px-4 py-2 rounded transition-colors">
                            Close Ticket
                        </button>
                        <button
                            onClick={() => setSelectedTicket(null)}
                            className="text-[12px] font-bold uppercase text-[#337ab7] bg-[#f0f4f8] hover:bg-[#e2e8f0] px-4 py-2 rounded transition-colors"
                        >
                            &laquo; BACK TO LIST
                        </button>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="w-full flex flex-col border-t border-gray-200 mb-8">
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] py-4 border-b border-gray-200">
                        <span className="text-[14px] font-bold text-[#333]">Ticket ID:</span>
                        <span className="text-[14px] text-[#555]">{selectedTicket.ticketId} <span className="text-[#337ab7] ml-2">({selectedTicket.status})</span></span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] py-4 border-b border-gray-200">
                        <span className="text-[14px] font-bold text-[#333]">Created Time:</span>
                        <span className="text-[14px] text-[#555]">{new Date(selectedTicket.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] py-4 border-b border-gray-200">
                        <span className="text-[14px] font-bold text-[#333]">Domain:</span>
                        <span className="text-[14px] text-[#555]">{selectedTicket.domain}</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] py-4 border-b border-gray-200">
                        <span className="text-[14px] font-bold text-[#333]">Subject:</span>
                        <span className="text-[14px] text-[#555]">{selectedTicket.subject}</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] py-4 border-b border-gray-200">
                        <span className="text-[14px] font-bold text-[#333] pt-1">Description:</span>
                        <span className="text-[14px] text-[#555] whitespace-pre-wrap">{selectedTicket.description}</span>
                    </div>
                </div>

                {/* 💬 CHAT HISTORY / REPLIES */}
                {selectedTicket.replies && selectedTicket.replies.length > 0 && (
                    <div className="mb-8 p-5 bg-[#f9fafb] border border-gray-200 rounded space-y-4">
                        {selectedTicket.replies.map((reply: any, index: number) => (
                            <div key={index} className={`flex flex-col ${reply.sender === 'User' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded text-[14px] shadow-sm ${reply.sender === 'User'
                                    ? 'bg-[#dcf8c6] text-[#333] border border-[#c4eab0]'
                                    : 'bg-white text-[#333] border border-gray-200'
                                    }`}>
                                    <span className="text-[11px] font-bold block mb-1 opacity-70">
                                        {reply.sender === 'User' ? 'You' : 'Admin Support'} • {new Date(reply.timestamp).toLocaleString()}
                                    </span>
                                    <div className="whitespace-pre-wrap">{reply.message}</div>
                                    {reply.attachments && (
                                        <div className="mt-2 text-[12px]">
                                            <a href={reply.attachments.data || reply.attachments.url || '#'} download={reply.attachments.name} className="text-[#337ab7] hover:underline flex items-center gap-1">
                                                <Paperclip size={12} /> {reply.attachments.name}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ✍️ REPLY BOX */}
                {selectedTicket.status !== 'Closed' ? (
                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-[18px] font-normal text-[#333] mb-4">Reply:</h3>
                        <textarea
                            value={replyMessage}
                            onChange={(e) => setReplyMessage(e.target.value)}
                            className="w-full border border-gray-300 p-4 text-[14px] outline-none focus:border-[#337ab7] resize-none mb-4"
                            rows={4}
                        ></textarea>

                        <div className="flex gap-3 items-center">
                            <input type="file" id="reply-file-upload" className="hidden" onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    if (file.size > 2 * 1024 * 1024) { alert("Max 2MB"); e.target.value = ""; return; }
                                    const reader = new FileReader();
                                    reader.onloadend = () => setReplyAttachment({ name: file.name, type: file.type, data: reader.result });
                                    reader.readAsDataURL(file);
                                }
                            }} />
                            <div className="flex flex-col gap-1 items-start">
                                <button type="button" onClick={() => document.getElementById('reply-file-upload')?.click()} className="bg-[#d9edf7] text-[#31708f] border border-[#bce8f1] px-4 py-2 text-[13px] font-bold hover:bg-[#c4e3f3] transition-colors rounded flex items-center gap-2">
                                    <Paperclip size={14} /> {replyAttachment ? 'Change File' : 'Attach File(s)'}
                                </button>
                                {replyAttachment && <span className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={12} /> {replyAttachment.name}</span>}
                            </div>
                            <button
                                onClick={handleSendReply}
                                disabled={isReplying || (!replyMessage.trim() && !replyAttachment)}
                                className="bg-[#d9edf7] text-[#31708f] border border-[#bce8f1] px-6 py-2 text-[13px] font-bold hover:bg-[#c4e3f3] disabled:opacity-50 flex items-center gap-2 transition-colors rounded"
                            >
                                {isReplying ? <><Loader2 size={14} className="animate-spin" /> Sending...</> : 'Submit Complaint'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-4 bg-gray-100 text-center text-[14px] font-bold text-gray-500 rounded border border-gray-200">
                        This ticket is closed. Replies are disabled.
                    </div>
                )}
            </div>
        );
    };

    // ==========================================
    // 🟢 UI: MY TICKETS (Table Format)
    // ==========================================
    const renderMyTickets = () => {
        const pendingTickets = tickets.filter(t => t.status === 'Pending' || t.status === 'Replied');

        return (
            <div className="p-6 md:p-10 bg-white">
                <div className="flex justify-end gap-3 mb-2 text-[13px] text-slate-600">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>Pending</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#337ab7]"></span>Replied</span>
                </div>

                <h2 className="text-[22px] font-normal text-[#333] mb-4 border-b border-gray-200 pb-3">Pending Tickets</h2>

                {isLoading ? (
                    <div className="flex justify-center py-10"><Loader2 className="animate-spin text-[#337ab7]" /></div>
                ) : pendingTickets.length > 0 ? (
                    <div className="w-full">
                        <div className="grid grid-cols-4 pb-2 border-b border-gray-200 text-[13px] font-bold text-[#333]">
                            <span>Ticket ID</span>
                            <span>Domain</span>
                            <span>Subject</span>
                            <span>Created Time</span>
                        </div>
                        {pendingTickets.map((ticket: any) => (
                            <div key={ticket.id} className="grid grid-cols-4 py-3 border-b border-gray-100 text-[13px] text-[#555] items-center hover:bg-gray-50 transition-colors">
                                <span
                                    onClick={() => setSelectedTicket(ticket)}
                                    className="text-[#337ab7] cursor-pointer hover:underline"
                                >
                                    {ticket.ticketId}
                                </span>
                                <span>{ticket.domain}</span>
                                <span>{ticket.subject}</span>
                                <span>{new Date(ticket.createdAt).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-[13px] text-slate-500 mt-2">No pending tickets</div>
                )}
            </div>
        );
    };

    // ==========================================
    // 🟢 UI: CLOSED TICKETS
    // ==========================================
    const renderClosedTickets = () => {
        const closedTickets = tickets.filter(t => t.status === 'Closed');

        return (
            <div className="p-6 md:p-10 bg-white">
                <h2 className="text-[22px] font-normal text-[#333] mb-4 border-b border-gray-200 pb-3">Closed Tickets</h2>

                {isLoading ? (
                    <div className="flex justify-center py-10"><Loader2 className="animate-spin text-[#337ab7]" /></div>
                ) : closedTickets.length > 0 ? (
                    <div className="w-full">
                        <div className="grid grid-cols-4 pb-2 border-b border-gray-200 text-[13px] font-bold text-[#333]">
                            <span>Ticket ID</span>
                            <span>Domain</span>
                            <span>Subject</span>
                            <span>Closed Time</span>
                        </div>
                        {closedTickets.map((ticket: any) => (
                            <div key={ticket.id} className="grid grid-cols-4 py-3 border-b border-gray-100 text-[13px] text-[#555] items-center hover:bg-gray-50 transition-colors">
                                <span
                                    onClick={() => setSelectedTicket(ticket)}
                                    className="text-[#337ab7] cursor-pointer hover:underline"
                                >
                                    {ticket.ticketId}
                                </span>
                                <span>{ticket.domain}</span>
                                <span>{ticket.subject}</span>
                                <span>{new Date(ticket.updatedAt).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-[13px] text-slate-500 mt-2">No closed tickets</div>
                )}
            </div>
        );
    };

    // ==========================================
    // 🟢 UI: CREATE A TICKET 
    // ==========================================
    const renderCreateTicket = () => (
        <div className="bg-white p-6 md:p-10">
            <h2 className="text-[22px] font-normal text-[#333] mb-6 border-b border-gray-200 pb-3">Submit a Request</h2>
            <form className="space-y-6 max-w-4xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-center">
                    <label className="text-[14px] font-bold text-[#333]">Subject <span className="text-red-500">*</span></label>
                    <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full border border-gray-300 p-2 text-sm focus:border-[#337ab7] outline-none rounded" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-center">
                    <label className="text-[14px] font-bold text-[#333]">Domain / App <span className="text-red-500">*</span></label>
                    <input type="text" required value={formData.domain} onChange={(e) => setFormData({ ...formData, domain: e.target.value })} className="w-full border border-gray-300 p-2 text-sm focus:border-[#337ab7] outline-none rounded" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-center">
                    <label className="text-[14px] font-bold text-[#333]">Your Email</label>
                    <input type="email" value={user?.email || "No Email Found"} className="w-full border border-gray-200 bg-gray-50 p-2 text-sm text-gray-500 cursor-not-allowed rounded" readOnly />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-start">
                    <label className="text-[14px] font-bold text-[#333] mt-2">Description <span className="text-red-500">*</span></label>
                    <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full border border-gray-300 p-2 text-sm focus:border-[#337ab7] outline-none rounded resize-none" rows={6}></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-center">
                    <label className="text-[14px] font-bold text-[#333]">Attachments</label>
                    <div className="flex flex-col gap-2">
                        <input type="file" id="file-upload" className="hidden" onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                if (file.size > 2 * 1024 * 1024) { alert("Max 2MB"); e.target.value = ""; return; }
                                const reader = new FileReader();
                                reader.onloadend = () => setFormData({ ...formData, attachments: { name: file.name, type: file.type, data: reader.result } as any });
                                reader.readAsDataURL(file);
                            }
                        }} />
                        <button type="button" onClick={() => document.getElementById('file-upload')?.click()} className="w-fit text-xs font-bold text-[#337ab7] bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 flex items-center gap-2">
                            <Paperclip size={14} /> {formData.attachments ? 'Change File' : 'Attach File'}
                        </button>
                        {formData.attachments && <span className="text-sm text-green-600 flex items-center gap-1.5"><CheckCircle2 size={14} /> {(formData.attachments as any).name}</span>}
                    </div>
                </div>

                <div className="pt-6">
                    <button type="submit" disabled={isSubmitting || !user?.email} className="bg-[#337ab7] hover:bg-[#286090] text-white px-8 py-2 rounded text-[14px] transition-colors disabled:opacity-50 flex items-center gap-2">
                        {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Submit Ticket"}
                    </button>
                </div>
            </form>
        </div>
    );

    const handleTabChange = (tab: 'my_tickets' | 'create' | 'closed') => {
        setActiveTab(tab);
        setSelectedTicket(null);
    };

    // ==========================================
    // 🔥 PURE STATIC LAYOUT (No Scroll)
    // ==========================================
    return (
        // p-4 rakha hai padding ke liye, aur koi min-h nahi diya gaya.
        <div className="bg-[#f3f4f6] p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto border border-gray-300 rounded shadow-sm bg-white overflow-hidden">

                {/* SmarterASP Style Header Tabs */}
                <div className="flex bg-[#1a365d] border-b-2 border-[#1a365d]">
                    <button onClick={() => handleTabChange('my_tickets')} className={`px-6 py-4 text-white text-[13px] uppercase transition-all ${activeTab === 'my_tickets' ? 'font-bold bg-[#2a4a7f]' : 'hover:bg-[#2a4a7f]'}`}>
                        My Tickets
                    </button>
                    <button onClick={() => handleTabChange('create')} className={`px-6 py-4 text-white text-[13px] uppercase transition-all ${activeTab === 'create' ? 'font-bold bg-[#2a4a7f]' : 'hover:bg-[#2a4a7f]'}`}>
                        + Create a Ticket
                    </button>
                    <button onClick={() => handleTabChange('closed')} className={`px-6 py-4 text-white text-[13px] uppercase transition-all ${activeTab === 'closed' ? 'font-bold bg-[#2a4a7f]' : 'hover:bg-[#2a4a7f]'}`}>
                        View Closed Ticket
                    </button>
                </div>

                {/* Static Content Render */}
                <div className="bg-white">
                    {selectedTicket && activeTab !== 'create' ? (
                        renderTicketDetail()
                    ) : (
                        <>
                            {activeTab === 'my_tickets' && renderMyTickets()}
                            {activeTab === 'create' && renderCreateTicket()}
                            {activeTab === 'closed' && renderClosedTickets()}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}