import React from 'react';
import Header from './header';
import { ChevronDown, Star, Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900 relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Mission Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Our Mission
                </h2>
                <p className="text-xl leading-relaxed text-gray-700">
                  We're dedicated to revolutionizing online shopping by providing a seamless and personalized experience. Our mission is to connect customers with high-quality products while offering exceptional service, competitive prices, and a secure shopping environment that builds lasting relationships with our valued customers.
                </p>
                <div className="flex items-center space-x-4 text-orange-600">
                  <Award className="w-6 h-6" />
                  <span className="text-lg">Award-winning team of innovators</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-3 opacity-10"></div>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="space-y-8">
                    {[
                      { icon: Star, title: "Excellence", desc: "Setting new standards in digital innovation" },
                      { icon: Users, title: "Collaboration", desc: "Working together to achieve greatness" },
                      { icon: Target, title: "Impact", desc: "Making a difference in everything we do" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center transform transition-transform group-hover:scale-110">
                          <item.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-orange-50/50 to-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl  text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jane Doe",
                  role: "CEO & Founder",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                  description: "Visionary leader with 15+ years of industry expertise"
                },
                {
                  name: "John Smith",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  description: "Tech innovator driving our digital transformation"
                },
                {
                  name: "Emily Johnson",
                  role: "Head of Marketing",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
                  description: "Creative strategist behind our brand success"
                }
              ].map((member, index) => (
                <div key={index} className="group perspective">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/20 to-orange-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative p-8">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-white"></div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-600">{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "200+", label: "Projects Completed" },
                { number: "50+", label: "Team Members" },
                { number: "95%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-orange-200 rounded-full transform scale-110 group-hover:scale-125 transition-transform duration-300 opacity-20"></div>
                    <p className="text-4xl font-bold text-orange-600 relative z-10 mb-2">{stat.number}</p>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;