import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMapPin } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // clear input
      setMenuOpen(false); // close mobile menu after search
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Circuit</span>HUB
        </h1>

        {/* Search Bar (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-white rounded-full overflow-hidden w-80"
        >
          <input
            type="text"
            placeholder="Search for projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 text-gray-700 outline-none w-full"
          />
          <button
            type="submit"
            className="px-4 text-blue-600 hover:text-blue-800"
          >
            <FiSearch size={18} />
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Location */}
          <div className="relative">
            <button
              onClick={() => setShowLocation(!showLocation)}
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <FiMapPin className="text-xl" />
              <span className="hidden sm:inline">Jhansi</span>
            </button>
            {showLocation && (
              <div className="absolute right-0 mt-2 bg-white text-blue-700 px-4 py-2 rounded-lg shadow-lg text-sm w-64">
                Currently accepting orders in{" "}
                <span className="font-bold">Jhansi</span> only.
              </div>
            )}
          </div>

          {/* Cart */}
          {/* <Link to="/cart">
            <FiShoppingCart className="cursor-pointer text-xl hover:text-yellow-400" />
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl hover:text-yellow-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-full overflow-hidden w-full"
          >
            <input
              type="text"
              placeholder="Search for projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 text-gray-700 outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 text-blue-600 hover:text-blue-800"
            >
              <FiSearch size={18} />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
