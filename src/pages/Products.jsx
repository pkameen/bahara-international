import pepperImg from "../assets/spices/pepper.jpg";
import cardamomImg from "../assets/spices/cardamom.jpg";
import cashewImg from "../assets/spices/cashew.jpg";

function Products() {
  const products = [
    {
      image: cardamomImg,
      name: "Green Cardamom",
      description:
        "Carefully selected premium green cardamom ensuring freshness, aroma, and export excellence.",
    },
    
    {
      image: pepperImg,
      name: "Premium Black Pepper",
      description:
        "Export-grade Kerala black pepper with rich aroma, bold flavor, and superior international quality standards.",
    },

    {
      image: cashewImg,
      name: "Premium Cashew",
      description:
        "High-quality export cashew nuts processed under strict standards for freshness and premium taste.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] min-h-screen pt-36 pb-24 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
          Our Products
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
          Premium Export Products
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8 mb-20">
          Bahara International delivers premium export-quality
          spices sourced directly from trusted origins,
          maintaining freshness and global standards.
        </p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#171717] rounded-[35px] overflow-hidden border border-yellow-500/20 hover:scale-105 transition duration-500 shadow-2xl"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-8 text-left">

                <h2 className="text-2xl font-bold text-white">
                  {product.name}
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                  {product.description}
                </p>

                <a
                  href="https://wa.me/917594990433" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Inquiry Now
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;