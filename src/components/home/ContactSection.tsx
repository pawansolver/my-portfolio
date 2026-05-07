'use client';

import React, { useState, useActionState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  Send, MapPin, Mail, ArrowRight,
  Plus, CheckCircle2, Building2, MessageSquare,
  Clock, Video, ShieldCheck, Minus
} from 'lucide-react';

import { useModal } from "@/components/context/ModalContext";
import { contactAction } from '@/actions/contact';

const faqs = [
  { q: "How fast can we start?", a: "Typically within 7-10 business days after strategy finalization." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide full maintenance and feature scaling packages." },
  { q: "How do you handle pricing?", a: "Flexible fixed-price or time & material models based on project scope." },
];

const ContactSection = ({ isFullPage = false }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const pathname = usePathname();

  const { openModal } = useModal();
  const [state, formAction, isPending] = useActionState(contactAction, null);

  return (
    <main className="bg-[#f8fafc] w-full overflow-hidden font-sans">

      {/* SECTION 1: HERO (Premium Dark Agency Vibe) */}
      {isFullPage && (
        <section className="relative w-full bg-[#0B1121] pt-[150px] pb-32 md:pb-40 overflow-hidden">
          {/* Elegant Glow Effects */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brandOrange/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brandGreen/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Subtle Grid Pattern for Texture */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>

          <div className="container-custom relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <span className="inline-flex items-center gap-2 bg-white/5 text-brandOrange text-[11px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-white/10 backdrop-blur-md shadow-lg">
                <MessageSquare className="w-4 h-4" /> Let's Connect
              </span>

              {/* 🔥 STRICT GLOBAL SYNC: heading-xl */}
              <h1 className="heading-xl mb-6">
                Ready to Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                  The Next Big Thing?
                </span>
              </h1>

              {/* 🔥 STRICT GLOBAL SYNC: text-muted */}
              <p className="text-muted">
                Whether you have a fully formed RFP or just a visionary idea, our engineers are ready to architect your success.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 2: 3D FORM & CONTACT INFO (Sleek Overlapping Layout) */}
      <section className={`relative z-20 w-full ${!isFullPage ? 'section-padding' : 'pb-24 -mt-20 md:-mt-24'}`}>
        <div className="container-custom">
          <div className={`grid grid-cols-1 ${isFullPage ? 'lg:grid-cols-12 gap-8 lg:gap-12' : 'max-w-4xl mx-auto'} items-stretch`}>

            {/* LEFT SIDE: INFO CARDS (Clean Minimalism) */}
            {isFullPage && (
              <div className="lg:col-span-5 flex flex-col gap-6 relative z-30 h-full">
                {/* Office Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex-1 flex flex-col group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Building2 size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Our Offices</h3>
                  </div>

                  <div className="flex flex-col gap-6 mb-8">
                    <div className="group/loc">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] block mb-2">Registered Office</span>
                      <a href="https://maps.google.com/?q=Nighwan,+Kurtha,+Gaya,+BR,+804421,+IN" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-brandOrange transition-colors text-[15px] leading-relaxed block">
                        Nighwan, Kurtha, Gaya, BR, 804421, IN
                      </a>
                    </div>
                    <div className="w-8 h-[1px] bg-slate-100"></div>
                    <div className="group/loc">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] block mb-2">Branch Office</span>
                      <span className="text-slate-700 font-medium text-[15px] leading-relaxed block">
                        Gulmohar Park, Hyderabad, TS, 500019, IN
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-grow min-h-[180px] rounded-2xl overflow-hidden border border-slate-200/60 mt-auto shadow-inner relative">
                    <div className="absolute inset-0 bg-slate-50 animate-pulse -z-10"></div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.644602403801!2d84.82700497483363!3d25.080032136437453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d31836dba4fd5%3A0x16e2a561ea982154!2sNighwan%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1774613386629!5m2!1sen!2sin"
                      height="100%"
                      width="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </div>
                </motion.div>

                {/* Direct Contact Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex-shrink-0 group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 bg-emerald-50 text-brandGreen rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Mail size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Direct Contact</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] block mb-2">Phone</span>
                      <a href="tel:+918985025794" className="text-slate-800 font-bold hover:text-brandGreen transition-colors text-[15px]">
                        +91 8985025794
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] block mb-2">Email</span>
                      <a href="mailto:info@nighwantech.com" className="text-slate-800 font-bold hover:text-brandGreen transition-colors text-[15px]">
                        info@nighwantech.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* RIGHT/CENTER: PREMIUM FORM (High-End Agency Look) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={isFullPage ? "lg:col-span-7 relative z-30 h-full" : "w-full relative"}
            >
              {/* Subtle Ambient Glow behind form */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brandOrange/20 to-brandGreen/20 rounded-[3rem] blur-2xl opacity-50 pointer-events-none"></div>

              <div className="relative bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] h-full flex flex-col justify-between">

                <div>
                  {!isFullPage ? (
                    <div className="text-center mb-6 flex flex-col items-center">
                      {/* 🔥 STRICT GLOBAL SYNC */}
                      <h2 className="heading-xl mb-1">Start a Conversation</h2>
                      <p className="text-muted !text-xs">Tell us about your next project.</p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      {/* 🔥 STRICT GLOBAL SYNC */}
                      <h3 className="heading-xl !text-left mb-1">Send us a message</h3>
                      <p className="text-muted !text-left !text-xs">We typically respond within 24 hours.</p>
                    </div>
                  )}

                  <form className="space-y-4" action={formAction}>
                    <input type="hidden" name="source_page" value={`static_form_${pathname}`} />

                    <AnimatePresence>
                      {state?.success && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl text-sm font-bold flex items-center gap-3 overflow-hidden">
                          <CheckCircle2 size={18} className="text-emerald-500" /> Message Sent Successfully!
                        </motion.div>
                      )}
                      {state?.error && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold flex items-center gap-3 overflow-hidden">
                          <span className="text-red-500">❌</span> {state.error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <PremiumInput name="firstName" label="First Name" required={true} disabled={isPending} />
                      <PremiumInput name="lastName" label="Last Name" required={true} disabled={isPending} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <PremiumInput name="email" label="Work Email" type="email" required={true} disabled={isPending} />
                      <PremiumInput name="phone" label="Phone Number" type="tel" required={true} disabled={isPending} />
                    </div>

                    <div className="space-y-1 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-brandOrange transition-colors block ml-1">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        required
                        disabled={isPending}
                        rows={3}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brandOrange focus:ring-4 focus:ring-brandOrange/10 focus:bg-white outline-none transition-all duration-300 text-[14px] text-slate-800 placeholder:text-slate-400 resize-none disabled:opacity-60"
                        placeholder="Briefly describe your project goals..."
                      />
                    </div>

                    <div className="pt-2">
                      {/* 🔥 STRICT GLOBAL SYNC: btn-primary */}
                      <button
                        type="submit"
                        disabled={isPending}
                        className="btn-primary !w-full !py-3 shadow-lg shadow-brandOrange/20 flex items-center justify-center gap-3"
                      >
                        {isPending ? "Sending..." : "Send Message"}
                        {!isPending && <Send size={16} className="ml-1" />}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-brandGreen" /> Strict NDA & Privacy Maintained
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS (Enterprise Sleek Steps) */}
      {isFullPage && (
        <section className="section-padding bg-[#0B1121] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-20">
              {/* 🔥 STRICT GLOBAL SYNC */}
              <h2 className="heading-xl mb-4">What Happens Next?</h2>
              <p className="text-muted !text-slate-400">Our streamlined onboarding process ensures we hit the ground running.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {[
                { step: "01", title: "Discovery Call", desc: "Within 24 hours, our tech lead connects to deeply understand your core architecture.", icon: <Video size={24} /> },
                { step: "02", title: "Strategy & Proposal", desc: "We draft a comprehensive roadmap, technical architecture, and transparent pricing.", icon: <MapPin size={24} /> },
                { step: "03", title: "Kickoff Project", desc: "A dedicated engineering pod is assigned and sprint cycles begin immediately.", icon: <CheckCircle2 size={24} /> }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-20 h-20 bg-[#151f38] border border-white/10 text-brandOrange rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:bg-brandOrange group-hover:text-white transition-all duration-500 transform rotate-3 hover:rotate-0">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-black tracking-[0.2em] text-brandOrange uppercase mb-3">Step {item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed max-w-[280px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: CALENDLY CTA (High-End Card) */}
      {isFullPage && (
        <section className="section-padding relative overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full pointer-events-none -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-tr-full pointer-events-none -z-10"></div>

              <div className="max-w-xl text-center lg:text-left relative z-10">
                {/* 🔥 STRICT GLOBAL SYNC */}
                <h2 className="heading-xl !text-left mb-5">
                  Hate filling out forms? <br />
                  <span className="text-brandOrange">Let's talk directly.</span>
                </h2>
                <p className="text-muted !text-left">
                  Book a 15-minute discovery call directly with our technical founders. No sales pitches, just pure architecture and scaling strategies.
                </p>
              </div>
              <div className="flex-shrink-0 relative z-10">
                {/* 🔥 STRICT GLOBAL SYNC: btn-primary */}
                <button onClick={() => openModal("Calendly Schedule")} className="btn-primary !px-10 !py-4 shadow-xl shadow-brandOrange/20">
                  <Clock size={20} /> Schedule on Calendly
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: FAQ (Minimalist Accordion) */}
      {isFullPage && (
        <section className="section-padding bg-white border-t border-slate-100">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-16">
              {/* 🔥 STRICT GLOBAL SYNC */}
              <h2 className="heading-xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted">Clear answers to help you make informed decisions.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${activeFaq === i ? 'border-brandOrange shadow-md shadow-brandOrange/5 bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 md:p-8 flex justify-between items-center text-left">
                    <span className="font-bold text-lg text-slate-900 pr-8">{faq.q}</span>
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-brandOrange text-white rotate-180' : 'bg-white border border-slate-200 text-slate-500'}`}>
                      {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 md:px-8 pb-8 text-slate-500 text-[15px] font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center flex flex-col items-center">
              <p className="text-slate-500 font-medium mb-6">Still have questions? We're here to help.</p>
              {/* 🔥 STRICT GLOBAL SYNC: btn-inverse */}
              <button onClick={() => openModal("Schedule Call")} className="btn-inverse border border-slate-200 shadow-sm hover:border-brandOrange">
                <MessageSquare size={18} /> Contact Support
              </button>
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

// 💎 HIGH-END INPUT COMPONENT
const PremiumInput = ({ label, placeholder, name, type = "text", required = false, disabled = false }: any) => (
  <div className="space-y-1 group">
    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-brandOrange transition-colors block ml-1">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      disabled={disabled}
      className="w-full px-4 h-[48px] rounded-xl bg-slate-50 border border-slate-200 focus:border-brandOrange focus:ring-4 focus:ring-brandOrange/10 focus:bg-white outline-none transition-all duration-300 text-[14px] text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
      placeholder={placeholder}
    />
  </div>
);

export default ContactSection;
