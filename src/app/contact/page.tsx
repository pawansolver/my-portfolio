// src/app/contact/page.tsx
import ContactSection from '@/components/home/ContactSection';

export default function ContactPage() {
  return (
    // pt-32 (Desktop) aur pt-24 (Mobile) Navbar ke liye space bana dega
    <main className="pt-24 md:pt-32 bg-brandOrange"> 
      <ContactSection isFullPage={true} />
    </main>
  );
}