'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Check } from 'lucide-react';
import { useState, useEffect, useRef, useActionState } from 'react';
import { projectInquiryAction } from '@/actions/contact';

// --- Typescript Interface ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage: string;
}

const countries = [
  { code: '+91', iso: 'IN', name: 'India', flag: 'https://flagcdn.com/w20/in.png' },
  { code: '+1', iso: 'US', name: 'USA', flag: 'https://flagcdn.com/w20/us.png' },
  { code: '+44', iso: 'GB', name: 'UK', flag: 'https://flagcdn.com/w20/gb.png' },
];

const ProjectInquiryModal = ({ isOpen, onClose, sourcePage }: ModalProps) => {
  const [budget, setBudget] = useState('$5k-$25k');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  // 🚀 Yahan humne selectedCountry state add kar diya hai
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [state, formAction, isPending] = useActionState(projectInquiryAction, { success: false });

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Background scrolling and interaction lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-6 pointer-events-auto">

          {/* --- ULTRA GLASSY BACKGROUND --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-[1.2rem] md:rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row h-auto max-h-[98vh] border border-white/50 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute z-[1000] top-3 right-3 md:top-5 md:right-5 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:text-white hover:bg-brandOrange hover:border-brandOrange hover:scale-105 active:scale-95 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer outline-none"
              aria-label="Close Modal"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* --- LEFT SIDE: COMPACT VIDEO BOX --- */}
            <div className="w-full md:w-[45%] p-2 md:p-4 flex flex-col">
              <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-[1rem] md:rounded-[1.5rem] p-4 pt-4 md:p-8 md:pt-8 flex-grow flex flex-col border border-orange-100/50 overflow-hidden relative justify-center">
                <div className="mb-2 md:mb-6">
                  <h3 className="text-lg md:text-2xl font-black text-textmain leading-tight tracking-tight">
                    Scaling Excellence,<br className="hidden md:block" /> Fueling Your Growth
                  </h3>
                  <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3">
                    <span className="h-1 w-6 md:w-8 bg-brandOrange rounded-full"></span>
                    <p className="text-brandOrange text-[9px] md:text-[11px] font-black uppercase tracking-widest">Profit Partners</p>
                  </div>
                </div>

                {/* --- YOUTUBE VIDEO --- */}
                <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-[2px] md:border-[3px] border-white/80 bg-black shrink-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZV-aV5kIdGQ?autoplay=1&mute=1&loop=1&playlist=ZV-aV5kIdGQ&controls=0&modestbranding=1&rel=0"
                    title="Nighwan Showcase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute inset-0 scale-[1.02]"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-auto pt-4 md:pt-6 text-center hidden md:block">
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">"World-class engineering."</p>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: COMPACT FORM --- */}
            <div className="w-full md:w-[55%] bg-transparent px-4 pb-4 pt-2 md:p-8 relative flex flex-col justify-center">

              <form className="space-y-2.5 md:space-y-4 mt-0" action={formAction}>

                <input
                  type="hidden"
                  name="sourcePage"
                  value={typeof window !== 'undefined' ? window.location.pathname : sourcePage}
                />

                {/* Feedback Messages */}
                {state?.success && (
                  <div className="p-2 md:p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl text-[11px] md:text-xs font-bold flex items-center gap-2">
                    <Check size={14} /> Message sent successfully!
                  </div>
                )}
                {state?.error && (
                  <div className="p-2 md:p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-[11px] md:text-xs font-bold">
                    ❌ {state.error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="space-y-1 md:space-y-1.5 group">
                    <label className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-brandOrange transition-colors">Name</label>
                    <input name="fullName" type="text" disabled={isPending} className="w-full bg-slate-50/50 border border-slate-200 rounded-[0.8rem] md:rounded-xl px-3 md:px-4 py-2 md:py-3.5 text-xs md:text-sm font-medium outline-none focus:border-brandOrange/50 focus:bg-white transition-all shadow-inner disabled:opacity-50" placeholder="Full Name" required />
                  </div>
                  <div className="space-y-1 md:space-y-1.5 group">
                    <label className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-brandOrange transition-colors">Email</label>
                    <input name="email" type="email" disabled={isPending} className="w-full bg-slate-50/50 border border-slate-200 rounded-[0.8rem] md:rounded-xl px-3 md:px-4 py-2 md:py-3.5 text-xs md:text-sm font-medium outline-none focus:border-brandOrange/50 focus:bg-white transition-all shadow-inner disabled:opacity-50" placeholder="Work Email" required />
                  </div>
                </div>

                {/* Country Selector */}
                <div className="space-y-1 md:space-y-1.5 relative group" ref={dropdownRef}>
                  <label className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-brandOrange transition-colors">Contact</label>

                  <div className="flex bg-slate-50/50 border border-slate-200 rounded-[0.8rem] md:rounded-xl overflow-hidden shadow-inner focus-within:border-brandOrange/50 focus-within:bg-white transition-all">
                    <div onClick={() => setIsCountryOpen(!isCountryOpen)} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 cursor-pointer border-r border-slate-200 hover:bg-slate-100 transition-all shrink-0">
                      <img src={selectedCountry.flag} className="w-3.5 h-auto md:w-4 rounded-[2px]" alt="flag" />
                      <span className="text-[11px] md:text-xs font-bold text-textmain">{selectedCountry.code}</span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </div>
                    <input name="phone" type="tel" disabled={isPending} className="flex-1 px-3 md:px-4 py-2 md:py-3.5 text-xs md:text-sm font-medium outline-none bg-transparent" placeholder="Phone number" />
                  </div>

                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -5 }} className="absolute left-0 top-full z-[100] w-full max-w-[200px] md:max-w-[220px] bg-white border border-slate-100 rounded-xl shadow-2xl overflow-hidden py-1.5 md:py-2 mt-0.5 md:mt-1">
                        {countries.map((c) => (
                          <div key={c.iso} onClick={() => { setSelectedCountry(c); setIsCountryOpen(false); }} className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 hover:bg-brandOrange/10 cursor-pointer transition-colors">
                            <div className="flex items-center gap-2 md:gap-3">
                              <img src={c.flag} className="w-4 md:w-5 h-auto rounded-sm shadow-sm" alt={c.iso} />
                              <span className="text-[11px] md:text-xs font-bold text-textmain">{c.name}</span>
                            </div>
                            {selectedCountry.iso === c.iso && <Check size={12} className="text-brandOrange" />}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Budget */}
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Budget</label>
                  <input type="hidden" name="budget" value={budget} />
                  <div className="flex gap-2 md:gap-3">
                    {['$5k-$25k', '$25k+'].map((opt) => (
                      <button key={opt} type="button" onClick={() => setBudget(opt)} disabled={isPending}
                        className={`flex-1 py-2 md:py-3.5 rounded-[0.8rem] md:rounded-xl text-[11px] md:text-xs font-bold border-2 transition-all ${budget === opt ? 'bg-brandOrange text-white border-brandOrange shadow-lg shadow-brandOrange/20' : 'bg-white text-slate-500 border-slate-100 hover:border-brandOrange/30 hover:text-brandOrange'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 md:space-y-1.5 group">
                  <label className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-brandOrange transition-colors">Brief</label>
                  <textarea name="details" rows={2} disabled={isPending} className="w-full bg-slate-50/50 border border-slate-200 rounded-[0.8rem] md:rounded-xl px-3 md:px-4 py-2 md:py-3.5 text-xs md:text-sm font-medium outline-none focus:border-brandOrange/50 focus:bg-white transition-all shadow-inner resize-none disabled:opacity-50 h-[45px] md:h-auto" placeholder="Project details or goals..." />
                </div>

                <button type="submit" disabled={isPending} className="btn-primary w-full py-2.5 md:py-4 mt-1 md:mt-2 disabled:opacity-70 disabled:cursor-not-allowed text-[11px] md:text-sm tracking-widest">
                  {isPending ? 'Sending...' : 'Submit And Get Reply'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInquiryModal;