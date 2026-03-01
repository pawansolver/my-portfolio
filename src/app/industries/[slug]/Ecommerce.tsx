"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShoppingCart, Globe, BarChart3, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function EcommercePage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-hidden font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section relative min-h-[90vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
          alt="E-commerce Fulfillment"
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
            Hyper-Scale Retail Engineering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-8"
          >
            Zero-Downtime <br />
            <span className="text-gray-300">Global Commerce.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10"
          >
            We build high-conversion storefronts that never buckle under pressure. From headless
            commerce architectures to AI-powered recommendation engines, we ensure your
            brand delivers a seamless shopping experience at any scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button onClick={() => openModal("Retail Audit")} className="btn-primary">
              Audit My Storefront
            </button>
            <button onClick={() => openModal("Expert Consultation")} className="btn-primary !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-black">
              Talk to Commerce Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-xl md:text-left !mb-6">The Friction of <br />Digital Retail</h2>
              <p className="text-muted md:text-left !mx-0 !max-w-none !mb-8">
                In E-commerce, a 1-second delay in page load costs 7% in conversions.
                Managing massive traffic spikes while maintaining security and inventory
                accuracy is the ultimate engineering challenge.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Flash Sale Crashes", d: "Infrastructure that fails during peak traffic, leading to massive revenue loss." },
                  { t: "Cart Abandonment", d: "High friction checkout processes and slow loading times killing your margins." },
                  { t: "Inventory Desync", d: "Ghost inventory issues across multiple channels causing customer dissatisfaction." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Zap className="text-brandOrange w-6 h-6 flex-shrink-0" /></div>
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
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Omnichannel Core</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center md:text-left">
                  Our architecture uses <strong>Headless Commerce</strong> to decouple your
                  front-end from back-end, allowing for extreme speed and total
                  design flexibility across mobile, web, and social.
                </p>

                <div className="my-6 text-center text-gray-400 italic">

                </div>

                <ul className="space-y-4">
                  {["Scalable Microservices", "Global CDN Integration", "Unified Inventory Sync", "AI Personalized Discovery"].map((list, i) => (
                    <li key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0" /> {list}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <button onClick={() => openModal("Commerce Framework")} className="btn-primary mt-10 flex items-center gap-2">
                    Download Scaling Guide <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. IMPACT STATS --- */}
      <section className="section-padding bg-textmain text-white">
        <div className="container-custom text-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl !text-white">Retail Growth Metrics</h2>
            <p className="text-muted !text-gray-300">Our solutions are built to move the needle on your most critical KPIs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { v: "2.5x", l: "Conversion Boost", d: "Achieved through lightning-fast page speeds." },
              { v: "0ms", l: "Lag Tolerance", d: "Global edge caching for instant product discovery." },
              { v: "50M+", l: "Annual Requests", d: "Proven capability to handle hyper-scale traffic." }
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

      {/* --- 4. SERVICES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="heading-xl">Commerce Competencies</h2>
          <p className="text-muted">Future-proofing your retail engine with modern engineering.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container-custom">
          {[
            {
              t: "Headless Migration",
              icon: <ShoppingCart />,
              d: "Transitioning legacy monoliths to flexible, API-first headless commerce frameworks.",
              backTitle: "Agile Storefronts",
              points: ["Next.js/React Frontends", "Shopify/BigCommerce Integration", "Speed Optimization", "Custom UX Workflows"]
            },
            {
              t: "Global Scalability",
              icon: <Globe />,
              d: "Infrastructure designed to handle multi-region deployments and localized shopping.",
              backTitle: "Borderless Retail",
              points: ["Multi-Currency Support", "Edge Delivery", "Localized SEO", "Global CDN Setup"]
            },
            {
              t: "Predictive Analytics",
              icon: <BarChart3 />,
              d: "AI-driven insights to forecast demand, optimize pricing, and personalize user journeys.",
              backTitle: "Data-Led Growth",
              points: ["Churn Prediction", "Dynamic Pricing", "Customer LTV Tracking", "A/B Testing Engines"]
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
                    Hover to Flip <ArrowRight size={14} />
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
                    Get Retail Roadmap
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SECTOR SPECIALIZATION --- */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="heading-xl md:text-left !mb-4">E-commerce Domains</h2>
              <p className="text-brandGreen font-medium">We deliver specialized frameworks for every business model, from D2C startups to B2B giants.</p>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-tighter hidden md:block">/ INDUSTRY FOCUS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "D2C Brands", icon: "📦", desc: "Brand-centric experiences with integrated storytelling and loyalty." },
              { title: "B2B Marketplaces", icon: "🏢", desc: "Bulk ordering, custom pricing, and multi-vendor coordination." },
              { title: "Fashion & Lifestyle", icon: "👗", desc: "Visual-first interfaces with high-performance media delivery." },
              { title: "SaaS Commerce", icon: "☁️", desc: "Subscription-based billing and automated seat management." }
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

      {/* --- 6. PHILOSOPHY SECTION (SAFE BOX FIX) --- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-inner border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

              <div className="space-y-8 text-center md:text-left">
                <h2 className="heading-xl md:text-left">Our Philosophy: <br /><span className="text-brandOrange">Velocity Over Static</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Mobile-First DNA", d: "Engineering experiences optimized for the 70% of shoppers on mobile." },
                    { p: "Incremental Scaling", d: "Systems that grow with you, from 100 to 100k orders per day." },
                    { p: "Conversion-Centric", d: "Every line of code is written to reduce checkout friction." },
                    { p: "Reliability Focus", d: "Zero-downtime during the biggest sales events of the year." },
                    { p: "Data Sovereignty", d: "Ensuring you own your customer data and insights, always." }
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
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070"
                  alt="Modern Retail"
                  fill
                  className="object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-brandOrange text-white p-6 md:p-8 rounded-2xl shadow-2xl rotate-0 md:-rotate-3 text-center w-full max-w-[90%] md:max-w-[85%]">
                    <p className="text-xl md:text-2xl font-black italic leading-tight">"Speed is the ultimate luxury in E-commerce."</p>
                    <span className="text-xs md:text-sm mt-3 block opacity-80">— Conversion Excellence Motto</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION --- */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Profit Protection Engineering</h2>
          <p className="text-muted mb-16">E-commerce is a game of margins. We protect yours with superior engineering.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Load Balancing", d: "Intelligent traffic routing to prevent server overload during spikes." },
              { icon: <BarChart3 className="text-green-600" />, t: "Inventory Guard", d: "Real-time sync to prevent overselling and customer disputes." },
              { icon: <ShoppingCart className="text-orange-600" />, t: "Checkout Recovery", d: "Automated systems to capture and recover abandoned carts." }
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
          <h2 className="heading-xl !text-white !mb-8">Stop Losing Sales to <br />Slow Infrastructure.</h2>
          <p className="text-muted !text-gray-400 mb-12 max-w-3xl mx-auto">Scale your brand with a tech partner who understands the high-stakes world of modern digital retail.</p>

          <div className="flex justify-center items-center w-full">
            <button onClick={() => openModal("Ecommerce Strategy Call")} className="btn-primary">
              Scale My Store
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}