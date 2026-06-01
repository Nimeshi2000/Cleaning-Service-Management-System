const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Gallery of Sparkle</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformative power of our professional cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src={src} 
                alt={`Cleaning Gallery ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-lg drop-shadow-md">
                  View Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
