import { motion } from "framer-motion";
import aboutImage from "../assets/spices/about-spices.jpg";  

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-yellow-600 uppercase font-semibold tracking-[3px] mb-3">
            About Bahara International
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Premium Kerala Spices For The Global Market
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Bahara International is a trusted global spice export partner
            specializing in premium quality Pepper and Cardamom from Kerala,
            India. We focus on delivering high-quality spices to international
            markets with consistency, trust, and global standards.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-yellow-600">2+</h3>
              <p className="text-gray-600">Premium Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">5+</h3>
              <p className="text-gray-600">Export Markets</p>
            </div>
          </div>

          <a href="/about#management-team"
             className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            View Founders
          </a>
          
        </div>

        <div className="rounded-[30px] overflow-hidden shadow-2xl">
          <img
            src={aboutImage}
            alt="Bahara Premium Spices"
            className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </motion.section> 
  );
}

export default AboutSection;