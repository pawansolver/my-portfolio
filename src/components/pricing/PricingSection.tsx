"use client";

import React from 'react';
import { Check, Minus, ShoppingCart, Info, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PricingProps {
    serviceData: any;
}

const PricingSection = ({ serviceData }: PricingProps) => {
    const router = useRouter();

    if (!serviceData) return null;

    // 🔥 BACKEND INTEGRATED: Add to Cart Flow (Logic Untouched)
    const handleAddToCart = async (planName: string, price: string) => {
        const savedUser = localStorage.getItem('clientUser') || localStorage.getItem('user');

        const cleanPrice = price.replace(/,/g, '');
        const serviceTitle = serviceData.title || "Premium Service";

        // 1. 🚨 AGAR LOGIN NAHI HAI:
        if (!savedUser) {
            localStorage.setItem('pendingCartItem', JSON.stringify({
                serviceName: serviceTitle,
                planName: planName,
                price: cleanPrice
            }));

            router.push('/login?redirect=/cart');
            return;
        }

        // 2. ✅ AGAR LOGIN HAI (Normal DB Flow):
        const parsedUser = JSON.parse(savedUser);
        const userEmail = parsedUser.email;

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/cart/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: userEmail,
                    serviceName: serviceTitle,
                    planName: planName,
                    price: cleanPrice
                })
            });

            const data = await response.json();

            if (data.success) {
                const goToCart = window.confirm(`🛒 ${planName} plan added to your Cart successfully!\n\nClick 'OK' to View Cart and Checkout.\nClick 'Cancel' to add more services.`);
                if (goToCart) {
                    router.push('/cart');
                }
            } else {
                alert(`❌ Failed to add item: ${data.message}`);
            }

        } catch (error) {
            console.error("Cart API Error:", error);
            alert("⚠️ Something went wrong. Please check your connection.");
        }
    };

    // 🔥 ASLEE DATA (LEAN CONSULTANCY) - Fallback
    const leanPlans = [
        {
            id: 'essential',
            name: 'Essential',
            originalPrice: '39,999',
            price: '19,999',
            billingCycle: 'per project / standard setup',
            description: 'Identify bottlenecks and map your basic value streams.',
            isPopular: false,
            btnText: 'Add to Cart',
            features: [
                { name: "Waste Identification (8 Muda)", detail: "Comprehensive audit to find hidden operational wastes.", included: true },
                { name: "Basic Value Stream Mapping", detail: "Visualizing your current process flow to find bottlenecks.", included: true },
                { name: "Root Cause Analysis", detail: "Applying 5 Whys and Fishbone diagrams to solve recurring issues.", included: true },
                { name: "Six Sigma Optimization", detail: "Statistical variance reduction for 99.9% quality consistency.", included: false },
                { name: "Dedicated Lean Champion", detail: "An on-site expert to drive your lean transformation.", included: false },
                { name: "Real-Time Tracking Dashboard", detail: "Live monitoring of operational KPIs and EBITDA impact.", included: false },
            ]
        },
        {
            id: 'premium',
            name: 'Premium',
            originalPrice: '89,999',
            price: '49,999',
            billingCycle: 'per project / advanced deployment',
            description: 'Full Lean Six Sigma deployment for growing enterprises.',
            isPopular: true,
            btnText: 'Add Premium to Cart',
            features: [
                { name: "Waste Identification (8 Muda)", detail: "Comprehensive audit to find hidden operational wastes.", included: true },
                { name: "Advanced Value Stream Mapping", detail: "Future-state mapping and process redesign.", included: true },
                { name: "Root Cause Analysis", detail: "Applying 5 Whys and Fishbone diagrams to solve recurring issues.", included: true },
                { name: "Six Sigma Optimization", detail: "Statistical variance reduction for 99.9% quality consistency.", included: true, isAI: true },
                { name: "Standard Work Implementation", detail: "Creating SOPs for every critical business function.", included: true },
                { name: "Dedicated Lean Champion", detail: "An on-site expert to drive your lean transformation.", included: false },
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            originalPrice: '',
            price: 'Custom',
            billingCycle: 'billed annually',
            description: 'Organizational agile transformation and scalable frameworks.',
            isPopular: false,
            btnText: 'Contact Sales',
            features: [
                { name: "Complete Agile Transformation", detail: "Modernizing corporate governance for business agility.", included: true },
                { name: "Six Sigma Optimization", detail: "Statistical variance reduction for 99.9% quality.", included: true, isAI: true },
                { name: "Dedicated Lean Champion", detail: "An on-site expert to drive your lean transformation.", included: true },
                { name: "Real-Time Tracking Dashboard", detail: "Live monitoring of operational KPIs and EBITDA impact.", included: true },
                { name: "Custom Employee Training", detail: "Training your staff to become internal Lean Champions.", included: true },
                { name: "SLA Guaranteed Results", detail: "Contractual guarantee on Opex cost reduction.", included: true },
            ]
        }
    ];

    const plansToRender = serviceData?.pricingPlans && serviceData.pricingPlans.length > 0
        ? serviceData.pricingPlans
        : leanPlans;

    return (
        <section className="section-padding bg-[#f8fafc] font-sans border-t border-slate-200">
            <div className="container-custom">

                <div className="text-center mx-auto mb-12 md:mb-16">
                    {/* 🔥 STRICT GLOBAL SYNC: heading-xl (Orange & Clamped) */}
                    <h2 className="heading-xl">
                        {serviceData?.pricingTitle || "Choose your growth plan"}
                    </h2>

                    {/* 🔥 STRICT GLOBAL SYNC: text-muted (Green) */}
                    <p className="text-muted">
                        {serviceData?.pricingSubtitle || `Transparent pricing for ${serviceData.title}. Hover over the info icons for full details.`}
                    </p>
                </div>

                {/* 🔥 STRICT GLOBAL SYNC: responsive-grid apply kiya */}
                <div className="responsive-grid items-start">
                    {plansToRender.map((plan: any, planIndex: number) => (
                        <div
                            key={plan.id || planIndex}
                            className={`group/card bg-white rounded-[24px] p-6 sm:p-8 flex flex-col relative transition-all duration-500 ease-in-out ${plan.isPopular ? 'border-2 border-brandOrange shadow-xl lg:scale-105 z-20' : 'border border-gray-200 shadow-sm hover:shadow-md'}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brandOrange text-white px-6 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-md whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                                <p className="text-xs sm:text-sm text-slate-600 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                                    {plan.originalPrice && (
                                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 line-through decoration-2">
                                            ₹{plan.originalPrice}
                                        </span>
                                    )}
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                                        {plan.price === 'Custom' ? 'Custom' : `₹${plan.price}`}
                                    </span>
                                </div>
                                <div className="text-[11px] sm:text-xs font-medium text-gray-500 mt-1">
                                    {plan.billingCycle} <Info size={12} className="inline-block ml-1 opacity-70 cursor-help" />
                                </div>
                            </div>

                            {/* 🔥 STRICT GLOBAL SYNC: btn-primary & btn-inverse */}
                            <button
                                onClick={() => plan.price === 'Custom' ? router.push('/contact') : handleAddToCart(plan.name, plan.price)}
                                className={`${plan.isPopular ? 'btn-primary' : 'btn-inverse border border-slate-200'} w-full text-[13px] sm:text-[14px] uppercase tracking-wider !rounded-xl`}
                            >
                                {plan.btnText || (plan.price === 'Custom' ? 'Contact Sales' : 'Add to Cart')}
                            </button>

                            {/* Features List */}
                            <div className="flex-grow max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover/card:max-h-[800px] group-hover/card:opacity-100 group-hover/card:mt-8">
                                <ul className="space-y-3 sm:space-y-4">
                                    {plan.features?.map((feat: any, index: number) => (
                                        <li key={index} className={`flex items-start gap-2.5 sm:gap-3 ${!feat.included ? 'opacity-50 grayscale' : ''}`}>
                                            {feat.included ? (
                                                <Check className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-brandOrange' : 'text-brandGreen'}`} />
                                            ) : (
                                                <Minus className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-gray-400" />
                                            )}
                                            <div className="group/feature relative flex items-start gap-1.5 cursor-help w-full">
                                                {feat.isAI && <Sparkles size={12} className="text-brandOrange mt-1 shrink-0 sm:w-[14px] sm:h-[14px]" />}
                                                <span className={`text-[13px] sm:text-[14px] leading-snug flex-1 ${feat.included ? 'text-slate-800 font-medium' : 'text-gray-500 line-through decoration-gray-300'}`}>
                                                    {feat.name}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
