import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link href={`/products/${product.id}`} className="text-blue-500">
       View Details
      </Link>
    </div>
  );
}
