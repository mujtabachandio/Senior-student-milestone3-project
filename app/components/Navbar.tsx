'use client';

import { useState, useContext } from 'react';
import { CartContext } from './CartProvider';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useContext(CartContext) || { cart: [] };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <button onClick={toggleSidebar} className="relative">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
      {isSidebarOpen && <CartSidebar onClose={toggleSidebar} />}
    </nav>
  );
}
