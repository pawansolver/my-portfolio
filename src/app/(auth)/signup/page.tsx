"use client";

// ─── /signup Page ─────────────────────────────────────────────────────────────
// Logic remains EXACTLY the same. Spacing adjusted for vertical centering without scroll.

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Mail, Lock, Eye, EyeOff,
    UserPlus, AlertCircle, CheckCircle2, ArrowRight,
} from "lucide-react";
import { signupAction, type AuthActionResult } from "@/app/actions/auth";

// ── Submit Button ─────────────────────────────────────────────────────────────
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileHover={!pending ? { scale: 1.01 } : {}}
            whileTap={!pending ? { scale: 0.99 } : {}}
            // UPDATED: Height h-11 to save vertical space
            className="relative w-full h-11 flex items-center justify-center gap-2 rounded-lg font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Creating account…
                </>
            ) : (
                <>
                    <UserPlus size={18} />
                    Create Account
                </>
            )}
        </motion.button>
    );
}

// ── Success Overlay ───────────────────────────────────────────────────────────
function SuccessOverlay({ userName }: { userName: string }) {
    return (
        <motion.div
            key="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a1426]/80 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                className="relative mx-4 w-full max-w-sm rounded-2xl bg-[#0f1b33] border border-orange-500/30 shadow-2xl shadow-orange-500/10 overflow-hidden text-center px-8 py-8"
            >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600" />

                <div className="relative inline-flex items-center justify-center mb-5">
                    <span className="absolute inline-flex h-16 w-16 rounded-full bg-orange-500/20 animate-ping" />
                    <span className="relative inline-flex h-14 w-14 rounded-full bg-orange-500/10 border border-orange-500/30 items-center justify-center">
                        <CheckCircle2 size={30} className="text-orange-500" />
                    </span>
                </div>

                <h2 className="text-xl font-bold text-white tracking-tight mb-1">
                    Account Created!
                </h2>
                <p className="text-orange-400 font-semibold text-sm mb-3">
                    Welcome, {userName} 👋
                </p>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const initialState: AuthActionResult = { success: false };

export default function SignupPage() {
    const router = useRouter();
    const [state, formAction] = useActionState(signupAction, initialState);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        if (state.success) {
            const timer = setTimeout(() => {
                router.push("/crm-dashboard");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [state.success, router]);

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md relative z-10">
            <AnimatePresence>
                {state.success && state.userName && (
                    <SuccessOverlay userName={state.userName} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
            >
                <div className="rounded-2xl bg-[#0f1b33] border border-slate-800 shadow-2xl shadow-black/40 overflow-hidden relative">
                    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600" />

                    {/* UPDATED: py-7 to keep height consistent with login box */}
                    <div className="px-8 py-7">
                        <div className="mb-5 text-center">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight leading-tight">Create an account</h2>
                            <p className="text-xs text-slate-400 mt-1.5">Join Nighwan Technology to get started.</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {state?.error && (
                                <motion.div
                                    key="signup-error"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-start gap-3 bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] px-4 py-2.5 rounded-lg mb-4"
                                    role="alert"
                                >
                                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                                    <span>{state.error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* UPDATED: space-y-3.5 for a tighter fit */}
                        <form action={formAction} className="space-y-3.5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="fullName" className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                                        <User size={16} />
                                    </span>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        placeholder="Pawan Kumar"
                                        className="w-full pl-11 pr-4 py-2.5 rounded-lg text-sm bg-[#162445] border border-slate-800 text-white focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                                        <Mail size={16} />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@nighwan.tech"
                                        className="w-full pl-11 pr-4 py-2.5 rounded-lg text-sm bg-[#162445] border border-slate-800 text-white focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                    />
                                </div>
                            </div>

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
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-11 py-2.5 rounded-lg text-sm bg-[#162445] border border-slate-800 text-white focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
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

                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                By signing up you agree to our{" "}
                                <Link href="/terms" className="text-orange-400 hover:underline font-bold transition-colors">Terms</Link> & <Link href="/privacy-policy" className="text-orange-400 hover:underline font-bold transition-colors">Privacy Policy</Link>.
                            </p>

                            <SubmitButton />
                        </form>
                    </div>

                    <div className="px-8 py-3.5 bg-[#0a1426] border-t border-slate-800 text-center">
                        <p className="text-xs text-slate-400 font-medium">
                            Already have an account?{" "}
                            <Link href="/login" className="font-bold text-orange-400 hover:text-orange-300 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

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
            </motion.div>
        </div>
    );
}