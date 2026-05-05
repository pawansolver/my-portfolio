import Link from 'next/link';
import Image from 'next/image';

const FooterBottom = () => {
  // 🔥 FIX: mt-8 aur pt-8 ko change karke mt-4 aur pt-4 kar diya hai taaki gap kam ho jaye
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-black/10 mt-4 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
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
        {/* 🚀 Ye raha naya Refund Policy ka link */}
        <Link
          href="/refund-policy"
          className="hover:text-black transition-all duration-300"
        >
          Refund Policy
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;