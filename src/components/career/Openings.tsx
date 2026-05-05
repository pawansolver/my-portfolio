"use client";
import React, { useState, useRef, useEffect, useActionState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { applyNowAction } from '@/actions/career';

// --- TYPE DEFINITION ---
export type JobOpening = {
  id: string | number;
  title: string;
  department: string;
  experience: string;
  summary: string;
  location?: string;
  type?: string;
  isActive?: boolean;
};

interface Props {
  initialJobs: JobOpening[];
}

export default function CurrentOpenings({ initialJobs }: Props) {
  // Fallback: Agar DB empty hai (admin ne abhi kuch add nahi kiya), purana data dikho
  const FALLBACK_JOBS: JobOpening[] = [
    { id: "1", title: "Frontend Developer", department: "Web Development", experience: "2-4 yrs", summary: "Crafting pixel-perfect user interfaces with React and Next.js." },
    { id: "2", title: "Backend Developer", department: "API & DB", experience: "3-5 yrs", summary: "Architecting scalable server-side logic and robust database schemas." },
    { id: "3", title: "Full Stack Developer", department: "Web Solutions", experience: "2-5 yrs", summary: "Bridging the gap between frontend elegance and backend power." },
    { id: "4", title: "Data Scientist", department: "AI/ML", experience: "2-4 yrs", summary: "Extracting actionable insights from complex datasets using ML." },
    { id: "5", title: "QA Engineer", department: "Testing", experience: "1-3 yrs", summary: "Ensuring flawless delivery through automated and manual testing." },
    { id: "6", title: "DevOps Engineer", department: "Infrastructure", experience: "3-6 yrs", summary: "Optimizing CI/CD pipelines and managing cloud infrastructure." },
    { id: "7", title: "UI/UX Designer", department: "Design", experience: "2-4 yrs", summary: "Designing intuitive user journeys and modern visual identities." },
    { id: "8", title: "Product Manager", department: "Product", experience: "4-6 yrs", summary: "Defining product vision and leading cross-functional teams." },
  ];

  // DB data aaya to use karo, warna purana hardcoded data dikho
  const JOBS = initialJobs && initialJobs.length > 0 ? initialJobs : FALLBACK_JOBS;

  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const jobSectionRef = useRef<HTMLDivElement>(null);

  const [state, formAction, isPending] = useActionState(applyNowAction, null);

  const closeModal = () => {
    setSelectedJob(null);
    setIsApplying(false);
  };

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
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/cloud-devops.png')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

        <div className="relative z-10 text-center container-custom px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none"
          >
            BUILD <br /> <span className="text-brandOrange">A UTOPIA</span>
          </motion.h1>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-base md:text-lg font-medium">
            Join the elite 1% building the future of digital infrastructure in Hyderabad.
          </p>
          <button
            onClick={scrollToJobs}
            className="btn-primary !bg-white !text-black !px-10 !py-4 font-bold uppercase tracking-[0.2em] hover:!bg-brandOrange hover:!text-white flex items-center justify-center gap-4 mx-auto"
          >
            Discover Roles <span>→</span>
          </button>
        </div>

        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md py-6 border-t border-white/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...JOBS, ...JOBS].map((job, i) => (
              <div key={i} className="mx-8 md:mx-12 flex flex-col items-start border-l border-white/20 pl-6">
                <span className="text-[10px] font-bold text-brandOrange uppercase tracking-widest">{job.department}</span>
                <span className="text-sm font-bold uppercase">{job.title}</span>
                {/* 🔥 FIX 1: Marquee ab dynamic hai */}
                <span className="text-[9px] text-gray-500 uppercase tracking-tighter font-bold">
                  {job.location || 'HYD'} / {job.type || 'FULL TIME'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GRID LISTING --- */}
      <section ref={jobSectionRef} className="section-padding bg-black">
        <div className="container-custom">

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8 text-center md:text-left">
            <div className="max-w-xl w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-tighter">
                Seek and you <br className="hidden md:block" />shall find
              </h2>
              <div className="h-1 w-24 bg-brandOrange mx-auto md:mx-0"></div>
            </div>
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search roles..."
                className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 outline-none focus:border-brandOrange transition-all italic text-sm text-white placeholder-gray-500 text-center md:text-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOBS.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedJob(job)}
                className="group border border-gray-700 p-6 md:p-8 min-h-[350px] h-full flex flex-col justify-between cursor-pointer transition-all duration-500 rounded-3xl bg-white shadow-xl hover:shadow-2xl text-black"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px] mb-4 group-hover:text-brandOrange transition-colors">
                    {job.department}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight uppercase tracking-tight">
                    {job.title}
                  </h3>
                </div>
                <div className="mt-8">
                  <p className="text-gray-600 text-[11px] uppercase font-bold tracking-widest mb-4">
                    Experience: {job.experience}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                    {/* 🔥 FIX 2: Cards par Type aur Location dynamic hain */}
                    <span className="text-[10px] font-black uppercase text-gray-500">{job.type || 'FULL TIME'}</span>
                    <span className="text-[10px] font-black uppercase text-gray-500">{job.location || 'HYDERABAD'}</span>
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
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm overflow-y-auto pt-20 pb-10"
          >
            <div className="relative container-custom px-4 min-h-[80vh] flex flex-col bg-zinc-900 rounded-3xl border border-zinc-800 p-6 md:p-12">

              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <button
                  onClick={(e) => { e.stopPropagation(); closeModal(); }}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black text-xl hover:bg-brandOrange hover:text-white transition-all duration-300 shadow-xl z-50"
                  aria-label="Close Modal"
                >
                  ✕
                </button>
              </div>

              <div className="mb-12 md:mb-16 border-b border-white/10 pb-10 md:pb-16 mt-8 md:mt-0 text-left">
                <span className="text-brandOrange font-bold tracking-[4px] md:tracking-[6px] uppercase text-[10px] md:text-xs">
                  {selectedJob.department}
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mt-4 md:mt-6 mb-6 md:mb-8 uppercase tracking-tighter">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap justify-start gap-4 md:gap-8 text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[2px] md:tracking-[3px]">
                  {/* 🔥 FIX 3: Modal ke tags ab dynamic hain */}
                  <span className="flex items-center gap-2">● {selectedJob.location || 'Hyderabad'}</span>
                  <span className="flex items-center gap-2">● {selectedJob.type || 'Full Time'}</span>
                  <span className="text-white">● Exp: {selectedJob.experience}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                <div className="lg:col-span-2 space-y-12 md:space-y-16">
                  <section>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase tracking-widest text-brandOrange">The Mission</h4>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-medium">{selectedJob.summary}</p>
                  </section>
                  <section>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase tracking-widest">Core Responsibilities</h4>
                    <ul className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg">
                      <li className="flex gap-4"><span className="text-brandOrange font-bold">01</span> Driving digital transformation through scalable architecture.</li>
                      <li className="flex gap-4"><span className="text-brandOrange font-bold">02</span> High-frequency collaboration with cross-functional teams in {selectedJob.location || 'Hyderabad'}.</li>
                      <li className="flex gap-4"><span className="text-brandOrange font-bold">03</span> Maintaining 99.9% uptime and performance standards for global clients.</li>
                    </ul>
                  </section>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white text-black p-8 md:p-10 rounded-3xl border border-gray-200 shadow-2xl lg:sticky lg:top-20">
                    {!isApplying ? (
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-8 uppercase font-bold tracking-widest">Think you can build it?</p>
                        <button onClick={() => setIsApplying(true)} className="bg-brandOrange text-white w-full py-4 md:py-5 font-black uppercase tracking-[0.2em] hover:bg-black hover:text-brandOrange transition-all duration-300 rounded-xl md:rounded-none">
                          Apply Now
                        </button>
                      </div>
                    ) : (
                      <motion.form
                        action={formAction}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 text-black"
                      >
                        <h4 className="text-lg md:text-xl font-bold mb-6 uppercase">Drop your profile</h4>

                        <input type="hidden" name="appliedFor" value={selectedJob?.title || "Not Specified"} />
                        <input type="hidden" name="department" value={selectedJob?.department || "General"} />

                        <input name="fullName" placeholder="Full Name" className="w-full bg-transparent border-b-2 border-gray-300 py-3 outline-none focus:border-brandOrange text-sm transition-all text-black placeholder-gray-400" required />
                        <input name="email" type="email" placeholder="Work Email" className="w-full bg-transparent border-b-2 border-gray-300 py-3 outline-none focus:border-brandOrange text-sm transition-all text-black placeholder-gray-400" required />
                        <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b-2 border-gray-300 py-3 outline-none focus:border-brandOrange text-sm transition-all text-black placeholder-gray-400" required />

                        <div className="py-4">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-4">Attach Resume (PDF)</label>
                          <input name="resume" type="file" accept=".pdf" className="text-[10px] text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-orange-50 file:text-brandOrange hover:file:bg-orange-100 cursor-pointer" required />
                        </div>

                        <button disabled={isPending} type="submit" className="bg-brandOrange text-white w-full py-4 md:py-5 rounded-xl md:rounded-none font-black uppercase tracking-widest shadow-xl shadow-brandOrange/20 hover:bg-black transition-all disabled:opacity-50">
                          {isPending ? 'Sending...' : 'Submit Application'}
                        </button>

                        {/* Status Messages */}
                        {state?.success && <p className="text-green-600 text-xs font-bold text-center mt-2">Success! Application Sent.</p>}
                        {state?.error && <p className="text-red-600 text-xs font-bold text-center mt-2">{state.error}</p>}

                        <button type="button" onClick={() => setIsApplying(false)} className="w-full text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-4 underline underline-offset-4 hover:text-black transition-colors">Go Back</button>
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