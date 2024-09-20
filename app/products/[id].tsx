import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartProvider';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>Error: Cart context is not available</div>;
  }

  const { addToCart } = cartContext;

  const [product, setProduct] = useState<{ id: number; name: string; price: number; image: string } | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) throw new Error('Product not found');
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4" />
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
