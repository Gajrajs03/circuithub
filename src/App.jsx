import SearchResults from "./Pages/SearchResults";
import Checkout from "./Pages/checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./components/Products";
import ProductPage from "./Pages/productpage";
import { useState } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
// import Cart from "./Pages/Cart"
import Banner2 from "./components/slider2";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Products listing page */}
        <Route path="/products" element={<Home />} />

        {/* Individual product page */}
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/search" element={<SearchResults />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>

      {/* Footer always visible */}
      <Footer />

      {/* ✅ Place Analytics at the root, outside Routes */}
      <Analytics />
    </Router>
  );
}

export default App;
