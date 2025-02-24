import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Star } from "lucide-react";
import useProducts from "../hooks/useproducts";

const HomeProducts = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const { products } = useProducts();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  const handleRemoveFromCart = (e, productId) => {
    e.stopPropagation();
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    // Wishlist logic here
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return total + (price * item.cartQuantity);
    }, 0);
  };

  return (
    <section className="py-20 bg-[#fafafa] relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Cart Preview */}
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-8 border border-neutral-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl text-neutral-800">Shopping Cart ({cart.length})</h3>
            <span className="text-lg">Total: ₹{getTotalPrice().toLocaleString()}</span>
          </div>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <p className="text-neutral-800 mb-1">{item.title}</p>
                    <p className="text-neutral-500 text-sm">Quantity: {item.cartQuantity}</p>
                    <p className="text-neutral-800 mt-2">{item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={(e) => handleRemoveFromCart(e, item.id)}
                  className="px-4 py-2 text-sm text-neutral-500 hover:text-red-500 transition-all duration-300 hover:bg-red-50 rounded-full"
                >
                  Remove
                </button>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-400">Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-24">
          <span className="text-sm tracking-wider text-neutral-500 mb-4">DISCOVER</span>
          <h2 className="text-[2.75rem] leading-tight tracking-tight text-neutral-800 mb-4">
            New Arrivals
          </h2>
          <p className="text-neutral-500 text-center max-w-2xl text-lg">
            Discover our latest collection of premium fashion pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-500 border border-neutral-100 hover:border-neutral-200"
              onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                    {product.discount}% OFF
                  </span>
                </div>
                <button 
                  onClick={(e) => handleWishlist(e, product)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-300 hover:scale-105"
                >
                  <Heart className="w-4 h-4 text-neutral-600 hover:text-red-400 transition-colors" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs tracking-wider text-neutral-500 mb-2">{product.category}</p>
                  <h3 className="text-neutral-800 text-lg leading-snug line-clamp-2 group-hover:text-neutral-600 transition-colors">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-neutral-50 px-3 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                    <span className="ml-1 text-xs">{product.rating}</span>
                  </div>
                  <span className="mx-3 text-neutral-300">•</span>
                  <span className="text-xs text-neutral-500">{product.reviews} reviews</span>
                </div>

                <div className="flex items-baseline space-x-3 mb-5">
                  <span className="text-xl text-neutral-800">₹{product.price}</span>
                  <span className="text-sm text-neutral-400 line-through">
                  ₹{product.originalPrice}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate('/collection')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;