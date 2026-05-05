import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSolutions from './FooterSolutions';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-12 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-t border-gray-100">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        {/* Brand Section - Spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <FooterBrand />
        </div>

        {/* Links Sections */}
        <FooterLinks />
        <FooterSolutions />
        <FooterContact />
      </div>

      {/* Middle Section - Giant Text */}
      <div className="w-full text-center py-8 md:py-16 select-none opacity-90 hover:opacity-100 transition-opacity duration-500">
        <h1
          className="font-bold tracking-tighter leading-none text-black"
          style={{ fontSize: 'clamp(3rem, 14vw, 16rem)' }}
        >
          Nighwan Tech
        </h1>
      </div>

      {/* Bottom Section */}
      <FooterBottom />
    </footer>
  );
}
