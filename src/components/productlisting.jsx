
import { useState, useEffect } from 'react';
import { ArrowUpDown, Star, Heart, ArrowRight, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import useProducts from '../hooks/useproducts';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const ProductListing = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('none');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const productsPerPage = 9;

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
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [products, sortOrder, selectedCategory]);

  // Handle pagination
  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setPaginatedProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [filteredProducts, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Page change handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    let pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate range of pages to show
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      // Adjust if we're near the end
      if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      // Add first page
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

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
            <h1 className="text-4xl text-gray-800 mb-4 md:mb-0">Our Products</h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-md">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none outline-none text-orange-700 font-medium cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Sort */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-md">
                <ArrowUpDown className="text-orange-500" size={20} />
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-transparent border-none outline-none text-orange-700 font-medium cursor-pointer"
                >
                  <option value="none">Sort by price</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products Count */}
          {/* <div className="mb-6">
            <p className="text-gray-600">
              Showing {paginatedProducts.length} of {filteredProducts.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div> */}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.map(product => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                className="group rounded-3xl cursor-pointer overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-orange-100 bg-white"
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
                  <h3 className="text-lg font-small text-gray-900 mb-3 line-clamp-1">
                    {product.title}
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
          
          {/* Empty State */}
          {paginatedProducts.length === 0 && (
            <div className="py-16 text-center">
              <div className="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any products matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSortOrder('none');
                }}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white shadow-sm">
                {/* Previous button */}
                <button 
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center rounded-l-lg border-r px-3 py-2 
                              ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Page numbers */}
                {getPageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-gray-600">...</span>
                    ) : (
                      <button
                        onClick={() => goToPage(page)}
                        className={`px-3 py-2 border-r min-w-10 text-center
                                   ${currentPage === page 
                                     ? 'bg-orange-500 text-white font-medium border-orange-500' 
                                     : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        {page}
                      </button>
                    )}
                  </div>
                ))}
                
                {/* Next button */}
                <button 
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center rounded-r-lg px-3 py-2 
                              ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductListing;