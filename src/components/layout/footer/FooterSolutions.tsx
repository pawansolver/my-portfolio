import Link from 'next/link';

const slugify = (text: string) => text.toLowerCase().trim().replace(/\//g, '-').replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
const baseDirMap: Record<string, string> = { "Services": "services", "Industries": "industries", "About": "about", "Career": "career" };

const FooterSolutions = () => {
  const solutions = [
    "Lean Consultancy",
    "Branding",
    "IoT Solutions",
    "Digital Marketing",
    "ERP Development",
    "AI/ML Solutions",
    "Web / Mobile App",
    "Data Analytics",
    "DevOps Services",
    "IT Support"
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold text-lg text-black">Solutions</h3>
      <ul className="space-y-2">
        {solutions.map((item) => {
          const baseDir = baseDirMap["Services"];
          const href = `/${baseDir}/${slugify(item)}`;
          return (
            <li key={item}>
              <Link
                href={href}
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 text-sm"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterSolutions;
