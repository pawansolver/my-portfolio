import Link from 'next/link';

const FooterSolutions = () => {
  const solutions = [
    { label: 'Chatbot Development', href: '/products/ai-chatbot' },
    { label: 'Data Analytics', href: '/products/data-analytics' },
    { label: 'Automation Tools', href: '/products/nighwan-erp' },
    { label: 'AI Consulting', href: '/products/ai-ml' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold text-lg text-black">Solutions</h3>
      <ul className="space-y-2">
        {solutions.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-gray-600 hover:text-orange-500 transition-all duration-300 text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSolutions;
