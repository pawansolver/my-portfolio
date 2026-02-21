import { ArrowRight, Layers, Shield, Database, Zap, Target, Settings, LayoutGrid, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ERPDevelopment() {
  return (
    <main className="bg-white">
      {/* 🚀 Integrated Slider Logic (Inline CSS) */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section className="bg-textmain pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <h1 className="heading-xl !text-white !text-left !mb-6">
            ERP <span className="text-brandOrange">Development</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            Enterprise Intelligence. We engineer bespoke ERP ecosystems that unify your business processes, automate complex workflows, and provide a single source of truth for global operations.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Request Demo
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase leading-none">
          ERP
        </div>
      </section>

      {/* 2. LOGO SLIDER (Enterprise Tech Stack) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden">
            <div className="animate-infinite-scroll flex items-center">
              {["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "Salesforce", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes"].map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
              {/* Loop Duplicate */}
              {["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "Salesforce", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes"].map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Architecture</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Silos are for farms. <span className="text-brandOrange underline">Data belongs together.</span>
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            Our ERP solutions eliminate departmental friction. By centralizing finance, human resources, supply chain, and CRM into one modular interface, we empower your leadership with real-time actionable intelligence.
          </p>
        </div>
      </section>

      {/* 4. ERP MODULES (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Core Modules</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Supply Chain", d: "Automated inventory and logistics management systems.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
            { t: "Financial Intelligence", d: "Real-time auditing, payroll, and asset tracking.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
            { t: "HR Management", d: "Streamlined employee lifecycle and performance metrics.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978" },
            { t: "Resource Planning", d: "Capacity forecasting and automated scheduling.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" }
          ].map((item, i) => (
            <div key={i} className="min-w-[85%] md:min-w-[40%] snap-center group">
              <div className="h-96 rounded-[2rem] overflow-hidden relative mb-6 border border-white/10">
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-textmain via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white font-bold text-2xl uppercase mb-2">{item.t}</h4>
                  <p className="text-white/60 text-sm italic">{item.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DEVELOPMENT ROADMAP */}
      <section className="section-padding container-custom">
        <h2 className="heading-xl !text-left !mb-16">The ERP Lifecycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Settings className="text-brandOrange" />, label: "Process Mapping", desc: "Detailed analysis of existing legacy workflows." },
            { icon: <Database className="text-brandOrange" />, label: "Data Migration", desc: "Secure transfer of historical data to new architecture." },
            { icon: <LayoutGrid className="text-brandOrange" />, label: "Module Dev", desc: "Building custom features tailored to your industry." },
            { icon: <RefreshCw className="text-brandOrange" />, label: "Integration", desc: "Syncing your ERP with existing third-party tools." }
          ].map((step, i) => (
            <div key={i} className="group">
              <div className="mb-6">{step.icon}</div>
              <h4 className="text-textmain font-bold uppercase mb-4 tracking-tighter text-xl">0{i+1}. {step.label}</h4>
              <p className="text-muted !text-left !text-sm !mx-0">{step.desc}</p>
              <div className="h-1 w-full bg-zinc-100 mt-6 group-hover:bg-brandOrange transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. PERFORMANCE METRICS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "40%", lab: "Admin Efficiency" },
            { val: "100%", lab: "Data Accuracy" },
            { val: "Zero", lab: "Process Silos" },
            { val: "24/7", lab: "System Support" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-textmain mb-2">{stat.val}</div>
              <div className="text-brandOrange font-bold uppercase text-[10px] tracking-widest">{stat.lab}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section id="contact" className="section-padding container-custom">
        <div className="bg-textmain rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <h2 className="heading-xl !text-white !mb-10">
            Unify Your <span className="text-brandOrange">Enterprise</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            Transform your business operations with a custom ERP solution built for scale. Ready for a digital transformation?
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Start ERP Consultation <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}