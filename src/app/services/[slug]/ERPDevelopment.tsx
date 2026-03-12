"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BarChart3, Target, ShieldCheck, Zap, Database, Settings } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function ERPDevelopmentPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070"
          alt="ERP Systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

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
            Unified Intelligence. <br />
            <span className="text-gray-300">Seamless Operations.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Automate your entire enterprise with custom ERP solutions designed to
            streamline operations and centralize your data. We transform legacy
            workflows into high-velocity digital ecosystems for measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("ERP Development")} className="btn-inverse">
              Request a Demo
            </button>
            <button onClick={() => openModal("ERP Module Catalog")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Module Catalog
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Cost of <br />Data Silos</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Disconnected departments are a financial risk. Manual data entry and
                fragmented software often drain up to 30% of your annual
                operational efficiency and lead to costly errors.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Process Fragmentation", d: "Siloed departments creating redundant touchpoints and data friction." },
                  { t: "Manual OpEx Leaks", d: "Non-automated activities that inflate lead times and overheads." },
                  { t: "Scalability Bottlenecks", d: "Legacy systems that fail to handle increased demand without linear cost increases." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Settings className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Development Framework</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our engagement doesn't just stop at coding. We implement a structured
                  <strong> Lifecycle (Analyze, Arch, Develop, Go-Live)</strong>
                  approach to ensure every module is optimized for maximum throughput.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of ERP Architecture diagram]

                </div>

                <ul className="space-y-4">
                  {["Requirements Analysis", "System Architecture", "Security Hardening", "Seamless Migration"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("ERP Development")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Tech Framework <ArrowRight size={18} />
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
            <p className="text-muted !text-gray-300">Our ERP results are audited, data-backed, and directly linked to your bottom-line growth.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { v: "55%", l: "Efficiency Boost", d: "Increase in workflow speed." },
              { v: "99.9%", l: "Data Accuracy", d: "Reduction in manual errors." },
              { v: "30%", l: "Cost Savings", d: "Reduction in operational overhead." },
              { v: "15+", l: "Modules Deployed", d: "Custom integrated solutions." }
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

      {/* --- 4. SERVICES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Core Competencies</h2>
          <p className="text-muted">Hover over the cards to explore our deep-dive modular ERP capabilities.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Inventory & Supply Chain",
              icon: <Database />,
              d: "Automated tracking of stock levels, procurement, and warehouse management systems.",
              backTitle: "Supply Excellence",
              points: ["Stock Alerts", "Vendor Management", "Barcode Ready", "Real-time Sync"]
            },
            {
              t: "Financial Management",
              icon: <BarChart3 />,
              d: "Integrated accounting modules for payroll, invoicing, and tax compliance automation.",
              backTitle: "Fiscal Control",
              points: ["P&L Statements", "Auto-Invoicing", "Tax Calculation", "Audit Trails"]
            },
            {
              t: "HR & Payroll Systems",
              icon: <Zap />,
              d: "Streamlining employee lifecycle from recruitment to attendance and salary disbursement.",
              backTitle: "People Power",
              points: ["Attendance Tracking", "KPI Analysis", "Employee Portal", "Salary Automation"]
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
                    Get Module Details
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
              <p className="text-brandGreen font-medium">We deliver specialized ERP frameworks tailored to the unique regulatory and operational demands of your sector.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ AREA OF OPERATIONS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Manufacturing", icon: "🏭", desc: "Production planning and heavy machinery optimization." },
              { title: "E-commerce", icon: "🛒", desc: "Multi-channel inventory and order fulfillment." },
              { title: "Construction", icon: "🏗️", desc: "Project costing and resource management." },
              { title: "Supply Chain", icon: "🚚", desc: "Warehouse efficiency and lead-time synchronization." }
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

      {/* --- 6. PHILOSOPHY SECTION (Safe Orange Box) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Core Philosophy: <br /><span className="text-brandOrange">The 5 Data Pillars</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Unified Database", d: "One single source of truth for every department in your company." },
                    { p: "Process Automation", d: "Eliminate manual tasks with smart, trigger-based workflows." },
                    { p: "Real-Time Sync", d: "Instant visibility into sales, inventory, and finance data." },
                    { p: "Modular Growth", d: "Add new features as your business expands without downtime." },
                    { p: "Secure Access", d: "Enterprise-grade encryption with role-based user controls." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 items-center md:items-start text-left">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs flex-shrink-0">{i + 1}</span>
                      <div className="text-center md:text-left">
                        <h5 className="font-bold text-textmain text-sm">{pillar.p}</h5>
                        <p className="text-xs text-gray-500 mt-1">{pillar.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAFE ORANGE BOX */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070"
                  alt="Data Intelligence"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"In God we trust, all others must bring data."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— ERP Philosophy</span>
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
          <h2 className="heading-xl">Strategic Trust</h2>
          <p className="text-muted mb-16">ERP implementations often fail. We ensure yours is a success from day one.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-blue-600" />, t: "Data Security", d: "AES-256 encryption and multi-factor authentication for total protection." },
              { icon: <Target className="text-green-600" />, t: "Scalable Arch", d: "Cloud-based modularity that handles 10x growth effortlessly." },
              { icon: <Zap className="text-orange-600" />, t: "Uptime Guarantee", d: "99.9% system availability with automated daily backups." }
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
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Managing Crisis. <br />Start Engineering Excellence.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Every day of delay is a day of lost margin. Partner with experts who understand enterprise scale.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("ERP Development")} className="btn-inverse">
              Get A Custom Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}