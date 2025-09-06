import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// the below code works if cart systeem is integrated 

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from "react";
// import ReactDOM from "react-dom/client";
// import './index.css'
// import App from "./App";
// import { CartProvider } from "./components/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </React.StrictMode>
// );
