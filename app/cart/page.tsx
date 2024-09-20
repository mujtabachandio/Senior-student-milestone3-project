// app/cart/page.tsx
'use client';

import { useContext } from 'react';
import { CartContext } from '../components/CartProvider';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext) || { cart: [] };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item:any) => (
            <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
