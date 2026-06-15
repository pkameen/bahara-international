import pepperImg from "../assets/spices/pepper.jpg";
import cardamomImg from "../assets/spices/cardamom.jpg";
import cashewImg from "../assets/spices/cashew.jpg";

function ProductsSection() {
  return (
    <section id="products" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-600 uppercase tracking-[4px] mb-3 font-semibold">
          Our Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Premium Export Quality Spices
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Cardamom */}
          <div className="rounded-[30px] overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition duration-300">

            <img
              src={cardamomImg}
              alt="Green Cardamom"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8 text-left">
              <h3 className="text-3xl font-bold text-black">
                Green Cardamom
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Premium Kerala cardamom carefully selected
                for export excellence and freshness.
              </p>
            </div>
          </div>

          {/* Pepper */}
          <div className="rounded-[30px] overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition duration-300">

            <img
              src={pepperImg}
              alt="Black Pepper"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8 text-left">
              <h3 className="text-3xl font-bold text-black">
                Black Pepper
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Premium export-grade Kerala black pepper with rich aroma
                and superior international quality.
              </p>
            </div>
          </div>

          {/* Cashew */}
          <div className="rounded-[30px] overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition duration-300">

            <img
              src={cashewImg}
              alt="Premium Cashew"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8 text-left">
              <h3 className="text-3xl font-bold text-black">
                Premium Cashew
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Premium export-quality cashew nuts carefully selected
                for freshness, rich taste, and international export standards.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductsSection;