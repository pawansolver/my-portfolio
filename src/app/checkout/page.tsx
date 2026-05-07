"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    useEffect(() => {
        // 1. Auth Check (Yahan hum check karte hain ki user logged in hai ya nahi)
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');
        if (!savedUser) {
            router.push('/login?redirect=/checkout');
            return;
        }

        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);

        // 2. Fetch Cart Data from Database (LocalStorage se hata kar API se laa rahe hain)
        fetchCartFromDB(parsedUser.email);

        // 3. Inject Razorpay Script
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [router]);

    // 🔥 API CALL: User ke items DB se lao
    const fetchCartFromDB = async (email: string) => {
        try {
            const res = await fetch(`${apiUrl}/api/cart/${email}`);
            const data = await res.json();

            if (data.success && data.data.length > 0) {
                setCartItems(data.data);
            } else {
                // Agar cart khali hai toh wapas bhej do
                router.push('/services');
            }
        } catch (error) {
            console.error("Cart fetch error on checkout", error);
            router.push('/services');
        } finally {
            setIsPageLoaded(true);
        }
    };

    // Calculate Grand Total
    const totalAmount = cartItems.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
    const combinedServiceNames = cartItems.map(item => item.serviceName).join(', ').substring(0, 200);
    // Note: Humara model 'planName' use karta hai ya 'plan' isliye dono check karte hain
    const combinedPlanNames = cartItems.map(item => item.planName || item.plan).join(', ').substring(0, 200);

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            const generatedInvoiceId = `CHK-${Date.now()}`;

            // STEP 1: Database mein Invoice (Pending Status) banayein
            await fetch(`${apiUrl}/api/payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    invoiceId: generatedInvoiceId,
                    clientName: user?.name || user?.fullName || "Premium Client",
                    clientEmail: user?.email || "client@example.com",
                    cartItems: cartItems, // Frontend se array bhej rahe hain bulkCreate ke liye
                    amount: totalAmount,
                    status: 'Pending'
                })
            });

            // STEP 2: Razorpay se Order ID mangwayein
            const orderRes = await fetch(`${apiUrl}/api/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: totalAmount,
                    receiptId: generatedInvoiceId
                })
            });
            const orderData = await orderRes.json();

            if (!orderData.success) {
                alert("Failed to initialize payment gateway.");
                setIsLoading(false);
                return;
            }

            // STEP 3: Razorpay Popup Configure Karein
            const options = {
                // 🔥 Yahan apni ASLI Razorpay test/live key dalna mat bhoolna!
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_SYZR6OVlb9J7BP',
                amount: orderData.order.amount,
                currency: "INR",
                name: "Nighwan Technology",
                description: cartItems.length > 1 ? `Payment for ${cartItems.length} Services` : `${combinedServiceNames} - ${combinedPlanNames}`,
                order_id: orderData.order.id,
                handler: async function (response: any) {

                    // STEP 4: Payment success hone par verify karo
                    const verifyRes = await fetch(`${apiUrl}/api/payment/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            ...response,
                            invoiceId: generatedInvoiceId
                        })
                    });

                    const verifyData = await verifyRes.json();

                    if (verifyData.success) {
                        // 🔥 STEP 5: Payment success ho gaya. Ab Database se is user ka cart khali (Clear) kardo.
                        await fetch(`${apiUrl}/api/cart/clear/${user.email}`, {
                            method: 'DELETE'
                        });

                        alert("🎉 Payment Successful! Welcome to Nighwan Tech.");
                        router.push('/crm-dashboard');
                    } else {
                        alert("❌ Payment Verification Failed!");
                    }
                },
                prefill: {
                    name: user?.name || user?.fullName || "",
                    email: user?.email || "",
                },
                theme: { color: "#5c2d91" }
            };

            const rzp = new (window as any).Razorpay(options);

            rzp.on('payment.failed', function (response: any) {
                alert("Payment Failed: " + response.error.description);
            });

            rzp.open();

        } catch (error) {
            console.error("Payment flow error:", error);
            alert("Payment gateway is currently unavailable.");
        } finally {
            setIsLoading(false);
        }
    };

    // Loader while fetching user or API data
    if (!isPageLoaded || !user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-slate-50 gap-4">
                <Loader2 className="animate-spin text-brandOrange" size={40} />
                <p className="text-slate-500 font-medium">Preparing your secure checkout...</p>
            </div>
        );
    }

    return (
        <div className="min-h-[100dvh] bg-slate-50 flex flex-col justify-center items-center p-4 pt-28 md:pt-32 pb-12 font-sans selection:bg-brandOrange/20">
            <div className="bg-white max-w-md w-full rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 border border-slate-100 relative z-10 mt-8 md:mt-0">
                <div className="flex justify-center mb-6 relative">
                    <div className="w-16 h-16 bg-brandOrange/10 rounded-full flex items-center justify-center border border-brandOrange/20 absolute -top-16 bg-white shadow-sm">
                        <CreditCard size={32} className="text-brandOrange" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center text-textmain tracking-tight mb-2 mt-4">Order Summary</h1>
                <p className="text-center text-sm text-slate-500 mb-8">Review your plan details before paying.</p>

                <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100 space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={item.id || index} className="flex justify-between items-start gap-4 pb-4 border-b border-slate-200/60 last:border-0 last:pb-0">
                            <div>
                                <span className="font-bold text-slate-800 text-sm block">{item.serviceName}</span>
                                <span className="font-bold text-[#5c2d91] bg-purple-50 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider inline-block mt-1">
                                    {item.planName || item.plan}
                                </span>
                            </div>
                            <span className="font-bold text-slate-800 text-sm">₹{item.price}</span>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-dashed border-slate-300 flex justify-between items-end">
                        <div>
                            <span className="text-sm font-bold text-slate-800 block">Total Amount</span>
                            <span className="text-[11px] text-slate-500 font-medium">Including all taxes</span>
                        </div>
                        <span className="text-3xl font-black text-slate-900 tracking-tight">₹{totalAmount}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mb-8 px-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Instant Account Activation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Premium Support Access
                    </div>
                </div>

                <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="btn-primary w-full py-4 rounded-xl font-bold text-base transition-all flex justify-center items-center gap-2 shadow-xl shadow-brandOrange/20 disabled:opacity-70"
                >
                    {isLoading ? <Loader2 className="animate-spin" /> : <><ShieldCheck size={20} /> Pay ₹{totalAmount} Securely</>}
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-5 font-medium flex justify-center items-center gap-1.5">
                    🔒 100% Secure & Encrypted via Razorpay
                </p>
            </div>
        </div>
    );
}
