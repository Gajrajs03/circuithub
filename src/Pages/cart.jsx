// import { useNavigate } from "react-router-dom";
// import React, { useContext } from "react";
// import { CartContext } from "../components/CartContext";
// import Product from "../details/productdetail";
// import { useParams, Link } from "react-router-dom";

// export default function Cart() {
//   const navigate = useNavigate();
//   const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
//   const { id } = useParams(); // get product ID from URL
//   const product = Product.find((p) => p.id === parseInt(id));
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.quantity * parseInt(item.price.replace(/\D/g, "")),
//     0
//   );

//   return (
//     <section className="py-10 text-white bg-gradient-to-br from-gray-950 via-purple-950 to-black">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-center text-gray-300">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-yellow-300">{item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="px-2 bg-gray-700 rounded"
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="px-2 bg-gray-700 rounded"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Cart Total */}
//             <div className="text-right mt-6">
//               <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
//               <button 
//               onClick={() => navigate("/checkout")}
//               className="mt-3 bg-purple-600 px-6 py-2 rounded-md hover:bg-purple-700">
//                 Checkout
//               </button>
            
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
