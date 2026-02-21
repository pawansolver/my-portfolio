import { ArrowRight, Cpu, Wifi, Database, Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function IoTSolutions() {
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
            IoT <span className="text-brandOrange">Solutions</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            Connecting Intelligence. We bridge the gap between physical assets and digital insights through industrial-grade IoT architecture and real-time data engineering.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Connect My Assets
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase leading-none">
          IoT
        </div>
      </section>

      {/* 2. LOGO SLIDER (Industry Partners) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden">
            <div className="animate-infinite-scroll flex items-center">
              {["Cisco", "Intel", "Nvidia", "Samsung", "Siemens", "Dell", "Tesla", "ARM", "Bosch", "Honeywell"].map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
              {/* Loop Duplicate */}
              {["Cisco", "Intel", "Nvidia", "Samsung", "Siemens", "Dell", "Tesla", "ARM", "Bosch", "Honeywell"].map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Ecosystem</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Data is the new electricity. <span className="text-brandOrange underline">IoT is the grid.</span>
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            Our IoT frameworks enable seamless connectivity between hardware and software. We provide end-to-end solutions from sensor integration to advanced edge computing analytics, ensuring your data works as hard as you do.
          </p>
        </div>
      </section>

      {/* 4. IOT PILLARS (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Core Technologies</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Sensor Networks", d: "High-precision data acquisition systems for industrial environments.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
            { t: "Edge Computing", d: "Localized data processing for zero-latency decision making.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f" },
            { t: "Cloud Integration", d: "Global scalability with secure and resilient data pipelines.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
            { t: "Predictive Maintenance", d: "Using AI to foresee hardware failures before they happen.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" }
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

      {/* 5. IMPLEMENTATION ROADMAP */}
      <section className="section-padding container-custom">
        <h2 className="heading-xl !text-left !mb-16">The IoT Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Cpu className="text-brandOrange" />, label: "Hardware", desc: "Selecting and deploying precision sensor arrays." },
            { icon: <Wifi className="text-brandOrange" />, label: "Connectivity", desc: "Establishing secure communication protocols (MQTT/LoRa)." },
            { icon: <Database className="text-brandOrange" />, label: "Aggregation", desc: "Centralizing raw data into cloud-native environments." },
            { icon: <Zap className="text-brandOrange" />, label: "Insights", desc: "Visualizing metrics for actionable business intelligence." }
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

      {/* 6. SYSTEM METRICS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "99.9%", lab: "Uptime" },
            { val: "Zero", lab: "Latency" },
            { val: "256-bit", lab: "Encryption" },
            { val: "10k+", lab: "Devices Managed" }
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
            Build the <span className="text-brandOrange">Future</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            Leverage the power of connected devices to scale your operations. Our engineers are ready to architect your IoT ecosystem.
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Start IoT Deployment <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}