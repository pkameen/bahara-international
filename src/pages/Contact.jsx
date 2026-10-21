import { useState } from "react";
import {
  WHATSAPP_CONFIG,
  isValidEmail,
  generateContactInquiryMessage,
  buildWhatsAppUrl,
  openWhatsAppUrl,
} from "../config/whatsapp";

function Contact() {
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
    <section className="bg-[#0b0b0b] min-h-screen pt-36 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Let’s Connect Globally
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Connect with Bahara International for premium
            spice exports, inquiries, partnerships, and
            global business opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-3xl font-bold text-white mb-8">
              Business Information
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-yellow-500 font-semibold">
                  Company Name
                </p>

                <p className="text-gray-400">
                  Bahara International
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  Email
                </p>

                <p className="text-gray-400">
                  baharaspices@gmail.com
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  WhatsApp
                </p>

                <p className="text-gray-400">
                  {WHATSAPP_CONFIG.displayNumber}
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  GST Number
                </p>

                <p className="text-gray-400">
                  32CNQPT4364K1ZC
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  Address
                </p>

                <p className="text-gray-400 leading-7">
                  25/52F, Meleparambu,
                  Pallikkal, Malappuram,
                  Kerala - 673638
                </p>
              </div>

            </div>

          </div>

          {/* Inquiry Form */}
          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-3xl font-bold text-white mb-8">
              Send Inquiry
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="contact-country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  aria-invalid={!!errors.country}
                  aria-describedby={errors.country ? "contact-country-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition ${
                    errors.country
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                />
                {errors.country && (
                  <p id="contact-country-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  id="contact-inquiry"
                  name="inquiry"
                  rows="5"
                  placeholder="Write your inquiry..."
                  value={formData.inquiry}
                  onChange={handleChange}
                  aria-invalid={!!errors.inquiry}
                  aria-describedby={errors.inquiry ? "contact-inquiry-error" : undefined}
                  className={`w-full bg-[#0b0b0b] border rounded-xl p-4 text-white outline-none transition resize-y ${
                    errors.inquiry
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-700 focus:border-yellow-500/50"
                  }`}
                ></textarea>
                {errors.inquiry && (
                  <p id="contact-inquiry-error" className="text-red-400 text-sm mt-1.5" role="alert">
                    {errors.inquiry}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-center text-black py-4 rounded-xl font-bold hover:scale-105 transition cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                Send Inquiry on WhatsApp
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-[35px] overflow-hidden border border-yellow-500/20">

          <iframe
            src="https://www.google.com/maps?q=Pallikkal,Malappuram,Kerala&output=embed"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default Contact;