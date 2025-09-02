import { useNavigate } from "react-router-dom";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Product from "../details/productdetail";
import { FiShoppingCart, FiTruck, FiTag } from "react-icons/fi";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // get product ID from URL
  const product = Product.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  return (
    <div className="bg-gradient-to-br from-gray-950 via-purple-950 to-black min-h-screen p-4 md:p-8">
      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Image Section */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/0 rounded-md shadow-xl p-4 flex flex-col items-center">
          
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md w-full max-w-sm object-cover mb-4"
          />
          <div className="flex gap-2 overflow-x-auto">
            {[1].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={`Thumbnail ${1}`}
                className="w-16 h-16 rounded-sm border cursor-pointer hover:border-blue-600"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/0 rounded-md shadow-sm p-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-400">
            {product.name}
          </h1>

          <div className="flex items-center mb-3">
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
              4.3 ★
            </span>
            <span className="text-sm text-gray-400">
              12,534 Ratings & 1,210 Reviews
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-3xl font-bold text-gray-400">{product.price}</p>
            <p className="text-sm line-through text-gray-400">
              ₹{parseInt(product.price.replace("₹", "")) + 500}
            </p>
            <p className="text-sm text-green-600 font-medium">10% off</p>
          </div>

          <p className="text-gray-400 mb-4">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-3 flex-1 flex items-center justify-center gap-2">
              <FiShoppingCart size={18} /> Add to Cart
            </button>
            <button
            onClick={() => navigate(`/checkout/${product.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 flex-1">
              Buy Now
            </button>
          </div>

          {/* Back to Products */}
          <Link to="/products">
            <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              ← Back to Products
            </button>
          </Link>
        </div>

        {/* Delivery & Offers */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/0  rounded-md shadow-sm p-4">
          <p className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            <FiTruck /> Delivery
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Enter your PIN code to check delivery date
          </p>

          <p className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            <FiTag /> Available Offers
          </p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Bank Offer: 10% instant discount on Credit Cards</li>
            <li>Special Price: Get extra ₹200 off</li>
            <li>No Cost EMI available</li>
          </ul>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/0 rounded-md shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-400">Ratings & Reviews</h2>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="border-b pb-4">
              <div className="flex items-center mb-1">
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
                  5 ★
                </span>
                <span className="text-sm font-medium text-gray-400">
                  Excellent Product
                </span>
              </div>
              <p className="text-gray-400 mb-1">
                Great quality and very useful for projects!
              </p>
              <p className="text-xs text-gray-400">Reviewed on Aug 31, 2025</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
