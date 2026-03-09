"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight,
    Sparkles, TrendingUp, Cpu, BarChart2, Wrench, Newspaper, Hash, Tag,
    X, Share2, Facebook, Twitter, Linkedin, Users, MessageSquare, Rocket, Mail, ArrowUpRight
} from "lucide-react";

// 🚀 Modal Context Import
import { useModal } from "@/components/context/ModalContext";

// ─── Types ───────────────────────────────────────────────────────────────────
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
    tag?: string;
    content?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
    { id: "all", label: "All Insights", icon: Sparkles },
    { id: "AI Solutions", label: "AI Solutions", icon: Cpu },
    { id: "Lean Consultancy", label: "Lean Consultancy", icon: BarChart2 },
    { id: "Engineering", label: "Engineering", icon: Wrench },
    { id: "News", label: "News", icon: Newspaper },
];

const TRENDING_TAGS = ["#GenerativeAI", "#NextJs14", "#EnterpriseScale", "#ZeroTrust", "#LeanAgile", "#CloudNative", "#DevOps"];

const dummyContent = `
  <p class="text-xl leading-relaxed text-slate-700 font-medium mb-8">From co-pilots to autonomous agents — explore how large language models are fundamentally transforming how enterprises build, ship, and maintain software at scale.</p>
  <h2 class="text-2xl font-bold text-textmain mt-10 mb-4">The New Paradigm of Development</h2>
  <p class="mb-6 text-slate-600 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <blockquote class="border-l-4 border-brandOrange pl-6 my-10 italic text-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/80 to-transparent py-6 rounded-r-2xl">"AI will not replace developers, but developers who use AI will replace those who don't."</blockquote>
  <h2 class="text-2xl font-bold text-textmain mt-10 mb-4">The Road Ahead for Enterprises</h2>
  <p class="mb-6 text-slate-600 leading-relaxed text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
`;

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "How Generative AI is Rewriting the Rules of Enterprise Software",
        excerpt: "From co-pilots to autonomous agents — explore how large language models are fundamentally transforming how enterprises build, ship, and maintain software at scale.",
        category: "AI Solutions",
        author: "Sandeep",
        authorRole: "CEO & AI Architect",
        date: "Feb 20, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
        featured: true,
        tag: "Trending",
        content: dummyContent,
    },
    {
        id: 2,
        title: "Lean Principles in the Age of AI: Eliminating Digital Waste",
        excerpt: "Combining Toyota's timeless Lean philosophy with modern AI diagnostics to identify bottlenecks, reduce cycle times, and build truly efficient digital operations.",
        category: "Lean Consultancy",
        author: "Niraj",
        authorRole: "Head of Lean Strategy",
        date: "Feb 15, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        featured: true,
        tag: "Featured",
        content: dummyContent,
    },
    {
        id: 3,
        title: "Zero-Trust Architecture: Building Security from the Inside Out",
        excerpt: "In a perimeter-less world, trust must be earned at every layer. A deep-dive into implementing zero-trust networks for cloud-native applications.",
        category: "Engineering",
        author: "Rahul Mehta",
        authorRole: "Lead Security Engineer",
        date: "Feb 10, 2026",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        featured: true,
        tag: "Deep Dive",
        content: dummyContent,
    },
    {
        id: 4,
        title: "The Rise of Edge AI: Inference at the Speed of Now",
        excerpt: "Running ML models on edge devices opens new possibilities for real-time, privacy-preserving intelligence.",
        category: "AI Solutions",
        author: "Sandeep",
        authorRole: "CEO & AI Architect",
        date: "Feb 05, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba3?w=1200&q=80",
        content: dummyContent,
    },
    {
        id: 5,
        title: "Value Stream Mapping for Software Teams: A Practical Guide",
        excerpt: "VSM isn't just for factory floors. Discover how software teams use it to visualize flow, identify waste, and accelerate delivery cadence.",
        category: "Lean Consultancy",
        author: "Niraj",
        authorRole: "Head of Lean Strategy",
        date: "Jan 28, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        content: dummyContent,
    },
    {
        id: 6,
        title: "Next.js 14 vs Remix: Choosing Your Full-Stack Future",
        excerpt: "An honest breakdown of two dominant React frameworks — comparing their data patterns, performance models, and developer experience.",
        category: "Engineering",
        author: "Rahul Mehta",
        authorRole: "Lead Security Engineer",
        date: "Jan 20, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
        content: dummyContent,
    },
];

