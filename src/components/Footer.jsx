import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white pt-16 pb-8 px-6 border-t border-yellow-600/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">
            Bahara International
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Trusted Global Spice Export Partner specializing
            in premium Kerala Pepper and Cardamom for
            international markets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
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
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <a
              href="mailto:baharaspices@gmail.com"
              className="flex items-center gap-3 hover:text-yellow-500"
            >
              <FaEnvelope />
              baharaspices@gmail.com
            </a>

            <a
              href="https://wa.me/917594990433"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-yellow-500"
            >
              <FaWhatsapp />
              +91 759 4990 433
            </a>

            <p>
              Malappuram, Kerala, India
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-600/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 Bahara International. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;