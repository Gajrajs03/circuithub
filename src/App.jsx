import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Slider from './components/slider';
import Products from "./components/Products";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './Pages/productpage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Homepage with Slider + Products */}
        <Route
          path="/"
          element={
            <div className="bg-gray-400 min-h-screen">
              <main className="p-6">
                <Slider />
              </main>
              <Products />
            </div>
          }
        />

        {/* Product Details Page */}
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  )
}

export default App;
