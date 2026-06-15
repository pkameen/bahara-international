function Contact() {
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
                  +91 759 4990 433
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

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl p-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl p-4 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl p-4 text-white outline-none"
              />

              <textarea
                rows="5"
                placeholder="Write your inquiry..."
                className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl p-4 text-white outline-none"
              ></textarea>

              <a
                href="https://wa.me/917594990433" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-yellow-500 text-center text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Send Inquiry on WhatsApp
              </a>

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