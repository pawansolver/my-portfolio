"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Search,
    ChevronRight,
    Loader2,
    LifeBuoy,
    Shield,
    Settings,
    CreditCard,
    Zap,
    HelpCircle,
    FileText,
    MessageSquare,
    Globe,
    Book,
    Rocket,
    User,
    AlertCircle,
    X
} from 'lucide-react';
import { getGroupedArticlesAction, searchKBAction } from '@/actions/knowledgebaseActions';

// 🔥 Icon Mapper for Categories
const IconMap: Record<string, React.ElementType> = {
    Shield,
    Settings,
    CreditCard,
    Zap,
    HelpCircle,
    FileText,
    MessageSquare,
    Globe,
    Book,
    Rocket,
    User,
    AlertCircle,
    LifeBuoy
};

// Category color palette — cycling through for variety
const CATEGORY_STYLES = [
    { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
    { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-100' },
    { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
    { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
    { bg: 'bg-red-50', text: 'text-red-500', border: 'border-red-100' },
    { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
];

export default function PublicKnowledgebasePage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const fetchKBData = async () => {
            const res = await getGroupedArticlesAction();
            if (res?.success) {
                setCategories(res.data || []);
            }
            setLoading(false);
        };
        fetchKBData();
    }, []);

    // Real-time Search with debounce
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (searchQuery.length >= 2) {
                setIsSearching(true);
                const res = await searchKBAction(searchQuery);
                if (res?.success) setSearchResults(res.data || []);
                setIsSearching(false);
            } else {
                setSearchResults([]);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getStyle = (index: number) => CATEGORY_STYLES[index % CATEGORY_STYLES.length];

    const getIcon = (iconName: string, size = 22) => {
        const IconComponent = (IconMap[iconName] || HelpCircle) as React.ElementType<{ size?: number }>;
        return <IconComponent size={size} />;
    };

    // Collect all articles across all categories for "Popular Articles"
    const allArticles: any[] = categories.flatMap(cat => cat.articles || []);
    let popularArticles = allArticles.sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans w-full">

            {/* ── PAGE HEADER ── */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-textmain tracking-tight">Knowledge Base</h1>
                <p className="text-sm text-slate-500 font-medium mt-0.5">Find answers to your questions.</p>
            </div>

            {/* ── SEARCH BAR ── */}
            <div className="relative mb-7 max-w-xl">
                <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                    type="text"
                    id="kb-search"
                    placeholder="Search articles..."
                    className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-textmain placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brandOrange/20 focus:border-brandOrange/50 transition-all shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                />
                {isSearching && (
                    <Loader2 size={15} className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-brandOrange" />
                )}
                {searchQuery && !isSearching && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* ── SEARCH RESULTS ── */}
            {searchQuery.length >= 2 && (
                <div className="mb-7 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            Results for &quot;{searchQuery}&quot;
                        </p>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            {searchResults.length} found
                        </span>
                    </div>
                    {searchResults.length === 0 && !isSearching ? (
                        <div className="px-5 py-8 text-center">
                            <HelpCircle size={28} className="text-slate-300 mx-auto mb-2" />
                            <p className="text-sm font-semibold text-slate-500">No articles found for this query.</p>
                            <p className="text-xs text-slate-400 mt-1">Try different keywords or browse categories below.</p>
                        </div>
                    ) : (
                        <div>
                            {searchResults.map((article: any, i: number) => (
                                <Link
                                    key={article.id}
                                    href={`/support/knowledgebase/article/${article.slug}`}
                                    className={`flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 transition-colors group ${i !== 0 ? 'border-t border-slate-50' : ''}`}
                                >
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-bold text-brandOrange uppercase tracking-wider mb-0.5">
                                            {article.category?.name || 'Article'}
                                        </p>
                                        <p className="text-sm font-semibold text-textmain group-hover:text-brandOrange transition-colors truncate">
                                            {article.title}
                                        </p>
                                    </div>
                                    <ChevronRight size={15} className="text-slate-300 group-hover:text-brandOrange group-hover:translate-x-0.5 transition-all ml-3 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* ── MAIN LAYOUT (White Background Container) ── */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col lg:flex-row overflow-hidden">
                {/* ── LEFT: Browse Topics + Popular Articles ── */}
                <div className="flex-1 min-w-0 p-6 lg:p-8">



                    {/* Browse Topics */}
                    <div>
                        <h2 className="text-base font-bold text-textmain mb-4">Browse Topics</h2>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-16">
                                <Loader2 className="animate-spin text-brandOrange mb-3" size={36} />
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading categories...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {categories.map((cat: any, i: number) => {
                                    const style = getStyle(i);
                                    return (
                                        <Link
                                            href={`/support/knowledgebase/article/${cat.slug || `topic-${cat.id}`}`}
                                            key={cat.id}
                                            className="bg-white p-5 border border-slate-200 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-brandOrange/40 hover:shadow-md transition-all cursor-pointer block group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-10 h-10 rounded-xl ${style.bg} ${style.text} flex items-center justify-center shrink-0`}>
                                                    {getIcon(cat.icon, 20)}
                                                </div>
                                                <div>
                                                    <h3 className="text-[15px] font-bold text-textmain mb-1 group-hover:text-brandOrange transition-colors">
                                                        {cat.name}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                                        {cat.description || `Guides related to ${cat.name}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Popular Articles */}
                    {!loading && popularArticles.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-base font-bold text-textmain mb-4">Popular Articles</h2>
                            <div className="bg-white border border-slate-200 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden">
                                {popularArticles.map((art: any, i: number) => (
                                    <Link
                                        key={art.id}
                                        href={`/support/knowledgebase/article/${art.slug}`}
                                        className={`flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors group ${i !== 0 ? 'border-t border-slate-100' : ''}`}
                                    >
                                        <div className="flex items-center gap-4 min-w-0 flex-1">
                                            <ChevronRight size={14} className="text-slate-400 shrink-0" />
                                            <span className="text-[13px] font-semibold text-slate-600 group-hover:text-textmain transition-colors truncate">
                                                {art.title}
                                            </span>
                                        </div>
                                        <ChevronRight size={14} className="text-slate-400 shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── RIGHT: Need Help? Sidebar Card ── */}
                <div className="w-full lg:w-[250px] xl:w-[280px] shrink-0 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-slate-100 bg-slate-50/30">

                    {/* Need Help? Card */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 text-center lg:text-left">
                        <h3 className="text-sm font-bold text-textmain mb-3">Need Help?</h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-5">
                            Contact support for further assistance.
                        </p>
                        <Link
                            href="/support/tickets"
                            id="kb-create-ticket-btn"
                            className="w-full flex items-center justify-center gap-2 bg-[#2f5a9e] text-white text-xs font-bold py-3 px-4 rounded-lg hover:bg-[#204070] transition-colors shadow-sm active:scale-95"
                        >
                            Create Ticket
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}