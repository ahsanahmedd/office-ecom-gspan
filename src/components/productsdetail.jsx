import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Truck, Shield, RotateCcw, Star, Heart, Share2, CheckCircle, Clock } from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import useProducts from "../hooks/useproducts";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedTab, setSelectedTab] = useState('description');
  const { products, addToCart } = useProducts(); // Remove setProducts since it's not returned from hook
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  

  // Filter similar products based on category
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show only 4 similar products

  if (!product) {
    return <div className="text-center text-xl py-20">Product not found.</div>;
  }
  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleTabChange = (tab) => {
    const formattedTab = tab.toLowerCase().replace(/[^a-z]/g, '');
    setSelectedTab(formattedTab);
  };
  const handleAddToCart = () => {
    addToCart(product.id);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="pt-12 min-h-screen relative bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Product Details Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100 max-w-md mx-auto">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
                      selectedImage === img ? 'ring-2 ring-orange-500' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header and Actions */}
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> In Stock
                    </span>
                  </div>
                  <h1 className="text-3xl  text-gray-900 tracking-tight">
                    {product.title}
                  </h1>
                </div>
                <div className="flex gap-2">

                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.title,
                          text: product.description,
                          url: window.location.href
                        })
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        // You may want to add a toast notification here
                      }
                    }}
                    className="p-2 hover:bg-orange-100 rounded-full transition-colors"
                  >
                    <Share2 className="w-6 h-6 text-orange-600" />
                  </button>
                </div>
              </div>

              {/* Rating Section */}
              <div className="flex items-center gap-6 py-4 border-y border-orange-100">
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">4.8</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                  <Clock className="w-5 h-5" />
                  <span>150 reviews</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl  text-gray-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                      <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium">
                        {product.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Price inclusive of all taxes. EMI starting from ₹1,250/month
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-all duration-200">
                  <Truck className="w-6 h-6 text-orange-600" />
                  <p className="mt-2 text-sm font-medium text-gray-900">Free Delivery</p>
                  <p className="text-xs text-gray-500">2-3 business days</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-all duration-200">
                  <RotateCcw className="w-6 h-6 text-orange-600" />
                  <p className="mt-2 text-sm font-medium text-gray-900">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day policy</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-all duration-200">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <p className="mt-2 text-sm font-medium text-gray-900">Warranty</p>
                  <p className="text-xs text-gray-500">1 year coverage</p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={isAddedToCart}
                  className={`w-full py-4 px-8 flex items-center justify-center gap-2 
                    ${isAddedToCart 
                      ? 'bg-transparent border-2 border-orange-600 text-black hover:bg-orange-600 hover:text-white' 
                      : 'bg-transparent border-2 border-orange-600 text-black hover:bg-orange-600 hover:text-white'
                    } rounded-xl font-medium transition-all duration-200`}
                >
                  {isAddedToCart ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  Usually ships within 24 hours
                </p>
              </div>
            </div>
          
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['Description', 'Shipping & Returns', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`pb-4 text-sm font-medium ${
                      selectedTab === tab.toLowerCase().replace(/[^a-z]/g, '')
                        ? 'border-b-2 border-orange-500 text-orange-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8 prose max-w-none">
              {selectedTab === 'description' && (
                <p className="text-gray-600 leading-relaxed">
                  {product.description || 
                    "Experience premium quality and comfort with our meticulously crafted product. Made with the finest materials and attention to detail, this piece combines style with functionality."}
                </p>
              )}

              {selectedTab === 'shippingreturns' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Delivery Information</h3>
                    <ul className="mt-4 text-gray-600 space-y-3">
                      <li className="flex items-center gap-2">
                        <Truck className="w-5 h-5 text-orange-500" />
                        Free standard shipping on orders above ₹499
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-orange-500">⚡</span>
                        Express delivery available (2-3 business days)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-orange-500">📍</span>
                        Track your order in real-time
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Returns Policy</h3>
                    <ul className="mt-4 text-gray-600 space-y-3">
                      <li className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-orange-500" />
                        30-day easy returns on all orders
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-orange-500" />
                        100% refund on damaged or incorrect products
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-orange-500">✨</span>
                        No questions asked return policy
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Warranty Information</h3>
                    <ul className="mt-4 text-gray-600 space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-orange-500">🛡️</span>
                        1 year manufacturer warranty
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-orange-500">🔧</span>
                        Free repair service at service centers
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div className="space-y-8">
                  {[1, 2].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-8">
                      <div className="flex items-center mb-2">
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">2 weeks ago</span>
                      </div>
                      <h4 className="font-medium">Amazing Product!</h4>
                      <p className="mt-2 text-gray-600">
                        Exceeded my expectations. The quality is outstanding and it looks even better in person.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Similar Products Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
            {similarProducts && similarProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        onClick={() => navigate(`/product/${item.id}`, { state: { product: item } })}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">₹{item.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg">No similar products available</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
