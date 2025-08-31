import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-slate-500">Welcome to MegaMart 🛒</h2>
        <p className="text-gray-600">Your one-stop shop for everything!</p>
      </main>
    
    </div>
    
  )
}

export default App
