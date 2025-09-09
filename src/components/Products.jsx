// import React, { useState } from "react";
// import products from "../details/productdetail";
// import { Link } from "react-router-dom";

// export default function Products() {
//   const [showAll, setShowAll] = useState(false);

//   // Show only 6 products initially
//   const visibleProducts = showAll ? products : products.slice(0, 6);

//   return (
//     <section className="py-10 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center text-white">
//           Our Projects
//         </h2>

//         {/* Grid updated → 5 per row on large screens */}
//         <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {visibleProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white/10 backdrop-blur-xl border border-white/0 hover:bg-white/15  p-2 rounded-xl shadow-lg hover:scale-105 transition-transform"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-32 object-cover rounded-md mb-2"
//               />
//               <h3 className="text-base font-semibold">{product.name}</h3>
//               <p className="text-blue-200 text-xs mb-1 line-clamp-2">
//                 {product.description}
//               </p>
//               <p className="text-sm font-bold text-yellow-300 mb-2">
//                 {product.price}
//               </p>
//               <Link to={`/products/${product.id}`}>
//                 <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-md text-xs font-medium">
//                   Buy Now
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         {!showAll && products.length > 6 && (
//           <div className="mt-8 text-center">
//             <button
//               onClick={() => setShowAll(true)}
//               className="bg-white/5 backdrop-blur-xl border border-white/50 text-blue-700 font-medium px-5 py-2 rounded-md shadow-md hover:bg-white/20"
//             >
//               View More
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import products from "../details/productdetail";

export default function Products() {
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  // Read query param from URL (?q=...)
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  // Filter products if search term exists
  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      )
    : products;

  // Show only 10 products initially (if not searching)
  const visibleProducts =
    showAll || searchTerm ? filteredProducts : filteredProducts.slice(0, 10);

  return (
    <section className="py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          {searchTerm ? `Results for "${searchTerm}"` : "Our Projects"}
        </h2>

        {visibleProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-xl border border-white/0 hover:bg-white/15 p-2 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col"
                style={{ height: "300px" }} // ✅ same height for all cards
              >
                {/* Card Content */}
                <div className="flex-grow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-blue-200 text-xs mb-1 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-sm font-bold text-yellow-300">
                    {product.price}
                  </p>
                </div>

                {/* Button always at bottom */}
                <div className="mt-2">
                  <Link to={`/products/${product.id}`}>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-md text-xs font-medium">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-300">
            No projects found for{" "}
            <span className="text-yellow-300">{searchTerm}</span>
          </p>
        )}

        {/* View More Button (hide if searching) */}
        {!searchTerm && !showAll && products.length > 10 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white/5 backdrop-blur-xl border border-white/50 text-blue-700 font-medium px-5 py-2 rounded-md shadow-md hover:bg-white/20"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
