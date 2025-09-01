import { useState } from "react";
import products from "../details/productdetail";
import { Link } from "react-router-dom";
export default function Products() {
  const [showAll, setShowAll] = useState(false);

  // Show only 6 products initially
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-10 bg-gray-400 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Our Products
        </h2>

        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-blue-200 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-bold text-yellow-300 mb-4">
                {product.price}
              </p>
              <Link to={"/products"}>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-medium">
                  Buy Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && products.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white text-blue-700 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
