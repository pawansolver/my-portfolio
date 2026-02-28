'use client';

import React, { useState, useActionState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  Send, MapPin, Mail, ArrowRight,
  Plus, CheckCircle2, Building2, MessageSquare,
  Clock, Video, ShieldCheck
} from 'lucide-react';
import ProjectInquiryModal from '../modals/ProjectInquiryModal';
// 🔥 ACTION IMPORT (Path apne project ke hisaab se check kar lena)
import { contactAction } from '@/actions/contact';

const faqs = [
  { q: "How fast can we start?", a: "Typically within 7-10 business days after strategy finalization." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide full maintenance and feature scaling packages." },
  { q: "How do you handle pricing?", a: "Flexible fixed-price or time & material models based on project scope." },
];

const ContactSection = ({ isFullPage = false }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // 🔥 SERVER ACTION HOOK (UI state handle karne ke liye)
  const [state, formAction, isPending] = useActionState(contactAction, null);

  return (
    <main className="bg-slate-50 overflow-hidden w-full">

      <ProjectInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourcePage={pathname}
      />

      {/* ─────────────────────────────────────────────────────────
          SECTION 1: HERO (🚀 PUSHED BEHIND NAVBAR) 
          ───────────────────────────────────────────────────────── */}
      {isFullPage && (
        <section className="relative w-full bg-textmain -mt-[150px] pt-[200px] pb-32 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandOrange/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandGreen/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="container-custom relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-white/10 text-brandOrange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 border border-white/10 backdrop-blur-md">
                <MessageSquare className="w-3.5 h-3.5" /> Let's Connect
              </span>

              <h1 className="heading-xl !text-white">
                Ready to Build <br /> The Next Big Thing?
              </h1>
              <p className="text-muted !text-slate-300">
                Whether you have a fully formed RFP or just a visionary idea, our engineers are ready to architect your success.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────
          SECTION 2: 3D FORM & CONTACT INFO 
          ───────────────────────────────────────────────────────── */}
      <section className={`relative z-20 w-full ${!isFullPage ? 'py-20 bg-slate-50/50' : 'pb-20 bg-slate-50'}`}>
        <div className="container-custom max-w-6xl">

          <div className={`grid grid-cols-1 ${isFullPage ? 'lg:grid-cols-12 gap-12 -mt-24' : 'max-w-3xl mx-auto'} items-start`}>

            {/* --- LEFT SIDE: INFO CARDS --- */}
            {isFullPage && (
              <div className="lg:col-span-5 space-y-6 relative z-30">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 group hover:border-brandOrange/30 transition-colors">
                  <div className="w-12 h-12 bg-slate-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandOrange group-hover:text-white transition-colors">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-textmain mb-2">Global HQ</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Nighwan Tech Pvt. Ltd.<br />
                    Sector 62, Gurugram,<br />
                    Haryana, India
                  </p>
                  <a href="#" className="text-brandOrange text-sm font-bold flex items-center gap-1 hover:underline">
                    View on Maps <ArrowRight size={14} />
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 group hover:border-brandGreen/30 transition-colors">
                  <div className="w-12 h-12 bg-slate-50 text-brandGreen rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandGreen group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-textmain mb-2">Direct Contact</h3>
                  <div className="space-y-3">
                    <p className="flex flex-col">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">New Business</span>
                      <span className="text-slate-700 font-medium mt-0.5">hello@nighwantech.com</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Careers</span>
                      <span className="text-slate-700 font-medium mt-0.5">careers@nighwantech.com</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            )}

            {/* --- RIGHT/CENTER: THE 3D PREMIUM FORM --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={isFullPage ? "lg:col-span-7 relative z-30" : "w-full relative"}
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-brandOrange via-transparent to-brandGreen rounded-[2.5rem] blur-xl opacity-30"></div>

              <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandOrange/5 rounded-bl-[100px] pointer-events-none border-b border-l border-brandOrange/10" />

                {!isFullPage && (
                  <div className="text-center mb-8 flex flex-col items-center">
                    <h2 className="heading-xl">Start a Conversation</h2>
                    <p className="text-muted">Tell us about your next project.</p>
                  </div>
                )}
                {isFullPage && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-textmain">Send us a message</h3>
                    <p className="text-slate-500 text-sm mt-1">We usually reply within 24 hours.</p>
                  </div>
                )}

                {/* 🔥 FORM ACTION YAHAN ADD KIYA HAI */}
                <form className="space-y-6" action={formAction}>
                  <input type="hidden" name="source_page" value={`static_form_${pathname}`} />

                  {/* 🔥 SUCCESS / ERROR MESSAGE BLOCK */}
                  {state?.success && (
                    <div className="p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-2xl text-sm font-bold flex items-center gap-2">
                      <CheckCircle2 size={18} /> Message Sent Successfully! We'll get back to you.
                    </div>
                  )}
                  {state?.error && (
                    <div className="p-4 bg-red-50/80 border border-red-200 text-red-600 rounded-2xl text-sm font-bold">
                      ❌ {state.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 🔥 NAME ATTRIBUTES ADDED */}
                    <PremiumInput name="firstName" label="First Name" placeholder="Jane" required={true} disabled={isPending} />
                    <PremiumInput name="lastName" label="Last Name" placeholder="Doe" required={true} disabled={isPending} />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <PremiumInput name="email" label="Work Email" placeholder="jane@company.com" type="email" required={true} disabled={isPending} />
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-brandOrange transition-colors block ml-2">
                      How can we help?
                    </label>
                    <textarea
                      name="message" // 🔥 NAME ATTRIBUTE ADDED
                      required
                      disabled={isPending}
                      rows={4}
                      className="w-full p-4 rounded-2xl bg-slate-50/50 border border-slate-200 focus:border-brandOrange/50 focus:bg-white outline-none transition-all text-sm text-textmain placeholder:text-slate-400 resize-none shadow-inner disabled:opacity-50"
                      placeholder="Tell us about your project timeline and goals..."
                    />
                  </div>

                  <div className="pt-2 flex justify-center">
                    {/* 🔥 TYPE SUBMIT & PENDING STATE ADDED */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn-primary gap-2 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isPending ? "Sending..." : "Send Message"} <Send size={16} />
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                  <ShieldCheck size={14} className="text-brandGreen" /> Strict NDA & Privacy Maintained
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION: WHAT HAPPENS NEXT?
          ───────────────────────────────────────────────────────── */}
      {isFullPage && (
        <section className="section bg-textmain text-white py-24">
          <div className="container-custom">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="heading-xl text-white">What Happens Next?</h2>
              <p className="text-muted text-slate-400">Our streamlined onboarding process ensures we hit the ground running.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Discovery Call", desc: "Within 24 hours, our tech lead will connect to understand your core requirements.", icon: <Video size={24} /> },
                { step: "02", title: "Strategy & Proposal", desc: "We draft a comprehensive roadmap, architecture plan, and transparent pricing.", icon: <MapPin size={24} /> },
                { step: "03", title: "Kickoff Project", desc: "We assign a dedicated engineering pod and sprint cycles begin immediately.", icon: <CheckCircle2 size={24} /> }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors text-center md:text-left">
                  {i !== 2 && <div className="hidden md:block absolute top-12 left-[85%] w-1/2 h-0.5 bg-gradient-to-r from-brandOrange to-transparent opacity-50 z-0" />}
                  <div className="relative z-10 w-14 h-14 bg-brandOrange text-white rounded-full flex items-center justify-center font-black text-xl mb-6 mx-auto md:mx-0 shadow-lg shadow-brandOrange/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3"><span>{item.title}</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed"><span>{item.desc}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────
          SECTION: BOOK A DIRECT CALL
          ───────────────────────────────────────────────────────── */}
      {isFullPage && (
        <section className="section bg-orange-50 border-y border-orange-100/50 py-20">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-10 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl">
            <div className="max-w-xl text-center md:text-left flex flex-col md:items-start items-center">
              <h2 className="heading-xl !text-left mb-4">Hate filling out forms? <br /> <span className="text-brandOrange">Let's talk directly.</span></h2>
              <p className="text-muted !text-left">Book a 15-minute discovery call directly with our technical founders. No sales pitches, just pure architecture and scaling strategies.</p>
            </div>
            <div className="flex-shrink-0">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary gap-2">
                <Clock size={18} /> Schedule on Calendly
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────
          SECTION: FAQ 
          ───────────────────────────────────────────────────────── */}
      {isFullPage && (
        <section className="section bg-white border-t border-slate-100 py-24">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="heading-xl">Frequently Asked Questions</h2>
              <p className="text-muted">Clear answers to help you make informed decisions.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-brandOrange/30 transition-colors bg-slate-50/30">
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left font-bold text-sm text-textmain hover:text-brandOrange transition-colors">
                    <span>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'bg-brandOrange text-white rotate-45' : 'bg-white border border-slate-200 text-slate-400'}`}>
                      <Plus size={16} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                          <span>{faq.a}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center flex flex-col items-center">
              <p className="text-muted mb-6">Still have questions? We're here to help.</p>
              <button onClick={() => setIsModalOpen(true)} className="btn-secondary">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

// 🔥 PREMIUM INPUT UPDATED (Ab ye 'name' aur 'required' accept karega backend ke liye)
const PremiumInput = ({ label, placeholder, name, type = "text", required = false, disabled = false }: any) => (
  <div className="space-y-2 group">
    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-brandOrange transition-colors block ml-2">
      <span>{label}</span>
    </label>
    <input
      name={name}
      type={type}
      required={required}
      disabled={disabled}
      className="w-full p-4 h-14 rounded-2xl bg-slate-50/50 border border-slate-200 focus:border-brandOrange/50 focus:bg-white outline-none transition-all text-sm text-textmain placeholder:text-slate-400 shadow-inner disabled:opacity-50"
      placeholder={placeholder}
    />
  </div>
);

export default ContactSection;