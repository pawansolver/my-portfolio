"use client";

import React from 'react';
// 🛠️ FIX 1: Variants import kiya TypeScript ko samajhane ke liye
import { motion, Variants } from 'framer-motion';
import { Quote, BadgeCheck } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            quote: "Nighwan Tech's AI integration completely transformed our supply chain efficiency. Their engineering standards aren't just good—they are truly world-class.",
            name: "Arjun Mehta",
            role: "Operations Director, LogiNext",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
        },
        {
            quote: "The team didn't just build a tool; they engineered a scalable future for our data infrastructure. Exceptional execution from day one.",
            name: "Sarah Williams",
            role: "CTO, FinCore Systems",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
        },
        {
            quote: "A rare combination of minimalist design and a powerhouse backend. They understand the delicate balance between UI elegance and raw technical performance.",
            name: "Vikram Singh",
            role: "Founder, TechFlow AI",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
        },
        {
            quote: "Transitioning to their autonomous systems reduced our operational waste by 40% in just one quarter. The ROI has been absolutely phenomenal.",
            name: "Priya Sharma",
            role: "VP of Growth, E-Retail Corp",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
        }
    ];

    // 🛠️ FIX 2: Explicitly ': Variants' type assign kiya
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 🛠️ FIX 3: Explicitly ': Variants' aur 'as const' add kiya taaki error clear ho jaye
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section className="section-padding bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
            <div className="container-custom relative">

                <div className="absolute top-0 right-10 w-64 h-64 bg-brandOrange/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-64 h-64 bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="text-center mb-12 md:mb-16 relative z-10">
                    <span className="text-brandGreen font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
                        Verified Social Proof
                    </span>
                    <h2 className="heading-xl">Client Success Stories</h2>
                    <p className="text-muted">
                        Real feedback from global industry leaders who transitioned to autonomous systems with us.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10"
                >
                    {reviews.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.01 }}
                            className="group relative p-6 md:p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brandOrange/10 hover:border-brandOrange/30 transition-all duration-500 flex flex-col h-full"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-50 opacity-50 group-hover:text-brandOrange/5 group-hover:scale-110 transition-all duration-500" />

                            <div className="flex-grow flex flex-col">
                                <div className="flex gap-1.5 mb-6">
                                    {[...Array(5)].map((_, s) => (
                                        <motion.div
                                            key={s}
                                            initial={{ opacity: 0.5 }}
                                            whileHover={{ scale: 1.2, opacity: 1 }}
                                            className="w-1.5 h-1.5 bg-brandOrange rounded-full"
                                        />
                                    ))}
                                </div>

                                <p className="text-textmain font-medium text-base md:text-lg leading-relaxed mb-8 opacity-90 relative z-10">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-auto">
                                <div className="relative shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-brandOrange transition-colors duration-300"
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                        <BadgeCheck className="w-4 h-4 text-brandGreen" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center overflow-hidden">
                                    <h4 className="text-textmain font-bold text-sm md:text-base tracking-wide truncate">
                                        {item.name}
                                    </h4>
                                    <p className="text-brandOrange text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 truncate">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;