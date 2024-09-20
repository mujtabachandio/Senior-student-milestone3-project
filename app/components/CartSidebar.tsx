'use client';

import { useContext } from 'react';
import { CartContext } from './CartProvider';
import { FaTimes } from 'react-icons/fa';

interface CartSidebarProps {
  onClose: () => void;
}

export default function CartSidebar({ onClose }: CartSidebarProps) {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  const { cart, removeFromCart } = cartContext;

  return (
    <div className="fixed top-0 right-0 w-64 bg-white shadow-lg h-full z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-xl text-gray-600">
          <FaTimes />
        </button>
      </div>
      <div className="p-4">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between items-center">
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-800">${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
