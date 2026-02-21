'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, ShieldCheck, Clock, ChevronDown, UserCheck, Zap, Cog, Globe, Calendar } from 'lucide-react';

interface ContactProps {
  isFullPage?: boolean;
}

const ContactSection: React.FC<ContactProps> = ({ isFullPage = false }) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedDept, setSelectedDept] = useState('Sales');
  
  // --- Global Clocks Logic ---
  const [times, setTimes] = useState({ india: '', dubai: '', london: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
      setTimes({
        india: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Asia/Kolkata' }),
        dubai: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Asia/Dubai' }),
        london: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Europe/London' }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- WhatsApp Integration with Sandeep's Number ---
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919523922090"; // Sandeep's direct number
    const message = encodeURIComponent("Hi Sandeep, I want to discuss a new project for my brand.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const faqs = [
    { q: "How fast can we start?", a: "Typically, we can kick off a project within 1 week after the initial strategy call." },
    { q: "Do you sign NDAs?", a: "Yes, 100%. We prioritize client confidentiality." },
    { q: "What is your pricing model?", a: "We offer both fixed-price and monthly retainer models." }
  ];

  const departments = [
    { id: 'sales', name: 'Sales', icon: <Zap size={14} /> },
    { id: 'founder', name: 'Founder', icon: <UserCheck size={14} /> },
    { id: 'tech', name: 'Support', icon: <Cog size={14} /> },
  ];

  return (
    <section className={`relative w-full bg-white flex flex-col items-center overflow-hidden pb-20 ${isFullPage ? 'min-h-screen pt-32' : 'pt-10'}`}>
      
      {/* --- Header Background --- */}
      <div className={`absolute top-0 left-0 w-full bg-brandOrange z-0 flex items-center justify-center overflow-hidden transition-all duration-700 ${isFullPage ? 'h-[60vh]' : 'h-[22vh]'}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white/10 text-[20vw] font-black select-none leading-none uppercase tracking-tighter"
        >
          Contact
        </motion.h1>
      </div>

      {/* --- Main Content --- */}
      <div className={`relative z-10 w-full transition-all duration-700 ${isFullPage ? 'container-custom grid grid-cols-1 lg:grid-cols-12 gap-16' : 'max-w-[850px] mt-[10vh] px-6'}`}>
        
        {/* --- LEFT SIDE: Sandeep's Founder Card (Contact Page Only) --- */}
        {isFullPage && (
          <div className="lg:col-span-5 space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="p-10 bg-textmain rounded-[3rem] text-white relative overflow-hidden group shadow-2xl border border-white/5"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  {/* Branding Avatar */}
                  <div className="w-20 h-20 rounded-full bg-brandOrange flex items-center justify-center font-black text-3xl border-4 border-white/20 shadow-xl">
                    SN
                  </div>
                  <div>
                    <h4 className="font-black text-2xl uppercase italic leading-none tracking-tight">Sandeep Nighwan</h4>
                    <p className="text-brandOrange text-[12px] font-black uppercase tracking-[0.3em] mt-2 text-left">Founder & CEO</p>
                  </div>
                </div>

                <p className="text-lg text-white/80 font-medium leading-relaxed mb-10 italic text-left max-w-sm">
                  "Stop waiting for the perfect time. Let's build your digital legacy today with precision and scale."
                </p>

                {/* WhatsApp Redirect Button - Direct to Sandeep */}
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full md:w-auto flex items-center justify-center gap-4 bg-brandOrange text-white px-10 py-5 rounded-2xl transition-all font-black text-[13px] uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,103,0,0.3)] hover:scale-105 active:scale-95 group"
                >
                  <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Calendar size={18} className="text-white" /> 
                  </div>
                  Book Strategy Call
                </button>

                <p className="mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest text-center md:text-left">
                  ⚡ Direct Line to Sandeep • Response in ~15m
                </p>
              </div>
              <Globe className="absolute -right-16 -bottom-16 text-white/5 w-60 h-60 group-hover:rotate-45 transition-transform duration-[2000ms]" />
            </motion.div>

            {/* Global Clocks */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { city: 'India', time: times.india },
                { city: 'Dubai', time: times.dubai },
                { city: 'London', time: times.london }
              ].map((loc, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center group hover:border-brandOrange transition-all">
                  <p className="text-[12px] font-bold uppercase text-slate-400 tracking-tighter mb-1">{loc.city}</p>
                  <p className="text-[12px] font-bold text-textmain group-hover:text-brandOrange transition-colors">{loc.time}</p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-textmain mb-4 italic text-left">Direct FAQ's</p>
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full p-4 flex justify-between items-center text-left text-textmain font-bold text-[10px] uppercase">
                    {faq.q} <ChevronDown size={14} className={`transition-transform ${activeFAQ === i ? 'rotate-180 text-brandOrange' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFAQ === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-slate-500 text-[11px] leading-relaxed">
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- RIGHT SIDE: Form --- */}
        <div className={isFullPage ? "lg:col-span-7" : "w-full"}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="w-full bg-white rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.08)] p-8 md:p-14 border border-slate-50"
          >
            {isFullPage && (
              <div className="mb-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brandOrange/70 mb-4 text-left">Route To:</p>
                <div className="grid grid-cols-3 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => setSelectedDept(dept.name)}
                      className={`p-3 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-1 ${
                        selectedDept === dept.name ? 'border-brandOrange bg-brandOrange/5' : 'border-slate-50 hover:border-slate-100'
                      }`}
                    >
                      <span className={selectedDept === dept.name ? 'text-brandOrange' : 'text-slate-300'}>{dept.icon}</span>
                      <span className="font-bold text-[9px] uppercase text-textmain">{dept.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-10 text-left">
              <span className="font-bold text-[11px] tracking-[0.4em] uppercase mb-2 block text-brandOrange">Message Us</span>
              <h3 className="text-3xl font-bold text-textmain uppercase italic tracking-tighter leading-none">
                {isFullPage ? `Contacting ${selectedDept}` : 'Get in Touch'}
              </h3>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {[{ label: 'First Name', type: 'text' }, { label: 'Last Name', type: 'text' }, { label: 'Email Address', type: 'email' }, { label: 'Phone Number', type: 'tel' }].map((field, idx) => (
                  <div key={idx} className="text-left border-b-2 border-slate-100 focus-within:border-brandOrange transition-all duration-500">
                    <label className="font-bold text-[10px] tracking-[0.2em] uppercase text-brandOrange/70 mb-1 block">{field.label}</label>
                    <input type={field.type} required className="w-full bg-transparent py-3 outline-none font-bold text-textmain text-[14px] uppercase" placeholder={`${field.label.toUpperCase()}...`} />
                  </div>
                ))}
              </div>
              <div className="text-left border-b-2 border-slate-100 focus-within:border-brandOrange transition-all duration-500">
                <label className="font-bold text-[10px] tracking-[0.2em] uppercase text-brandOrange/70 mb-1 block">Project Brief</label>
                <textarea rows={1} required className="w-full bg-transparent py-3 outline-none font-bold text-textmain text-[14px] uppercase resize-none" placeholder="DESCRIBE YOUR VISION..." />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full bg-textmain text-white py-6 rounded-full font-bold text-[11px] uppercase tracking-[0.4em] transition-all hover:bg-brandOrange flex items-center justify-center gap-4 group shadow-xl"
              >
                Send Message <Send size={14} className="text-brandOrange group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;