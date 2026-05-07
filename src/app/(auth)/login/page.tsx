"use client";

// ─── /login Page ─────────────────────────────────────────────────────────────
import { useActionState, useEffect, useState, Suspense } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle2, Send, ArrowLeft } from "lucide-react";
import { loginAction, forgotPasswordAction, type AuthActionResult } from "@/actions/auth";
import { useRouter, useSearchParams } from "next/navigation";

// ── Login Submit Button ─────────────────────────────────────────────────────────────
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileTap={!pending ? { scale: 0.98 } : {}}
            className="btn-primary !w-full !h-12 md:!h-14 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-brandOrange/10"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Logging in…
                </>
            ) : (
                <>
                    <LogIn size={18} />
                    Continue
                </>
            )}
        </motion.button>
    );
}

// ── Forgot Password Submit Button ──────────────────────────────────────────────────
function ForgotSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileTap={!pending ? { scale: 0.98 } : {}}
            className="btn-primary !w-full !h-12 md:!h-14 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-brandOrange/10"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending link…
                </>
            ) : (
                <>
                    <Send size={18} />
                    Send Reset Link
                </>
            )}
        </motion.button>
    );
}

const initialState: AuthActionResult = { success: false };

// ── The Actual Form Content with search parameters ────────────────────────────────
function LoginFormContent() {
    const [mode, setMode] = useState<'login' | 'forgot'>('login');
    const [state, formAction] = useActionState(loginAction, initialState);
    const [forgotState, forgotFormAction] = useActionState(forgotPasswordAction, initialState);

    const [showPass, setShowPass] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    // 🔥 NAYA: Saved email read/write karne ke liye state
    const [savedEmail, setSavedEmail] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');

    // 🔥 NAYA: Page khulte hi localStorage se saved email nikalna
    useEffect(() => {
        const rememberedEmail = localStorage.getItem("nighwan_remember_email");
        if (rememberedEmail) {
            setSavedEmail(rememberedEmail);
        }
    }, []);

    useEffect(() => {
        if (state.success && state.redirectTo) {
            setRedirecting(true);

            if (state.user) {
                localStorage.setItem('clientUser', JSON.stringify(state.user));

                // 🔥 NAYA: Agar checkbox tick tha, toh email save karo, warna hata do
                if (state.user.rememberMe) {
                    localStorage.setItem("nighwan_remember_email", state.user.email);
                } else {
                    localStorage.removeItem("nighwan_remember_email");
                }
            }

            setTimeout(() => {
                if (redirectUrl) {
                    router.push(redirectUrl);
                } else {
                    router.push(state.redirectTo as string);
                }
                router.refresh();
            }, 800);
        }
    }, [state, router, redirectUrl]);

    return (
        <div className="min-h-[100dvh] w-full max-w-[100vw] flex bg-slate-50 font-sans relative overflow-x-hidden">
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 bg-white overflow-hidden border-r border-slate-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brandOrange/10 blur-[120px] rounded-full z-0" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brandGreen/5 blur-[100px] rounded-full z-0" />

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-full flex justify-center items-center"
                >
                    <img
                        src="/images/login.png"
                        alt="IT Solutions and Growth"
                        className="w-[85%] max-w-lg object-contain transition-all duration-1000 drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-12 sm:p-8 lg:p-12 z-20 relative">
                <div className="lg:hidden absolute top-0 right-0 w-48 h-48 bg-brandOrange/10 blur-[80px] rounded-full pointer-events-none" />

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 md:mb-12 relative z-10">
                    <img src="/images/nighlogo-Bxm7gxow.svg" alt="Nighwan Technology" className="h-10 sm:h-12 object-contain drop-shadow-sm" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full max-w-[420px] relative z-10">
                    <div className="rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
                        <div className="px-6 py-8 md:p-10">
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-textmain tracking-tight leading-tight">
                                    {mode === 'login' ? "Welcome Back" : "Reset Password"}
                                </h2>
                                {mode === 'forgot' ? (
                                    <p className="text-sm text-slate-500 mt-3 px-2 leading-relaxed">Enter your registered email address and we'll send you a link to reset your password.</p>
                                ) : (
                                    <p className="text-sm text-slate-500 mt-2 px-2">Sign in to your secure dashboard.</p>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {mode === 'login' && redirecting ? (
                                    <motion.div key="redirecting" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs md:text-sm px-4 py-3 rounded-2xl mb-6">
                                        <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                                        <span className="font-medium">Login successful! Redirecting...</span>
                                    </motion.div>
                                ) : mode === 'login' && state?.error ? (
                                    <motion.div key="login-error" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-600 text-xs md:text-sm px-4 py-3 rounded-2xl mb-6" role="alert">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                                        <span className="font-medium">{state.error}</span>
                                    </motion.div>
                                ) : mode === 'forgot' && forgotState?.error ? (
                                    <motion.div key="forgot-error" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-600 text-xs md:text-sm px-4 py-3 rounded-2xl mb-6" role="alert">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                                        <span className="font-medium">{forgotState.error}</span>
                                    </motion.div>
                                ) : mode === 'forgot' && forgotState?.success ? (
                                    <motion.div key="forgot-success" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs md:text-sm px-4 py-3 rounded-2xl mb-6" role="alert">
                                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-500" />
                                        <span className="font-medium">Reset link sent! Please check your email.</span>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>

                            {mode === 'login' ? (
                                <form action={formAction} className="space-y-4">
                                    <div className="flex flex-col gap-1.5 group">
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                                <Mail size={18} />
                                            </span>
                                            {/* 🔥 NAYA: defaultValue={savedEmail} lagaya hai auto-fill ke liye */}
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                placeholder="name@company.com"
                                                defaultValue={savedEmail}
                                                key={savedEmail}
                                                className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5 group">
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                                <Lock size={18} />
                                            </span>
                                            <input id="password" name="password" type={showPass ? "text" : "password"} autoComplete="current-password" required placeholder="••••••••"
                                                className="w-full pl-12 pr-12 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                            />
                                            <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brandOrange transition-colors p-1">
                                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center px-1 pt-2">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            {/* 🔥 NAYA: name="rememberMe" aur defaultChecked lagaya */}
                                            <input
                                                type="checkbox"
                                                name="rememberMe"
                                                value="true"
                                                defaultChecked={!!savedEmail}
                                                className="w-4 h-4 rounded border-slate-300 text-brandOrange focus:ring-brandOrange/20 cursor-pointer"
                                            />
                                            <span className="text-xs md:text-sm text-slate-500 font-medium group-hover:text-textmain transition-colors">Remember me</span>
                                        </label>
                                        <button type="button" onClick={() => setMode('forgot')} className="text-xs md:text-sm text-slate-500 hover:text-brandOrange font-medium transition-colors">
                                            Forgot Password?
                                        </button>
                                    </div>

                                    <SubmitButton />
                                </form>
                            ) : (
                                <form action={forgotFormAction} className="space-y-4">
                                    <div className="flex flex-col gap-1.5 group">
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-300">
                                                <Mail size={18} />
                                            </span>
                                            <input id="forgot-email" name="email" type="email" required placeholder="Enter your email"
                                                className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl text-sm bg-slate-50/50 border border-slate-200 text-textmain placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brandOrange/50 focus:ring-4 focus:ring-brandOrange/10 shadow-inner transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <ForgotSubmitButton />

                                    <div className="flex justify-center mt-6">
                                        <button type="button" onClick={() => setMode('login')} className="flex items-center gap-2 text-sm text-slate-500 hover:text-brandOrange font-medium transition-colors p-2">
                                            <ArrowLeft size={16} />
                                            Back to Login
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {mode === 'login' && (
                            <div className="px-6 py-5 md:px-10 bg-slate-50/80 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-500 font-medium">
                                    Nighwan Tech?{" "}
                                    <Link href={redirectUrl ? `/signup?redirect=${redirectUrl}` : "/signup"} className="font-bold text-brandOrange hover:text-textmain transition-colors ml-1">
                                        Create Account
                                    </Link>
                                    {" or "}
                                    <Link href="/" className="font-bold text-slate-500 hover:text-textmain hover:underline transition-colors">
                                        learn more
                                    </Link>
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ── The exported Page Component ──────────────────────────────────────────────────
export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <svg className="animate-spin h-8 w-8 text-brandOrange" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <p className="text-slate-500">Loading secure login...</p>
                </div>
            </div>
        }>
            <LoginFormContent />
        </Suspense>
    );
}
