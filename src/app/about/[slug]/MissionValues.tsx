"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Shield, Heart, Zap, Eye, Globe, Star } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function MissionValuesPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
          alt="Company Visionary Mission"
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
            Empowering Progress <br />
            <span className="text-gray-300">Through Pure Ethics.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Our mission is to build technology that doesn't just work, but enriches lives.
            We are driven by a core set of values that prioritize human-centric design,
            absolute transparency, and the relentless pursuit of engineering perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Mission Video")} className="btn-primary">
              Our Vision Story
            </button>
            <button onClick={() => openModal("Ethics Document")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Read Our Manifesto
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MISSION & VISION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The North Star of <br />Our Organization</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed text-center md:text-left">
                We don't believe in short-term gains at the cost of technical health.
                Our mission is to provide the architectural backbone for the
                companies that will lead the next century of global innovation.
              </p>
              <div className="space-y-6">
                {[
                  { t: "The Mission", d: "To democratize high-end engineering for ambitious startups and global enterprises alike." },
                  { t: "The Vision", d: "Becoming the world's most trusted partner for mission-critical digital transformation." },
                  { t: "The Promise", d: "Delivering zero-compromise quality and radical transparency in every line of code." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0"><Target className="text-brandOrange w-6 h-6" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Value-Led Strategy</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We follow a <strong>Human-Centric Engineering</strong> approach.
                  Every software solution is built to maximize the potential of
                  the people who use it, while minimizing environmental impact.
                </p>

                <div className="my-6 text-center text-gray-400 italic">
                  [Infographic of Core Value Integration]
                </div>

                <ul className="space-y-4">
                  {["Integrity in Communication", "Obsession with Security", "Culture of Open Innovation", "Social Responsibility First"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Culture Deck")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Culture Deck <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Integrity Benchmarks</h2>
            <p className="text-muted !text-gray-300">Our values are not just words—they are measurable commitments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "100%", l: "Ethical Source", d: "All technologies used are vetted for security and ethics." },
              { v: "Zero", l: "Data Breaches", d: "Maintaining a perfect track record in client data privacy." },
              { v: "24/7", l: "Open Honesty", d: "Providing real-time project health access to every client." }
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

      {/* --- 4. CORE VALUES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Our Moral Pillars</h2>
          <p className="text-muted">The foundational beliefs that guide our engineering and partnerships.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Radical Transparency",
              icon: <Eye />,
              d: "No black boxes. You see every commit, every hour, and every architectural decision.",
              backTitle: "Honest Delivery",
              points: ["Open Source mindset", "Direct Engineer Access", "Real-time Reporting", "No Hidden Costs"]
            },
            {
              t: "Security First DNA",
              icon: <Shield />,
              d: "Security is not an afterthought; it is woven into the first line of every project we start.",
              backTitle: "Absolute Safety",
              points: ["Encrypted Workflows", "Regular Pentesting", "Compliance Readiness", "Zero-Trust Focus"]
            },
            {
              t: "Obsessive Quality",
              icon: <Star />,
              d: "We would rather delay a launch than release software that doesn't meet our elite standards.",
              backTitle: "Peak Performance",
              points: ["Modular Clean Code", "99% Test Coverage", "Scalable Architectures", "Technical Debt Mgmt"]
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
                    See Our Standards
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SOCIAL FOCUS --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Global Impact</h2>
              <p className="text-brandGreen font-medium">We believe technology should be a force for good in the global community.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ CORPORATE ETHOS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Open Source", icon: "🔓", desc: "Contributing back to the tools that build the internet." },
              { title: "Sustainability", icon: "🌱", desc: "Optimizing code for lower server energy consumption." },
              { title: "Education", icon: "📚", desc: "Mentoring the next generation of engineers globally." },
              { title: "Inclusion", icon: "🤝", desc: "Building accessible software for every user type." }
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
                <h2 className="heading-xl md:text-left">Our Ethos: <br /><span className="text-brandOrange">Human First Tech</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Empathetic Design", d: "Understanding the end-user's pain points before writing code." },
                    { p: "Sustainable Ops", d: "Operating as a carbon-neutral engineering organization." },
                    { p: "Continuous Trust", d: "Earning your confidence every single day through delivery." },
                    { p: "Privacy Advocacy", d: "Standing up for user rights in every data architecture." },
                    { p: "Bold Innovation", d: "Never being afraid to challenge the status quo for better tech." }
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                  alt="Team Integrity"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Our values are the source of our strength."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Mission Motto</span>
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
          <h2 className="heading-xl">Ethics Protection</h2>
          <p className="text-muted mb-16">We protect our values as fiercely as we protect your data.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Energy Optimization", d: "Building efficient algorithms to reduce digital waste." },
              { icon: <Shield className="text-green-600" />, t: "Ethical AI Audit", d: "Ensuring all AI modules are free from bias and prejudice." },
              { icon: <Heart className="text-orange-600" />, t: "Community Focus", d: "Giving back through open tech and educational grants." }
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
          <h2 className="heading-xl !text-white !mb-8">Build Something <br />That Truly Matters.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Partner with an engineering firm that aligns with your mission and values.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Mission Consultation")} className="btn-primary">
              Align Our Missions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}