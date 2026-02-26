"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, UserCheck, Award, Target, Zap, Shield, Rocket, Users } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext"; 

export default function LeadershipPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION (Mirror Layout) --- */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
          alt="Leadership Team"
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
            Visionaries Behind the Code
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Leadership with <br />
            <span className="text-gray-300">Technical Integrity.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Our leadership team isn't just sitting in boardrooms—they are veteran engineers 
            and strategists. We lead by example, ensuring that every project adheres 
            to the highest standards of architectural excellence and business value.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Leadership Bio")} className="btn-primary">
              View Exec Team
            </button>
            <button onClick={() => openModal("Strategy Meeting")} className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-black">
              Meet Our Founders
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. LEADERSHIP PRINCIPLES (Mirror Layout) --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl !text-left !mb-6">Guided by <br />Expertise & Ethics</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed">
                Great technology requires great direction. Our leadership ensures 
                that we don't just build what is requested, but what is right for 
                your long-term scalability and market dominance.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Engineering First", d: "A management style rooted in deep technical understanding, not just business metrics." },
                  { t: "Radical Transparency", d: "Maintaining open communication channels between stakeholders and our core teams." },
                  { t: "Sustainable Growth", d: "Prioritizing stable, long-term architectural health over quick, fragile wins." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Target className="text-brandOrange w-6 h-6" /></div>
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
                <h3 className="text-2xl font-bold mb-6">Decision Framework</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  Our leaders follow a <strong>Value-Driven Governance</strong> model. 
                  Every roadmap decision is filtered through security, scalability, 
                  and your specific commercial objectives.
                </p>
                
                <div className="my-6 text-center text-gray-400 italic">
                
                </div>

                <ul className="space-y-4">
                  {["Agile Executive Oversight", "Direct Partner Involvement", "Cross-Functional Mentorship", "Ethical Tech Advocacy"].map((list, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5" /> {list}
                    </li>
                  ))}
                </ul>
                <button onClick={() => openModal("Advisory Board")} className="mt-10 text-brandOrange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Meet Our Advisory Board <ArrowRight size={18} />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Benchmarks</h2>
            <p className="text-gray-400">Our success is measured by the growth of our partners and our people.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "50+", l: "Years Combined", d: "Experience in high-scale enterprise engineering." },
              { v: "Top 1%", l: "Talent Focus", d: "Ensuring every team lead is a subject matter expert." },
              { v: "100%", l: "Zero-Churn", d: "Unmatched stability in our core executive leadership." }
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

      {/* --- 4. CORE SERVICES (Flip Cards - Mirror Layout) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Strategic Oversight</h2>
          <p className="text-muted">Directing your project with surgical precision and deep domain knowledge.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            { 
              t: "Product Vision", 
              icon: <Zap />,
              d: "Translating business goals into a technical reality that captures market share.",
              backTitle: "Strategy Design",
              points: ["Market Analysis", "Feature Prioritization", "Tech Feasibility", "ROI Projections"]
            },
            { 
              t: "Quality Control", 
              icon: <Award />,
              d: "Executive-level code reviews and architectural audits to ensure zero technical debt.",
              backTitle: "Standardization",
              points: ["Code Quality KPI", "Security Standards", "Performance Audits", "Continuous Review"]
            },
            { 
              t: "Talent Curation", 
              icon: <UserCheck />,
              d: "Ensuring only the most specialized engineers are assigned to your mission-critical tasks.",
              backTitle: "Human Capital",
              points: ["Domain Matching", "Skill Assessment", "Internal Training", "Team Cohesion"]
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
                    Get Team Insight
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. DOMAIN EXPERTISE (Mirror: Previous Pages) --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="heading-xl !text-left !mb-4">Leadership Domains</h2>
              <p className="text-brandGreen font-medium">Our directors come from world-class backgrounds in diverse high-stakes technology sectors.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter">/ EXECUTIVE REACH</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Fintech Ops", icon: "💳", desc: "Expertise in secure banking and payment infrastructure." },
              { title: "SaaS Scaling", icon: "☁️", desc: "Specializing in hyper-growth architecture for startups." },
              { title: "Cyber Security", icon: "🛡️", desc: "Leading the charge in zero-trust and data protection." },
              { title: "AI & Data", icon: "🤖", desc: "Integrating intelligent systems into legacy workflows." }
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
                <h2 className="text-3xl md:text-4xl font-bold text-textmain leading-tight">Our Ethos: <br /><span className="text-brandOrange">Systemic Integrity</span></h2>
                <div className="text-gray-400 italic text-sm">
                
                </div>
                <div className="space-y-6">
                  {[
                    { p: "Code Sovereignty", d: "We take full ownership of the quality of our team's output." },
                    { p: "Future-Proofing", d: "Every leadership decision is made with 5-year scaling in mind." },
                    { p: "Empathetic Tech", d: "Building systems that solve real human and business problems." },
                    { p: "Global Standards", d: "Adhering to international security and deployment protocols." },
                    { p: "Direct Accountability", d: "Our leaders are accessible and answerable to every client." }
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
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
                  alt="Boardroom Collaboration" 
                  fill 
                  className="rounded-3xl object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-brandOrange text-white p-6 rounded-2xl shadow-2xl -rotate-3 text-center">
                      <p className="text-2xl font-black italic">"Agility is a leadership trait, not just a process."</p>
                      <span className="text-xs mt-2 block opacity-80">— Leadership Motto</span>
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
          <h2 className="heading-xl">Executive Assurance</h2>
          <p className="text-muted mb-16">The world's largest enterprises rely on systems that never fail. We build those systems.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="text-blue-600" />, t: "Risk Compliance", d: "Ensuring all projects meet global regulatory and legal standards." },
              { icon: <Users className="text-green-600" />, t: "Stakeholder Sync", d: "Strategic alignment between your goals and our execution." },
              { icon: <Rocket className="text-orange-600" />, t: "Velocity Control", d: "Maintaining high speed without sacrificing technical quality." }
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
          <h2 className="heading-xl !text-white !mb-8">Experience Leadership <br />That Delivers Results.</h2>
          <p className="text-muted !text-gray-400 mb-12">Connect directly with our leadership to discuss your vision and scaling challenges.</p>

          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            <button onClick={() => openModal("Exec Strategy Call")} className="btn-primary">
              Consult with Leadership
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}