import React from 'react';
import { Cog, Award, Ruler, Brain, ClipboardCheck, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Cog,
      title: 'Engineering & Product Development',
      description: 'Design and development of specialized gauges and fixtures with precision engineering',
      features: ['Custom gauge design', 'Fixture development', 'CAD/CAM services', 'Prototyping'],
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Quality Management & Certifications',
      description: 'ISO, IATF, APQP compliance and comprehensive technical training programs',
      features: ['ISO 9001:2015', 'IATF 16949:2016', 'APQP training', 'Quality audits'],
      color: 'green'
    },
    {
      icon: Ruler,
      title: 'Metrology Solutions',
      description: 'Precision measurement and inspection systems for accurate quality control',
      features: ['Coordinate measuring', 'Gauge calibration', 'Inspection services', 'Dimensional analysis'],
      color: 'purple'
    }
    // {
    //   icon: Brain,
    //   title: 'Machine Learning & AI Integration',
    //   description: 'Smart solutions for operational efficiency and predictive maintenance',
    //   features: ['Process optimization', 'Predictive analytics', 'Automation systems', 'Data analysis'],
    //   color: 'orange'
    // },
    // {
    //   icon: ClipboardCheck,
    //   title: 'Project Management & Training',
    //   description: 'Vendor audits, process optimization, and comprehensive team training',
    //   features: ['Vendor audits', 'Process improvement', 'Technical training', 'Project consulting'],
    //   color: 'indigo'
    // }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet the evolving needs 
            of automotive and industrial sectors with precision and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:translate-x-1">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you achieve operational excellence with our comprehensive engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Request Consultation
            </a>
            <a
              href="#products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-800 transition-all font-medium"
            >
              View Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;