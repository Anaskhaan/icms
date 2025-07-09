import g1 from "../../assets/images/g1.svg";
import g2 from "../../assets/images/g2.svg";
import g3 from "../../assets/images/hero1.svg";
import g4 from "../../assets/images/hero2.svg";
import g5 from "../../assets/images/g5.svg";
import g6 from "../../assets/images/g6.svg";
import g7 from "../../assets/images/g7.svg";
import g8 from "../../assets/images/g8.svg";
import g9 from "../../assets/images/g9.svg";
import g10 from "../../assets/images/g10.svg";

export function Gallery() {
  const galleryImages = [
    { id: 1, category: 'classroom', img: g1, alt: "Students learning in modern classroom" },
    { id: 2, category: 'sports', img: g2, alt: "Basketball match in school tournament" },
    { id: 3, category: 'events', img: g3, alt: "Annual day cultural performance" },
    { id: 4, category: 'lab', img: g4, alt: "Science experiment in chemistry lab" },
    { id: 5, category: 'classroom', img: g5, alt: "Teacher interacting with students" },
    { id: 6, category: 'campus', img: g6, alt: "Beautiful school campus view" },
    { id: 7, category: 'sports', img: g7, alt: "Students playing football" },
    { id: 8, category: 'events', img: g8, alt: "Prize distribution ceremony" },
    { id: 9, category: 'lab', img: g9, alt: "Robotics workshop session" },
    { id: 10, category: 'campus', img: g10, alt: "School library with students" },
  ];

  const categories = ['All', 'classroom', 'sports', 'events', 'lab', 'campus'];

  return (
    <section className="relative bg-light py-20 px-6 overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-light/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
            Campus Life
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
              Explore Our World
            </span>
          </h2>
          <p className="text-dark-light text-lg max-w-3xl mx-auto">
            Discover the vibrant moments that make ICMS School special
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-white border border-dark-light/10 hover:border-primary-dark transition-colors text-dark hover:text-primary-dark font-medium shadow-sm hover:shadow-md"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-500 ${
                index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-[16/9]' : ''
              }`}
            >
              {/* Actual Image */}
              <img 
                src={image.img} 
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {image.alt}
                  </h3>
                  <span className="inline-block bg-primary-dark text-white px-3 py-1 rounded-full text-xs font-medium">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}