import SearchResults from "./Pages/SearchResults";
import Checkout from "./Pages/checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home"; // 👈 new Home page
import Products from "./components/Products";
import ProductPage from "./Pages/productpage";
import { useState } from "react";
import "./App.css";

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
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
