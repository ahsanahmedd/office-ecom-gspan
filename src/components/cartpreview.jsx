import React from "react";
import { X, Plus, Minus } from "lucide-react";
import Header from "./header";
import useProducts from "../hooks/useproducts";

const CartPreview = () => {
  const { products, setProducts } = useProducts();
  
  // Ensure cart products are filtered correctly
  const cartProducts = products.filter((product) => product.inCart );

  const getTotalPrice = () => {
    return cartProducts.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * (item.cartQuantity || 1);
    }, 0);
  };

  const handleRemoveFromCart = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, inCart: false, cartQuantity: 0 }
          : product
      )
    );
  };

  const updateQuantity = (productId, change) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              cartQuantity: Math.max(1, (product.cartQuantity || 1) + change),
            }
          : product
      )
    );
  };

  if (!products || products.length === 0) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-gray-50">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center py-16">
              <p className="text-xl font-medium text-gray-600">
                Loading products...
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-gray-50">
        <div className="bg-white rounded-2xl mt-12 shadow-lg p-8">
          <div className="flex justify-between items-center mb-8 border-b pb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Shopping Cart ({cartProducts.length} items)
            </h3>
            {cartProducts.length > 0 && (
              <span className="text-xl font-semibold text-orange-600">
                Total: ₹{getTotalPrice().toLocaleString()}
              </span>
            )}
          </div>

          <div className="space-y-6">
            {cartProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 p-6 bg-white border rounded-xl hover:border-orange-200 transition-all duration-200"
              >
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1 capitalize">
                        {item.category}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.cartQuantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-lg text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {cartProducts.length === 0 && (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.45259 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" />
                  </svg>
                </div>
                <p className="text-xl font-medium text-gray-600">
                  Your cart is empty
                </p>
                <p className="text-gray-400 mt-2">
                  Browse our products and add some items to your cart
                </p>
              </div>
            )}

            {cartProducts.length > 0 && (
              <div className="mt-8 flex justify-end">
                <button className="px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPreview;
