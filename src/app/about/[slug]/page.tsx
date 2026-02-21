import { aboutData } from '../aboutData';
import { notFound } from 'next/navigation';

// SEO aur Static Generation ke liye
export async function generateStaticParams() {
  return Object.keys(aboutData).map((slug) => ({
    slug: slug,
  }));
}

export default async function AboutDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = aboutData[slug as keyof typeof aboutData];

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-brandOrange font-black tracking-[0.3em] uppercase text-sm">
            About Nighwan
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-textmain uppercase italic leading-[0.9] tracking-tighter">
            {content.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            {content.description}
          </p>

          {/* About Specific Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-left">
            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-black text-textmain mb-4 uppercase italic">Our Vision</h3>
              <p className="text-gray-500">To be the catalyst for digital evolution, helping brands navigate the complex tech landscape with ease.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-black text-textmain mb-4 uppercase italic">Our Impact</h3>
              <p className="text-gray-500">Delivering measurable growth and operational efficiency through lean technology and AI integration.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}