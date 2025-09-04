import React from 'react';
import { Settings, Zap, CircleDot } from 'lucide-react';

const Products: React.FC = () => {
  const productCategories = [
    {
      icon: Settings,
      title: 'Gauges & Fixtures',
      description: 'Precision measurement tools and specialized fixtures for quality control',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: [
        'Ring gauges (Plain & threaded)',
        'Thread plug gauges',
        'Functional gauges',
        'Inspection fixtures',
        'Assembly fixtures'
      ]
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Advanced automation tools and flexible conveyor systems',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: [
        'Flexible conveyors',
        'Automation tools',
        'Robotic systems',
        'Control systems',
        'Integration services'
      ]
    },
    {
      icon: CircleDot,
      title: 'Bearings & Allied Products',
      description: 'High-quality bearing components and allied products for automotive industry',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: [
        'Bearing rings',
        'Hub bearings',
        'Syncro rings',
        'Steering races',
        'Industrial seals'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precision-engineered products designed to meet the highest standards of 
            quality and performance for automotive and industrial applications.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isReverse = index % 2 !== 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={isReverse ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={isReverse ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Products:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Product Excellence</h3>
            <p className="text-xl text-gray-600">
              Every product is engineered with precision and manufactured to the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Precision Engineering', desc: 'Tolerances up to ±0.001mm' },
              { title: 'Quality Materials', desc: 'Premium grade alloys and composites' },
              { title: 'Rigorous Testing', desc: 'Multi-stage quality verification' },
              { title: 'Custom Solutions', desc: 'Tailored to specific requirements' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;