import React from 'react';
import { Car, Factory, CircleDot, Tractor } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Car,
      title: 'Automotive Sector',
      description: 'Comprehensive solutions for automotive manufacturers and suppliers',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Precision gauges for engine components',
        'Quality control systems',
        'Assembly line automation',
        'Testing equipment',
        'IATF 16949 compliance support'
      ],
      stats: { clients: '50+', projects: '200+' }
    },
    {
      icon: Factory,
      title: 'General Industrial Manufacturing',
      description: 'Engineering solutions for diverse industrial applications',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Custom machinery design',
        'Process optimization',
        'Quality management systems',
        'Technical training programs',
        'Vendor development'
      ],
      stats: { clients: '30+', projects: '150+' }
    },
    {
      icon: CircleDot,
      title: 'Bearings & Allied Components',
      description: 'Specialized solutions for bearing manufacturers and suppliers',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Bearing ring manufacturing',
        'Precision measurement systems',
        'Heat treatment solutions',
        'Quality inspection services',
        'Supply chain optimization'
      ],
      stats: { clients: '25+', projects: '100+' }
    },
    {
      icon: Tractor,
      title: 'Agricultural Components',
      description: 'Durable solutions for agricultural machinery and equipment',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Heavy-duty component design',
        'Durability testing',
        'Weather-resistant solutions',
        'Cost-effective manufacturing',
        'Field performance optimization'
      ],
      stats: { clients: '20+', projects: '80+' }
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, delivering tailored engineering solutions 
            that drive efficiency, quality, and innovation in every sector we serve.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-3">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                    <div className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{industry.stats.clients}</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{industry.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Impact Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '125+', label: 'Total Clients' },
              { number: '530+', label: 'Projects Completed' },
              { number: '4', label: 'Industries Served' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Don't See Your Industry?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always expanding our expertise. Contact us to discuss how we can provide 
            tailored engineering solutions for your specific industry needs.
          </p>
          <a
            href="#contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-medium inline-block"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;