"use client";

// ─── /signup Page ─────────────────────────────────────────────────────────────
// Logic remains EXACTLY the same. Design upgraded to light theme IT Agency style.

import { useActionState, useEffect, useState, Suspense } from "react"; // 🔥 Suspense import kiya
import { useFormStatus } from "react-dom";
// 🔥 CHANGE 1: useSearchParams add kiya
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";
import { signupAction, type AuthActionResult } from "@/actions/auth";

// ── Submit Button ─────────────────────────────────────────────────────────────
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileTap={!pending ? { scale: 0.98 } : {}}
            /* 🔥 CSS SYNC: Switched to Universal btn-primary for Premium Solid Look */
            className="btn-primary !w-full !h-12 md:!h-14 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-brandOrange/10"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Creating account…
                </>
            ) : (
                <>
                    <UserPlus size={18} />
                    Sign Up
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-sm rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden text-center px-6 py-8 md:px-8 md:py-10"
            >
                {/* Top thin line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brandOrange" />

                <div className="relative inline-flex items-center justify-center mb-5 mt-2">
                    <span className="absolute inline-flex h-16 w-16 rounded-full bg-emerald-100 animate-ping" />
                    <span className="relative inline-flex h-14 w-14 rounded-full bg-emerald-50 border border-emerald-100 items-center justify-center">
                        <CheckCircle2 size={30} className="text-emerald-500" />
                    </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight mb-1">
                    Account Created!
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base mb-6">
                    Welcome, {userName} 👋
                </p>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                        className="h-full bg-brandOrange rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

// ── Page Content ──────────────────────────────────────────────────────────────
const initialState: AuthActionResult = { success: false };

// 🔥 Iska naam SignupPage se SignupFormContent kar diya
function SignupFormContent() {
    const router = useRouter();
    // 🔥 CHANGE 2: URL param catch karne ke liye
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');

    const [state, formAction] = useActionState(signupAction, initialState);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        if (state.success) {

            // Note: Agar aapka signupAction user details return karta hai, toh usko yahan bhi save kar sakte hain
            // localStorage.setItem('clientUser', JSON.stringify({ name: state.userName }));

            const timer = setTimeout(() => {
                // 🔥 CHANGE 3: Redirect condition lagayi
                if (redirectUrl) {
                    router.push(redirectUrl);
                } else {
                    router.push("/crm-dashboard");
                }
            }, 2000); // Overlay dikhne ke liye 2 second wait
            return () => clearTimeout(timer);
        }
    }, [state.success, router, redirectUrl]);

    return (
        /* 🔥 Added overflow-x-hidden and max-w-[100vw] for strict mobile safety */
        <div className="min-h-[100dvh] w-full max-w-[100vw] flex bg-slate-50 font-sans relative overflow-x-hidden">
            <AnimatePresence>
                {state.success && state.userName && (
                    <SuccessOverlay userName={state.userName} />
                )}
            </AnimatePresence>

            {/* ── Left Illustration Area ── */}
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 bg-white overflow-hidden border-r border-slate-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brandOrange/10 blur-[120px] rounded-full z-0" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brandGreen/5 blur-[100px] rounded-full z-0" />

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10 w-full flex justify-center items-center"
                >
                    <img
                        src="/images/login.png"
                        alt="IT Solutions and Growth"
                        className="w-[85%] max-w-lg object-contain transition-all duration-1000 drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* ── Right Auth Form Area ── */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-12 sm:p-8 lg:p-12 z-20 relative">

                {/* Mobile Decorative Blobs */}
                <div className="lg:hidden absolute top-0 right-0 w-48 h-48 bg-brandOrange/10 blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12 relative z-10"
                >
                    <img
                        src="/images/nighlogo-Bxm7gxow.svg"
                        alt="Nighwan Technology"
                        className="h-10 sm:h-12 object-contain drop-shadow-sm"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full max-w-[420px] relative z-10"
                >
                    <div className="rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative">

                        <div className="px-6 py-8 md:p-10">
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-textmain tracking-tight leading-tight">Create an account</h2>
                                <p className="text-sm text-slate-500 mt-2 px-2">Join us to access the dashboard.</p>
                            </div>

                            <AnimatePresence mode="wait">
                                {state?.error && (
                                    <motion.div
                                        key="signup-error"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-600 text-xs md:text-sm px-4 py-3 rounded-2xl mb-6"
                                        role="alert"
                                    >
                                        <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                                        <span className="font-medium">{state.error}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form action={formAction} className="space-y-4 md:space-y-5">

                                {/* 🔥 Premium Input: Full Name */}
                                <div className="flex flex-col gap-1.5 group">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                            <User size={18} />
                                        </span>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* 🔥 Premium Input: Email */}
                                <div className="flex flex-col gap-1.5 group">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                            <Mail size={18} />
                                        </span>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* 🔥 Premium Input: Password */}
                                <div className="flex flex-col gap-1.5 group">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                            <Lock size={18} />
                                        </span>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPass ? "text" : "password"}
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-12 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPass((v) => !v)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brandOrange transition-colors p-1"
                                        >
                                            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <p className="text-[11px] md:text-xs text-slate-400/80 leading-relaxed pt-1 text-center md:text-left">
                                    By signing up you agree to our{" "}
                                    <Link href="/terms" className="text-brandOrange hover:text-textmain font-medium transition-colors">Terms</Link> & <Link href="/privacy-policy" className="text-brandOrange hover:text-textmain font-medium transition-colors">Privacy Policy</Link>.
                                </p>

                                <SubmitButton />
                            </form>
                        </div>

                        {/* 🔥 Sync Bottom Banner */}
                        <div className="px-6 py-5 md:px-10 bg-slate-50/80 border-t border-slate-100 text-center">
                            <p className="text-sm text-slate-500 font-medium">
                                Already have an account?{" "}
                                {/* 🔥 CHANGE 4: Login link mein bhi param pass kiya */}
                                <Link href={redirectUrl ? `/login?redirect=${redirectUrl}` : "/login"} className="font-bold text-brandOrange hover:text-textmain transition-colors ml-1">
                                    Sign in
                                </Link>
                                {" or "}
                                <Link href="/" className="font-bold text-slate-500 hover:text-textmain hover:underline transition-colors">
                                    learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// 🔥 NAYA WRAPPER: Jo Vercel ko shaant rakhega
export default function SignupPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <svg className="animate-spin h-8 w-8 text-brandOrange" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <p className="text-slate-500">Loading signup securely...</p>
                </div>
            </div>
        }>
            <SignupFormContent />
        </Suspense>
    );
}