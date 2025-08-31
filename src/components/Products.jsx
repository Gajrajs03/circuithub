export default function Products() {
  const products = [
    {
      id: 1,
      name: "Smart LED Project",
      price: "₹499",
      description: "IoT based smart LED system",
      image: "https://via.placeholder.com/200",
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
      id: 1,
      name: "Smart LED Project",
      price: "₹499",
      description: "IoT based smart LED system",
      image: "https://via.placeholder.com/200",
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
  ];

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-bold text-purple-400 mb-4">
                {product.price}
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
