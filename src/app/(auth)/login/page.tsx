"use client";

// ─── /login Page ─────────────────────────────────────────────────────────────
// Logic remains EXACTLY the same. Spacing adjusted for vertical centering without scroll.

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle2 } from "lucide-react";
import { loginAction, type AuthActionResult } from "@/app/actions/auth";

// ── Submit Button — reads useFormStatus internally ────────────────────────────
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileHover={!pending ? { scale: 1.01 } : {}}
            whileTap={!pending ? { scale: 0.99 } : {}}
            // UPDATED: Height h-11 to keep it compact
            className="relative w-full h-11 flex items-center justify-center gap-2 rounded-lg font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Logging in…
                </>
            ) : (
                <>
                    <LogIn size={18} />
                    Sign In
                </>
            )}
        </motion.button>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const initialState: AuthActionResult = { success: false };

export default function LoginPage() {
    const [state, formAction] = useActionState(loginAction, initialState);
    const [showPass, setShowPass] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        if (state.success && state.redirectTo) {
            setRedirecting(true);
            window.location.href = state.redirectTo;
        }
    }, [state]);

    return (
        // UPDATED: Added h-full and flex centering
        <div className="flex flex-col items-center justify-center w-full max-w-md relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
            >
                {/* Card Container */}
                <div className="rounded-2xl bg-[#0f1b33] border border-slate-800 shadow-2xl shadow-black/40 overflow-hidden relative">

                    {/* Top accent */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600" />

                    {/* UPDATED: py-10 reduced to py-7 to prevent scrolling */}
                    <div className="px-8 py-7">
                        {/* Heading */}
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight leading-tight">Welcome back</h2>
                            <p className="text-xs text-slate-400 mt-1.5">Sign in to access your admin portal.</p>
                        </div>

                        {/* ── Redirecting/Error Banners ── */}
                        <AnimatePresence mode="wait">
                            {redirecting ? (
                                <motion.div
                                    key="redirecting"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="flex items-center gap-3 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 text-[11px] px-4 py-2.5 rounded-lg mb-4"
                                >
                                    <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                                    <span>Login successful! Redirecting...</span>
                                </motion.div>
                            ) : state?.error ? (
                                <motion.div
                                    key={`login-error`}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-start gap-3 bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] px-4 py-2.5 rounded-lg mb-4"
                                    role="alert"
                                >
                                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                                    <span>{state.error}</span>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        {/* Form */}
                        {/* UPDATED: space-y-6 reduced to space-y-4 */}
                        <form action={formAction} className="space-y-4">
                            {/* Email */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                                        <Mail size={16} />
                                    </span>
                                    {/* UPDATED: py-4 reduced to py-3 */}
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="admin@nighwan.tech"
                                        className="w-full pl-11 pr-4 py-3 rounded-lg text-sm bg-[#162445] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                                    Password
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                                        <Lock size={16} />
                                    </span>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-11 py-3 rounded-lg text-sm bg-[#162445] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass((v) => !v)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-400"
                                    >
                                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot password */}
                            <div className="text-right">
                                <button type="button" className="text-[10px] text-orange-400 font-bold hover:underline transition-colors">
                                    Forgot password?
                                </button>
                            </div>

                            <SubmitButton />
                        </form>
                    </div>

                    {/* Bottom footer */}
                    <div className="px-8 py-3.5 bg-[#0a1426] border-t border-slate-800 text-center">
                        <p className="text-xs text-slate-400">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="font-bold text-orange-400 hover:text-orange-300 transition-colors">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* ── Logo below the box ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 flex flex-col items-center"
            >
                <img
                    src="/images/nighlogo-Bxm7gxow.svg"
                    alt="Nighwan Technology"
                    className="h-12 w-auto object-contain mb-2 opacity-90"
                />
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Nighwan Technology Secure Portal</p>
            </motion.div>
        </div>
    );
}