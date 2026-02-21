import Link from 'next/link';
import Image from 'next/image';

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 mt-8 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        {/* Assuming logo.png is in public folder. If not present, this might show broken image in dev but is correct implementation per request. */}
        <Image
          src="/images/nighlogo-Bxm7gxow.svg"
          alt="Nighwan Tech Logo"
          width={122.63}
          height={56}
          className="object-contain"
        />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NighwanTech. All rights reserved.
        </p>
      </div>

      <div className="flex space-x-6 text-sm text-gray-500">
        <Link
          href="/privacy-policy"
          className="hover:text-black transition-all duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="hover:text-black transition-all duration-300"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
