import director1 from "../assets/management/director1.jpg";
import director2 from "../assets/management/director2.jpg";
import director3 from "../assets/management/director3.jpg"; 
import { motion } from "framer-motion";

function About() {
  const directors = [
    {
      image: director1,
      name: "Sayyid Haidroos",
      role: "Founder & Global Trade Director",
      description:
        "Leading Bahara International with commitment, trust, and excellence in global spice exports.",
    },

    {
      image: director2,
      name: "Sajid Ameen Pk",
      role: "Managing Director, Operations & Supply Chain",
      description:
        "Managing sourcing, premium quality control, packaging, and smooth international export operations.",
    },

    {
      image: director3,
      name: "Basith Ameen Kv",
      role: "Business Director & International Business Development",
      description:
        "Expanding international partnerships and strengthening Bahara International’s global presence.",
    },
  ];

  return (
    <motion.section
      className="bg-[#0b0b0b] min-h-screen pt-36 pb-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Company Introduction */}
        <div className="text-center mb-20">

          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            About Bahara International
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Trusted Global Spice Export Partner
          </h1>

          <p className="text-gray-400 text-lg leading-9 max-w-5xl mx-auto">
            Bahara International is a trusted global spice export company
            headquartered in Kerala, India, committed to delivering
            premium-quality agricultural and spice products to
            international markets. We specialize in sourcing and
            exporting carefully selected premium Black Pepper,
            Green Cardamom, Cashew, and high-quality spices with
            international standards of quality and freshness.
          </p>

          <p className="text-gray-400 text-lg leading-9 max-w-5xl mx-auto mt-6">
            Driven by integrity, reliability, and customer satisfaction,
            Bahara International has built strong relationships with
            buyers across UAE, USA, Oman, Qatar, Kuwait, and Europe.
            We believe in trust, consistency, premium sourcing,
            hygienic packaging, and timely delivery.
          </p>

        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">

          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Our mission is to deliver premium export-quality spices
              to international markets while maintaining trust,
              transparency, quality assurance, and long-term
              business relationships with global buyers.
            </p>

          </div>

          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-4xl font-bold text-white mb-6">
              Our Vision
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Our vision is to become one of the most trusted
              global spice export partners by connecting Kerala’s
              premium agricultural richness with international markets.
            </p>

          </div>

        </div>

        {/* Leadership Team */}
        <div 
          id="management-team"
          className="text-center mb-16"
        >

          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Management Team
          </p>

          <h2 className="text-5xl font-bold text-white">
            Our Leadership
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">

          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-[#171717] rounded-[35px] overflow-hidden border border-yellow-500/20 hover:scale-105 transition duration-500 shadow-2xl"
            >

              <img
                src={director.image}
                alt={director.name}
                className="w-full h-[420px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">
                  {director.name}
                </h3>

                <p className="text-yellow-500 mt-2">
                  {director.role}
                </p>

                <p className="text-gray-400 mt-5 leading-7">
                  {director.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Company Details */}
        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-4xl font-bold text-white mb-6">
              Company Profile
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Bahara International is dedicated to exporting premium
              agricultural and spice products with international
              quality standards. Our focus remains on reliability,
              premium sourcing, and building trusted global trade
              partnerships.
            </p>

          </div>

          <div className="bg-[#171717] border border-yellow-500/20 rounded-[35px] p-10">

            <h2 className="text-4xl font-bold text-white mb-8">
              Company Information
            </h2>

            <div className="space-y-5 text-gray-400 text-lg">

              <p>
                <span className="text-yellow-500 font-semibold">
                  Company Name:
                </span>{" "}
                Bahara International
              </p>

              <p>
                <span className="text-yellow-500 font-semibold">
                  Tagline:
                </span>{" "}
                Trusted Global Spice Export Partner
              </p>

              <p>
                <span className="text-yellow-500 font-semibold">
                  GST:
                </span>{" "}
                32CNQPT4364K1ZC
              </p>

              <p>
                <span className="text-yellow-500 font-semibold">
                  Email:
                </span>{" "}
                baharaspices@gmail.com
              </p>

              <p>
                <span className="text-yellow-500 font-semibold">
                  WhatsApp:
                </span>{" "}
                +91 759 4990 433
              </p>

              <p>
                <span className="text-yellow-500 font-semibold">
                  Address:
                </span>{" "}
                25/52F, Meleparambu, Pallikkal, Malappuram,
                Kerala - 673638
              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.section> 
  );
}

export default About;