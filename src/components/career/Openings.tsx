"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. DETAILED DATA (Strictly Intact) ---
const JOBS = [
  { id: "1", title: "Frontend Developer", department: "Web Development", experience: "2-4 yrs", summary: "Crafting pixel-perfect user interfaces with React and Next.js." },
  { id: "2", title: "Backend Developer", department: "API & DB", experience: "3-5 yrs", summary: "Architecting scalable server-side logic and robust database schemas." },
  { id: "3", title: "Full Stack Developer", department: "Web Solutions", experience: "2-5 yrs", summary: "Bridging the gap between frontend elegance and backend power." },
  { id: "4", title: "Data Scientist", department: "AI/ML", experience: "2-4 yrs", summary: "Extracting actionable insights from complex datasets using ML." },
  { id: "5", title: "QA Engineer", department: "Testing", experience: "1-3 yrs", summary: "Ensuring flawless delivery through automated and manual testing." },
  { id: "6", title: "DevOps Engineer", department: "Infrastructure", experience: "3-6 yrs", summary: "Optimizing CI/CD pipelines and managing cloud infrastructure." },
  { id: "7", title: "UI/UX Designer", department: "Design", experience: "2-4 yrs", summary: "Designing intuitive user journeys and modern visual identities." },
  { id: "8", title: "Product Manager", department: "Product", experience: "4-6 yrs", summary: "Defining product vision and leading cross-functional teams." },
];

export default function CurrentOpenings() {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const jobSectionRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setSelectedJob(null);
    setIsApplying(false);
  };

  // UX Improvement: Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const scrollToJobs = () => {
    jobSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-brandOrange selection:text-white overflow-x-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none"
          >
            BUILD <br /> <span className="text-brandOrange">A UTOPIA</span>
          </motion.h1>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg font-medium">
            Join the elite 1% building the future of digital infrastructure in Hyderabad.
          </p>
          <button 
            onClick={scrollToJobs}
            className="bg-white text-black px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-brandOrange hover:text-white transition-all duration-500 flex items-center gap-4 mx-auto"
          >
            Discover Roles <span>→</span>
          </button>
        </div>

        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md py-6 border-t border-white/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...JOBS, ...JOBS].map((job, i) => (
              <div key={i} className="mx-12 flex flex-col items-start border-l border-white/20 pl-6">
                <span className="text-[10px] font-bold text-brandOrange uppercase tracking-widest">{job.department}</span>
                <span className="text-sm font-bold uppercase">{job.title}</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-tighter font-bold">HYD / FULL TIME</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GRID LISTING --- */}
      <section ref={jobSectionRef} className="py-32 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">Seek and you <br/>shall find</h2>
              <div className="h-1 w-24 bg-brandOrange"></div>
            </div>
            <div className="w-full md:w-96">
              <input 
                type="text" 
                placeholder="seek and you shall find" 
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-2 outline-none focus:border-brandOrange transition-all italic text-sm text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOBS.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedJob(job)}
                className="group border border-gray-700 p-8 h-[380px] flex flex-col justify-between cursor-pointer transition-all duration-500 rounded-3xl bg-white shadow-xl hover:shadow-2xl"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px] mb-4 group-hover:text-brandOrange transition-colors">
                    {job.department}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight uppercase tracking-tight text-black">
                    {job.title}
                  </h3>
                </div>
                <div className="mt-auto">
                    <p className="text-gray-600 text-[11px] uppercase font-bold tracking-widest mb-4">
                        Experience: {job.experience}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                        <span className="text-[10px] font-black uppercase text-gray-500">FULL TIME</span>
                        <span className="text-[10px] font-black uppercase text-gray-500">HYDERABAD</span>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black overflow-y-auto"
          >
            <div className="relative max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
              
              <button 
                onClick={(e) => { e.stopPropagation(); closeModal(); }} 
                className="fixed top-32 right-6 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl hover:bg-brandOrange hover:text-white transition-all duration-300 shadow-xl z-[1001]"
                aria-label="Close Modal"
              >
                ✕
              </button>
              
              <div className="mb-16 border-b border-white/10 pb-16">
                <span className="text-brandOrange font-bold tracking-[6px] uppercase text-xs">{selectedJob.department}</span>
                <h2 className="text-5xl md:text-8xl font-black mt-6 mb-8 uppercase tracking-tighter">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-8 text-xs font-black text-gray-500 uppercase tracking-[3px]">
                    <span className="flex items-center gap-2">● Hyderabad</span>
                    <span className="flex items-center gap-2">● Full Time</span>
                    <span className="text-white">● Experience: {selectedJob.experience}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h4 className="text-2xl font-bold mb-6 uppercase tracking-widest text-brandOrange">The Mission</h4>
                        <p className="text-gray-400 leading-relaxed text-xl font-medium">{selectedJob.summary}</p>
                    </section>
                    <section>
                        <h4 className="text-2xl font-bold mb-6 uppercase tracking-widest">Core Responsibilities</h4>
                        <ul className="space-y-6 text-gray-500 text-lg">
                            <li className="flex gap-4"><span>01</span> Driving digital transformation through scalable architecture.</li>
                            <li className="flex gap-4"><span>02</span> High-frequency collaboration with cross-functional teams in Hyderabad.</li>
                            <li className="flex gap-4"><span>03</span> Maintaining 99.9% uptime and performance standards for global clients.</li>
                        </ul>
                    </section>
                </div>

                <div className="lg:col-span-1">
                   <div className="bg-white p-10 rounded-3xl border border-gray-700 shadow-xl sticky top-10">
                      {!isApplying ? (
                          <div className="text-center">
                              <p className="text-sm text-gray-600 mb-8 uppercase font-bold tracking-widest">Think you can build it?</p>
                              <button onClick={() => setIsApplying(true)} className="bg-brandOrange text-white w-full py-5 font-black uppercase tracking-[0.2em] hover:bg-black hover:text-brandOrange transition-all duration-300">
                                  Apply Now
                              </button>
                          </div>
                      ) : (
                          <motion.form 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="space-y-6" 
                            onSubmit={(e) => { e.preventDefault(); alert('Application Received!'); closeModal(); }}
                          >
                              <h4 className="text-xl font-bold mb-6 uppercase">Drop your profile</h4>
                              <input placeholder="Full Name" className="w-full bg-transparent border-b-2 border-gray-300 py-3 outline-none focus:border-brandOrange text-sm transition-all" required />
                              <input type="email" placeholder="Work Email" className="w-full bg-transparent border-b-2 border-gray-300 py-3 outline-none focus:border-brandOrange text-sm transition-all" required />
                              <div className="py-4">
                                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-4">Attach Resume (PDF)</label>
                                  <input type="file" accept=".pdf" className="text-[10px] text-gray-400 cursor-pointer" required />
                              </div>
                              <button type="submit" className="bg-brandOrange text-white w-full py-5 font-black uppercase tracking-widest shadow-2xl shadow-brandOrange/20">Submit Application</button>
                              <button type="button" onClick={() => setIsApplying(false)} className="w-full text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-4 underline underline-offset-4">Go Back</button>
                          </motion.form>
                      )}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #fb923c;
        }
      `}</style>
    </div>
  );
}