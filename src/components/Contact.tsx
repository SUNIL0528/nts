import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these with your actual EmailJS IDs
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("✅ Thank you! Your message has been sent.");
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  const locations = [
    {
      title: 'Bangalore Head Office',
      address: '#2, 2nd Cross, 2nd Main, Shastry Layout Kempe Gowda Garden Abbigere, Bangalore-560090.',
      phone: '+91-9448314975',
      email: 'ntssolutions0618@gmail.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    {
      title: 'Pune Branch',
      address: 'No.2 building flat no 203, SWISS County, Near PMC school, Theragaon, Pune 411033.',
      phone: '+91-93724 16049',
      email: 'shailesh.shet61@gmail.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your engineering needs? Get in touch with our team of experts. 
            We're here to help you find the perfect solution for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Drop us a Mail</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request Quote</option>
                  <option value="services">Services Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center group"
              >
                Send Mail
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6 mb-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{location.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{location.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4769.674225916078!2d77.52152015381918!3d13.07351326658576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22eec73efd01%3A0x7dd6e8e4d21484af!2sAbbigere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1756991027482!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For urgent inquiries or technical support, our team is ready to assist you. 
            Call us directly or send an email for quick response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918028472916"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <a
              href="mailto:info@newtechsolutions.in"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-all font-medium flex items-center justify-center"
            >
              <Mail size={20} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
