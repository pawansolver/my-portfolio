"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Clock,
    Home,
    ThumbsUp,
    ThumbsDown,
    Share2,
    Check,
    Loader2,
    BookOpen,
    ArrowLeft,
    ChevronRight,
    LifeBuoy,
    Eye,
    MessageSquare,
    Shield,
    AlertCircle
} from 'lucide-react';
import { getArticleBySlugAction, voteArticleAction } from '@/actions/knowledgebaseActions';
import { useParams } from 'next/navigation';

export default function PublicArticleDetailBySlug() {
    const params = useParams();
    const slug = params?.slug as string;
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [voted, setVoted] = useState<'yes' | 'no' | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!slug) return;
            const res = await getArticleBySlugAction(slug);
            if (res?.success && res.data) {
                setArticle(res.data);
            }
            setLoading(false);
        };
        fetchArticle();
    }, [slug]);

    const handleVote = async (vote: 'yes' | 'no') => {
        if (voted || !article) return;
        const res = await voteArticleAction(article.id, vote);
        if (res?.success) setVoted(vote);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    // ── LOADING ──
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 font-sans">
                <Loader2 className="animate-spin text-brandOrange mb-3" size={36} />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading Article...</p>
            </div>
        );
    }

    // ── NOT FOUND ──
    if (!article || article.isActive === false) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center font-sans px-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-5 border border-slate-200">
                    <BookOpen size={28} className="text-slate-400" />
                </div>
                <h1 className="text-xl font-bold text-textmain mb-2 tracking-tight">Article Not Found</h1>
                <p className="text-sm text-slate-500 font-medium mb-7 max-w-sm leading-relaxed">
                    This article may have been moved, deleted, or is currently unavailable.
                </p>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                    <Link href="/support/knowledgebase" className="bg-textmain text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brandOrange transition-colors shadow-sm">
                        Help Center
                    </Link>
                    <Link href="/user" className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                        <Home size={15} /> Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    // ── ARTICLE DETAIL ──
    return (
        <div className="font-sans w-full">

            {/* Breadcrumb + Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                {/* Breadcrumb */}
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <Link href="/support/knowledgebase" className="hover:text-brandOrange transition-colors flex items-center gap-1">
                        <ArrowLeft size={12} />
                        Help Center
                    </Link>
                    <ChevronRight size={11} className="text-slate-300" />
                    <span className="text-slate-500">{article.category?.name || 'Article'}</span>
                    <ChevronRight size={11} className="text-slate-300" />
                    <span className="text-textmain truncate max-w-[200px]">Read</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        id="kb-copy-link-btn"
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-500 hover:text-textmain hover:border-slate-300 transition-all shadow-sm uppercase tracking-wide"
                    >
                        {copied ? <Check size={13} className="text-green-500" /> : <Share2 size={13} />}
                        {copied ? 'Copied!' : 'Share'}
                    </button>
                    <Link
                        href="/user"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-500 hover:text-textmain transition-all shadow-sm uppercase tracking-wide"
                    >
                        <Home size={13} /> Dashboard
                    </Link>
                </div>
            </div>

            {/* Article Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                {/* Brand accent bar */}
                <div className="h-1 bg-brandOrange w-full"></div>

                <div className="p-6 sm:p-8 md:p-10">

                    {/* Meta: category badge + date + views */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="bg-orange-50 text-brandOrange text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-orange-100">
                            {article.category?.name || 'General'}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                            <Clock size={12} />
                            Updated {article.updatedAt
                                ? new Date(article.updatedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                                : 'Recently'}
                        </span>
                        {article.views != null && (
                            <span className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                                <Eye size={12} />
                                {article.views} views
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-textmain mb-8 leading-tight tracking-tight">
                        {article.title}
                    </h1>

                    {/* Content */}
                    <div className="prose prose-sm sm:prose-base prose-slate max-w-none
                        prose-headings:font-black prose-headings:text-textmain prose-headings:tracking-tight
                        prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:font-medium
                        prose-strong:font-black prose-strong:text-textmain
                        prose-a:text-brandOrange prose-a:font-bold hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-slate-100
                        prose-code:bg-slate-50 prose-code:text-brandOrange prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-bold
                    ">
                        {typeof article.content === 'string' ? (
                            <div 
                                className="leading-relaxed text-slate-600" 
                                dangerouslySetInnerHTML={{ __html: article.content }} 
                            />
                        ) : (
                            <div className="leading-relaxed text-slate-600">
                                {article.content}
                            </div>
                        )}
                    </div>

                    {/* ── FEEDBACK SECTION ── */}
                    <div className="mt-10 pt-8 border-t border-slate-100">
                        <div className="bg-slate-50 rounded-xl p-6 text-center">
                            <h3 className="text-base font-bold text-textmain mb-1 tracking-tight">Was this article helpful?</h3>
                            <p className="text-xs text-slate-500 font-medium mb-5">Your feedback helps us improve our documentation.</p>

                            <div className="flex items-center justify-center gap-3">
                                <button
                                    id="kb-vote-yes"
                                    onClick={() => handleVote('yes')}
                                    disabled={voted !== null}
                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 border-2 ${voted === 'yes'
                                        ? 'bg-green-500 border-green-500 text-white shadow-md'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-green-400 hover:text-green-600'
                                        } disabled:cursor-default`}
                                >
                                    <ThumbsUp size={15} />
                                    {voted === 'yes' ? 'Thanks!' : 'Yes, helpful'}
                                </button>
                                <button
                                    id="kb-vote-no"
                                    onClick={() => handleVote('no')}
                                    disabled={voted !== null}
                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 border-2 ${voted === 'no'
                                        ? 'bg-red-500 border-red-500 text-white shadow-md'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-red-400 hover:text-red-500'
                                        } disabled:cursor-default`}
                                >
                                    <ThumbsDown size={15} />
                                    {voted === 'no' ? 'Noted' : 'Not really'}
                                </button>
                            </div>

                            {voted && (
                                <p className="mt-4 text-xs font-bold text-brandOrange uppercase tracking-widest">
                                    ✓ Thank you for your feedback!
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 sm:px-8 md:px-10 pb-8">
                    <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold text-textmain mb-0.5">Still need help?</p>
                            <p className="text-xs text-slate-500 font-medium">Our engineering team is ready to assist you.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center sm:justify-end">
                            <Link
                                href="/support/tickets"
                                id="kb-article-submit-ticket"
                                className="flex items-center gap-2 bg-textmain text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brandOrange transition-colors shadow-sm active:scale-95"
                            >
                                <LifeBuoy size={15} />
                                Submit Ticket
                            </Link>
                            <Link
                                href="/support/tickets"
                                id="kb-article-livechat"
                                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm active:scale-95"
                            >
                                <MessageSquare size={15} />
                                Live Chat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
