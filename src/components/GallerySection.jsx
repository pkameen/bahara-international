import pepper from "../assets/gallery/pepper-gallery.jpg";
import cardamom from "../assets/gallery/cardamom-gallery.jpg";
import cashew from "../assets/gallery/cashew-gallery.jpg"; 

function GallerySection() {
  const galleryImages = [
    {
      image: cardamom,
      title: "Green Cardamom",
    },
    {
      image: pepper,
      title: "Premium Black Pepper",
    },
    {
      image: cashew,
      title: "Premium Cashew",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-3">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Premium Export Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] group relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default GallerySection;