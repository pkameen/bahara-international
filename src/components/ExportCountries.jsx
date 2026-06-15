function ExportCountries() {
  const countries = [
    "UAE",
    "USA",
    "Oman",
    "Qatar",
    "Kuwait",
    "Europe",
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-500 uppercase tracking-[4px] mb-3">
          Global Markets
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Exporting Across Global Markets
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          We proudly export premium Kerala spices to trusted
          international markets worldwide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-600/20 rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-yellow-500">
                {country}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExportCountries;