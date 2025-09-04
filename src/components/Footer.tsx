import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Engineering & Product Development',
        'Quality Management',
        'Metrology Solutions',
        'Machine Learning & AI',
        'Project Management'
      ]
    },
    {
      title: 'Products',
      links: [
        'Gauges & Fixtures',
        'Automation Solutions',
        'Bearings & Allied Products',
        'Custom Manufacturing',
        'Quality Control Systems'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Automotive Sector',
        'Industrial Manufacturing',
        'Bearings & Components',
        'Agricultural Equipment',
        'Custom Applications'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'News & Updates',
        'Certifications'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <div>
                <h3 className="font-bold text-2xl">New Tech Solutions</h3>
                <p className="text-sm text-gray-400">Engineering Excellence Since 2018</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative engineering solutions for automotive and industrial sectors. 
              We combine cutting-edge technology with traditional engineering excellence to deliver 
              solutions that exceed expectations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+91-80-28472916</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">info@newtechsolutions.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-300">Electronic City Phase 1, Bangalore, Karnataka</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="text-sm">
              <div className="font-semibold text-blue-400">ISO 9001:2015</div>
              <div className="text-gray-500">Quality Management</div>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-blue-400">IATF 16949:2016</div>
              <div className="text-gray-500">Automotive Quality</div>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-blue-400">APQP</div>
              <div className="text-gray-500">Advanced Planning</div>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-blue-400">5S</div>
              <div className="text-gray-500">Workplace Organization</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} New Tech Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;