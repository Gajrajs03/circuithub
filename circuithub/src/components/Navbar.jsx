import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">MegaMart</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 bg-gray-800 text-white outline-none w-72"
          />
          <button className="bg-purple-600 px-4 py-2">
            <FiSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <FiUser className="cursor-pointer text-xl hover:text-purple-400" />
          <FiShoppingCart className="cursor-pointer text-xl hover:text-purple-400" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4">
          <ul className="space-y-3">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">Categories</li>
            <li className="hover:text-purple-400 cursor-pointer">Deals</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
