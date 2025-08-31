import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Slider from './components/slider';
import Products from "./components/Products";
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <main className="p-6">
        <Slider />
      </main>
      {/* Product Section */}
      <Products />
      {/* Footer Section */}
      <Footer />
    </div>
    
  )
}

export default App
