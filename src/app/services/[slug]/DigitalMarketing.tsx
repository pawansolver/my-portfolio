import { ArrowRight, TrendingUp, Target, BarChart3, Globe, Zap, Search, MessageSquare, MousePointerClick } from 'lucide-react';
import Link from 'next/link';

export default function DigitalMarketing() {
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
            Digital <span className="text-brandOrange">Marketing</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            ROI-Driven Growth. We don't just generate traffic; we engineer high-converting digital ecosystems that turn strangers into loyal brand advocates through precision targeting.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Scale My Revenue
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase leading-none">
          Ads
        </div>
      </section>

      {/* 2. LOGO SLIDER (Platforms & Tools) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden">
            <div className="animate-infinite-scroll flex items-center">
              {["Google Ads", "Meta", "LinkedIn", "TikTok", "HubSpot", "Semrush", "Mailchimp", "Shopify", "Analytics"].map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
              {/* Loop Duplicate */}
              {["Google Ads", "Meta", "LinkedIn", "TikTok", "HubSpot", "Semrush", "Mailchimp", "Shopify", "Analytics"].map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Strategy</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Marketing is no longer about the stuff you make, but the <span className="text-brandOrange underline">stories you tell.</span>
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            We combine data science with creative psychology. Our performance marketing framework ensures every dollar spent is optimized for maximum return, scalability, and brand dominance in the digital space.
          </p>
        </div>
      </section>

      {/* 4. MARKETING PILLARS (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Growth Channels</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Search Engine Optimization", d: "Dominating search results through technical and content authority.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
            { t: "Paid Acquisition", d: "High-precision PPC and Social Ads designed for immediate ROI.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
            { t: "Content Strategy", d: "Engineering viral narratives that build massive organic reach.", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721" },
            { t: "Conversion Audit", d: "Optimizing landing pages to maximize every single click.", img: "https://images.unsplash.com/photo-1551288049-bbbda5366392" }
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

      {/* 5. GROWTH ROADMAP */}
      <section className="section-padding container-custom">
        <h2 className="heading-xl !text-left !mb-16">The Growth Engine</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Search className="text-brandOrange" />, label: "Audit", desc: "Analyzing market gaps and competitor vulnerabilities." },
            { icon: <Target className="text-brandOrange" />, label: "Profiling", desc: "Deep-diving into customer behavior and intent." },
            { icon: <Zap className="text-brandOrange" />, label: "Execution", desc: "Launching multi-channel campaigns for maximum impact." },
            { icon: <BarChart3 className="text-brandOrange" />, label: "Scaling", desc: "Aggressive optimization based on real-time data." }
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

      {/* 6. CAMPAIGN METRICS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "5x", lab: "Average ROAS" },
            { val: "45%", lab: "Lower CPL" },
            { val: "20M+", lab: "Monthly Reach" },
            { val: "92%", lab: "Retention Rate" }
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
            Ignite Your <span className="text-brandOrange">Growth</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            Is your current marketing strategy failing to deliver? Our performance experts are ready to audit your funnel.
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Start Growth Audit <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}