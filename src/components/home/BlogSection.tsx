"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// 🚀 DATA
const HOME_BLOG_POSTS = [
    {
        id: 1,
        title: "How Generative AI is Rewriting the Rules of Enterprise Software",
        cat: "AI Solutions",
        img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    },
    {
        id: 2,
        title: "Lean Principles in the Age of AI: Eliminating Digital Waste",
        cat: "Lean Consultancy",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    },
    {
        id: 3,
        title: "Zero-Trust Architecture: Building Security from the Inside Out",
        cat: "Engineering",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    }
];

// 🚀 Card Animation Component (4D Effect Logic)
const InteractiveCard = ({ post }: { post: any }) => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    // Motion Values for cursor tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 4D Rotate Effect
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    // Image Scale mapping
    const imageScale = useTransform(rotateX, [-10, 10], [1.1, 0.9]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                x.set(0); y.set(0);
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            /* 🛠️ Fix: Card height thodi kam ki hai h-[350px] md:h-[380px] taaki ek screen me aaye */
            className="relative w-full h-[350px] md:h-[380px] bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:border-brandOrange/50"
        >
            {/* Layer 1: Image */}
            <motion.img
                src={post.img}
                alt={post.title}
                style={{ scale: isHovered ? imageScale : 1.05, opacity: isHovered ? 0.3 : 0.8, translateZ: "-10px" }}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 will-change-transform"
            />

            {/* Dark gradient taaki text hamesha clear padha jaye */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0 transition-opacity duration-500" />

            {/* Layer 2: Hover Content */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, translateZ: "20px" }}
                        animate={{ opacity: 1, translateZ: "50px" }}
                        exit={{ opacity: 0, translateZ: "20px" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-8 flex flex-col justify-end z-10"
                    >
                        <span className="text-brandOrange font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">
                            {post.cat}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight mb-8">
                            {post.title}
                        </h3>

                        <button
                            onClick={() => router.push('/blog')}
                            className="bg-brandOrange text-white text-[10px] font-bold tracking-widest uppercase py-3 px-6 rounded-full w-full text-center transition-transform hover:scale-105"
                        >
                            Read Full Article
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Strict UI: Show title at bottom when NOT hovered */}
            <AnimatePresence>
                {!isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-6 left-6 right-6 z-10"
                    >
                        <span className="text-brandGreen font-bold text-[10px] tracking-widest uppercase mb-2 block opacity-80">
                            {post.cat}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight line-clamp-3">
                            {post.title}
                        </h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const BlogSection = () => {
    const router = useRouter();

    return (
        /* 🛠️ Fix: section-padding ki jagah direct py-12 md:py-16 diya hai taaki extra white space kam ho jaye */
        <section className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="container-custom relative z-10">

                {/* 🛠️ Fix: Header margin mb-16 se hata kar mb-10 kar diya hai */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <span className="text-brandOrange font-black text-[10px] tracking-[0.4em] uppercase mb-3 block border-l-4 border-brandOrange pl-3">
                        Knowledge Hub
                    </span>
                    <h2 className="heading-xl !mb-2">Engineering Insights</h2>
                    <p className="text-muted">
                        Exploring the convergence of AI, enterprise architecture, and autonomous growth.
                    </p>
                </div>

                {/* 🛠️ Fix: Grid margin mb-16 se mb-8 kar diya hai taaki button pas aa jaye */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
                    {HOME_BLOG_POSTS.map((post, idx) => (
                        <InteractiveCard key={idx} post={post} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => router.push('/blog')}
                        className="btn-primary"
                    >
                        View All Articles
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BlogSection;