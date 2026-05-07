"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Shield, Heart, Zap, Eye, Globe, Star, Cpu, Factory, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function MissionValuesPage() {
  const { openModal } = useModal();

  return (
    <div suppressHydrationWarning className="bg-white text-textmain overflow-x-hidden w-full max-w-[100vw] font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section pt-navbar relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center text-white px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/cloud-devops.png"
            alt="Nighwan Tech Mission"
            fill
            className="object-cover object-center grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 text-center container-custom mt-12 md:mt-0 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
          >
            OUR MISSION & VISION
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-6 md:!mb-8 leading-[1.15] md:leading-tight break-words"
          >
            Empowering Growth <br />
            <span className="text-brandOrange">Through Intelligence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10 w-full px-2 sm:px-0 max-w-3xl mx-auto"
          >
            Our mission is to help Indian MSMEs transition into digitally empowered organizations. We believe the future belongs to companies that are connected, intelligent, and data-driven.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
          >
            <button onClick={() => openModal("Vision Consultation")} className="btn-inverse">
              Partner With Our Vision
            </button>
            <button onClick={() => openModal("Our Ethics")} className="btn-inverse">
              Our Core Values
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MISSION & VISION BLOCKS --- */}
      <section className="section-padding bg-white px-5 sm:px-6 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 text-left">
              <h2 className="heading-xl !text-left !mb-6">The North Star of <br />Our Organization</h2>
              <p className="text-muted !text-left !mx-0 !mb-10 leading-relaxed">
                We started with a simple but powerful vision: to help businesses embrace technology not just as software, but as a growth engine. Today, we align this vision with Industry 4.0 principles.
              </p>

              <div className="space-y-8">
                {[
                  { t: "The Mission", d: "To democratize Industry 4.0 and AI-powered solutions for MSMEs specifically built for their operational realities.", icon: <Target className="text-brandOrange" /> },
                  { t: "The Vision", d: "Helping businesses build a connected, intelligent, and data-driven future through smart ecosystems.", icon: <Eye className="text-brandOrange" /> },
                  { t: "The Promise", d: "To bridge the gap between operational strategy, workforce productivity, and intelligent digital systems.", icon: <Shield className="text-brandOrange" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-textmain text-lg leading-tight mb-2 uppercase tracking-wide">{item.t}</h4>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/ai-automation.png"
                alt="Visionary Leadership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-textmain via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-lg italic font-medium leading-relaxed">
                  "Most companies don't just need software. They need transformation."
                </p>
                <span className="text-brandOrange font-bold text-xs mt-4 block">— Company Realization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CORE VALUES --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandGreen font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Our DNA</span>
            <h2 className="heading-xl">Foundational Beliefs</h2>
            <p className="text-muted">The core values that guide our engineering, consultancy, and global partnerships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Innovation-Driven",
                icon: <Zap />,
                d: "Integrating AI, IoT, and Cloud to move from software development to a transformation partner.",
                points: ["AI-First Mindset", "IoT Integration", "Cloud-Native Ops"]
              },
              {
                t: "Operational Excellence",
                icon: <TrendingUp />,
                d: "Integrating Lean Manufacturing (5S, Kaizen) with technology to bridge strategy and productivity.",
                points: ["Lean Methodologies", "Workflow Efficiency", "Process Optimization"]
              },
              {
                t: "MSME Centricity",
                icon: <Heart />,
                d: "SolvingDisconnected systems and manual workflows with affordable, enterprise-grade tools.",
                points: ["Affordable Scalability", "Operational Visibility", "Bespoke Ecosystems"]
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-textmain mb-4 uppercase tracking-wide">{value.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{value.d}</p>
                <ul className="space-y-3">
                  {value.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-xs font-bold text-textmain">
                      <CheckCircle size={14} className="text-brandGreen" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. INDUSTRY 4.0 PRINCIPLES --- */}
      <section className="section-padding bg-textmain text-white px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/carbon-fibre.png")' }} />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="heading-xl !text-white !text-left !mb-8">Upholding Industry 4.0 Standards</h2>
              <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
                We align our vision with the principles of the fourth industrial revolution—helping businesses move toward connected, intelligent, and autonomous operations.
              </p>
              
              <div className="space-y-4">
                {[
                  "Smart Factory Integration",
                  "Real-Time Production Analytics",
                  "AI-Based Decision Making",
                  "Digital Workflow Automation",
                  "Predictive Maintenance Systems"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Cpu size={18} className="text-brandOrange" />
                    <span className="text-sm font-bold tracking-wide uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-12">
                <div className="aspect-square bg-brandOrange rounded-[2rem] sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-end">
                  <span className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">2020</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">Founded</span>
                </div>
                <div className="aspect-[3/4] bg-white/10 backdrop-blur-md rounded-[2rem] sm:rounded-3xl border border-white/20 p-5 sm:p-8 flex flex-col justify-center">
                  <Factory size={28} className="sm:w-10 sm:h-10 text-brandOrange mb-3 sm:mb-4" />
                  <span className="text-sm sm:text-lg font-bold leading-tight">Industry 4.0 Focused</span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="aspect-[3/4] bg-brandGreen rounded-[2rem] sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-end">
                  <span className="text-xl sm:text-3xl font-black mb-1 sm:mb-2">MSMEs</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">Our Core Focus</span>
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-md rounded-[2rem] sm:rounded-3xl border border-white/20 p-5 sm:p-8 flex flex-col justify-center">
                  <Target size={28} className="sm:w-10 sm:h-10 text-brandOrange mb-3 sm:mb-4" />
                  <span className="text-sm sm:text-lg font-bold leading-tight">Result Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. FINAL CTA --- */}
      <section className="section-padding bg-white relative px-4 sm:px-6">
        <div className="container-custom flex flex-col items-center text-center py-8 md:py-12 w-full">
          <h2 className="heading-xl !mb-6 md:!mb-8">Build the Connected <br />Future of Your Business.</h2>
          <p className="text-muted mb-10 md:mb-12 max-w-2xl mx-auto">
            Ready to transition into a data-driven organization? Let's discuss how our values align with your growth.
          </p>

          <div className="flex justify-center items-center w-full max-w-sm mx-auto">
            <button onClick={() => openModal("Connect Sales")} className="btn-primary">
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
