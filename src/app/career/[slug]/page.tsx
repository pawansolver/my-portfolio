import { careerData } from '../careerData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Ye function batata hai ki kaun-kaun se pages generate karne hain
  return Object.keys(careerData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CareerDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Data fetch kar rahe hain slug ke base par
  const content = careerData[slug as keyof typeof careerData];

  // Agar slug match nahi hota toh 404 dikhao
  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Subtitle */}
          <span className="text-brandOrange font-black tracking-[0.3em] uppercase text-sm">
            {content.subtitle}
          </span>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] uppercase italic leading-[0.9] tracking-tighter">
            {content.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            {content.description}
          </p>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
            {content.points.map((point, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-brandOrange/10 rounded-full mb-6 flex items-center justify-center group-hover:bg-brandOrange transition-colors">
                  <span className="text-brandOrange group-hover:text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase italic">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}