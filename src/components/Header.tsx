import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Industries', href: '#industries' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // ✅ Improved observer logic for all layouts
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio
            ) {
              mostVisible = entry;
            }
          }
        }
        if (mostVisible) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      {/* ✅ Make the whole top bar + header fixed as a single block */}
      <div className="fixed top-0 w-full z-50">
        {/* Top Info Bar */}
        <div className="bg-purple-900 text-white py-2 px-4 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-9448314975</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@newtechsolutions.in</span>
              </div>
            </div>
            <div className="text-xs">
              ISO 9001:2015 | IATF 16949:2016 Certified
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-gradient-to-r from-blue-500 via-purple-400 to-green-300 shadow-lg'
              : 'bg-gradient-to-r from-blue-500/50 via-purple-400/40 to-green-300/30 backdrop-blur-sm'
          }`}
        >
          <nav className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-15 h-15 bg-blue-600 rounded-lg flex items-center justify-center">
                  <img
                    src="assets/logo.jpeg"
                    alt="NTS Solutions Logo"
                    className="h-20 w-auto object-contain"  
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-800">
                    New Tech Solutions
                  </h1>
                  <p className="text-xs text-gray-600">
                    Sealing Strength, Delivering Excellence
                  </p>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-bold  transition-colors duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-blue-700 font-semibold underline underline-offset-4 decoration-2'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  Get Quote
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.href.replace('#', ''));
                        setIsMenuOpen(false);
                      }}
                      className={`font-medium transition-colors duration-200 ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-blue-700 font-semibold underline underline-offset-4 decoration-2'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>

      {/* ✅ Spacer (equal to combined height of top + header) */}
      <div className="h-[140px] md:h-[150px]" />
    </>
  );
};

export default Header;
