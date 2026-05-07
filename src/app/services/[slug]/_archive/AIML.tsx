"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BrainCircuit, Cpu, ShieldAlert, Sparkles, Network, Terminal } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function AISolutionsPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="/images/ai-automation.png"
          alt="Artificial Intelligence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

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
            Predictive Models. <br />
            <span className="text-gray-300">Autonomous Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Deploy custom AI models and MLOps pipelines that turn complex data
            into competitive advantages. We bridge the gap between raw data
            and cognitive decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("AI Solutions")} className="btn-inverse">
              Deploy AI Now
            </button>
            <button onClick={() => openModal("AI Use Cases")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              View Use Cases
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE CHALLENGE --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Data Wealth, <br />Insight Poverty</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Most enterprises capture massive data but lack the algorithmic
                infrastructure to extract value. Without AI, you're looking at
                the past; with it, you're engineering the future.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Cognitive Bottlenecks", d: "Human-led analysis cannot process TBs of real-time data efficiently." },
                  { t: "Reactive Decision Making", d: "Operating on historical reports instead of real-time predictive foresight." },
                  { t: "Operational Inertia", d: "Repetitive manual tasks draining 70% of high-value workforce energy." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><BrainCircuit className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">MLOps Architecture</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our integration strategy follows a strict
                  <strong> Data Strategy &gt; Model Training &gt; API Deployment </strong>
                  lifecycle for production-grade reliability.
                </p>

                <div className="my-6 text-center text-gray-400 italic">

                </div>

                <ul className="space-y-4">
                  {["Data Pre-processing", "Neural Arch Design", "Feature Engineering", "Continuous Learning"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("AI Solutions Stack")} className="btn-primary mt-10 flex items-center gap-2">
                    Explore AI Stack <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. AI PERFORMANCE STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Algorithmic Impact</h2>
            <p className="text-muted !text-gray-300">Our models are optimized for precision, latency, and real-world ROI.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { v: "98%", l: "Model Accuracy", d: "High-precision scoring." },
              { v: "70%", l: "Task Automation", d: "Reduction in manual tasks." },
              { v: "10TB+", l: "Daily Processing", d: "Real-time data ingestion." },
              { v: "200ms", l: "Inference Speed", d: "Ultra-fast decision logic." }
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

      {/* --- 4. CORE CAPABILITIES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Cognitive Stack</h2>
          <p className="text-muted">Domain-specific AI solutions built for enterprise reliability.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Predictive Analytics",
              icon: <Network />,
              d: "Leveraging historical data to forecast future trends, sales, and market behaviors.",
              backTitle: "Future Vision",
              points: ["Trend Forecasting", "Risk Assessment", "Demand Planning", "Dynamic Pricing"]
            },
            {
              t: "Generative AI & LLMs",
              icon: <Sparkles />,
              d: "Custom LLM deployments tailored to your private data for content and code generation.",
              backTitle: "Creative Logic",
              points: ["Custom LLMs", "AI Agents", "Knowledge Graphs", "Private Instances"]
            },
            {
              t: "Computer Vision",
              icon: <Cpu />,
              d: "Training machines to interpret visual data for object detection and medical imaging.",
              backTitle: "Visual Intelligence",
              points: ["Object Detection", "OCR Systems", "Motion Tracking", "Image Tagging"]
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
                        <CheckCircle size={16} className="text-brandOrange mt-1 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(service.t)} className="btn-primary mt-8 border border-white/20 w-full">
                    Get AI Specs
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
              <h2 className="heading-xl md:text-left !mb-4">Use Cases</h2>
              <p className="text-brandGreen font-medium">From fraud detection in FinTech to diagnostics in Healthcare, we deploy AI where it matters most.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono hidden md:block">/ SECTOR APPLICATIONS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "FinTech", icon: "💎", desc: "Real-time fraud detection and algorithmic trading." },
              { title: "Healthcare", icon: "🏥", desc: "AI-assisted diagnostics and drug discovery." },
              { title: "Logistics", icon: "📦", desc: "Predictive maintenance and route optimization." },
              { title: "LegalTech", icon: "⚖️", desc: "Automated contract review and document mining." }
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

      {/* --- 6. AI PHILOSOPHY (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Core Philosophy: <br /><span className="text-brandOrange">Responsible Intelligence</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Privacy by Design", d: "Your proprietary data is never used to train public models." },
                    { p: "Explainable AI (XAI)", d: "Clear reasoning behind every algorithmic decision." },
                    { p: "Transfer Learning", d: "Powerful performance even with limited initial datasets." },
                    { p: "Seamless MLOps", d: "Continuous model retraining without system downtime." },
                    { p: "Low Latency", d: "Optimized for real-time edge or cloud inference." }
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

              {/* SAFE GLASSMORPHISM BOX */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/ai-automation.png"
                  alt="AI Training"
                  fill
                  className="object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-[90%] md:max-w-[85%] flex flex-col items-center text-center">
                    <Terminal className="text-brandOrange mb-4 w-8 h-8" />
                    <p className="text-lg md:text-xl font-mono">Running Inference: SUCCESS <br />Accuracy: 99.2%</p>
                    <span className="text-xs mt-4 block opacity-60">System: Neural Core v4.0</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. SECURITY & TRUST --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Enterprise Safety</h2>
          <p className="text-muted mb-16">AI is powerful; our job is to make it safe and sovereign for your business.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldAlert className="text-red-600" />, t: "Data Sovereignty", d: "Models deployed on your infrastructure, ensuring 100% data ownership." },
              { icon: <CheckCircle className="text-green-600" />, t: "Bias Mitigation", d: "Strict testing protocols to identify and eliminate algorithmic bias." },
              { icon: <Terminal className="text-blue-600" />, t: "API Stability", d: "Robust versioning and monitoring for consistent performance." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{risk.icon}</div>
                <h4 className="font-bold mb-3">{risk.t}</h4>
                <p className="text-sm text-gray-500 max-w-xs">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="section-padding bg-brandOrange text-white relative">
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Ready to Build the <br />Autonomous Future?</h2>
          <p className="text-muted !text-white/80 mb-12">Turn your data into your most valuable employee. Let's discuss your AI roadmap.</p>

          <div className="flex justify-center items-center w-full">
            {/* Kept your custom padding and uppercase, just ensured hover works nicely with orange background */}
            <button onClick={() => openModal("AI Solutions")} className="btn-primary uppercase !px-12 !py-4 !bg-textmain !text-white hover:!bg-white hover:!text-brandOrange">
              Build Your AI Model
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
