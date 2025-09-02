// import { useState } from 'react'
// import './App.css'
// import Navbar from "./components/Navbar";
// import Slider from './components/slider';
// import Products from "./components/Products";
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductPage from './Pages/productpage';
// import Banner from './components/slider';

// function App() {
//   const [count, setCount] = useState(0)
//   function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

//   return (
//     <>

//     <Router>
//        {location.pathname === "/" && <Banner />}

//       {/* Navbar always visible */}
//       <Navbar />
    
//       <Routes>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//          <Route path="/" element={<Banner/>} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//     </Router>
//     </>
//   )
// }

// export default App;
// import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Slider from "./components/slider";
// import Products from "./components/Products";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import ProductPage from "./Pages/productpage";

// function Layout() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Navbar always visible */}
//       <Navbar />

//       {/* Slider only on homepage */}
//       {location.pathname === "/" && <Slider />}

//       <Routes>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//         {/* You can add Home route if needed */}
//         <Route path="/" element={<h1 className="text-center mt-10">Welcome to Homepage</h1>} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// export default App;



import Checkout from "./Pages/checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";       // 👈 new Home page
import Products from "./components/Products";
import ProductPage from "./Pages/productpage";
import { useState } from 'react'
import './App.css'

import Slider from './components/slider';

import Banner from './components/slider';

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
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
