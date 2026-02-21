import { ArrowRight, Palette, Eye, Zap, Target, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Branding() {
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
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section className="bg-textmain pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <h1 className="heading-xl !text-white !text-left !mb-6">
            Branding <span className="text-brandOrange">& Identity</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            Visual Engineering & Strategic Storytelling. We don't just design logos; we engineer visual languages that resonate with your audience and command market authority.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Scale My Brand
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase leading-none">
          Brand
        </div>
      </section>

      {/* 2. LOGO SLIDER (With Integrated Logic) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden">
            <div className="animate-infinite-scroll flex items-center">
              {["Nike", "Apple", "Tesla", "Adobe", "Figma", "Airbnb", "Spotify", "Netflix", "Google"].map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
              {/* Loop Duplicate for Seamless Scroll */}
              {["Nike", "Apple", "Tesla", "Adobe", "Figma", "Airbnb", "Spotify", "Netflix", "Google"].map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREATIVE VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Vision</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Design is the silent ambassador of your <span className="text-brandOrange underline">brand value.</span>
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            We bridge the gap between business strategy and creative expression. Our process ensures your brand identity isn't just beautiful, but a functional tool for long-term growth.
          </p>
        </div>
      </section>

      {/* 4. DESIGN PILLARS (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Creative Pillars</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Visual Identity", d: "Crafting iconic logos and cohesive color systems.", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde7" },
            { t: "Brand Voice", d: "Defining the personality and tone of your messaging.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692" },
            { t: "Digital Presence", d: "Engineering high-end UI/UX for a seamless brand feel.", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c" },
            { t: "Brand Strategy", d: "Positioning your brand to dominate the competition.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0" }
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

      {/* 5. BRANDING ROADMAP */}
      <section className="section-padding container-custom">
        <h2 className="heading-xl !text-left !mb-16">The Creative Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Eye className="text-brandOrange" />, label: "Discovery", desc: "Understanding your audience and brand psychology." },
            { icon: <Target className="text-brandOrange" />, label: "Strategy", desc: "Building the roadmap for visual dominance." },
            { icon: <Palette className="text-brandOrange" />, label: "Design", desc: "Creating a unique and scalable visual identity." },
            { icon: <Zap className="text-brandOrange" />, label: "Launch", desc: "Deploying your brand across all digital touchpoints." }
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

      {/* 6. IMPACT METRICS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "100%", lab: "Originality" },
            { val: "85%", lab: "Recall Rate" },
            { val: "10x", lab: "Value Perception" },
            { val: "200+", lab: "Global Brands" }
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
            Define Your <span className="text-brandOrange">Legacy</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            Is your brand identity ready for the next level? Join the league of market leaders today.
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Start Branding Project <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}