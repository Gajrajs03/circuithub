import { useState } from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Obstacle Avoiding Robot",
      price: "₹999",
      description: "Yea aapko waise hi avoid karega jaise wo aapko karti hai",
      image: "/Content_Image_1.jpeg",
    },
    {
      id: 2,
      name: "Arduino Car",
      price: "₹999",
      description: "Bluetooth controlled Arduino car",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Wireless Charger",
      price: "₹699",
      description: "DIY wireless charger circuit",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Line Follower Robot",
      price: "₹1199",
      description: "Smart robot that follows a line path",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Voice Controlled Switch",
      price: "₹899",
      description: "Home automation using voice commands",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 6,
      name: "Smart Door Lock",
      price: "₹1299",
      description: "IoT-based digital door lock system",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 7,
      name: "Solar Power Bank",
      price: "₹1499",
      description: "DIY solar-powered power bank",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 8,
      name: "Gesture Controlled Car",
      price: "₹1599",
      description: "Arduino based gesture control project",
      image: "https://via.placeholder.com/200",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Show only 6 products initially
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-10 bg-white text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Products</h2>
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-blue-600 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
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
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-medium">
                Buy Now
              </button>
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
