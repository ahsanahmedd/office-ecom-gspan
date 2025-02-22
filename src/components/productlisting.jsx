import { useState, useEffect } from 'react';
import { ArrowUpDown,Star, Heart, ArrowRight, Truck } from 'lucide-react';
import useProducts from '../hooks/useproducts';
import Header from './header';
import { useNavigate } from 'react-router-dom';

const ProductListing = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('none');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    if (!products || products.length === 0) return setFilteredProducts([]);

    let filtered = selectedCategory === 'All' 
      ? [...products] 
      : products.filter(product => product.category === selectedCategory);

    // Sort the filtered products
    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    setFilteredProducts(filtered);
  }, [products, sortOrder, selectedCategory]);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-8 relative bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h1 className="text-4xl  text-gray-800 mb-4 md:mb-0">Our Products</h1>

            {/* Filters */}
            <div className="flex gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-md">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 font-medium cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Sort */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-md">
                <ArrowUpDown className="text-gray-500" size={20} />
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 font-medium cursor-pointer"
                >
                  <option value="none">Sort by price</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map(product => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          className="group  rounded-3xl cursor-pointer overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
        >
          {/* Image Section */}
          <div className="relative pt-[120%] overflow-hidden">
            <img
              src={product.images}
              alt={product.name}
              className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Discount Tag */}
            {product.discount > 0 && (
              <div className="absolute top-4 left-4">
                <span className="bg-black bg-opacity-90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white">
                  {product.discount}% OFF
                </span>
              </div>
            )}

            {/* Wishlist Button */}
            <button 
              className="absolute top-4 right-4 p-2.5 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
            </button>

            {/* New Tag */}
            {product.isNew && (
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-500 bg-opacity-90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white">
                  NEW
                </span>
              </div>
            )}
          </div>

          <div className="p-6">
            {/* Category */}
            <span className="text-sm font-medium text-gray-500 mb-2 block">
              {product.category}
            </span>

            {/* Product Name */}
            <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-1">
              {product.name}
            </h3>

            {/* Price Section */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-gray-900">
                ₹{product.price}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
