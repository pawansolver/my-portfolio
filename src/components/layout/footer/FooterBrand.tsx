import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterBrand = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="text-2xl font-bold text-black tracking-tight">
        NighwanTech
      </Link>
      <p className="text-sm text-gray-500 max-w-xs">
        Building Intelligent Digital Ecosystems with AI, Automation & Innovation.
      </p>
      <div className="flex space-x-4 pt-2">
        <a
          href="https://www.facebook.com/Nighwantech"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-400 group"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://www.instagram.com/nighwantech/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-400 group"
          aria-label="Instagram"
        >
          <FaInstagram size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://x.com/nighwantech"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-400 group"
          aria-label="Twitter"
        >
          <FaTwitter size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-400 group"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://www.youtube.com/@Nighwantech"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-400 group"
          aria-label="YouTube"
        >
          <FaYoutube size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;