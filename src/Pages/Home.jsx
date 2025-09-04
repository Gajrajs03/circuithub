import React from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Banner2 from "../components/slider2";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-purple-950 to-black">
      <Banner2 />
      <Products />
    </div>
  );
}
