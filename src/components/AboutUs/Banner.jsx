import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMicroscope, FaMedal, FaBookOpen } from 'react-icons/fa';

export function Banner() {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.innerHTML = '';
      for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        particle.style.backgroundColor = `hsla(${Math.random() * 60 + 200}, 80%, 70%, ${Math.random() * 0.3 + 0.2})`;
        particle.style.width = `${Math.random() * 10 + 3}px`;
        particle.style.height = particle.style.width;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `float-particle ${Math.random() * 25 + 15}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const features = [
    { icon: <FaGraduationCap />, title: "Academic Excellence", color: "text-primary" },
    { icon: <FaMicroscope />, title: "STEM Programs", color: "text-secondary" },
    { icon: <FaMedal />, title: "Sports Champions", color: "text-success" },
    { icon: <FaBookOpen />, title: "Literary Arts", color: "text-primary-dark" }
  ];

  return (
    <section className="relative h-screen min-h-[700px] bg-gradient-to-br from-dark to-dark-light overflow-hidden pt-12">
      {/* Cosmic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={particlesRef} className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/80 to-dark"></div>
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-full filter blur-[100px] animate-float-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center z-10 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-light/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-primary-light mb-8 shadow-lg"
              >
                The Future of Education
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  Igniting Young
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-light to-secondary-light">
                  Minds
                </span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-dark/80 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Where tradition meets innovation to cultivate tomorrow's leaders through holistic development and cutting-edge learning.
              </motion.p>

              {/* Feature Icons Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`bg-light/5 backdrop-blur-sm border border-light/10 rounded-xl p-4 text-center transition-all duration-300 ${feature.color}`}
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <p className="text-sm font-medium text-dark">{feature.title}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mt-12"
              >
                <button className="bg-primary hover:bg-primary-dark text-dark font-bold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span>Admissions Open</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <button className="bg-transparent border-2 border-light/30 hover:border-light/50 text-dark font-bold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow hover:shadow-md">
                  Explore Campus
                </button>
              </motion.div>
            </motion.div>

            {/* Interactive Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block h-[500px]"
            >
              {/* Floating orb with gradient */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full filter blur-[80px] animate-pulse-slow"></div>
              
              {/* Rotating feature elements */}
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className={`absolute text-4xl ${feature.color}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  style={{
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                  }}
                  animate={{
                    rotate: 360,
                    x: `calc(-50% + ${Math.cos(i * Math.PI/2) * 150}px)`,
                    y: `calc(-50% + ${Math.sin(i * Math.PI/2) * 150}px)`,
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    x: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                >
                  {feature.icon}
                </motion.div>
              ))}

              {/* Central glowing element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-light/5 rounded-full border-2 border-light/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-[20px] animate-pulse"></div>
                <span className="absolute text-dark text-lg font-bold">ICMS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dark/80 text-sm mb-2 flex items-center gap-1"
          >
            <span>Discover More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </motion.div>
          <div className="w-0.5 h-16 bg-gradient-to-t from-primary to-transparent"></div>
        </div>
      </motion.div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-100px) translateX(30px) rotate(180deg); opacity: 0.3; }
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}