import { ArrowRight, Target, Zap, TrendingUp, Recycle } from 'lucide-react';
import Link from 'next/link';

export default function LeanConsultancy() {
  // Logos list for the slider
  const brands = ["Microsoft", "Google", "IBM", "CISCO", "SAP", "Oracle", "Forbes", "Amazon", "Intel"];

  return (
    <main className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="bg-textmain pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <h1 className="heading-xl !text-white !text-left !mb-6">
            Lean <span className="text-brandOrange">Consultancy</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            Efficiency Engineered. Waste Eliminated. We transform operational waste into measurable value through strategic process optimization and industrial excellence.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Start Transformation
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase">
          Lean
        </div>
      </section>

      {/* 2. LOGO SLIDER (Self-Contained Animation) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden group">
            {/* Inline Animation Logic */}
            <div 
              className="flex items-center whitespace-nowrap"
              style={{
                display: 'flex',
                width: 'max-content',
                animation: 'marquee-infinite 20s linear infinite'
              }}
            >
              {/* First Set */}
              {brands.map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12">
                  {brand}
                </span>
              ))}
              {/* Second Set (Duplicate for Loop) */}
              {brands.map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* This hidden div injects the keyframes into the page once */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

      {/* 3. STRATEGIC VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Objective</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Efficiency is not a coincidence. It is <span className="text-brandOrange underline">meticulously engineered</span> through zero-waste principles.
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            We optimize your organizational DNA. By utilizing advanced value stream mapping, we eliminate every bottleneck hindering your scalability and operational flow.
          </p>
        </div>
      </section>

      {/* 4. CORE FRAMEWORKS (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Core Frameworks</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Value Stream Mapping", d: "Process blueprinting to identify non-value activities.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12" },
            { t: "Kaizen Integration", d: "Implementing small changes for massive long-term results.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978" },
            { t: "Muda Elimination", d: "Zero tolerance policy for technical and operational waste.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
            { t: "JIT Methodology", d: "Just-In-Time production systems to minimize inventory overhead.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" }
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

      {/* 5. EXECUTION ROADMAP */}
      <section className="section-padding container-custom">
        <h2 className="heading-xl !text-left !mb-16">Execution Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Target className="text-brandOrange" />, label: "Diagnostic", desc: "In-depth data analysis and operational gap assessment." },
            { icon: <Recycle className="text-brandOrange" />, label: "Optimization", desc: "Eliminating the eight classic types of industrial waste." },
            { icon: <Zap className="text-brandOrange" />, label: "Deployment", desc: "Rapid execution of streamlined process workflows." },
            { icon: <TrendingUp className="text-brandOrange" />, label: "Scale", desc: "Standardizing efficiency for sustainable enterprise growth." }
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
            { val: "30%", lab: "Cost Reduction" },
            { val: "2.5x", lab: "Process Velocity" },
            { val: "Zero", lab: "Waste Policy" },
            { val: "500+", lab: "Assets Optimized" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-textmain mb-2">{stat.val}</div>
              <div className="text-brandOrange font-bold uppercase text-[10px] tracking-widest">{stat.lab}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section id="contact" className="section-padding container-custom">
        <div className="bg-textmain rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <h2 className="heading-xl !text-white !mb-10">
            Redefine Your <span className="text-brandOrange">Output</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            Ready to integrate world-class efficiency into your business model? Contact our consultants today for a comprehensive audit.
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Request Strategy Session <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}