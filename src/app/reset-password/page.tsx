"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { resetPasswordAction } from "@/actions/auth";

// --- 1. Main Form Component ---
function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // URL se token nikalna (e.g., ?token=xyz...)
    const token = searchParams.get("token");

    const [showPass, setShowPass] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: "" });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, msg: "" });

        const formData = new FormData(e.currentTarget);
        formData.append("token", token || ""); // Backend ke liye token attach karna

        // Server Action call karna
        const result = await resetPasswordAction({ success: false }, formData);

        if (result.success) {
            setStatus({ type: 'success', msg: "Password successfully update ho gaya! Redirecting to login..." });
            // 3 second baad login page par bhej dena
            setTimeout(() => router.push("/login"), 3000);
        } else {
            setStatus({ type: 'error', msg: result.error || "Kuch galti hui, kripya dobara koshish karein." });
            setLoading(false);
        }
    }

    // Agar URL mein token nahi hai, toh error dikhao
    if (!token) {
        return (
            <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100 max-w-md w-full shadow-lg">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-red-700">Invalid Link</h2>
                <p className="text-red-600 mt-2">Bhai, ye link invalid hai ya expire ho chuka hai. Kripya naya reset link request karein.</p>
                <button
                    onClick={() => router.push('/login')}
                    className="mt-6 px-6 py-2 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 transition-colors"
                >
                    Back to Login
                </button>
            </div>
        );
    }

    // Asli Form UI
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[450px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
        >
            <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-brandOrange" />
                    </div>
                    <h1 className="text-3xl font-black text-textmain tracking-tight">Set New Password</h1>
                    <p className="text-slate-500 mt-2 text-sm font-medium">Apna naya aur secure password chunein.</p>
                </div>

                {/* Status Messages */}
                {status.type && (
                    <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${status.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-red-600'
                        }`}>
                        {status.type === 'success' ? <CheckCircle2 className="shrink-0 w-5 h-5 mt-0.5" /> : <AlertCircle className="shrink-0 w-5 h-5 mt-0.5" />}
                        <span className="text-sm font-bold">{status.msg}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">New Password</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors">
                                <Lock size={18} />
                            </span>
                            <input
                                name="password"
                                type={showPass ? "text" : "password"}
                                required
                                placeholder="••••••••"
                                minLength={6}
                                className="w-full pl-11 pr-12 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brandOrange focus:ring-4 focus:ring-brandOrange/10 outline-none transition-all font-medium text-slate-800"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brandOrange p-1"
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-textmain text-white py-4 rounded-xl font-bold hover:bg-brandOrange transition-all shadow-lg shadow-slate-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Updating...
                            </>
                        ) : "Update Password"}
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

// --- 2. Page Wrapper (Suspense required for useSearchParams) ---
export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandOrange/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <Suspense fallback={
                <div className="flex flex-col items-center gap-4">
                    <svg className="animate-spin h-8 w-8 text-brandOrange" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Loading Secure Portal...</span>
                </div>
            }>
                <ResetPasswordForm />
            </Suspense>
        </div>
    );
}
