"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, ShoppingCart, ArrowRight, ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');

        if (!savedUser) {
            router.push('/login?redirect=/cart');
            return;
        }

        const parsedUser = JSON.parse(savedUser);

        // 🔥 NAYA LOGIC: Check for Pending Item (Agar user abhi-abhi login karke aaya hai)
        const pendingItemStr = localStorage.getItem('pendingCartItem');

        if (pendingItemStr) {
            const pendingItem = JSON.parse(pendingItemStr);

            // Chup-chap Database mein item add kardo
            fetch(`${apiUrl}/api/cart/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: parsedUser.email,
                    serviceName: pendingItem.serviceName,
                    planName: pendingItem.planName,
                    price: pendingItem.price
                })
            }).then(() => {
                // Database mein add hone ke baad temporary item hata do
                localStorage.removeItem('pendingCartItem');
                // Ab fresh Cart list manga lo
                fetchCartFromDB(parsedUser.email);
            }).catch(err => {
                console.error("Failed to sync pending cart", err);
                fetchCartFromDB(parsedUser.email);
            });
        } else {
            // Agar pehle se logged in tha, toh normal fetch karo
            fetchCartFromDB(parsedUser.email);
        }
    }, [router]);

    // 🔥 BACKEND INTEGRATION: Fetch Cart
    const fetchCartFromDB = async (email: string) => {
        try {
            const res = await fetch(`${apiUrl}/api/cart/${email}`);
            const data = await res.json();

            if (data.success) {
                setCartItems(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch cart from DB", error);
        } finally {
            setIsLoaded(true);
        }
    };

    // 🔥 BACKEND INTEGRATION: Delete Item
    const removeFromCart = async (idToRemove: string) => {
        try {
            const res = await fetch(`${apiUrl}/api/cart/remove/${idToRemove}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                setCartItems(prev => prev.filter(item => item.id !== idToRemove));
            } else {
                alert("Failed to remove item.");
            }
        } catch (error) {
            console.error("Cart Delete Error:", error);
        }
    };

    const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price || 0), 0);

    const handleProceedToCheckout = () => {
        router.push('/checkout');
    };

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-slate-50 flex justify-center items-center">
                <Loader2 className="animate-spin text-[#5c2d91]" size={40} />
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[100dvh] flex flex-col justify-center items-center bg-slate-50 p-6 pt-24">
                <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400">
                    <ShoppingCart size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
                <p className="text-slate-500 mb-8 text-center max-w-sm">
                    Looks like you haven't added any services to your cart yet. Let's find the right plan for you.
                </p>
                <Link href="/" className="btn-primary flex items-center gap-2">
                    <ArrowLeft size={18} /> Browse Services
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-[100dvh] bg-slate-50 font-sans pt-28 md:pt-36 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-textmain mb-8 flex items-center gap-3">
                    <ShoppingCart className="text-brandOrange" size={32} /> Your Cart
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="w-full lg:w-2/3 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-md">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-slate-800">{item.serviceName}</h3>
                                        <span className="bg-purple-50 text-[#5c2d91] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                            {item.planName || item.plan}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">Includes all standard features of this plan.</p>
                                </div>
                                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 sm:gap-4">
                                    <span className="text-2xl font-black text-slate-900">₹{item.price}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors flex items-center gap-1.5 text-sm font-medium"
                                    >
                                        <Trash2 size={16} /> <span className="sm:hidden">Remove</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-32">
                            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span className="font-medium text-slate-800">₹{totalAmount}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Taxes & Fees</span>
                                    <span className="text-emerald-600 font-medium text-sm">Included</span>
                                </div>
                            </div>
                            <div className="border-t border-slate-200 pt-6 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-slate-800">Total Price</span>
                                    <span className="text-3xl font-black text-slate-900 tracking-tight">₹{totalAmount}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleProceedToCheckout}
                                className="btn-primary w-full py-4 rounded-xl font-bold text-base transition-all flex justify-center items-center gap-2 shadow-xl shadow-brandOrange/20"
                            >
                                Proceed to Checkout <ArrowRight size={20} />
                            </button>
                            <p className="text-center text-[11px] text-slate-400 mt-5 font-medium flex justify-center items-center gap-1.5">
                                <ShieldCheck size={14} className="text-emerald-500" /> Secure Checkout via Razorpay
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}