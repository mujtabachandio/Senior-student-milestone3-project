// app/products/[id].tsx
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CartContext } from '../components/CartProvider';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Use context
  const cartContext = useContext(CartContext);

  // Ensure the context is available
  if (!cartContext) {
    return <div>Error: Cart context is not available</div>;
  }

  const { cart, addToCart } = cartContext;

  // For simplicity, we'll use hardcoded product data.
  const product = { id: Number(id), name: 'Product ' + id, price: 20 };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
