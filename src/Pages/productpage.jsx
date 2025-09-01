import { FiShoppingCart, FiTruck, FiTag } from "react-icons/fi";
import product from "../details/productdetail";
import products from "../details/productdetail";

export default function ProductPage() {
  const product = products[0]; // Get the first product for display
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Image Section */}
        {product.map()}
        <div
        key={product.id} 
        className="lg:col-span-5 bg-white rounded-md shadow-sm p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md w-full max-w-sm object-cover mb-4"
          />
          {/* <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={product.name}
                // src={`https://via.placeholder.com/90?text=${i}`}
                // alt={`Thumbnail ${i}`}
                className="w-16 h-16 rounded-sm border cursor-pointer hover:border-blue-600"
              />
            ))}
          </div> */}
        </div>

        {/* Product Details */}
        <div className="lg:col-span-5 bg-white rounded-md shadow-sm p-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
            Stylish Wireless Earbuds with Charging Case
          </h1>

          <div className="flex items-center mb-3">
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
              4.3 ★
            </span>
            <span className="text-sm text-gray-600">
              12,534 Ratings & 1,210 Reviews
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-3xl font-bold text-gray-900">{product.price}</p>
            <p className="text-sm line-through text-gray-400">₹3,999</p>
            <p className="text-sm text-green-600 font-medium">37% off</p>
          </div>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Up to 30 hours of battery life</li>
            <li>Type-C fast charging</li>
            <li>Water & sweat resistant (IPX5)</li>
            <li>Voice assistant support</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-3 flex-1 flex items-center justify-center gap-2">
              <FiShoppingCart size={18} /> Add to Cart
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 flex-1">
              Buy Now
            </button>
          </div>
        </div>

        {/* Delivery & Offers */}
        <div className="lg:col-span-2 bg-white rounded-md shadow-sm p-4">
          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FiTruck /> Delivery
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Enter your PIN code to check delivery date
          </p>

          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FiTag /> Available Offers
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Bank Offer: 10% instant discount on Credit Cards</li>
            <li>Special Price: Get extra ₹500 off (price inclusive)</li>
            <li>No Cost EMI available</li>
          </ul>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 bg-white rounded-md shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Ratings & Reviews</h2>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="border-b pb-4">
              <div className="flex items-center mb-1">
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
                  5 ★
                </span>
                <span className="text-sm font-medium text-gray-700">
                  Excellent Product
                </span>
              </div>
              <p className="text-gray-700 mb-1">
                Great sound quality and battery backup. Perfect for daily use.
              </p>
              <p className="text-xs text-gray-500">Reviewed on Aug 31, 2025</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
