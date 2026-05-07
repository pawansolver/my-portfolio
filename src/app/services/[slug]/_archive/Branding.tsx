"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, BarChart3, Target, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useModal } from "@/components/context/ModalContext";

export default function BrandingAgencyPage() {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="/images/it-consulting.png"
          alt="Branding Strategy"
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
            Elevate Your Brand Identity. <br />
            <span className="text-gray-300">Engineering Recognition.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We build identities that don't just look good, but drive real business results through strategic design.
            Our frameworks eliminate brand confusion and synchronize your visual presence with
            long-term strategic objectives for measurable market impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Start Project")} className="btn-inverse">
              Start Your Project
            </button>
            <button className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Cost of <br />Visual Stagnation</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                In today's volatile market, an outdated brand is a financial risk. Inefficient
                brand communication often hides in plain sight, draining potential market
                share and customer loyalty.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Identity Fragmentation", d: "Inconsistent visuals creating redundant touchpoints and customer friction." },
                  { t: "Market Value Leaks", d: "Legacy branding that fails to handle increased demand without losing premium appeal." },
                  { t: "Recognition Bottlenecks", d: "Weak visual systems that fail to handle cross-platform scaling effectively." }
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Our Design Methodology</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our engagement follows a structured
                  <strong> Discovery, Concept, Creation, and Launch</strong>
                  approach to ensure every brand asset is optimized for maximum recall and ROI.
                </p>
                <ul className="space-y-4">
                  {["Brand Audit (Discovery)", "Visual Concept Mapping", "Identity Creation", "Brand Guideline Implementation"].map((list, i) => (
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
            <p className="text-muted !text-gray-300">Our results are data-backed and directly linked to your brand's market equity growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "85%", l: "Brand Recognition", d: "Achieved through identity synchronization." },
              { v: "60%", l: "Digital Growth boost", d: "Avg. increase in engagement metrics." },
              { v: "45%", l: "ROI for Clients", d: "Direct conversion rate improvement via design." }
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
          <p className="text-muted">Hover over the cards to explore our deep-dive branding methodologies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Brand Identity Design",
              icon: <Target />,
              d: "Crafting unique logos, typography, and color palettes that define your company's soul.",
              backTitle: "Visual Impact",
              points: ["Logo Design", "Style Guides", "Brand Voice", "Typography"]
            },
            {
              t: "Digital Strategy",
              icon: <BarChart3 />,
              d: "Positioning your brand across digital touchpoints to capture market share and mindshare.",
              backTitle: "Market Growth",
              points: ["Market Analysis", "SEO Strategy", "Social Roadmap", "Ad Strategy"]
            },
            {
              t: "UI/UX Experience",
              icon: <Zap />,
              d: "Designing intuitive digital interfaces that turn visitors into loyal brand advocates.",
              backTitle: "Digital Excellence",
              points: ["Web Design", "App Interfaces", "Prototyping", "User Research"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">
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
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-8 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6 text-center">{service.backTitle}</h3>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-200">
                        <CheckCircle size={16} className="text-brandOrange mt-1 flex-shrink-0" /> {point}
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
              <p className="text-brandGreen font-medium">We deliver specialized brand languages tailored to the unique regulatory and emotional demands of your sector.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Tech Startups", icon: "🚀", desc: "Clean, disruptive identities for the next generation of innovators." },
              { title: "Fashion & Luxury", icon: "💎", desc: "Premium positioning for elite products and lifestyle brands." },
              { title: "F&B / Retail", icon: "🍽️", desc: "Aesthetic-driven branding for high-end consumer experiences." },
              { title: "Financial Services", icon: "⚖️", desc: "Professional & trustworthy identities for established firms." }
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

      {/* --- 6. PHILOSOPHY SECTION (FAQs & ORANGE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Brand Insights: <br /><span className="text-brandOrange">Strategic Branding FAQs</span></h2>
                <div className="space-y-4 text-left">
                  {[{ q: "How long does it take?", a: "Typically 4-8 weeks for a full identity rollout." },
                  { q: "Do you offer trademarks?", a: "We provide designs; legal filing is via our partners." },
                  { q: "Can you refresh logos?", a: "Yes, we specialize in Brand Evolutions." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b pb-4">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center font-bold text-sm text-left">
                        {faq.q} <span className="text-brandOrange text-xl">{openFaq === i ? "-" : "+"}</span>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="text-xs mt-2 text-gray-500 overflow-hidden">
                            {faq.a}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orange Box Safely Contained */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/it-consulting.png"
                  alt="Design Philosophy"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Design is the silent ambassador of your brand."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Paul Rand</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION (Sustainable Growth) --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Sustainable Growth</h2>
          <p className="text-muted mb-16">We don't just design; we build systems for long-term brand equity.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BarChart3 className="text-blue-600" />, t: "Strategy First", d: "Design without strategy is just art. We focus on business goals and market positioning." },
              { icon: <Target className="text-green-600" />, t: "Scalable Systems", d: "Our brand guidelines are modular, ensuring your identity grows as your company scales." },
              { icon: <Zap className="text-orange-600" />, t: "Real-Time Tracking", d: "Measure brand sentiment and engagement metrics live once your identity is deployed." }
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
      <section className="section-padding bg-brandOrange text-white relative">
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Being Invisible. <br />Start Building a Legacy.</h2>
          <p className="text-muted !text-gray-400 mb-12">Partner with experts who understand the nuances of brand scaling and market psychology.</p>
          <div className="flex justify-center items-center">
            <button onClick={() => openModal("Strategy Call")} className="btn-inverse">
              Request Strategy Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
