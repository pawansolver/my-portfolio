import { notFound } from "next/navigation";
import { careerPages } from "@/data/careerData";

import Internships from "@/components/career/Internships";
import LifeAtNighwan from "@/components/career/LifeAtNighwan";
import Openings from "@/components/career/Openings";

const layoutMap = {
  "internship-programs": Internships,
  "life-at-nighwan": LifeAtNighwan,
  "current-openings": Openings,
};

export default async function CareerSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIX

  const data = careerPages.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  const SelectedComponent =
    layoutMap[slug as keyof typeof layoutMap];

  if (!SelectedComponent) {
    notFound();
  }

  return <SelectedComponent />;
}