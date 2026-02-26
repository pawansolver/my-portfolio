"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Briefcase, BarChart, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext"; 

export default function HRMSPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION (Mirror Layout) --- */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
          alt="Modern Workplace Culture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl container-custom">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Workforce Engineering Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Human-Centric <br />
            <span className="text-gray-300">Workforce Ecosystems.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We build intelligent HRMS platforms that manage the entire employee lifecycle. 
            From automated payroll to AI-driven performance tracking, we engineer the 
            tools that empower your people and streamline your operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("HRMS Audit")} className="btn-primary">
              Audit My HR Stack
            </button>
            <button onClick={() => openModal("HR Consultation")} className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to HR Tech Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES (Mirror Layout) --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl !text-left !mb-6">The Friction of <br />Manual People Ops</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed">
                Disconnected HR tools lead to massive data silos and payroll errors. 
                Modern organizations need a unified system that automates the 
                mundane to focus on the most important asset: People.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Payroll Inaccuracies", d: "Manual calculations and fragmented data causing compliance risks and employee friction." },
                  { t: "Talent Leakage", d: "Lack of engagement tracking and career pathing leading to high turnover rates." },
                  { t: "Compliance Gaps", d: "Difficulty in managing diverse labor laws and data privacy across global regions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Users className="text-brandOrange w-6 h-6" /></div>
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
              <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Integrated HR Core</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  Our architecture utilizes <strong>Unified Data Layers</strong> to 
                  synchronize recruitment, payroll, and performance, ensuring 
                  total organizational transparency and error-free operations.
                </p>
                
                <div className="my-6 text-center text-gray-400 italic">
                
                </div>

                <ul className="space-y-4">
                  {["Automated Payroll Engine", "AI Talent Matching", "Global Compliance Guard", "Self-Service Employee Portals"].map((list, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5" /> {list}
                    </li>
                  ))}
                </ul>
                <button onClick={() => openModal("HRMS Framework")} className="mt-10 text-brandOrange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Download HR Tech Roadmap <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS (Mirror Layout) --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom text-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">HR Excellence Metrics</h2>
            <p className="text-gray-400">We engineer platforms that maximize human potential and minimize cost.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "70%", l: "Time Saved", d: "Reduction in manual admin tasks through automation." },
              { v: "0%", l: "Payroll Errors", d: "Achieved via intelligent automated audit cycles." },
              { v: "25%", l: "Retention Lift", d: "Improvement in employee satisfaction scores." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={i}>
                <h3 className="text-6xl font-bold text-brandOrange mb-4">{stat.v}</h3>
                <p className="text-xl font-bold mb-2">{stat.l}</p>
                <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{stat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES (Flip Cards - Mirror Layout) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">HR Tech Competencies</h2>
          <p className="text-muted">Building the foundation for a more productive and engaged workforce.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            { 
              t: "Payroll & Benefits", 
              icon: <Briefcase />,
              d: "Developing secure, automated systems for multi-currency payroll and complex benefit plans.",
              backTitle: "Fiscal Precision",
              points: ["Tax Compliance", "Direct Deposit Integration", "Benefits Admin", "Expense Management"]
            },
            { 
              t: "Talent Management", 
              icon: <Users />,
              d: "End-to-end recruitment and onboarding modules powered by predictive AI matching.",
              backTitle: "Growth Engine",
              points: ["ATS Integration", "Structured Onboarding", "Skill Gap Analysis", "Culture Tracking"]
            },
            { 
              t: "HR Intelligence", 
              icon: <BarChart />,
              d: "Real-time dashboards for workforce planning, turnover prediction, and diversity metrics.",
              backTitle: "Insightful Culture",
              points: ["Predictive Analytics", "Engagement Surveys", "EEO Reporting", "Succession Planning"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">
                
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.d}</p>
                  <div className="mt-8 text-brandOrange font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Hover to Flip <ArrowRight size={14} />
                  </div>
                </div>

                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6">{service.backTitle}</h3>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-light text-gray-200">
                        <CheckCircle size={16} className="text-brandOrange" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(service.t)} className="mt-8 bg-white/10 hover:bg-brandOrange text-white text-xs font-bold py-3 px-6 rounded-xl transition-colors border border-white/20">
                    Get System Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION (Mirror Layout) --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="heading-xl !text-left !mb-4">HRMS Domains</h2>
              <p className="text-brandGreen font-medium">We deliver specialized frameworks for every organizational structure, from remote startups to global corps.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter">/ INDUSTRY FOCUS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Remote-First", icon: "🌐", desc: "Tools for asynchronous work and global compliance." },
              { title: "Enterprise HR", icon: "🏢", desc: "Complex hierarchy management and robust reporting." },
              { title: "Gig Platforms", icon: "🚲", desc: "Contractor management and instant payout systems." },
              { title: "SMB Solutions", icon: "🌱", desc: "Lightweight, easy-to-use platforms for growing teams." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-textmain hover:text-white transition-all duration-500 group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. PHILOSOPHY SECTION (Mirror Layout) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-inner border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-textmain leading-tight">Our Philosophy: <br /><span className="text-brandOrange">Human Capital ROI</span></h2>
                <div className="text-gray-400 italic text-sm">
                
                </div>
                <div className="space-y-6">
                  {[
                    { p: "Transparency First", d: "Providing employees with clear access to their own data." },
                    { p: "Privacy by Design", d: "Ensuring personal sensitive data is encrypted and secure." },
                    { p: "Integration DNA", d: "Connecting seamlessly with Slack, Jira, and accounting tools." },
                    { p: "Mobile Empowerment", d: "HR tools that work wherever your employees are." },
                    { p: "Fairness Engineering", d: "AI modules designed to remove bias from hiring and reviews." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs">{i + 1}</span>
                      <div>
                        <h5 className="font-bold text-textmain text-sm">{pillar.p}</h5>
                        <p className="text-xs text-gray-500">{pillar.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto h-full min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" 
                  alt="Workplace Technology" 
                  fill 
                  className="rounded-3xl object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-brandOrange text-white p-6 rounded-2xl shadow-2xl rotate-3 text-center">
                      <p className="text-2xl font-black italic">"Tech should serve people, not the other way around."</p>
                      <span className="text-xs mt-2 block opacity-80">— HR Tech Excellence Motto</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION (Mirror Layout) --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Secure Workforce Operations</h2>
          <p className="text-muted mb-16">Data integrity and security are at the heart of our HRMS platforms.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Instant Sync", d: "Real-time updates across payroll, attendance, and leave management." },
              { icon: <CheckCircle className="text-green-600" />, t: "Audit Trails", d: "Complete logs for every data change to ensure accountability." },
              { icon: <Users className="text-orange-600" />, t: "Access Control", d: "Granular permission layers to protect sensitive employee info." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{risk.icon}</div>
                <h4 className="font-bold mb-3">{risk.t}</h4>
                <p className="text-sm text-gray-500">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA (Mirror Layout) --- */}
      <section className="section-padding bg-textmain text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Build a Smarter <br />Workforce Today.</h2>
          <p className="text-muted !text-gray-400 mb-12">Stop struggling with manual spreadsheets. Scale your culture with a powerful HRMS platform.</p>

          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            <button onClick={() => openModal("HRMS Strategy Call")} className="btn-primary">
              Build My HRMS
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}