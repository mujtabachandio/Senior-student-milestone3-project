'use client';

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'; // Import Image
import { CartContext } from '../components/CartProvider';

export default function Products() {
  const [products, setProducts] = useState<{ id: number; name: string; price: number; image: string }[]>([]);
  const { addToCart } = useContext(CartContext) || { addToCart: () => {} };

  useEffect(() => {
    // Fetch products from the API route
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
              width={640} // Set appropriate width
              height={240} // Set appropriate height
            />
            <div className="text-center">
              <span className="text-xl font-semibold text-gray-800 mb-2 block">{product.name}</span>
              <span className="text-lg font-bold text-gray-600 mb-4 block">${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
