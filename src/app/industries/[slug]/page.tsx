import { notFound } from 'next/navigation';

// Components Import
import Healthcare from './Healthcare';
import Fintech from './Fintech';
import Ecommerce from './Ecommerce';
import Education from './Education';
import Enterprise from './Enterprise';
import HRMS from './HRMS';

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Map slugs to components (Logic same as your Services page)
  const components: Record<string, React.ReactNode> = {
    "healthcare": <Healthcare />,
    "fintech": <Fintech />,
    "e-commerce": <Ecommerce />, // Navbar slugify logic matches this
    "education": <Education />,
    "enterprise": <Enterprise />,
    "hrms": <HRMS />,
  };

  const SelectedComponent = components[slug];

  if (!SelectedComponent) {
    // Agar koi slug match nahi hota (e.g. /industries/unknown)
    notFound();
  }

  return <>{SelectedComponent}</>;
}
