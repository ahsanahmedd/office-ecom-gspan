import React, { useEffect, useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import Header from "./header";
import useProducts from "../hooks/useproducts";
import { useNavigate } from "react-router-dom";

const CartPreview = () => {
  const { removeFromCart } = useProducts();
  const navigate =useNavigate();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedCartProducts);
  }, []);

  const getTotalPrice = () => {
    return cartProducts.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * (item.cartQuantity || 1);
    }, 0);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartProducts.filter(product => product.id !== productId);
    setCartProducts(updatedCart);
    removeFromCart(productId);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, change) => {
    const updatedCart = cartProducts.map((product) =>
      product.id === productId
        ? { ...product, cartQuantity: Math.max(1, (product.cartQuantity || 1) + change) }
        : product
    );
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen ">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Shopping Cart ({cartProducts.length} items)
            </h3>
            {cartProducts.length > 0 && (
              <span className="text-lg md:text-xl font-semibold text-orange-600">
                Total: ₹{getTotalPrice().toLocaleString()}
              </span>
            )}
          </div>

          {cartProducts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <p className="text-lg md:text-xl font-medium text-gray-600">
                Your cart is empty
              </p>
              <p className="text-gray-400 mt-2">Browse our products and add some items to your cart</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border rounded-xl hover:border-orange-200 transition-all duration-200"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                  <div className="flex-grow w-full md:w-auto">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500 mt-1 capitalize">{item.category}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      >
                        <X className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-200 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.cartQuantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-lg text-gray-900 mt-2 md:mt-0">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartProducts.length > 0 && (
            <div  className="mt-8 flex justify-center md:justify-end">
              <button onClick={() => navigate('/checkout')} className="w-full md:w-auto px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPreview;
