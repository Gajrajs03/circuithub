import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-blue-700 shadow-lg sticky top-0 z-50 flex-row bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-rgba(0, 142, 204, 1) flex">
          CircuitHUB
          
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-blue-100 rounded-lg overflow-hidden w-">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 bg-blue-100 text-white outline-none w-50"
          />
          <button className="bg-blue-100 px-4 py-2">
            <FiSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <FiUser className="cursor-pointer text-xl hover:text-purple-400 text-blue-700" />
          <FiShoppingCart className="cursor-pointer text-xl hover:text-purple-400 text-blue-700" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
