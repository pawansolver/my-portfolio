import { ArrowRight, BrainCircuit, Network, Cpu, Zap, Target, LineChart, Binary, Bot } from 'lucide-react';
import Link from 'next/link';

export default function AIML() {
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
            AI & Machine <span className="text-brandOrange">Learning</span>
          </h1>
          <p className="text-muted !text-white !text-left !mx-0">
            Intelligent Evolution. We build custom neural architectures and predictive models that transform raw data into autonomous decision-making engines for the modern enterprise.
          </p>
          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-block">
              Deploy Intelligence
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 text-white/5 font-bold text-[30vw] select-none pointer-events-none uppercase leading-none">
          AI
        </div>
      </section>

      {/* 2. LOGO SLIDER (AI Tech Stack) */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex overflow-hidden">
            <div className="animate-infinite-scroll flex items-center">
              {["PyTorch", "TensorFlow", "OpenAI", "NVIDIA", "HuggingFace", "Python", "AWS SageMaker", "Azure AI", "LangChain", "Databricks"].map((brand, index) => (
                <span key={index} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
              {/* Loop Duplicate */}
              {["PyTorch", "TensorFlow", "OpenAI", "NVIDIA", "HuggingFace", "Python", "AWS SageMaker", "Azure AI", "LangChain", "Databricks"].map((brand, index) => (
                <span key={`loop-${index}`} className="text-3xl font-black uppercase tracking-tighter text-textmain px-12 block">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COGNITIVE VISION */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl">
          <h2 className="text-brandOrange font-bold uppercase text-xs tracking-[0.4em] mb-6">01 / The Intelligence</h2>
          <p className="text-textmain font-bold text-3xl md:text-5xl leading-tight">
            Stop guessing. <span className="text-brandOrange underline">Start predicting.</span>
          </p>
          <p className="text-muted !text-left !mx-0 mt-8">
            Our AI solutions go beyond simple automation. We implement Deep Learning and NLP (Natural Language Processing) to create systems that learn, adapt, and solve complex business challenges with mathematical precision.
          </p>
        </div>
      </section>

      {/* 4. AI CAPABILITIES (Horizontal Slider) */}
      <section className="py-20 bg-textmain overflow-hidden">
        <div className="container-custom mb-12">
          <h2 className="heading-xl !text-white !text-left !mb-0">Core Expertise</h2>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-32 no-scrollbar snap-x">
          {[
            { t: "Generative AI", d: "Custom LLMs and creative automation for enterprise scale.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
            { t: "Computer Vision", d: "Real-time object detection and visual recognition systems.", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a" },
            { t: "Predictive Analytics", d: "Forecasting market trends with high-accuracy ML models.", img: "https://images.unsplash.com/photo-1551288049-bbbda5366392" },
            { t: "Neural Automation", d: "Replacing manual workflows with self-learning robotic processes.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" }
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
        <h2 className="heading-xl !text-left !mb-16">The AI Lifecycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Binary className="text-brandOrange" />, label: "Data Sourcing", desc: "Cleaning and labeling raw datasets for model training." },
            { icon: <BrainCircuit className="text-brandOrange" />, label: "Model Arch", desc: "Selecting the right neural network and hyperparameters." },
            { icon: <Cpu className="text-brandOrange" />, label: "Training", desc: "Running intense compute cycles to optimize performance." },
            { icon: <Bot className="text-brandOrange" />, label: "Deployment", desc: "Integrating AI models into your production environment." }
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

      {/* 6. AI PERFORMANCE METRICS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "98%", lab: "Model Accuracy" },
            { val: "10x", lab: "Process Speed" },
            { val: "60%", lab: "Cost Savings" },
            { val: "Real-time", lab: "Inference" }
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
            Lead the <span className="text-brandOrange">Revolution</span>
          </h2>
          <p className="text-muted !text-white !mb-12">
            The future is autonomous. Is your business ready to leverage the power of artificial intelligence?
          </p>
          <Link href="/contact" className="btn-primary !bg-brandOrange">
            Start AI Project <ArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}