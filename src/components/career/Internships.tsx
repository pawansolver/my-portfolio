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
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
          alt="Nighwan Tech Talent Lab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl container-custom">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-brandOrange font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Accelerated Career Trajectory</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="heading-xl !text-white !mb-8">Engineering Careers. <br /><span className="text-gray-300">Defining Excellence.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-muted !text-gray-300 mb-10">We transform ambitious students into high-velocity software engineers. Our internship ecosystem eliminates theoretical fluff and synchronizes your learning with global production standards for maximum professional impact.</motion.p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})} className="btn-primary">View Open Internships</button>
            <button onClick={() => openModal("Mentorship Talk")} className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-black">Talk to Mentor</button>
          </div>
        </div>
      </section>

      {/* --- 2. LEARNING PHILOSOPHY --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl !text-left !mb-6">The Gap Between <br />Academics & Industry</h2>
              <p className="text-brandGreen font-medium text-lg mb-8 leading-relaxed">Traditional education often creates "Process Stagnation" in fresh talent. We solve this by immersing you in live sprints where "Dummy Projects" are replaced by scalable, real-world digital assets.</p>
              <div className="space-y-6">
                {[
                  { t: "Radical Ownership", d: "Interns at Nighwan don't just 'assist'; they own specific feature modules from ideation to deployment." },
                  { t: "High-Velocity Mentorship", d: "Direct 1-on-1 access to senior architects to eliminate learning bottlenecks and technical debt." },
                  { t: "Enterprise Standards", d: "Learn to write clean, documented, and unit-tested code that meets international security audits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><ShieldCheck className="text-brandOrange w-6 h-6" /></div>
                    <div><h4 className="font-bold text-textmain">{item.t}</h4><p className="text-sm text-gray-500">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl -z-10 group-hover:bg-orange-100 transition-colors" />
              <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Our Immersion Framework</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">Our program implements a structured <strong>DMA (Discover, Master, Apply)</strong> approach to ensure every intern achieves technical mastery and professional maturity.</p>
                
                

                <ul className="space-y-4">
                  {["System Design Deep-Dives", "Agile Scrum Participation", "Code Review Rigor", "Deployment & Monitoring"].map((list, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-textmain"><CheckCircle className="text-brandOrange w-5 h-5" /> {list}</li>
                  ))}
                </ul>
                <button onClick={() => openModal("Learning Roadmap")} className="mt-10 text-brandOrange font-bold flex items-center gap-2 hover:gap-4 transition-all">Download Roadmap <ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measured Growth</h2>
            <p className="text-gray-400">Our program outcomes are data-backed and directly linked to your employability index.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "75%", l: "PPO Conversion", d: "High-performing interns offered full-time roles." },
              { v: "₹28k", l: "Industry-Leading Stipend", d: "Competitive reward for top-tier talent." },
              { v: "100%", l: "Practical Readiness", d: "Eliminating the need for post-hire training." }
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={i}>
                <h3 className="text-6xl font-bold text-brandOrange mb-4">{stat.v}</h3>
                <p className="text-xl font-bold mb-2">{stat.l}</p>
                <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{stat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CORE DOMAINS (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Core Domains</h2>
          <p className="text-muted">Explore specialized roles tailored for the next generation of tech leaders.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {internships.map((job, index) => (
            <div key={index} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg">
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-6 shadow-sm"><Zap /></div>
                  <h3 className="font-bold text-2xl mb-4 text-textmain">{job.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{job.desc}</p>
                  <div className="mt-8 text-brandOrange font-bold text-xs uppercase tracking-widest flex items-center gap-2">View Logistics <ArrowRight size={14} /></div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-brandOrange font-bold text-xl mb-6">Program Logistics</h3>
                  <ul className="space-y-4 mb-8">
                    {[`Duration: ${job.duration}`, `Stipend: ${job.stipend}`, `Location: ${job.location}`, "Certification Included"].map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-light text-gray-200"><CheckCircle size={16} className="text-brandOrange" />{point}</li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(job.title)} className="bg-white/10 hover:bg-brandOrange text-white text-xs font-bold py-3 px-6 rounded-xl transition-colors border border-white/20">Apply This Role</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="heading-xl !text-left !mb-4">Beyond Coding</h2>
              <p className="text-brandGreen font-medium">We deliver specialized mentorship across various digital disciplines to ensure a holistic career foundation.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter">/ AREA OF EXCELLENCE</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "UI/UX Research", icon: "🎨", desc: "User-centric design systems and wireframe prototyping." },
              { title: "DevOps Engineering", icon: "⚙️", desc: "CI/CD pipelines, Dockerization, and cloud orchestration." },
              { title: "Quality Assurance", icon: "🧪", desc: "Automated testing and performance benchmarking." },
              { title: "Product Management", icon: "📊", desc: "Agile methodologies and stakeholder communication." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-textmain hover:text-white transition-all duration-500 group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CORE PILLARS --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-inner border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-textmain leading-tight">Our Training Ethos: <br /><span className="text-brandOrange">The 5 Intern Pillars</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "First Principles", d: "Mastering the 'Why' behind every line of code written." },
                    { p: "Code Integrity", d: "Zero compromise on scalability and performance metrics." },
                    { p: "Collaborative Flow", d: "Seamless integration within cross-functional agile teams." },
                    { p: "Feedback Loops", d: "Iterative improvement based on daily expert peer reviews." },
                    { p: "Kaizen Mindset", d: "A commitment to continuous technical self-evolution." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="bg-brandOrange/10 text-brandOrange font-bold px-3 py-1 rounded text-xs">{i + 1}</span>
                      <div><h5 className="font-bold text-textmain text-sm">{pillar.p}</h5><p className="text-xs text-gray-500">{pillar.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto h-full min-h-[400px]">
                <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" alt="Learning" fill className="rounded-3xl object-cover grayscale brightness-75" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-brandOrange text-white p-6 rounded-2xl shadow-2xl rotate-3">
                      <p className="text-2xl font-black italic">"Education is not the learning of facts, but the training of the mind to think."</p>
                      <span className="text-xs mt-2 block opacity-80">— Albert Einstein</span>
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
          <h2 className="heading-xl">Beyond the Program</h2>
          <p className="text-muted mb-16">We don't just provide a certificate; we build a lifelong professional bridge.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BarChart3 className="text-blue-600" />, t: "Career Coaching", d: "Resume building and mock interview sessions with our HR experts." },
              { icon: <Target className="text-green-600" />, t: "Alumni Network", d: "Join a network of former interns now working at Google, Meta, and Nighwan Tech." },
              { icon: <Zap className="text-orange-600" />, t: "Letter of Merit", d: "Performance-linked recommendations for your future academic or career pursuits." }
            ].map((risk, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">{risk.icon}</div>
                <h4 className="font-bold mb-3">{risk.t}</h4>
                <p className="text-sm text-gray-500">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="section-padding bg-textmain text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-xl !text-white !mb-8">Stop Learning in Silos. <br />Start Building with Experts.</h2>
          <p className="text-muted !text-gray-400 mb-12">Every day of delay is a missed opportunity for career acceleration. Partner with mentors who define enterprise standards.</p>
          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            <button onClick={() => openModal("Apply for Internship")} className="btn-primary">Request Admission Interview</button>
          </div>
        </div>
      </section>

    </div>
  );
}