import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../details/productdetail";
import emailjs from "@emailjs/browser";

export default function Checkout() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    contact: "",
    product: product ? product.name : "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "city" && e.target.value.toLowerCase() !== "jhansi") {
      setError("❌ Services are only available in Jhansi");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.city.toLowerCase() !== "jhansi") {
      setError("❌ Services are only available in Jhansi");
      return;
    }

    // ✅ Send email using EmailJS
    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,   // 🔹 Replace with your Service ID
        VITE_EMAILJS_TEMPLATE_ID,  // 🔹 Replace with your Template ID
        form,                // 🔹 This sends all form fields (must match {{placeholders}})
        VITE_EMAILJS_PUBLIC_KEY    // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Your order has been placed! Check your email. we'll contact you shortly..");
          setForm({
            name: "",
            contact: "",
            product: product ? product.name : "",
            address: "",
            city: "",
            state: "",
            pincode: "",
          });
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send order. Try again later!");
        }
      );
  };

  if (!product)
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/0 p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl text-gray-200 font-semibold mb-4 text-center">
          Checkout
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 rounded bg-white/0 backdrop-blur-xl border border-white/50"
        />

        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          required
          className="w-full bg-white/0 backdrop-blur-xl border border-white/50 p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="product"
          value={form.product}
          readOnly
          className="w-full p-2 mb-3 rounded bg-white/0 backdrop-blur-xl border border-white/50"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full bg-white/0 backdrop-blur-xl border border-white/50 p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full bg-white/0 backdrop-blur-xl border border-white/50 p-2 mb-3 rounded"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          required
          className="w-full bg-white/0 backdrop-blur-xl border border-white/50 p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pin Code"
          value={form.pincode}
          onChange={handleChange}
          required
          className="w-full bg-white/0 backdrop-blur-xl border border-white/50 p-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
