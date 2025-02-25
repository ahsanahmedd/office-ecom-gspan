
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useproducts';
import Header from './header';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { products } = useProducts();
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    paymentType: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get cart products from local storage
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedCartProducts);
    
    // Calculate total with tax and shipping
    const subtotal = storedCartProducts.reduce(
      (acc, product) => acc + product.price * (product.cartQuantity || 1), 
      0
    );
    const tax = subtotal * 0.18; // 18% GST
    const shipping = subtotal > 1000 ? 0 : 49; // Free shipping over ₹1000
    
    setTotalAmount(subtotal + tax + shipping);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.paymentType) newErrors.paymentType = 'Please select a payment method';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Save order details in localStorage (in a real app, this would be sent to a server)
      const orderDetails = {
        id: Date.now().toString(),
        items: cartProducts,
        total: totalAmount,
        shipping: formData,
        date: new Date().toISOString(),
      };
      
      localStorage.setItem('latestOrder', JSON.stringify(orderDetails));
      localStorage.removeItem('cartProducts'); // Clear cart
      
      navigate('/order-success');
    } catch (error) {
      console.error('Order processing error:', error);
      alert('There was a problem processing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format currency with Intl
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const subtotal = cartProducts.reduce((acc, product) => acc + product.price * (product.cartQuantity || 1), 0);
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 1000 ? 0 : 49; // Free shipping over ₹1000

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 mb-8"
        >
          {/* <h1 className="text-3xl font-bold text-gray-800">Checkout</h1> */}
          {/* <p className="text-gray-600">Complete your purchase</p> */}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} 
                               rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                    placeholder="Enter your full address"
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} 
                                rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} 
                                rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                    />
                    {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              
              <div className="space-y-3">
                {['cash', 'card', 'upi'].map((method) => (
                  <div 
                    key={method}
                    className={`relative p-4 border rounded-lg cursor-pointer transition
                              ${formData.paymentType === method 
                                ? 'border-orange-500 bg-orange-50' 
                                : 'border-gray-200 hover:border-orange-300'}`}
                    onClick={() => handleInputChange({ target: { name: 'paymentType', value: method } })}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
                                      ${formData.paymentType === method ? 'border-orange-500' : 'border-gray-400'}`}>
                        {formData.paymentType === method && 
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        }
                      </div>
                      <span className="ml-3 font-medium capitalize">
                        {method === 'cash' && 'Cash on Delivery'}
                        {method === 'card' && 'Credit/Debit Card'}
                        {method === 'upi' && 'UPI / Net Banking'}
                      </span>
                    </div>
                  </div>
                ))}
                {errors.paymentType && <p className="mt-1 text-sm text-red-600">{errors.paymentType}</p>}
              </div>
            </div>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartProducts.map((item) => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-gray-100">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-600">Qty: {item.cartQuantity || 1}</span>
                        <span className="text-sm font-medium">{formatCurrency(item.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Price Details */}
              <div className="space-y-2 text-sm border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping > 0 ? formatCurrency(shipping) : 'Free'}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span className="text-orange-600">{formatCurrency(totalAmount)}</span>
              </div>
              
              <button
                onClick={handlePlaceOrder}
                disabled={isLoading}
                className={`w-full py-3.5 rounded-lg font-medium text-white
                           ${isLoading ? 'bg-gray-400' : 'bg-orange-600 hover:bg-orange-700'} 
                           transition-colors flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Place Order'}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Checkout;