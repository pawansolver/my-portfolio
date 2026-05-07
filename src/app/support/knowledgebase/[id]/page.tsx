import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Home, BookOpen, LifeBuoy, ChevronRight } from 'lucide-react';
import { getArticleBySlugAction } from '@/actions/knowledgebaseActions';

export default async function PublicArticleDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const articleId = resolvedParams.id;

    // Fetch article by slug (the [id] segment is treated as a slug)
    const res = await getArticleBySlugAction(articleId);
    const article = res?.data || res?.article || (res?.id ? res : null);

    // ── NOT FOUND / INACTIVE ──
    if (!article || article.isActive === false) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 font-sans">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-5 border border-slate-200">
                    <BookOpen size={28} className="text-slate-400" />
                </div>
                <h1 className="text-xl font-bold text-textmain mb-2 tracking-tight">Article Unavailable</h1>
                <p className="text-slate-500 text-sm font-medium mb-7 max-w-sm leading-relaxed">
                    The article you&apos;re looking for doesn&apos;t exist, has been archived, or is unavailable.
                </p>
                <div className="flex items-center gap-3">
                    <Link
                        href="/support/knowledgebase"
                        className="bg-textmain text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brandOrange transition-colors shadow-sm"
                    >
                        Help Center
                    </Link>
                    <Link
                        href="/user"
                        className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm"
                    >
                        <Home size={15} /> Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    // ── ARTICLE FOUND ──
    return (
        <div className="font-sans w-full">

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
                <Link href="/support/knowledgebase" className="hover:text-brandOrange transition-colors flex items-center gap-1">
                    <ArrowLeft size={12} />
                    Help Center
                </Link>
                <ChevronRight size={11} className="text-slate-300" />
                <span className="text-slate-500">{article.category?.name || article.category || 'Article'}</span>
                <ChevronRight size={11} className="text-slate-300" />
                <span className="text-textmain truncate max-w-[200px]">Read</span>
            </div>

            {/* Article Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                {/* Orange accent top bar */}
                <div className="h-1 bg-brandOrange w-full"></div>

                <div className="p-6 sm:p-8 md:p-10">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-orange-50 text-brandOrange text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-orange-100">
                            {article.category?.name || article.category || 'General'}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                            <Clock size={12} />
                            Updated {article.updatedAt
                                ? new Date(article.updatedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                                : 'Recently'}
                        </span>
                        {article.views != null && (
                            <span className="text-slate-400 text-[11px] font-bold">{article.views} views</span>
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
                        prose-a:text-brandOrange prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-slate-100
                        prose-ul:font-medium prose-ol:font-medium
                        prose-code:bg-slate-50 prose-code:text-brandOrange prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-bold prose-code:text-sm
                    ">
                        <div className="whitespace-pre-wrap leading-relaxed text-slate-600">
                            {article.content}
                        </div>
                    </div>
                </div>

                {/* Footer CTA inside card */}
                <div className="px-6 sm:px-8 md:px-10 pb-8">
                    <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div>
                            <p className="text-sm font-bold text-textmain mb-1">Didn&apos;t find what you were looking for?</p>
                            <p className="text-xs text-slate-500 font-medium">Our support team is here to help.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Link
                                href="/support/tickets"
                                className="flex items-center gap-2 bg-textmain text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brandOrange transition-colors shadow-sm active:scale-95"
                            >
                                <LifeBuoy size={15} />
                                Submit Ticket
                            </Link>
                            <Link
                                href="/support/knowledgebase"
                                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <ArrowLeft size={15} />
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
