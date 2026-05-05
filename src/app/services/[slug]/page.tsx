import { notFound } from "next/navigation";
import { getServiceBySlugAction, getAllServicesAction } from "@/actions/services";
import ServiceClientUI from "./ServiceClientUI";

// 🚀 1. THIS IS THE MAGIC BULLET: generateStaticParams 
// Next.js will call this EXACTLY ONCE during Vercel's build phase.
export async function generateStaticParams() {
  const result = await getAllServicesAction();
  
  if (!result || !result.success || !result.data) {
    // If the backend is dead during build, return empty so it doesn't crash the build.
    // Dynamic params will fallback to SSR (force-dynamic) on the fly.
    return [];
  }

  // Pre-generate static HTML for every single slug in your database
  return result.data.map((service: any) => ({
    slug: service.slug,
  }));
}

// 🚀 2. DYNAMIC ROUTING SAFETY
// If a user visits a slug that wasn't generated at build time (a brand new service),
// 'true' forces Vercel to dynamically generate and cache it on the fly.
export const dynamicParams = true; 
// Ensures the page doesn't aggressively cache if layout logic demands changes
export const revalidate = 60; // ISR cache revalidation (seconds)

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // 🚀 NEXT.js 15: Await params safely
  const { slug } = await params;

  // 🚀 3. SERVER-SIDE FETCHING
  // This runs directly on the Vercel server (no client-side latency issues)
  const result = await getServiceBySlugAction(slug);

  // 🚀 4. INTELLIGENT 404 HANDLING
  if (!result || !result.success || !result.data) {
    return notFound();
  }

  // 🚀 5. PASS TO CLIENT UI
  return <ServiceClientUI s={result.data} />;
}