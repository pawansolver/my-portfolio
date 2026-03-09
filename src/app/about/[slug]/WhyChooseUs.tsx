"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShieldCheck, Zap, BarChart, Users, Award, Headphones, Code } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function WhyChooseUsPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
          alt="Nighwan Tech Strategic Team"
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
            Engineering Trust <br />
            <span className="text-gray-300">Through Pure Performance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Choosing Nighwan Tech means partnering with a team that values your ROI
            as much as the code quality. We bridge the gap between complex
            business requirements and high-performance digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Nighwan Method")} className="btn-primary">
              Our Methodology
            </button>
            <button onClick={() => openModal("Free Consultation")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Why We Are Different
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. CORE DIFFERENTIATORS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Not Just Vendors, <br />But Growth Partners</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed text-center md:text-left">
                Most agencies focus on delivery; we focus on sustainability.
                Nighwan Tech ensures that every system we build is an asset
                that scales with your users, not a liability that slows you down.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Architectural Precision", d: "We don't just write code; we architect systems that handle 10x your current load." },
                  { t: "Radical Transparency", d: "At Nighwan, you have direct access to our Slack, Jira, and staging environments." },
                  { t: "Speed-to-Market", d: "Our lean-agile process allows us to ship MVP versions 40% faster than industry standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0"><ShieldCheck className="text-brandOrange w-6 h-6" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">The Nighwan Edge</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our proprietary <strong>Performance Optimization Framework</strong>
                  guarantees that your applications are secure, lightning-fast,
                  and ready for global corporate deployment.
                </p>

                <div className="my-6 text-center text-gray-400 italic">
                  [Infographic: Nighwan vs Conventional Agency]
                </div>

                <ul className="space-y-4">
                  {["Dedicated Senior Squads", "Zero Technical Debt Policy", "Security-First Coding", "24/7 Priority Support"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Case Studies")} className="btn-primary mt-10 flex items-center gap-2">
                    See Our Success Stories <ArrowRight size={18} />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Reliability</h2>
            <p className="text-gray-400">Numbers that validate Nighwan Tech's commitment to excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "98%", l: "Client ROI", d: "Improvement in operational efficiency post-deployment." },
              { v: "200+", l: "Expert Engineers", d: "A deep bench of specialized domain experts at your service." },
              { v: "99.9%", l: "System Uptime", d: "High-availability infrastructure designed for growth." }
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

      {/* --- 4. WHY WE LEAD (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Our Strategic Value</h2>
          <p className="text-muted">Why industry leaders choose Nighwan Tech for their most critical projects.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
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
              points: ["Compliance Tech", "Finacial Security", "Logistics Flow", "User Psychology"]
            },
            {
              t: "Global Support",
              icon: <Headphones />,
              d: "Nighwan Tech provides around-the-clock monitoring and support across all time zones.",
              backTitle: "24/7 Continuity",
              points: ["Incident Response", "Real-time Audits", "Managed DevOps", "Scaling Advisory"]
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
                    See Proof of Work
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PHILOSOPHY SECTION (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Ethos: <br /><span className="text-brandOrange">Client First, Always.</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Solution Ownership", d: "We treat your project like it's our own business product." },
                    { p: "Lean Delivery", d: "No bloated teams—only the specific talent your project needs." },
                    { p: "Data Sovereignty", d: "Your intellectual property is protected by military-grade security." },
                    { p: "Clear Roadmap", d: "No surprises. We plan meticulously and execute relentlessly." },
                    { p: "Value-Driven ROI", d: "Every feature we build is designed to increase your bottom line." }
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
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                  alt="Engineering Excellence"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:-rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Results speak louder than marketing."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— The Nighwan Creed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 6. ASSURANCE SECTION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">The Nighwan Guarantee</h2>
          <p className="text-muted mb-16">We de-risk your technology investment through proven processes.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Rapid Scaling", d: "Infrastructure that expands instantly as your traffic grows." },
              { icon: <Award className="text-green-600" />, t: "Quality Audit", d: "Continuous code reviews by senior principal architects." },
              { icon: <Users className="text-orange-600" />, t: "Deep Partnership", d: "Quarterly strategic reviews to align tech with business." }
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

      {/* --- 7. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Ready to Choose <br />Better Engineering?</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Stop settling for mediocre delivery. Partner with Nighwan Tech and build the future.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Start Partnership")} className="btn-primary">
              Partner with Nighwan Tech
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}