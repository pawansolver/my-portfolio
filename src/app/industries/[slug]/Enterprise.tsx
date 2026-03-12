"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Building2, Share2, Layers, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function EnterprisePage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="Enterprise Business Hub"
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
            Digital Resilience <br />
            <span className="text-gray-300">At Corporate Scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We transform rigid legacy systems into agile enterprise ecosystems. From seamless
            ERP integrations to secure private cloud infrastructures, we build the
            backbone that allows global corporations to pivot and scale without friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Enterprise Audit")} className="btn-inverse">
              Audit Our Infrastructure
            </button>
            <button onClick={() => openModal("Consult Architect")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to Enterprise Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Weight of <br />Legacy Architecture</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                In the enterprise world, technical debt is a silent margin killer. Siloed
                data and aging monolithic systems prevent rapid innovation and
                create massive operational vulnerabilities.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Data Fragmentation", d: "Siloed business units with disconnected data sets preventing real-time decision making." },
                  { t: "Monolithic Bottlenecks", d: "Slow deployment cycles and fragile codebases that make small updates a high-risk event." },
                  { t: "Security Exposure", d: "Legacy vulnerabilities and unpatched internal tools creating targets for sophisticated attacks." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Layers className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Connected Enterprise</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our architecture utilizes <strong>Event-Driven Microservices</strong> to
                  ensure your different business functions communicate instantly
                  and securely, allowing for total organizational agility.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of Enterprise Architecture Diagram]

                </div>

                <ul className="space-y-4">
                  {["Unified API Gateway", "Multi-Cloud Strategy", "Zero-Trust Security", "Real-time ERP Sync"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Modernization Roadmap")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Transformation Guide <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom text-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Enterprise Benchmarks</h2>
            <p className="text-muted !text-gray-300">We optimize for high availability, security, and long-term ROI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "60%", l: "Deployment Speed", d: "Faster release cycles through CI/CD automation." },
              { v: "0ms", l: "Data Latency", d: "Near-instant sync between global business units." },
              { v: "99.99%", l: "SLA Guaranteed", d: "Built for mission-critical uptime requirements." }
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
          <h2 className="heading-xl">Enterprise Competencies</h2>
          <p className="text-muted">High-impact engineering designed for the complex modern corporation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Legacy Modernization",
              icon: <Layers />,
              d: "De-risking the transition from old monoliths to modern, cloud-native architectures.",
              backTitle: "Future-Proof Core",
              points: ["Code Refactoring", "Database Migration", "Cloud-Native Shift", "Modular Redesign"]
            },
            {
              t: "System Integration",
              icon: <Share2 />,
              d: "Connecting SAP, Oracle, and custom tools into a unified, high-speed data ecosystem.",
              backTitle: "Total Connectivity",
              points: ["Custom Connectors", "Middleware Design", "Data Orchestration", "API Strategy"]
            },
            {
              t: "Private Cloud Ops",
              icon: <Building2 />,
              d: "Custom-built internal cloud platforms that offer the power of AWS with total data control.",
              backTitle: "Secure Scaling",
              points: ["Hybrid Cloud Setup", "Kubernetes Clusters", "Identity Management", "Data Sovereignty"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">

                {/* FRONT */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.d}</p>
                  <div className="mt-8 text-brandOrange font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Hover to Flip <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK */}
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
                    Get System Audit
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
              <h2 className="heading-xl md:text-left !mb-4">Enterprise Focus</h2>
              <p className="text-brandGreen font-medium">We deliver specialized tech strategies for complex industrial and administrative organizations.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ CORPORATE REACH</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Manufacturing", icon: "🏭", desc: "IIoT and supply chain integration for large-scale production." },
              { title: "Public Sector", icon: "🏛️", desc: "Secure, transparent digital governance for institutions." },
              { title: "Logistics Hubs", icon: "✈️", desc: "Automated warehouse and fleet management at scale." },
              { title: "Energy & Utilities", icon: "⚡", desc: "Smart grid tech and resilient utility management software." }
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

      {/* --- 6. PHILOSOPHY SECTION (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Philosophy: <br /><span className="text-brandOrange">Systemic Agility</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Zero-Trust Architecture", d: "Securing every request, every time, regardless of origin." },
                    { p: "Continuous Innovation", d: "Building systems that allow for small, safe, frequent updates." },
                    { p: "Data Democratization", d: "Making high-level insights available to every stakeholder." },
                    { p: "Resource Efficiency", d: "Optimizing cloud spend and local server utilization." },
                    { p: "Institutional Resilience", d: "Systems that can withstand global outages and cyber threats." }
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                  alt="Enterprise Architecture"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:-rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Agility is the only competitive advantage."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Enterprise Excellence Motto</span>
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
          <h2 className="heading-xl">Corporate Continuity</h2>
          <p className="text-muted mb-16">The world's largest enterprises rely on systems that never fail. We build those systems.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Failover Clusters", d: "Automatic switching to backup systems with zero data loss." },
              { icon: <Building2 className="text-green-600" />, t: "Scalability Testing", d: "Ensuring systems can handle 10x normal load during mergers." },
              { icon: <Layers className="text-orange-600" />, t: "Regulatory Compliance", d: "Automated auditing for GDPR, SOX, and local standards." }
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
          <h2 className="heading-xl !text-white !mb-8">Stop Managing Legacy. <br />Start Engineering Growth.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Partner with enterprise architects who understand the complexities of global corporate scaling.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Enterprise Strategy Call")} className="btn-inverse">
              Modernize My Systems
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}