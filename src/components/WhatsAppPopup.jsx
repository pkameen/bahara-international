import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  generateProductInquiryMessage,
  buildWhatsAppUrl,
  openWhatsAppUrl,
} from "../config/whatsapp";

function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    product: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    if (!formData.product.trim()) {
      newErrors.product = "Product of interest is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const message = generateProductInquiryMessage(formData);
      const whatsappUrl = buildWhatsAppUrl(message);
      openWhatsAppUrl(whatsappUrl);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Popup Box */}
      {open && (
        <div className="mb-4 bg-white shadow-2xl rounded-2xl p-4 w-72 border border-gray-200 text-left">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-black">
              Send Inquiry
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-black text-sm px-1 leading-none cursor-pointer"
              aria-label="Close inquiry popup"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <input
                id="popup-name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "popup-name-error" : undefined}
                className={`w-full border p-2 rounded text-black text-sm outline-none transition ${
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-green-500"
                }`}
              />
              {errors.name && (
                <p id="popup-name-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                id="popup-product"
                name="product"
                type="text"
                placeholder="Product (Pepper/Cardamom)"
                value={formData.product}
                onChange={handleChange}
                aria-invalid={!!errors.product}
                aria-describedby={errors.product ? "popup-product-error" : undefined}
                className={`w-full border p-2 rounded text-black text-sm outline-none transition ${
                  errors.product
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-green-500"
                }`}
              />
              {errors.product && (
                <p id="popup-product-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.product}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded font-bold transition cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle WhatsApp inquiry popup"
        aria-expanded={open}
        className="bg-green-500 text-white p-4 rounded-full shadow-xl text-2xl hover:scale-110 transition cursor-pointer flex items-center justify-center"
      >
        <FaWhatsapp />
      </button>

    </div>
  );
}

export default WhatsAppPopup;