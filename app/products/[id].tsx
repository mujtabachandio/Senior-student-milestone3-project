import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartProvider';
import Image from 'next/image';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext || { addToCart: () => {} }; // Fallback if context is undefined

  const [product, setProduct] = useState<{ id: number; name: string; price: number; image: string } | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      if (id && typeof id === 'string') {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) throw new Error('Product not found');
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      }
    };

    fetchProduct();
  }, [id]); 

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="mb-4"
      />
      <p className="text-gray-500">${product.price}</p>
      <button
  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
>
  Add to Cart
</button>
    </div>
  );
}
