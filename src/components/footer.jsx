import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Subscribed successfully!");
    setEmail(""); // Clear input field

    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Customer Service Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Customer Service
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Contact", "FAQ", "Returns"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 relative z-10"
                  >
                    <span className="h-[1px] w-3 bg-orange-600"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {["About", "Sustainability", "Careers"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 relative z-10"
                  >
                    <span className="h-[1px] w-3 bg-orange-600"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400">
              Stay updated with our latest news and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="px-4 py-2 text-sm w-full border border-gray-700 bg-gray-800/50 rounded-lg placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors relative z-10"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 text-sm rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            {message && <p className="mt-2 text-xs text-green-400">{message}</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SHOPTREK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
