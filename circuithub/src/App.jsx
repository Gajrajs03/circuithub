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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to MegaMart 🛒</h2>
        <p className="text-gray-600">Your one-stop shop for everything!</p>
      </main>


      <div className="flex h-screen items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white">
        Hello Tailwind v3.4.17 🚀
      </h1>
    </div>
    

    <div className="bg-red-500 text-white text-3xl font-bold h-screen flex items-center justify-center">
      Tailwind Works 🚀
    </div>
  
export default App


    </div>
    
  )
}

export default App
