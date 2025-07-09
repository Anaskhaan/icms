import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaAward, FaUsers, FaBookOpen } from 'react-icons/fa';
import one from "../../assets/images/hero1.svg";
import two from "../../assets/images/hero2.svg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroContent = [
    {
      image: one,
      title: "Excellence in Education",
      subtitle: "Nurturing Future Leaders",
      description: "Our comprehensive curriculum is designed to inspire creativity and critical thinking in a supportive learning environment.",
      stats: [
        { icon: <FaGraduationCap />, value: "98%", label: "Graduation Rate" },
        { icon: <FaAward />, value: "25+", label: "Academic Awards" }
      ]
    },
    {
      image: two,
      title: "Inclusive Community",
      subtitle: "Where Every Child Thrives",
      description: "We celebrate diversity and foster an inclusive environment that helps students develop confidence and social responsibility.",
      stats: [
        { icon: <FaUsers />, value: "50+", label: "Extracurricular Clubs" },
        { icon: <FaBookOpen />, value: "1:12", label: "Teacher Ratio" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="relative h-[80vh] min-h-[600px]">
        {heroContent.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-DEFAULT/80 to-dark-DEFAULT/30 z-10"></div>
            <img 
              src={slide.image} 
              alt="" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
     

      <div className="absolute inset-0 z-20 flex items-center">
  <div className="container mx-auto px-6">
    <div className="max-w-2xl bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/20 relative overflow-hidden">
      {/* Mirror glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 opacity-60 rounded-xl"></div>
      
      {/* Reflection animation */}
      <div className="absolute -inset-8 -rotate-45 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent animate-reflection"></div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-2">
          <span className="text-primary">{heroContent[activeSlide].title.split(' ')[0]}</span> {heroContent[activeSlide].title.split(' ').slice(1).join(' ')}
        </h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">{heroContent[activeSlide].subtitle}</h2>
        <p className="text-dark-light mb-6 text-lg">{heroContent[activeSlide].description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {heroContent[activeSlide].stats.map((stat, i) => (
            <div key={i} className="flex items-center bg-primary-light/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-primary mr-2">{stat.icon}</span>
              <span className="font-bold text-dark">{stat.value}</span>
              <span className="ml-1 text-dark-light">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button className="relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 group">
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button className="relative overflow-hidden bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setActiveSlide(prev => prev === 0 ? heroContent.length - 1 : prev - 1)}
        className="absolute left-4 top-1/2 z-30 bg-white/80 hover:bg-white text-primary-DEFAULT p-3 rounded-full shadow-lg transition-all duration-300 transform -translate-y-1/2"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button 
        onClick={() => setActiveSlide(prev => prev === heroContent.length - 1 ? 0 : prev + 1)}
        className="absolute right-4 top-1/2 z-30 bg-white/80 hover:bg-white text-primary-DEFAULT p-3 rounded-full shadow-lg transition-all duration-300 transform -translate-y-1/2"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-primary-DEFAULT w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* School Badge */}
      <div className="absolute right-8 bottom-8 z-30 hidden lg:block">
        <div className="bg-secondary-DEFAULT text-dark-DEFAULT p-4 rounded-full shadow-xl w-24 h-24 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold">25+</div>
            <div className="text-xs font-semibold">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;