const featuredPosts = BLOG_POSTS.filter((p) => p.featured);

const categoryColor: Record<string, string> = {
    "AI Solutions": "bg-brandOrange/10 text-brandOrange border-brandOrange/20",
    "Lean Consultancy": "bg-brandGreen/10 text-brandGreen border-brandGreen/20",
    Engineering: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    News: "bg-purple-500/10 text-purple-500 border-purple-500/20",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function FadeUpCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number; }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: "easeOut", delay }}>
            {children}
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeSlide, setActiveSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const { openModal } = useModal();

    useEffect(() => {
        if (selectedPost) return;
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % featuredPosts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [selectedPost]);

    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedPost]);

    const goToSlide = useCallback((index: number) => {
        if (isSliding) return;
        setIsSliding(true);
        setActiveSlide(index);
        setTimeout(() => setIsSliding(false), 700);
    }, [isSliding]);

    const filteredPosts = activeCategory === "all"
        ? BLOG_POSTS.filter((p) => !p.featured)
        : BLOG_POSTS.filter((p) => p.category === activeCategory && !p.featured);

    const allGrid = activeCategory === "all"
        ? BLOG_POSTS.filter((p) => !p.featured)
        : BLOG_POSTS.filter((p) => p.category === activeCategory);

    const gridPosts = activeCategory === "all" ? allGrid : filteredPosts;

    return (
        <>
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            {/* 🚀 ARTICLE MODAL */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[99998] bg-slate-900/80 backdrop-blur-md overflow-y-auto w-full h-screen pt-16 md:pt-24 pb-20 px-4"
                    >
                        <div className="container-custom max-w-4xl relative mt-4 md:mt-0">
                            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100/50 overflow-hidden relative">

                                {/* ✨ WORLD-CLASS SAFE CLOSE BUTTON (Inside Card) */}
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md hover:bg-brandOrange text-black hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-[100] group shadow-lg"
                                    aria-label="Close Article"
                                >
                                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <article>
                                    <div className="relative w-full h-[35vh] md:h-[45vh] min-h-[250px] md:min-h-[350px]">
                                        <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                    </div>

                                    <div className="p-6 md:p-14 -mt-16 md:-mt-24 relative z-10">
                                        <div className="flex items-center flex-wrap gap-3 md:gap-4 mb-6">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${categoryColor[selectedPost.category] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                                                {selectedPost.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-slate-500 text-sm font-medium"><Clock className="w-4 h-4" /> {selectedPost.readTime}</span>
                                        </div>

                                        <h1 className="heading-xl !text-left !text-2xl md:!text-5xl !mb-8">
                                            {selectedPost.title}
                                        </h1>

                                        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-100 mb-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-100 text-textmain flex items-center justify-center font-bold text-xl md:text-2xl border border-slate-200">
                                                    {selectedPost.author[0]}
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-bold text-textmain text-base md:text-lg">{selectedPost.author}</p>
                                                    <p className="text-xs md:text-sm text-slate-500">{selectedPost.authorRole}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="article-body prose prose-lg max-w-none text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedPost.content || "" }} />

                                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <h4 className="font-bold text-textmain flex items-center gap-2"><Share2 size={20} className="text-brandOrange" /> Share insight</h4>
                                            <div className="flex gap-4">
                                                <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-brandOrange hover:text-white flex items-center justify-center transition-all shadow-sm"><Facebook className="w-4 h-4" /></button>
                                                <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-brandOrange hover:text-white flex items-center justify-center transition-all shadow-sm"><Twitter className="w-4 h-4" /></button>
                                                <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-brandOrange hover:text-white flex items-center justify-center transition-all shadow-sm"><Linkedin className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="min-h-screen bg-[#F8FAFC] text-textmain">

                {/* ── Hero Slider ── */}
                <section className="relative w-full min-h-[85vh] md:min-h-[600px] overflow-hidden bg-black flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                            <img src={featuredPosts[activeSlide].image} alt={featuredPosts[activeSlide].title} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-20 w-full px-6 md:px-16 pt-20 pb-20 flex flex-col items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeSlide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full max-w-4xl">
                                <div className="backdrop-blur-xl bg-black/40 border border-white/20 rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col items-center">
                                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block uppercase tracking-widest ${categoryColor[featuredPosts[activeSlide].category] ?? "bg-white/20 text-white"}`}>
                                        {featuredPosts[activeSlide].category}
                                    </span>
                                    <h1 className="heading-xl !text-white !mb-6">{featuredPosts[activeSlide].title}</h1>
                                    <p className="text-muted !text-slate-200/90 !max-w-3xl">{featuredPosts[activeSlide].excerpt}</p>
                                    <div className="mt-8 md:mt-10 flex justify-center w-full">
                                        <button onClick={() => setSelectedPost(featuredPosts[activeSlide])} className="btn-primary">Read Article</button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 flex flex-col gap-4 z-30">
                        <motion.button whileHover={{ scale: 1.1 }} onClick={() => goToSlide((activeSlide - 1 + featuredPosts.length) % featuredPosts.length)} className="w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} onClick={() => goToSlide((activeSlide + 1) % featuredPosts.length)} className="w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"><ChevronRight className="w-5 h-5 md:w-6 md:h-6" /></motion.button>
                    </div>
                </section>

                {/* ── Sticky Navbar ── */}
                <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
                    <div className="container-custom px-0 md:px-6">
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-4 px-4 md:px-0">
                            {CATEGORIES.map(({ id, label, icon: Icon }) => (
                                <button key={id} onClick={() => setActiveCategory(id)} className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === id ? "text-brandOrange bg-brandOrange/5" : "text-slate-500 hover:text-textmain"}`}>
                                    <Icon className="w-4 h-4 flex-shrink-0" /> <span className="relative z-10">{label}</span>
                                    {activeCategory === id && <motion.span layoutId="category-underline" className="absolute bottom-0 left-6 right-6 h-0.5 bg-brandOrange rounded-full" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Blog Grid ── */}
                <section className="section-padding container-custom">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {gridPosts.map((post, i) => (
                            <FadeUpCard key={post.id} delay={i * 0.08}>
                                <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer" onClick={() => setSelectedPost(post)}>
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 lg:p-8 flex flex-col flex-1 gap-4">
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest self-start ${categoryColor[post.category] ?? "bg-slate-100 text-slate-600"}`}>{post.category}</span>
                                        <h3 className="text-textmain font-bold text-xl group-hover:text-brandOrange transition-colors line-clamp-2">{post.title}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-3 flex-1">{post.excerpt}</p>
                                        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                                            <span className="text-sm text-slate-700 font-bold">{post.author}</span>
                                            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-brandOrange transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </FadeUpCard>
                        ))}
                    </motion.div>
                </section>

                {/* ── Industry Impact (Replaced Newsletter) ── */}
                <section className="section-padding bg-textmain relative overflow-hidden">
                    <div className="container-custom relative z-10 text-center">
                        <h2 className="heading-xl !text-white !mb-12">Empowering Global Enterprises</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <span className="text-4xl md:text-5xl font-black text-brandOrange">50+</span>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm">Enterprise Clients</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <span className="text-4xl md:text-5xl font-black text-brandOrange">10M+</span>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm">Lines of Code</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <span className="text-4xl md:text-5xl font-black text-brandOrange">99.9%</span>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm">Uptime Delivered</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <span className="text-4xl md:text-5xl font-black text-brandOrange">24/7</span>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm">Global Support</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="section-padding bg-slate-900 border-t-8 border-brandOrange">
                    <div className="container-custom flex flex-col items-center text-center">
                        <Rocket className="w-12 h-12 text-brandOrange mb-6" />
                        <h2 className="heading-xl !text-white !mb-4">Transform Ideas into Reality.</h2>
                        <p className="text-muted !text-slate-300 mb-10">Let's discuss how NighwanTech can accelerate your growth.</p>
                        <button onClick={() => openModal("Blog Page Footer CTA")} className="btn-primary">Start a Project</button>
                    </div>
                </section>

            </div>
        </>
    );
}