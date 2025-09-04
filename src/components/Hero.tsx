import React from 'react';
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative & Reliable 
              <span className="block text-orange-400">Engineering Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              For the Automotive and Industrial Sectors
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl">
              Since 2018, we've been delivering cutting-edge engineering solutions, 
              precision manufacturing, and quality management services to industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#services"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 font-medium flex items-center justify-center group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 font-medium text-center"
              >
                Contact Us
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mx-auto mb-2">
                  <Award className="text-orange-400" size={24} />
                </div>
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mx-auto mb-2">
                  <Users className="text-orange-400" size={24} />
                </div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-blue-200">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mx-auto mb-2">
                  <Wrench className="text-orange-400" size={24} />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose NTS?</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'End-to-End Engineering Solutions', desc: 'Comprehensive engineering services, covering design, development,implementation, and support' },
                  { title: 'Project Management and Technical Training', desc: 'Expert project management, we ensure efficient project execution' },
                  { title: 'Quality Services with Systematic Approaches', desc: 'High quality services through structured methodologies, ensuring consistency, reliability, and adherence to industry standards' },
                  { title: 'Continuous Improvement Focus', desc: 'Commited to continuous improvement drives innovation and process optimization' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;