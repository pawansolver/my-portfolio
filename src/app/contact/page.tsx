import ContactPage from '@/components/home/ContactSection';

export default function Contact() {
  return (
    <main>
      {/* Navbar ke piche content na chupe isliye padding top (pt-20) add kar sakte hain */}
      <section id="contact" className="pt-20">
        {/* YAHAN CHANGE HAI: true pass karein */}
        <ContactPage isFullPage={true} />
      </section>
    </main>
  );
}
