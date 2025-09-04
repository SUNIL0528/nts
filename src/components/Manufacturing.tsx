import React from 'react';
import { Factory, Gauge, TestTube, Users } from 'lucide-react';

const Manufacturing: React.FC = () => {
  const facilities = [
    {
      title: 'Production Facility',
      icon: Factory,
      description: 'State-of-the-art manufacturing with advanced machinery',
      capabilities: [
        'CNC machining centers',
        'Precision grinding',
        'Heat treatment & annealing',
        'Forging operations',
        'Surface finishing'
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Testing & Measurement',
      icon: TestTube,
      description: 'Comprehensive quality control and testing capabilities',
      capabilities: [
        'Zeiss contour tester',
        'MPI (Magnetic Particle Inspection)',
        'Grade sorting systems',
        'Hardness testing',
        'Dimensional inspection'
      ],
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const infrastructure = [
    {
      icon: Gauge,
      title: 'Cutting-Edge Technology',
      description: 'Latest machinery and automation systems for precision manufacturing',
      stats: '95%+ accuracy'
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: 'Experienced engineers and technicians committed to excellence',
      stats: '50+ experts'
    },
    {
      icon: Factory,
      title: 'Modern Facilities',
      description: 'Purpose-built manufacturing spaces in Bangalore and Pune',
      stats: '20,000 sq ft'
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Manufacturing Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class manufacturing facilities combine advanced technology with skilled craftsmanship 
            to deliver products that exceed industry standards.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="space-y-16 mb-20">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            const isReverse = index % 2 !== 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={isReverse ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isReverse ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{facility.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {facility.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Capabilities:</h4>
                    <div className="space-y-3">
                      {facility.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infrastructure Highlights */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Infrastructure Highlights</h3>
            <p className="text-xl text-gray-600">
              Our infrastructure forms the backbone of our manufacturing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {infrastructure.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{item.stats}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Quality Standards & Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'ISO 9001:2015',
              'IATF 16949:2016',
              'APQP Certified',
              '5S Implementation',
              'Statistical Process Control'
            ].map((cert, index) => (
              <div key={index} className="bg-white border-2 border-blue-200 rounded-lg px-6 py-3 font-semibold text-blue-800">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;