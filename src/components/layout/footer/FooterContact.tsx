const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold text-lg text-black">Contact</h3>
      <ul className="space-y-3 text-sm">
        <li>
          <span className="block text-xs uppercase text-gray-400 mb-1">Email</span>
          <a
            href="mailto:hr@nighwantech.com"
            className="text-gray-600 hover:text-orange-500 transition-all duration-300 block mb-1"
          >
            hr@nighwantech.com
          </a>
          <a
            href="mailto:info@nighwantech.com"
            className="text-gray-600 hover:text-orange-500 transition-all duration-300 block"
          >
            info@nighwantech.com
          </a>
        </li>
        <li>
          <span className="block text-xs uppercase text-gray-400 mb-1 mt-2">Phone</span>
          <a
            href="tel:+918985025794"
            className="text-gray-600 hover:text-orange-500 transition-all duration-300 block mb-1"
          >
            +91 8985025794
          </a>
          <a
            href="tel:+918092225777"
            className="text-gray-600 hover:text-orange-500 transition-all duration-300 block"
          >
            +91 8092225777
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
