'use client';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartProvider';
import Image from 'next/image'; 

export default function Products() {
  const [products, setProducts] = useState<{ id: number; name: string; price: number; image: string }[]>([]);
  const { addToCart } = useContext(CartContext) || { addToCart: () => {} };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={200} 
              height={200} 
              className="object-cover mb-4 rounded-lg"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
