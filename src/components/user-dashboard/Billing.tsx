"use client";

import React, { useState, useEffect } from 'react';
import { Receipt, Download, CreditCard, ArrowRight, CheckCircle2, AlertCircle, Clock, Loader2, FileText } from 'lucide-react';

const Billing = ({ user }: { user?: any }) => {
    const [invoices, setInvoices] = useState<any[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [loadingId, setLoadingId] = useState<string | null>(null);

    // 🚀 Fetch Real Invoices from Backend
    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
                const res = await fetch(`${apiUrl}/api/payment`);
                const result = await res.json();

                if (result.success) {
                    setInvoices(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch invoices:", error);
            } finally {
                setLoadingData(false);
            }
        };

        fetchInvoices();
    }, []);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async (invoice: any) => {
        setLoadingId(invoice.invoiceId || invoice.id);
        const isLoaded = await loadRazorpayScript();
        
        if (!isLoaded) {
            alert("Razorpay payment gateway failed to load. Please check your internet connection.");
            setLoadingId(null);
            return;
        }

        const numericAmount = parseFloat(String(invoice.amount).replace(/[^0-9.-]+/g, ""));

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

            const orderRes = await fetch(`${apiUrl}/api/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: numericAmount,
                    receiptId: invoice.invoiceId || invoice.id,
                    clientName: invoice.clientName || "Client",
                    clientEmail: invoice.clientEmail || "client@example.com"
                })
            });
            const orderData = await orderRes.json();

            if (!orderData.success) {
                alert("Order creation failed. Check backend console.");
                setLoadingId(null);
                return;
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_test_key',
                amount: orderData.order.amount,
                currency: "INR",
                name: "Nighwan Technology",
                description: `Payment for Invoice ${invoice.invoiceId || invoice.id}`,
                order_id: orderData.order.id,
                handler: async function (response: any) {
                    const verifyRes = await fetch(`${apiUrl}/api/payment/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            invoiceId: invoice.invoiceId || invoice.id 
                        })
                    });

                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        alert("🎉 Payment Successful!");
                        window.location.reload(); 
                    } else {
                        alert("❌ Payment Verification Failed!");
                    }
                },
                prefill: {
                    name: invoice.clientName || "",
                    email: invoice.clientEmail || "",
                    contact: "9999999999"
                },
                theme: { color: "#5c2d91" }
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment flow error:", error);
            alert("Something went wrong with the payment gateway.");
        } finally {
            setLoadingId(null); 
        }
    };

    // 🔥 DYNAMIC CALCULATIONS FOR TOP CARDS 🔥
    const pendingInvoices = invoices.filter(inv => inv.status === 'Pending');
    const paidInvoices = invoices.filter(inv => inv.status === 'Paid');
    
    // Total pending amount calculate kar rahe hain
    const totalOutstanding = pendingInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || 0), 0);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Billing & Invoices</h1>
                    <p className="text-[13px] text-slate-500 mt-1">Manage your billing details and download invoices.</p>
                </div>
                <button className="flex items-center gap-2 text-[13px] font-medium bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors shadow-sm">
                    <Download size={14} /> Download All (PDF)
                </button>
            </div>

            {/* 🔥 DYNAMIC Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1: Dynamic Outstanding Amount */}
                <div className="p-5 rounded-xl border border-slate-200/60 bg-white shadow-sm flex flex-col justify-between h-28">
                    <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-slate-500">Total Outstanding</span>
                        <AlertCircle size={14} className={pendingInvoices.length > 0 ? "text-brandOrange" : "text-slate-300"} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                            ₹{totalOutstanding.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </h3>
                        <p className={`text-[12px] font-medium mt-1 ${pendingInvoices.length > 0 ? 'text-brandOrange' : 'text-slate-400'}`}>
                            {pendingInvoices.length} Invoice{pendingInvoices.length !== 1 ? 's' : ''} Due
                        </p>
                    </div>
                </div>

                {/* Card 2: Total Invoices Generated */}
                <div className="p-5 rounded-xl border border-slate-200/60 bg-white shadow-sm flex flex-col justify-between h-28">
                    <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-slate-500">Total Invoices</span>
                        <FileText size={14} className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{invoices.length}</h3>
                        <p className="text-[12px] text-slate-500 font-medium mt-1">Generated till date</p>
                    </div>
                </div>

                {/* Card 3: Paid Successfully */}
                <div className="p-5 rounded-xl border border-slate-200/60 bg-white shadow-sm flex flex-col justify-between h-28">
                    <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-slate-500">Paid Invoices</span>
                        <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                            {paidInvoices.length}
                        </h3>
                        <p className="text-[12px] text-emerald-600 font-medium mt-1">Payments clear</p>
                    </div>
                </div>
            </div>

            {/* Invoices Table */}
            <div className="rounded-xl border border-slate-200/60 bg-white overflow-hidden shadow-sm mt-6">
                <div className="px-5 py-4 border-b border-slate-200/60 bg-slate-50/50 flex justify-between items-center">
                    <h2 className="text-[14px] font-semibold text-slate-900">Invoice History</h2>
                </div>

                {loadingData ? (
                    <div className="flex justify-center items-center py-12">
                        <Loader2 className="animate-spin text-brandOrange" size={24} />
                    </div>
                ) : invoices.length === 0 ? (
                    <div className="text-center py-12 text-[13px] text-slate-500">No invoices found.</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-white">
                                    <th className="px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Invoice</th>
                                    <th className="px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                                    <th className="px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Amount</th>
                                    <th className="px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                                    <th className="px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {invoices.map((inv) => (
                                    <tr key={inv.invoiceId || inv.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-md bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                                    <Receipt size={14} />
                                                </div>
                                                <div>
                                                    <span className="text-[13px] font-medium text-slate-900 font-mono block">{inv.invoiceId || inv.id}</span>
                                                    {inv.planName && <span className="text-[10px] text-brandOrange font-semibold">{inv.planName} Plan</span>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-[13px] text-slate-500">
                                            {inv.createdAt ? new Date(inv.createdAt).toLocaleDateString() : inv.date}
                                        </td>
                                        <td className="px-5 py-4 text-[13px] font-medium text-slate-900">
                                            ₹{parseFloat(inv.amount).toLocaleString('en-IN')}
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold ${inv.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                                                {inv.status === 'Paid' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            {inv.status !== 'Paid' ? (
                                                <button
                                                    onClick={() => handlePayment(inv)}
                                                    disabled={loadingId === (inv.invoiceId || inv.id)}
                                                    className="text-[12px] font-medium bg-textmain text-white px-4 py-1.5 rounded-md hover:bg-brandOrange transition-colors disabled:opacity-70 flex items-center justify-end ml-auto gap-2"
                                                >
                                                    {loadingId === (inv.invoiceId || inv.id) ? (
                                                        <>Processing <Loader2 size={12} className="animate-spin" /></>
                                                    ) : (
                                                        'Pay Now'
                                                    )}
                                                </button>
                                            ) : (
                                                <button className="text-[13px] font-medium text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-end w-full gap-1">
                                                    PDF <ArrowRight size={14} />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Billing;