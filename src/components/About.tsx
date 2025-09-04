import React from 'react';
import { Target, Eye, Award, Users2 } from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    {
      name: 'Shanthi Saravanan',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '20+ years in automotive engineering and quality management'
    },
    {
      name: 'Saravanan',
      position: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Project Mgmt./Sourcing, 30 years Experience in SKF'
    },
    {
      name: 'Shailesh Seth',
      position: 'Chief Operational Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Product Developer, 30 years Experience in SKF'
    },
    {
      name: 'Naveen Kumar',
      position: 'Surface treatment auditing specialist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '5+ years as Coating Inspector'
    },
    {
      name: ' Tarun Kumar',
      position: 'Mechanical Engineer',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in precision manufacturing and metrology solutions'
    },
    {
      name: 'Chandrasekhar',
      position: 'Quality Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'ISO/IATF certification specialist with global experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About New Tech Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2018, we are committed to delivering innovative engineering solutions 
            with unwavering quality and reliability for the automotive and industrial sectors.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Manufacturing facility"
              className="w-full h-116 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
               New Tech Solutions(NTS) is a proprietorship organization established in June 2018, known for delivering innovative and 
reliable solutions. We specialize in manufacturing, engineering, and quality services for the automotive and general industrial sectors. 
Committed to the highest standards, we provide products and services that exceed expectations. Our skilled team leverages advanced technology and industry practices to ensure efficiency and innovation. 
Focused on customer satisfaction, we build long-term relationships based on trust and excellence, offering tailored solutions to meet 
unique business needs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
               Our team is equipped with the latest technologies and tools, allowing us to offer state-of-the-art metrology, product 
development, and quality management systems. We are dedicated to driving efficiency, reducing downtime, 
and ensuring the highest standards of quality across every stage of production. Focused on continuous improvement, we foster a 
collaborative approach, working closely with clients to deliver measurable results. Our commitment to excellence and customer satisfaction 
sets us apart as a trusted partner in driving industry innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">2018</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">2</div>
                <div className="text-gray-600">Locations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
               Our goal is to be the preferred partner, recognized for providing innovative products and services that meet the evolving needs of 
our customers
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-orange-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to surpassing customer expectations by delivering high-quality products and services, ensuring on-time delivery, and optimizing costs for maximum value.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Quality, innovation, integrity, and customer satisfaction form the foundation 
              of everything we do, ensuring long-term partnerships and mutual growth.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h3>
            <p className="text-xl text-gray-600">
              The  leadership team that drives our commitment to delivering innovative, high-quality solutions while maintaining operational 
excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h4>
                <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;