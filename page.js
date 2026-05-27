export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Luxury Living Redefined
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
            Discover premium estates crafted for elegance,
            comfort, and modern architecture.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Properties
          </button>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="py-24 bg-zinc-900 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">
          Featured Properties
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore villas, penthouses, and ultra luxury homes
          located in the world’s most desirable destinations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

          <div className="bg-black rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury House"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Modern Villa
              </h3>

              <p className="text-gray-400">
                California, USA
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff"
              alt="Luxury Penthouse"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Sky Penthouse
              </h3>

              <p className="text-gray-400">
                Dubai, UAE
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Luxury Mansion"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Royal Mansion
              </h3>

              <p className="text-gray-400">
                London, UK
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 text-center px-6">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div>
            <h3 className="text-6xl font-bold">
              250+
            </h3>

            <p className="text-gray-400 mt-3">
              Luxury Homes
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold">
              98%
            </h3>

            <p className="text-gray-400 mt-3">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold">
              15+
            </h3>

            <p className="text-gray-400 mt-3">
              Years Experience
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-zinc-950 text-center px-6">
        <h2 className="text-5xl font-bold mb-10">
          What Clients Say
        </h2>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          “Absolutely incredible experience. The attention
          to detail, premium properties, and elite service
          exceeded every expectation.”
        </p>
      </section>

      {/* AGENTS */}
      <section className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold mb-14">
          Elite Agents
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Agent"
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />

            <h3 className="text-2xl font-bold">
              James Walker
            </h3>

            <p className="text-gray-400 mt-2">
              Luxury Property Expert
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Agent"
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />

            <h3 className="text-2xl font-bold">
              Sophia Reed
            </h3>

            <p className="text-gray-400 mt-2">
              Senior Real Estate Advisor
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="Agent"
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />

            <h3 className="text-2xl font-bold">
              Daniel Carter
            </h3>

            <p className="text-gray-400 mt-2">
              Global Property Consultant
            </p>
          </div>

        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 bg-zinc-900 text-center px-6">
        <h2 className="text-5xl font-bold mb-10">
          Premium Amenities
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="bg-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Infinity Pool
            </h3>
          </div>

          <div className="bg-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Smart Homes
            </h3>
          </div>

          <div className="bg-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Private Cinema
            </h3>
          </div>

          <div className="bg-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Luxury Spa
            </h3>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Luxury Estate. All rights reserved.
      </footer>

    </main>
  );
}