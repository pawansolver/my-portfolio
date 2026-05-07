"use client";

import { TestimonialsSection } from "@/components/blocks/simple-animated-testimonials";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Operations Director",
    company: "LogiNext",
    content: "Nighwan Tech's AI integration completely transformed our supply chain efficiency. Their engineering standards are truly world-class and perfectly suited for MSME growth.",
    rating: 5,
    avatar: "/images/testimonial-arjun.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CTO",
    company: "Fincore Systems",
    content: "The team didn't just build a tool; they engineered a scalable future for our data infrastructure. Exceptional execution from day one in building our custom ERP.",
    rating: 5,
    avatar: "/images/testimonial-priya.png",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Founder",
    company: "EduPeak",
    content: "A rare combination of minimalist design and a powerhouse backend. They understand the delicate balance between complex tech and user-friendly experience.",
    rating: 5,
    avatar: "/images/testimonial-vikram.png",
  },
  {
    id: 4,
    name: "Ananya Iyer",
    role: "Product Manager",
    company: "HealthSphere",
    content: "Transitioning to their autonomous systems reduced our operational waste by 40% in just one quarter. The ROI has been incredible for our Industry 4.0 shift.",
    rating: 5,
    avatar: "/images/testimonial-ananya.png",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white">
      <TestimonialsSection
        title="Client Success Stories"
        subtitle="Real feedback from global industry leaders who transitioned to autonomous systems with us."
        testimonials={testimonials}
      />
    </div>
  );
}
