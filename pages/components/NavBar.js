import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'theme', 'guest-delegates', 'agenda', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop - 50 && // Adjust for the height of the navbar
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 p-3 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Trident Logo"
            width={60}
            height={60}
            className="w-17 h-17 object-contain"
          />
          <h2 className="text-xl font-semibold text-[#316b9e]">Trident Academy of Technology</h2>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#316b9e] focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[#316b9e] relative">
          {['home', 'about', 'theme', 'guest-delegates', 'agenda', 'contact'].map((section) => (
            <li key={section} className="relative">
              <Link href={`#${section}`}>
                <span
                  className={`hover:text-gray-500 ${activeSection === section ? 'font-bold' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </span>
              </Link>
              {/* Indicator Line */}
              {activeSection === section && (
                <div className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#316b9e] transition-all duration-300" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden text-blue-600">
          {['home', 'about', 'theme', 'guest-delegates', 'agenda', 'contact'].map((section) => (
            <li key={section}>
              <Link href={`#${section}`}>
                <span
                  className="hover:text-gray-500"
                  onClick={() => { setIsOpen(false); setActiveSection(section); }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
