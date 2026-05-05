import { notFound } from 'next/navigation';

// Components Import
import CompanyOverview from './CompanyOverview';
import Leadership from './Leadership';
import MissionValues from './MissionValues';
import WhyChooseUs from './WhyChooseUs';

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Map slugs to components exactly like your services logic
  const components: Record<string, React.ReactNode> = {
    "company-overview": <CompanyOverview />,
    "leadership": <Leadership />,
    "mission-and-values": <MissionValues />,
    "why-choose-us": <WhyChooseUs />,
  };

  const SelectedComponent = components[slug];

  if (!SelectedComponent) {
    notFound();
  }

  return <>{SelectedComponent}</>;
}