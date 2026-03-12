"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShieldCheck, CreditCard, Landmark, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function FintechPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070"
          alt="Digital Finance Background"
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
            High-Velocity <br />
            <span className="text-gray-300">Financial Ecosystems.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We engineer secure, scalable, and ultra-fast financial platforms. From PCI-compliant
            payment gateways to complex wealth management AI, we build the infrastructure
            that powers the next generation of global capital flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Fintech Audit")} className="btn-inverse">
              Get Security Audit
            </button>
            <button onClick={() => openModal("Fintech Consultation")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to Fintech Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The High Stakes <br />of Digital Money</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                In Fintech, milliseconds mean millions. Security breaches aren't just IT
                issues—they are systemic risks that can collapse user trust and
                invite massive regulatory intervention.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Security Vulnerabilities", d: "Inadequate encryption and API flaws leading to high-frequency fraud and data theft." },
                  { t: "Regulatory Complexity", d: "Staying compliant with ever-evolving KYC, AML, and PCI-DSS global standards." },
                  { t: "Transaction Latency", d: "Legacy cores that struggle to process thousands of transactions per second (TPS)." }
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Secure Transaction Core</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our framework utilizes <strong>Multi-Layered Authentication</strong> and
                  Microservices architecture to ensure every transaction is
                  immutable, logged, and lightning-fast.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of secure payment processing architecture]

                </div>

                <ul className="space-y-4">
                  {["PCI-DSS Level 1 Infrastructure", "Real-time AML/KYC Integration", "Bank-Grade API Security", "Scalable Micro-payment Support"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Compliance Framework")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Security Protocol <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Financial Performance</h2>
            <p className="text-muted !text-gray-300">We optimize for speed, security, and zero-error processing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "10k+", l: "TPS Capability", d: "Transactions per second for high-load retail apps." },
              { v: "0.01%", l: "Fraud Rate", d: "Achieved through AI-powered anomaly detection." },
              { v: "100%", l: "PCI Alignment", d: "Fully compliant with global payment standards." }
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
          <h2 className="heading-xl">Strategic Fintech Solutions</h2>
          <p className="text-muted">Engineering the foundations of digital trust and fiscal agility.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Digital Banking Core",
              icon: <Landmark />,
              d: "Building the backbone of neobanks with modular features for lending, saving, and accounts.",
              backTitle: "Neobank Architecture",
              points: ["Ledger Management", "Smart Contracts", "Mobile-First Banking", "Credit Scoring AI"]
            },
            {
              t: "Payment Gateways",
              icon: <CreditCard />,
              d: "High-security payment processing systems supporting global currencies and crypto assets.",
              backTitle: "Transaction Flow",
              points: ["Multi-Currency Support", "Low Latency Routing", "Tokenization Engine", "Chargeback Protection"]
            },
            {
              t: "Wealth-Tech AI",
              icon: <Zap />,
              d: "Automated portfolio management and robo-advisory tools driven by real-time market data.",
              backTitle: "Smart Investing",
              points: ["Algorithmic Trading", "Risk Analysis Tools", "Personalized Insights", "Real-time Feeds"]
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
                    Get Tech Specs
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
              <h2 className="heading-xl md:text-left !mb-4">Fintech Domains</h2>
              <p className="text-brandGreen font-medium">From decentralized finance to traditional institutional banking, we provide the tech stack you need.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ INDUSTRY FOCUS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Neo-Banking", icon: "📱", desc: "Building mobile-first retail banking experiences with cloud cores." },
              { title: "InsureTech", icon: "🛡️", desc: "AI-driven claim processing and dynamic risk underwriting." },
              { title: "Crypto & Web3", icon: "⛓️", desc: "Blockchain protocols and secure digital asset wallets." },
              { title: "Lending Tech", icon: "💰", desc: "Automated loan disbursement and automated credit checks." }
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
                <h2 className="heading-xl md:text-left">Our Philosophy: <br /><span className="text-brandOrange">Immutable Trust</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Security First", d: "Financial data encryption that exceeds industry standards." },
                    { p: "Deterministic Performance", d: "Systems that deliver consistent speed regardless of load." },
                    { p: "Regulatory Adaptability", d: "Architecture that evolves with global compliance changes." },
                    { p: "User Centricity", d: "Simplifying complex financial jargon into intuitive UI/UX." },
                    { p: "Scalable Innovation", d: "Building today for the trillions of tomorrow's transactions." }
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
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2070"
                  alt="Fintech Concept"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"In code we trust, but security we verify."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Fintech Engineering Motto</span>
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
          <h2 className="heading-xl">Mission-Critical Resilience</h2>
          <p className="text-muted mb-16">The financial market never sleeps. Neither does our infrastructure.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Landmark className="text-blue-600" />, t: "Disaster Recovery", d: "Zero-data-loss synchronization across global data regions." },
              { icon: <ShieldCheck className="text-green-600" />, t: "Fraud Engine", d: "Millisecond-level screening for every inbound transaction request." },
              { icon: <Zap className="text-orange-600" />, t: "Auto-Scaling", d: "Dynamically handling 50x traffic spikes during market volatility." }
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
          <h2 className="heading-xl !text-white !mb-8">Build the Future of <br />Financial Services.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Don't settle for legacy limitations. Leverage our Fintech engineering expertise to scale your vision securely.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Fintech Strategy Call")} className="btn-inverse">
              Launch Your Project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}