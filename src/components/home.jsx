import React from 'react';
import App from '../App';
import Product from './shopmoresection';
import HeroSection from './herosection';
import HomeProducts from './homeproducts';
import Footer from './footer';
import Header from './header';

const Home = () => {
  return (
    // <div className="min-h-screen bg-gray-100">
      
    //   {/* Hero Section */}
    //   {/* <Product/> */}
    //   {/* <Homeproduct/> */}
    //   <HeroSection/>
    //   <HomeProducts/>
      

    // </div>
    <div className="flex flex-col min-h-screen relative  bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      
    <Header />
    <main className="flex-grow">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <HeroSection />
      <HomeProducts />
    </main>
    <Footer />
  </div>
  );
};

export default Home;
