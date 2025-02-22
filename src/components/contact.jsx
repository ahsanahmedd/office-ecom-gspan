import React, { useState } from 'react';
import Header from './header';
import { Mail, Phone, MapPin, Send, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      comment: "",
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
          <div className="relative text-center mb-16">
            <div className="relative inline-block">
              <h1 className="text-4xl  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Get in Touch
              </h1>

            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Contact Information Section */}
            <section className="w-full lg:w-1/2">
              <div className=" p-8 rounded-3xl ">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <a href="mailto:info@ecommerce.com" className="text-orange-600 hover:text-orange-700">
                        info@ecommerce.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 7000922141</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600">Koh-e-Fiza, Bhopal (M.P.)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="w-full h-64 rounded-2xl overflow-hidden">
                    <iframe
                      title="Company Location"
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.2745228629445!2d77.3984592749191!3d23.264924981699048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c694f8fbe169d%3A0x14f2e5fcf91d9f6a!2sD55%20BDA%20Colony%2C%20Koh-e-Fiza%2C%20Bhopal%2C%20Madhya%20Pradesh%20462003!5e0!3m2!1sen!2sin!4v1691777016094!5m2!1sen!2sin"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
              <div className=" p-8 rounded-3xl ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                    />
                  </div>

                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                    />
                  </div>
                </div>

                <div className="mt-6 group">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                  />
                </div>

                <div className="mt-6 group">
                  <textarea
                    name="comment"
                    placeholder="Your message..."
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300 h-32"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;