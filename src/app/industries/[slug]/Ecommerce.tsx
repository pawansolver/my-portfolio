"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShoppingCart, Globe, BarChart3, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export default function EcommercePage() {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-textmain overflow-x-hidden w-full max-w-[100vw] font-sans">

      {/* --- 1. HERO SECTION --- */}
      <section className="section pt-navbar relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center text-white px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/web-dev.png"
            alt="E-commerce Fulfillment"
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
            E-Commerce
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-xl !text-white !mb-6 md:!mb-8 leading-[1.15] md:leading-tight break-words"
          >
            Zero-Downtime <br />
            <span className="text-gray-300">Global Commerce.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted !text-gray-300 mb-10 w-full px-2 sm:px-0"
          >
            We build high-conversion storefronts that never buckle under pressure. From headless
            commerce architectures to AI-powered recommendation engines, we ensure your
            brand delivers a seamless shopping experience at any scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
          >
            <button onClick={() => openModal("Retail Audit")} className="btn-inverse">
              Let's Talk
            </button>
            {/* 🔥 FIX: Changed 'btn-secondary' to 'btn-inverse' to guarantee the Universal White Pill style */}
            <button onClick={() => openModal("Expert Consultation")} className="btn-inverse">
              Talk to Commerce Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BUSINESS CHALLENGES --- */}
      <section className="section-padding bg-white px-5 sm:px-6 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 w-full text-left">
              <h2 className="heading-xl !text-left !mb-4 md:!mb-6">The Friction of <br />Digital Retail</h2>
              <p className="text-muted !text-left !mx-0 !max-w-none !mb-8 text-sm md:text-base leading-relaxed">
                In E-commerce, a 1-second delay in page load costs 7% in conversions.
                Managing massive traffic spikes while maintaining security and inventory
                accuracy is the ultimate engineering challenge.
              </p>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "Flash Sale Crashes", d: "Infrastructure that fails during peak traffic, leading to massive revenue loss." },
                  { t: "Cart Abandonment", d: "High friction checkout processes and slow loading times killing your margins." },
                  { t: "Inventory Desync", d: "Ghost inventory issues across multiple channels causing customer dissatisfaction." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-5 items-start">
                    <Zap className="text-brandOrange w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-1" />
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
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-textmain">Omnichannel Core</h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  Our architecture uses <strong>Headless Commerce</strong> to decouple your
                  front-end from back-end, allowing for extreme speed and total
                  design flexibility across mobile, web, and social.
                </p>

                <ul className="space-y-4">
                  {["Scalable Microservices", "Global CDN Integration", "Unified Inventory Sync", "AI Personalized Discovery"].map((list, i) => (
                    <li key={i} className="flex items-start justify-start gap-3 text-sm md:text-base font-semibold text-textmain">
                      <CheckCircle className="text-brandOrange w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{list}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                  <button onClick={() => openModal("Commerce Framework")} className="btn-primary">
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
            <h2 className="heading-xl !text-white">Retail Growth Metrics</h2>
            <p className="text-muted !text-gray-300 text-sm md:text-base px-2">Our solutions are built to move the needle on your most critical KPIs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center">
            {[
              { v: "2.5x", l: "Conversion Boost", d: "Achieved through lightning-fast page speeds." },
              { v: "0ms", l: "Lag Tolerance", d: "Global edge caching for instant product discovery." },
              { v: "50M+", l: "Annual Requests", d: "Proven capability to handle hyper-scale traffic." }
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

      {/* --- 4. SERVICES (Flip Cards) --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom text-center mb-12 md:mb-16">
          <h2 className="heading-xl">Commerce Competencies</h2>
          <p className="text-muted text-sm md:text-base px-2">Future-proofing your retail engine with modern engineering.</p>
        </div>

        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <div key={index} className="group h-[380px] sm:h-[420px] md:h-[450px] [perspective:1000px] cursor-pointer w-full">
              <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-6 md:p-10 [backface-visibility:hidden] border border-gray-100 flex flex-col items-center text-center justify-center overflow-hidden">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-brandOrange rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg md:text-2xl mb-3 md:mb-4 text-textmain">{service.t}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2 overflow-y-auto no-scrollbar">
                    {service.d}
                  </p>
                  <div className="mt-auto md:mt-8 text-brandOrange font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 flex-shrink-0">
                    Tap to Flip <ArrowRight size={14} />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-textmain p-6 md:p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center overflow-hidden">
                  <h3 className="text-brandOrange font-bold text-lg md:text-xl mb-4 md:mb-6 text-center flex-shrink-0">{service.backTitle}</h3>
                  <ul className="space-y-3 md:space-y-4 mb-auto overflow-y-auto no-scrollbar w-full">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm font-light text-gray-200 w-full">
                        <CheckCircle size={16} className="text-brandOrange mt-0.5 flex-shrink-0" />
                        <span className="text-left w-full leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(service.t)} className="btn-inverse mt-6">
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
              <h2 className="heading-xl md:text-left !mb-2 md:!mb-4">E-commerce Domains</h2>
              <p className="text-brandGreen font-medium text-sm md:text-base leading-relaxed">We deliver specialized frameworks for every business model, from D2C startups to B2B giants.</p>
            </div>
            <div className="text-gray-400 text-xs md:text-sm font-mono tracking-tighter hidden md:block">/ INDUSTRY FOCUS</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "D2C Brands", icon: "📦", desc: "Brand-centric experiences with integrated storytelling and loyalty." },
              { title: "B2B Marketplaces", icon: "🏢", desc: "Bulk ordering, custom pricing, and multi-vendor coordination." },
              { title: "Fashion & Lifestyle", icon: "👗", desc: "Visual-first interfaces with high-performance media delivery." },
              { title: "SaaS Commerce", icon: "☁️", desc: "Subscription-based billing and automated seat management." }
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

      {/* --- 6. PHILOSOPHY SECTION --- */}
      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-lg border border-gray-100 overflow-hidden w-full">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

              <div className="space-y-8 order-2 lg:order-1 text-left w-full">
                <h2 className="heading-xl md:text-left">Our Philosophy: <br /><span className="text-brandOrange">Velocity Over Static</span></h2>
                <div className="space-y-6">
                  {[
                    { p: "Mobile-First DNA", d: "Engineering experiences optimized for the 70% of shoppers on mobile." },
                    { p: "Incremental Scaling", d: "Systems that grow with you, from 100 to 100k orders per day." },
                    { p: "Conversion-Centric", d: "Every line of code is written to reduce checkout friction." },
                    { p: "Reliability Focus", d: "Zero-downtime during the biggest sales events of the year." },
                    { p: "Data Sovereignty", d: "Ensuring you own your customer data and insights, always." }
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
                  src="/images/project-4.png"
                  alt="Modern Retail"
                  fill
                  className="object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 w-full">
                  <div className="bg-brandOrange text-white p-5 md:p-8 rounded-2xl shadow-2xl md:rotate-3 text-center w-full max-w-[95%] sm:max-w-[85%]">
                    <p className="text-base sm:text-xl md:text-2xl font-black italic leading-tight">"Speed is the ultimate luxury in E-commerce."</p>
                    <span className="text-[10px] md:text-xs mt-3 block opacity-90 uppercase tracking-wider">— Conversion Excellence Motto</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RISK MITIGATION --- */}
      <section className="section-padding bg-white px-4 sm:px-6">
        <div className="container-custom text-center">
          <h2 className="heading-xl">Profit Protection Engineering</h2>
          <p className="text-muted mb-12 md:mb-16 px-2 text-sm md:text-base">E-commerce is a game of margins. We protect yours with superior engineering.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 w-full">
            {[
              { icon: <Zap className="text-blue-600" />, t: "Load Balancing", d: "Intelligent traffic routing to prevent server overload during spikes." },
              { icon: <BarChart3 className="text-green-600" />, t: "Inventory Guard", d: "Real-time sync to prevent overselling and customer disputes." },
              { icon: <ShoppingCart className="text-orange-600" />, t: "Checkout Recovery", d: "Automated systems to capture and recover abandoned carts." }
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
          <h2 className="heading-xl !text-white !mb-6 md:!mb-8">Stop Losing Sales to <br />Slow Infrastructure.</h2>
          <p className="text-muted !text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-2">Scale your brand with a tech partner who understands the high-stakes world of modern digital retail.</p>

          <div className="flex justify-center items-center w-full max-w-sm mx-auto">
            <button onClick={() => openModal("Ecommerce Strategy Call")} className="btn-inverse">
              Let's Talk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
