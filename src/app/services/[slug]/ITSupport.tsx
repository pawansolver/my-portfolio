"use client";

import { motion } from "framer-motion";
import {
  Headset,
  ShieldCheck,
  CloudCog,
  Network,
  Database,
  Laptop,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock
} from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function ITSupportPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"
          alt="IT Support Center"
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
            Your IT Team On Demand. <br />
            <span className="text-gray-300">Unlimited Stability.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We transform reactive IT into a proactive growth engine. From 24/7 helpdesk support
            to complex cloud administration, we manage your infrastructure so you can
            focus exclusively on scaling your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Free IT Audit")} className="btn-primary">
              Get Free IT Audit
            </button>
            <button onClick={() => openModal("Expert Consultation")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Hidden Cost <br />of Downtime</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                A single hour of technical failure costs the average SME over $10,000.
                Reactive "break-fix" IT is no longer a sustainable strategy in a
                digital-first economy.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Security Vulnerabilities", d: "Unpatched systems and lack of employee training leading to ransomware risks." },
                  { t: "Operational Friction", d: "Slow hardware and fragmented software reducing team productivity by up to 20%." },
                  { t: "Scalability Roadblocks", d: "Legacy infrastructure that can't support rapid headcount or office expansion." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><ShieldCheck className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Our Support Framework</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We implement a structured <strong>Managed Services Provider (MSP)</strong>
                  model ensuring zero-gap coverage from the endpoint to the cloud.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of IT Support Lifecycle diagram]

                </div>

                <ul className="space-y-4">
                  {["24/7 Proactive Monitoring", "First-Contact Resolution", "Automated Patch Management", "Immutable Cloud Backups"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Service Catalog")} className="btn-primary mt-10 flex items-center gap-2">
                    Download SLA Details <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Support Intelligence</h2>
            <p className="text-muted !text-gray-300">Our performance is measured by your uptime and business continuity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "15m", l: "Average Response Time", d: "Human response for all critical tickets." },
              { v: "99.9%", l: "System Uptime", d: "Guaranteed availability for managed networks." },
              { v: "98%", l: "Resolution Rate", d: "First-contact resolution for helpdesk issues." }
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
          <h2 className="heading-xl">Strategic Competencies</h2>
          <p className="text-muted">Managed solutions designed for high-velocity enterprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Managed Security",
              icon: <Lock />,
              d: "Multi-layered defense including EDR, phishing protection, and active threat hunting.",
              backTitle: "Security Stack",
              points: ["Endpoint Protection", "Phishing Defense", "VPC Security", "Compliance Audits"]
            },
            {
              t: "Cloud Administration",
              icon: <CloudCog />,
              d: "Full-scale management of Microsoft 365, Google Workspace, and Azure environments.",
              backTitle: "Cloud Governance",
              points: ["Identity Management", "Cloud Backup", "License Optimization", "Security Policies"]
            },
            {
              t: "Network Operations",
              icon: <Network />,
              d: "Designing secure, high-speed Wi-Fi and office networking with SD-WAN technology.",
              backTitle: "Connectivity",
              points: ["VPN Configuration", "Wi-Fi Mapping", "SD-WAN Implementation", "Firewall Mgmt"]
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
                    Hover to Explore <ArrowRight size={14} />
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
                    Get Service SLA
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
              <h2 className="heading-xl md:text-left !mb-4">Industry Verticals</h2>
              <p className="text-brandGreen font-medium">Compliance-driven IT support tailored to the unique regulatory demands of your industry.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ AREA OF SUPPORT</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Law Firms", icon: "⚖️", desc: "Document management security and secure client portals." },
              { title: "Healthcare", icon: "🏥", desc: "HIPAA-compliant hosting and clinical system support." },
              { title: "Finance", icon: "💰", desc: "Multi-factor authentication and data encryption standards." },
              { title: "Logistics", icon: "🚛", desc: "24/7 warehouse connectivity and mobile device management." }
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

      {/* --- 6. PHILOSOPHY (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Onboarding: <br /><span className="text-brandOrange">The 4-Step Journey</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Tech Audit", d: "Evaluating hardware, software, and critical security gaps." },
                    { p: "Stabilization", d: "Standardizing systems to prevent future downtime events." },
                    { p: "Active Support", d: "24/7 helpdesk goes live with proactive monitoring." },
                    { p: "Optimization", d: "Quarterly reviews to upgrade tech and reduce costs." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 items-center md:items-start text-left">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs flex-shrink-0">0{i + 1}</span>
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                  alt="IT Strategy"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:-rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Technology should work for people, not the other way around."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— IT Excellence Principle</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. DATA PROTECTION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Business Continuity</h2>
          <p className="text-muted mb-16">Hardware fails. Ransomware happens. We ensure your data is always recoverable.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Database className="text-blue-600" />, t: "Immutable Backups", d: "Data stored in encrypted off-site vaults that cannot be deleted by hackers." },
              { icon: <Zap className="text-green-600" />, t: "Rapid Failover", d: "Switch to backup systems in minutes, not days, during a server failure." },
              { icon: <ShieldCheck className="text-orange-600" />, t: "Security Training", d: "We train your staff to recognize phishing before it enters your network." }
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
          <h2 className="heading-xl !text-white !mb-8">Stop Managing Crisis. <br />Start Scaling Success.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Every tech headache is a distraction from your mission. Partner with a team that treats your uptime as our top priority.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("IT Strategy Call")} className="btn-primary">
              Request Free Site Audit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}