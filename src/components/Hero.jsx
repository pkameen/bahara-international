import heroBg from "../assets/hero/hero.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; 

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Bahara Spices"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl">

        <p className="text-yellow-500 uppercase tracking-[5px] mb-4">
          Premium Indian Spices Exporter
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

          <TypeAnimation
            sequence={[
              "Trusted Global Spice Export Partner",
              2000,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-white"
          />

        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl leading-8">
          Exporting premium quality Pepper and Cardamom
          from Kerala to international markets with trust,
          quality and excellence.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#products"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            Explore Products
          </a>

          <a
            href="#contact"
            className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            Contact Us
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;