"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BarChart3, Target, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function LeanConsultancyPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Corporate Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Removed extra px-6 and max-w-5xl so container-custom handles mobile padding automatically */}
        <div className="relative z-10 text-center container-custom">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >

          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Engineering Efficiency. <br />
            <span className="text-gray-300">Empowering Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We transform legacy operations into high-velocity value streams. Our Lean Six Sigma
            frameworks eliminate systemic waste and synchronize your execution with long-term
            strategic objectives for measurable bottom-line impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Free Audit")} className="btn-primary">
              Book Free Consultation
            </button>
            <button onClick={() => openModal("Expert Inquiry")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              {/* Changed !text-left to md:text-left so it centers on mobile but left aligns on PC */}
              <h2 className="heading-xl md:text-left !mb-6">The Cost of <br />Process Stagnation</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                In today's volatile market, "business as usual" is a financial risk. Inefficient
                workflows are often hidden in plain sight, draining up to 30% of your annual
                operational budget.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Process Fragmentation", d: "Siloed departments creating redundant touchpoints and data friction." },
                  { t: "Hidden Opex Leaks", d: "Non-value-added activities (Muda) that inflate lead times and overheads." },
                  { t: "Scalability Bottlenecks", d: "Legacy systems that fail to handle increased demand without linear cost increases." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><ShieldCheck className="text-brandOrange w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-textmain">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl -z-10 group-hover:bg-orange-100 transition-colors" />
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Our Core Methodology</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our engagement doesn't just stop at advice. We implement a structured
                  <strong> DMAIC (Define, Measure, Analyze, Improve, Control)</strong>
                  approach to ensure every process is optimized for maximum throughput.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of DMAIC cycle diagram]

                </div>

                <ul className="space-y-4">
                  {["Waste Identification (8 Muda)", "Value Stream Mapping (VSM)", "Root Cause Analysis", "Standard Work Implementation"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Methodology")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Full Framework <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Measured Outcomes</h2>
            <p className="text-muted !text-gray-300">Our results are audited, data-backed, and directly linked to your EBITDA growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "35%", l: "Productivity Improvement", d: "Achieved through workflow synchronization." },
              { v: "28%", l: "Opex Cost Reduction", d: "Elimination of non-value-added processes." },
              { v: "40%", l: "Cycle Time Reduction", d: "Accelerated delivery to market speeds." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={i}>
                <h3 className="text-5xl md:text-6xl font-bold text-brandOrange mb-4">{stat.v}</h3>
                <p className="text-xl font-bold mb-2">{stat.l}</p>
                <p className="text-sm text-gray-400 max-w-[200px] mx-auto">{stat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Strategic Competencies</h2>
          <p className="text-muted">Hover over the cards to explore our deep-dive consulting methodologies.</p>
        </div>

        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            {
              t: "Lean Strategy Consulting",
              icon: <Target />,
              d: "High-level organizational redesign to align your physical operations with digital strategy.",
              backTitle: "Strategic Impact",
              points: ["Value Stream Mapping", "Lead Time Reduction", "Waste (Muda) Audit", "Bottleneck Analysis"]
            },
            {
              t: "Six Sigma Optimization",
              icon: <BarChart3 />,
              d: "Statistical variance reduction to ensure 99.9% quality consistency across production lines.",
              backTitle: "Operational Excellence",
              points: ["DMAIC Implementation", "Statistical Process Control", "Defect Reduction (PPM)", "Root Cause Analysis"]
            },
            {
              t: "Agile Transformation",
              icon: <Zap />,
              d: "Modernizing corporate governance to respond faster to market shifts and customer demands.",
              backTitle: "Business Agility",
              points: ["Scrum for Operations", "Rapid Prototyping", "Adaptive Governance", "Organizational Scaling"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.d}
                  </p>
                  <div className="mt-8 text-brandOrange font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Hover to Flip <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-8 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6 text-center">{service.backTitle}</h3>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-200">
                        <CheckCircle size={16} className="text-brandOrange mt-1 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(service.t)} className="btn-primary mt-8 border border-white/20 w-full">
                    Get Full Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Industry Focus</h2>
              <p className="text-brandGreen font-medium">We deliver specialized Lean frameworks tailored to the unique regulatory and operational demands of your sector.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter">/ AREA OF OPERATIONS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Advanced Manufacturing", icon: "🏭", desc: "Automotive, Aerospace, and heavy machinery optimization." },
              { title: "Healthcare Systems", icon: "🏥", desc: "Patient flow optimization and clinical waste reduction." },
              { title: "Logistics & Supply Chain", icon: "🚚", desc: "Warehouse efficiency and lead-time synchronization." },
              { title: "Financial Services", icon: "⚖️", desc: "Lean Office & transactional process streamlining." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-textmain hover:text-white transition-all duration-500 group text-center md:text-left">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- 6. PHILOSOPHY SECTION --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Added overflow-hidden to prevent anything from spilling out */}
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Core Philosophy: <br /><span className="text-brandOrange">The 5 Lean Pillars</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Identify Value", d: "Specify what creates value from the customer's perspective." },
                    { p: "Map Value Stream", d: "Identify all steps in the value stream and eliminate waste." },
                    { p: "Create Flow", d: "Make the value-creating steps occur in tight sequence." },
                    { p: "Establish Pull", d: "As flow is introduced, customers pull value from the next activity." },
                    { p: "Seek Perfection", d: "The process of continuous improvement (Kaizen)." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs flex-shrink-0">{i + 1}</span>
                      <div>
                        <h5 className="font-bold text-textmain text-sm">{pillar.p}</h5>
                        <p className="text-xs text-gray-500 mt-1">{pillar.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FIX APPLIED HERE: Added w-full and overflow-hidden to parent, and max-w-[90%] to the orange box */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                  alt="Lean Principles"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Quality means doing it right when no one is looking."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Henry Ford</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Sustainable Transformation</h2>
          <p className="text-muted mb-16">Most Lean initiatives fail after 12 months. We ensure yours lasts a lifetime.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BarChart3 className="text-blue-600" />, t: "Culture First", d: "We train your internal teams to become 'Lean Champions' so you don't depend on consultants forever." },
              { icon: <Target className="text-green-600" />, t: "Scalable Frameworks", d: "Our solutions are modular. We start with a pilot project and scale once ROI is proven." },
              { icon: <Zap className="text-orange-600" />, t: "Real-Time Dashboards", d: "Track your progress live. No more guessing; see exactly where your savings are coming from." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{risk.icon}</div>
                <h4 className="font-bold mb-3">{risk.t}</h4>
                <p className="text-sm text-gray-500 max-w-[250px]">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Managing Crisis. <br />Start Engineering Excellence.</h2>
          <p className="text-muted !text-gray-400 mb-12">Every day of delay is a day of lost margin. Partner with experts who understand the nuances of enterprise scaling.</p>

          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            <button onClick={() => openModal("Strategy Call")} className="btn-primary">
              Request Strategy Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}