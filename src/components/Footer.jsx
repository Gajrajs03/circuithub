import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">CircuitHub</h2>
          <p className="text-sm text-blue-200 mt-1">
            Your one-stop destination for innovative electronics projects.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/circuithub3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-yellow-300"
          >
            <MdEmail />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-center md:text-right text-sm text-blue-200">
          © {new Date().getFullYear()} CircuitHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
