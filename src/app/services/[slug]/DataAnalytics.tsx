"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BarChart3, Database, PieChart, TrendingUp, ShieldAlert, Target } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function DataAnalyticsPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070"
          alt="Data Analytics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />

        <div className="relative z-10 text-center container-custom">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Intelligence Beyond Numbers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Turn Raw Data <br />
            <span className="text-gray-300">Into Pure Revenue.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Stop guessing. We build advanced BI dashboards and automated pipelines
            that uncover hidden patterns, optimize operations, and scale
            your business through data-driven logic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Data Analytics Audit")} className="btn-primary">
              Get Data Audit
            </button>
            <button onClick={() => openModal("Data Demo Request")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Live Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM/SOLUTION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Data is the New Oil. <br />But it Needs Refining.</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                Fragmented data in Excel sheets and silos is costing you money.
                We centralize your intelligence to create a "Single Source of Truth"
                for your entire organization.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Eliminate Data Silos", d: "Connect CRM, ERP, and Ads into one unified cloud warehouse." },
                  { t: "Real-Time Decisions", d: "Move from 'Last Month's Reports' to 'What's Happening Now'." },
                  { t: "Predictive Power", d: "Use historical patterns to forecast sales and inventory needs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Target className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 italic text-center md:text-left">The "Insight Engine"</h3>
                <div className="space-y-4 mb-8">
                  {["Automated ETL Pipelines", "Executive Power BI/Tableau", "Customer LTV Analysis", "Anomaly Detection Alerts"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain list-none">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-brandOrange">
                  <p className="text-xs text-gray-600 leading-relaxed text-center md:text-left">
                    <strong>Result:</strong> Our clients see an average <strong>32% ROI boost</strong> within 6 months by optimizing marketing spend and reducing operational waste.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Data Strategy")} className="mt-8 text-brandOrange font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                    Consult a Strategist <ArrowRight size={18} />
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
              { v: "99.9%", l: "Data Accuracy", d: "Eliminating manual errors." },
              { v: "12x", l: "Reporting Speed", d: "Faster than manual audits." },
              { v: "450+", l: "Daily Signals", d: "Automated business alerts." },
              { v: "20%", l: "Cost Savings", d: "Identifying operational waste." }
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
          <h2 className="heading-xl">Data Capabilities</h2>
          <p className="text-muted">Enterprise-grade analytics for informed decision making.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Big Data Warehousing",
              icon: <Database />,
              d: "Centralizing fragmented data from CRMs and ERPs into a unified cloud warehouse.",
              backTitle: "Cloud Backbone",
              points: ["ETL Pipelines", "Data Lake Setup", "Snowflake / BigQuery", "Master Data Mgmt"]
            },
            {
              t: "Executive Dashboards",
              icon: <BarChart3 />,
              d: "Interactive Tableau and Power BI visualizations that tell a story, not just show rows.",
              backTitle: "Visual Intelligence",
              points: ["Real-time Sync", "Drill-down Views", "Mobile Reporting", "Custom KPI Design"]
            },
            {
              t: "Predictive Analytics",
              icon: <TrendingUp />,
              d: "Using ML patterns to forecast sales, inventory needs, and market shifts.",
              backTitle: "Future Ready",
              points: ["Churn Prediction", "Demand Sensing", "Risk Scoring", "Trend Analysis"]
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
                    Reveal Specs <ArrowRight size={14} />
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
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. VERTICALS --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Sectors Transformed</h2>
              <p className="text-brandGreen font-medium">Domain-specific analytics that solve industry-specific bottlenecks.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono hidden md:block">/ ANALYTICS VERTICALS</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Retail', 'Logistics', 'Finance', 'SaaS', 'Manufacturing', 'Energy'].map((ind, i) => (
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
                <h2 className="heading-xl md:text-left">Implementation <br /><span className="text-brandOrange">Roadmap</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Audit & Discovery", d: "Identifying data silos and defining business-critical KPIs." },
                    { p: "ETL Integration", d: "Building automated pipelines to ingest raw data securely." },
                    { p: "Dashboard Design", d: "Designing intuitive UI for fast executive decision-making." },
                    { p: "Actionable Insights", d: "Training teams to turn dashboard data into monthly revenue." }
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
                  src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070"
                  alt="Data Insights"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brandOrange/20 rounded-3xl" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL TRUST PILLARS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Governance & Security</h2>
          <p className="text-muted mb-16">Enterprise-grade protection for your most valuable asset.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldAlert className="text-red-600" />, t: "GDPR/HIPAA Ready", d: "Full compliance with international data privacy standards." },
              { icon: <PieChart className="text-brandOrange" />, t: "Master Data Mgmt", d: "Ensuring high data quality and a single source of truth." },
              { icon: <Target className="text-blue-600" />, t: "Access Control", d: "Granular permission settings for different organizational roles." }
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
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Guessing. <br />Start Growing.</h2>
          <p className="text-muted !text-white/80 mb-12">Data is the new oil. Fuel your growth with custom business intelligence.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Data Strategy")} className="btn-primary uppercase tracking-widest !px-12 !py-4 !bg-textmain !text-white hover:!bg-white hover:!text-brandOrange">
              Consult a Strategist
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}