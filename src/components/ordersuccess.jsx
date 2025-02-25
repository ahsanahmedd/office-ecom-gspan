import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './header';

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve order details from localStorage
    const fetchOrderDetails = () => {
      try {
        const savedOrder = localStorage.getItem('latestOrder');
        if (savedOrder) {
          setOrderDetails(JSON.parse(savedOrder));
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching order details:', error);
        setIsLoading(false);
      }
    };

    // Simulate a slight delay for better UX
    const timer = setTimeout(() => {
      fetchOrderDetails();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format date
  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="animate-spin w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"></div>
          <p className="text-gray-600 mt-4">Loading your order details...</p>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="text-orange-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Details Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn't find your order details. You might have refreshed the page or accessed this page directly.</p>
            <Link to="/shop" className="bg-orange-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-orange-700 transition">
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Calculate estimated delivery date (3-5 days from order date)
  const orderDate = new Date(orderDetails.date);
  const estimatedDeliveryMin = new Date(orderDate);
  estimatedDeliveryMin.setDate(estimatedDeliveryMin.getDate() + 3);
  const estimatedDeliveryMax = new Date(orderDate);
  estimatedDeliveryMax.setDate(estimatedDeliveryMax.getDate() + 5);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto my-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">Thank you for your purchase. Your order has been confirmed.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Order Status Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Order #{orderDetails.id.slice(-6)}</h2>
                  <p className="text-gray-600">{formatDate(orderDetails.date)}</p>
                </div>
                <div className="bg-orange-100 text-orange-800 font-medium px-4 py-1 rounded-full text-sm">
                  Order Confirmed
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-800">Order Placed</div>
                  <div className="text-sm font-medium text-gray-800">Out for Delivery</div>
                  <div className="text-sm font-medium text-gray-800">Delivered</div>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-orange-500 rounded-full w-1/4"></div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-gray-500">{formatDate(orderDetails.date)}</div>
                  <div className="text-xs text-gray-500 text-right">
                    Est. {formatDate(estimatedDeliveryMin)} - {formatDate(estimatedDeliveryMax)}
                  </div>
                </div>
              </div>
            </div>

            {/* Items Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h2>

              <div className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-gray-100 last:border-0">
                    <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-medium text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-gray-600">Qty: {item.cartQuantity || 1}</span>
                        <span className="text-sm font-medium">{formatCurrency(item.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Delivery Address</h3>
                  <p className="mt-1 text-gray-800">
                    {orderDetails.shipping.address}, {orderDetails.shipping.city}, {orderDetails.shipping.postalCode}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                  <p className="mt-1 text-gray-800 capitalize">
                    {orderDetails.shipping.paymentType === 'cash' && 'Cash on Delivery'}
                    {orderDetails.shipping.paymentType === 'card' && 'Credit/Debit Card'}
                    {orderDetails.shipping.paymentType === 'upi' && 'UPI / Net Banking'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatCurrency(orderDetails.total * 0.82)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span>{formatCurrency(orderDetails.total * 0.18)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{orderDetails.total > 1000 ? 'Free' : formatCurrency(49)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span className="text-orange-600">{formatCurrency(orderDetails.total)}</span>
              </div>

              <div className="space-y-3">
                <Link to="/collection" className="block w-full py-3 bg-orange-600 text-white font-medium rounded-lg text-center hover:bg-orange-700 transition">
                  Continue Shopping
                </Link>
                {/* <button className="block w-full py-3 bg-white text-gray-800 font-medium rounded-lg text-center border border-gray-300 hover:bg-gray-50 transition">
                  Track Order
                </button> */}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex gap-3 items-center">
                  <div className="text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-800">Need help?</span>
                    <Link to="/contact" className="block text-orange-600 hover:underline">Contact support</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;