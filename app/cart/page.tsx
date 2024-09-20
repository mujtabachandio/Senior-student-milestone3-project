import { useContext } from 'react';
import { CartContext } from '../components/CartProvider'; // Ensure the path is correct

export default function Cart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cart, removeFromCart } = context;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4 flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
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
  );
}
