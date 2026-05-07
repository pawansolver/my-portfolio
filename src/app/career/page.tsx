import React from 'react';
import Link from 'next/link';

export interface CareerPage {
  slug: string;
  title: string;
  shortDesc: string;
}

export const careerPages: CareerPage[] = [
  {
    slug: "internship-programs",
    title: "Internship Programs",
    shortDesc: "Gain hands-on experience with real-world projects.",
  },
  {
    slug: "life-at-nighwan",
    title: "Life at Nighwan",
    shortDesc: "Explore our culture, growth, and innovation mindset.",
  },
  {
    slug: "current-openings",
    title: "Current Openings",
    shortDesc: "Join our elite team and build impactful solutions.",
  },
];

// 🚀 FIX: Ye 'export default' function hona mandatory hai Next.js mein
export default function Career() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="heading-xl">Careers at NighwanTech</h1>
        <p className="text-muted mb-12">Join our world-class engineering team and grow with us.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerPages.map((page) => (
            <div key={page.slug} className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-brandOrange mb-4 uppercase italic">{page.title}</h3>
              <p className="text-brandGreen mb-6">{page.shortDesc}</p>
              <Link
                href={`/career/${page.slug}`}
                className="btn-primary inline-block text-sm"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
