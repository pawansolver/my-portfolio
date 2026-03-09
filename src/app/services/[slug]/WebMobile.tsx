"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Smartphone, Globe, Layers, Zap, ShieldCheck, Rocket } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function WebMobileAppPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
          alt="App Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />

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
            Pixel Perfect. <br />
            <span className="text-gray-300">Enterprise Scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We build high-performance web and mobile applications that combine
            stunning UI with robust backend architectures. From MVP to global
            scale, we engineer products that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Web & Mobile App")} className="btn-primary">
              Start Developing
            </button>
            <button onClick={() => openModal("Portfolio Inquiry")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM/SOLUTION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Good Apps Function, <br />Great Apps Inspire.</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Most apps fail not because of features, but because of poor
                latency, confusing UX, and weak scalability. We fix that by
                treating code as craft and users as humans.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Performance First", d: "Sub-second load times and 60 FPS fluid animations for native feel." },
                  { t: "Bulletproof Security", d: "AES-256 encryption, SSL pinning, and biometric auth as standard." },
                  { t: "Scalable Core", d: "Microservices architecture built to handle millions of concurrent users." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Zap className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Development Lifecycle</h3>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of Mobile App Development Lifecycle]

                </div>

                <p className="text-gray-600 mb-8 text-sm leading-relaxed mt-4 text-center md:text-left">
                  Our <strong>Agile Sprint</strong> methodology ensures full transparency
                  and early-stage testing for a zero-crash launch.
                </p>
                <ul className="space-y-4">
                  {["Next.js / React Expertise", "Flutter & React Native", "Node.js & Go Backends", "DevOps & CI/CD Pipelines"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("App Tech Stack")} className="btn-primary mt-10 flex items-center gap-2">
                    Our Technology Stack <ArrowRight size={18} />
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
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { v: "1.2M+", l: "Downloads", d: "Across iOS & Android." },
              { v: "48%", l: "Retention", d: "Above industry average." },
              { v: "99.8%", l: "Stability", d: "Crash-free sessions." },
              { v: "12Wks", l: "Launch Speed", d: "Average MVP timeline." }
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

      {/* --- 4. CORE SERVICES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Product Expertise</h2>
          <p className="text-muted">High-end development across all modern platforms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Custom Web Apps",
              icon: <Globe />,
              d: "High-performance Next.js and React apps tailored for complex business workflows.",
              backTitle: "Web Intelligence",
              points: ["SEO Optimized", "Scalable Cloud-Native", "PWA Ready", "Server-Side Rendering"]
            },
            {
              t: "Mobile Engineering",
              icon: <Smartphone />,
              d: "Native and Cross-platform experiences (Flutter/RN) for iOS & Android.",
              backTitle: "Mobile First",
              points: ["Biometric Security", "Offline Capabilities", "Smooth Animations", "Store Optimization"]
            },
            {
              t: "Backend Systems",
              icon: <Layers />,
              d: "Robust microservices and APIs (Node/Go) to power your digital products.",
              backTitle: "Core Power",
              points: ["REST & GraphQL", "Database Design", "Real-time Sockets", "AWS/GCP Hosting"]
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
                    Hover to Reveal <ArrowRight size={14} />
                  </div>
                </div>

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

      {/* --- 5. INDUSTRY VERTICALS --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Key Verticals</h2>
              <p className="text-brandGreen font-medium">We specialize in domains where security and performance are non-negotiable.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono hidden md:block">/ DOMAIN EXPERTISE</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Fintech', 'Health & Fitness', 'E-commerce', 'SaaS', 'On-Demand', 'Social Media'].map((ind, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-brandOrange hover:shadow-xl transition-all text-center group">
                <p className="font-bold text-sm text-textmain group-hover:text-brandOrange">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. PHILOSOPHY / JOURNEY --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Beyond Code: <br /><span className="text-brandOrange">Product Journey</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Strategy & UX", d: "Defining user journeys and high-fidelity wireframes." },
                    { p: "Agile Development", d: "Bi-weekly sprints with full transparency and early testing." },
                    { p: "Rigorous QA", d: "Testing across 50+ real devices for zero-crash stability." },
                    { p: "ASO & Launch", d: "Store optimization and cloud deployment with auto-scaling." }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 items-center md:items-start text-left">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs flex-shrink-0">0{i + 1}</span>
                      <div className="text-center md:text-left">
                        <h5 className="font-bold text-textmain text-sm">{step.p}</h5>
                        <p className="text-xs text-gray-500 mt-1">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAFE IMAGE BOX */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070"
                  alt="Product Strategy"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brandOrange/20" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL TRUST PILLARS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Engineering Trust</h2>
          <p className="text-muted mb-16">High-performance applications built on reliable foundations.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-green-600" />, t: "IP Protection", d: "Your source code and idea are protected with strict legal NDAs." },
              { icon: <Rocket className="text-brandOrange" />, t: "Rapid Scaling", d: "Cloud-native apps that grow from 100 to 1M users seamlessly." },
              { icon: <CheckCircle className="text-blue-600" />, t: "24/7 Support", d: "Continuous monitoring and post-launch feature roadmapping." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{pillar.icon}</div>
                <h4 className="font-bold mb-3">{pillar.t}</h4>
                <p className="text-sm text-gray-500 max-w-xs">{pillar.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="section-padding bg-brandOrange text-white relative">
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Have a Game-Changing <br />Product Idea?</h2>
          <p className="text-muted !text-white/80 mb-12">Don't just build an app, build a legacy. Let's start the engineering process today.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Web & Mobile App")} className="btn-primary uppercase tracking-widest !px-12 !py-4 !bg-textmain !text-white hover:!bg-white hover:!text-brandOrange">
              Build My App Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}