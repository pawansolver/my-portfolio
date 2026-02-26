"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Cpu, Wifi, ShieldAlert, LineChart, Database, Terminal } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useModal } from "@/components/context/ModalContext"; 

// --- IoT Stats Counter Component ---
function CounterItem({ stat }: { stat: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, { duration: 2, onUpdate: (v) => setCount(Number(v.toFixed(1))) });
      return () => controls.stop();
    }
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-6xl font-bold text-brandOrange mb-4">{count}{stat.suffix}</h3>
      <p className="text-xl font-bold mb-2 text-white">{stat.label}</p>
      <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{stat.detail}</p>
    </div>
  );
}

export default function IoTSolutionsPage() {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
          alt="IoT Connectivity"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />

        <div className="relative z-10 text-center px-6 max-w-5xl container-custom">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Connected Intelligence Systems
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Connect the Physical World. <br />
            <span className="text-gray-300">Scale with IoT.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Scale your business with end-to-end IoT solutions—from custom hardware design 
            to predictive analytics. Our frameworks eliminate connectivity gaps and 
            synchronize your physical assets with enterprise intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("IoT Consultation")} className="btn-primary">
              Consult an Expert
            </button>
            <button className="px-8 py-3 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-black transition-all">
              Our Tech Stack
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl !text-left !mb-6">The Risk of <br />Dark Assets</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed">
                Unmonitored hardware is a blind spot. Legacy systems that aren't 
                connected to the cloud create operational silos, leading to 
                preventable downtime and massive energy waste.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Connectivity Fragmentation", d: "Disparate protocols causing data loss and synchronization failures." },
                  { t: "Security Vulnerabilities", d: "Legacy hardware that lacks firmware-level encryption and threat detection." },
                  { t: "Scalability Bottlenecks", d: "Systems unable to handle thousands of nodes without extreme latency." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><ShieldAlert className="text-brandOrange w-6 h-6" /></div>
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
              <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">IoT Lifecycle</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  Our deployment follows a rigorous 
                  <strong> Design, Prototype, Scale, and Intelligence</strong> 
                  workflow to ensure field reliability and data integrity.
                </p>
                <div className="my-6 text-center text-gray-400 italic">
                  
                </div>
                <ul className="space-y-4">
                  {["Sensor Selection & Design", "Mesh Network Prototyping", "Edge Computing Setup", "Cloud Analytics Integration"].map((list, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5" /> {list}
                    </li>
                  ))}
                </ul>
                <button onClick={() => openModal("IoT Methodology")} className="mt-10 text-brandOrange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Download Tech Specs <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Benchmarks</h2>
            <p className="text-gray-400">Enterprise-grade reliability metrics from our global IoT deployments.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: "K+", label: "Connected Devices", detail: "Actively managed nodes." },
              { value: 10, suffix: "ms", label: "Data Latency", detail: "Ultra-low edge response." },
              { value: 25, suffix: "%", label: "Cost Savings", detail: "Energy & maintenance reduction." },
              { value: 99.9, suffix: "%", label: "Uptime", detail: "SLA-backed reliability." }
            ].map((s, i) => <CounterItem key={i} stat={s} />)}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16 px-6">
          <h2 className="heading-xl">Our Capabilities</h2>
          <p className="text-muted">High-performance IoT solutions tailored for industrial scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom px-6">
          {[
            { 
              t: "Smart Sensors & Nodes", 
              icon: <Cpu />,
              d: "Custom hardware design for tracking temperature, vibration, and environmental metrics.",
              points: ["Low Power Mesh", "Edge Computing", "Plug-n-Play"]
            },
            { 
              t: "Connectivity Layers", 
              icon: <Wifi />,
              d: "Integration using LoRaWAN, NB-IoT, 5G, and Zigbee for total global coverage.",
              points: ["Global Roaming", "Secure Protocols", "API Integration"]
            },
            { 
              t: "IoT Dashboards", 
              icon: <Database />,
              d: "Real-time visualization of data with custom alerts and deep historical reporting.",
              points: ["Real-time Sync", "Custom Alerts", "Data Insights"]
            }
          ].map((service, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.d}</p>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-light text-gray-200">
                        <CheckCircle size={16} className="text-brandOrange" /> {point}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(service.t)} className="mt-8 bg-white/10 hover:bg-brandOrange text-white text-xs font-bold py-3 px-6 rounded-xl border border-white/20">
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="heading-xl !text-left !mb-4">Sectors Transformed</h2>
              <p className="text-brandGreen font-medium">Delivering industry-specific connectivity for mission-critical operations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Smart Cities', 'Agriculture', 'Healthcare', 'Automotive', 'Logistics', 'Energy'].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-textmain hover:text-white transition-all duration-500 group">
                <h4 className="font-bold text-lg">{item}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 mt-2">Optimization via connected intelligence.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. PHILOSOPHY SECTION (IoT Intelligence FAQ) --- */}
      <section className="section-padding bg-gray-50 px-6">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-inner border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-textmain">IoT Intelligence: <br /><span className="text-brandOrange">Technical FAQs</span></h2>
                <div className="space-y-4">
                  {[
                    { q: "Which connectivity is best?", a: "LoRaWAN for range, 5G for high speed/low latency." },
                    { q: "Is our data secure in the cloud?", a: "Yes, we use hardware-level tokens and TLS encryption." },
                    { q: "Can IoT integrate with ERP?", a: "Absolutely. RESTful APIs for SAP, Oracle, etc." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b pb-4">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between font-bold text-sm text-left">
                        {faq.q} <span>{openFaq === i ? "-" : "+"}</span>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} className="text-xs mt-2 text-gray-500">{faq.a}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto h-full min-h-[400px]">
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80" alt="Server Infrastructure" fill className="rounded-3xl object-cover grayscale" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-textmain text-white p-6 rounded-2xl shadow-2xl">
                      <Terminal className="text-brandOrange mb-4" />
                      <p className="text-xl font-mono">{"// Data Synchronized"}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center px-6">
          <h2 className="heading-xl">Industrial Reliability</h2>
          <p className="text-muted mb-16">Future-proofing your network against environmental and security risks.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <LineChart className="text-blue-600" />, t: "Predictive AI", d: "Anticipate hardware failure before it stops your production line." },
              { icon: <ShieldAlert className="text-red-600" />, t: "End-to-End Security", d: "Hardware-level protection to block unauthorized network access." },
              { icon: <Database className="text-green-600" />, t: "Data Integrity", d: "Immutable logs and decentralized data sync for enterprise trust." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{risk.icon}</div>
                <h4 className="font-bold mb-3">{risk.t}</h4>
                <p className="text-sm text-gray-500">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* --- 8. FINAL CTA (Exactly like the Image & Centered) --- */}
      <section className="section-padding bg-textmain text-white relative px-6">
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">
            STOP MANAGING CRISIS. <br />
            START ENGINEERING EXCELLENCE.
          </h2>
          
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">
            Every day of delay is a day of lost margin. Partner with experts who understand the 
            nuances of enterprise scaling.
          </p>

          {/* Is div ki wajah se button center hoga */}
          <div className="flex justify-center w-full">
            <button 
              onClick={() => openModal("IoT Strategy Session")} 
              className="btn-primary"
            >
              REQUEST STRATEGY SESSION
            </button>
          </div>
        </div>
      </section>

    </div> 
  );
} 
