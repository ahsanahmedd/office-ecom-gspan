import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 2.',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 3.',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 4.',
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center py-4">Welcome to Our Shop</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Product;