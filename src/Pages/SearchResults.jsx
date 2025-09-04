import React from "react";
import { Link, useLocation } from "react-router-dom";
import products from "../details/productdetail";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  // Filter products based on search term
  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      )
    : [];

  return (
    <section className="py-10 text-white bg-gradient-to-br from-gray-950 via-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          {searchTerm ? `Results for "${searchTerm}"` : "Search Projects"}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-xl border border-white/0 hover:bg-white/15 p-2 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h3 className="text-base font-semibold">{product.name}</h3>
                <p className="text-blue-200 text-xs mb-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-sm font-bold text-yellow-300 mb-2">
                  {product.price}
                </p>
                <Link to={`/products/${product.id}`}>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-md text-xs font-medium">
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-300">
            No projects found for{" "}
            <span className="text-yellow-300">{searchTerm}</span>
          </p>
        )}
      </div>
    </section>
  );
}
