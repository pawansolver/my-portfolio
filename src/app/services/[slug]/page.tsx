import { notFound } from 'next/navigation';
// Components Import
import LeanConsultancy from './LeanConsultancy';
import Branding from './Branding';
import IoT from './IoT';
import DigitalMarketing from './DigitalMarketing';
import ERPDevelopment from './ERPDevelopment';
import AIML from './AIML';
import WebMobile from './WebMobile';
import DataAnalytics from './DataAnalytics';
import DevOps from './DevOps';
import ITSupport from './ITSupport';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Map slugs to components
  const components: Record<string, React.ReactNode> = {
    "lean-consultancy": <LeanConsultancy />,
    "branding": <Branding />,
    "iot-solutions": <IoT />,
    "digital-marketing": <DigitalMarketing />,
    "erp-development": <ERPDevelopment />,
    "ai-ml-solutions": <AIML />,
    "web-mobile-app": <WebMobile />,
    "data-analytics": <DataAnalytics />,
    "devops-services": <DevOps />,
    "it-support": <ITSupport />,
  };

  const SelectedComponent = components[slug];

  if (!SelectedComponent) {
    notFound();
  }

  return <>{SelectedComponent}</>;
}