"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Zap,
  Coffee,
  Users,
  Sparkles,
  Smile,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Target,
  CheckCircle,
  Camera
} from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function LifeAtNighwanPage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="Life at Nighwan Tech"
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
            The Nighwan Ecosystem
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Architecting Vibe. <br />
            <span className="text-gray-300">Engineering Joy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            Culture at Nighwan Tech isn't a perk; it's a strategic imperative. We eliminate corporate friction and synchronize professional growth with human well-being to create a high-velocity value stream of innovation.
          </motion.p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button onClick={() => openModal("Culture Video")} className="btn-primary">
              Experience the Culture
            </button>
            <button onClick={() => openModal("Team Inquiry")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Connect with Team
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. CULTURE PILLARS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">Operational <br />Transparency</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed text-center md:text-left">
                Most companies suffer from "Hierarchy Stagnation." At Nighwan, we utilize a flat architecture where communication flow is optimized for speed and creative radicalism is the standard.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Radical Flexibility", d: "Asynchronous work models that eliminate the waste of rigid 9-to-5 cycles and maximize cognitive output." },
                  { t: "Knowledge Velocity", d: "Continuous learning loops via 'Nighwan Guilds'—turning collective intelligence into competitive edge." },
                  { t: "Meritocratic Governance", d: "Titles are secondary; your technical and creative contributions define your trajectory in our ecosystem." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0"><ShieldCheck className="text-brandOrange w-6 h-6" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Internal Vibe Audit</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  We audit our culture every quarter using <strong>Happiness NPS (Net Promoter Score)</strong> to ensure our environment remains a benchmark for industry standards.
                </p>

                <div className="my-6 text-center text-gray-400 italic">


                  [Image of organizational culture model]

                </div>

                <ul className="space-y-4">
                  {["Zero-Ego Collaboration", "Pet-Inclusive Workspaces", "Gaming & Cognitive Refresh Zones", "Unlimited Pantry Resources"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Gallery")} className="btn-primary mt-10 flex items-center gap-2">
                    View Cultural Gallery <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. VIBE STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Cultural Throughput</h2>
            <p className="text-muted !text-gray-300">Our engagement metrics outpace industry averages, reflecting a truly sustainable workspace.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "150+", l: "Community Jams", d: "Collaborative sessions where ideas are stress-tested and refined." },
              { v: "12", l: "Growth Retreats", d: "Annual off-sites designed for team synchronization and deep focus." },
              { v: "∞", l: "Coffee Consumption", d: "The high-octane fuel powering our development pipelines." }
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

      {/* --- 4. LIFE CATEGORIES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Dynamic Lifestyle</h2>
          <p className="text-muted">Explore the multi-dimensional facets of a Nighwan Tech associate's life.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            { t: "Social Synergy", icon: <Zap />, d: "High-energy networking events that bridge the gap between departments.", backTitle: "Synergy Events", points: ["Music Jam Sessions", "Tech Hackathons", "Festive Grandeur"] },
            { t: "Holistic Wellness", icon: <Heart />, d: "Strategic focus on mental and physical health to prevent cognitive burnout.", backTitle: "Wellness Focus", points: ["Gym Stipends", "Counseling Access", "Ergonomic Setups"] },
            { t: "Pantry Engineering", icon: <Coffee />, d: "Precision-curated nutrition to keep our engineers operating at peak performance.", backTitle: "Gourmet Fuel", points: ["Organic Snacks", "Gourmet Espresso", "Weekly Team Brunches"] }
          ].map((item, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">

                {/* FRONT */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 shadow-sm">{item.icon}</div>
                  <h3 className="font-bold text-xl md:text-2xl mb-4 text-textmain">{item.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                  <div className="mt-8 text-brandOrange font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Discover More <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-8 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6 text-center">{item.backTitle}</h3>
                  <ul className="space-y-4 mb-8">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-200">
                        <CheckCircle size={16} className="text-brandOrange mt-1 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(item.t)} className="btn-primary mt-8 border border-white/20 w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PERK SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">Standard Perks</h2>
              <p className="text-brandGreen font-medium">We deliver specialized benefit packages tailored to support the unique needs of our tech tribe.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ LIFESTYLE ASSETS</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Birthday Sabbaths", icon: "🎂", desc: "Full day of paid leave to celebrate your personal milestone." },
              { title: "Gaming Station", icon: "🎮", desc: "Latest consoles and high-spec rigs for midday cognitive de-loading." },
              { title: "Learning Budget", icon: "🎓", desc: "Unlimited budget for Udemy, Coursera, or industry certifications." },
              { title: "Workation Trips", icon: "🏖️", desc: "Quarterly opportunities to work from mountains or coastal villas." }
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

      {/* --- 6. CORE PHILOSOPHY (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Balance Ethos: <br /><span className="text-brandOrange">The 5 Vibe Pillars</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Work-Life Integration", d: "Moving beyond 'balance' to a seamless blend of passion and rest." },
                    { p: "Creative Autonomy", d: "Providing the space to experiment without the fear of failure." },
                    { p: "Empathetic Leadership", d: "Leaders who listen, mentor, and prioritize human emotion." },
                    { p: "Global Perspective", d: "Fostering a mindset that thinks beyond local borders." },
                    { p: "Radical Inclusivity", d: "Ensuring every voice, regardless of background, is amplified." }
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
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
                  alt="Team Joy"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Quality of work is a direct reflection of the quality of life."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Nighwan Culture Code</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. SUSTAINABLE SUCCESS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Sustainable Joy</h2>
          <p className="text-muted mb-16">Most culture initiatives fade after the honeymoon phase. We ensure ours lasts a career.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BarChart3 className="text-blue-600" />, t: "Growth Mapping", d: "Personal career roadmaps that align your personal dreams with company goals." },
              { icon: <Target className="text-green-600" />, t: "Community Impact", d: "Monthly opportunities to give back to the tech community via open-source." },
              { icon: <Zap className="text-orange-600" />, t: "Recognition Engine", d: "Peer-to-peer appreciation systems that reward excellence instantly." }
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
          <h2 className="heading-xl !text-white !mb-8">Stop Working. <br />Start Flourishing.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Every day spent in a toxic environment is a day of lost creativity. Join a tribe that values your pulse as much as your code.</p>
          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Apply Now")} className="btn-primary">
              Become a Nighwanian
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}