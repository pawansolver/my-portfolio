import { industriesData } from '../industriesData';
import { notFound } from 'next/navigation';

// Next.js 15 ke liye static params (SEO & Speed)
export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug: slug,
  }));
}

// SEO Metadata (Next.js 15 Fix)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData[resolvedParams.slug as keyof typeof industriesData];
  
  return {
    title: industry ? `${industry.title} Industry | YourBrand` : 'Industry Not Found',
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Promise ko unwrap karne ke liye await
  const { slug } = await params;
  const industry = industriesData[slug as keyof typeof industriesData];

  if (!industry) {
    notFound();
  }

  return (
    <main className="section section-padding min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <span className="text-brandOrange font-bold tracking-widest text-sm uppercase">
            Industry Expertise
          </span>

          <h1 className="heading-xl">
            {industry.title} Solutions
          </h1>

          <p className="text-muted max-w-3xl">
            {industry.description}
          </p>

          {/* Industry Specific Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 max-w-5xl">
            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:border-brandOrange transition-colors">
              <h3 className="font-bold text-xl mb-3">Tailored Experience</h3>
              <p className="text-sm text-gray-500 text-balance">We build solutions specifically for the {industry.title} landscape, ensuring all vertical-specific needs are met.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:border-brandOrange transition-colors">
              <h3 className="font-bold text-xl mb-3">Industry Compliance</h3>
              <p className="text-sm text-gray-600">Our {industry.title} systems are built with global standards and security protocols in mind.</p>
            </div>
          </div>

          <div className="pt-12">
            <button className="btn-primary">
              Discuss Your {industry.title} Project
            </button>
          </div>
          
        </div>
      </div>
    </main>
  );
}