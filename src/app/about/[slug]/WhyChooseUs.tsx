"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShieldCheck, Zap, BarChart, Users, Award, Headphones, Code } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function WhyChooseUsPage() {
  const { openModal } = useModal();

  return (
    /* suppressHydrationWarning added to ignore attributes injected by browser extensions */
    <div
      suppressHydrationWarning
      className="bg-white text-textmain overflow-x-hidden w-full max-w-[100vw] font-sans"
    >

      {/* --- 1. HERO SECTION --- */}
      {/* 🔥 FIX: Added pt-navbar and safe mobile padding */}
      <section className="section pt-navbar relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center text-white px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/ai-automation.png"
            alt="Nighwan Tech Strategic Team"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center container-custom mt-12 md:mt-0 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
          >
            PARTNERSHIP
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-6 md:!mb-8 leading-[1.15] md:leading-tight break-words"
          >
            Engineering Trust <br />
            <span className="text-gray-300">Through Pure Performance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10 w-full px-2 sm:px-0"
          >
            Choosing Nighwan Tech means partnering with a team that values your ROI
            as much as the code quality. We bridge the gap between complex
            business requirements and high-performance digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
          >
            {/* 🔥 CSS SYNC: strictly using Universal White Pill classes */}
            <button onClick={() => openModal("Nighwan Method")} className="btn-inverse">
              Start a Project
            </button>
            <button onClick={() => openModal("Free Consultation")} className="btn-inverse">
              Let's Talk
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. CORE DIFFERENTIATORS --- */}
      <section className="section-padding bg-white px-5 sm:px-6 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 w-full text-left">
              <h2 className="heading-xl !text-left !mb-4 md:!mb-6">Not Just Vendors, <br />But Growth Partners</h2>
              <p className="text-muted !text-left !mx-0 !max-w-none !mb-8 text-sm md:text-base leading-relaxed">
                Most agencies focus on delivery; we focus on sustainability.
                Nighwan Tech ensures that every system we build is an asset
                that scales with your users, not a liability that slows you down.
              </p>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "Architectural Precision", d: "We don't just write code; we architect systems that handle 10x your current load." },
                  { t: "Radical Transparency", d: "At Nighwan, you have direct access to our Slack, Jira, and staging environments." },
                  { t: "Speed-to-Market", d: "Our lean-agile process allows us to ship MVP versions 40% faster than industry standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-5 items-start">
                    <ShieldCheck className="text-brandOrange w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-textmain text-base md:text-lg leading-snug">{item.t}</h4>
                      <p className="text-sm md:text-base text-gray-500 mt-1.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group order-1 lg:order-2 w-full mx-auto md:max-w-md lg:max-w-none mb-8 md:mb-0">
              {/* 🔥 AB-NORMALITY FIX: Fixed scale for mobile safety */}
              <div className="absolute inset-0 bg-orange-100/50 rounded-3xl transform md:scale-105 -z-10 transition-colors" />
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl md:shadow-2xl border border-gray-100 w-full text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-textmain">The Nighwan Edge</h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  Our proprietary <strong>Performance Optimization Framework</strong>
                  guarantees that your applications are secure, lightning-fast,
                  and ready for global corporate deployment.
                </p>

                <ul className="space-y-4">
                  {["Dedicated Senior Squads", "Zero Technical Debt Policy", "Security-First Coding", "24/7 Priority Support"].map((list, i) => (
                    <li key={i} className="flex items-start justify-start gap-3 text-sm md:text-base font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{list}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                  <button onClick={() => openModal("Case Studies")} className="btn-primary">
                    Let's Talk <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-xl !text-white">Proven Reliability</h2>
            <p className="text-muted !text-gray-300 text-sm md:text-base px-2 leading-relaxed">Numbers that validate Nighwan Tech's commitment to excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center">
            {[
              { v: "98%", l: "Client ROI", d: "Improvement in operational efficiency post-deployment." },
              { v: "200+", l: "Expert Engineers", d: "A deep bench of specialized domain experts at your service." },
              { v: "99.9%", l: "System Uptime", d: "High-availability infrastructure designed for growth." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={i}>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brandOrange mb-3 md:mb-4">{stat.v}</h3>
                <p className="text-lg md:text-xl font-bold mb-2">{stat.l}</p>
                <p className="text-xs md:text-sm text-gray-400 max-w-[200px] mx-auto leading-relaxed">{stat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY WE LEAD (Flip Cards) --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom text-center mb-12 md:mb-16">
          <h2 className="heading-xl">Our Strategic Value</h2>
          <p className="text-muted text-sm md:text-base px-2 leading-relaxed">Why industry leaders choose Nighwan Tech for their most critical projects.</p>
        </div>

        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              t: "Elite Tech Stack",
              icon: <Code />,
              d: "We use only the most modern and stable frameworks to ensure your tech doesn't become obsolete.",
              backTitle: "Future-Ready Stack",
              points: ["Next.js/React", "Rust & Go-lang", "Kubernetes Native", "AI Integration"]
            },
            {
              t: "Domain Expertise",
              icon: <BarChart />,
              d: "We don't just know code; we understand Fintech, Healthcare, and E-commerce business logic.",
              backTitle: "Business Logic",
              points: ["Compliance Tech", "Financial Security", "Logistics Flow", "User Psychology"]
            },
            {
              t: "Global Support",
              icon: <Headphones />,
              d: "Nighwan Tech provides around-the-clock monitoring and support across all time zones.",
              backTitle: "24/7 Continuity",
              points: ["Incident Response", "Real-time Audits", "Managed DevOps", "Scaling Advisory"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[380px] sm:h-[420px] md:h-[450px] [perspective:1000px] cursor-pointer w-full">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-6 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center overflow-hidden">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg md:text-2xl mb-3 md:mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2 overflow-y-auto no-scrollbar">{service.d}</p>
                  <div className="mt-auto md:mt-8 text-brandOrange font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 flex-shrink-0">
                    Hover to Flip <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-6 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center overflow-hidden">
                  <h3 className="text-brandOrange font-bold text-lg md:text-xl mb-4 md:mb-6 text-center flex-shrink-0">{service.backTitle}</h3>
                  <ul className="space-y-3 md:space-y-4 mb-auto overflow-y-auto no-scrollbar w-full">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm font-light text-gray-200 w-full">
                        <CheckCircle size={16} className="text-brandOrange mt-0.5 flex-shrink-0" />
                        <span className="text-left w-full leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* 🔥 CSS SYNC: Universal White Pill */}
                  <button onClick={() => openModal(service.t)} className="btn-inverse mt-6">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PHILOSOPHY SECTION (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-lg border border-gray-100 overflow-hidden w-full">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

              <div className="space-y-8 order-2 lg:order-1 text-left w-full">
                <h2 className="heading-xl md:text-left">Our Ethos: <br /><span className="text-brandOrange">Client First, Always.</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Solution Ownership", d: "We treat your project like it's our own business product." },
                    { p: "Lean Delivery", d: "No bloated teams—only the specific talent your project needs." },
                    { p: "Data Sovereignty", d: "Your intellectual property is protected by military-grade security." },
                    { p: "Clear Roadmap", d: "No surprises. We plan meticulously and execute relentlessly." },
                    { p: "Value-Driven ROI", d: "Every feature we build is designed to increase your bottom line." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 items-start w-full">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs mt-0.5 flex-shrink-0">{i + 1}</span>
                      <div className="text-left">
                        <h5 className="font-bold text-textmain text-sm md:text-base leading-snug">{pillar.p}</h5>
                        <p className="text-xs md:text-sm text-gray-500 mt-1.5 leading-relaxed">{pillar.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2 w-full aspect-[4/3] md:aspect-auto md:min-h-[450px] overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src="/images/software-dev.png"
                  alt="Engineering Excellence"
                  fill
                  className="object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 w-full">
                  <div className="bg-brandOrange text-white p-5 md:p-8 rounded-2xl shadow-2xl md:rotate-3 text-center w-full max-w-[95%] sm:max-w-[85%]">
                    <p className="text-base sm:text-xl md:text-2xl font-black italic leading-tight">"Results speak louder than marketing."</p>
                    <span className="text-[10px] md:text-xs mt-3 block opacity-90 uppercase tracking-wider">— The Nighwan Creed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 6. ASSURANCE SECTION --- */}
      <section className="section-padding bg-white px-4 sm:px-6">
        <div className="container-custom text-center">
          <h2 className="heading-xl">The Nighwan Guarantee</h2>
          <p className="text-muted mb-12 md:mb-16 px-2 text-sm md:text-base leading-relaxed">We de-risk your technology investment through proven processes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 w-full">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Rapid Scaling", d: "Infrastructure that expands instantly as your traffic grows." },
              { icon: <Award className="text-green-600" />, t: "Quality Audit", d: "Continuous code reviews by senior principal architects." },
              { icon: <Users className="text-orange-600" />, t: "Deep Partnership", d: "Quarterly strategic reviews to align tech with business." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 md:mb-6 shadow-sm">{risk.icon}</div>
                <h4 className="font-bold text-base md:text-lg mb-2">{risk.t}</h4>
                <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed mx-auto">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative px-4 sm:px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container-custom flex flex-col items-center text-center relative z-10 py-8 md:py-12 w-full">
          <h2 className="heading-xl !text-white !mb-6 md:!mb-8">Ready to Choose <br />Better Engineering?</h2>
          <p className="text-muted !text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-2 leading-relaxed">Stop settling for mediocre delivery. Partner with Nighwan Tech and build the future.</p>

          <div className="flex justify-center items-center w-full max-w-sm mx-auto">
            {/* 🔥 CSS SYNC: Universal White Pill */}
            <button onClick={() => openModal("Start Partnership")} className="btn-inverse">
              Let's Talk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}