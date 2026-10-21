import { useState } from "react";
import {
  WHATSAPP_CONFIG,
  isValidEmail,
  generateContactInquiryMessage,
  buildWhatsAppUrl,
  openWhatsAppUrl,
} from "../config/whatsapp";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    inquiry: "",
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

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid business email address.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = "Please write your inquiry.";
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
      const message = generateContactInquiryMessage(formData);
      const whatsappUrl = buildWhatsAppUrl(message);
      openWhatsAppUrl(whatsappUrl);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-yellow-600 uppercase tracking-[4px] mb-3 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Let’s Connect For Global Trade
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Business Information */}
          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">
                Business Information
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-yellow-500 font-semibold">Company Name</p>
                  <p className="text-gray-300">Bahara International</p>
                </div>

                <div>
                  <p className="text-yellow-500 font-semibold">Email</p>
                  <p className="text-gray-300">baharaspices@gmail.com</p>
                </div>

                <div>
                  <p className="text-yellow-500 font-semibold">WhatsApp</p>
                  <p className="text-gray-300">{WHATSAPP_CONFIG.displayNumber}</p>
                </div>

                <div>
                  <p className="text-yellow-500 font-semibold">GST Number</p>
                  <p className="text-gray-300">32CNQPT4364K1ZC</p>
                </div>

                <div>
                  <p className="text-yellow-500 font-semibold">Address</p>
                  <p className="text-gray-300 leading-7">
                    25/52F, Meleparambu,
                    Pallikkal, Malappuram,
                    Kerala - 673638
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-8">
              Send Inquiry
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <input
                  id="home-contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "home-contact-name-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.name && (
                  <p id="home-contact-name-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="home-contact-email"
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "home-contact-email-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.email && (
                  <p id="home-contact-email-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="home-contact-country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  aria-invalid={!!errors.country}
                  aria-describedby={errors.country ? "home-contact-country-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.country
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.country && (
                  <p id="home-contact-country-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  id="home-contact-inquiry"
                  name="inquiry"
                  rows="5"
                  placeholder="Write your inquiry..."
                  value={formData.inquiry}
                  onChange={handleChange}
                  aria-invalid={!!errors.inquiry}
                  aria-describedby={errors.inquiry ? "home-contact-inquiry-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition resize-y ${
                    errors.inquiry
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                ></textarea>
                {errors.inquiry && (
                  <p id="home-contact-inquiry-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.inquiry}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-center text-black py-4 rounded-xl font-bold hover:scale-105 transition cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Send Inquiry on WhatsApp"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;