/**
 * Home Page - Next.js 13+ App Router
 * 
 * This page demonstrates the ParticleHero component with a full-screen
 * 3D particle text hero section.
 * 
 * The ParticleHero component:
 * - Renders "NighwanTech" using thousands of floating 3D particles
 * - Interactive mouse/touch repulsion physics
 * - GPU-optimized with Three.js and React Three Fiber
 * - Responsive with Tailwind CSS styling
 */

import ParticleHero from "@/components/home/ParticleHero";

// Metadata for the page
export const metadata = {
  title: "NighwanTech - Transform Your Business",
  description: "Next-generation SaaS solutions powered by AI and cutting-edge technology",
};

/**
 * Home Page Component
 * 
 * Features:
 * - Full-screen hero with 3D particle text
 * - Gradient background with overlay content
 * - Call-to-action buttons with click handlers
 * - Responsive design for all devices
 */
export default function HomePage() {
  // Handle CTA button clicks
  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Navigate to signup or open modal
    // router.push('/signup');
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
    // Scroll to features section or navigate
    // document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Particle Text */}
      <ParticleHero
        headline="Transform Your Business"
        subheadline="Next-generation SaaS solutions powered by AI and cutting-edge technology"
        primaryCta="Get Started"
        secondaryCta="Learn More"
        onPrimaryClick={handleGetStarted}
        onSecondaryClick={handleLearnMore}
        particleText="NighwanTech"
        showVideoBackground={false} // Set to true and provide videoSrc to enable video
      />

      {/* Additional sections can be added below */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to innovate?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join thousands of companies already using NighwanTech to power their digital transformation.
          </p>
        </div>
      </section>
    </main>
  );
}
