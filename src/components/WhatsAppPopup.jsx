import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Popup Box */}
      {open && (
        <div className="mb-4 bg-white shadow-2xl rounded-2xl p-4 w-72 border">
          <p className="font-semibold text-black mb-2">
            Send Inquiry
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 mb-2 rounded"
          />

          <input
            type="text"
            placeholder="Product (Pepper/Cardamom)"
            className="w-full border p-2 mb-2 rounded"
          />

          <a
            href="https://wa.me/917594990433" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 text-white py-2 rounded font-bold"
          >
            Send on WhatsApp
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-4 rounded-full shadow-xl text-2xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </button>

    </div>
  );
}

export default WhatsAppPopup;