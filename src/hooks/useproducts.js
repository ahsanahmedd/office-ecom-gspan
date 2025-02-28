import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
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
        "https://img.freepik.com/free-photo/confident-young-man-walking-european-city-street_158595-4707.jpg?ga=GA1.1.1599787754.1740406301",
        "https://img.freepik.com/free-photo/confident-young-man-walking-european-city-street_158595-4726.jpg?ga=GA1.1.1599787754.1740406301"
      ],
      colors: ["#000000", "#navy"],
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
        "https://cdn.shopify.com/s/files/1/2521/3050/products/IMG_6157_800x.jpg?v=1613983155",
        "https://th.bing.com/th/id/R.92b150c5a103191a252ca96ed0215e3d?rik=U6VJnX0wEOfUtw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f2521%2f3050%2fproducts%2fIMG_6158.jpg%3fv%3d1672759092&ehk=ILnNxocXVdVyC3I3IIiASExbguETY9fWZbID1Q5ecMQ%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.zzsUYXtrLFvvufGWHT14YgHaMT?pid=ImgDet&w=184&h=305&c=7&dpr=1.3"
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
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop"
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
      title: "Orange T-shirt",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      category: "T-Shirts",
      rating: 4.3,
      reviews: 112,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://cdn11.bigcommerce.com/s-20kzykhhd5/images/stencil/1280x1280/products/3675/12660/tshirts-9201-front-angle-1-1030x1030__92720.1670514686.jpg?c=2?imbypass=on",
        "https://th.bing.com/th/id/OIP.nu2McSzB53cmXAfceqLIQQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
        "https://th.bing.com/th/id/OIP.ZRjS9KeGcCeGPQUVj9guFQHaJQ?pid=ImgDet&w=184&h=230&c=7&dpr=1.3"
      ],
      colors: ["#ff1493", "#00ff7f"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 10,
      title: "Purple Embroidered Suit Set", 
      price: 3219,
      originalPrice: 4599,
      discount: 30,
      category: "Ethnic Wear",
      rating: 4.5,
      reviews: 128,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://stylejaipur.com/cdn/shop/files/WhatsAppImage2023-12-12at9.08.16PM.jpg?v=1702541403",
        "https://www.shivanshfab.com/cdn/shop/files/WhatsAppImage2023-10-12at3.03.29PM.jpg?v=1697172232&width=600",
        "https://www.shivanshfab.com/cdn/shop/files/11111.jpg?v=1686894766&width=1445"
      ],
      colors: ["#a020f0", "#ffc0cb"],
      sizes: ["S", "M", "L", "XL"]
      
    },
    {
      id: 11,
      title: "Summer Sandals",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      category: "Shoes",
      rating: 4.4,
      reviews: 120,
      inCart: false,
      cartQuantity: 0,
      images: [
        
        "https://th.bing.com/th/id/OIP.Dzt58EXie4k8PYuRLocmYwHaJ4?pid=ImgDet&w=184&h=246&c=7&dpr=1.3",
        "https://th.bing.com/th/id/OIP.M3-IMuG7s6QMRMMVru5q1wHaFj?pid=ImgDet&w=184&h=137&c=7&dpr=1.3",
        "https://th.bing.com/th/id/OIP.6nQCuQiNJ0pW4ps4ot2vtQHaJ3?pid=ImgDet&w=184&h=244&c=7&dpr=1.3"
      ],
      colors: ["#ff69b4", "#98fb98"],
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 12,
      title: "Winter Coat",
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      category: "Outerwear",
      rating: 4.7,
      reviews: 150,
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
      id: 13,
      title: "Sports Shoes",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      category: "Shoes",
      rating: 4.5,
      reviews: 130,
      inCart: false,
      cartQuantity: 0,
      images: [
        
        "https://th.bing.com/th/id/OIP.bDl6iSDl-lY7QkQ3q4oyjgHaFs?pid=ImgDet&w=184&h=141&c=7&dpr=1.3",
        "https://www.runningfree.com/images/products/31/Brooks-Adrenaline-GTS-11-N29940_XL.jpg",
        "https://th.bing.com/th/id/OIP.6e-a5hM8B3sQznG8PTeKMwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
      ],
      colors: ["#808080", "#000000", "#navy"],
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 14,
      title: "Denim Jeans",
      price: 1499,
      originalPrice: 2199,
      discount: 30,
      category: "Jeans",
      rating: 4.6,
      reviews: 140,
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
      id: 15,
      title: "Cotton Socks",
      price: 499,
      originalPrice: 699,
      discount: 28,
      category: "Accessories",
      rating: 4.4,
      reviews: 110,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
      ],
      colors: ["#ffffff", "#000000"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 16,
      title: "Leather Belt",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      category: "Accessories",
      rating: 4.5,
      reviews: 120,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://th.bing.com/th/id/OIP.MGN75_5v4mCsKddid8t42AHaJK?pid=ImgDet&w=184&h=227&c=7&dpr=1.3",
        "https://th.bing.com/th/id/OIP.DZN4eB7ZwKcv0DVEijhYDQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",

        
        "https://images-na.ssl-images-amazon.com/images/I/61q%2BHmdi22L._AC_UL1010_.jpg"
      ],
      colors: ["#808080", "#000000", "#navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 17,
      title: "Furry Slippers",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      category: "Shoes",
      rating: 4.5,
      reviews: 130,
      inCart: false,
      cartQuantity: 0,
      images: [
        "https://th.bing.com/th/id/OIP.d_5hbjmnqYI5EZQYIiDdRQHaJ4?w=2250&h=3000&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.aalnyZ0vy0laFvjtMInMmQHaHX?pid=ImgDet&w=184&h=182&c=7&dpr=1.3",
        "https://th.bing.com/th/id/OIP.cr-bGgxJb9-ayNTwagLDQQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
      ],
      colors: ["#808080", "#000000", "#navy"],
      sizes: ["6", "7", "8", "9"]
    }
    
  ]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      productToAdd.inCart = true;
      const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      cartProducts.push(productToAdd);
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
  }; 


  const removeFromCart = (productId) => {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const updatedCartProducts = cartProducts.filter(product => product.id !== productId);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    setProducts(prevProducts => prevProducts.map(product => product.id === productId ? { ...product, inCart: false } : product));
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
