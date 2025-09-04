import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'CNC Machining Center',
      category: 'Machinery',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Precision Gauges',
      category: 'Products',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Quality Testing Lab',
      category: 'Facilities',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Automated Assembly Line',
      category: 'Automation',
      image: 'https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Bearing Components',
      category: 'Products',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'Production Floor',
      category: 'Facilities',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: 'Inspection Equipment',
      category: 'Machinery',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'Custom Fixtures',
      category: 'Products',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const categories = ['All', 'Machinery', 'Products', 'Facilities', 'Automation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === galleryItems[selectedImage].id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    }
    
    const newImageId = filteredItems[newIndex].id;
    const originalIndex = galleryItems.findIndex(item => item.id === newImageId);
    setSelectedImage(originalIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Take a closer look at our state-of-the-art facilities, advanced machinery, 
            and precision-engineered products that showcase our commitment to excellence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const originalIndex = galleryItems.findIndex(original => original.id === item.id);
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openModal(originalIndex)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">{galleryItems[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryItems[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">See Our Facilities in Action</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Watch how our advanced manufacturing processes and quality control systems 
            ensure the highest standards of precision and reliability.
          </p>
          <div className="aspect-video max-w-4xl mx-auto bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
              <p className="text-gray-600">Virtual facility tour coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;