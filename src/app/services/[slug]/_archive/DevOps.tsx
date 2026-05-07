"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Terminal,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target
} from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function DevOpsPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="/images/cloud-devops.png"
          alt="Data Center Server"
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
            Automate Stability. <br />
            <span className="text-gray-300">Accelerate Delivery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We bridge the gap between development and operations. From Kubernetes orchestration
            to automated CI/CD pipelines, we build resilient systems that allow your team to
            ship code 10x faster with zero downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Cloud Audit")} className="btn-inverse">
              Book Infrastructure Audit
            </button>
            <button onClick={() => openModal("DevOps Expert")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
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
              <h2 className="heading-xl md:text-left !mb-6">The Cost of <br />Technical Inertia</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Manual deployments and "it works on my machine" excuses are costing you
                valuable engineering hours. Modern DevOps isn't just a toolset—it's a
                high-performance engine for your software.
              </p>
              <div className="space-y-6">
                {[
                  { t: "The 'Wall of Confusion'", d: "Siloed Dev and Ops teams causing slow handoffs and configuration drift." },
                  { t: "Fragile Infrastructures", d: "Manual server setups that are impossible to replicate or scale under pressure." },
                  { t: "Deployment Bottlenecks", d: "Long release cycles that delay market entry and increase bug exposure." }
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Our DevOps Lifecycle</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We implement an infinite loop of feedback and automation,
                  ensuring that every commit is tested, secured, and ready for production
                  using <strong>GitOps</strong> and <strong>Agile</strong> workflows.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of DevOps infinity loop diagram]

                </div>

                <ul className="space-y-4">
                  {["Infrastructure as Code (Terraform)", "Automated CI/CD Pipelines", "Container Orchestration (K8s)", "DevSecOps Integration"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Architecture")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Tech Roadmap <ArrowRight size={18} />
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
            <h2 className="heading-xl !text-white">Engineering KPIs</h2>
            <p className="text-muted !text-gray-300">We optimize your DORA metrics to ensure elite-level delivery performance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "10x", l: "Deployment Frequency", d: "Ship features daily instead of monthly." },
              { v: "50%", l: "Reduced MTTR", d: "Mean Time to Recover from failures cut by half." },
              { v: "0.1%", l: "Change Failure Rate", d: "Rigorous automation ensures rock-solid releases." }
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
          <p className="text-muted">High-impact solutions for modern engineering teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Cloud Orchestration",
              icon: <Cloud />,
              d: "Mastering AWS, Azure, and GCP with managed Kubernetes clusters for infinite scaling.",
              backTitle: "Cloud Capabilities",
              points: ["EKS/GKE Setup", "Multi-region Failover", "Cost Optimization", "Serverless Migration"]
            },
            {
              t: "Infrastructure as Code",
              icon: <Layers />,
              d: "Turning manual configurations into version-controlled code for 100% reproducibility.",
              backTitle: "IaC Mastery",
              points: ["Terraform & Ansible", "CloudFormation", "Secret Management", "Drift Detection"]
            },
            {
              t: "DevSecOps Integration",
              icon: <Terminal />,
              d: "Shifting security to the left by automating vulnerability scans in every build cycle.",
              backTitle: "Security First",
              points: ["SAST/DAST Testing", "Compliance as Code", "Container Scanning", "IAM Hardening"]
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
              <h2 className="heading-xl md:text-left !mb-4">Ecosystems</h2>
              <p className="text-brandGreen font-medium">We deliver specialized DevOps frameworks for unique regulatory and high-traffic demands.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ TECH STACKS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "FinTech & Banking", icon: "🏦", desc: "Highly secure pipelines meeting PCI-DSS and SOC2 standards." },
              { title: "E-Commerce", icon: "🛒", desc: "Auto-scaling infrastructure for peak traffic and flash sales." },
              { title: "SaaS & Cloud Apps", icon: "☁️", desc: "Multi-tenant architecture and rapid feature deployment." },
              { title: "AI & Data Science", icon: "🤖", desc: "MLOps automation and GPU resource management." }
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
                <h2 className="heading-xl md:text-left">Our Core Philosophy: <br /><span className="text-brandOrange">The C.A.L.M.S Framework</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Culture", d: "Breaking down silos between development and operations teams." },
                    { p: "Automation", d: "If it's repeatable, it should be automated via code." },
                    { p: "Lean", d: "Minimizing work-in-progress to maximize value throughput." },
                    { p: "Measurement", d: "Data-driven decisions using logging and observability." },
                    { p: "Sharing", d: "Open communication and collective ownership of systems." }
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

              {/* SAFE IMAGE BOX */}
              <div className="relative w-full aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/cloud-devops.png"
                  alt="DevOps Culture"
                  fill
                  className="object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Move fast and fix things with automation."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— The DevOps Creed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RELIABILITY & MONITORING --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Sustainable Reliability</h2>
          <p className="text-muted mb-16">Deployment is only half the battle. We ensure your systems thrive post-launch.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Self-Healing Infra", d: "Automated rollbacks and health checks that recover services without human intervention." },
              { icon: <BarChart3 className="text-green-600" />, t: "Full-Stack Observability", d: "Track performance live. No more guessing; see exactly where your bottlenecks are." },
              { icon: <Target className="text-orange-600" />, t: "Chaos Engineering", d: "We proactively test system limits so you stay online during massive traffic spikes." }
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
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/carbon-fibre.png")' }} />
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Deploying Stress. <br />Start Engineering Scale.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Every manual task is a risk. Partner with architects who turn infrastructure into a competitive advantage.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Architecture Call")} className="btn-inverse">
              Request Architecture Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
