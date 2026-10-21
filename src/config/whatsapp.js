/**
 * WhatsApp integration configuration and helper utilities
 * Bahara International
 */

export const WHATSAPP_CONFIG = {
  phoneNumber: "917594990433",
  displayNumber: "+91 759 4990 433",
};

/**
 * Validates an email address using standard pattern
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  // Standard email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(trimmed);
}

/**
 * Generates the contact page business inquiry message
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.country
 * @param {string} data.inquiry
 * @returns {string}
 */
export function generateContactInquiryMessage({ name, email, country, inquiry }) {
  const safeName = (name || "").trim();
  const safeEmail = (email || "").trim();
  const safeCountry = (country || "").trim();
  const safeInquiry = (inquiry || "").trim();

  return [
    "Hello BAHARA INTERNATIONAL,",
    "I would like to make a business inquiry.",
    `Name: ${safeName}`,
    `Business Email: ${safeEmail}`,
    `Country: ${safeCountry}`,
    "Inquiry:",
    safeInquiry,
    "I look forward to hearing from you.",
    "Best regards,",
    safeName,
  ].join("\n");
}

/**
 * Generates the global popup product inquiry message
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.product
 * @returns {string}
 */
export function generateProductInquiryMessage({ name, product }) {
  const safeName = (name || "").trim();
  const safeProduct = (product || "").trim();

  return [
    "Hello BAHARA INTERNATIONAL,",
    "I am interested in your product.",
    `Name: ${safeName}`,
    `Product of Interest: ${safeProduct}`,
    "Please share the product details, pricing, and availability.",
    "Thank you.",
  ].join("\n");
}

/**
 * Builds the WhatsApp click-to-chat URL with the encoded message
 * @param {string} message
 * @param {string} [phoneNumber]
 * @returns {string}
 */
export function buildWhatsAppUrl(message, phoneNumber = WHATSAPP_CONFIG.phoneNumber) {
  const cleanNumber = String(phoneNumber).replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp in a new tab/window safely
 * @param {string} url
 */
export function openWhatsAppUrl(url) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
