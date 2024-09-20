'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://briansolis.com/wp-content/uploads/2022/01/eCommerce-Website-Components-photo.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <div className="text-center p-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our E-Commerce Site</h1>
            <p className="text-lg mb-6">Your one-stop shop for amazing products!</p>
            <Link href="/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Product Card */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqJ-twbKdcDTaWUoMEGUi2uhHpzJ1mD5ZuA&s" alt="Product" className="w-full h-40 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-xl font-semibold mb-2">Product Name</h3>
              <p className="text-gray-700 mb-4">$99.99</p>
              <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center block hover:bg-blue-600 transition-colors">
                View Details
              </Link>
            </div>
            {/* Repeat the above card for more products */}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <p className="text-lg mb-8">Check out our latest promotions and discounts!</p>
          <Link href="/offers" className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
            Explore Offers
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 hover:text-white">
              <p className="text-lg mb-4">"Great products and excellent customer service. Highly recommend!"</p>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600">Verified Buyer</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 hover:text-white">
              <p className="text-lg mb-4">"Great products and excellent customer service. Highly recommend!"</p>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600">Verified Buyer</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 hover:text-white">
            <p className="text-lg mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">"Great products and excellent customer service. Highly recommend!"</p>
            <p className="font-semibold text-xl transition-transform duration-300 ease-in-out hover:scale-105">Jane Doe</p>
            <p className="text-gray-600 transition-opacity duration-300 ease-in-out hover:opacity-80">Verified Buyer</p>
          </div>

          </div>
        </div>
      </section>

    </div>
  );
}
