function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-yellow-600 uppercase tracking-[4px] mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Let’s Connect For Global Trade
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-black text-white rounded-[30px] p-10">

            <h3 className="text-3xl font-bold text-yellow-500 mb-8">
              Bahara International
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>
                <strong>Email:</strong><br />
                baharaspices@gmail.com
              </p>

              <p>
                <strong>WhatsApp:</strong><br />
                +91 759 4990 433
              </p>

              <p>
                <strong>GST:</strong><br />
                32CNQPT4364K1ZC
              </p>

              <p>
                <strong>Address:</strong><br />
                25/52F, Meleparambu,
                Pallikkal, Malappuram,
                Kerala - 673638
              </p>

            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-100 rounded-[30px] p-10">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl outline-none border"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl outline-none border"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full p-4 rounded-xl outline-none border"
              />

              <textarea
                rows="5"
                placeholder="Your Inquiry"
                className="w-full p-4 rounded-xl outline-none border"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;