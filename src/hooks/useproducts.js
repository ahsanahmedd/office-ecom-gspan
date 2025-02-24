import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Purple Embroidered Suit Set", 
      price: 3219,
      originalPrice: 4599,
      discount: 30,
      category: "Ethnic Wear",
      rating: 4.5,
      reviews: 128,
      inCart: true,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1614252370653-c9f4ef6a88a5?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1614252371303-cbe4e45b283d?w=600&h=800&fit=crop"
      ],
      colors: ["#a020f0", "#ffc0cb"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      title: "Classic Red Anarkali Set",
      price: 2999,
      originalPrice: 4299,
      discount: 25,
      category: "Ethnic Wear",
      rating: 4.2,
      reviews: 89,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1594633313931-7e152d76f436?w=600&h=800&fit=crop"
      ],
      colors: ["#ff0000", "#ffd700"],
      sizes: ["S", "M", "L"]
    },
    {
      id: 3,
      title: "Premium Slim Fit Jeans",
      price: 1499,
      originalPrice: 2199,
      discount: 30,
      category: "Jeans",
      rating: 4.7,
      reviews: 256,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop"
      ],
      colors: ["#0000ff", "#808080"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      id: 4,
      title: "Essential Cotton T-Shirt",
      price: 799,
      originalPrice: 1199,
      discount: 33,
      category: "T-Shirts",
      rating: 4.3,
      reviews: 167,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
      ],
      colors: ["#ffffff", "#000000"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      title: "Formal Business Shirt",
      price: 1999,
      originalPrice: 2599,
      discount: 23,
      category: "Shirts",
      rating: 4.6,
      reviews: 143,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=600&h=800&fit=crop"
      ],
      colors: ["#000000", "#333333"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 6,
      title: "Floral Summer Dress",
      price: 2499,
      originalPrice: 3499,
      discount: 28,
      category: "Dresses",
      rating: 4.4,
      reviews: 178,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop"
      ],
      colors: ["#ff69b4", "#98fb98"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 7,
      title: "Leather Jacket",
      price: 4999,
      originalPrice: 6999,
      discount: 28,
      category: "Outerwear",
      rating: 4.8,
      reviews: 205,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop"
      ],
      colors: ["#8b4513", "#000000"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 8,
      title: "Casual Hoodie",
      price: 1799,
      originalPrice: 2499,
      discount: 28,
      category: "Sweatshirts",
      rating: 4.5,
      reviews: 156,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop"
      ],
      colors: ["#808080", "#000000", "#navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 9,
      title: "Printed Maxi Skirt",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      category: "Skirts",
      rating: 4.3,
      reviews: 112,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583496661263-bc74f0e3fd8c?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583496661348-5f80d58dab0f?w=600&h=800&fit=crop"
      ],
      colors: ["#ff1493", "#00ff7f"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 10,
      title: "Formal Blazer",
      price: 3499,
      originalPrice: 4999,
      discount: 30,
      category: "Formal Wear",
      rating: 4.6,
      reviews: 189,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1598808504174-e6e9e1f65822?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1598808503800-905ff22c0f69?w=600&h=800&fit=crop"
      ],
      colors: ["#000000", "#navy"],
      sizes: ["S", "M", "L", "XL"]
    }
  ]);

  const addToCart = (productId) => {
    setProducts(prevProducts => prevProducts.map(product => 
      product.id === productId 
        ? { ...product, inCart: true, cartQuantity: product.cartQuantity ? product.cartQuantity + 1 : 1 }
        : product
    ));
  };
  const removeFromCart = (productId) => {
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === productId
        ? { ...product, inCart: false, cartQuantity: 0 }
        : product
    ));
  };

  const updateCartQuantity = (productId, quantity) => {
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === productId
        ? { ...product, cartQuantity: quantity }
        : product
    ));
  };

  return { products, setProducts, addToCart, removeFromCart, updateCartQuantity };
};

export default useProducts;
