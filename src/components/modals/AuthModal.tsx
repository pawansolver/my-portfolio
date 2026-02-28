"use client";

// ─── AuthModal — wired to real server actions ─────────────────────────────────
// This modal is used on the marketing site. It calls the same server actions
// as the standalone /login and /signup pages.

import { useState, useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Eye,
    EyeOff,
    User,
    Lock,
    Mail,
    UserPlus,
    LogIn,
    AlertCircle,
} from "lucide-react";
import { loginAction, signupAction, type AuthActionResult } from "@/actions/auth";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Tab = "login" | "signup";

// ─────────────────────────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────────────────────────
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 28, duration: 0.4 },
    },
    exit: { opacity: 0, y: 40, scale: 0.96, transition: { duration: 0.2 } },
};

const formVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: {
        x: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 320, damping: 30 },
    },
    exit: (dir: number) => ({
        x: dir > 0 ? -60 : 60,
        opacity: 0,
        transition: { duration: 0.18 },
    }),
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared Input Field
// ─────────────────────────────────────────────────────────────────────────────
function InputField({
    id,
    label,
    type,
    name,
    placeholder,
    icon,
    rightSlot,
}: {
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    icon: React.ReactNode;
    rightSlot?: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-bold tracking-widest uppercase text-slate-500">
                {label}
            </label>
            <div className="relative group">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandOrange transition-colors duration-200">
                    {icon}
                </span>
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="w-full pl-10 pr-10 py-3.5 rounded-xl text-sm font-medium bg-slate-50 border border-slate-200 text-textmain placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-2 focus:ring-brandOrange/20 transition-all duration-200"
                />
                {rightSlot && (
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightSlot}</span>
                )}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Error Banner
// ─────────────────────────────────────────────────────────────────────────────
function ErrorBanner({ message }: { message: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-start gap-2.5 bg-rose-50 border border-rose-200 text-rose-600 text-xs px-3.5 py-2.5 rounded-xl -mt-1"
            role="alert"
        >
            <AlertCircle size={14} className="shrink-0 mt-0.5" />
            <span>{message}</span>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Login Form
// ─────────────────────────────────────────────────────────────────────────────
const loginInitial: AuthActionResult = { success: false };

function LoginForm({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);

    // Wrap loginAction to handle the redirect on success (modal can't redirect server-side)
    const wrappedLogin = async (prev: AuthActionResult, formData: FormData) => {
        try {
            return await loginAction(prev, formData);
        } catch (e: unknown) {
            // next/navigation redirect() throws a special error — catch and navigate
            if (
                e instanceof Error &&
                (e.message === "NEXT_REDIRECT" || e.message.startsWith("NEXT_REDIRECT"))
            ) {
                window.location.href = "/crm-dashboard";
                return { success: true };
            }
            return { success: false, error: "Something went wrong. Please try again." };
        }
    };

    const [state, formAction] = useActionState(wrappedLogin, loginInitial);
    const { pending } = useFormStatus();

    // 🚀 REDIRECT FIX: When success is true and we have a redirectTo path, 
    // do a hard navigation so the middleware sees the new cookie.
    useEffect(() => {
        if (state?.success && state.redirectTo) {
            window.location.href = state.redirectTo;
        }
    }, [state]);

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-black text-textmain tracking-tight">Welcome back 👋</h2>
                <p className="text-sm text-brandGreen font-medium mt-1">
                    Sign in to your Nighwan Tech account
                </p>
            </div>

            <AnimatePresence>
                {state?.error && <ErrorBanner key="lerr" message={state.error} />}
            </AnimatePresence>

            <InputField
                id="login-email"
                label="Email"
                type="email"
                name="email"
                placeholder="admin@nighwan.tech"
                icon={<Mail size={15} />}
            />

            <InputField
                id="login-password"
                label="Password"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                icon={<Lock size={15} />}
                rightSlot={
                    <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="text-slate-400 hover:text-brandOrange transition-colors duration-200"
                        aria-label="Toggle password visibility"
                    >
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                }
            />

            <div className="text-right -mt-2">
                <button
                    type="button"
                    className="text-xs font-semibold text-brandOrange hover:underline hover:text-brandOrange/80 transition"
                >
                    Forgot password?
                </button>
            </div>

            <button
                type="submit"
                disabled={pending}
                className="relative w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-brandOrange to-orange-500 hover:from-orange-500 hover:to-brandOrange shadow-lg shadow-brandOrange/30 hover:shadow-brandOrange/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
                {pending ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                ) : (
                    <>
                        <LogIn size={16} /> Login
                    </>
                )}
            </button>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <button
                    type="button"
                    onClick={onSwitchToSignup}
                    className="font-black text-brandOrange hover:text-orange-600 hover:underline transition-colors"
                >
                    Sign Up
                </button>
            </p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Signup Form
// ─────────────────────────────────────────────────────────────────────────────
const signupInitial: AuthActionResult = { success: false };

function SignupForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);

    const wrappedSignup = async (prev: AuthActionResult, formData: FormData) => {
        try {
            return await signupAction(prev, formData);
        } catch (e: unknown) {
            if (
                e instanceof Error &&
                (e.message === "NEXT_REDIRECT" || e.message.startsWith("NEXT_REDIRECT"))
            ) {
                router.push("/dashboard");
                return { success: true };
            }
            return { success: false, error: "Something went wrong. Please try again." };
        }
    };

    const [state, formAction] = useActionState(wrappedSignup, signupInitial);
    const { pending } = useFormStatus();

    // 🚀 REDIRECT FIX for Signup
    useEffect(() => {
        if (state?.success && state.redirectTo) {
            window.location.href = state.redirectTo;
        }
    }, [state]);

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-black text-textmain tracking-tight">Create Account</h2>
                <p className="text-sm text-brandGreen font-medium mt-1">
                    Join Nighwan Tech — it&apos;s free!
                </p>
            </div>

            <AnimatePresence>
                {state?.error && <ErrorBanner key="serr" message={state.error} />}
            </AnimatePresence>

            <InputField
                id="signup-name"
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Your full name"
                icon={<User size={15} />}
            />

            <InputField
                id="signup-email"
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                icon={<Mail size={15} />}
            />

            <InputField
                id="signup-password"
                label="Password"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Min 8 chars, 1 uppercase, 1 number"
                icon={<Lock size={15} />}
                rightSlot={
                    <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="text-slate-400 hover:text-brandOrange transition-colors duration-200"
                        aria-label="Toggle password visibility"
                    >
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                }
            />

            <p className="text-xs text-slate-400 -mt-2 leading-relaxed">
                By signing up you agree to our{" "}
                <span className="text-brandOrange font-semibold cursor-pointer hover:underline">
                    Terms of Service
                </span>{" "}
                &amp;{" "}
                <span className="text-brandOrange font-semibold cursor-pointer hover:underline">
                    Privacy Policy
                </span>
                .
            </p>

            <button
                type="submit"
                disabled={pending}
                className="relative w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-brandGreen to-green-600 hover:from-green-600 hover:to-brandGreen shadow-lg shadow-brandGreen/30 hover:shadow-brandGreen/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
                {pending ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                ) : (
                    <>
                        <UserPlus size={16} /> Create Account
                    </>
                )}
            </button>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="font-black text-brandOrange hover:text-orange-600 hover:underline transition-colors"
                >
                    Log In
                </button>
            </p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Modal
// ─────────────────────────────────────────────────────────────────────────────
export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [activeTab, setActiveTab] = useState<Tab>("login");
    const [direction, setDirection] = useState(1);

    const switchTo = (tab: Tab) => {
        setDirection(tab === "signup" ? 1 : -1);
        setActiveTab(tab);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="auth-backdrop"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Card */}
                    <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            key="auth-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative w-full max-w-md pointer-events-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Authentication Modal"
                        >
                            {/* Top accent bar */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-brandOrange via-orange-400 to-brandGreen" />

                            {/* Tab Bar */}
                            <div className="flex border-b border-slate-100 bg-slate-50">
                                {(["login", "signup"] as Tab[]).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => switchTo(tab)}
                                        className={`flex-1 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 relative ${activeTab === tab
                                            ? "text-brandOrange bg-white"
                                            : "text-slate-400 hover:text-slate-600"
                                            }`}
                                    >
                                        {tab === "login" ? "Login" : "Sign Up"}
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="auth-tab-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brandOrange"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-brandOrange hover:text-white text-slate-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Close modal"
                            >
                                <X size={14} />
                            </button>

                            {/* Form Content (animated sliding) */}
                            <div className="relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
                                <AnimatePresence mode="wait" custom={direction}>
                                    {activeTab === "login" ? (
                                        <motion.div
                                            key="login"
                                            custom={direction}
                                            variants={formVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                        >
                                            <LoginForm onSwitchToSignup={() => switchTo("signup")} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="signup"
                                            custom={direction}
                                            variants={formVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                        >
                                            <SignupForm onSwitchToLogin={() => switchTo("login")} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Bottom Brand Strip */}
                            <div className="px-8 pb-5 flex items-center justify-center gap-2">
                                <img
                                    src="/images/nighlogo-Bxm7gxow.svg"
                                    alt="Nighwan Tech"
                                    className="h-6 w-auto opacity-70"
                                />
                                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">
                                    Nighwan Tech
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
