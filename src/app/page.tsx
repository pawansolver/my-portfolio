/**
 * Home Page - Next.js 13+ App Router
 * 
 * Hydration-safe implementation:
 * - Server component (no "use client")
 * - ParticleHero is a client component with all browser-only code isolated
 * - No function props passed (functions can't serialize from server to client)
 */

import ParticleHero from "@/components/home/ParticleHero";

export const metadata = {
  title: "NighwanTech - Transform Your Business",
  description: "Next-generation SaaS solutions powered by AI and cutting-edge technology",
};

/**
 * Home Page - Server Component
 * Click handlers are defined inside ParticleHero (client component)
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ParticleHero
        headline="Transform Your Business"
        subheadline="Next-generation SaaS solutions powered by AI and cutting-edge technology"
        primaryCta="Get Started"
        secondaryCta="Learn More"
        particleText="NighwanTech"
      />
    </main>
  );
}
