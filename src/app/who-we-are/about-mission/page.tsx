"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Star, Users, ChevronRight } from "lucide-react";

export default function AboutMissionPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cards = [
    {
      title: "About NighwanTech",
      description:
        "NighwanTech delivers intelligent, scalable and future-ready digital solutions.",
      content: (
        <>
          <p className="mt-3">
            <strong>Mission:</strong> Empower enterprises with smart,
            performance-driven technology.
          </p>
          <p className="mt-2">
            <strong>Vision:</strong> Become a global leader in digital
            transformation.
          </p>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Our Core Values",
      description:
        "Principles guiding innovation, integrity and long-term partnerships.",
      content: (
        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <span>Innovation</span>
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span>Integrity</span>
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-500" />
            <span>Quality</span>
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span>Client-Centric Approach</span>
          </li>
        </ul>
      ),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      title: "Corporate Responsibility",
      description:
        "Committed to transparency, sustainability and ethical governance.",
      content: (
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>Data Privacy</li>
          <li>Ethical Business Standards</li>
          <li>Sustainable Digital Practices</li>
        </ul>
      ),
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Our Work & Impact",
      description:
        "Delivering measurable digital transformation across industries.",
      content: (
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>100+ Projects Delivered</li>
          <li>AI & ERP Expertise</li>
          <li>Multi-Industry Solutions</li>
        </ul>
      ),
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            About & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
          >
            Building Intelligent Digital Transformation
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-56 relative">
                {/* Gradient Overlay for better text readability if we put text over image, but here it's separate. 
                     Just keeping it clean. */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {card.description}
                </p>

                <button
                  onClick={() => toggleCard(index)}
                  className="mt-5 text-orange-500 font-medium flex items-center gap-1 group/btn"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                {/* Expandable Content - Smooth Animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCard === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="text-sm text-gray-600 border-t border-gray-100 pt-4">
                    {card.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
