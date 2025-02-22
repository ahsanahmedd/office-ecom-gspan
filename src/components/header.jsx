import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useProducts from '../hooks/useproducts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useProducts();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    setSelectedProductIndex(-1);

    // Filter products based on input
    if (query) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleKeyDown = (e) => {
    if (filteredProducts.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedProductIndex(prev => 
          prev < filteredProducts.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedProductIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        if (selectedProductIndex >= 0) {
          const selectedProduct = filteredProducts[selectedProductIndex];
          navigate(`/product/${selectedProduct.id}`, { state: { product: selectedProduct } });
          setSearchTerm('');
          setFilteredProducts([]);
          setSelectedProductIndex(-1);
        }
        break;
      default:
        break;
    }
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`text-gray-700 hover:text-orange-600 ${isActivePath('/') ? 'text-orange-600 font-semibold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/collection" 
            className={`text-gray-700 hover:text-orange-600 ${isActivePath('/collection') ? 'text-orange-600 font-semibold' : ''}`}
          >
            Collection
          </Link>
          <Link 
            to="/about" 
            className={`text-gray-700 hover:text-orange-600 ${isActivePath('/about') ? 'text-orange-600 font-semibold' : ''}`}
          >
            About us
          </Link>
          <Link 
            to="/contact" 
            className={`text-gray-700 hover:text-orange-600 ${isActivePath('/contact') ? 'text-orange-600 font-semibold' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
        SHOPTREK
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Input (Desktop) */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* Search Dropdown */}
            {filteredProducts.length > 0 && (
              <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 shadow-md rounded-lg z-50">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                    className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      index === selectedProductIndex ? 'bg-gray-100' : ''
                    }`}
                  >
                    {product.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Icon (Mobile) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className={`text-gray-700 hover:text-orange-600 ${isActivePath('/cart') ? 'text-orange-600' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Search Input (Appears Below Logo) */}
      {isSearchOpen && (
        <div className="md:hidden px-6 pb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {/* Search Dropdown */}
          {filteredProducts.length > 0 && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 shadow-md rounded-lg z-50">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                  className={`block px-4 py-2 z-9999 hover:bg-gray-100 cursor-pointer ${
                    index === selectedProductIndex ? 'bg-gray-100' : ''
                  }`}
                >
                  {product.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-6 border-b border-gray-100">
          <nav className="space-y-4">
            <Link 
              to="/" 
              className={`block text-gray-700 hover:text-orange-600 ${isActivePath('/') ? 'text-orange-600 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              className={`block text-gray-700 hover:text-orange-600 ${isActivePath('/collection') ? 'text-orange-600 font-semibold' : ''}`}
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className={`block text-gray-700 hover:text-orange-600 ${isActivePath('/about') ? 'text-orange-600 font-semibold' : ''}`}
            >
              About us
            </Link>
            <Link 
              to="/contact" 
              className={`block text-gray-700 hover:text-orange-600 ${isActivePath('/contact') ? 'text-orange-600 font-semibold' : ''}`}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;