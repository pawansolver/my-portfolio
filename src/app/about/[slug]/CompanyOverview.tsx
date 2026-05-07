"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, History, Globe, Zap, Target, Layers, Cpu, Factory, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function CompanyOverviewPage() {
  const { openModal } = useModal();

  const journeySteps = [
    {
      year: "25th Sep 2020",
      title: "The Beginning",
      desc: "Founded with a vision to help Indian MSMEs embrace technology as a growth engine. We identified a gap for affordable, scalable, and intelligent solutions.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Building Resilience",
      desc: "Developed scalable ERP solutions during uncertain times, focusing on operational visibility and data-driven resilience for growing companies.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Expanding Transformation",
      desc: "Moved beyond traditional software into Lean Manufacturing consultancy, HRMS, and Transport Management, bridging strategy with technology.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Era of Industry 4.0",
      desc: "Aligned with Industry 4.0 principles. Built Smart Factory concepts, real-time monitoring, and AI-based decision-making tools.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      year: "2024 & Beyond",
      title: "Innovation-Driven Growth",
      desc: "Integrating AI, Machine Learning, and IoT to empower MSMEs. Strengthening our presence from Patna and Hyderabad to the world.",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div suppressHydrationWarning className="bg-white text-textmain overflow-x-hidden w-full max-w-[100vw] font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section pt-navbar relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center text-white px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/it-consulting.png"
            alt="Industry 4.0 Transformation"
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
            NIGHWAN TECHNOLOGY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-6 md:!mb-8 leading-[1.15] md:leading-tight break-words"
          >
            From Vision to <br />
            <span className="text-brandOrange">Industry 4.0.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10 w-full px-2 sm:px-0 max-w-3xl mx-auto"
          >
            Helping Indian businesses, MSMEs, and industries embrace technology not just as software—but as a growth engine for transformation and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
          >
            <button onClick={() => openModal("Journey Inquiry")} className="btn-inverse">
              Partner With Us
            </button>
            <button onClick={() => openModal("Our Story Video")} className="btn-inverse">
              Explore Our Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. OUR JOURNEY (Timeline) --- */}
      <section className="section-padding bg-gray-50 px-5 sm:px-6 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-brandGreen font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Evolution</span>
            <h2 className="heading-xl">The Journey of Nighwan</h2>
            <p className="text-muted">A timeline of how we moved from a simple vision in 2020 to becoming a leader in Industrial Transformation.</p>
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative group hover:border-brandOrange transition-all duration-500">
                      <span className="text-brandOrange font-bold text-sm mb-2 block">{step.year}</span>
                      <h3 className="text-xl md:text-2xl font-black text-textmain mb-4">{step.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Circle Icon in Middle */}
                  <div className="absolute left-1/2 top-0 md:top-1/2 w-12 h-12 bg-textmain text-brandOrange rounded-full border-4 border-white shadow-lg z-10 -translate-x-1/2 md:-translate-y-1/2 hidden md:flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MISSION & CORE FOCUS --- */}
      <section className="section-padding bg-white px-5 sm:px-6">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image
              src="/images/software-dev.png"
              alt="Industrial Transformation"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brandGreen/20 mix-blend-multiply" />
          </div>

          <div className="text-left">
            <span className="text-brandOrange font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Building the Future</span>
            <h2 className="heading-xl !text-left !mb-6">Empowering MSMEs through Transformation</h2>
            <p className="text-muted !text-left !mx-0 !mb-8">
              We realized early on that businesses don't just need software; they need transformation. This shaped our approach: combining operational consulting with intelligent digital systems to bridge strategy, productivity, and technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Industry 4.0", d: "Smart Factory concepts and real-time monitoring.", icon: <Cpu size={20} /> },
                { t: "Lean Methodology", d: "5S, Kaizen, and Value Stream Mapping integration.", icon: <TrendingUp size={20} /> },
                { t: "Scalable ERP", d: "Systems built specifically for MSME realities.", icon: <Layers size={20} /> },
                { t: "AI & Analytics", d: "Turning raw data into cognitive decision-making.", icon: <Zap size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-brandOrange flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-textmain text-sm uppercase tracking-wider">{item.t}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => openModal("Transformation Roadmap")} className="btn-primary mt-12">
              Our Methodology <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. CORE SOLUTIONS (Capabilities) --- */}
      <section className="section-padding bg-textmain text-white px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/carbon-fibre.png")' }} />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Intelligent Operational Ecosystems</h2>
            <p className="text-muted !text-gray-300">Our suite of Industry 4.0 and automation tools designed for the modern industrial era.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Smart Manufacturing", d: "Production analytics, digital workflows, and IoT integration for zero-waste factory floors.", icon: <Factory /> },
              { t: "ERP & Automation", d: "Bespoke business ecosystems including HRMS, TMS, and Inventory Management.", icon: <Layers /> },
              { t: "Operational Intelligence", d: "Dashboards and predictive analytics to turn operational chaos into clarity.", icon: <TrendingUp /> }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 bg-brandOrange/20 text-brandOrange rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.t}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">{service.d}</p>
                <button onClick={() => openModal(service.t)} className="flex items-center gap-2 text-brandOrange font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  Explore Solution <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. GLOBAL & LOCAL PRESENCE --- */}
      <section className="section-padding bg-white px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brandGreen font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Presence</span>
              <h2 className="heading-xl md:text-left">From Bihar to the <br />Global Market</h2>
              <p className="text-muted md:text-left !mx-0 mb-8">
                Operating with a growing vision from Patna, Bihar and Hyderabad, Telangana, our journey reflects the rise of technology innovation emerging from India’s growing startup ecosystem.
              </p>
              
              <div className="space-y-6">
                {[
                  { city: "Patna, Bihar", role: "Operational HQ & R&D Hub" },
                  { city: "Hyderabad, Telangana", role: "Technology Innovation Center" },
                  { city: "Global Outreach", role: "Supporting Businesses Across India & Beyond" }
                ].map((loc, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl border border-slate-100 hover:border-brandOrange transition-colors">
                    <Globe className="text-brandOrange" />
                    <div>
                      <h4 className="font-bold text-textmain">{loc.city}</h4>
                      <p className="text-xs text-gray-500">{loc.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-black text-textmain mb-6">Our Future Outlook</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe the future belongs to organizations that are connected, intelligent, data-driven, and operationally agile. Our mission is to help businesses build exactly that future.
              </p>
              <ul className="space-y-4">
                {[
                  "Smart Manufacturing Ecosystems",
                  "AI-Powered Enterprise Platforms",
                  "Scalable Digital Infrastructure",
                  "Industry 4.0 Transformation"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center font-bold text-textmain text-sm">
                    <CheckCircle size={18} className="text-brandOrange" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => openModal("Connect Sales")} className="btn-primary mt-10 w-full">
                Join the Transformation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative px-4 sm:px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/carbon-fibre.png")' }} />
        <div className="container-custom flex flex-col items-center text-center relative z-10 py-8 md:py-12 w-full">
          <h2 className="heading-xl !text-white !mb-6 md:!mb-8">Building Smarter Businesses, <br />Stronger Industries.</h2>
          <p className="text-muted !text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-2 leading-relaxed">
            Ready to transition into a digitally empowered organization? Let's talk about your transformation.
          </p>

          <div className="flex justify-center items-center w-full max-w-sm mx-auto">
            <button onClick={() => openModal("Connect with Us")} className="btn-inverse">
              Let's Talk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
