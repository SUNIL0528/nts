import React, { useState } from 'react';
import { Cog, Award, Ruler, ArrowRight, X, CalendarDays, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Cog,
      title: 'Engineering & Product Development',
      description:
        'Design and development of specialized gauges and fixtures with precision engineering.',
      features: [
        'Custom gauge design',
        'Fixture development',
        'CAD/CAM services',
        'Prototyping'
      ],
      color: 'blue',
      details: `
        We bring your ideas to life through intelligent design and precision engineering.
        Our experts specialize in custom gauges, fixtures, and rapid prototypes that enhance
        efficiency and accuracy across your manufacturing processes.

        Leveraging digital twin simulations, AI-driven design validation, and advanced CAD/CAM integration,
        we turn complex engineering challenges into production-ready solutions.
      `,
      booking: {
        availability: 'Slots available from November 2025',
        note: 'Limited early access slots open soon.'
      }
    },
    {
      icon: Award,
      title: 'Quality Management & Certifications',
      description:
        'ISO, IATF, APQP compliance and comprehensive technical training programs.',
      features: ['ISO 9001:2015', 'IATF 16949:2016', 'APQP training', 'Quality audits'],
      color: 'green',
      details: `
        Excellence starts with quality. Our certified experts guide you through
        ISO and IATF compliance frameworks with hands-on support, audits, and
        training designed for sustainable process improvement.

        We implement digital QMS dashboards and advanced root-cause analytics
        to ensure every product meets world-class standards.
      `,
      booking: {
        availability: 'Open slots every Thursday and Friday',
        note: 'Book early for premium audit slots.'
      }
    },
    {
      icon: Ruler,
      title: 'Metrology Solutions',
      description:
        'Precision measurement and inspection systems for accurate quality control.',
      features: [
        'Coordinate measuring',
        'Gauge calibration',
        'Inspection services',
        'Dimensional analysis'
      ],
      color: 'purple',
      details: `
        Our Metrology lab is equipped with state-of-the-art systems offering unmatched accuracy.
        We provide full-scale CMM inspection, gauge calibration, and dimensional analysis reports.

        With traceable calibration and digital visualization dashboards, you gain insights
        that empower smarter decision-making and reduced rework costs.
      `,
      booking: {
        availability: 'Fully booked till January 2026',
        note: 'Reach out to our support team to prioritize your project.'
      }
    }
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white relative">
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
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(
                    service.color
                  )}`}
                >
                  <IconComponent size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(service)}
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-8 max-w-3xl w-full relative text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedService(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
                className="absolute top-5 right-5 text-gray-200 hover:text-white"
              >
                <X size={26} />
              </button>

              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/30 text-white">
                  <selectedService.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  <p className="text-sm text-gray-200">{selectedService.description}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white/90">Overview</h4>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line mb-6">
                    {selectedService.details}
                  </p>

                  {/* Date Selection */}
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CalendarDays size={18} /> Choose Date
                  </h4>
                  <input
                    type="date"
                    className="bg-white/10 border border-white/20 text-white rounded-lg p-2 w-full focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    value={selectedDate || ''}
                  />

                  {/* Time Slots */}
                  <h4 className="text-lg font-semibold mt-6 mb-3 flex items-center gap-2">
                    <Clock size={18} /> Choose Time
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition ${
                          selectedTime === slot ? 'bg-white/30' : ''
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Info */}
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-inner flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Service Details</h4>
                    <p className="text-white/80 mb-2">
                      <strong>Availability:</strong> {selectedService.booking.availability}
                    </p>
                    <p className="text-white/70 mb-6">{selectedService.booking.note}</p>
                  </div>

                  <button
                    disabled={!selectedDate || !selectedTime}
                    className={`px-6 py-3 rounded-lg font-medium text-white transition ${
                      selectedDate && selectedTime
                        ? 'bg-gradient-to-r from-purple-700 to-green-600 hover:opacity-90'
                        : 'bg-white/20 cursor-not-allowed'
                    }`}
                  >
                    {selectedDate && selectedTime
                      ? `Confirm ${selectedTime} on ${selectedDate}`
                      : 'Select Date & Time'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
