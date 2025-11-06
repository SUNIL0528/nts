import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Cog,
  Award,
  Ruler,
  ArrowRight,
  X,
  Settings,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  // --- MAIN SERVICES SECTION ---
  const services = [
    {
      icon: Cog,
      title: "Engineering & Product Development",
      description:
        "Design and development of specialized gauges and fixtures with precision engineering.",
      features: [
        "Custom gauge design",
        "Fixture development",
        "CAD/CAM services",
        "Prototyping",
      ],
      color: "blue",
      details: `
        We bring your ideas to life through intelligent design and precision engineering.
        Our experts specialize in custom gauges, fixtures, and rapid prototypes that enhance
        efficiency and accuracy across your manufacturing processes.

        Leveraging digital twin simulations, AI-driven design validation, and advanced CAD/CAM integration,
        we turn complex engineering challenges into production-ready solutions.
      `,
      booking: {
        availability: "Slots available from November 2025",
        note: "Limited early access slots open soon.",
      },
    },
    {
      icon: Award,
      title: "Quality Management & Certifications",
      description:
        "ISO, IATF, APQP compliance and comprehensive technical training programs.",
      features: [
        "ISO 9001:2015",
        "IATF 16949:2016",
        "Technical training",
        "TPM Outsourcing",
      ],
      color: "green",
      details: `
        Excellence starts with quality. Our certified experts guide you through
        ISO and IATF compliance frameworks with hands-on support, audits, and
        training designed for sustainable process improvement.

        We implement digital QMS dashboards and advanced root-cause analytics
        to ensure every product meets world-class standards.
      `,
      booking: {
        availability: "Open slots every Thursday and Friday",
        note: "Book early for premium audit slots.",
      },
    },
    {
      icon: Ruler,
      title: "Metrology Solutions",
      description:
        "Precision measurement and inspection systems for accurate quality control.",
      features: [
        "Customized gauges",
        "Gauge calibration",
        "Gixen fixtures",
        "Dimensional analysis",
      ],
      color: "purple",
      details: `
        Our Metrology lab is equipped with state-of-the-art systems offering unmatched accuracy.
        We provide full-scale CMM inspection, gauge calibration, and dimensional analysis reports.

        With traceable calibration and digital visualization dashboards, you gain insights
        that empower smarter decision-making and reduced rework costs.
      `,
      booking: {
        availability: "Fully booked till January 2026",
        note: "Reach out to our support team to prioritize your project.",
      },
    },
  ];

  // --- OUTSOURCING PRODUCTS SECTION ---
  const outsourcing = [
    {
      icon: Settings,
      title: "Outsourced Components",
      description:
        "High-quality outsourced components engineered for automotive and industrial applications.",
      image:
        "https://media.istockphoto.com/id/500144555/photo/ball-bearings.jpg?s=612x612&w=0&k=20&c=9psBUXINxH0wu4uGgFNQ4lSKD6EI8oyWsJl7wl4lUzw=",
      products: [
        "Cold Forming parts",
        "Bearings",
        "Syncro rings",
        "CRB",
        "Solid Lube Bearing Cage",
      ],
    },
    {
      icon: Clock,
      title: "Gauges & Fixtures",
      description:
        "Durable oil-leak prevention seal ensuring long-term performance in automobile handle assemblies.",
      image:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      products: [
        'Ring gauges (Plain & threaded)',
         'Thread plug gauges',
        'Functional gauges',
         'Inspection fixtures',
         'Assembly fixtures'
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_6mvz8d5", "template_rvp7k63", formData, "d7prAMqitYPM3JwmH")
      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Services 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From precision engineering to quality-certified outsourcing,
            we deliver end-to-end industrial solutions built for reliability and performance.
          </p>
        </div>

        {/* --- Services Section --- */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
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

        {/* --- Outsourcing Section --- */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Outsourcing Excellence
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable sourcing of premium components and seals engineered for performance and longevity.
            </p>
          </div>

          <div className="space-y-16">
            {outsourcing.map((item, index) => {
              const IconComponent = item.icon;
              const isReverse = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={isReverse ? "lg:col-start-2" : ""}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReverse ? "lg:col-start-1" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-blue-600" size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        Key Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {item.products.map((p, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- Popup for Service Details --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-8 max-w-5xl w-full relative text-white max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-gray-200 hover:text-white"
              >
                <X size={26} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/30 text-white">
                  <selectedService.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  <p className="text-sm text-gray-200">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white/90">
                    Overview
                  </h4>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line mb-6">
                    {selectedService.details}
                  </p>
                </div>

                {/* Mail Form */}
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-inner">
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    Drop a Mail
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
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
