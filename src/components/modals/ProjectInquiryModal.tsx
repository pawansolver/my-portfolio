'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Check } from 'lucide-react';
import { useState, useEffect, useRef, useActionState } from 'react';
import { projectInquiryAction } from '@/actions/contact';

// --- Typescript Interface (Same as before) ---
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
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [state, formAction, isPending] = useActionState(projectInquiryAction, { success: false });

  // Handle Click Outside (Same logic)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* --- ULTRA GLASSY BACKGROUND --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-[20px]"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white/90 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col md:flex-row max-h-[500px] border border-white/50"
          >
            {/* --- LEFT SIDE: COMPACT VIDEO BOX --- */}
            <div className="w-full md:w-[48%] p-3 flex flex-col">
              <div className="bg-gradient-to-br from-[#FFF9F2] to-[#FFEDE0] rounded-[1.6rem] p-6 flex-grow flex flex-col border border-orange-100/50 overflow-hidden relative">
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-slate-800 leading-tight tracking-tight">Scaling Excellence,<br />Fueling Your Growth</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-1 w-8 bg-orange-500 rounded-full"></span>
                    <p className="text-orange-600/80 text-[10px] font-bold uppercase tracking-widest">Profit Partners</p>
                  </div>
                </div>

                {/* --- YOUTUBE VIDEO (Autoplay/Mute/Loop) --- */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/80 bg-black">
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

                <div className="mt-auto pt-4 text-center">
                  <p className="text-[10px] text-slate-400 font-medium">"World-class engineering for your growth."</p>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: COMPACT FORM --- */}
            <div className="w-full md:w-[52%] bg-white/60 p-6 md:p-8 relative flex flex-col justify-center">
              {/* Close Button */}
              <button onClick={onClose} className="absolute top-5 right-5 p-1.5 bg-slate-100 hover:bg-orange-500 hover:text-white rounded-full transition-all text-slate-400"><X size={16} /></button>

              <form className="space-y-3.5" action={formAction}>
                <input type="hidden" name="sourcePage" value={sourcePage} />

                {/* Feedback Messages */}
                {state?.success && (
                  <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-[11px] font-bold">
                    ✅ Message sent! We'll get back to you soon.
                  </div>
                )}
                {state?.error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[11px] font-bold">
                    ❌ {state.error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input name="fullName" type="text" disabled={isPending} className="w-full bg-white border border-slate-100 rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none focus:border-orange-300 transition-all shadow-sm disabled:opacity-50" placeholder="Full Name" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input name="email" type="email" disabled={isPending} className="w-full bg-white border border-slate-100 rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none focus:border-orange-300 transition-all shadow-sm disabled:opacity-50" placeholder="Work Email" required />
                  </div>
                </div>

                {/* Country Selector (Original Logic) */}
                <div className="space-y-1 relative" ref={dropdownRef}>
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Contact</label>
                  <div className="flex bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm focus-within:border-orange-300 transition-all">
                    <div onClick={() => setIsCountryOpen(!isCountryOpen)} className="flex items-center gap-1.5 px-3 bg-slate-50 cursor-pointer border-r border-slate-100 hover:bg-slate-100 transition-all">
                      <img src={selectedCountry.flag} className="w-3.5 h-auto rounded-[1px]" alt="flag" />
                      <span className="text-[11px] font-bold text-slate-600">{selectedCountry.code}</span>
                      <ChevronDown size={10} className="text-slate-300" />
                    </div>
                    <input name="phone" type="tel" disabled={isPending} className="flex-1 px-3.5 py-2.5 text-[12px] font-medium outline-none bg-transparent" placeholder="Phone number" />
                  </div>

                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -5 }} className="absolute left-0 top-full z-[100] w-full max-w-[200px] bg-white border border-slate-100 rounded-xl shadow-2xl overflow-hidden py-1">
                        {countries.map((c) => (
                          <div key={c.iso} onClick={() => { setSelectedCountry(c); setIsCountryOpen(false); }} className="flex items-center justify-between px-3 py-2 hover:bg-orange-50 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <img src={c.flag} className="w-4 h-auto rounded-sm" alt={c.iso} />
                              <span className="text-[11px] font-bold text-slate-600">{c.name}</span>
                            </div>
                            {selectedCountry.iso === c.iso && <Check size={10} className="text-orange-500" />}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Budget (Original UI) */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Budget</label>
                  <input type="hidden" name="budget" value={budget} />
                  <div className="flex gap-2">
                    {['$5k-$25k', '$25k+'].map((opt) => (
                      <button key={opt} type="button" onClick={() => setBudget(opt)} disabled={isPending}
                        className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold border transition-all ${budget === opt ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-100' : 'bg-white text-slate-500 border-slate-100 hover:border-orange-200'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brief</label>
                  <textarea name="details" rows={1} disabled={isPending} className="w-full bg-white border border-slate-100 rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none focus:border-orange-300 transition-all shadow-sm resize-none disabled:opacity-50" placeholder="Project details..." />
                </div>

                <button type="submit" disabled={isPending} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-[12px] shadow-[0_10px_20px_rgba(249,115,22,0.15)] transition-all active:scale-[0.98] mt-1 tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed">
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