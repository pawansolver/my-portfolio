/**
 * Home Page - Next.js 13+ App Router
 * 
 * Full-screen hero page with multiple sections:
 * 1. Particle effect section with 3D text
 * 2. Video background section with animations
 * 3. Services section with interactive cards
 * 
 * Features:
 * - Smooth navigation between sections
 * - Keyboard and wheel navigation
 * - Responsive design
 * - Performance optimized
 */

import HomeContent from './HomeContent';

export const metadata = {
  title: "NighwanTech - AI Innovation & Technology Solutions",
  description: "Experience cutting-edge AI solutions with interactive particle effects and video demonstrations",
};

/**
 * Home Page - Server Component
 * Uses client components for interactive elements
 */
export default function HomePage() {
  return <HomeContent />;
}
