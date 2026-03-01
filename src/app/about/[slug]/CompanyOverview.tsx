"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Building, Rocket, History, Globe, Zap, Target, Layers } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function CompanyOverviewPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069"
          alt="Company Global Hub"
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
            Engineering Excellence Since Day One
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Architecting the <br />
            <span className="text-gray-300">Digital Frontier.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We are more than a software house; we are a strategic engineering partner.
            We help ambitious companies navigate the complex landscape of modern
            technology through rigorous design, lean code, and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Company Deck")} className="btn-primary">
              Download Profile
            </button>
            <button onClick={() => openModal("Office Tour")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Virtual Office Tour
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS PHILOSOPHY --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Built on Trust <br />and Innovation</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed text-center md:text-left">
                Starting from a small team of passionate engineers, we have grown
                into a global force that solves the world's most complex technical
                bottlenecks with precision and speed.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Global Footprint", d: "Serving clients across 4 continents with a distributed team of elite specialists." },
                  { t: "Elite Talent Pool", d: "A rigorous hiring process that ensures we only work with the top 1% of engineering talent." },
                  { t: "R&D Dedication", d: "Investing 20% of our resources into emerging tech like AI and Edge Computing." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                    <div className="mt-1 flex-shrink-0"><Rocket className="text-brandOrange w-6 h-6" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Operational Core</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We operate with a <strong>Lean-Agile mindset</strong>. This ensures
                  that our overhead is low, our speed is high, and our clients
                  always get direct access to the engineers.
                </p>
                <ul className="space-y-4">
                  {["24/7 Managed Support", "ISO 27001 Certified", "Cloud-Native DNA", "DevOps-First Culture"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("History PDF")} className="btn-primary mt-10 flex items-center gap-2">
                    Read Our Full Story <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Our Track Record</h2>
            <p className="text-muted !text-gray-300">Consistency and scale are the hallmarks of our journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "250+", l: "Projects Delivered", d: "Successful launches across diverse global industries." },
              { v: "15+", l: "Countries Served", d: "Operating as a truly borderless technology partner." },
              { v: "95%", l: "Client Retention", d: "Testament to our long-term partnership philosophy." }
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

      {/* --- 4. CAPABILITIES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Core Competencies</h2>
          <p className="text-muted">A comprehensive tech stack to solve every business challenge.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Product Engineering",
              icon: <Layers />,
              d: "Full-cycle development from ideation to deployment with a focus on speed.",
              backTitle: "Build Phase",
              points: ["Mobile & Web", "Custom ERP/CRM", "API Design", "SaaS Development"]
            },
            {
              t: "Strategic Consulting",
              icon: <Globe />,
              d: "Helping CEOs and CTOs align their technology roadmap with business goals.",
              backTitle: "Strategy Phase",
              points: ["Infrastructure Audit", "Tech Debt Analysis", "Scaling Strategy", "Cloud Migration"]
            },
            {
              t: "Managed Services",
              icon: <History />,
              d: "Reliable, long-term maintenance and monitoring for high-availability systems.",
              backTitle: "Maintain Phase",
              points: ["24/7 Monitoring", "Security Patching", "Server Optimization", "SLA Management"]
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
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. GLOBAL PRESENCE --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Global Reach</h2>
              <p className="text-brandGreen font-medium">Our distributed model allows us to leverage world-class talent and provide follow-the-sun support.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ OUR GEOGRAPHY</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "North America", icon: "🇺🇸", desc: "Strategic headquarters and sales operations." },
              { title: "Europe", icon: "🇪🇺", desc: "Specialized engineering hubs and R&D centers." },
              { title: "Asia Pacific", icon: "🌏", desc: "Rapid delivery centers and 24/7 support labs." },
              { title: "Middle East", icon: "🏙️", desc: "Focusing on emerging tech and smart city solutions." }
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

      {/* --- 6. CORPORATE PHILOSOPHY (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Ethos: <br /><span className="text-brandOrange">Quality Over Noise</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Code Integrity", d: "We believe in writing software that is maintainable for years." },
                    { p: "Client Obsession", d: "Your business metrics are the only KPIs that matter to us." },
                    { p: "Iterative Learning", d: "A culture of continuous improvement and knowledge sharing." },
                    { p: "Ethical Engineering", d: "Prioritizing security and privacy in every build." },
                    { p: "Radical Candor", d: "Honest feedback to ensure the best possible technical outcomes." }
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Team Collaboration"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:-rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Great engineering is invisible."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Operational Motto</span>
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
          <h2 className="heading-xl">Sustainable Partnerships</h2>
          <p className="text-muted mb-16">We build relationships that last as long as the code we write.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Rapid Prototyping", d: "Validating ideas quickly to prevent wasted resources." },
              { icon: <Target className="text-green-600" />, t: "Scalability Testing", d: "Ensuring systems grow seamlessly with your user base." },
              { icon: <History className="text-orange-600" />, t: "Technical Debt Mgmt", d: "Proactively refactoring to keep systems lean and fast." }
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
          <h2 className="heading-xl !text-white !mb-8">Partner with the <br />Future of Engineering.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Let's discuss how our overview matches your specific business goals.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Connect with Us")} className="btn-primary">
              Connect With Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}