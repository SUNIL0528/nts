import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Rubber Seal',
      category: 'Products',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301508704/LU/QO/AS/184086386/6311rs-rubber-bearing-seal-250x250.jpg'
    },
    {
      id: 2,
      title: 'Precision Gauges',
      category: 'Outsourcing',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Bearing Components',
      category: 'Outsourcing',
      image: 'https://media.istockphoto.com/id/185263951/photo/bearing.jpg?s=612x612&w=0&k=20&c=iQeM20yaxcgsbrrQ0tmt89pKSB8lF_m5hCeqlFa9oA8='
    },
    {
      id: 4,
      title: 'Ball Cage',
      category: 'Outsourcing',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/XS/LN/MZ/23503450/new-product-500x500.jpeg'
    },
    {
      id: 5,
      title: 'Steering Races',
      category: 'Outsourcing',
      image: 'https://m.media-amazon.com/images/I/31acIBSy4kL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 6,
      title: 'GE Series Bearing',
      category: 'Outsourcing',
      image: 'data:image/jpeg;base64,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'
    }
  ];

  const categories = ['All', 'Outsourcing', 'Products'];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
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
        {/* <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;