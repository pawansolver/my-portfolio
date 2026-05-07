"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Laptop,
  Lightbulb,
  Users,
  Trophy,
  BookOpen,
  Search,
  Star,
  Zap,
  ShieldCheck,
  BarChart3,
  Target
} from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function InternshipProgramsPage() {
  const { openModal } = useModal();

  const internships = [
    {
      id: 1,
      title: "Frontend Engineering Intern",
      duration: "3-6 Months",
      stipend: "₹12,000 - ₹20,000 /month",
      location: "Remote / Hybrid",
      skills: ["React.js", "Tailwind CSS", "Next.js"],
      posted: "1 day ago",
      desc: "Architecting high-performance user interfaces using atomic design principles and modern state management."
    },
    {
      id: 2,
      title: "Backend Systems Intern",
      duration: "6 Months",
      stipend: "₹15,000 - ₹25,000 /month",
      location: "Remote",
      skills: ["Node.js", "PostgreSQL", "Redis"],
      posted: "3 days ago",
      desc: "Developing scalable microservices and robust API architectures for high-traffic enterprise applications."
    },
    {
      id: 3,
      title: "Full Stack Web Intern",
      duration: "6 Months",
      stipend: "₹18,000 - ₹28,000 /month",
      location: "Noida HQ / Remote",
      skills: ["TypeScript", "Prisma", "Next.js"],
      posted: "Just now",
      desc: "End-to-end product development involving database schema design and responsive frontend integration."
    }
  ];

  return (
    <div className="bg-white text-textmain overflow-x-hidden w-full max-w-[100vw] font-sans">

      {/* --- 1. HERO SECTION --- */}
      {/* 🔥 FIX: Added pt-navbar and safe mobile padding */}
      <section className="section pt-navbar relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center text-white px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/it-consulting.png"
            alt="Nighwan Tech Talent Lab"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center container-custom mt-12 md:mt-0 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brandOrange font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
          >
            INTERNSHIPS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-6 md:!mb-8 leading-[1.15] md:leading-tight break-words"
          >
            Engineering Careers. <br />
            <span className="text-gray-300">Defining Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10 w-full px-2 sm:px-0"
          >
            We transform ambitious students into high-velocity software engineers. Our internship ecosystem eliminates theoretical fluff and synchronizes your learning with global production standards for maximum professional impact.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
            <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="btn-inverse">
              Let's Talk
            </button>
            <button onClick={() => openModal("Mentorship Talk")} className="btn-inverse">
              Talk to Mentor
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. LEARNING PHILOSOPHY --- */}
      <section className="section-padding bg-white px-5 sm:px-6 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 w-full text-left">
              <h2 className="heading-xl !text-left !mb-4 md:!mb-6">The Gap Between <br />Academics & Industry</h2>
              <p className="text-muted !text-left !mx-0 !max-w-none !mb-8 text-sm md:text-base leading-relaxed">
                Traditional education often creates "Process Stagnation" in fresh talent. We solve this by immersing you in live sprints where "Dummy Projects" are replaced by scalable, real-world digital assets.
              </p>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "Radical Ownership", d: "Interns at Nighwan don't just 'assist'; they own specific feature modules from ideation to deployment." },
                  { t: "High-Velocity Mentorship", d: "Direct 1-on-1 access to senior architects to eliminate learning bottlenecks and technical debt." },
                  { t: "Enterprise Standards", d: "Learn to write clean, documented, and unit-tested code that meets international security audits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-5 items-start">
                    <ShieldCheck className="text-brandOrange w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-textmain text-base md:text-lg leading-snug">{item.t}</h4>
                      <p className="text-sm md:text-base text-gray-500 mt-1.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group order-1 lg:order-2 w-full mx-auto md:max-w-md lg:max-w-none mb-8 md:mb-0">
              <div className="absolute inset-0 bg-orange-100/50 rounded-3xl transform md:scale-105 -z-10 transition-colors" />
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl md:shadow-2xl border border-gray-100 w-full text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-textmain">Our Immersion Framework</h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  Our program implements a structured <strong>DMA (Discover, Master, Apply)</strong> approach to ensure every intern achieves technical mastery and professional maturity.
                </p>
                <ul className="space-y-4">
                  {["System Design Deep-Dives", "Agile Scrum Participation", "Code Review Rigor", "Deployment & Monitoring"].map((list, i) => (
                    <li key={i} className="flex items-start justify-start gap-3 text-sm md:text-base font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{list}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                  {/* 🔥 CSS SYNC: strictly using Universal White Pill classes */}
                  <button onClick={() => openModal("Learning Roadmap")} className="btn-primary">
                    Let's Talk <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-xl !text-white">Measured Growth</h2>
            <p className="text-muted !text-gray-300 text-sm md:text-base px-2 leading-relaxed">Our program outcomes are data-backed and directly linked to your employability index.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center">
            {[
              { v: "75%", l: "PPO Conversion", d: "High-performing interns offered full-time roles." },
              { v: "₹28k", l: "Industry-Leading Stipend", d: "Competitive reward for top-tier talent." },
              { v: "100%", l: "Practical Readiness", d: "Eliminating the need for post-hire training." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={i}>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brandOrange mb-3 md:mb-4">{stat.v}</h3>
                <p className="text-lg md:text-xl font-bold mb-2">{stat.l}</p>
                <p className="text-xs md:text-sm text-gray-400 max-w-[200px] mx-auto leading-relaxed">{stat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CORE DOMAINS (Flip Cards) --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom text-center mb-12 md:mb-16">
          <h2 className="heading-xl">Core Domains</h2>
          <p className="text-muted text-sm md:text-base px-2 leading-relaxed">Explore specialized roles tailored for the next generation of tech leaders.</p>
        </div>
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {internships.map((job, index) => (
            <div key={index} className="group h-[380px] sm:h-[420px] md:h-[450px] [perspective:1000px] cursor-pointer w-full">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">

                {/* FRONT */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-6 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center overflow-hidden">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-lg md:text-2xl mb-3 md:mb-4 text-textmain">{job.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2 overflow-y-auto no-scrollbar">{job.desc}</p>
                  <div className="mt-auto md:mt-8 text-brandOrange font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 flex-shrink-0">
                    View Logistics <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-6 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center overflow-hidden">
                  <h3 className="text-brandOrange font-bold text-lg md:text-xl mb-4 md:mb-6 text-center flex-shrink-0">Program Logistics</h3>
                  <ul className="space-y-3 md:space-y-4 mb-auto overflow-y-auto no-scrollbar w-full">
                    {[`Duration: ${job.duration}`, `Stipend: ${job.stipend}`, `Location: ${job.location}`, "Certification Included"].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm font-light text-gray-200 w-full">
                        <CheckCircle size={16} className="text-brandOrange mt-0.5 flex-shrink-0" />
                        <span className="text-left w-full leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* 🔥 CSS SYNC: Universal White Pill */}
                  <button onClick={() => openModal(job.title)} className="btn-inverse mt-6">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100 px-4 sm:px-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl w-full">
              <h2 className="heading-xl !text-left !mb-2 md:!mb-4">Beyond Coding</h2>
              <p className="text-brandGreen font-medium text-sm md:text-base leading-relaxed">We deliver specialized mentorship across various digital disciplines to ensure a holistic career foundation.</p>
            </div>
            <div className="text-gray-400 text-xs md:text-sm font-mono tracking-tighter hidden md:block">/ AREA OF EXCELLENCE</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "UI/UX Research", icon: "🎨", desc: "User-centric design systems and wireframe prototyping." },
              { title: "DevOps Engineering", icon: "⚙️", desc: "CI/CD pipelines, Dockerization, and cloud orchestration." },
              { title: "Quality Assurance", icon: "🧪", desc: "Automated testing and performance benchmarking." },
              { title: "Product Management", icon: "📊", desc: "Agile methodologies and stakeholder communication." }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 border border-gray-100 rounded-2xl hover:bg-textmain hover:text-white transition-all duration-500 group text-left w-full">
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">{item.icon}</div>
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CORE PILLARS (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-lg border border-gray-100 overflow-hidden w-full">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1 text-left w-full">
                <h2 className="heading-xl md:text-left">Our Training Ethos: <br /><span className="text-brandOrange">The 5 Intern Pillars</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "First Principles", d: "Mastering the 'Why' behind every line of code written." },
                    { p: "Code Integrity", d: "Zero compromise on scalability and performance metrics." },
                    { p: "Collaborative Flow", d: "Seamless integration within cross-functional agile teams." },
                    { p: "Feedback Loops", d: "Iterative improvement based on daily expert peer reviews." },
                    { p: "Kaizen Mindset", d: "A commitment to continuous technical self-evolution." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 items-start w-full">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs mt-0.5 flex-shrink-0">{i + 1}</span>
                      <div className="text-left">
                        <h5 className="font-bold text-textmain text-sm md:text-base leading-snug">{pillar.p}</h5>
                        <p className="text-xs md:text-sm text-gray-500 mt-1.5 leading-relaxed">{pillar.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2 w-full aspect-[4/3] md:aspect-auto md:min-h-[450px] overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src="/images/software-dev.png"
                  alt="Learning"
                  fill
                  className="object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 w-full">
                  <div className="bg-brandOrange text-white p-5 md:p-8 rounded-2xl shadow-2xl md:-rotate-3 text-center w-full max-w-[95%] sm:max-w-[85%]">
                    <p className="text-base sm:text-xl md:text-2xl font-black italic leading-tight">"Education is not the learning of facts, but the training of the mind to think."</p>
                    <span className="text-[10px] md:text-xs mt-3 block opacity-90 uppercase tracking-wider">— Albert Einstein</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. SUSTAINABLE SUCCESS --- */}
      <section className="section-padding bg-white px-4 sm:px-6">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Beyond the Program</h2>
          <p className="text-muted mb-12 md:mb-16 px-2 text-sm md:text-base leading-relaxed">We don't just provide a certificate; we build a lifelong professional bridge.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 w-full">
            {[
              { icon: <BarChart3 className="text-blue-600" />, t: "Career Coaching", d: "Resume building and mock interview sessions with our HR experts." },
              { icon: <Target className="text-green-600" />, t: "Alumni Network", d: "Join a network of former interns now working at Google, Meta, and Nighwan Tech." },
              { icon: <Zap className="text-orange-600" />, t: "Letter of Merit", d: "Performance-linked recommendations for your future academic or career pursuits." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 md:mb-6 shadow-sm">{risk.icon}</div>
                <h4 className="font-bold text-base md:text-lg mb-2">{risk.t}</h4>
                <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed mx-auto">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative px-4 sm:px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/carbon-fibre.png")' }} />
        <div className="container-custom flex flex-col items-center text-center relative z-10 py-8 md:py-12 w-full">
          <h2 className="heading-xl !text-white !mb-6 md:!mb-8">Stop Learning in Silos. <br />Start Building with Experts.</h2>
          <p className="text-muted !text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-2 leading-relaxed">Every day of delay is a missed opportunity for career acceleration. Partner with mentors who define enterprise standards.</p>
          <div className="flex justify-center items-center w-full max-w-sm mx-auto">
            {/* 🔥 CSS SYNC: Universal White Pill */}
            <button onClick={() => openModal("Apply for Internship")} className="btn-inverse">
              Request Admission Interview
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
