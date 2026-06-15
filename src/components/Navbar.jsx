import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-yellow-600/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo + Name */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Bahara International"
              className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full"
            />

            <div>
              <h1 className="text-lg md:text-2xl font-bold text-yellow-500">
                Bahara International
              </h1>

              <p className="text-gray-400 text-[10px] md:text-xs">
                Trusted Global Spice Export Partner
              </p>
            </div>

          </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-yellow-500 transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-600/20 px-6 py-6">

          <ul className="flex flex-col gap-5 text-white text-lg">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;