import React from 'react';
import { ArrowRight, ShoppingBag, Star, Truck, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full">
              <Star className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium">New Collection 2025</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Discover Your
              </span>
              <br />
              Perfect Style
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Explore our curated collection of premium fashion items. 
              Get ready to transform your wardrobe with the latest trends.
            </p>

            <div className="flex flex-wrap gap-4">
              <button  onClick={() => navigate('/collection')} className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition duration-300 flex items-center group">
                Buy now
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button onClick={() => navigate('/collection')} className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition duration-300" >
                Review catlog
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure Payment</h3>
                  <p className="text-sm text-gray-600">100% protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-orange-100 to-red-50 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fashion Model"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                
                {/* Floating product cards */}
                <div className="absolute top-8 -left-8 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-4 rounded-2xl shadow-xl">
                    <div className="w-48 h-48 bg-orange-100 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                        alt="Trendy Outfit"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold">Summer Collection</h3>
                      <p className="text-orange-600">129.99</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 -right-8 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-4 rounded-2xl shadow-xl">
                    <div className="w-48 h-48 bg-orange-100 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                        alt="Accessories Collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold">Luxury Accessories</h3>
                      <p className="text-orange-600">89.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;