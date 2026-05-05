import { notFound } from "next/navigation";
import { careerPages } from "@/data/careerData";
import { getJobOpenings } from "@/actions/career";

import Internships from "@/components/career/Internships";
import LifeAtNighwan from "@/components/career/LifeAtNighwan";
import Openings from "@/components/career/Openings";

// 🔥 FIX: Ye 2 lines Next.js ko cache rokne aur hamesha fresh data lane ko bolengi
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CareerSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = careerPages.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  // Sirf current-openings page ke liye jobs fetch kar
  if (slug === "current-openings") {
    const { data: jobs } = await getJobOpenings();
    return <Openings initialJobs={jobs} />;
  }

  const layoutMap = {
    "internship-programs": Internships,
    "life-at-nighwan": LifeAtNighwan,
  };

  const SelectedComponent = layoutMap[slug as keyof typeof layoutMap];

  if (!SelectedComponent) {
    notFound();
  }

  return <SelectedComponent />;
}