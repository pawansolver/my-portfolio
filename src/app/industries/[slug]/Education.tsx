"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BookOpen, GraduationCap, Video, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function EducationPage() {
  const { openModal } = useModal();

  return (
    /* suppressHydrationWarning added to ignore attributes injected by browser extensions */
    <div
      suppressHydrationWarning
      className="bg-white text-textmain overflow-hidden font-sans"
    >

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          alt="Modern Learning Environment"
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
            Immersive Learning <br />
            <span className="text-gray-300">At Global Scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We architect the next generation of EdTech. From robust Learning Management
            Systems (LMS) to AI-driven personalized tutoring platforms, we build
            the technology that makes education accessible, engaging, and resilient.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("EdTech Audit")} className="btn-inverse">
              Audit My LMS
            </button>
            <button
              onClick={() => openModal("Expert Consultation")}
              className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black"
            >
              Talk to EdTech Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Barriers to <br />Digital Learning</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Modern learners demand more than just videos. Delivering low-latency
                virtual classrooms and handling thousands of concurrent users
                requires an infrastructure built for zero-failure performance.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Platform Latency", d: "High-latency video streams and slow content delivery killing student engagement." },
                  { t: "Scalability Crises", d: "Infrastructure that crashes during exam seasons or high-traffic enrollment periods." },
                  { t: "Engagement Gaps", d: "Passive learning tools that fail to track and improve student learning outcomes." }
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Learning Ecosystem Core</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We implement <strong>Adaptive Learning Architectures</strong> that
                  dynamically adjust to traffic and student progress, ensuring
                  a seamless education experience across all devices.
                </p>

                <div className="my-6 text-center text-gray-400 italic">

                </div>

                <ul className="space-y-4">
                  {["Scalable LMS Infrastructure", "Real-time Student Analytics", "Integrated Virtual Classrooms", "Secure Assessment Engines"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("EdTech Framework")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Scaling Guide <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Educational Impact</h2>
            <p className="text-muted !text-gray-300">Our solutions empower institutions to deliver measurable results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "99.9%", l: "Learning Uptime", d: "Zero-interruption experience for global students." },
              { v: "300%", l: "Scalability", d: "Ability to handle massive enrollment spikes instantly." },
              { v: "45%", l: "Better Retention", d: "Increase in student engagement through AI-driven UX." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={i}>
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
          <h2 className="heading-xl">EdTech Competencies</h2>
          <p className="text-muted">Empowering teachers and students with high-performance technology.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "LMS Modernization",
              icon: <BookOpen />,
              d: "Upgrading legacy learning portals into modern, cloud-native hubs with advanced tracking.",
              backTitle: "Smart Learning",
              points: ["SCORM/xAPI Support", "Mobile Learning Apps", "Content Authoring Tools", "Automated Grading"]
            },
            {
              t: "Virtual Classrooms",
              icon: <Video />,
              d: "High-definition, interactive virtual environments with low-latency whiteboarding and polls.",
              backTitle: "Live Engagement",
              points: ["WebRTC Integration", "Breakout Rooms", "In-meeting Analytics", "Session Recording"]
            },
            {
              t: "Learning Analytics",
              icon: <GraduationCap />,
              d: "AI-powered dashboards to identify at-risk students and optimize curriculum effectiveness.",
              backTitle: "Student Success",
              points: ["Predictive Analytics", "Performance Reports", "Custom Intervention Tools", "Data Visualizations"]
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
                    Get Platform Demo
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
              <h2 className="heading-xl md:text-left !mb-4">Education Domains</h2>
              <p className="text-brandGreen font-medium">We deliver specialized frameworks for K-12, Higher Ed, and Corporate Training giants.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ INDUSTRY FOCUS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Higher Education", icon: "🏛️", desc: "Digital campus solutions for universities and colleges." },
              { title: "K-12 Systems", icon: "🎒", desc: "Safe, engaging platforms for primary and secondary schools." },
              { title: "Corporate L&D", icon: "💼", desc: "Upskilling tools with robust compliance and reporting." },
              { title: "EdTech Startups", icon: "🚀", desc: "MVP development and rapid scaling for niche platforms." }
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
                <h2 className="heading-xl md:text-left">Our Philosophy: <br /><span className="text-brandOrange">Knowledge Flow</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Accessibility First", d: "Designing platforms that work on low-bandwidth and any device." },
                    { p: "Engagement DNA", d: "Interactive tools that keep students motivated and focused." },
                    { p: "Data Privacy", d: "Ensuring student data is protected with enterprise-grade security." },
                    { p: "Teacher Centric", d: "Tools that reduce admin load and let educators focus on teaching." },
                    { p: "Lifelong Learning", d: "Systems that evolve with the user throughout their career." }
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
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074"
                  alt="Future of Education"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Education is the movement from darkness to light."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Learning Excellence Motto</span>
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
          <h2 className="heading-xl">Zero-Downtime Knowledge</h2>
          <p className="text-muted mb-16">Education cannot pause. We ensure your knowledge systems are always online.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Edge Content Delivery", d: "Hosting content globally so students experience zero buffering." },
              { icon: <BookOpen className="text-green-600" />, t: "Secure Assessments", d: "Protecting integrity with anti-cheat and secure exam environments." },
              { icon: <GraduationCap className="text-orange-600" />, t: "Predictive Scaling", d: "Dynamically scaling resources for enrollment and exam seasons." }
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
          <h2 className="heading-xl !text-white !mb-8">Build the Future of <br />Digital Education.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Empower your learners with a platform that is fast, secure, and infinitely scalable.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("EdTech Strategy Call")} className="btn-inverse">
              Build My Platform
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}